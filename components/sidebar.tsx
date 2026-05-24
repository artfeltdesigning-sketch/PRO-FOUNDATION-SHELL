"use client";

import { useState } from "react";
import {
  Sparkles,
  ImageIcon,
  Clapperboard,
  Camera
} from "lucide-react";
import ThemeToggle from "./theme-toggle";

export default function Sidebar() {
  const [collapsed, setCollapsed] =
    useState(false);

  return (
    <aside
      className={`glass sidebar-shell ${
        collapsed ? "collapsed" : ""
      }`}
      onClick={() =>
        setCollapsed(!collapsed)
      }
    >
      {/* BRAND */}
      <div className="sidebar-top">
        <div className="brand-wrap">
          <div className="brand-logo">
            P
          </div>

          {!collapsed && (
            <div className="brand-copy">
              <h1 className="brand">
                PROMPTER CT PRO
              </h1>

              <p className="muted">
                AI Creative Production OS
              </p>
            </div>
          )}
        </div>
      </div>

      {/* NAV */}
      <div className="nav-list">
        <button
          className="nav-item active"
          onClick={(e) =>
            e.stopPropagation()
          }
        >
          <Sparkles size={22} />
          {!collapsed && (
            <span>AI Brain</span>
          )}
        </button>

        <button
          className="nav-item"
          onClick={(e) =>
            e.stopPropagation()
          }
        >
          <ImageIcon size={22} />
          {!collapsed && (
            <span>Image Studio</span>
          )}
        </button>

        <button
          className="nav-item"
          onClick={(e) =>
            e.stopPropagation()
          }
        >
          <Clapperboard size={22} />
          {!collapsed && (
            <span>Motion Studio</span>
          )}
        </button>

        <button
          className="nav-item"
          onClick={(e) =>
            e.stopPropagation()
          }
        >
          <Camera size={22} />
          {!collapsed && (
            <span>Camera Engine</span>
          )}
        </button>
      </div>

      {/* THEME */}
      <div
        className="theme-block"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <ThemeToggle />
      </div>
    </aside>
  );
}
