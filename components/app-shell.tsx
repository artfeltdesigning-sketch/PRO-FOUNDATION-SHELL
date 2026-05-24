"use client";

import { useState } from "react";

import Sidebar from "./sidebar";
import PromptWorkspace from "./prompt-workspace";
import ResultPanel from "./result-panel";

export default function AppShell() {
  const [collapsed, setCollapsed] =
    useState(false);

  const [mode, setMode] =
    useState<"image" | "motion">(
      "image"
    );

  const [output, setOutput] =
    useState("");

  const resetOutput = () => {
    setOutput("");
  };

  return (
    <main className="app-shell">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={
          setCollapsed
        }
        mode={mode}
        setMode={setMode}
      />

      <PromptWorkspace
        mode={mode}
        onGenerate={setOutput}
        onReset={resetOutput}
      />

      <ResultPanel
        output={output}
      />
    </main>
  );
}
