import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Award, Mail, Phone } from "lucide-react";
import { CollegeSection } from "@/components/college-section";
import { FaqSection } from "@/components/faq-section";
import { GoldenJubileeScroll } from "@/components/golden-jubilee-scroll";
import { StatsSection } from "@/components/stats-section";
import { UniversityNavbar } from "@/components/university-navbar";
import { NotificationsSection, WelcomeSection } from "@/components/welcome-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import emblem from "@/assets/university-emblem.png";

const bannerImages = Object.entries(
  import.meta.glob("../assets/banners/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
    query: "?url",
  }),
)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
  )
  .map(([path, src]) => ({
    src: src as string,
    alt: `Acharya Nagarjuna University banner ${path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? ""}`,
  }));

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
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
            {["Placements", "Careers", "Contact"].map((label) => (
              <a
                key={label}
                href="#"
                className="font-medium hover:underline"
                style={{ color: "var(--utility-bar-accent)" }}
              >
                {label}
              </a>
            ))}
            <span className="opacity-40">|</span>
            <a href="#" className="opacity-90 hover:opacity-100">
              Student Portal
            </a>
            <a href="#" className="opacity-90 hover:opacity-100">
              Employee Portal
            </a>
            <a href="#" className="opacity-90 hover:opacity-100">
              WebMail
            </a>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-border bg-[oklch(0.97_0.02_85)]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-3 text-center">
          <Award className="hidden h-6 w-6 shrink-0 text-[oklch(0.55_0.15_30)] sm:block" aria-hidden />
          <p className="text-sm leading-snug text-foreground sm:text-base">
            <span className="font-semibold">Accredited by NAAC with "A+ Grade</span>{" "}
            <span className="font-semibold">(With 3.46 Outstanding Score</span>
            <br className="hidden sm:block" />
            <span>in Dual Mode Category - First in the State &amp; Country)"</span>
          </p>
        </div>
      </div>

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
              Acharya Nagarjuna University
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

      <div className="w-full overflow-hidden border-y border-border bg-[oklch(0.98_0.005_250)]">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-2 text-sm">
          <span className="rounded bg-[oklch(0.72_0.18_145)] px-2 py-0.5 text-xs font-bold text-white">NEW</span>
          <p className="truncate text-foreground">
            Advertisement for the post of Research Assistant and Field Investigator for ICSSR funded Major Research
            Project 2026-2027 &nbsp; || &nbsp; EXAMINATION SCHEDULE OF M.PHIL PART-1 / PRE Ph.D EXAMINATION JULY 2026.
          </p>
        </div>
      </div>

      <main className="w-full bg-background">
        <BannerCarousel />
        <NotificationsSection />
        <WelcomeSection />
        <CollegeSection />
        <StatsSection />
        <FaqSection />
      </main>
    </div>
  );
}

function BannerCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => window.clearInterval(timer);
  }, [api]);

  return (
    <section aria-label="University banners" className="w-full overflow-hidden border-b border-border bg-[oklch(0.12_0.03_260)]">
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-0">
          {bannerImages.map((banner, index) => (
            <CarouselItem key={banner.src} className="pl-0">
              <div className="relative h-[220px] w-full overflow-hidden bg-[oklch(0.12_0.03_260)] sm:h-[340px] lg:h-[500px] xl:h-[540px]">
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  sizes="100vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 h-10 w-10 border-white/40 bg-white/85 text-foreground hover:bg-white" />
        <CarouselNext className="right-4 h-10 w-10 border-white/40 bg-white/85 text-foreground hover:bg-white" />
      </Carousel>
    </section>
  );
}
