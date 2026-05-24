"use client";

import {
  Sparkles,
  Wand2,
  Upload,
  ChevronDown
} from "lucide-react";

export default function PromptWorkspace() {
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
          placeholder="Enter your creative brief, campaign objective, visual direction, or multilingual production intent..."
        />
      </div>

      <div className="controls-grid">
        <button className="premium-select">
          <span>Image AI Engine</span>
          <ChevronDown size={16} />
        </button>

        <button className="premium-select">
          <span>Hollywood Blockbuster LUT</span>
          <ChevronDown size={16} />
        </button>

        <button className="premium-select">
          <span>Cinematic Lighting System</span>
          <ChevronDown size={16} />
        </button>

        <button className="premium-select">
          <span>Camera Direction Engine</span>
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="chips-row">
        <button className="tag-chip active">
          Cloud Atmosphere
        </button>

        <button className="tag-chip">
          Rain FX
        </button>

        <button className="tag-chip">
          Fog Layer
        </button>

        <button className="tag-chip">
          Smoke FX
        </button>

        <button className="tag-chip">
          Luxury Interior
        </button>

        <button className="tag-chip">
          Modern Exterior
        </button>
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
        <button className="secondary-btn">
          Reset Workspace
        </button>

        <button className="generate-btn">
          <Wand2 size={18} />
          Generate Creative Intelligence
        </button>
      </div>
    </section>
  );
}
