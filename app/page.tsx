"use client";

import { useState } from "react";
import Landing from "../components/landing";
import AppShell from "../components/app-shell";

export default function Home() {
  const [entered, setEntered] =
    useState(false);

  return entered ? (
    <AppShell />
  ) : (
    <Landing
      onEnter={() =>
        setEntered(true)
      }
    />
  );
}
