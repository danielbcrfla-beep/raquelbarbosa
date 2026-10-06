/**
 * Dados de contato da marca.
 * Deixe em string vazia enquanto a informação real não estiver disponível —
 * os links correspondentes simplesmente não aparecem no site.
 */
export const site = {
  name: "Raquel Barbosa",
  role: "Móveis Planejados",
  tagline: "Móveis planejados que transformam sua casa.",
  /** Ex.: "5515999999999" (somente números, com código do país) */
  whatsapp: "5515997399619",
  instagram:
    "https://www.instagram.com/raquelbarbosa_interiores?stkn=Y21mYTRiZmV5ZGxi&utm_source=qr",
  /** Ex.: "contato@raquelbarbosa.com.br" */
  email: "",
  city: "",
} as const;

export const whatsappLink = site.whatsapp ? `https://wa.me/${site.whatsapp}` : "";
export const instagramLink = site.instagram;
export const emailLink = site.email ? `mailto:${site.email}` : "";
