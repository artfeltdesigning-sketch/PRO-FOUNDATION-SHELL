"use client";

import Sidebar from "./sidebar";
import Topbar from "./topbar";
import PromptWorkspace from "./prompt-workspace";
import ResultConsole from "./result-console";

export default function AppShell() {
  return (
    <main className="app-shell">
      <Sidebar />

      <section className="main-stack">
        <Topbar />
        <PromptWorkspace />
      </section>

      <ResultConsole />
    </main>
  );
}
