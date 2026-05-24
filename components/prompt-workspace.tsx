"use client";

import { useEffect, useState } from "react";
import { Sparkles, Wand2 } from "lucide-react";
import Dropdown from "./dropdown";
import UploadZone from "./upload-zone";
import { decodeInstruction } from "../lib/ai-brain";

type Props = {
  mode: "image" | "motion";
  onGenerate: (output: string) => void;
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

const imageCameras = [
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

const motionCameras = [
  "Smooth Dolly Push",
  "Orbit Reveal",
  "FPV Flythrough",
  "Drone Pull Back",
  "Tracking Shot",
  "Crane Rise",
  "Parallax Move",
  "Steadicam Walk",
  "Gimbal Follow",
  "Helicopter Reveal"
];

const environments = [
  "Cloud Atmosphere",
  "Rain FX",
  "Fog Layer",
  "Smoke FX",
  "Luxury Interior",
  "Modern Exterior",
  "Sunset Sky",
  "Night City Glow"
];

const imageRatios = [
  "1:1",
  "4:5",
  "3:4",
  "16:9",
  "9:16",
  "21:9",
  "2:3",
  "3:2"
];

const motionRatios = [
  "16:9",
  "9:16",
  "1:1",
  "21:9",
  "4:5"
];

export default function PromptWorkspace({
  mode,
  onGenerate
}: Props) {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState(creativeStyles[0]);
  const [lut, setLut] = useState(luts[0]);
  const [lighting, setLighting] = useState(lightingOptions[0]);
  const [camera, setCamera] = useState(imageCameras[0]);
  const [environment, setEnvironment] = useState(environments[0]);
  const [ratio, setRatio] = useState(imageRatios[0]);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (mode === "motion") {
      setCamera(motionCameras[0]);
      setRatio(motionRatios[0]);
    } else {
      setCamera(imageCameras[0]);
      setRatio(imageRatios[0]);
    }
  }, [mode]);

  function handleGenerate() {
    const result = decodeInstruction({
      userInput: prompt,
      mode,
      style,
      lut,
      lighting,
      camera,
      environment,
      ratio,
      hasReference: !!file
    });

    onGenerate(result);
  }

  function handleReset() {
    setPrompt("");
    setStyle(creativeStyles[0]);
    setLut(luts[0]);
    setLighting(lightingOptions[0]);
    setEnvironment(environments[0]);
    setFile(null);

    if (mode === "motion") {
      setCamera(motionCameras[0]);
      setRatio(motionRatios[0]);
    } else {
      setCamera(imageCameras[0]);
      setRatio(imageRatios[0]);
    }

    onGenerate("");
  }

  const cameraOptions =
    mode === "motion"
      ? motionCameras
      : imageCameras;

  const ratioOptions =
    mode === "motion"
      ? motionRatios
      : imageRatios;

  return (
    <section className="workspace-shell glass">
      <div className="workspace-top">
        <div className="workspace-copy">
          <div className="workspace-title">
            Create With CTPRO.ai
          </div>

          <div className="muted workspace-subtitle">
            Transform ideas into premium production-ready AI creative output
          </div>
        </div>

        <button className="primary-chip workspace-mode-chip">
          <Sparkles size={16} />
          {mode === "motion"
            ? "Motion Production"
            : "Image Production"}
        </button>
      </div>

      <div className="glass-inner prompt-command">
        <textarea
          value={prompt}
          spellCheck={false}
          autoCorrect="off"
          onChange={(e) =>
            setPrompt(e.target.value)
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
          label={
            mode === "motion"
              ? "Motion Camera"
              : "Camera"
          }
          value={camera}
          options={cameraOptions}
          onChange={setCamera}
        />

        <Dropdown
          label="Environment Engine"
          value={environment}
          options={environments}
          onChange={setEnvironment}
        />

        <Dropdown
          label="Aspect Ratio"
          value={ratio}
          options={ratioOptions}
          onChange={setRatio}
        />
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
