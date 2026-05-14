import { Link } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbItemData = {
  label: string;
  href?: string;
};

export function BreadcrumbTrail({ items }: { items: BreadcrumbItemData[] }) {
  return (
    <div className="border-b border-border bg-white/85 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <BreadcrumbItem key={`${item.label}-${index}`}>
                  {item.href && !isLast ? (
                    <BreadcrumbLink asChild>
                      <Link to={item.href}>{item.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                  {!isLast && <BreadcrumbSeparator />}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default BreadcrumbTrail;
