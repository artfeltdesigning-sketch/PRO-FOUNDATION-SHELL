"use client";

import { ChevronDown } from "lucide-react";

type Props = {
  label: string;
  value: string;
  options: string[];
  onChange: (
    value: string
  ) => void;
};

export default function Dropdown({
  label,
  value,
  options,
  onChange
}: Props) {
  return (
    <div>
      <label
        style={{
          display: "block",
          marginBottom: 8,
          fontSize: 13,
          fontWeight: 600,
          color: "var(--muted)",
          letterSpacing: "0.02em"
        }}
      >
        {label}
      </label>

      <div
        style={{
          position: "relative"
        }}
      >
        <select
          className="premium-select"
          value={value}
          onChange={(e) =>
            onChange(
              e.target.value
            )
          }
        >
          {options.map(
            (item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            )
          )}
        </select>

        <ChevronDown
          size={18}
          style={{
            position:
              "absolute",
            right: 18,
            top: "50%",
            transform:
              "translateY(-50%)",
            pointerEvents:
              "none",
            color:
              "var(--muted)"
          }}
        />
      </div>
    </div>
  );
}
