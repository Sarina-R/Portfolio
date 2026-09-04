"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Presentational demo form — wire the onSubmit handler up to your
// email provider of choice (Resend, Formspree, an API route, etc).
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 border-[4px] border-ink bg-teal p-10 text-center shadow-brutal">
        <CheckCircle2 size={40} className="text-cream" />
        <p className="font-display text-2xl text-cream">Message sent.</p>
        <p className="text-sm text-cream/85">I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-5 border-[4px] border-ink bg-paper p-6 shadow-brutal sm:p-8"
    >
      <div className="grid gap-2">
        <label htmlFor="name" className="font-mono text-xs font-bold uppercase">
          Name
        </label>
        <input
          id="name"
          required
          className="border-[3px] border-ink bg-cream px-4 py-3 text-sm outline-none focus-visible:bg-gold/20"
          placeholder="Your name"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="font-mono text-xs font-bold uppercase">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="border-[3px] border-ink bg-cream px-4 py-3 text-sm outline-none focus-visible:bg-gold/20"
          placeholder="you@company.com"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="font-mono text-xs font-bold uppercase">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="resize-none border-[3px] border-ink bg-cream px-4 py-3 text-sm outline-none focus-visible:bg-gold/20"
          placeholder="What are you building?"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-fit">
        Send message <Send size={16} />
      </Button>
    </form>
  );
}
