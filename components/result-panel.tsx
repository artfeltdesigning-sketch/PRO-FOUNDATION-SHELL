"use client";

import {
  Copy,
  Download,
  Sparkles
} from "lucide-react";

export default function ResultPanel() {
  return (
    <aside className="glass output-shell">
      <div className="output-top">
        <div>
          <h2 className="workspace-title" style={{ fontSize: "28px" }}>
            Creative Intelligence Console
          </h2>

          <p className="muted">
            Real-time production-grade AI generation output
          </p>
        </div>

        <button className="primary-chip">
          <Sparkles size={16} />
          Live Engine
        </button>
      </div>

      <textarea
        readOnly
        placeholder="Structured prompt intelligence will appear here after generation..."
      />

      <div className="workspace-actions">
        <button className="secondary-btn">
          <Copy size={16} />
          Copy Output
        </button>

        <button className="generate-btn">
          <Download size={16} />
          Export Output
        </button>
      </div>
    </aside>
  );
}
