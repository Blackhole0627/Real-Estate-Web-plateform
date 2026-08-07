import type { PropertyStatus } from "./properties";

export interface Listing {
  slug: string;
  name: string;
  status: PropertyStatus;
  /** Display price, already formatted (e.g. "US$ 15,000,000"). */
  price: string;
  pricePrefix?: string;
  priceSuffix?: string;
  specs: string;
  location: string;
  /** Number of photos in /assets/listings/<slug>/1.jpg … <n>.jpg */
  photos: number;
  /** Optional curated cover image; defaults to photo 1. */
  cover?: string;
  /**
   * Client-provided description. Light markup:
   * "## " heading · "- " bullet · blank line = paragraph break.
   */
  body: string;
}

/**
 * Curated showcase (Stage 1: introduction site — a hand-picked selection,
 * not the full inventory). The complete 21-listing set lives in git history
 * (commit 6375c2d) for when the site grows into the full platform.
 */
export const listings: Listing[] = [
  {
    slug: "rio-arriba-12-casa-de-campo",
    name: "Río Arriba 12",
    status: "En venta",
    price: "US$ 15,000,000",
    specs: "6 hab · 6.5 baños · 1,516 m²",
    location: "Casa de Campo, La Romana",
    photos: 31,
    body: `Ubicada en una de las zonas más exclusivas de Casa de Campo, Río Arriba 12 es una extraordinaria villa de lujo diseñada por el reconocido arquitecto Alejandro Acebal, donde la elegancia, la tecnología y el confort se integran a la perfección. Con una impresionante construcción de 1,516.52 m² sobre un amplio terreno de 3,302.11 m², esta residencia ofrece espacios diseñados para disfrutar de un estilo de vida sofisticado y privado.

La propiedad cuenta con 6 amplias habitaciones, cada una con baño privado y walk-in closet, para un total de 6.5 baños, además de dos habitaciones de servicio con baños independientes. Sus interiores destacan por techos altos, áreas sociales climatizadas, una elegante sala de estar, comedor formal, sala de televisión y un exclusivo cine privado.

La villa incorpora una espectacular cocina de diseño completamente renovada, complementada por una cocina exterior ideal para recibir invitados. También dispone de área de chofer, salón de belleza equipado, sistema de sonido integral, automatización inteligente para iluminación, cortinas y audio, así como cámaras de seguridad y paneles solares.

En el exterior, amplias terrazas, balcones, área de BBQ integrada, piscina y jardines impecablemente cuidados aprovechan al máximo las impresionantes vistas panorámicas al prestigioso campo de golf Dye Fore y al mar Caribe.

Completamente amueblada con exclusivas piezas de Altri-Tempi y Restoration Hardware.

## Características destacadas

- 6 habitaciones con walk-in closets
- 6.5 baños
- 1,516.52 m² de construcción
- 3,302.11 m² de terreno
- Cine privado
- Salón de belleza privado
- Cocina interior y exterior renovadas
- Piscina y área de BBQ
- Sistema de sonido integrado y automatización inteligente
- Paneles solares y cámaras de seguridad
- Aire acondicionado central
- Vistas al mar y al campo de golf Dye Fore
- Totalmente amueblada con mobiliario de lujo
- Comunidad cerrada con seguridad 24/7`,
  },
  {
    slug: "villa-las-palmas-cap-cana",
    name: "Las Palmas",
    status: "En venta",
    price: "US$ 4,200,000",
    specs: "6 suites · 7 baños · 831 m²",
    location: "Cap Cana, Punta Cana",
    photos: 23,
    body: `Hay propiedades extraordinarias y luego están aquellas que redefinen el concepto de exclusividad. Las Palmas pertenece a esta última categoría: una villa contemporánea diseñada para quienes buscan privacidad absoluta, arquitectura de vanguardia y una conexión permanente con uno de los escenarios más privilegiados del Caribe.

Ubicada sobre el hoyo 7 del prestigioso campo de golf Punta Espada, esta residencia ofrece una experiencia donde el verde infinito del campo se fusiona con vistas al océano, creando un entorno de serenidad y sofisticación incomparable.

Con 831 m² de construcción sobre un impresionante terreno de 2,034 m², la villa ha sido concebida para difuminar los límites entre el interior y el exterior. Sus espectaculares techos de doble altura, amplios ventanales de piso a techo y una distribución abierta permiten que la luz natural se convierta en protagonista.

La residencia dispone de seis exclusivas suites, complementadas por seis baños completos y un baño de visitas. La cocina de concepto abierto se integra de forma impecable con las áreas sociales y exteriores. Se entrega completamente amueblada.

En el exterior, una espectacular piscina con jacuzzi, amplias terrazas, área de BBQ y exuberantes jardines convierten cada día en una experiencia digna de un resort privado.

Como residente de Cap Cana, disfrutará de acceso a una de las comunidades más exclusivas del Caribe: playas de arena blanca, marina de clase mundial, gastronomía de alto nivel, actividades ecuestres y náuticas, además del legendario Punta Espada Golf Course.

## Características destacadas

- 831 m² de construcción · 2,034 m² de terreno
- 6 suites, cada una diseñada como refugio privado
- 6 baños completos + baño de visitas
- Techos de doble altura y ventanales de piso a techo
- Piscina con jacuzzi, terrazas y área de BBQ
- Se entrega completamente amueblada
- Frente al hoyo 7 de Punta Espada, con vistas al mar`,
  },
  {
    slug: "casa-la-nouba-las-terrenas",
    name: "Casa La Nouba",
    status: "En venta",
    price: "US$ 3,950,000",
    specs: "6 suites · 750 m² · solar 1,607 m²",
    location: "Playa Bonita, Las Terrenas",
    photos: 55,
    cover: "/assets/listings/casa-la-nouba-las-terrenas/45.jpg",
    body: `Elevada sobre una colina dentro del prestigioso residencial Bonita Village, Casa La Nouba redefine el concepto de lujo frente al mar. A pocos pasos de Playa Bonita y rodeada de exuberante naturaleza tropical, esta extraordinaria residencia ofrece privacidad absoluta, vistas panorámicas incomparables y una experiencia de vida donde la arquitectura y el paisaje se integran con absoluta armonía.

Desarrollada sobre un solar de 1,607 m², con aproximadamente 750 m² de construcción distribuidos en tres niveles, la villa ha sido diseñada para maximizar la luz natural, la ventilación cruzada y la conexión permanente con el océano. Sus amplias terrazas capturan algunas de las mejores vistas de Playa Bonita, Cayos Ballenas, Cosón y Portillo.

El corazón de la propiedad es una espectacular área social de concepto abierto, donde el salón principal, la cocina con bar, el comedor y las terrazas convergen hacia un elegante deck de madera Ipé de 120 m² y una impresionante piscina infinita de 5 × 10 metros.

La residencia dispone de seis suites, todas con baño privado y vestidor, cuatro de ellas con impresionantes vistas al mar. Además, incorpora un apartamento independiente con sala, cocina y dormitorio, permitiendo alojar cómodamente hasta doce personas.

## Características destacadas

- Solar de 1,607 m² · ~750 m² de construcción
- 6 suites con baño y vestidor
- Apartamento independiente con vista al mar
- Piscina infinita y área preparada para jacuzzi
- Deck de madera Ipé de 120 m²
- Amplias terrazas panorámicas
- Cocina principal con bar integrado · área de BBQ
- Garaje cerrado y estacionamiento para tres vehículos
- Planta eléctrica de 24 kW · sistema fotovoltaico de 13.3 kW
- Calentador solar y de gas · cisterna
- Seguridad privada permanente

## Bonita Village

Uno de los residenciales más exclusivos de Playa Bonita, con seguridad privada, jardines tropicales, piscina de 30 metros, cancha de tenis y área de petanca. Desde la propiedad es posible acceder caminando a la playa, al club náutico y a reconocidos restaurantes frente al mar.`,
  },
  {
    slug: "torre-ocean-view-cacicazgos",
    name: "Torre Ocean View",
    status: "Obra nueva",
    pricePrefix: "Desde",
    price: "US$ 2,125,000",
    specs: "4 hab · 4.5 baños · 560 m² netos",
    location: "Cacicazgos, Santo Domingo",
    photos: 6,
    body: `Torre Ocean View es una exclusiva torre residencial de ultra lujo ubicada en la prestigiosa Avenida Anacaona, una de las direcciones más cotizadas de República Dominicana. Diseñada para quienes buscan amplitud, privacidad y una experiencia residencial de primer nivel, esta imponente torre ofrece la exclusividad de un apartamento por piso.

Con una arquitectura moderna y elegante, Ocean View contará con 37 niveles, residencias de aproximadamente 560 m² netos y una selección de amenidades concebidas para brindar confort y bienestar frente al Mirador Sur.

Fecha estimada de entrega: 2029.

## Características del proyecto

- Torre residencial de 37 niveles · un apartamento por nivel
- 4 niveles de sótanos para estacionamientos
- Nivel exclusivo para amenidades sociales
- 2 ascensores de lujo + 1 de servicio
- Generadores eléctricos · conserjería
- Seguridad y monitoreo por circuito cerrado
- Área de estar para choferes
- Tratamiento de agua desde cisterna · gas común

## Amenidades

- Elegante lobby de acceso
- Salón para actividades
- Piscina · gimnasio totalmente equipado
- Área de juegos para niños
- Terraza cubierta con bar integrado
- Área de spa · área de BBQ

## Distribución de los apartamentos

- Amplia sala principal, estudio privado y estar familiar
- Comedor independiente y amplia terraza
- 4 habitaciones, cada una con baño y walk-in closet
- Cocina fría y cocina caliente · área de lavado
- Habitación de servicio · locker privado
- 4 parqueos techados por apartamento

## Terminaciones premium

- Pisos y revestimientos en mármol importado Crema Marfil
- Cocinas modulares importadas
- Puertas de ingeniería importadas de 2.40 m
- Ventanas con aislamiento térmico
- Sistema de aire acondicionado VRF instalado

## Unidades destacadas

- Apartamento 501 · 618 m² totales · US$2,125,000
- Apartamento 2001 · 621 m² totales · US$2,440,000
- Apartamento 3101 · 622 m² totales · US$2,550,000`,
  },
  {
    slug: "twin-towers-anacaona",
    name: "Twin Towers · Bloque B",
    status: "En venta",
    pricePrefix: "Desde",
    price: "US$ 1,195,000",
    specs: "3 hab · 3.5 baños · 358–360 m²",
    location: "Av. Anacaona, Bella Vista, Santo Domingo",
    photos: 45,
    cover: "/assets/props/prop5.jpg",
    body: `Twin Towers es una exclusiva propuesta residencial de lujo ubicada frente al Parque Mirador Sur, en la prestigiosa Avenida Anacaona, considerada una de las direcciones más exclusivas y de mayor valorización de Santo Domingo.

Desarrollado bajo un concepto moderno y elegante, el proyecto está compuesto por dos torres independientes de 23 niveles, diseñadas para ofrecer amplitud, privacidad y vistas privilegiadas hacia el mar Caribe, la ciudad y las áreas verdes del Parque Mirador Sur.

El proyecto se encuentra completamente terminado y disponible para entrega inmediata.

## Amenidades

- Elegante lobby de lujo climatizado
- Piscina para residentes
- Amplias áreas sociales exclusivas
- Dos ascensores de lujo + ascensor de servicio
- Conserjería · seguridad y monitoreo por circuito cerrado
- Generadores eléctricos · gas común
- Área de estar y comedor para choferes
- Parqueos para visitantes

## Disponibilidad

- Apartamento de 358 m² + 50 m² de parqueos · 3 hab · 3.5 baños · US$1,195,000
- Apartamento Piso 6 – Unidad 02 · 360 m² + 50 m² de parqueos · 3 hab · 3.5 baños · US$1,290,000

Proyecto entregado y listo para mudarse — solo 6 apartamentos disponibles, con vistas panorámicas hacia la ciudad, el mar y el parque.`,
  },
  {
    slug: "villa-palmera-residences",
    name: "Villa Palmera Residences",
    status: "Obra nueva",
    pricePrefix: "Desde",
    price: "US$ 1,010,000",
    specs: "3 hab · 3.5 baños · 295–302 m² netos",
    location: "Cacicazgos, Santo Domingo",
    photos: 3,
    body: `Villa Palmera Residences es una exclusiva torre residencial de lujo ubicada en el prestigioso sector de Cacicazgos, a pocos metros de la Avenida Anacaona, una de las zonas de mayor valorización y prestigio de Santo Domingo.

Con un diseño arquitectónico contemporáneo, la torre contará con únicamente 18 apartamentos distribuidos en 11 niveles — 2 apartamentos por nivel — ofreciendo un ambiente exclusivo y una baja densidad de residentes.

Fecha estimada de entrega: junio 2029.

## Características del proyecto

- Torre de 11 niveles · solo 18 apartamentos
- 2 niveles de sótano para estacionamientos
- Nivel exclusivo para áreas sociales
- 2 ascensores de lujo + 1 de servicio
- Generadores eléctricos · conserjería
- Seguridad y monitoreo mediante circuito cerrado
- Área de estar para choferes
- Ducto de basura con cuarto frío · gas común
- 17 parqueos adicionales disponibles para la venta

## Amenidades

- Elegante lobby y sala de espera
- Salón para actividades
- Área lounge con bar integrado
- Piscina · gimnasio equipado
- Área de juegos para niños · área de BBQ

## Distribución de los apartamentos

- Sala, estudio, comedor y terraza
- Cocina fría y cocina caliente
- 3 habitaciones con baño y walk-in closet
- Habitación de servicio · closet de ropa blanca
- 3 parqueos techados · 1 locker privado

## Unidades destacadas

- Unidad 3B · 337.85 m² totales · US$1,010,000
- Unidad 7A · 348.45 m² totales · US$1,090,000
- Unidad 11A (Penthouse) · 344.85 m² totales · US$1,165,000`,
  },
  {
    slug: "villa-puerto-bahia",
    name: "Villa en Puerto Bahía",
    status: "En venta",
    price: "US$ 580,000",
    specs: "3 hab · 2 suites principales",
    location: "Puerto Bahía, Samaná",
    photos: 63,
    body: `Ubicada dentro del exclusivo Puerto Bahía, uno de los desarrollos residenciales y náuticos más prestigiosos de República Dominicana, esta elegante villa de tres habitaciones — incluyendo dos amplias suites principales — ofrece una combinación excepcional de lujo, privacidad y un estilo de vida incomparable frente al mar.

La propiedad forma parte de una comunidad privada con infraestructura de primer nivel: marina internacional privada, hotel cinco estrellas, restaurantes, mini market, spa, áreas recreativas y seguridad privada 24 horas.

La villa se encuentra en el corazón de la Bahía de Samaná, reconocida mundialmente por el avistamiento de ballenas jorobadas entre enero y marzo. Desde aquí se accede en 10 a 30 minutos a algunas de las playas más espectaculares del país.

Con capacidad para alojar cómodamente hasta ocho personas, es una excelente opción tanto para residencia vacacional como para inversión.

## Amenidades del proyecto

- Marina privada internacional
- Hotel cinco estrellas
- Restaurantes · mini market · spa
- Seguridad privada 24/7 con acceso controlado
- Áreas recreativas y deportivas

## Características de la villa

- 3 habitaciones · 2 suites principales
- Amplios espacios interiores
- Capacidad para 8 personas
- Ubicación privilegiada dentro de Puerto Bahía`,
  },
  {
    slug: "apartamento-bella-vista",
    name: "Apartamento con terraza · Bella Vista",
    status: "En alquiler",
    price: "US$ 4,300",
    priceSuffix: "/mes",
    specs: "3 hab · 3.5 baños · 300 m²",
    location: "Bella Vista, Santo Domingo",
    photos: 29,
    cover: "/assets/props/prop6.jpg",
    body: `Descubre este exclusivo apartamento ubicado en una de las zonas más privilegiadas de Bella Vista, diseñado para quienes valoran el confort, la amplitud y una excelente ubicación.

## Características del apartamento

- 300 m² totales: 200 m² de apartamento + 100 m² de amplia terraza privada
- Segundo piso
- 3 habitaciones · 3.5 baños
- Amplia cocina
- Sala y comedor
- Área de lavado
- Cuarto de servicio con baño
- 3 parqueos

## Amenidades de la torre

- Lobby elegante
- Piscina · gimnasio equipado
- Salón de eventos · terraza techada
- Área de juegos para niños
- Amplias áreas sociales`,
  },
];

export function getListing(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}

export function listingCover(l: Listing): string {
  return l.cover ?? `/assets/listings/${l.slug}/1.jpg`;
}

export function listingPhotos(l: Listing): string[] {
  return Array.from(
    { length: l.photos },
    (_, i) => `/assets/listings/${l.slug}/${i + 1}.jpg`,
  );
}
