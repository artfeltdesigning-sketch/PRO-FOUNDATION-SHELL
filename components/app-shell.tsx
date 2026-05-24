// components/app-shell.tsx

"use client";

import { useState } from "react";

import Sidebar from "./sidebar";
import PromptWorkspace from "./prompt-workspace";
import ResultPanel from "./result-panel";

export default function AppShell() {
  const [sidebarCollapsed] =
    useState(false);

  const [outputOpen, setOutputOpen] =
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
        setCollapsed={() => {}}
        mode={mode}
        setMode={setMode}
        onOpenOutput={() =>
          setOutputOpen(true)
        }
      />

      <PromptWorkspace
        mode={mode}
        onGenerate={setOutput}
      />

      <ResultPanel
        output={output}
        open={outputOpen}
        onClose={() =>
          setOutputOpen(false)
        }
      />
    </main>
  );
}
