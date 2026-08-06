/** Central business facts — single source of truth for the UI. */
export const site = {
  name: "Onker Home",
  legal: "ONKERHOME E.I.R.L.",
  tagline: "Donde el lujo se vive.",
  phoneDisplay: "849 342 6066",
  phoneIntl: "+1 849 342 6066",
  phoneTel: "+18493426066",
  whatsapp: "18493426066",
  email: "onkerhome@gmail.com",
  address: {
    line1: "Av. Simón Bolívar esq. Máximo Gómez",
    line2: "Plaza Royal, Suite 02, Santo Domingo",
    mapUrl:
      "https://maps.google.com/?q=Plaza+Royal+Av+Simon+Bolivar+esq+Maximo+Gomez+Santo+Domingo",
  },
  hours: "Lun–Vie 9:00–18:00 · Sáb 9:00–13:00",
  stats: [
    { n: "3,000+", l: "Clientes atendidos" },
    { n: "95%", l: "Índice de satisfacción" },
    { n: "22", l: "Países representados" },
    { n: "2017", l: "Constituida desde" },
  ],
} as const;

/** Builds a wa.me link with a prefilled message. */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
