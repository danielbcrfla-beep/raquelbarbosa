import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { emailLink, instagramLink, site, whatsappLink } from "@/config/site";
import { SocialLink } from "./SocialLink";

export function Footer() {
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
              {instagramLink ? (
                <SocialLink
                  kind="instagram"
                  href={instagramLink}
                  label="Instagram"
                  className="link-underline w-fit text-[11px] tracking-label uppercase opacity-80"
                />
              ) : null}
              {whatsappLink ? (
                <SocialLink
                  kind="whatsapp"
                  href={whatsappLink}
                  label="WhatsApp"
                  className="link-underline w-fit text-[11px] tracking-label uppercase opacity-80"
                />
              ) : null}
              {emailLink ? (
                <a href={emailLink} className="link-underline w-fit text-[11px] tracking-label uppercase opacity-80">
                  E-mail
                </a>
              ) : null}
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
