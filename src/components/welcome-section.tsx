<<<<<<< HEAD
import { useState } from "react";
import { Bell, Calendar, FileText, ArrowUpRight, Sparkles, Search, ChevronRight, Quote } from "lucide-react";
=======
import {
  ArrowUpRight,
  Bell,
  Calendar,
  ChevronRight,
  FileText,
  Quote,
  Search,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import bgImage from "@/assets/bgg1.jpg";
>>>>>>> fa886b6 (A safe commit1)
import vcImage from "@/assets/vice-chancellor.jpg";

type Item = {
  title: string;
  date: string;
<<<<<<< HEAD
  tag?: "New" | "Updated" | "Live";
=======
  tag?: "New" | "Updated";
>>>>>>> fa886b6 (A safe commit1)
  href?: string;
};

const notifications: Item[] = [
  {
<<<<<<< HEAD
    title: "Notification for Guest Faculty Positions in CSE, AI & ML, Data Science and Cyber Security Departments (AY 2025–26)",
    date: "Apr 28, 2026",
    tag: "New",
  },
  { title: "B.Sc Honours in Fire and Industrial Safety — Admissions Open", date: "Apr 24, 2026" },
  {
    title: "B.Tech 2nd Year 1st & 2nd Sem and 3rd Year Examinations Time-Tables, July 2026",
    date: "Apr 18, 2026",
    tag: "Updated",
  },
  { title: "Revised Academic Calendar for PG Programmes 2026–27", date: "Apr 12, 2026" },
];

const events: Item[] = [
  {
    title: "Dept. of International Business Studies — International Conference on GTSCLM-2026 Highlights",
    date: "May 06, 2026",
    tag: "Live",
  },
  {
    title: "Live telecast of South-West Zone Inter-University Weightlifting Championship for Women 2025–26",
    date: "May 12, 2026",
  },
  { title: "National Workshop on AI for Sustainable Development", date: "May 20, 2026" },
  { title: "Convocation Rehearsal — All Departments", date: "May 28, 2026" },
];

const results: Item[] = [
  { title: "M.Sc. Bio-Technology I Semester Regular Examinations April-2026 Results", date: "Apr 26, 2026", tag: "New" },
  {
    title: "M.Voc Horticulture & Landscape Gardening I Semester Regular Examinations April-2026 Results",
    date: "Apr 22, 2026",
    tag: "New",
  },
  {
    title: "M.Voc Food Processing & Quality Management I Semester Regular Examinations April-2026 Results",
    date: "Apr 20, 2026",
    tag: "New",
  },
  { title: "B.Com (Hons.) IV Semester Supplementary Results", date: "Apr 14, 2026" },
];

const tabs = [
  { id: "notifications", label: "Notifications", icon: Bell, count: notifications.length, data: notifications },
  { id: "events", label: "Events", icon: Calendar, count: events.length, data: events },
  { id: "results", label: "Results", icon: FileText, count: results.length, data: results },
] as const;

type TabId = (typeof tabs)[number]["id"];

function TagPill({ tag }: { tag?: Item["tag"] }) {
  if (!tag) return null;
  const styles: Record<string, string> = {
    New: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    Updated: "bg-amber-50 text-amber-700 ring-amber-600/20",
    Live: "bg-rose-50 text-rose-700 ring-rose-600/20",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-inset ${styles[tag]}`}>
      {tag === "Live" && <span className="mr-1 h-1.5 w-1.5 animate-pulse rounded-full bg-rose-500" />}
=======
    title:
      "Notification for Guest Faculty Positions in CSE, AI & ML, Data Science and Cyber Security Departments (AY 2025-26)",
    date: "Apr 28, 2026",
    tag: "New",
  },
  {
    title: "B.Sc Honours in Fire and Industrial Safety - Admissions Open",
    date: "Apr 24, 2026",
  },
  {
    title:
      "B.Tech 2nd Year 1st & 2nd Sem and 3rd Year Examinations Time-Tables, July 2026",
    date: "Apr 18, 2026",
    tag: "Updated",
  },
  {
    title: "Revised Academic Calendar for PG Programmes 2026-27",
    date: "Apr 12, 2026",
  },
  {
    title: "M.Sc. Bio-Technology I Semester Regular Examinations April-2026 Results",
    date: "Apr 26, 2026",
    tag: "New",
  },
];

function TagPill({ tag }: { tag?: Item["tag"] }) {
  if (!tag) return null;

  const styles = {
    New: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    Updated: "bg-amber-50 text-amber-700 ring-amber-600/20",
  } satisfies Record<NonNullable<Item["tag"]>, string>;

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-inset ${styles[tag]}`}
    >
>>>>>>> fa886b6 (A safe commit1)
      {tag}
    </span>
  );
}

