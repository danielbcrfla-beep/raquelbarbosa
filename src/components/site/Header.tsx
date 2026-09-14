import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { to: "/projetos", label: "Projetos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-700 ${
        scrolled
          ? "border-border bg-background/85 py-4 backdrop-blur-md"
          : "border-transparent py-7"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link to="/" aria-label="Raquel Barbosa — Design de Interiores">
          <Logo variant="horizontal" className="text-[13px] md:text-[15px]" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline text-[11px] tracking-label uppercase text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contato" className="btn-ghost !px-6 !py-3">
            Fale comigo
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-8 w-8 flex-col items-end justify-center gap-[6px] md:hidden"
        >
          <span
            className={`h-px w-7 bg-foreground transition-transform duration-500 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px bg-foreground transition-all duration-500 ${
              open ? "w-7 -translate-y-[3.5px] -rotate-45" : "w-4"
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-background transition-[max-height,opacity] duration-700 md:hidden ${
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6 px-6 py-10">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-display text-2xl"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
