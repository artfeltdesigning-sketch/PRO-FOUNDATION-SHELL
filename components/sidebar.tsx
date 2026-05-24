"use client";

import { useState } from "react";
import { Moon, Sun, PanelLeftClose, Sparkles, ImageIcon, Clapperboard, Camera } from "lucide-react";
import { useTheme } from "next-themes";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`glass sidebar-shell ${
        collapsed ? "collapsed" : ""
      }`}
    >
      <div className="sidebar-top">
        <div>
          <h1 className="brand">
            {collapsed ? "P" : "PROMPTER"}
          </h1>
          {!collapsed && (
            <p className="muted">
              AI Creative Director OS
            </p>
          )}
        </div>

        <button
          className="icon-btn"
          onClick={() =>
            setCollapsed(!collapsed)
          }
        >
          <PanelLeftClose size={18} />
        </button>
      </div>

      <div className="nav-list">
        <button className="nav-item active">
          <Sparkles size={18} />
          {!collapsed && <span>AI Brain</span>}
        </button>

        <button className="nav-item">
          <ImageIcon size={18} />
          {!collapsed && <span>Image Studio</span>}
        </button>

        <button className="nav-item">
          <Clapperboard size={18} />
          {!collapsed && <span>Motion Studio</span>}
        </button>

        <button className="nav-item">
          <Camera size={18} />
          {!collapsed && <span>Camera Engine</span>}
        </button>
      </div>

      <div className="theme-block">
        <button
          className="icon-btn"
          onClick={() =>
            setTheme(
              theme === "dark"
                ? "light"
                : "dark"
            )
          }
        >
          {theme === "dark" ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>
      </div>
    </aside>
  );
}
