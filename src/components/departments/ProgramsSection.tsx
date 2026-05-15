import { Clock3, BookOpen, GraduationCap, Award } from "lucide-react";
import { SectionShell } from "./section-shell";
import type { ProgramItem } from "./department-data";

export function ProgramsSection({ programs }: { programs: ProgramItem[] }) {
  // Icon mapping for different program types
  const getProgramIcon = (name: string) => {
    if (name.includes("Ph.D") || name.includes("PhD")) return GraduationCap;
    if (name.includes("M.Tech") || name.includes("M.Sc")) return Award;
    return BookOpen;
  };

  return (
    <SectionShell
      eyebrow="Programs offered"
      title="Clear pathways for every stage"
      className="bg-[oklch(0.985_0.004_250)]"
    >
      <p className="mb-6 max-w-3xl text-sm leading-6 text-slate-600">
        Choose from undergraduate to doctoral programs designed to build expertise at every level.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program, index) => {
          const Icon = getProgramIcon(program.name);
          
          return (
            <article
              key={program.name}
              className="group relative overflow-hidden rounded-xl bg-white p-5 shadow-[0_16px_40px_-40px_oklch(0.22_0.06_265/0.5)] ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-[0_22px_52px_-36px_oklch(0.22_0.06_265/0.65)]"
            >
              {/* Decorative accent line */}
              <div className="absolute left-0 top-0 h-1 w-16 bg-gradient-to-r from-[oklch(0.52_0.14_45)] to-orange-300 transition-all duration-300 group-hover:w-full" />

              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.97_0.01_260)] text-[oklch(0.22_0.06_265)] transition-colors group-hover:bg-[oklch(0.52_0.14_45)] group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>

                  {/* Program Name */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold leading-6 text-[oklch(0.22_0.06_265)] transition-colors group-hover:text-[oklch(0.52_0.14_45)]">
                      {program.name}
                    </h3>
                  </div>
                </div>

                {/* Duration Badge */}
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[oklch(0.97_0.035_45)] px-3 py-1.5 text-xs font-semibold text-[oklch(0.5_0.14_45)] shadow-sm transition-all group-hover:bg-[oklch(0.52_0.14_45)] group-hover:text-white">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden />
                  {program.duration}
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {program.description}
              </p>

              {/* Optional: Progress indicator or number */}
              <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
                <span className="text-xs font-bold tracking-wider text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-1 items-center gap-1.5">
                  <span className="h-1 w-8 rounded-full bg-[oklch(0.52_0.14_45)]" />
                  <span className="h-1 w-4 rounded-full bg-slate-200" />
                  <span className="h-1 w-2 rounded-full bg-slate-200" />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Optional: View all programs link */}
      {programs.length > 6 && (
        <div className="mt-6 text-center">
          <a
            href="#all-programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.52_0.14_45)] transition-colors hover:text-[oklch(0.22_0.06_265)]"
          >
            View all {programs.length} programs
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      )}
    </SectionShell>
  );
}