"use client";

import { ChevronDown } from "lucide-react";

type Props = {
  label: string;
};

export default function Dropdown({
  label
}: Props) {
  return (
    <button className="premium-select">
      <span>{label}</span>
      <ChevronDown size={16} />
    </button>
  );
}
