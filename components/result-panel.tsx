"use client";

import { Copy } from "lucide-react";

type Props = {
  output: string;
};

export default function ResultPanel({
  output
}: Props) {
  const handleCopy =
    async () => {
      if (!output) return;

      await navigator.clipboard.writeText(
        output
      );
    };

  return (
    <aside className="glass output-shell">
      <div className="output-top">
        <div>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 600,
              letterSpacing:
                "-0.03em"
            }}
          >
            Prompt Output Console
          </h2>

          <p className="muted">
            Production-grade AI
            prompt generation
            output
          </p>
        </div>
      </div>

      <div className="output-content">
        {output ||
          "Generated AI prompt output will appear here after generation."}
      </div>

      <div className="workspace-actions">
        <button
          className="generate-btn"
          onClick={handleCopy}
        >
          <Copy size={18} />
          Copy Output
        </button>
      </div>
    </aside>
  );
}
