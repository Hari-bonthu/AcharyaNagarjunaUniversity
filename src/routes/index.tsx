import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { UniversityNavbar } from "@/components/university-navbar";
import { NotificationsSection, WelcomeSection } from "@/components/welcome-section";
import { GoldenJubileeScroll } from "@/components/golden-jubilee-scroll";
<<<<<<< HEAD
import { WelcomeSection } from "@/components/welcome-section";
import { SchoolsSection } from "@/components/schools-section";
import { StatsSection } from "@/components/stats-section";
import { FaqSection } from "@/components/faq-section";
=======
import { CollegeSection } from "@/components/college-section";
import { StatsSection } from "@/components/stats-section";
import { FaqSection } from "@/components/faq-section";
import BreadcrumbTrail from "@/components/BreadcrumbTrail";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
>>>>>>> fa886b6 (A safe commit1)
import { Phone, Mail, Award } from "lucide-react";
import emblem from "@/assets/university-emblem.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      {/* Top utility ribbon (navy) */}
      <div
        className="w-full text-xs"
        style={{
          backgroundColor: "var(--utility-bar)",
          color: "var(--utility-bar-foreground)",
        }}
      >
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-2.5 lg:px-8">
          <div className="flex flex-wrap items-center gap-6">
            <a href="tel:+918632346114" className="flex items-center gap-2 opacity-90 hover:opacity-100">
              <Phone className="h-3.5 w-3.5" aria-hidden />
              <span>+91 863 234 6114</span>
            </a>
            <a href="mailto:registrar@anu.ac.in" className="flex items-center gap-2 opacity-90 hover:opacity-100">
              <Mail className="h-3.5 w-3.5" aria-hidden />
              <span>registrar@anu.ac.in</span>
            </a>
          </div>
          <div className="hidden items-center gap-5 lg:flex">
            {["Placements", "Careers", "Contact"].map((l) => (
              <a key={l} href="#" className="font-medium hover:underline" style={{ color: "var(--utility-bar-accent)" }}>
                {l}
              </a>
            ))}
            <span className="opacity-40">|</span>
            <a href="#" className="opacity-90 hover:opacity-100">Student Portal</a>
            <a href="#" className="opacity-90 hover:opacity-100">Employee Portal</a>
            <a href="#" className="opacity-90 hover:opacity-100">WebMail</a>
          </div>
        </div>
      </div>

      {/* Accreditation banner */}
      <div className="w-full border-b border-border bg-[oklch(0.97_0.02_85)]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-3 text-center">
          <Award className="hidden h-6 w-6 shrink-0 text-[oklch(0.55_0.15_30)] sm:block" aria-hidden />
          <p className="text-sm leading-snug text-foreground sm:text-base">
            <span className="font-semibold">Accredited by NAAC with "A+ Grade</span>{" "}
            <span className="font-semibold">(With 3.46 Outstanding Score</span>
            <br className="hidden sm:block" />
            <span>in Dual Mode Category — First in the State &amp; Country)"</span>
          </p>
        </div>
      </div>

      {/* Logo + Title row */}
      <div className="w-full bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-6 py-6 md:grid-cols-[auto_1fr_auto]">
          <img
            src={emblem}
            alt="University emblem"
            width={120}
            height={120}
            className="mx-auto h-24 w-24 object-contain md:h-28 md:w-28"
          />
          <div className="text-center">
            <p className="text-2xl font-bold tracking-wide text-[#d71920] md:text-4xl">
              ఆచార్య నాగార్జున విశ్వవిద్యాలయం
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-wide text-[oklch(0.22_0.06_265)] md:text-4xl">
              ACHARYA NAGARJUNA UNIVERSITY
            </h1>
          </div>
          <div className="mx-auto flex items-center justify-center">
            <GoldenJubileeScroll variant="inline" />
          </div>
        </div>
      </div>

      <UniversityNavbar />

      {/* Scrolling marquee with latest updates */}
      <div className="w-full overflow-hidden border-y border-border bg-[oklch(0.98_0.005_250)]">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-2 text-sm">
          <span className="rounded bg-[oklch(0.72_0.18_145)] px-2 py-0.5 text-xs font-bold text-white">
            NEW
          </span>
          <p className="truncate text-foreground">
            Advertisement for the post of Research Assistant and Field Investigator for ICSSR funded
            Major Research Project 2026-2027 &nbsp; || &nbsp; EXAMINATION SCHEDULE OF M.PHIL PART-1 / PRE Ph.D EXAMINATION JULY 2026.
          </p>
        </div>
      </div>

<<<<<<< HEAD
      <main>
        <WelcomeSection />
        <SchoolsSection />
=======
      <main className="w-full bg-background">
        <BreadcrumbTrail items={[{ label: "Home" }]} />
        <BannerCarousel />
        <NotificationsSection />
        <WelcomeSection />
        <CollegeSection />
>>>>>>> fa886b6 (A safe commit1)
        <StatsSection />
        <FaqSection />
      </main>
    </div>
  );
}

const bannerSlides = [
  {
    label: "Banner 1",
    className: "bg-[linear-gradient(135deg,oklch(0.46_0.13_155),oklch(0.72_0.14_145))]",
  },
  {
    label: "Banner 2",
    className: "bg-[linear-gradient(135deg,oklch(0.52_0.15_35),oklch(0.72_0.18_45))]",
  },
  {
    label: "Banner 3",
    className: "bg-[linear-gradient(135deg,oklch(0.38_0.08_250),oklch(0.62_0.12_215))]",
  },
];

function BannerCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrentSlide = () => setCurrent(api.selectedScrollSnap());

    updateCurrentSlide();
    api.on("select", updateCurrentSlide);
    api.on("reInit", updateCurrentSlide);

    return () => {
      api.off("select", updateCurrentSlide);
      api.off("reInit", updateCurrentSlide);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => window.clearInterval(timer);
  }, [api]);

  return (
    <section aria-label="College banners" className="mx-auto max-w-7xl border-x border-b border-border">
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-0">
          {bannerSlides.map((slide) => (
            <CarouselItem key={slide.label} className="pl-0">
              <div
                className={`flex min-h-[260px] items-center justify-center px-6 text-center sm:min-h-[360px] lg:min-h-[460px] ${slide.className}`}
              >
                <h2 className="text-4xl font-bold uppercase tracking-wide text-white drop-shadow sm:text-5xl lg:text-6xl">
                  {slide.label}
                </h2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 h-10 w-10 border-white/40 bg-white/85 text-foreground hover:bg-white" />
        <CarouselNext className="right-4 h-10 w-10 border-white/40 bg-white/85 text-foreground hover:bg-white" />
      </Carousel>

      <div className="flex justify-center gap-2 bg-background py-3">
        {bannerSlides.map((slide, index) => (
          <button
            key={slide.label}
            type="button"
            aria-label={`Show ${slide.label}`}
            aria-current={current === index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2.5 rounded-full transition-all ${
              current === index
                ? "w-8 bg-[oklch(0.45_0.12_155)]"
                : "w-2.5 bg-muted-foreground/35 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
