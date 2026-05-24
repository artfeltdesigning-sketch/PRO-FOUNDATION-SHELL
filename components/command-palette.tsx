"use client";

import { Command } from "lucide-react";

export default function CommandPalette() {
  return (
    <button className="command-btn">
      <Command size={16} />
      <span>Command</span>
      <kbd>⌘K</kbd>
    </button>
  );
}
