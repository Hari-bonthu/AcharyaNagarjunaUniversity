import { createFileRoute, Link } from "@tanstack/react-router";
import { AdmissionsShell } from "@/components/admissions/admissions-shell";
import { AdmissionsOverview } from "@/components/admissions/overview";
import { HowToApply } from "@/components/admissions/how-to-apply";
import { FeeStructure } from "@/components/admissions/fee-structure";
import { Scholarships } from "@/components/admissions/scholarships";
import { AcademicCalendar } from "@/components/admissions/academic-calendar";

export const Route = createFileRoute("/admissions/$pageId")({
  component: AdmissionsPage,
});

function AdmissionsPage() {
  const { pageId } = Route.useParams();

  return (
    <AdmissionsShell pageId={pageId}>
      {pageId === "overview" && <AdmissionsOverview />}
      {pageId === "how-to-apply" && <HowToApply />}
      {pageId === "fee-structure" && <FeeStructure />}
      {pageId === "scholarships" && <Scholarships />}
      {pageId === "academic-calendar" && <AcademicCalendar />}
      {pageId !== "overview" &&
        pageId !== "how-to-apply" &&
        pageId !== "fee-structure" &&
        pageId !== "scholarships" &&
        pageId !== "academic-calendar" && (
          <div className="flex min-h-[40vh] items-center justify-center rounded border border-[var(--rule)] bg-white p-8 text-center shadow-sm">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-[var(--ink)]">
                Page Under Construction
              </h2>
              <p className="mt-2 font-serif text-[var(--muted)]">
                The content for "{pageId.replace(/-/g, " ")}" is currently being prepared.
              </p>
            </div>
          </div>
        )}
    </AdmissionsShell>
  );
}
