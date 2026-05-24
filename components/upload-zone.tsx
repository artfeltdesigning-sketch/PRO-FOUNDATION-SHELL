"use client";

import { Upload, X } from "lucide-react";
import { useRef } from "react";

type Props = {
  file: File | null;
  setFile: (
    file: File | null
  ) => void;
};

export default function UploadZone({
  file,
  setFile
}: Props) {
  const inputRef =
    useRef<HTMLInputElement>(
      null
    );

  const handleFile = (
    selected: File | null
  ) => {
    if (
      selected &&
      selected.type.startsWith(
        "image/"
      )
    ) {
      setFile(selected);
    }
  };

  return (
    <div
      className="upload-zone"
      onDragOver={(e) =>
        e.preventDefault()
      }
      onDrop={(e) => {
        e.preventDefault();

        const dropped =
          e.dataTransfer
            .files?.[0];

        handleFile(dropped);
      }}
      onClick={() =>
        inputRef.current?.click()
      }
      style={{
        cursor: "pointer"
      }}
    >
      {!file ? (
        <div
          style={{
            display: "flex",
            alignItems:
              "center",
            gap: 16
          }}
        >
          <Upload size={24} />

          <div>
            <strong
              style={{
                fontSize: 16,
                fontWeight: 600
              }}
            >
              Creative References
            </strong>

            <p className="muted">
              Drag & drop or click
              to upload moodboards,
              screenshots,
              brand references
            </p>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems:
              "center",
            width: "100%"
          }}
        >
          <div>
            <strong
              style={{
                fontSize: 16
              }}
            >
              Attached File
            </strong>

            <p className="muted">
              {file.name}
            </p>
          </div>

          <button
            className="secondary-btn"
            onClick={(e) => {
              e.stopPropagation();
              setFile(null);
            }}
          >
            <X size={16} />
            Remove
          </button>
        </div>
      )}

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={(e) =>
          handleFile(
            e.target.files?.[0] ||
              null
          )
        }
      />
    </div>
  );
}
