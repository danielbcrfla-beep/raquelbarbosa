import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { emailLink, instagramLink, site, whatsappLink } from "@/config/site";

export function Footer() {
  const external = [
    instagramLink ? { href: instagramLink, label: "Instagram" } : null,
    whatsappLink ? { href: whatsappLink, label: "WhatsApp" } : null,
    emailLink ? { href: emailLink, label: "E-mail" } : null,
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <footer className="bg-graphite text-background">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-[auto_1fr] md:gap-24">
          <div>
            <Logo variant="reduzido" light className="h-16 w-16" />
            <p className="mt-8 font-display text-xl tracking-[0.16em] uppercase">
              {site.name}
            </p>
            <p className="mt-3 text-[10px] tracking-brand uppercase opacity-60">
              {site.role}
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2">
            <nav className="flex flex-col gap-4">
              {[
                { to: "/projetos", label: "Projetos" },
                { to: "/sobre", label: "Sobre" },
                { to: "/servicos", label: "Serviços" },
                { to: "/contato", label: "Contato" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="link-underline w-fit text-[11px] tracking-label uppercase opacity-80"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-4">
              {external.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline w-fit text-[11px] tracking-label uppercase opacity-80"
                >
                  {l.label}
                </a>
              ))}
              <p className="max-w-xs font-display text-lg leading-relaxed italic opacity-90">
                {site.tagline}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 h-px w-full bg-background/15" />
        <p className="mt-8 text-[10px] tracking-label uppercase opacity-50">
          © 2026 Raquel Barbosa Móveis Planejados
        </p>
      </div>
    </footer>
  );
}
