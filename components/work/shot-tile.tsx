"use client";

import { useState } from "react";
import type { WorkColor } from "@/lib/data/works";

const COLOR_BG: Record<WorkColor, string> = {
  teal: "#10938C",
  gold: "#F6B93E",
  pink: "#FF3D8A",
  purple: "#6E3FA6",
};

// Falls back to a styled placeholder tile until a real file exists
// at `src` inside /public — never shows a broken-image icon.
export function ShotTile({
  src,
  index,
  color,
  label,
}: {
  src: string;
  index: number;
  color: WorkColor;
  label: string;
}) {
  const [broken, setBroken] = useState(false);
  const bg = COLOR_BG[color];

  return (
    <div className="relative h-full w-full overflow-hidden border-[3px] border-ink bg-paper">
      {!broken && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          onError={() => setBroken(true)}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      )}
      {broken && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundColor: bg,
            backgroundImage: `repeating-linear-gradient(135deg, ${bg}, ${bg} 10px, #14110F 10px, #14110F 11px)`,
          }}
        >
          <span className="rounded-full border-[3px] border-ink bg-cream px-3 py-1 font-mono text-xs font-bold text-ink">
            shot {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}
