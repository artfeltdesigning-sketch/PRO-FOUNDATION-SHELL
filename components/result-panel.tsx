// components/result-panel.tsx

"use client";

import {
  Copy,
  X
} from "lucide-react";

type Props = {
  output: string;
  open: boolean;
  onClose: () => void;
};

export default function ResultPanel({
  output,
  open,
  onClose
}: Props) {
  async function copyOutput() {
    if (!output) return;

    await navigator.clipboard.writeText(
      output
    );
  }

  return (
    <aside
      className={`output-shell glass ${
        open ? "open" : ""
      }`}
    >
      <div className="output-top">
        <div>
          <h2>
            Prompt Output
          </h2>

          <div className="muted">
            Production-ready AI
            prompt output
          </div>
        </div>

        <button
          className="secondary-btn"
          onClick={onClose}
        >
          <X size={18} />
        </button>
      </div>

      <div className="output-content">
        {output ||
          "Generated premium AI prompt output will appear here after generation."}
      </div>

      <div className="workspace-actions">
        <button
          className="generate-btn"
          onClick={copyOutput}
        >
          <Copy size={18} />
          Copy Output
        </button>
      </div>
    </aside>
  );
}
