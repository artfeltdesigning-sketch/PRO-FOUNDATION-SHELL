"use client";

import { useState } from "react";
import {
  Sparkles,
  Wand2,
  Upload,
  ChevronDown
} from "lucide-react";
import { decodeInstruction } from "../lib/ai-brain";

type Props = {
  onGenerate?: (output: string) => void;
};

export default function PromptWorkspace({
  onGenerate
}: Props) {
  const [prompt, setPrompt] = useState("");
  const [engine, setEngine] =
    useState("Image AI Engine");
  const [lut, setLut] =
    useState("Hollywood Blockbuster LUT");
  const [lighting, setLighting] =
    useState("Cinematic Lighting System");
  const [camera, setCamera] =
    useState("Camera Direction Engine");

  const [selectedChips, setSelectedChips] =
    useState<string[]>(["Cloud Atmosphere"]);

  const toggleChip = (chip: string) => {
    setSelectedChips((prev) =>
      prev.includes(chip)
        ? prev.filter((c) => c !== chip)
        : [...prev, chip]
    );
  };

  const generateOutput = () => {
    const aiOutput = decodeInstruction(
      `
PROMPT:
${prompt}

ENGINE:
${engine}

LOOK:
${lut}

LIGHTING:
${lighting}

CAMERA:
${camera}

ENVIRONMENT:
${selectedChips.join(", ")}
`
    );

    onGenerate?.(aiOutput);
  };

  const resetAll = () => {
    setPrompt("");
    setSelectedChips(["Cloud Atmosphere"]);
  };

  const chips = [
    "Cloud Atmosphere",
    "Rain FX",
    "Fog Layer",
    "Smoke FX",
    "Luxury Interior",
    "Modern Exterior"
  ];

  return (
    <section className="glass workspace-shell">
      <div className="workspace-top">
        <div>
          <h2 className="workspace-title">
            Creative Director Command Center
          </h2>

          <p className="muted">
            Transform creative intent into production-grade AI direction
          </p>
        </div>

        <button className="primary-chip">
          <Sparkles size={16} />
          Creative Intelligence Active
        </button>
      </div>

      <div className="prompt-command glass-inner">
        <textarea
          value={prompt}
          onChange={(e) =>
            setPrompt(e.target.value)
          }
          placeholder="Enter your creative brief, campaign objective, visual direction, or multilingual production intent..."
        />
      </div>

      <div className="controls-grid">
        <button className="premium-select">
          <span>{engine}</span>
          <ChevronDown size={16} />
        </button>

        <button className="premium-select">
          <span>{lut}</span>
          <ChevronDown size={16} />
        </button>

        <button className="premium-select">
          <span>{lighting}</span>
          <ChevronDown size={16} />
        </button>

        <button className="premium-select">
          <span>{camera}</span>
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="chips-row">
        {chips.map((chip) => (
          <button
            key={chip}
            className={`tag-chip ${
              selectedChips.includes(chip)
                ? "active"
                : ""
            }`}
            onClick={() =>
              toggleChip(chip)
            }
          >
            {chip}
          </button>
        ))}
      </div>

      <div className="upload-zone">
        <Upload size={20} />

        <div>
          <strong>
            Creative References
          </strong>

          <p className="muted">
            Drop moodboards, visuals, screenshots, or brand references
          </p>
        </div>
      </div>

      <div className="workspace-actions">
        <button
          className="secondary-btn"
          onClick={resetAll}
        >
          Reset Workspace
        </button>

        <button
          className="generate-btn"
          onClick={generateOutput}
        >
          <Wand2 size={18} />
          Generate Creative Intelligence
        </button>
      </div>
    </section>
  );
}
