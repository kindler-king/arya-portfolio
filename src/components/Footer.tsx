import { profile } from "@/lib/data";

const social = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Scholar", href: profile.links.scholar },
  { label: "Resume", href: profile.links.resume },
];

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-hair)] bg-[color:var(--color-obsidian)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--color-gold-soft)]/40 font-display text-sm text-gradient-gold">
            A
          </span>
          <div className="text-sm text-muted">
            <span className="text-ink">Arya Sarkar</span> · Senior AI Engineer
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {social.map((s) => {
            const external = s.href.startsWith("http");
            return (
              <a
                key={s.label}
                href={s.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                data-cursor="hover"
                className="group relative text-sm text-muted transition-colors hover:text-ink"
              >
                {s.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[color:var(--color-gold-soft)] transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
        </nav>

        <p className="font-mono text-[11px] tracking-wide text-faint">
          © {new Date().getFullYear()} · built with intent
        </p>
      </div>
    </footer>
  );
}
