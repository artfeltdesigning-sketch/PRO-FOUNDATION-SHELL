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
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          color:
            "var(--muted)",
          marginBottom: 10
        }}
      >
        {label}
      </div>

      <button
        type="button"
        onClick={() =>
          setOpen(!open)
        }
        className="glass"
        style={{
          width: "100%",
          minHeight: 64,
          padding:
            "0 18px",
          border: "none",
          display: "flex",
          alignItems:
            "center",
          justifyContent:
            "space-between",
          borderRadius: 22,
          color:
            "var(--text)"
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 600
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
              "0.25s ease"
          }}
        />
      </button>

      {open && (
        <div
          className="glass"
          style={{
            position:
              "absolute",
            top: "calc(100% + 12px)",
            left: 0,
            width: "100%",
            zIndex: 9999,
            padding: 10,
            borderRadius: 24,
            background:
              "var(--panel-strong)",
            boxShadow:
              "0 20px 60px rgba(124,92,255,0.18)"
          }}
        >
          <div
            style={{
              maxHeight: 280,
              overflowY:
                "auto",
              display: "flex",
              flexDirection:
                "column",
              gap: 6
            }}
          >
            {options.map(
              (option) => {
                const active =
                  option ===
                  value;

                return (
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
                      minHeight: 52,
                      border:
                        "none",
                      borderRadius: 18,
                      padding:
                        "0 16px",
                      display:
                        "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "space-between",
                      background:
                        active
                          ? "rgba(124,92,255,0.16)"
                          : "transparent",
                      color:
                        "var(--text)",
                      fontWeight: 600,
                      fontSize: 14
                    }}
                  >
                    <span>
                      {option}
                    </span>

                    {active && (
                      <Check
                        size={16}
                      />
                    )}
                  </button>
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
}
