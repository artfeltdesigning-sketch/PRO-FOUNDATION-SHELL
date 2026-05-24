"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-toggle-wrap">
      <button
        className={`theme-pill ${
          theme === "light" ? "active" : ""
        }`}
        onClick={() => setTheme("light")}
      >
        <Sun size={18} />
      </button>

      <button
        className={`theme-pill ${
          theme === "dark" ? "active" : ""
        }`}
        onClick={() => setTheme("dark")}
      >
        <Moon size={18} />
      </button>
    </div>
  );
}
