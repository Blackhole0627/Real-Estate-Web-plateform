export type Lang = "es" | "en";

/** Route prefix for a language ("" for Spanish, "/en" for English). */
export function langPrefix(lang: Lang): string {
  return lang === "en" ? "/en" : "";
}

export const STATUS_EN: Record<string, string> = {
  "En venta": "For sale",
  "En alquiler": "For rent",
  "Obra nueva": "New construction",
};

export function statusLabel(status: string, lang: Lang): string {
  return lang === "en" ? (STATUS_EN[status] ?? status) : status;
}

const PRICE_PART_EN: Record<string, string> = {
  Desde: "From",
  "/mes": "/mo",
};

export function pricePart(part: string | undefined, lang: Lang): string {
  if (!part) return "";
  return lang === "en" ? (PRICE_PART_EN[part] ?? part) : part;
}

const es = {
  // Header / nav
  navBuy: "Comprar",
  navSell: "Vender",
  navProperties: "Propiedades",
  navAbout: "Nosotros",
  navNews: "Actualidad",
  navContact: "Contacto",
  menuBuy: "Comprar",
  menuRent: "Alquilar",
  menuProjects: "Proyectos en construcción",
  menuSellMine: "Vender mi propiedad",
  menuAbout: "Nosotros",
  menuNews: "Noticias",
  menuContact: "Contacto",
  menuAria: "Menú",
  closeAria: "Cerrar",
  langSwitch: "EN",
  langSwitchAria: "Switch to English",

  // Hero
  heroEyebrow: "Inmobiliaria boutique · República Dominicana",
  heroTitle1: "Encuentra tu",
  heroTitle2: "próxima propiedad",
  heroSub:
    "Compra, alquila o invierte en propiedades seleccionadas en República Dominicana.",
  searchPlaceholder: "Busca por ciudad, sector o propiedad",
  searchButton: "Buscar",
  searchAria: "Buscar propiedades",
  heroBuy: "Comprar",
  heroSell: "Vender",
  qlProps: "Propiedades",
  qlPropsD: "Residencias curadas en venta y alquiler",
  qlTesti: "Testimonios",
  qlTestiD: "Lo que dicen nuestros clientes",
  qlSell: "Vender",
  qlSellD: "Valora tu propiedad sin compromiso",
  qlContact: "Contacto",
  qlContactD: "Habla con un asesor hoy",
  quickAria: "Accesos rápidos",

  // Stats
  stats: [
    "Clientes atendidos",
    "Índice de satisfacción",
    "Países representados",
    "Constituida desde",
  ],

  // Testimonials
  testiEyebrow: "Testimonios",
  testiTitle: "Lo que dicen nuestros clientes",
  testiAll: "Ver todos los testimonios",
  testiPageSub:
    "Historias reales de compras, ventas, alquileres e inversiones acompañadas de principio a fin.",
  testiCta: "Tu historia puede ser la próxima",
  testiCtaSub: "Escríbenos y descubre por qué nuestros clientes nos recomiendan.",
  prevAria: "Anterior",
  nextAria: "Siguiente",
  pageAria: "Página",

  // Properties
  propsEyebrow: "Propiedades destacadas",
  propsTitle: "Residencias de excepción",
  propsPageTitle: "Residencias de excepción",
  propsPageSub:
    "Compra, alquila e invierte en las mejores zonas de Santo Domingo y el Caribe dominicano.",
  seeMore: "Ver más",
  filterAll: "Todas",
  filterSale: "En venta",
  filterRent: "En alquiler",
  filterNew: "Obra nueva",
  filterAria: "Filtrar propiedades",
  property: "propiedad",
  properties: "propiedades",
  searchFor: "para",
  emptyText:
    "No encontramos propiedades para esa búsqueda. Cuéntanos qué buscas y un asesor te enviará opciones a tu medida.",
  emptyCta: "Consultar por WhatsApp",
  backToAll: "← Todas las propiedades",
  galeria: "Galería",
  waCta: "Consultar por WhatsApp",
  callCta: "Llamar",
  detailNote:
    "Un asesor de Onker Home te responderá a la brevedad. Sin costo ni compromiso.",
  newBadge: "Nuevo",
  photoAria: "Ver foto",
  fullscreenAria: "en pantalla completa",

  // Split CTA
  splitBuyTitle: "¿Comprando una propiedad?",
  splitBuyText:
    "Te acompañamos desde la búsqueda hasta la firma: selección curada, visitas y asesoría legal en cada paso.",
  splitBuyBtn: "Explorar propiedades",
  splitSellTitle: "¿Vendiendo tu inmueble?",
  splitSellText:
    "Marketing digital profesional, compradores calificados y un acuerdo de captación que firmas desde tu teléfono.",
  splitSellBtn: "Valorar mi propiedad",

  // Valuation
  valEyebrow: "Propietarios",
  valTitle: "Vende tu propiedad",
  valSub: "Conoce su valor de mercado y recibe asesoría para venderla.",
  valName: "Nombre",
  valPhone: "Teléfono / WhatsApp",
  valSector: "Sector y ciudad del inmueble",
  valTypeAria: "Tipo de inmueble",
  valTypes: ["Apartamento", "Casa / Villa", "Penthouse", "Solar / Terreno", "Local comercial"],
  valButton: "Quiero vender mi propiedad",
  valNote:
    "Al enviar, un asesor inmobiliario te contactará por WhatsApp o llamada. Sin costo ni compromiso.",

  // Articles
  artEyebrow: "Actualidad",
  artTitle: "Últimos artículos",
  artAll: "Ver todos",
  artPageTitle: "Información inmobiliaria y financiera de República Dominicana",
  artPageSub:
    "Análisis, guías y noticias para comprar, vender e invertir con mejor información.",
  artBack: "← Actualidad",
  artKeepReading: "Sigue leyendo",
  artCtaQ: "¿Quieres comprar, vender o invertir en República Dominicana?",
  artCtaBtn: "Hablar con un asesor",

  // Join
  joinTitle: "Únete a nuestra red",
  joinSub:
    "Recibe antes que nadie las nuevas propiedades y oportunidades del mercado inmobiliario dominicano.",
  joinFirst: "Nombre",
  joinLast: "Apellido",
  joinEmail: "Correo electrónico",
  joinHuman: "Confirma que eres humano seleccionando la",
  joinHumanWord: "casa",
  joinVerifyAria: "Verificación",
  joinSend: "Enviar",
  joinNote:
    "Al enviar aceptas recibir comunicaciones de Onker Home. Puedes darte de baja cuando quieras.",

  // Footer
  fRights: "Todos los derechos reservados",
  fTagline:
    "Onker Home | Inmobiliaria boutique de República Dominicana, especializada en marketing digital.",
  fLinksAria: "Enlaces",
  fBuy: "Comprar",
  fSell: "Vender",
  fProps: "Propiedades",
  fAbout: "Nosotros",
  fTesti: "Testimonios",
  fNews: "Actualidad",
  fNewsletter: "Newsletter",
  fPrivacy: "Política de privacidad",
  fTop: "Subir",
  fTopAria: "Volver arriba",

  // About page
  aboutEyebrow: "Nosotros",
  aboutTeamEyebrow: "Nuestro equipo",
  aboutTeamTitle: "Personas que dan la cara por ti",
  aboutDestinoEyebrow: "Nuestro destino",
  aboutDestinoTitle: "República Dominicana, donde el lujo se vive",
  aboutVideoLabel: "Ver desde el aire",
  aboutCtaTitle: "Hablemos de tu próxima propiedad",
  aboutCtaSub:
    "Escríbenos por WhatsApp o llámanos — un asesor te atiende sin costo ni compromiso.",
  aboutWa: "Escribir por WhatsApp",

  waFloatAria: "WhatsApp 849-342-6066",
};

