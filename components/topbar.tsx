"use client";

import { Search, Bell, Command } from "lucide-react";

export default function Topbar() {
  return (
    <header className="glass topbar-shell">
      <div className="search-wrap">
        <Search size={18} />
        <input placeholder="Search prompts, presets, engines..." />
      </div>

      <div className="topbar-actions">
        <button className="icon-btn">
          <Command size={18} />
        </button>

        <button className="icon-btn">
          <Bell size={18} />
        </button>
      </div>
    </header>
  );
}
