import { SectionShell } from "./section-shell";
import type { DepartmentCardItem } from "./department-data";

export function FacilitiesSection({ items }: { items: DepartmentCardItem[] }) {
  return (
    <SectionShell
      eyebrow="Facilities / labs"
      title="Tools and spaces for practical learning"
      className="bg-[oklch(0.985_0.004_250)]"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="flex gap-4 rounded-lg bg-white p-5 shadow-[0_18px_45px_-38px_oklch(0.22_0.06_265/0.45)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[oklch(0.97_0.035_45)] text-[oklch(0.52_0.14_45)]">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <h3 className="text-base font-semibold text-[oklch(0.22_0.06_265)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </span>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
