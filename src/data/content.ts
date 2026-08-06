export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  tag: string;
}

/** Sample testimonials — replace with the client's real quotes before launch. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Compramos nuestro apartamento en La Esperilla desde el extranjero. El acompañamiento fue impecable de principio a fin.",
    initials: "MR",
    name: "M. Rodríguez",
    tag: "Compra · Santo Domingo",
  },
  {
    quote:
      "Vendieron nuestra villa en tiempo récord y al precio correcto. Comunicación clara en todo momento.",
    initials: "JP",
    name: "J. Peralta",
    tag: "Venta · Las Terrenas",
  },
  {
    quote:
      "Como inversionista extranjero, necesitaba un equipo de confianza en el país. Onker Home superó mis expectativas.",
    initials: "AL",
    name: "A. Lombardi",
    tag: "Inversión · Cap Cana",
  },
  {
    quote:
      "Alquilamos en Piantini en menos de una semana. Proceso simple, digital y sin sorpresas.",
    initials: "KG",
    name: "K. García",
    tag: "Alquiler · Piantini",
  },
  {
    quote:
      "Atención de primera y conocimiento real del mercado dominicano. Los recomiendo sin dudarlo.",
    initials: "SD",
    name: "S. Durán",
    tag: "Compra · Bella Vista",
  },
  {
    quote:
      "Firmamos el acuerdo de captación desde el teléfono, en minutos. Una inmobiliaria verdaderamente digital.",
    initials: "FM",
    name: "F. Medina",
    tag: "Venta · Cacicazgos",
  },
];

export interface Article {
  tag: string;
  title: string;
  excerpt: string;
  image: string;
}

export const articles: Article[] = [
  {
    tag: "Inversión",
    title: "Por qué el Este dominicano no deja de crecer",
    excerpt:
      "Rentabilidad, turismo y plusvalía: la ecuación que atrae al inversionista internacional.",
    image: "/assets/props/dest-capcana.jpg",
  },
  {
    tag: "Guía",
    title: "Comprar en República Dominicana como extranjero",
    excerpt:
      "Títulos, impuestos y financiamiento: lo que debes saber antes de firmar.",
    image: "/assets/props/dest-lasterrenas.jpg",
  },
  {
    tag: "Mercado",
    title: "Santo Domingo: los sectores con mayor demanda en 2026",
    excerpt:
      "Piantini, Cacicazgos y Bella Vista lideran las búsquedas de compradores.",
    image: "/assets/props/dest-casadecampo.jpg",
  },
];
