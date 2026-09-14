/**
 * Dados de contato da marca.
 * Deixe em string vazia enquanto a informação real não estiver disponível —
 * os links correspondentes simplesmente não aparecem no site.
 */
export const site = {
  name: "Raquel Barbosa",
  role: "Design de Interiores",
  tagline: "Ambientes que refletem sua essência.",
  /** Ex.: "5515999999999" (somente números, com código do país) */
  whatsapp: "",
  /** Ex.: "raquelbarbosa.interiores" */
  instagram: "",
  /** Ex.: "contato@raquelbarbosa.com.br" */
  email: "",
  city: "",
} as const;

export const whatsappLink = site.whatsapp ? `https://wa.me/${site.whatsapp}` : "";
export const instagramLink = site.instagram
  ? `https://instagram.com/${site.instagram}`
  : "";
export const emailLink = site.email ? `mailto:${site.email}` : "";
