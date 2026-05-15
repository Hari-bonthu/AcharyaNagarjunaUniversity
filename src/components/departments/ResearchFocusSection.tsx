import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionShell } from "./section-shell";
import type { ResearchFocusItem } from "./department-data";

export function ResearchFocusSection({ items }: { items: ResearchFocusItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  if (items.length === 0) {
    return null;
  }

  const scrollByCard = (direction: "prev" | "next") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const firstCard = scroller.querySelector<HTMLElement>("[data-research-card]");
    const cardWidth = firstCard?.offsetWidth ?? 340;
    const gap = 16;

    scroller.scrollBy({
      left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <SectionShell
      eyebrow="Research focus"
      title="What the department actively works on"
      className="bg-white"
    >
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <p className="max-w-3xl text-sm leading-6 text-slate-600">
          Faculty-led research areas open to M.Tech and PhD students from day one.
        </p>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByCard("prev")}
            aria-label="Previous research focus"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0f2345] shadow-sm transition hover:border-[#0f2345] hover:bg-slate-50"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("next")}
            aria-label="Next research focus"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0f2345] shadow-sm transition hover:border-[#0f2345] hover:bg-slate-50"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="-mx-6 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex snap-x snap-mandatory gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                data-research-card
                className="flex min-h-[300px] w-[82vw] max-w-[340px] shrink-0 snap-start flex-col justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-[0_22px_55px_-42px_rgba(15,35,69,0.55)] transition-colors hover:border-orange-300 sm:w-[320px]"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0f2345] shadow-sm ring-1 ring-slate-200">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="text-xs font-bold tracking-wider text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <h3 className="mt-4 text-lg font-black leading-6 tracking-tight text-[#101827]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>

                <div className="mt-4 border-t border-slate-200 pt-3">
                  <p className="text-xs leading-5 text-slate-500">
                    <span className="font-semibold text-slate-700">{item.lead}</span>
                    <span className="mx-1 text-slate-300">.</span>
                    {item.projects}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-2 w-16 rounded-full bg-slate-800" />
                    <span className="h-2 w-10 rounded-full bg-slate-200" />
                    <span className="h-2 w-6 rounded-full bg-slate-200" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
