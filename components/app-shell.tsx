"use client";

import { useState } from "react";

import Sidebar from "./sidebar";
import PromptWorkspace from "./prompt-workspace";
import ResultPanel from "./result-panel";

export default function AppShell() {
  const [sidebarCollapsed, setSidebarCollapsed] =
    useState(false);

  const [outputCollapsed, setOutputCollapsed] =
    useState(false);

  const [mode, setMode] =
    useState<"image" | "motion">(
      "image"
    );

  const [output, setOutput] =
    useState("");

  return (
    <main className="app-shell">
      <Sidebar
        collapsed={
          sidebarCollapsed
        }
        setCollapsed={
          setSidebarCollapsed
        }
        mode={mode}
        setMode={setMode}
      />

      <PromptWorkspace
        mode={mode}
        onGenerate={setOutput}
      />

      <ResultPanel
        output={output}
        collapsed={
          outputCollapsed
        }
        setCollapsed={
          setOutputCollapsed
        }
      />
    </main>
  );
}
