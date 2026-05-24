"use client";

import Sidebar from "../components/Sidebar";
import PromptWorkspace from "../components/PromptWorkspace";
import ResultPanel from "../components/ResultPanel";

export default function Home() {
  return (
    <main className="app-shell">
      <Sidebar />
      <PromptWorkspace />
      <ResultPanel />
    </main>
  );
}
