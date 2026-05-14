import { useEffect, useRef, useState } from "react";
<<<<<<< HEAD
import { Award, FlaskConical, Trophy, BookOpen } from "lucide-react";
=======
import { Award, FlaskConical, Trophy, BookOpen, Sparkles } from "lucide-react";
>>>>>>> fa886b6 (A safe commit1)

type Stat = {
  icon: typeof Award;
  value: number;
<<<<<<< HEAD
  display: (n: number) => string;
  suffix: string;
=======
  suffix?: string;
>>>>>>> fa886b6 (A safe commit1)
  label: string;
  caption: string;
};

<<<<<<< HEAD
const formatCompact = (n: number) => {
  if (n >= 1000) {
    const k = n / 1000;
    return (k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)) + "K";
  }
  return n.toString();
};

const stats: Stat[] = [
  {
    icon: Award,
    value: 66,
    display: (n) => n.toString(),
    suffix: "",
    label: "Patents",
    caption: "Granted to faculty & researchers",
  },
  {
    icon: FlaskConical,
    value: 200,
    display: (n) => n.toString(),
    suffix: "+",
    label: "Research Projects",
    caption: "Funded by ICSSR, DST, UGC & industry",
  },
  {
    icon: Trophy,
    value: 112,
    display: (n) => n.toString(),
    suffix: "",
    label: "National Ranks",
    caption: "Academic & sports achievements",
  },
  {
    icon: BookOpen,
    value: 15000,
    display: formatCompact,
    suffix: "+",
    label: "Publications",
    caption: "In peer-reviewed journals worldwide",
  },
];

function useCountUp(target: number, start: boolean, duration = 1600) {
=======
const stats: Stat[] = [
  { icon: Award, value: 66, label: "Patents", caption: "Granted to faculty & researchers", suffix: "" },
  { icon: FlaskConical, value: 200, suffix: "+", label: "Research Projects", caption: "Funded by ICSSR, DST, UGC & industry" },
  { icon: Trophy, value: 112, label: "National Ranks", caption: "Academic & sports achievements", suffix: "" },
  { icon: BookOpen, value: 15000, suffix: "+", label: "Research Publications", caption: "In peer-reviewed journals worldwide" },
];

function useCountUp(target: number, start: boolean, duration = 1800) {
>>>>>>> fa886b6 (A safe commit1)
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTs = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTs) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

<<<<<<< HEAD
function StatRow({ stat, inView }: { stat: Stat; inView: boolean }) {
  const Icon = stat.icon;
  const v = useCountUp(stat.value, inView);
  return (
    <div className="group relative flex flex-col justify-between gap-6 border-border p-8 transition-colors duration-300 hover:bg-[oklch(0.98_0.01_260)] sm:p-10">
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[oklch(0.32_0.12_260)]/8 text-[oklch(0.32_0.12_260)] transition-all duration-300 group-hover:bg-[oklch(0.32_0.12_260)] group-hover:text-white">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
=======
function StatCard({ stat, inView, index }: { stat: Stat; inView: boolean; index: number }) {
  const Icon = stat.icon;
  const v = useCountUp(stat.value, inView);
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-border/70 bg-white p-6 text-center shadow-[0_18px_50px_-34px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-[oklch(0.65_0.19_42)]/40 hover:shadow-[0_24px_60px_-34px_rgba(15,23,42,0.45)] sm:p-8"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.18_45)]/60 to-transparent opacity-50" />

      <div className="relative flex flex-col items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[oklch(0.72_0.18_45)]/30 bg-[oklch(0.72_0.18_45)]/10 text-[oklch(0.78_0.17_45)]">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
>>>>>>> fa886b6 (A safe commit1)
          {stat.label}
        </span>
      </div>

<<<<<<< HEAD
      <div>
        <div className="flex items-baseline gap-1 tabular-nums">
          <span className="text-6xl font-bold tracking-tight text-[oklch(0.22_0.06_265)] sm:text-7xl">
            {stat.display(v)}
          </span>
          {stat.suffix && (
            <span className="text-3xl font-bold text-[oklch(0.55_0.15_60)] sm:text-4xl">
              {stat.suffix}
            </span>
          )}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {stat.caption}
        </p>
      </div>
=======
      <div className="relative mt-6 flex min-h-[64px] items-baseline justify-center gap-1">
        <span className="text-5xl font-semibold leading-none tracking-tight text-[oklch(0.22_0.06_265)] tabular-nums sm:text-6xl">
          {v.toLocaleString()}
        </span>
        {stat.suffix && (
          <span className="text-3xl font-semibold leading-none text-[oklch(0.65_0.19_42)] sm:text-4xl">
            {stat.suffix}
          </span>
        )}
      </div>

      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
        {stat.caption}
      </p>
>>>>>>> fa886b6 (A safe commit1)
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
<<<<<<< HEAD
      { threshold: 0.2 },
=======
      { threshold: 0.25 },
>>>>>>> fa886b6 (A safe commit1)
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
<<<<<<< HEAD
    <section ref={ref} className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* subtle decorative line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header — split layout */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[oklch(0.32_0.12_260)]">
              <span className="h-px w-8 bg-[oklch(0.32_0.12_260)]" />
              By the Numbers
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-[oklch(0.18_0.04_265)] sm:text-5xl lg:text-6xl">
              Five decades of impact,<br className="hidden sm:block" />
              <span className="text-[oklch(0.32_0.12_260)]">measured</span> in milestones.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground lg:text-right">
            From pioneering research to national recognition — a snapshot of what
            ANU delivers, year after year.
          </p>
        </div>

        {/* Stats grid — editorial border style */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-white shadow-[0_1px_0_0_oklch(0.32_0.12_260/0.04),0_20px_40px_-20px_oklch(0.32_0.12_260/0.12)]">
          <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 [&>*]:border-l [&>*]:border-border first:[&>*]:border-l-0 sm:[&>*:nth-child(2n+1)]:border-l-0 sm:[&>*:nth-child(n+3)]:border-t lg:[&>*]:border-l lg:[&>*:nth-child(n+3)]:border-t-0 lg:[&>*:first-child]:border-l-0 lg:[&>*:nth-child(2n+1)]:border-l">
            {stats.map((s) => (
              <StatRow key={s.label} stat={s} inView={inView} />
            ))}
          </div>
=======
    <section
      ref={ref}
      className="relative overflow-hidden bg-white"
    >
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.72_0.18_45)]/30 bg-[oklch(0.72_0.18_45)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.55_0.16_42)]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            By the Numbers
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-[oklch(0.22_0.06_265)] sm:text-4xl lg:text-5xl">
            Five decades of impact, measured in milestones
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From pioneering research to national recognition - a snapshot of what
            Acharya Nagarjuna University delivers, year after year.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} inView={inView} index={i} />
          ))}
>>>>>>> fa886b6 (A safe commit1)
        </div>
      </div>
    </section>
  );
}
