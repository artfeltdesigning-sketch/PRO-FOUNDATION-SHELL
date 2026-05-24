"use client";

import {
  Sparkles,
  ImageIcon,
  Clapperboard,
  PanelLeftClose,
  PanelLeftOpen
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
      className={`glass sidebar-shell ${
        collapsed
          ? "collapsed"
          : ""
      }`}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center"
        }}
      >
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
            <PanelLeftOpen
              size={20}
            />
          ) : (
            <PanelLeftClose
              size={20}
            />
          )}
        </button>
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
