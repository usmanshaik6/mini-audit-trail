import { NextResponse } from "next/server";

type VersionEntry = {
  id: string;
  timestamp: string;
  addedWords: string[];
  removedWords: string[];
  oldLength: number;
  newLength: number;
};

// Use same global store logic
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

export async function GET() {
  return NextResponse.json(store.versions);
}
