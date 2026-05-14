import { Clock3 } from "lucide-react";
import { SectionShell } from "./section-shell";
import type { ProgramItem } from "./department-data";

export function ProgramsSection({ programs }: { programs: ProgramItem[] }) {
  return (
    <SectionShell
      eyebrow="Programs offered"
      title="Clear pathways for every stage"
      className="bg-[oklch(0.985_0.004_250)]"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {programs.map((program) => (
          <article
            key={program.name}
            className="rounded-lg bg-white p-6 shadow-[0_18px_45px_-36px_oklch(0.22_0.06_265/0.5)]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold text-[oklch(0.22_0.06_265)]">{program.name}</h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.97_0.035_45)] px-3 py-1 text-xs font-semibold text-[oklch(0.5_0.14_45)]">
                <Clock3 className="h-3.5 w-3.5" />
                {program.duration}
              </span>
            </div>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">{program.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
