"use client";

const items = [
  "Cloud Sky",
  "Rain",
  "Fog",
  "Smoke",
  "Luxury Interior",
  "Modern Exterior",
  "Sun Rays"
];

export default function Chips() {
  return (
    <div className="chips-row">
      {items.map((item, index) => (
        <button
          key={item}
          className={`tag-chip ${
            index === 0 ? "active" : ""
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
