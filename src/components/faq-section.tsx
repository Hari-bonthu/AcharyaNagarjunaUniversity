import { useMemo, useState } from "react";
<<<<<<< HEAD
import { Search, ArrowUpRight, Mail, Phone, MessageSquare, Sparkles } from "lucide-react";
=======
import { Search, Plus, Mail, Phone, MessageSquare, HelpCircle } from "lucide-react";
>>>>>>> fa886b6 (A safe commit1)

type Faq = {
  q: string;
  a: string;
  category: "Admissions" | "Academics" | "About" | "Campus";
};

const faqs: Faq[] = [
  {
    category: "Academics",
    q: "How many PG courses are offered by Acharya Nagarjuna University?",
<<<<<<< HEAD
    a: "ANU offers 100+ postgraduate programmes across Engineering, Sciences, Pharmacy, Arts, Management, Education, Law and Physical Sciences — including M.Tech, M.Sc, M.A, M.Com, MBA, MCA, M.Pharm and integrated dual-degree tracks.",
=======
    a: "ANU offers 100+ postgraduate programmes across Engineering, Sciences, Pharmacy, Arts, Management, Education, Law and Physical Sciences - including M.Tech, M.Sc, M.A, M.Com, MBA, MCA, M.Pharm and integrated dual-degree tracks.",
>>>>>>> fa886b6 (A safe commit1)
  },
  {
    category: "About",
    q: "How many colleges are affiliated under Acharya Nagarjuna University?",
    a: "Over 450 colleges across the Krishna, Guntur, Bapatla, Palnadu and Prakasam districts are affiliated to ANU, spanning constituent, autonomous and professional institutions.",
  },
  {
    category: "About",
    q: "What is the vision of Acharya Nagarjuna University?",
<<<<<<< HEAD
    a: "To emerge as a globally recognised centre of academic excellence and research, fostering intellectual, social and ethical development guided by the principle “Satye Sarvam Pratishitam” — everything is established in truth.",
=======
    a: "To emerge as a globally recognised centre of academic excellence and research, fostering intellectual, social and ethical development guided by the principle \"Satye Sarvam Pratishitam\" - everything is established in truth.",
>>>>>>> fa886b6 (A safe commit1)
  },
  {
    category: "About",
    q: "What is the mission of Acharya Nagarjuna University?",
    a: "To impart quality higher education, promote interdisciplinary research, nurture innovation and entrepreneurship, and develop socially responsible citizens equipped to serve the nation and humanity.",
  },
  {
    category: "Admissions",
    q: "Is Acharya Nagarjuna University a government or private institution?",
    a: "ANU is a state public university, established by an Act of the Andhra Pradesh State Legislature in 1976, and is fully recognised by the UGC. It is accredited by NAAC with an A+ grade.",
  },
  {
    category: "Admissions",
    q: "How do I apply for admissions at ANU?",
    a: "Admissions are conducted through state-level common entrance tests (AP EAPCET, ICET, PGCET, LAWCET) and direct ANU notifications. Visit the Directorate of Admissions portal during the announced admission window.",
  },
  {
    category: "Campus",
    q: "What facilities are available on the ANU campus?",
    a: "The 300-acre campus offers modern hostels, a central library with 3 lakh+ volumes, sports complex, health centre, banks, post office, transport, and dedicated research labs across every school.",
  },
];

const categories = ["All", "Admissions", "Academics", "About", "Campus"] as const;
type Category = (typeof categories)[number];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const matchCat = active === "All" || f.category === active;
<<<<<<< HEAD
      const matchQ = !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
=======
      const matchQ =
        !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
