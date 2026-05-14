import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getFacultySlugByName } from "@/data/facultyProfiles";
import { SectionShell } from "./section-shell";
import type { FacultyItem } from "./department-data";

export function FacultyPreview({ faculty }: { faculty: FacultyItem[] }) {
  return (
    <SectionShell eyebrow="Faculty snapshot" title="Guidance from experienced teachers">
      <div className="grid gap-5 md:grid-cols-[1fr_1fr_1fr_auto] md:items-stretch">
        {faculty.slice(0, 3).map((member) => {
          const facultySlug = getFacultySlugByName(member.name);

          return (
          <Link
            key={member.name}
            to="/faculty/$facultySlug"
            params={{ facultySlug: facultySlug ?? "prof-v-ramachandra-rao" }}
            className="group rounded-lg bg-white p-6 shadow-[0_18px_45px_-36px_oklch(0.22_0.06_265/0.45)] ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-[0_22px_52px_-34px_oklch(0.22_0.06_265/0.55)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.91_0.01_260)] text-lg font-bold text-[oklch(0.22_0.06_265)] transition-colors group-hover:bg-[oklch(0.52_0.14_45)] group-hover:text-white">
              {member.name.split(" ").slice(-1)[0].charAt(0)}
            </div>
            <h3 className="mt-5 text-base font-semibold text-[oklch(0.22_0.06_265)]">
              {member.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-[oklch(0.52_0.14_45)]">{member.role}</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{member.focus}</p>
          </Link>
          );
        })}
        <Link
          to="/faculty"
          className="flex min-h-32 items-center justify-center gap-2 rounded-lg bg-[oklch(0.22_0.06_265)] px-6 py-5 text-sm font-semibold text-white transition-colors hover:bg-[oklch(0.28_0.07_265)]"
        >
          View All Faculty <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SectionShell>
  );
}
