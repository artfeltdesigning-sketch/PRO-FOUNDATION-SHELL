"use client";

import { useState } from "react";
import {
  Copy,
  Download,
  Minimize2,
  Maximize2
} from "lucide-react";

export default function ResultPanel() {
  const [collapsed, setCollapsed] =
    useState(false);

  return (
    <aside
      className={`glass output-shell ${
        collapsed ? "mini-output" : ""
      }`}
    >
      <div className="output-top">
        <div>
          {!collapsed && (
            <>
              <h2>AI Output Console</h2>
              <p className="muted">
                Production-grade prompt engine
              </p>
            </>
          )}
        </div>

        <button
          className="icon-btn"
          onClick={() =>
            setCollapsed(!collapsed)
          }
        >
          {collapsed ? (
            <Maximize2 size={18} />
          ) : (
            <Minimize2 size={18} />
          )}
        </button>
      </div>

      {!collapsed && (
        <>
          <textarea
            placeholder="AI cinematic prompt output will appear here..."
            readOnly
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
        </>
      )}
    </aside>
  );
}