>>>>>>> fa886b6 (A safe commit1)
      return matchCat && matchQ;
    });
  }, [query, active]);

  return (
<<<<<<< HEAD
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[oklch(0.32_0.12_260)]">
            <span className="h-px w-8 bg-[oklch(0.32_0.12_260)]" />
            Help Centre
            <span className="h-px w-8 bg-[oklch(0.32_0.12_260)]" />
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-[oklch(0.18_0.04_265)] sm:text-5xl">
            Questions, <span className="text-[oklch(0.32_0.12_260)]">answered.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Everything students, parents and staff need to know about admissions, academics and life at ANU.
          </p>
        </div>

        {/* Search + chips */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
=======
    <section className="relative overflow-hidden bg-[oklch(0.985_0.005_250)] py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[oklch(0.32_0.12_260)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[oklch(0.72_0.18_45)]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[360px_1fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.32_0.12_260)]/20 bg-white px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[oklch(0.32_0.12_260)]">
            <HelpCircle className="h-3.5 w-3.5" aria-hidden />
            Help Centre
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[oklch(0.22_0.06_265)] sm:text-4xl">
            Get every single answer, right here.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Search the most common questions about admissions, academics and
            campus life - or reach out to our team directly. We typically reply
            within one working day.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href="mailto:registrar@anu.ac.in"
              className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition hover:border-[oklch(0.32_0.12_260)]/40 hover:shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.32_0.12_260)]/8 text-[oklch(0.32_0.12_260)]">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex-1">
                <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <span className="block text-sm font-medium text-foreground">
                  registrar@anu.ac.in
                </span>
              </span>
            </a>
            <a
              href="tel:+918632346114"
              className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition hover:border-[oklch(0.32_0.12_260)]/40 hover:shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.32_0.12_260)]/8 text-[oklch(0.32_0.12_260)]">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex-1">
                <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Call
                </span>
                <span className="block text-sm font-medium text-foreground">
                  +91 863 234 6114
                </span>
              </span>
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 rounded-xl border border-[oklch(0.32_0.12_260)]/20 bg-[oklch(0.32_0.12_260)] p-4 text-white transition hover:bg-[oklch(0.28_0.1_265)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white">
                <MessageSquare className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex-1">
                <span className="block text-xs font-medium uppercase tracking-wider text-white/70">
                  Live chat
                </span>
                <span className="block text-sm font-medium">
                  Talk to a counsellor
                </span>
              </span>
            </a>
          </div>
        </div>

        <div>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
>>>>>>> fa886b6 (A safe commit1)
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
<<<<<<< HEAD
              placeholder="Search admissions, hostel, PG courses…"
              className="h-14 w-full rounded-full border border-border bg-[oklch(0.985_0.005_250)] pl-12 pr-5 text-[15px] outline-none transition placeholder:text-muted-foreground focus:border-[oklch(0.32_0.12_260)]/50 focus:bg-white focus:shadow-[0_8px_24px_-12px_oklch(0.32_0.12_260/0.25)]"
            />
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
=======
              placeholder="Search questions - e.g. admissions, hostel, PG courses..."
              className="h-14 w-full rounded-2xl border border-border bg-white pl-12 pr-4 text-base shadow-sm outline-none ring-0 transition placeholder:text-muted-foreground focus:border-[oklch(0.32_0.12_260)]/40 focus:shadow-md"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
>>>>>>> fa886b6 (A safe commit1)
            {categories.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={
<<<<<<< HEAD
                    "rounded-full px-4 py-1.5 text-xs font-medium transition " +
                    (isActive
                      ? "bg-[oklch(0.18_0.04_265)] text-white"
                      : "bg-[oklch(0.96_0.01_260)] text-foreground hover:bg-[oklch(0.92_0.02_260)]")
=======
                    "rounded-full border px-4 py-1.5 text-xs font-medium transition " +
                    (isActive
                      ? "border-[oklch(0.32_0.12_260)] bg-[oklch(0.32_0.12_260)] text-white shadow-sm"
                      : "border-border bg-white text-foreground hover:border-[oklch(0.32_0.12_260)]/40")
>>>>>>> fa886b6 (A safe commit1)
                  }
                >
                  {c}
                </button>
              );
            })}
          </div>
