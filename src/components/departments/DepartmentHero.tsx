import { ArrowRight, Mail } from "lucide-react";
import type { DepartmentPageData } from "./department-data";

export function DepartmentHero({ department }: { department: DepartmentPageData }) {
  return (
    <section className="bg-[oklch(0.985_0.004_250)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(0.58_0.15_45)]">
            {department.college}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-[oklch(0.22_0.06_265)] md:text-6xl">
            {department.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[oklch(0.34_0.04_265)]">
            {department.purpose}
          </p>
          <p className="mt-3 text-base font-semibold text-[oklch(0.52_0.14_45)]">
            {department.heroLine}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[oklch(0.22_0.06_265)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[oklch(0.28_0.07_265)]"
            >
              Explore Curriculum <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[oklch(0.78_0.1_45)] bg-white px-6 py-3 text-sm font-semibold text-[oklch(0.22_0.06_265)] transition-colors hover:bg-[oklch(0.98_0.025_45)]"
            >
              Contact Department <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-[oklch(0.88_0.006_260)] shadow-[0_24px_70px_-35px_oklch(0.22_0.06_265/0.55)]">
            <div
              className="flex h-full items-center justify-center text-center text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.5_0.03_265)]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(255,255,255,0.55) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.55) 75%, transparent 75%, transparent)",
                backgroundSize: "24px 24px",
              }}
            >
              <span className="rounded-full bg-white/80 px-5 py-2 shadow-sm">
                {department.imageLabel}
              </span>
            </div>
          </div>
          <div className="absolute -bottom-5 left-6 rounded-md bg-white px-5 py-4 shadow-[0_16px_45px_-28px_oklch(0_0_0/0.45)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[oklch(0.58_0.15_45)]">
              Department Focus
            </p>
            <p className="mt-1 text-sm font-semibold text-[oklch(0.22_0.06_265)]">
              Teaching, labs, projects and outcomes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
