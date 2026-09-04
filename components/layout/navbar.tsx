"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { TransitionLink } from "@/components/layout/page-transition";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[4px] border-ink bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <TransitionLink
          href="/"
          className="flex h-10 w-10 -rotate-3 items-center justify-center border-[3px] border-ink bg-pink font-display text-lg text-cream shadow-brutal-sm"
        >
          SR
        </TransitionLink>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <TransitionLink
                key={l.href}
                href={l.href}
                className={cn(
                  "relative px-4 py-2 font-bold text-sm text-ink transition-colors",
                  active && "text-pink"
                )}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-1 left-4 right-4 h-[3px] bg-pink" />
                )}
              </TransitionLink>
            );
          })}
          <TransitionLink
            href="/contact"
            className="ml-3 border-[3px] border-ink bg-ink px-4 py-2 text-sm font-bold text-cream shadow-brutal-sm transition-transform hover:-translate-y-0.5"
          >
            Let's talk
          </TransitionLink>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center border-[3px] border-ink bg-cream md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t-[4px] border-ink bg-cream px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <TransitionLink
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block border-b-[2px] border-ink/15 py-3 font-display text-xl",
                pathname === l.href && "text-pink"
              )}
            >
              {l.label}
            </TransitionLink>
          ))}
        </nav>
      )}
    </header>
  );
}
