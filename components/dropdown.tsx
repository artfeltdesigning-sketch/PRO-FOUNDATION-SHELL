"use client";

import {
  ChevronDown,
  Check
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState
} from "react";

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
  const [open, setOpen] =
    useState(false);

  const wrapperRef =
    useRef<HTMLDivElement>(
      null
    );

  useEffect(() => {
    function handleClick(
      e: MouseEvent
    ) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(
          e.target as Node
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClick
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative"
      }}
    >
      <label
        style={{
          display: "block",
          marginBottom: 10,
          fontSize: 13,
          fontWeight: 600,
          color:
            "var(--text-secondary)"
        }}
      >
        {label}
      </label>

      <button
        type="button"
        className="premium-select"
        onClick={() =>
          setOpen(!open)
        }
        style={{
          width: "100%",
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center"
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: 15
          }}
        >
          {value}
        </span>

        <ChevronDown
          size={18}
          style={{
            transform: open
              ? "rotate(180deg)"
              : "rotate(0deg)",
            transition:
              "0.2s ease"
          }}
        />
      </button>

      {open && (
        <div
          className="glass"
          style={{
            position:
              "absolute",
            top: "calc(100% + 10px)",
            left: 0,
            width: "100%",
            borderRadius: 20,
            padding: 10,
            zIndex: 999
          }}
        >
          <div
            style={{
              maxHeight: 260,
              overflowY:
                "auto",
              display: "flex",
              flexDirection:
                "column",
              gap: 6
            }}
          >
            {options.map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(
                      option
                    );
                    setOpen(
                      false
                    );
                  }}
                  style={{
                    height: 50,
                    border:
                      "none",
                    borderRadius: 14,
                    background:
                      value ===
                      option
                        ? "rgba(124,92,255,0.14)"
                        : "transparent",
                    color:
                      "var(--text)",
                    display:
                      "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "space-between",
                    padding:
                      "0 14px",
                    fontWeight: 600
                  }}
                >
                  <span>
                    {option}
                  </span>

                  {value ===
                    option && (
                    <Check
                      size={16}
                    />
                  )}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
