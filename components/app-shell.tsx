"use client";

import Sidebar from "./sidebar";
import PromptWorkspace from "./prompt-workspace";
import ResultPanel from "./result-panel";

export default function AppShell() {
  return (
    <main className="app-shell">
      <Sidebar />

      <PromptWorkspace />

      <ResultPanel />
    </main>
  );
}