const en: typeof es = {
  navBuy: "Buy",
  navSell: "Sell",
  navProperties: "Properties",
  navAbout: "About",
  navNews: "News",
  navContact: "Contact",
  menuBuy: "Buy",
  menuRent: "Rent",
  menuProjects: "New developments",
  menuSellMine: "Sell my property",
  menuAbout: "About us",
  menuNews: "News",
  menuContact: "Contact",
  menuAria: "Menu",
  closeAria: "Close",
  langSwitch: "ES",
  langSwitchAria: "Cambiar a español",

  heroEyebrow: "Boutique real estate · Dominican Republic",
  heroTitle1: "Find your",
  heroTitle2: "next property",
  heroSub:
    "Buy, rent or invest in curated properties across the Dominican Republic.",
  searchPlaceholder: "Search by city, area or property",
  searchButton: "Search",
  searchAria: "Search properties",
  heroBuy: "Buy",
  heroSell: "Sell",
  qlProps: "Properties",
  qlPropsD: "Curated homes for sale and rent",
  qlTesti: "Testimonials",
  qlTestiD: "What our clients say",
  qlSell: "Sell",
  qlSellD: "Get a free valuation of your property",
  qlContact: "Contact",
  qlContactD: "Talk to an advisor today",
  quickAria: "Quick links",

  stats: [
    "Clients served",
    "Satisfaction rate",
    "Countries represented",
    "Established since",
  ],

  testiEyebrow: "Testimonials",
  testiTitle: "What our clients say",
  testiAll: "View all testimonials",
  testiPageSub:
    "Real stories of purchases, sales, rentals and investments guided from start to finish.",
  testiCta: "Your story could be next",
  testiCtaSub: "Write to us and find out why our clients recommend us.",
  prevAria: "Previous",
  nextAria: "Next",
  pageAria: "Page",

  propsEyebrow: "Featured properties",
  propsTitle: "Exceptional residences",
  propsPageTitle: "Exceptional residences",
  propsPageSub:
    "Buy, rent and invest in the best areas of Santo Domingo and the Dominican Caribbean.",
  seeMore: "See more",
  filterAll: "All",
  filterSale: "For sale",
  filterRent: "For rent",
  filterNew: "New construction",
  filterAria: "Filter properties",
  property: "property",
  properties: "properties",
  searchFor: "for",
  emptyText:
    "We couldn't find properties for that search. Tell us what you're looking for and an advisor will send you tailored options.",
  emptyCta: "Ask on WhatsApp",
  backToAll: "← All properties",
  galeria: "Gallery",
  waCta: "Ask on WhatsApp",
  callCta: "Call",
  detailNote:
    "An Onker Home advisor will get back to you shortly. Free of charge, no obligation.",
  newBadge: "New",
  photoAria: "View photo",
  fullscreenAria: "in full screen",

  splitBuyTitle: "Buying a property?",
  splitBuyText:
    "We guide you from the search to the signing: curated selection, visits and legal guidance at every step.",
  splitBuyBtn: "Explore properties",
  splitSellTitle: "Selling your property?",
  splitSellText:
    "Professional digital marketing, qualified buyers and a listing agreement you sign from your phone.",
  splitSellBtn: "Value my property",

  valEyebrow: "Owners",
  valTitle: "Sell your property",
  valSub: "Learn its market value and get guidance to sell it.",
  valName: "Name",
  valPhone: "Phone / WhatsApp",
  valSector: "Area and city of the property",
  valTypeAria: "Property type",
  valTypes: ["Apartment", "House / Villa", "Penthouse", "Lot / Land", "Commercial space"],
  valButton: "I want to sell my property",
  valNote:
    "After sending, a real estate advisor will contact you by WhatsApp or phone. Free of charge, no obligation.",

  artEyebrow: "News",
  artTitle: "Latest articles",
  artAll: "View all",
  artPageTitle: "Real estate and financial insights from the Dominican Republic",
  artPageSub:
    "Analysis, guides and news to buy, sell and invest with better information.",
  artBack: "← News",
  artKeepReading: "Keep reading",
  artCtaQ: "Looking to buy, sell or invest in the Dominican Republic?",
  artCtaBtn: "Talk to an advisor",

  joinTitle: "Join our network",
  joinSub:
    "Be the first to receive new properties and opportunities from the Dominican real estate market.",
  joinFirst: "First name",
  joinLast: "Last name",
  joinEmail: "Email address",
  joinHuman: "Confirm you are human by selecting the",
  joinHumanWord: "house",
  joinVerifyAria: "Verification",
  joinSend: "Send",
  joinNote:
    "By sending you agree to receive communications from Onker Home. You can unsubscribe at any time.",

  fRights: "All rights reserved",
  fTagline:
    "Onker Home | Boutique real estate agency of the Dominican Republic, specialized in digital marketing.",
  fLinksAria: "Links",
  fBuy: "Buy",
  fSell: "Sell",
  fProps: "Properties",
  fAbout: "About",
  fTesti: "Testimonials",
  fNews: "News",
  fNewsletter: "Newsletter",
  fPrivacy: "Privacy policy (Spanish)",
  fTop: "Top",
  fTopAria: "Back to top",

  aboutEyebrow: "About us",
  aboutTeamEyebrow: "Our team",
  aboutTeamTitle: "People who stand behind you",
  aboutDestinoEyebrow: "Our destination",
  aboutDestinoTitle: "Dominican Republic, where luxury is lived",
  aboutVideoLabel: "View from above",
  aboutCtaTitle: "Let's talk about your next property",
  aboutCtaSub:
    "Message us on WhatsApp or call us — an advisor will help you free of charge, no obligation.",
  aboutWa: "Message on WhatsApp",

  waFloatAria: "WhatsApp 849-342-6066",
};

export type Dict = typeof es;

export function getDict(lang: Lang): Dict {
  return lang === "en" ? en : es;
}
