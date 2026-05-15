import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Search,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

/**
 * University Navbar — light theme with mega menu
 * Inspired by leading public university sites (ANU style).
 * - Top utility bar: contact info (left), quick links (right) with orange accent
 * - Main bar: logo + estd line, centered nav, search + Apply Now CTA
 * - Mega menu: left "Explore" promo card + multi-column grouped links with subtitles
 */

type LinkItem = { label: string; href: string; subtitle?: string };
type Column = { title: string; items: LinkItem[] };
type MenuItem = {
  label: string;
  eyebrow: string; // small EXPLORE label
  heading: string; // big heading inside promo
  promo: { badge: string; description: string };
  columns: Column[];
};

const TOP_LEFT = [
  { icon: Phone, label: "+91 863 234 6114", href: "tel:+918632346114" },
  { icon: Mail, label: "registrar@anu.ac.in", href: "mailto:registrar@anu.ac.in" },
];

const TOP_RIGHT_ACCENT = [
  { label: "Placements", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

const TOP_RIGHT_PORTAL = [
  { label: "Student Portal", href: "#" },
  { label: "Employee Portal", href: "#" },
  { label: "WebMail", href: "#" },
];

const MENU: MenuItem[] = [
  {
    label: "About",
    eyebrow: "DISCOVER",
    heading: "About the University",
    promo: {
      badge: "ESTD. 1976 · NAAC A+",
      description:
        "A legacy of academic excellence, research and inclusive growth across South India.",
    },
    columns: [
      {
        title: "OVERVIEW",
        items: [
          { label: "Profile", href: "#" },
          { label: "History", href: "#" },
          { label: "Vision & Mission", href: "#" },
          { label: "Emblem", href: "#" },
        ],
      },
      {
        title: "LEADERSHIP",
        items: [
          { label: "Chancellor", href: "#" },
          { label: "Vice Chancellor", href: "#" },
          { label: "Rector", href: "#" },
          { label: "Registrar", href: "#" },
        ],
      },
      {
        title: "GOVERNANCE",
        items: [
          { label: "Executive Council", href: "#" },
          { label: "Organization Structure", href: "#" },
          { label: "Statutory Committees", href: "#" },
          { label: "Strategic Plan", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    eyebrow: "LEARN",
    heading: "Academics",
    promo: {
      badge: "150+ PROGRAMS",
      description:
        "World-class colleges, departments and centres delivering UG, PG and doctoral education.",
    },
    columns: [
      {
        title: "UNIVERSITY COLLEGES",
        items: [
          { label: "Arts, Commerce & Law", href: "/colleges/arts-commerce-law" },
          { label: "Sciences", href: "/colleges/sciences" },
          { label: "Physical Education & Sports", href: "/colleges/physical-education-sports" },
          { label: "Engineering", href: "/colleges/engineering" },
          { label: "Pharmacy", href: "/colleges/pharmacy" },
          { label: "Architecture & Planning", href: "/colleges/architecture-planning" },
        ],
      },
      {
        title: "ACADEMIC UNITS",
        items: [
          { label: "Faculty", href: "/faculty" },
          { label: "ANUCDE", href: "#" },
          { label: "Library", href: "#" },
        ],
      },
      {
        title: "SPECIALISED CENTRES",
        items: [
          { label: "Dr. B.R. Ambedkar Chair", href: "#" },
          { label: "Centre for Women Studies", href: "#" },
          { label: "Centre for CSR", href: "#" },
          { label: "Phule Centre", href: "#" },
          { label: "Mahatma Gandhi Centre", href: "#" },
          { label: "Babu Jagjivan Ram Centre", href: "#" },
          { label: "Computer Centre", href: "#" },
        ],
      },
      {
        title: "REGULATIONS",
        items: [
          { label: "ANU Code", href: "#" },
          { label: "Ordinances", href: "#" },
          { label: "Code of Conduct", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    eyebrow: "JOIN",
    heading: "Admissions",
    promo: {
      badge: "APPLICATIONS OPEN",
      description:
        "Discover programs, eligibility, fee structure and scholarships for the upcoming academic year.",
    },
    columns: [
      {
        title: "GETTING STARTED",
        items: [
          { label: "Why Choose Us", href: "#" },
          { label: "Academic Calendar", href: "#" },
          { label: "Fee Structure", href: "#" },
          { label: "Scholarships", href: "#" },
        ],
      },
      {
        title: "PROCESS",
        items: [
          { label: "How to Apply", href: "#" },
          { label: "Eligibility Criteria", href: "#" },
          { label: "Affiliated Colleges", href: "#" },
        ],
      },
      {
        title: "SUPPORT",
        items: [
          { label: "Admission Helpdesk", href: "#" },
          { label: "FAQs", href: "#" },
          { label: "Brochure", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Programs",
    eyebrow: "STUDY",
    heading: "Programs Offered",
    promo: {
      badge: "150+ COURSES",
      description:
        "Explore undergraduate, postgraduate and doctoral programs across colleges and centres.",
    },
    columns: [
      {
        title: "UNDERGRADUATE",
        items: [
          { label: "UG Programs", href: "#" },
          { label: "Integrated Programs", href: "#" },
          { label: "Diploma Courses", href: "#" },
        ],
      },
      {
        title: "POSTGRADUATE",
        items: [
          { label: "PG Programs", href: "#" },
          { label: "PG Diploma", href: "#" },
          { label: "Distance Education (ANUCDE)", href: "#" },
        ],
      },
      {
        title: "RESEARCH & DOCTORAL",
        items: [
          { label: "PhD Programs", href: "#" },
          { label: "M.Phil Programs", href: "#" },
          { label: "Post-Doctoral Fellowships", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Research",
    eyebrow: "EXPLORE",
    heading: "Research",
    promo: {
      badge: "DST-FUNDED LABS",
      description:
        "Funded projects, doctoral scholarship, policies and incubation across departments.",
    },
    columns: [
      {
        title: "RESEARCH",
        items: [
          { label: "R&D Cell", href: "#" },
          { label: "Research Cell", href: "#" },
          { label: "Research Policy", href: "#" },
          { label: "Consultancy Policy", href: "#" },
          { label: "Incubators", href: "#" },
        ],
      },
      
    ],
  },
  {
    label: "Rankings",
    eyebrow: "RECOGNITION",
    heading: "Rankings",
    promo: {
      badge: "NAAC A+ ACCREDITED",
      description:
        "A portfolio of national and global rankings recognising academic and research excellence.",
    },
    columns: [
      {
        title: "QUALITY & ACCREDITATION",
        items: [
          { label: "NIRF", href: "#" },
          { label: "IQAC", href: "#" },
          { label: "SSR", href: "#" },
          { label: "NAAC", href: "#" },
          { label: "Awards & Recognitions", href: "#" },
        ],
      },
      {
        title: "NATIONAL & GLOBAL RANKINGS",
        items: [
          { label: "QS Asia Ranking 2022", href: "#" },
          { label: "QS I-Gauge E-Leas", href: "#" },
          { label: "World Ranking", href: "#" },
          { label: "Impact Ranking", href: "#" },
          { label: "Green Metric Ranking", href: "#" },
          { label: "Green University Award 2021", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Student Services",
    eyebrow: "SUPPORT",
    heading: "Student Services",
    promo: {
      badge: "STUDENT-FIRST",
      description:
        "Examinations, placements, scholarships and dedicated support cells for every learner.",
    },
    columns: [
      {
        title: "EXAMINATIONS",
        items: [
          { label: "Exam Section", href: "#" },
          { label: "Notifications & Timetables", href: "#" },
          { label: "Results", href: "#" },
          { label: "Downloads (Forms)", href: "#" },
        ],
      },
      {
        title: "CAREER",
        items: [
          { label: "Placements", href: "#" },
          { label: "Alumni", href: "#" },
          { label: "Services", href: "#" },
        ],
      },
      {
        title: "SUPPORT CELLS",
        items: [
          { label: "Anti-Ragging Cell", href: "#" },
          { label: "Women Grievance Cell", href: "#" },
          { label: "SC/ST Cell", href: "#" },
          { label: "Differently Abled Cell", href: "#" },
          { label: "Student Grievance Cell", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Campus Life",
    eyebrow: "EXPERIENCE",
    heading: "Campus Life",
    promo: {
      badge: "VIBRANT CAMPUS",
      description:
        "Hostels, sports, NSS, NCC and a thriving cultural calendar across a green 300-acre campus.",
    },
    columns: [
      {
        title: "LIVE & PLAY",
        items: [
          { label: "Hostel", href: "#" },
          { label: "Health Center", href: "#" },
          { label: "Sports", href: "#" },
        ],
      },
      {
        title: "STUDENT BODIES",
        items: [
          { label: "NSS", href: "#" },
          { label: "NCC", href: "#" },
          { label: "ELC", href: "#" },
        ],
      },
      {
        title: "MEDIA & OUTREACH",
        items: [
          { label: "News", href: "#" },
          { label: "Events", href: "#" },
          { label: "ANU Radio 91.2", href: "#" },
          { label: "Herbal Garden", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Employee Services",
    eyebrow: "ADMINISTRATION",
    heading: "Employee Services",
    promo: {
      badge: "FACULTY & STAFF",
      description:
        "Policies, regulations and quick links for faculty, employees and pensioners.",
    },
    columns: [
      {
        title: "POLICIES",
        items: [
          { label: "IT Policy", href: "#" },
          { label: "Green Policy", href: "#" },
          { label: "Plastic Free Policy", href: "#" },
        ],
      },
      {
        title: "REGULATIONS",
        items: [
          { label: "Ordinances & Orders", href: "#" },
          { label: "Statutory Bodies", href: "#" },
        ],
      },
      {
        title: "QUICK LINKS",
        items: [
          { label: "Faculty Portal", href: "#" },
          { label: "Employee Portal", href: "#" },
          { label: "Pensioner Details", href: "#" },
          { label: "Holiday List", href: "#" },
        ],
      },
    ],
  },
];

export function UniversityNavbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | null>(null);

  // Close on outside click / Escape
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!navRef.current?.contains(e.target as Node)) {
        setOpenIndex(null);
        setSearchOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenIndex(null);
        setMobileOpen(false);
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const openMenu = (i: number) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), 120);
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full"
      style={{ boxShadow: "var(--nav-shadow)" }}
    >
      {/* Utility bar */}
      {/* Utility bar moved to top of page in src/routes/index.tsx */}

      {/* Main bar */}
      <div
        className="border-b"
        style={{
          backgroundColor: "var(--utility-bar)",
          borderColor: "oklch(1 0 0 / 0.12)",
          color: "var(--utility-bar-foreground)",
        }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 lg:px-8">
          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden lg:block flex-1">
            <ul className="flex items-stretch">
              {MENU.map((item, i) => {
                const active = openIndex === i;
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openMenu(i)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={active}
                      onClick={() => setOpenIndex(active ? null : i)}
                      onFocus={() => openMenu(i)}
                      className="relative flex h-full items-center gap-1 px-4 py-6 text-[13px] font-medium tracking-wide transition-colors hover:text-[color:var(--utility-bar-accent)] focus:outline-none"
                    >
                      {item.label}
                      <ChevronDown
                        className="h-3.5 w-3.5 transition-transform"
                        style={{ transform: active ? "rotate(180deg)" : "none" }}
                      />
                      <span
                        className="pointer-events-none absolute bottom-3 left-4 right-4 h-[2px] origin-left rounded-full transition-transform duration-200"
                        style={{
                          backgroundColor: "var(--gold-strong)",
                          transform: active ? "scaleX(1)" : "scaleX(0)",
                        }}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="-mr-2 p-2 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search panel */}
        {searchOpen && (
          <div className="border-t border-border bg-background">
            <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-8 py-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                autoFocus
                type="search"
                placeholder="Search programs, departments, notifications…"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Mega menu panel (desktop) */}
        {openIndex !== null && (
          <div
            className="absolute left-0 right-0 hidden lg:block"
            onMouseEnter={() => openMenu(openIndex)}
            onMouseLeave={scheduleClose}
          >
            <div
              className="border-t border-border bg-background animate-in fade-in slide-in-from-top-1 duration-150"
              style={{ boxShadow: "var(--mega-shadow)" }}
            >
              <div className="mx-auto max-w-[1400px] px-8 py-10">
                <div className="grid grid-cols-12 gap-8">
                  {/* Promo / Explore card */}
                  <div className="col-span-3">
                    <div
                      className="text-[11px] font-semibold tracking-[0.2em]"
                      style={{ color: "var(--gold-strong)" }}
                    >
                      {MENU[openIndex].eyebrow}
                    </div>
                    <h3
                      className="mt-2 text-3xl font-semibold leading-tight"
                      style={{ color: "var(--brand)" }}
                    >
                      {MENU[openIndex].heading}
                    </h3>
                    <div
                      className="mt-3 h-[2px] w-12 rounded-full"
                      style={{ backgroundColor: "var(--gold-strong)" }}
                    />
                    <div
                      className="mt-6 rounded-2xl p-5"
                      style={{ backgroundColor: "var(--brand-soft)" }}
                    >
                      <div
                        className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wider"
                        style={{
                          backgroundColor: "var(--brand)",
                          color: "var(--brand-foreground)",
                        }}
                      >
                        {MENU[openIndex].promo.badge}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                        {MENU[openIndex].promo.description}
                      </p>
                      <a
                        href="#"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                        style={{ color: "var(--brand)" }}
                      >
                        Learn more
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Columns */}
                  <div className="col-span-9 grid grid-cols-3 gap-8">
                    {MENU[openIndex].columns.map((col) => (
                      <div key={col.title}>
                        <div
                          className="mb-4 text-[11px] font-semibold tracking-[0.18em]"
                          style={{ color: "var(--brand)" }}
                        >
                          {col.title}
                        </div>
                        <ul className="space-y-3">
                          {col.items.map((c) => (
                            <li key={c.label}>
                              <a
                                href={c.href}
                                className="group block"
                              >
                                <div className="text-sm font-medium text-foreground transition-colors group-hover:text-[color:var(--brand)]">
                                  {c.label}
                                </div>
                                {c.subtitle && (
                                  <div className="mt-0.5 text-xs text-muted-foreground">
                                    {c.subtitle}
                                  </div>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-background text-foreground lg:hidden">
          <nav aria-label="Mobile" className="max-h-[80vh] overflow-y-auto">
            <ul className="divide-y divide-border">
              {MENU.map((item, i) => (
                <li key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium"
                    aria-expanded={mobileSection === i}
                    onClick={() => setMobileSection(mobileSection === i ? null : i)}
                  >
                    {item.label}
                    <ChevronDown
                      className="h-4 w-4 transition-transform"
                      style={{
                        transform: mobileSection === i ? "rotate(180deg)" : "none",
                      }}
                    />
                  </button>
                  {mobileSection === i && (
                    <div className="bg-muted/40 px-4 pb-4 pt-1">
                      {item.columns.map((col) => (
                        <div key={col.title} className="mt-3">
                          <div
                            className="mb-1 text-[11px] font-semibold tracking-[0.18em]"
                            style={{ color: "var(--brand)" }}
                          >
                            {col.title}
                          </div>
                          <ul className="space-y-1 pl-1">
                            {col.items.map((c) => (
                              <li key={c.label}>
                                <a
                                  href={c.href}
                                  className="block py-1 text-sm text-foreground/80 hover:text-foreground"
                                >
                                  {c.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="border-t border-border p-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Quick Links
              </div>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {[...TOP_RIGHT_ACCENT, ...TOP_RIGHT_PORTAL].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="block py-1 hover:underline">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
