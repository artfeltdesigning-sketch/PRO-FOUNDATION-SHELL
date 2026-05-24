"use client";

import { Bell, Search } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import CommandPalette from "./command-palette";

export default function Topbar() {
  return (
    <header className="glass topbar-shell">
      <div className="search-wrap">
        <Search size={18} />
        <input
          placeholder="Search prompts, presets, cinematic engines..."
        />
      </div>

      <div className="topbar-actions">
        <CommandPalette />
        <ThemeToggle />

        <button className="icon-btn">
          <Bell size={18} />
        </button>
      </div>
    </header>
  );
}
