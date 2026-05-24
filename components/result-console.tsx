"use client";

import { Copy, Download } from "lucide-react";

export default function ResultConsole() {
  return (
    <aside className="glass output-shell">
      <div className="output-top">
        <div>
          <h2>AI Output Console</h2>
          <p className="muted">
            Production-grade prompt output
          </p>
        </div>
      </div>

      <textarea
        readOnly
        placeholder="AI generated premium cinematic prompt..."
      />

      <div className="workspace-actions">
        <button className="secondary-btn">
          <Copy size={16} />
          Copy
        </button>

        <button className="generate-btn">
          <Download size={16} />
          Export
        </button>
      </div>
    </aside>
  );
}