<<<<<<< HEAD
        </div>

        {/* Two-column: accordion + contact */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
          {/* Accordion */}
          <div className="space-y-3">
            {filtered.length === 0 && (
              <div className="rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
=======

          <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            {filtered.length === 0 && (
              <div className="p-10 text-center text-sm text-muted-foreground">
>>>>>>> fa886b6 (A safe commit1)
                No questions match your search. Try a different keyword.
              </div>
            )}
            {filtered.map((f, i) => {
              const isOpen = open === i;
              return (
<<<<<<< HEAD
                <div
                  key={f.q}
                  className={
                    "overflow-hidden rounded-2xl border transition-all duration-300 " +
                    (isOpen
                      ? "border-[oklch(0.32_0.12_260)]/30 bg-white shadow-[0_12px_32px_-16px_oklch(0.32_0.12_260/0.25)]"
                      : "border-border bg-white hover:border-[oklch(0.32_0.12_260)]/20")
                  }
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-5 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-muted-foreground tabular-nums sm:text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[15px] font-medium leading-snug text-[oklch(0.18_0.04_265)] sm:text-base">
=======
                <div key={f.q} className="group">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start gap-4 p-5 text-left transition hover:bg-[oklch(0.97_0.02_260)] sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="mt-0.5 inline-flex shrink-0 items-center justify-center rounded-md bg-[oklch(0.32_0.12_260)]/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[oklch(0.32_0.12_260)]">
                      {f.category}
                    </span>
                    <span className="flex-1 text-[15px] font-medium leading-snug text-foreground sm:text-base">
>>>>>>> fa886b6 (A safe commit1)
                      {f.q}
                    </span>
                    <span
                      className={
<<<<<<< HEAD
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 " +
                        (isOpen
                          ? "rotate-45 border-[oklch(0.32_0.12_260)] bg-[oklch(0.32_0.12_260)] text-white"
                          : "border-border text-foreground")
                      }
                      aria-hidden
                    >
                      <span className="relative block h-3 w-3">
                        <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-current" />
                        <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
                      </span>
=======
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-white text-foreground transition-transform duration-300 " +
                        (isOpen ? "rotate-45 border-[oklch(0.32_0.12_260)] bg-[oklch(0.32_0.12_260)] text-white" : "group-hover:border-[oklch(0.32_0.12_260)]/40")
                      }
                      aria-hidden
                    >
                      <Plus className="h-4 w-4" />
>>>>>>> fa886b6 (A safe commit1)
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden transition-all duration-300 ease-out"
<<<<<<< HEAD
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <div className="px-6 pb-6 pl-[3.75rem] pr-16 text-[14px] leading-relaxed text-muted-foreground sm:px-8 sm:pl-[4.5rem]">
                        <span className="mb-3 inline-flex items-center rounded-full bg-[oklch(0.32_0.12_260)]/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[oklch(0.32_0.12_260)]">
                          {f.category}
                        </span>
                        <p>{f.a}</p>
=======
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="min-h-0">
                      <div className="px-5 pb-6 pl-[4.25rem] pr-12 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pl-[5.25rem]">
                        {f.a}
>>>>>>> fa886b6 (A safe commit1)
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
<<<<<<< HEAD

          {/* Contact card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl bg-[oklch(0.18_0.04_265)] p-7 text-white">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[oklch(0.85_0.14_80)]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Still curious?
              </div>
              <h3 className="mt-3 text-2xl font-bold leading-snug">
                Talk to a real human counsellor.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Our team typically replies within one working day.
              </p>

              <div className="mt-6 space-y-2">
                <a
                  href="mailto:registrar@anu.ac.in"
                  className="group flex items-center gap-3 rounded-xl bg-white/[0.06] p-3.5 transition hover:bg-white/[0.12]"
                >
                  <Mail className="h-4 w-4 text-[oklch(0.85_0.14_80)]" aria-hidden />
                  <span className="flex-1 text-sm font-medium">registrar@anu.ac.in</span>
                  <ArrowUpRight className="h-4 w-4 text-white/50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" aria-hidden />
                </a>
                <a
                  href="tel:+918632346114"
                  className="group flex items-center gap-3 rounded-xl bg-white/[0.06] p-3.5 transition hover:bg-white/[0.12]"
                >
                  <Phone className="h-4 w-4 text-[oklch(0.85_0.14_80)]" aria-hidden />
                  <span className="flex-1 text-sm font-medium">+91 863 234 6114</span>
                  <ArrowUpRight className="h-4 w-4 text-white/50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" aria-hidden />
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-3 rounded-xl bg-[oklch(0.85_0.14_80)] p-3.5 text-[oklch(0.18_0.04_265)] transition hover:bg-[oklch(0.88_0.14_80)]"
                >
                  <MessageSquare className="h-4 w-4" aria-hidden />
                  <span className="flex-1 text-sm font-semibold">Start live chat</span>
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </a>
              </div>
            </div>
          </aside>
=======
>>>>>>> fa886b6 (A safe commit1)
        </div>
      </div>
    </section>
  );
}
