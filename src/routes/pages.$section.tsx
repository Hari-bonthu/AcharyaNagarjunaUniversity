import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { Building2, Clock3, Mail, Phone } from "lucide-react";
import { getPublishedPage } from "@/content/page-registry";
import { BreadcrumbsBlock, PageHero, PageSections, SideNavigation } from "@/components/content/page-blocks";

type PlaceholderSearch = {
  page?: string;
};

const pageAliasMap: Record<string, string> = {
  "notifications-timetables": "exam-notifications",
  "downloads-forms": "downloads",
};

function normalizeSlug(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolvePage(page?: string) {
  const normalized = normalizeSlug(page ?? "overview");
  return pageAliasMap[normalized] ?? normalized;
}

export const Route = createFileRoute("/pages/$section")({
  validateSearch: (search: Record<string, unknown>): PlaceholderSearch => ({
    page: typeof search.page === "string" ? search.page : undefined,
  }),
  beforeLoad: ({ params, search }) => {
    const normalizedSection = normalizeSlug(params.section);
    const normalizedPage = resolvePage(search.page);

    if (normalizedSection !== params.section || normalizedPage !== (search.page ?? "overview")) {
      throw redirect({
        to: "/pages/$section",
        params: { section: normalizedSection },
        search: { page: normalizedPage },
        replace: true,
      });
    }
  },
  component: SectionPage,
});

function toReadable(input: string) {
  return input
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function PlaceholderPage({ section, page }: { section: string; page: string }) {
  const sectionLabel = toReadable(section);
  const pageLabel = page ? toReadable(page) : "Overview";

  return (
    <main className="min-h-[70vh] bg-[oklch(0.985_0.005_250)]">
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Page in progress</p>
          <h1 className="mt-3 text-3xl font-bold text-[oklch(0.22_0.06_265)] md:text-4xl">
            {sectionLabel}: {pageLabel}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
            This section is being prepared as part of the official ANU website structure.
            Verified details such as eligibility, schedules, contacts, and downloadable documents will be added here once approved.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[1.45fr_1fr] lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Template Status</h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            You are viewing the shared fallback template for incomplete routes using
            <code> /pages/$section?page=$page</code>. Once the final page is ready, this URL can map to the full module.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border/80 bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Section</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{sectionLabel}</p>
            </div>
            <div className="rounded-lg border border-border/80 bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Page</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{pageLabel}</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Back to Home
            </Link>
            <Link
              to="/aboutprofile"
              className="inline-flex items-center justify-center rounded-md border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              University Profile
            </Link>
          </div>
        </div>

        <aside className="rounded-2xl border border-border bg-white p-6">
          <h2 className="text-base font-semibold text-foreground">Official Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Building2 className="mt-0.5 h-4 w-4 text-[color:var(--brand)]" aria-hidden />
              <span>Acharya Nagarjuna University, Nagarjuna Nagar, Guntur, Andhra Pradesh 522510</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[color:var(--brand)]" aria-hidden />
              <a href="tel:+918632346114" className="hover:text-foreground">+91 863 234 6114</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[color:var(--brand)]" aria-hidden />
              <a href="mailto:registrar@anu.ac.in" className="hover:text-foreground">registrar@anu.ac.in</a>
            </li>
            <li className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-4 w-4 text-[color:var(--brand)]" aria-hidden />
              <span>Working hours and notices are published in the relevant finalized section.</span>
            </li>
          </ul>
        </aside>
      </section>
    </main>
  );
}

function PublishedPage({ section, page }: { section: string; page: string }) {
  const published = getPublishedPage(section, page);
  if (!published) return null;
  const { content } = published;

  return (
    <main className="min-h-[70vh] bg-[oklch(0.985_0.005_250)] pb-12">
      <BreadcrumbsBlock content={content} />
      <PageHero content={content} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[1.55fr_1fr] lg:px-8">
        <PageSections sections={content.sections} />
        <SideNavigation content={content} />
      </section>
    </main>
  );
}

function SectionPage() {
  const { section } = Route.useParams();
  const { page } = Route.useSearch();
  const resolvedPage = resolvePage(page);

  const published = getPublishedPage(section, resolvedPage);
  if (published) {
    return <PublishedPage section={section} page={resolvedPage} />;
  }

  return <PlaceholderPage section={section} page={resolvedPage} />;
}
