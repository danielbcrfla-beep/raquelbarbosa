import { Instagram, MessageCircle } from "lucide-react";

type SocialKind = "instagram" | "whatsapp";

export function SocialLink({
  kind,
  href,
  label,
  className = "",
}: {
  kind: SocialKind;
  href: string;
  label: string;
  className?: string;
}) {
  const Icon = kind === "instagram" ? Instagram : MessageCircle;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <Icon aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={1.5} />
      <span>{label}</span>
    </a>
  );
}