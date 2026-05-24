"use client";

import {
  Moon,
  Sun
} from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const {
    theme,
    setTheme
  } = useTheme();

  const isDark =
    theme === "dark";

  return (
    <div
      className="glass"
      style={{
        borderRadius: 20,
        padding: 8,
        display: "flex",
        gap: 8
      }}
    >
      <button
        onClick={() =>
          setTheme("light")
        }
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          border: "none",
          background:
            !isDark
              ? "linear-gradient(135deg, var(--accent), var(--accent-2))"
              : "transparent",
          color:
            !isDark
              ? "white"
              : "var(--text)"
        }}
      >
        <Sun size={20} />
      </button>

      <button
        onClick={() =>
          setTheme("dark")
        }
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          border: "none",
          background:
            isDark
              ? "linear-gradient(135deg, var(--accent), var(--accent-2))"
              : "transparent",
          color:
            isDark
              ? "white"
              : "var(--text)"
        }}
      >
        <Moon size={20} />
      </button>
    </div>
  );
}