<<<<<<< HEAD
export function WelcomeSection() {
  const [active, setActive] = useState<TabId>("notifications");
  const [query, setQuery] = useState("");

  const current = tabs.find((t) => t.id === active)!;
  const filtered = current.data.filter((i) => i.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[oklch(0.99_0.005_250)] to-background">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.4]">
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[oklch(0.78_0.12_255)] blur-3xl" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-[oklch(0.85_0.09_240)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
        {/* LEFT — Welcome / About */}
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.32_0.12_260)]/20 bg-white/70 px-3 py-1 text-xs font-medium text-[oklch(0.32_0.12_260)] backdrop-blur">
=======
export function NotificationsSection() {
  const pageSize = 3;
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(notifications.length / pageSize);
  const visibleNotifications = notifications.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <section className="bg-[oklch(0.985_0.005_250)] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.32_0.12_260)]/20 bg-white px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[oklch(0.32_0.12_260)]">
              <Bell className="h-3.5 w-3.5" aria-hidden />
              Notifications
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[oklch(0.22_0.06_265)] md:text-4xl">
              Latest Announcements
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[oklch(0.32_0.12_260)] hover:underline"
          >
            View all notifications <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border/70 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]">
          <div className="border-b border-border/60 bg-white px-5 py-4">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-[oklch(0.985_0.005_250)] px-3 py-2.5">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                University notices, admissions, examinations and circulars
              </span>
            </div>
          </div>

          <ul className="divide-y divide-border/60">
            {visibleNotifications.map((item, index) => {
              const absoluteIndex = page * pageSize + index;
              const Icon = absoluteIndex % 2 === 0 ? Bell : absoluteIndex % 3 === 0 ? Calendar : FileText;

              return (
                <li key={item.title}>
                  <a
                    href={item.href ?? "#"}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 transition-colors hover:bg-[oklch(0.97_0.02_255)] sm:px-6"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[oklch(0.32_0.12_260)]/8 text-[oklch(0.32_0.12_260)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium leading-snug text-foreground group-hover:text-[oklch(0.32_0.12_260)] sm:text-base">
                        {item.title}
                      </span>
                      <span className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground">
                        {item.date}
                        <TagPill tag={item.tag} />
                      </span>
                    </span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-[oklch(0.32_0.12_260)]" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col gap-3 border-t border-border/60 bg-[oklch(0.985_0.005_250)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-xs font-medium text-muted-foreground">
              Showing {page * pageSize + 1}-{Math.min((page + 1) * pageSize, notifications.length)} of{" "}
              {notifications.length} announcements
            </p>
            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show announcements page ${index + 1}`}
                  aria-current={page === index}
                  onClick={() => setPage(index)}
                  className={`h-8 min-w-8 rounded-md px-2 text-xs font-semibold transition-colors ${
                    page === index
                      ? "bg-[oklch(0.22_0.06_265)] text-white"
                      : "border border-border bg-white text-[oklch(0.22_0.06_265)] hover:bg-[oklch(0.96_0.01_260)]"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WelcomeSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.985_0.005_250),white)]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.32_0.12_260)]/20 bg-white/80 px-3 py-1 text-xs font-medium text-[oklch(0.32_0.12_260)] backdrop-blur">
>>>>>>> fa886b6 (A safe commit1)
            <Sparkles className="h-3.5 w-3.5" />
            Welcome to ANU
          </div>

<<<<<<< HEAD
          <h2 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
=======
          <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
>>>>>>> fa886b6 (A safe commit1)
            About the <span className="text-[oklch(0.32_0.12_260)]">University</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            At <span className="font-semibold text-foreground">Acharya Nagarjuna University</span>, established in
            1976, we have been committed to academic growth and excellence for over four decades. Spread across
            <span className="font-semibold text-foreground"> 300 acres</span> between Vijayawada and Guntur, our
            university offers a wide range of undergraduate, postgraduate, and research programs, serving a vibrant
            community of over <span className="font-semibold text-foreground">5,000 students</span>.
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Named after the great philosopher Acharya Nagarjuna, our institution draws inspiration from his timeless
            wisdom and pursuit of truth. We believe that education is not just about knowledge, but about discovering
            the truth within ourselves.
          </p>

