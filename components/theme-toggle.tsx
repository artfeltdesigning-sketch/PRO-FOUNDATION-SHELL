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

  const toggleTheme =
    () => {
      setTheme(
        isDark
          ? "light"
          : "dark"
      );
    };

  return (
    <button
      onClick={toggleTheme}
      className="glass"
      style={{
        width: 58,
        height: 58,
        border: "none",
        display: "flex",
        alignItems:
          "center",
        justifyContent:
          "center",
        borderRadius: 20,
        color:
          "var(--text)"
      }}
    >
      {isDark ? (
        <Sun size={22} />
      ) : (
        <Moon size={22} />
      )}
    </button>
  );
}
