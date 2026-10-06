import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

export function FloatingWhatsApp() {
  if (!whatsappLink) return null;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Raquel Barbosa pelo WhatsApp"
      className="group fixed right-4 bottom-4 z-40 inline-flex h-12 items-center justify-center gap-2.5 border border-background/20 bg-graphite px-3.5 text-background shadow-editorial transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:right-7 sm:bottom-7 sm:h-14 sm:px-5"
    >
      <MessageCircle aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={1.5} />
      <span className="hidden text-[10px] tracking-label uppercase sm:inline">WhatsApp</span>
    </a>
  );
}