import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUp, ExternalLink, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

type FooterNavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const routeAwareLinks: Record<string, FooterNavItem[]> = {
  home: [
    { label: "Top", href: "#top" },
    { label: "Notifications", href: "#notifications" },
    { label: "About University", href: "#about-university" },
    { label: "Colleges", href: "#colleges" },
    { label: "FAQs", href: "#faq" },
  ],
  faculty: [
    { label: "Faculty List", href: "/faculty" },
    { label: "Featured Faculty", href: "/faculty" },
    { label: "Computer Science Department", href: "/departments/computer-science" },
    { label: "University Colleges", href: "/colleges/sciences" },
    { label: "Home", href: "/" },
  ],
  colleges: [
    { label: "Sciences", href: "/colleges/sciences" },
    { label: "Engineering", href: "/colleges/engineering" },
    { label: "Arts, Commerce & Law", href: "/colleges/arts-commerce-law" },
    { label: "Pharmacy", href: "/colleges/pharmacy" },
    { label: "Architecture & Planning", href: "/colleges/architecture-planning" },
  ],
  departments: [
    { label: "Computer Science", href: "/departments/computer-science" },
    { label: "Faculty", href: "/faculty" },
    { label: "Colleges", href: "/colleges/sciences" },
    { label: "Golden Jubilee", href: "/jubilee" },
    { label: "Home", href: "/" },
  ],
  jubilee: [
    { label: "Jubilee Hero", href: "/jubilee" },
    { label: "Timeline", href: "/jubilee#timeline" },
    { label: "University Home", href: "/" },
    { label: "Colleges", href: "/colleges/sciences" },
    { label: "Faculty", href: "/faculty" },
  ],
};

const commonLinks: FooterNavItem[] = [
  { label: "Admissions", href: "#" },
  { label: "Exam Notifications", href: "#" },
  { label: "Results", href: "#" },
  { label: "Placements", href: "#" },
  { label: "Contact", href: "mailto:registrar@anu.ac.in", external: true },
];

const socialLinks = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
];

function getSectionFromPath(pathname: string) {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/faculty")) return "faculty";
  if (pathname.startsWith("/colleges")) return "colleges";
  if (pathname.startsWith("/departments")) return "departments";
  if (pathname.startsWith("/jubilee")) return "jubilee";
  return "home";
}

function renderFooterLink(item: FooterNavItem) {
  const isAnchorOnly = item.href.startsWith("#");
  const isMailOrExternal = item.external || item.href.startsWith("mailto:") || item.href.startsWith("tel:");

  if (isMailOrExternal) {
    return (
      <a href={item.href} className="group inline-flex items-center gap-1.5 text-white/78 transition hover:text-[color:var(--utility-bar-accent)]">
        <span>{item.label}</span>
        {item.external && <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />}
      </a>
    );
  }

  if (isAnchorOnly) {
    return (
      <a href={item.href} className="text-white/78 transition hover:text-[color:var(--utility-bar-accent)]">
        {item.label}
      </a>
    );
  }

  return (
    <Link to={item.href} className="text-white/78 transition hover:text-[color:var(--utility-bar-accent)]">
      {item.label}
    </Link>
  );
}

export function SiteFooter() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const section = getSectionFromPath(pathname);
  const contextualLinks = routeAwareLinks[section];

  return (
    <footer className="relative overflow-hidden bg-[oklch(0.18_0.05_265)] text-[oklch(0.96_0.01_250)]">
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-36 h-[420px] w-[420px] rounded-full border border-white/10" />
      <div aria-hidden className="pointer-events-none absolute -right-20 -bottom-40 h-[420px] w-[420px] rounded-full border border-white/10" />

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr] lg:px-8 lg:py-16">
        <section>
          <FooterHeading>About University</FooterHeading>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/80">
            Acharya Nagarjuna University, established in 1976, continues to serve students with strong academics,
            research culture and inclusive campus growth across Andhra Pradesh.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/14 text-white transition hover:bg-[color:var(--utility-bar-accent)] hover:text-[oklch(0.18_0.05_265)]"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </section>

        <nav aria-label="Contextual footer links">
          <FooterHeading>On This Page</FooterHeading>
          <ul className="mt-6 space-y-3 text-sm">
            {contextualLinks.map((item) => (
              <li key={item.label}>{renderFooterLink(item)}</li>
            ))}
          </ul>
        </nav>

        <nav aria-label="University quick links">
          <FooterHeading>University Links</FooterHeading>
          <ul className="mt-6 space-y-3 text-sm">
            {commonLinks.map((item) => (
              <li key={item.label}>{renderFooterLink(item)}</li>
            ))}
          </ul>
        </nav>

        <section>
          <FooterHeading>Contact</FooterHeading>
          <div className="mt-6 space-y-6 text-sm text-white/82">
            <ContactItem icon={Phone}>
              <a href="tel:+918632346114" className="block transition hover:text-white">
                +91 863 234 6114
              </a>
              <a href="tel:+918632346118" className="mt-1 block transition hover:text-white">
                +91 863 234 6118
              </a>
            </ContactItem>
            <ContactItem icon={Mail}>
              <a href="mailto:registrar@anu.ac.in" className="transition hover:text-white">
                registrar@anu.ac.in
              </a>
            </ContactItem>
            <ContactItem icon={MapPin}>
              <address className="not-italic leading-6">
                Acharya Nagarjuna University
                <br />
                Nagarjuna Nagar, Guntur
                <br />
                Andhra Pradesh 522510
              </address>
            </ContactItem>
          </div>
        </section>
      </div>

      <a
        href="#top"
        aria-label="Back to top"
        className="absolute bottom-20 right-6 hidden h-12 w-12 items-center justify-center rounded-full bg-[oklch(0.65_0.19_42)] text-[oklch(0.18_0.05_265)] shadow-lg transition hover:-translate-y-1 hover:bg-[color:var(--utility-bar-accent)] lg:flex"
      >
        <ArrowUp className="h-5 w-5" aria-hidden />
      </a>

      <div className="relative bg-[oklch(0.65_0.19_42)] text-[oklch(0.18_0.05_265)]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-6 py-4 text-center text-sm font-semibold md:flex-row lg:px-8">
          <p>ACHARYA NAGARJUNA UNIVERSITY</p>
          <p>Copyright (c) ANU 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold tracking-tight text-white">{children}</h2>
      <div className="mt-2 h-px w-14 bg-[color:var(--utility-bar-accent)]" />
    </div>
  );
}

function ContactItem({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon: typeof Phone;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[oklch(0.65_0.19_42)] text-[oklch(0.18_0.05_265)]">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div className="pt-1">{children}</div>
    </div>
  );
}
