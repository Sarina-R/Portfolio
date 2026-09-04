import type { Metadata } from "next";
import { WORKS } from "@/lib/data/works";
import { WorkGrid } from "@/components/work/work-grid";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = { title: "Work — Sarina Rezanezhad" };

export default function WorkPage() {
  return (
    <>
      <section className="border-b-[6px] border-ink bg-paper px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow label="all work" color="pink" rotate={-2} />
          <h1 className="mt-5 font-display text-4xl leading-[0.95] text-ink sm:text-6xl">
            Products, not mockups.
          </h1>
          <p className="mt-4 max-w-md text-sm text-ink/70">
            Hover a card to fan out the shots. Click any card to step through
            the full set, or open the case study for the full story.
          </p>

          <div className="mt-12">
            <WorkGrid works={WORKS} />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
