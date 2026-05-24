"use client";

import {
  Copy,
  Download,
  Sparkles
} from "lucide-react";

type Props = {
  output?: string;
};

export default function ResultPanel({
  output
}: Props) {
  const copyOutput = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  return (
    <aside className="glass output-shell">
      <div className="output-top">
        <div>
          <h2
            className="workspace-title"
            style={{ fontSize: "28px" }}
          >
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
        value={output || ""}
        placeholder="Structured prompt intelligence will appear here after generation..."
      />

      <div className="workspace-actions">
        <button
          className="secondary-btn"
          onClick={copyOutput}
        >
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
