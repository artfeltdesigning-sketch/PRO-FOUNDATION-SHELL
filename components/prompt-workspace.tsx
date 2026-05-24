"use client";

import { useState } from "react";
import {
  Sparkles,
  Wand2
} from "lucide-react";

import Dropdown from "./dropdown";
import UploadZone from "./upload-zone";
import { decodeInstruction } from "../lib/ai-brain";

type Props = {
  mode: "image" | "motion";
  onGenerate: (
    output: string
  ) => void;
  onReset: () => void;
};

const creativeStyles = [
  "Ultra Realistic Cinematic",
  "Luxury Commercial",
  "Architectural Editorial",
  "Hollywood Blockbuster",
  "Netflix Prestige",
  "Fashion Editorial",
  "Apple Commercial"
];

const luts = [
  "Netflix Contrast",
  "Hollywood Blockbuster",
  "Apple Commercial",
  "Luxury Real Estate",
  "Kodak Film",
  "Teal Orange",
  "Dune LUT",
  "Blade Runner LUT"
];

const lightingOptions = [
  "Golden Hour Cinematic",
  "Soft Natural Daylight",
  "Netflix Moody",
  "Blue Hour",
  "Sunset Orange",
  "Luxury Interior Warm",
  "Overcast Editorial",
  "Night Neon",
  "Volumetric God Rays"
];

const cameraOptions = [
  "Hero Shot",
  "Close Up",
  "Extreme Close Up",
  "Low Angle",
  "High Angle",
  "Wide Shot",
  "Ultra Wide",
  "Architectural Perspective",
  "Drone Top View",
  "Cinematic Orbit"
];

const chipItems = [
  "Cloud Atmosphere",
  "Rain FX",
  "Fog Layer",
  "Smoke FX",
  "Luxury Interior",
  "Modern Exterior"
];

export default function PromptWorkspace({
  mode,
  onGenerate,
  onReset
}: Props) {
  const [prompt, setPrompt] =
    useState("");

  const [style, setStyle] =
    useState(
      "Ultra Realistic Cinematic"
    );

  const [lut, setLut] =
    useState(
      "Hollywood Blockbuster"
    );

  const [lighting, setLighting] =
    useState(
      "Golden Hour Cinematic"
    );

  const [camera, setCamera] =
    useState("Hero Shot");

  const [file, setFile] =
    useState<File | null>(null);

  const [chips, setChips] =
    useState<string[]>([]);

  const toggleChip = (
    chip: string
  ) => {
    setChips((prev) =>
      prev.includes(chip)
        ? prev.filter(
            (x) => x !== chip
          )
        : [...prev, chip]
    );
  };

  const handleReset = () => {
    setPrompt("");
    setStyle(
      "Ultra Realistic Cinematic"
    );
    setLut(
      "Hollywood Blockbuster"
    );
    setLighting(
      "Golden Hour Cinematic"
    );
    setCamera("Hero Shot");
    setFile(null);
    setChips([]);
    onReset();
  };

  const handleGenerate = () => {
    const output =
      decodeInstruction({
        userInput: prompt,
        mode,
        style,
        lut,
        lighting,
        camera,
        chips,
        hasReference: !!file
      });

    onGenerate(output);
  };

  return (
    <section className="glass workspace-shell">
      <div className="workspace-top">
        <div>
          <h2 className="workspace-title">
            Creative Director
            Command Center
          </h2>

          <p className="muted">
            Transform raw ideas
            into premium AI
            production output
          </p>
        </div>

        <button className="primary-chip">
          <Sparkles size={16} />
          {mode === "image"
            ? "Image Mode"
            : "Motion Mode"}
        </button>
      </div>

      <div className="prompt-command glass-inner">
        <textarea
          value={prompt}
          onChange={(e) =>
            setPrompt(
              e.target.value
            )
          }
          placeholder="Describe your idea in Hindi, Gujarati, English, or mixed language..."
        />
      </div>

      <div className="controls-grid">
        <Dropdown
          label="Creative Style"
          value={style}
          options={creativeStyles}
          onChange={setStyle}
        />

        <Dropdown
          label="LUT"
          value={lut}
          options={luts}
          onChange={setLut}
        />

        <Dropdown
          label="Lighting"
          value={lighting}
          options={lightingOptions}
          onChange={setLighting}
        />

        <Dropdown
          label="Camera"
          value={camera}
          options={cameraOptions}
          onChange={setCamera}
        />
      </div>

      <div className="chips-row">
        {chipItems.map((chip) => (
          <button
            key={chip}
            className={`tag-chip ${
              chips.includes(chip)
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

      <UploadZone
        file={file}
        setFile={setFile}
      />

      <div className="workspace-actions">
        <button
          className="secondary-btn"
          onClick={handleReset}
        >
          Reset Workspace
        </button>

        <button
          className="generate-btn"
          onClick={handleGenerate}
        >
          <Wand2 size={18} />
          Generate Creative Intelligence
        </button>
      </div>
    </section>
  );
}
