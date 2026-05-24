"use client";

import { Upload } from "lucide-react";

export default function UploadZone() {
  return (
    <div className="upload-zone">
      <Upload size={20} />

      <div>
        <strong>
          Reference Upload
        </strong>

        <p className="muted">
          Drag & drop image reference
        </p>
      </div>
    </div>
  );
}
