import { ArrowUp, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const quickLinks = [
  "Home",
  "Academics",
  "IQAC",
  "ISC",
  "ANU Promo",
  "Outcome Based Education (OBE)",
  "Feedback",
  "Complaint Box",
];

const socialLinks = [
  { label: "Facebook", icon: Facebook },
  { label: "Instagram", icon: Instagram },
  { label: "Twitter", icon: Twitter },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[oklch(0.18_0.05_265)] text-[oklch(0.96_0.01_250)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-36 h-[420px] w-[420px] rounded-full border border-white/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-12 -top-24 h-[520px] w-[320px] rounded-[50%] border border-white/10"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1.25fr] lg:px-8 lg:py-20">
        <section>
          <FooterHeading>About Us</FooterHeading>
          <p className="mt-8 max-w-xl text-sm leading-7 text-white/78">
            Acharya Nagarjuna University, established in 1976, has been steadily
            expanding access to higher education through new courses in university
            colleges, affiliated colleges, and professional colleges. Spread across
            300 acres near NH-16 between Vijayawada and Guntur, the university
            continues to grow as one of Andhra Pradesh's leading centres for
            learning and research.
          </p>

          <div className="mt-7 flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href="#"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/14 text-white transition hover:bg-[color:var(--utility-bar-accent)] hover:text-[oklch(0.18_0.05_265)]"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </section>

        <nav aria-label="Footer quick links">
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="mt-8 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-white/78 transition hover:text-[color:var(--utility-bar-accent)]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section>
          <FooterHeading>Contact Us</FooterHeading>
          <div className="mt-8 space-y-7 text-sm text-white/82">
            <ContactItem icon={Phone}>
              <a href="tel:+918632346118" className="block transition hover:text-white">
                0863-234 6118
              </a>
              <a href="tel:+918632346171" className="mt-1 block transition hover:text-white">
                0863-234 6171
              </a>
            </ContactItem>
            <ContactItem icon={Mail}>
              <a href="mailto:registrar@anu.ac.in" className="transition hover:text-white">
                registrar@anu.ac.in
              </a>
            </ContactItem>
            <ContactItem icon={MapPin}>
              <address className="not-italic leading-6">
                Acharya Nagarjuna University,
                <br />
                NH16, Nagarjuna Nagar, Guntur,
                <br />
                Andhra Pradesh 522510
              </address>
            </ContactItem>
          </div>
        </section>
      </div>

      <a
        href="#top"
        aria-label="Back to top"
        className="absolute bottom-20 right-6 hidden h-12 w-12 items-center justify-center rounded-full bg-[oklch(0.65_0.19_42)] text-[oklch(0.18_0.05_265)] shadow-lg transition hover:-translate-y-1 hover:bg-[color:var(--utility-bar-accent)] lg:flex"
      >
        <ArrowUp className="h-5 w-5" aria-hidden />
      </a>

      <div className="relative bg-[oklch(0.65_0.19_42)] text-[oklch(0.18_0.05_265)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-sm font-semibold md:flex-row lg:px-8">
          <p>ACHARYA NAGARJUNA UNIVERSITY</p>
          <p>Copyright (c) ANU 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight text-white">{children}</h2>
      <div className="mt-3 h-px w-16 bg-[color:var(--utility-bar-accent)]" />
    </div>
  );
}

function ContactItem({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon: typeof Phone;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[oklch(0.65_0.19_42)] text-[oklch(0.18_0.05_265)]">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div className="pt-1">{children}</div>
    </div>
  );
}
