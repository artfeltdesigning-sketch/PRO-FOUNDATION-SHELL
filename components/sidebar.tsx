// components/sidebar.tsx

"use client";

import {
  ImageIcon,
  Clapperboard,
  PanelRightOpen
} from "lucide-react";

import ThemeToggle from "./theme-toggle";

type Props = {
  collapsed: boolean;
  setCollapsed: (
    value: boolean
  ) => void;
  mode: "image" | "motion";
  setMode: (
    mode: "image" | "motion"
  ) => void;
  onOpenOutput: () => void;
};

export default function Sidebar({
  collapsed,
  setCollapsed,
  mode,
  setMode,
  onOpenOutput
}: Props) {
  return (
    <aside
      className={`sidebar-shell glass ${
        collapsed
          ? "collapsed"
          : ""
      }`}
    >
      <div className="brand-row">
        <div className="brand-icon">
          CT
        </div>

        <div className="brand-copy">
          <div className="brand-title">
            CTPRO.ai
          </div>

          <div className="brand-sub">
            AI Creative
            Production OS
          </div>
        </div>
      </div>

      <div className="nav-list">
        <button
          className={`nav-item ${
            mode === "image"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setMode("image")
          }
        >
          <ImageIcon />
          <span>Image</span>
        </button>

        <button
          className={`nav-item ${
            mode === "motion"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setMode("motion")
          }
        >
          <Clapperboard />
          <span>Motion</span>
        </button>
      </div>

      <div className="theme-block">
        <ThemeToggle />
      </div>

      <button
        className="mobile-output-btn"
        onClick={onOpenOutput}
      >
        <PanelRightOpen />
      </button>
    </aside>
  );
}
