import * as React from "react";
import { cn } from "@/lib/utils";

const COLOR_CLASS: Record<string, string> = {
  teal: "bg-teal text-cream",
  gold: "bg-gold text-ink",
  pink: "bg-pink text-cream",
  purple: "bg-purple text-cream",
  ink: "bg-ink text-cream",
  cream: "bg-cream text-ink",
};

export function Badge({
  color = "ink",
  rotate = 0,
  className,
  children,
}: {
  color?: keyof typeof COLOR_CLASS;
  rotate?: -6 | -3 | -2 | 0 | 2 | 3 | 6;
  className?: string;
  children: React.ReactNode;
}) {
  const rotateClass =
    {
      [-6]: "-rotate-6",
      [-3]: "-rotate-3",
      [-2]: "-rotate-2",
      0: "",
      2: "rotate-2",
      3: "rotate-3",
      6: "rotate-6",
    }[rotate] ?? "";

  return (
    <span
      className={cn(
        "inline-block border-[3px] border-ink px-3 py-1 font-mono text-xs font-bold uppercase tracking-wide",
        COLOR_CLASS[color],
        rotateClass,
        className
      )}
    >
      {children}
    </span>
  );
}
