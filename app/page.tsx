"use client";

import { useState, useEffect } from "react";

// Type of one version entry
type Version = {
  id: string;
  timestamp: string;
  addedWords: string[];
  removedWords: string[];
  oldLength: number;
  newLength: number;
};

export default function Home() {
  const [text, setText] = useState("");
  const [versions, setVersions] = useState<Version[]>([]);

  // Load existing versions (GET API) when page first opens
  useEffect(() => {
    async function loadVersions() {
      try {
        const res = await fetch("/api/versions");
        // ❌ don't throw, just log if it fails
        if (!res.ok) {
          console.warn("Could not load versions, status:", res.status);
          return;
        }
        const data = await res.json();
        setVersions(data);
      } catch (error) {
        console.error("Error fetching versions:", error);
      }
    }
    loadVersions();
  }, []); // empty array means run once

  // When user clicks "Save Version"
  async function handleSave() {
    if (!text.trim()) {
      alert("Please type something first.");
      return;
    }

    try {
      const res = await fetch("/api/save-version", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) {
        console.error("Save failed with status:", res.status);
        alert("Save failed");
        return;
      }

      const newVersion: Version = await res.json();

      // Add version to UI
      setVersions((prev) => [...prev, newVersion]);

      alert("Version saved!");
    } catch (error) {
      console.error("Error saving version:", error);
      alert("Something went wrong");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "Arial",
        background: "#f4f4f5",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "1rem" }}>
        Mini Audit Trail Generator
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "1.5rem",
        }}
      >
        {/* Content Editor */}
        <div
          style={{
            background: "white",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h2>Content Editor</h2>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={10}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            placeholder="Type here..."
          />
          <button
            onClick={handleSave}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Save Version
          </button>
        </div>

        {/* Version History */}
        <div
          style={{
            background: "white",
            padding: "1rem",
            borderRadius: "8px",
            maxHeight: "70vh",
            overflowY: "auto",
          }}
        >
          <h2>Version History</h2>
          {versions.length === 0 ? (
            <p>No versions yet</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {versions.map((v) => (
                <li
                  key={v.id}
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "8px 0",
                    fontSize: "14px",
                  }}
                >
                  <div>
                    <strong>🕒 {v.timestamp}</strong>
                  </div>
                  <div>
                    ➕ <b>Added:</b> {v.addedWords.join(", ") || "None"}
                  </div>
                  <div>
                    ➖ <b>Removed:</b>{" "}
                    {v.removedWords.join(", ") || "None"}
                  </div>
                  <div>
                    📏 <b>Length:</b> {v.oldLength} → {v.newLength}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
