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
        collapsed ? "collapsed" : ""
      }`}
    >
      {/* MOBILE TOP NAV */}
      <div className="mobile-top-nav">
        <div className="mobile-brand">
          <div className="brand-icon">
            CT
          </div>

          <div className="mobile-brand-copy">
            <div className="brand-title">
              CTPRO.ai
            </div>
          </div>
        </div>

        <div className="mobile-mode-toggle">
          <button
            className={
              mode === "image"
                ? "active"
                : ""
            }
            onClick={() =>
              setMode("image")
            }
          >
            <ImageIcon size={18} />
            Image
          </button>

          <button
            className={
              mode === "motion"
                ? "active"
                : ""
            }
            onClick={() =>
              setMode("motion")
            }
          >
            <Clapperboard size={18} />
            Motion
          </button>
        </div>

        <div className="mobile-actions">
          <ThemeToggle />

          <button
            className="mobile-output-btn"
            onClick={onOpenOutput}
          >
            <PanelRightOpen size={18} />
          </button>
        </div>
      </div>

      {/* DESKTOP SIDEBAR */}
      <div className="desktop-sidebar">
        <div className="brand-row">
          <div className="brand-icon">
            CT
          </div>

          <div className="brand-copy">
            <div className="brand-title">
              CTPRO.ai
            </div>

            <div className="brand-sub">
              AI Creative Production OS
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
            <span>
              Image Studio
            </span>
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
            <span>
              Motion Studio
            </span>
          </button>
        </div>

        <div className="theme-block">
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
