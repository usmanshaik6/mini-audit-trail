import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

type VersionEntry = {
  id: string;
  timestamp: string;
  addedWords: string[];
  removedWords: string[];
  oldLength: number;
  newLength: number;
};

const g = globalThis as any;

if (!g.auditStore) {
  g.auditStore = {
    lastText: "",
    versions: [] as VersionEntry[],
  };
}

const store = g.auditStore as {
  lastText: string;
  versions: VersionEntry[];
};

export async function POST(request: Request) {
  const body = await request.json();
  const newText =
    typeof body.text === "string" ? body.text : "";

  const oldText = store.lastText || "";

  const oldWords = oldText.split(/\s+/).filter(Boolean);
  const newWords = newText.split(/\s+/).filter(Boolean);

  const oldSet = new Set(oldWords);
  const newSet = new Set(newWords);

  const addedWords = newWords.filter((w: string) => !oldSet.has(w));
  const removedWords = oldWords.filter((w: string) => !newSet.has(w));

  const entry: VersionEntry = {
    id: randomUUID(),
    timestamp: new Date().toISOString().replace("T", " ").slice(0, 16),
    addedWords,
    removedWords,
    oldLength: oldText.length,
    newLength: newText.length,
  };

  store.versions.push(entry);
  store.lastText = newText;

  return NextResponse.json(entry);
}
