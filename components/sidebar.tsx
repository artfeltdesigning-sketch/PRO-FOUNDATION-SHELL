"use client";

import {
  Sparkles,
  ImageIcon,
  Clapperboard
} from "lucide-react";

import ThemeToggle from "./theme-toggle";

type Props = {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  mode: "image" | "motion";
  setMode: (mode: "image" | "motion") => void;
};

export default function Sidebar({
  collapsed,
  setCollapsed,
  mode,
  setMode
}: Props) {
  return (
    <aside
      className={`glass sidebar-shell ${
        collapsed ? "collapsed" : ""
      }`}
      onClick={() => collapsed && setCollapsed(false)}
    >
      <div className="sidebar-top">
        <div className="brand-row">
          <div className="brand-icon">
            CT
          </div>

          {!collapsed && (
            <div className="brand-copy">
              <h1 className="brand-title">
                CTPRO.ai
              </h1>

              <p className="brand-sub">
                AI Creative Production OS
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="nav-list">
        <button
          className={`nav-item ${
            mode === "image"
              ? "active"
              : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setMode("image");
          }}
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
          onClick={(e) => {
            e.stopPropagation();
            setMode("image");
          }}
        >
          <ImageIcon />
          {!collapsed && (
            <span>Image Studio</span>
          )}
        </button>

        <button
          className={`nav-item ${
            mode === "motion"
              ? "active"
              : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setMode("motion");
          }}
        >
          <Clapperboard />
          {!collapsed && (
            <span>Motion Studio</span>
          )}
        </button>
      </div>

      <div className="theme-block">
        <ThemeToggle />
      </div>
    </aside>
  );
}
