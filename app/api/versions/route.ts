import { NextResponse } from "next/server";

// Shape of one version entry
type VersionEntry = {
  id: string;
  timestamp: string;
  addedWords: string[];
  removedWords: string[];
  oldLength: number;
  newLength: number;
};

// Global in-memory store (survives across requests while server is running)
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
  try {
    const body = await request.json();
    const newText =
      typeof body.text === "string" ? body.text : "";

    const oldText = store.lastText || "";

    // Split into words
    const oldWords = oldText.split(/\s+/).filter(Boolean);
    const newWords = newText.split(/\s+/).filter(Boolean);

    const oldSet = new Set(oldWords);
    const newSet = new Set(newWords);

    // Added & removed words
    const addedWords = newWords.filter((w) => !oldSet.has(w));
    const removedWords = oldWords.filter((w) => !newSet.has(w));

    const entry: VersionEntry = {
      // use global crypto, no import from "crypto"
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString().replace("T", " ").slice(0, 16),
      addedWords,
      removedWords,
      oldLength: oldText.length,
      newLength: newText.length,
    };

    // Save version
    store.versions.push(entry);
    store.lastText = newText;

    return NextResponse.json(entry, { status: 200 });
  } catch (err) {
    console.error("Error in POST /api/save-version:", err);
    return NextResponse.json(
      { error: "Internal error in save-version" },
      { status: 500 },
    );
  }
}
