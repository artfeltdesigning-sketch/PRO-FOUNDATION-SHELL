"use client";

import Sidebar from "./Sidebar";
import Topbar from "./topbar";
import PromptWorkspace from "./PromptWorkspace";
import ResultConsole from "./result-console";

export default function AppShell() {
  return (
    <main className="app-shell">
      <Sidebar />

      <div className="main-stack">
        <Topbar />
        <PromptWorkspace />
      </div>

      <ResultConsole />
    </main>
  );
}
