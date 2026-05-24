"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } =
    useTheme();

  const isDark =
    theme === "dark";

  return (
    <button
      onClick={() =>
        setTheme(
          isDark
            ? "light"
            : "dark"
        )
      }
      className="theme-toggle"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}
