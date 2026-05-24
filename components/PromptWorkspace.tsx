"use client";

import { Sparkles, Wand2, Upload, ChevronDown } from "lucide-react";

export default function PromptWorkspace() {
  return (
    <section className="glass workspace-shell">
      <div className="workspace-top">
        <div>
          <h2 className="workspace-title">
            Creative Workspace
          </h2>
          <p className="muted">
            AI decodes any language into cinematic prompts
          </p>
        </div>

        <button className="primary-chip">
          <Sparkles size={16} />
          AI Brain Active
        </button>
      </div>

      <div className="prompt-command glass-inner">
        <textarea
          placeholder="Describe anything in Hindi / Gujarati / English / mixed language..."
        />
      </div>

      <div className="controls-grid">
        <button className="premium-select">
          <span>Image AI</span>
          <ChevronDown size={16} />
        </button>

        <button className="premium-select">
          <span>Hollywood Blockbuster LUT</span>
          <ChevronDown size={16} />
        </button>

        <button className="premium-select">
          <span>Golden Hour Lighting</span>
          <ChevronDown size={16} />
        </button>

        <button className="premium-select">
          <span>Hero Shot Camera</span>
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="chips-row">
        <button className="tag-chip active">
          Cloud Sky
        </button>
        <button className="tag-chip">
          Rain
        </button>
        <button className="tag-chip">
          Fog
        </button>
        <button className="tag-chip">
          Smoke
        </button>
        <button className="tag-chip">
          Luxury Interior
        </button>
      </div>

      <div className="upload-zone">
        <Upload size={20} />
        <div>
          <strong>
            Reference Upload
          </strong>
          <p className="muted">
            Drag & drop reference image
          </p>
        </div>
      </div>

      <div className="workspace-actions">
        <button className="secondary-btn">
          Clear
        </button>

        <button className="generate-btn">
          <Wand2 size={18} />
          Generate Prompt
        </button>
      </div>
    </section>
  );
}
