import React from "react";
import { Link } from "@tanstack/react-router";
import BreadcrumbTrail from "@/components/BreadcrumbTrail";
import { ChevronRight } from "lucide-react";
import { employeeServiceTabs } from "@/data/employee-services-app";

export function EmployeeServicesShell({
  pageId,
  children,
}: {
  pageId: string;
  children: React.ReactNode;
}) {
  const activeTab =
    employeeServiceTabs.find((tab) => tab.key === pageId) ??
    employeeServiceTabs[0];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        :root {
          --ink: #0f172a;
          --ink-mid: #1e293b;
          --corporate: #0284c7;
          --corporate-light: #38bdf8;
          --parchment: #f8fafc;
          --parchment-dark: #f1f5f9;
          --cream: #ffffff;
          --rule: #e2e8f0;
          --muted: #475569;
        }

        .employee-root {
          background-color: var(--parchment);
          min-height: 100vh;
          font-family: 'Source Serif 4', Georgia, serif;
          color: var(--ink);
        }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-serif { font-family: 'Source Serif 4', Georgia, serif; }
        .font-garamond { font-family: 'EB Garamond', serif; }

        .employee-masthead {
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%);
          position: relative;
          overflow: hidden;
        }

        .employee-masthead::before {
          content: 'EMPLOYEE';
          position: absolute;
          right: -2rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: 14rem;
          font-weight: 700;
          color: rgba(56,189,248,0.05);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .corporate-rule {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--corporate), var(--corporate-light), var(--corporate), transparent);
        }

        .sidebar-menu {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          overflow: hidden;
          position: sticky;
          top: 6rem;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--rule);
          color: var(--muted);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
        }

        .sidebar-link:last-child {
          border-bottom: none;
        }

        .sidebar-link:hover {
          background: var(--parchment-dark);
          color: var(--ink);
        }

        .sidebar-link[data-active="true"] {
          background: var(--ink);
          color: #fff;
        }

        .sidebar-link[data-active="true"] .sidebar-icon {
          color: var(--corporate-light);
        }
      `}</style>

      <div className="employee-root pb-24">
        <div className="employee-masthead py-16 text-center text-white lg:py-24">
          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <h1 className="font-playfair text-4xl font-bold tracking-tight md:text-6xl">
              Employee Services
            </h1>
            <p className="font-garamond mx-auto mt-6 max-w-2xl text-lg italic tracking-wide text-[var(--corporate-light)] md:text-xl">
              "Supporting our faculty and staff with streamlined administration, professional development, and welfare services."
            </p>
          </div>
        </div>
        <div className="corporate-rule" />

        <div className="mx-auto max-w-[1400px] px-6 py-6 lg:px-8">
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/" },
{ label: "Employee Services", href: "/employee-services" as any },
              { label: activeTab.shortTitle },
            ]}
          />
        </div>

        <div className="mx-auto max-w-[1400px] px-6 py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr]">
            <aside>
              <div className="lg:sticky lg:top-24">
                <nav
                  className="sidebar-menu"
                  aria-label="Employee Services Navigation"
                >
                  <div className="bg-[var(--parchment-dark)] px-6 py-4 border-b border-[var(--rule)]">
                    <h3 className="font-playfair text-lg font-bold text-[var(--ink)]">
                      Service Directory
                    </h3>
                  </div>
                  <div className="flex flex-col">
                    {employeeServiceTabs.map((item) => (
                      <Link
                        key={item.key}
                        to={`/employee-services/${item.key}` as any}
                        className="sidebar-link"
                        data-active={pageId === item.key}
                      >
                        {item.shortTitle}
                        <ChevronRight className="sidebar-icon h-4 w-4 opacity-50" />
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </aside>

            <main className="min-w-0" id="employee-services-content">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}


