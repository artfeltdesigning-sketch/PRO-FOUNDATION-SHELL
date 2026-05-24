"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import PromptWorkspace from "./prompt-workspace";
import ResultPanel from "./result-panel";

export default function AppShell() {
  const [output, setOutput] =
    useState("");

  return (
    <main className="app-shell">
      <Sidebar />

      <PromptWorkspace
        onGenerate={setOutput}
      />

      <ResultPanel output={output} />
    </main>
  );
}
