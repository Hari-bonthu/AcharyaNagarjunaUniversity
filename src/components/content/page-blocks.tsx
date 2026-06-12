import type { PageContent, PageSection } from "@/content/page-schema";
import { Link } from "@tanstack/react-router";
import { Download, ExternalLink } from "lucide-react";

function renderLink(href: string, label: string) {
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  if (isExternal) {
    return (
      <a
        href={href}
        className="inline-flex items-center gap-1.5 text-[color:var(--brand)] hover:underline"
      >
        {label}
        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
      </a>
    );
  }
  return (
    <Link to={href} className="text-[color:var(--brand)] hover:underline">
      {label}
    </Link>
  );
}

export function PageHero({ content }: { content: PageContent }) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
          Student Services
        </p>
        <h1 className="mt-3 text-3xl font-bold text-[oklch(0.22_0.06_265)] md:text-4xl">
          {content.hero.heading}
        </h1>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground md:text-base">
          {content.hero.subheading}
        </p>
        {content.hero.ctaLabel && content.hero.ctaLink ? (
          <div className="mt-6">{renderLink(content.hero.ctaLink, content.hero.ctaLabel)}</div>
        ) : null}
      </div>
    </section>
  );
}

export function BreadcrumbsBlock({ content }: { content: PageContent }) {
  return (
    <nav aria-label="Page breadcrumb" className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        {content.breadcrumbs.map((item, index) => (
          <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
            {renderLink(item.href, item.label)}
            {index < content.breadcrumbs.length - 1 ? <span>/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function RichTextSection({ section }: { section: Extract<PageSection, { type: "richText" }> }) {
  return (
    <section id={section.id} className="rounded-xl border border-border bg-white p-6">
      <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
        {section.paragraphs.map((paragraph, index) => (
          <p key={`${section.id}-${index}`}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function CardsSection({ section }: { section: Extract<PageSection, { type: "cards" }> }) {
  return (
    <section id={section.id} className="rounded-xl border border-border bg-white p-6">
      <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {section.items.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-border/80 bg-[oklch(0.985_0.005_250)] p-4"
          >
            <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function NoticesSection({ section }: { section: Extract<PageSection, { type: "notices" }> }) {
  return (
    <section id={section.id} className="rounded-xl border border-border bg-white p-6">
      <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
      <ul className="mt-4 space-y-3">
        {section.items.map((item, index) => (
          <li
            key={`${item.title}-${index}`}
            className="rounded-lg border border-border/80 bg-[oklch(0.985_0.005_250)] p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">
              {item.date}
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">{item.title}</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.details}</p>
            {item.href ? <div className="mt-2">{renderLink(item.href, "View details")}</div> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

function DownloadsSection({ section }: { section: Extract<PageSection, { type: "downloads" }> }) {
  return (
    <section id={section.id} className="rounded-xl border border-border bg-white p-6">
      <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
      <ul className="mt-4 space-y-3">
        {section.items.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between gap-3 rounded-lg border border-border/80 bg-[oklch(0.985_0.005_250)] p-4"
          >
            <div>
              <p className="text-sm font-semibold text-foreground">{item.name}</p>
              <p className="text-xs text-muted-foreground">
                {item.format}
                {item.note ? ` · ${item.note}` : ""}
              </p>
            </div>
            <a
              href={item.href}
              className="inline-flex items-center gap-1 rounded-md border border-border bg-white px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted"
            >
              <Download className="h-3.5 w-3.5" aria-hidden />
              Download
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FAQSection({ section }: { section: Extract<PageSection, { type: "faq" }> }) {
  return (
    <section id={section.id} className="rounded-xl border border-border bg-white p-6">
      <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
      <div className="mt-4 space-y-4">
        {section.items.map((item) => (
          <article
            key={item.question}
            className="rounded-lg border border-border/80 bg-[oklch(0.985_0.005_250)] p-4"
          >
            <h3 className="text-sm font-semibold text-foreground">{item.question}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection({ section }: { section: Extract<PageSection, { type: "contact" }> }) {
  return (
    <section id={section.id} className="rounded-xl border border-border bg-white p-6">
      <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
      <ul className="mt-4 space-y-3">
        {section.items.map((item) => (
          <li
            key={item.label}
            className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border/80 bg-[oklch(0.985_0.005_250)] px-4 py-3"
          >
            <span className="text-sm font-semibold text-foreground">{item.label}</span>
            <span className="text-sm text-muted-foreground">
              {item.href ? renderLink(item.href, item.value) : item.value}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TimelineSection({ section }: { section: Extract<PageSection, { type: "timeline" }> }) {
  return (
    <section id={section.id} className="rounded-xl border border-border bg-white p-6">
      <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
      <ol className="mt-4 space-y-4">
        {section.items.map((item) => (
          <li
            key={`${item.period}-${item.title}`}
            className="rounded-lg border border-border/80 bg-[oklch(0.985_0.005_250)] p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">
              {item.period}
            </p>
            <h3 className="mt-1 text-sm font-semibold text-foreground">{item.title}</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function TableSection({ section }: { section: Extract<PageSection, { type: "table" }> }) {
  return (
    <section id={section.id} className="rounded-xl border border-border bg-white p-6">
      <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border/80">
        <table className="min-w-full bg-white text-left text-sm">
          <thead className="bg-[oklch(0.985_0.005_250)] text-foreground">
            <tr>
              {section.columns.map((column) => (
                <th key={column} className="border-b border-border px-3 py-2 font-semibold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, index) => (
              <tr key={`${section.id}-${index}`}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${section.id}-${index}-${cellIndex}`}
                    className="border-b border-border px-3 py-2 text-muted-foreground"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function PageSections({ sections }: { sections: PageSection[] }) {
  return (
    <div className="space-y-6">
      {sections.map((section) => {
        switch (section.type) {
          case "richText":
            return <RichTextSection key={section.id} section={section} />;
          case "cards":
            return <CardsSection key={section.id} section={section} />;
          case "notices":
            return <NoticesSection key={section.id} section={section} />;
          case "downloads":
            return <DownloadsSection key={section.id} section={section} />;
          case "faq":
            return <FAQSection key={section.id} section={section} />;
          case "contact":
            return <ContactSection key={section.id} section={section} />;
          case "timeline":
            return <TimelineSection key={section.id} section={section} />;
          case "table":
            return <TableSection key={section.id} section={section} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

export function SideNavigation({ content }: { content: PageContent }) {
  return (
    <aside className="space-y-6">
      <section className="rounded-xl border border-border bg-white p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          On this page
        </h2>
        <ul className="mt-3 space-y-2 text-sm">
          {content.onThisPage.map((item) => (
            <li key={item.label}>{renderLink(item.href, item.label)}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-white p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Related links
        </h2>
        <ul className="mt-3 space-y-2 text-sm">
          {content.relatedLinks.map((item) => (
            <li key={item.label}>{renderLink(item.href, item.label)}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-white p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Content Governance
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>
            <span className="font-semibold text-foreground">Owner:</span> {content.meta.owner}
          </li>
          <li>
            <span className="font-semibold text-foreground">Last updated:</span>{" "}
            {content.meta.lastUpdated}
          </li>
          <li>
            <span className="font-semibold text-foreground">Approved by:</span>{" "}
            {content.governance.approvedBy}
          </li>
          <li>
            <span className="font-semibold text-foreground">Approved on:</span>{" "}
            {content.governance.approvedOn}
          </li>
        </ul>
      </section>
    </aside>
  );
}
