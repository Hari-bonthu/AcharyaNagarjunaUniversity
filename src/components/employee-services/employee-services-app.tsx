import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowRight,
  BookCopy,
  BriefcaseBusiness,
  Calculator,
  CalendarDays,
  ClipboardList,
  FileText,
  GraduationCap,
  HeartHandshake,
  LayoutDashboard,
  ShieldAlert,
  Users,
  Wifi,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getEmployeeServiceTab,
  employeeServiceTabs,
  type EmployeeServiceTab,
  type EmployeeServiceTabKey,
} from "@/data/employee-services-app";

const tabIcons: Record<EmployeeServiceTabKey, typeof LayoutDashboard> = {
  overview: LayoutDashboard,
  "hr-payroll": Calculator,
  "leave-management": CalendarDays,
  "health-welfare": HeartHandshake,
  "service-records": ClipboardList,
  "professional-development": GraduationCap,
  "employee-portal": Wifi,
  "staff-grievance-cell": ShieldAlert,
  downloads: FileText,
  "retirees-pensioners": Users,
};

const toneClasses = {
  default: "border-border/70 bg-white",
  accent: "border-[color:var(--brand)]/15 bg-[oklch(0.98_0.01_255)]",
  success: "border-emerald-200 bg-emerald-50/70",
};

function ServiceTabButton({
  tab,
  active,
  onClick,
}: {
  tab: EmployeeServiceTab;
  active: boolean;
  onClick: () => void;
}) {
  const Icon = tabIcons[tab.key];

  return (
    <TabsTrigger
      value={tab.key}
      onClick={onClick}
      className="group h-auto min-w-max gap-2 rounded-xl border border-transparent px-4 py-3 data-[state=active]:border-[color:var(--brand)]/15 data-[state=active]:bg-white data-[state=active]:text-[color:var(--brand)] data-[state=active]:shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)]"
    >
      <Icon
        className={`h-4 w-4 ${active ? "text-[color:var(--brand)]" : "text-muted-foreground"}`}
      />
      <span className="text-sm font-semibold">{tab.shortTitle}</span>
      {tab.badge ? (
        <Badge variant="secondary" className="rounded-full px-2 py-0.5 text-[10px]">
          {tab.badge}
        </Badge>
      ) : null}
    </TabsTrigger>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[oklch(0.22_0.06_265)] md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{description}</p>
    </div>
  );
}

