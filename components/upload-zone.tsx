"use client";

import {
  UploadCloud,
  X
} from "lucide-react";
import {
  useRef,
  useState
} from "react";

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

  const [dragging, setDragging] =
    useState(false);

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
      onClick={() =>
        !file &&
        inputRef.current?.click()
      }
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() =>
        setDragging(false)
      }
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);

        const dropped =
          e.dataTransfer
            .files?.[0];

        handleFile(dropped);
      }}
      style={{
        cursor: "pointer",
        borderColor:
          dragging
            ? "rgba(124,92,255,0.45)"
            : undefined,
        background:
          dragging
            ? "rgba(124,92,255,0.06)"
            : undefined
      }}
    >
      {!file ? (
        <div
          style={{
            display: "flex",
            alignItems:
              "center",
            gap: 18
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 18,
              display: "flex",
              alignItems:
                "center",
              justifyContent:
                "center",
              background:
                "rgba(124,92,255,0.12)"
            }}
          >
            <UploadCloud
              size={24}
            />
          </div>

          <div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 700
              }}
            >
              Creative References
            </div>

            <div
              className="muted"
              style={{
                marginTop: 4
              }}
            >
              Drag & drop or
              click to upload
              moodboards,
              screenshots, or
              inspiration assets
            </div>
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
            <div
              style={{
                fontSize: 16,
                fontWeight: 700
              }}
            >
              Attached Reference
            </div>

            <div
              className="muted"
              style={{
                marginTop: 4
              }}
            >
              {file.name}
            </div>
          </div>

          <button
            type="button"
            className="secondary-btn"
            onClick={(e) => {
              e.stopPropagation();
              setFile(null);
            }}
            style={{
              height: 46
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
