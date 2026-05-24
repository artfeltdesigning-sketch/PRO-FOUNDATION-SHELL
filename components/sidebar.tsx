"use client";

import {
  Sparkles,
  ImageIcon,
  Clapperboard
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
};

export default function Sidebar({
  collapsed,
  setCollapsed,
  mode,
  setMode
}: Props) {
  return (
    <aside
      className={`sidebar-shell glass ${
        collapsed
          ? "collapsed"
          : ""
      }`}
    >
      <div
        className="edge-toggle edge-left"
        onClick={() =>
          setCollapsed(
            !collapsed
          )
        }
      />

      <div className="brand-row">
        <div className="brand-icon">
          CT
        </div>

        {!collapsed && (
          <div className="brand-copy">
            <div className="brand-title">
              CTPRO.ai
            </div>

            <div className="brand-sub">
              AI Creative
              Production OS
            </div>
          </div>
        )}
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
          <Sparkles />
          {!collapsed && (
            <span>AI Brain</span>
          )}
        </button>

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
          {!collapsed && (
            <span>
              Image Studio
            </span>
          )}
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
          {!collapsed && (
            <span>
              Motion Studio
            </span>
          )}
        </button>
      </div>

      <div className="theme-block">
        <ThemeToggle />
      </div>
    </aside>
  );
}