function ContentSection({ tab }: { tab: EmployeeServiceTab }) {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-border/70 bg-white p-6 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.28)] md:p-8">
        <SectionHeading eyebrow="Service Design" title={tab.title} description={tab.description} />

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {tab.metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-2xl border border-border/70 bg-[oklch(0.985_0.005_250)] p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-[color:var(--brand)]">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{metric.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {tab.highlights.map((item) => (
          <article
            key={item.title}
            className={`rounded-2xl border p-5 shadow-[0_16px_45px_-40px_rgba(15,23,42,0.32)] ${toneClasses[item.tone ?? "default"]}`}
          >
            <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </section>

      {tab.notices?.length ? (
        <section className="rounded-[28px] border border-border/70 bg-white p-6 md:p-8">
          <SectionHeading
            eyebrow="Live Queue"
            title="Notices and active checkpoints"
            description="Information is grouped by the type of action an employee may need to take next."
          />
          <div className="mt-6 space-y-4">
            {tab.notices.map((notice) => (
              <article
                key={`${notice.date}-${notice.title}`}
                className="rounded-2xl border border-border/70 bg-[oklch(0.985_0.005_250)] p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="rounded-full bg-[color:var(--brand)]/8 text-[color:var(--brand)] hover:bg-[color:var(--brand)]/8">
                    {notice.date}
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    {notice.status}
                  </Badge>
                </div>
                <h3 className="mt-3 text-base font-semibold text-foreground">{notice.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{notice.description}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {tab.steps?.length ? (
        <section className="rounded-[28px] border border-border/70 bg-white p-6 md:p-8">
          <SectionHeading
            eyebrow="Recommended Flow"
            title="How an employee should move through this service"
            description="The sequence below reduces missed steps and makes escalation cleaner when support is needed."
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {tab.steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-border/70 bg-[oklch(0.985_0.005_250)] p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand)] text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {tab.resources?.length ? (
        <section className="rounded-[28px] border border-border/70 bg-white p-6 md:p-8">
          <SectionHeading
            eyebrow="Service Catalog"
            title="Resources, forms and next actions"
            description="Instead of dead template links, each entry points the employee to the right workflow, owner or related page."
          />
          <div className="mt-6 space-y-4">
            {tab.resources.map((resource) => (
              <article
                key={resource.title}
                className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-[oklch(0.985_0.005_250)] p-5 lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="max-w-3xl">
                  <h3 className="text-base font-semibold text-foreground">{resource.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    <Badge variant="secondary" className="rounded-full">
                      {resource.channel}
                    </Badge>
                    <Badge variant="outline" className="rounded-full">
                      {resource.turnaround}
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    <span className="font-semibold text-foreground">Usually needed:</span>{" "}
                    {resource.requirements}
                  </p>
                </div>
                {resource.href ? (
                  <Link
                    to={resource.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95"
                  >
                    Open workflow
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <span className="inline-flex items-center rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground">
                    Use listed channel
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {tab.faq?.length ? (
        <section className="rounded-[28px] border border-border/70 bg-white p-6 md:p-8">
          <SectionHeading
            eyebrow="Employee Questions"
            title="FAQs for this service area"
            description="Short answers to the questions staff usually ask before contacting the office."
          />
          <div className="mt-6 space-y-4">
            {tab.faq.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-border/70 bg-[oklch(0.985_0.005_250)] p-5"
              >
                <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function SupportSidebar({ tab }: { tab: EmployeeServiceTab }) {
  return (
    <aside className="space-y-6">
      <section className="rounded-[28px] border border-border/70 bg-white p-6 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.28)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
          Need help?
        </p>
        <h2 className="mt-2 text-xl font-semibold text-foreground">Service guidance</h2>
        <div className="mt-5 space-y-4 text-sm text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground">When to use</p>
            <p className="mt-1 leading-7">{tab.supportPanel.availability}</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Turnaround mindset</p>
            <p className="mt-1 leading-7">{tab.supportPanel.responseTime}</p>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-border/70 bg-white p-6">
        <h2 className="text-lg font-semibold text-foreground">Best for</h2>
        <ul className="mt-4 space-y-3">
          {tab.supportPanel.bestFor.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-border/70 bg-[oklch(0.985_0.005_250)] p-4 text-sm leading-6 text-muted-foreground"
            >
              <BookCopy className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-[28px] border border-border/70 bg-white p-6">
        <h2 className="text-lg font-semibold text-foreground">Support contacts</h2>
        <ul className="mt-4 space-y-3">
          {(tab.contacts ?? []).map((contact) => (
            <li
              key={contact.label}
              className="rounded-2xl border border-border/70 bg-[oklch(0.985_0.005_250)] p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {contact.label}
              </p>
              {contact.href ? (
                <a
                  href={contact.href}
                  className="mt-2 inline-flex text-sm font-semibold text-[color:var(--brand)] hover:underline"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="mt-2 text-sm font-semibold text-foreground">{contact.value}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-[28px] border border-border/70 bg-white p-6">
        <h2 className="text-lg font-semibold text-foreground">Quick links</h2>
        <div className="mt-4 grid gap-3">
          <Link
            to="/pages/employee-services"
            search={{ page: "downloads" }}
            className="rounded-2xl border border-border/70 bg-[oklch(0.985_0.005_250)] px-4 py-3 text-sm font-medium text-foreground transition hover:border-[color:var(--brand)]/20 hover:text-[color:var(--brand)]"
          >
            Open forms and downloads catalog
          </Link>
          <Link
            to="/pages/employee-services"
            search={{ page: "leave-management" }}
            className="rounded-2xl border border-border/70 bg-[oklch(0.985_0.005_250)] px-4 py-3 text-sm font-medium text-foreground transition hover:border-[color:var(--brand)]/20 hover:text-[color:var(--brand)]"
          >
            Go to leave applications
          </Link>
          <Link
            to="/pages/employee-services"
            search={{ page: "employee-portal" }}
            className="rounded-2xl border border-border/70 bg-[oklch(0.985_0.005_250)] px-4 py-3 text-sm font-medium text-foreground transition hover:border-[color:var(--brand)]/20 hover:text-[color:var(--brand)]"
          >
            Check portal-based services
          </Link>
        </div>
      </section>

      <section className="rounded-[28px] border border-[color:var(--brand)]/15 bg-[oklch(0.98_0.01_255)] p-6">
        <h2 className="text-lg font-semibold text-[color:var(--brand)]">Important notes</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
          {tab.supportPanel.notes.map((note) => (
            <li key={note} className="flex gap-3">
              <AlertCircle className="mt-1 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

export function EmployeeServicesApp({
  page,
  onPageChange,
}: {
  page?: string;
  onPageChange: (page: EmployeeServiceTabKey) => void;
}) {
  const activeTab = getEmployeeServiceTab(page);
  const ActiveIcon = tabIcons[activeTab.key];

  return (
    <main className="min-h-[70vh] bg-[oklch(0.985_0.005_250)] pb-14">
      <section className="border-b border-border/70 bg-[linear-gradient(135deg,oklch(0.18_0.05_265),oklch(0.28_0.08_255))] text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span>Employee Services</span>
            <span>/</span>
            <span>{activeTab.shortTitle}</span>
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                <ActiveIcon className="h-3.5 w-3.5" />
                Real employee service application
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                {activeTab.title}
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 md:text-base">
                {activeTab.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-white/65">Current view</p>
                <p className="mt-2 text-lg font-semibold">{activeTab.shortTitle}</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                  Navigation model
                </p>
                <p className="mt-2 text-lg font-semibold">Task-based tabs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <div className="rounded-[28px] border border-border/70 bg-white p-3 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.3)]">
          <Tabs value={activeTab.key} className="w-full">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="h-auto w-max min-w-full justify-start gap-2 bg-transparent p-1">
                {employeeServiceTabs.map((tab) => (
                  <ServiceTabButton
                    key={tab.key}
                    tab={tab}
                    active={tab.key === activeTab.key}
                    onClick={() => onPageChange(tab.key)}
                  />
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </Tabs>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[minmax(0,1.5fr)_360px] lg:px-8">
        <ContentSection tab={activeTab} />
        <SupportSidebar tab={activeTab} />
      </section>
    </main>
  );
}
