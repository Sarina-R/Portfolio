import { TransitionLink } from "@/components/layout/page-transition";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 border-b-[6px] border-ink bg-gold px-6 text-center">
      <p className="font-display text-[22vw] leading-none text-ink sm:text-[180px]">404</p>
      <p className="max-w-sm text-ink/80">
        This page wandered off. Everything else is exactly where it should be.
      </p>
      <TransitionLink
        href="/"
        className="border-[3px] border-ink bg-ink px-5 py-3 font-bold text-cream shadow-brutal-sm transition-transform hover:-translate-y-0.5"
      >
        Back home
      </TransitionLink>
    </section>
  );
}