<<<<<<< HEAD
          {/* Quick stats */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { v: "50+", l: "Years of Legacy" },
              { v: "300", l: "Acre Campus" },
              { v: "5,000+", l: "Students" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border/60 bg-white/70 p-4 text-center backdrop-blur">
                <p className="font-serif text-2xl font-bold text-[oklch(0.32_0.12_260)] md:text-3xl">{s.v}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>

          {/* VC + Quote combined card (matches sketch — image on top, content below) */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]">
            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
              {/* VC image with light gradient backdrop */}
              <div className="relative flex items-end justify-center overflow-hidden bg-gradient-to-br from-[oklch(0.95_0.04_255)] via-[oklch(0.92_0.06_250)] to-[oklch(0.88_0.09_245)] p-6 md:p-4">
                {/* Decorative frame */}
                <div aria-hidden className="absolute inset-6 rounded-2xl border border-white/60" />
                <div aria-hidden className="absolute left-3 top-3 h-16 w-16 rounded-full bg-white/40 blur-2xl" />
                <div aria-hidden className="absolute bottom-4 right-4 h-20 w-20 rounded-full bg-[oklch(0.78_0.12_255)]/30 blur-2xl" />
                <img
                  src={vcImage}
                  alt="Prof. K. Gangadhara Rao, Vice Chancellor"
                  className="relative z-10 h-56 w-auto object-contain drop-shadow-xl md:h-64"
                />
              </div>

              {/* Content: title, quote, message */}
              <div className="flex flex-col justify-center gap-4 p-6 md:p-8">
=======
          <div className="mt-8 max-w-2xl rounded-2xl border border-border/70 bg-white p-4 shadow-[0_16px_45px_-30px_rgba(15,23,42,0.3)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[oklch(0.95_0.04_255)]">
                  <img
                    src={vcImage}
                    alt="Prof. K. Gangadhara Rao, Vice Chancellor"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
>>>>>>> fa886b6 (A safe commit1)
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[oklch(0.32_0.12_260)]">
                    Vice Chancellor
                  </p>
<<<<<<< HEAD
                  <p className="mt-1 font-serif text-2xl font-semibold text-foreground">
                    Prof. K. Gangadhara Rao
                  </p>
                </div>

                <blockquote className="relative rounded-xl bg-[oklch(0.97_0.02_255)] p-4 pl-10">
                  <Quote className="absolute left-3 top-3 h-5 w-5 text-[oklch(0.32_0.12_260)]/60" />
                  <p className="font-serif text-base italic text-foreground">"Satye Sarvam Pratishitam"</p>
                  <p className="mt-1 text-xs text-muted-foreground">— Everything is established in truth.</p>
                </blockquote>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  A heartfelt message from our Vice Chancellor on academic excellence, integrity, and the
                  university's vision for the next decade.
                </p>

                <a
                  href="#"
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[oklch(0.32_0.12_260)] hover:underline"
                >
                  Read full message <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
=======
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    Prof. K. Gangadhara Rao
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Academic excellence, integrity, and ANU's vision for the next decade.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border sm:h-16 sm:w-px" aria-hidden />

              <blockquote className="relative pl-8">
                <Quote className="absolute left-0 top-0.5 h-5 w-5 text-[oklch(0.32_0.12_260)]/60" />
                <p className="text-sm font-medium italic text-foreground">"Satye Sarvam Pratishitam"</p>
                <p className="mt-1 text-xs text-muted-foreground">Everything is established in truth.</p>
              </blockquote>
>>>>>>> fa886b6 (A safe commit1)
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* RIGHT — Dashboard */}
        <div className="lg:col-span-4">
          <div className="sticky top-6 overflow-hidden rounded-3xl border border-border/60 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/60 bg-gradient-to-r from-[oklch(0.28_0.12_265)] to-[oklch(0.38_0.14_255)] px-5 py-4 text-white">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-80">Dashboard</p>
                <h3 className="mt-0.5 text-lg font-semibold">Updates & Announcements</h3>
              </div>
              <div className="hidden items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium backdrop-blur sm:inline-flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                Live
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 border-b border-border/60 bg-[oklch(0.985_0.005_250)] px-3 pt-3">
              {tabs.map((t) => {
                const Icon = t.icon;
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`group relative flex flex-1 items-center justify-center gap-2 rounded-t-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white text-[oklch(0.32_0.12_260)]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{t.label}</span>
                    <span
                      className={`ml-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${
                        isActive
                          ? "bg-[oklch(0.32_0.12_260)] text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {t.count}
                    </span>
                    {isActive && (
                      <span className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-[oklch(0.32_0.12_260)]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="border-b border-border/60 bg-white px-5 py-3">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-[oklch(0.985_0.005_250)] px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Search ${current.label.toLowerCase()}...`}
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
            </div>

            {/* List */}
            <ul className="max-h-[420px] divide-y divide-border/60 overflow-y-auto bg-white">
              {filtered.length === 0 ? (
                <li className="px-5 py-10 text-center text-sm text-muted-foreground">No items found.</li>
              ) : (
                filtered.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href ?? "#"}
                      className="group flex items-start gap-3 px-5 py-4 transition-colors hover:bg-[oklch(0.97_0.02_255)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.32_0.12_260)]/60 group-hover:bg-[oklch(0.32_0.12_260)]" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-sm font-medium leading-snug text-foreground group-hover:text-[oklch(0.32_0.12_260)]">
                            {item.title}
                          </p>
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-[oklch(0.32_0.12_260)]" />
                        </div>
                        <div className="mt-1.5 flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{item.date}</span>
                          <TagPill tag={item.tag} />
                        </div>
                      </div>
                    </a>
                  </li>
                ))
              )}
            </ul>

            {/* Footer */}
            <a
              href="#"
              className="flex items-center justify-between border-t border-border/60 bg-[oklch(0.985_0.005_250)] px-5 py-3 text-sm font-medium text-[oklch(0.32_0.12_260)] hover:bg-[oklch(0.97_0.02_255)]"
            >
              <span>View all {current.label.toLowerCase()}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
=======
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-3xl border border-border/70 bg-white shadow-[0_24px_70px_-35px_rgba(15,23,42,0.35)]">
            <img
              src={bgImage}
              alt="Acharya Nagarjuna University campus"
              className="aspect-[4/3] h-full w-full object-cover"
            />
>>>>>>> fa886b6 (A safe commit1)
          </div>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> fa886b6 (A safe commit1)
