"use client";

import {
  Copy,
  PanelRightClose,
  PanelRightOpen
} from "lucide-react";
import { useState } from "react";

type Props = {
  output: string;
};

export default function ResultPanel({
  output
}: Props) {
  const [collapsed, setCollapsed] =
    useState(false);

  const copyOutput =
    async () => {
      if (!output) return;

      await navigator.clipboard.writeText(
        output
      );
    };

  return (
    <aside
      className={`glass output-shell ${
        collapsed
          ? "collapsed"
          : ""
      }`}
    >
      <div className="output-top">
        <div className="output-text">
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing:
                "-0.04em"
            }}
          >
            Prompt Output Console
          </div>

          <div className="muted output-sub">
            Production-grade AI
            prompt generation
            output
          </div>
        </div>

        <button
          onClick={() =>
            setCollapsed(
              !collapsed
            )
          }
          style={{
            width: 46,
            height: 46,
            borderRadius: 16,
            border: "none",
            background:
              "rgba(255,255,255,0.05)",
            color:
              "var(--text)",
            display: "flex",
            alignItems:
              "center",
            justifyContent:
              "center"
          }}
        >
          {collapsed ? (
            <PanelRightOpen
              size={20}
            />
          ) : (
            <PanelRightClose
              size={20}
            />
          )}
        </button>
      </div>

      {!collapsed && (
        <>
          <div className="output-content">
            {output ||
              "Generated premium AI prompt output will appear here after generation."}
          </div>

          <div className="workspace-actions output-copy">
            <button
              className="generate-btn"
              onClick={
                copyOutput
              }
            >
              <Copy size={18} />
              Copy Output
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
