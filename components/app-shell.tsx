"use client";

import Sidebar from "./Sidebar";
import PromptWorkspace from "./PromptWorkspace";
import ResultPanel from "./ResultPanel";

export default function AppShell() {
  return (
    <main className="app-shell">
      <Sidebar />
      <PromptWorkspace />
      <ResultPanel />
    </main>
  );
}
