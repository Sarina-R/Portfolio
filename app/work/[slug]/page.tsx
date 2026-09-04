import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WORKS, getWorkBySlug } from "@/lib/data/works";
import { ShotTile } from "@/components/work/shot-tile";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { TransitionLink } from "@/components/layout/page-transition";
import { CtaBand } from "@/components/home/cta-band";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return WORKS.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const work = getWorkBySlug(params.slug);
  return { title: work ? `${work.title} — Sarina Rezanezhad` : "Work" };
}

const COLOR_BG: Record<string, string> = {
  teal: "bg-teal text-cream",
  gold: "bg-gold text-ink",
  pink: "bg-pink text-cream",
  purple: "bg-purple text-cream",
};

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const work = getWorkBySlug(params.slug);
  if (!work) return notFound();

  const idx = WORKS.findIndex((w) => w.slug === work.slug);
  const prev = WORKS[(idx - 1 + WORKS.length) % WORKS.length];
  const next = WORKS[(idx + 1) % WORKS.length];

  return (
    <>
      <section className="border-b-[6px] border-ink bg-paper px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <TransitionLink href="/work" className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-ink/60 hover:text-ink">
            <ArrowLeft size={14} /> All work
          </TransitionLink>

          <span className={`mt-6 inline-block border-[3px] border-ink px-3 py-1 font-mono text-xs font-bold uppercase ${COLOR_BG[work.color]}`}>
            {work.role} · {work.year}
          </span>

          <h1 className="mt-4 font-display text-4xl leading-[0.95] text-ink sm:text-6xl">{work.title}</h1>
          <p className="mt-3 max-w-xl text-base text-ink/70">{work.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {work.tags.map((t) => (
              <span key={t} className="border-[2px] border-ink bg-cream px-2 py-1 font-mono text-[11px] font-bold text-ink">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[6px] border-ink bg-cream px-6 py-14 sm:px-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {work.images.map((src, i) => (
            <div
              key={src}
              className="aspect-[4/3] border-[4px] border-ink shadow-brutal-sm"
              style={{ transform: i % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)" }}
            >
              <ShotTile src={src} index={i} color={work.color} label={`${work.title} shot ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="border-b-[6px] border-ink bg-paper px-6 py-16 sm:px-10">
        <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-3">
          <div>
            <SectionEyebrow label="the problem" color="pink" rotate={-2} />
            <p className="mt-4 text-sm leading-relaxed text-ink/80">{work.problem}</p>
          </div>
          <div>
            <SectionEyebrow label="the approach" color="teal" rotate={2} />
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/80">
              {work.approach.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-ink" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionEyebrow label="the result" color="gold" rotate={-2} />
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/80">
              {work.results.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-ink" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 border-b-[6px] border-ink sm:grid-cols-2">
        <TransitionLink
          href={`/work/${prev.slug}`}
          className="group flex items-center gap-3 border-t-[3px] border-ink bg-cream px-6 py-8 sm:px-10 sm:border-r-[3px] sm:border-t-0"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <div>
            <p className="font-mono text-[11px] uppercase text-ink/50">Previous</p>
            <p className="font-display text-lg">{prev.title}</p>
          </div>
        </TransitionLink>
        <TransitionLink
          href={`/work/${next.slug}`}
          className="group flex items-center justify-end gap-3 border-t-[3px] border-ink bg-cream px-6 py-8 text-right sm:px-10 sm:border-t-0"
        >
          <div>
            <p className="font-mono text-[11px] uppercase text-ink/50">Next</p>
            <p className="font-display text-lg">{next.title}</p>
          </div>
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </TransitionLink>
      </section>

      <CtaBand />
    </>
  );
}
