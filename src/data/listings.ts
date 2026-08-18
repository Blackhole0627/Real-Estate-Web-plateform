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
   * Date the property was listed (yyyy-mm-dd). Set it on every new listing:
   * it shows a "Nuevo" badge for 30 days and drives newest-first ordering.
   */
  listedAt?: string;
  /**
   * Client-provided description. Light markup:
   * "## " heading · "- " bullet · blank line = paragraph break.
   */
  body: string;
}

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
    slug: "villa-palmera-xxi",
    name: "Villa Palmera XXI",
    status: "En venta",
    pricePrefix: "Desde",
    price: "US$ 280,000",
    specs: "2–3 hab · 90–197 m² netos",
    location: "Santo Domingo",
    photos: 7,
    body: `Selección de apartamentos disponibles en Villa Palmera XXI, con distribuciones de 2 y 3 habitaciones, balcón y parqueos incluidos.

## Unidades disponibles

- Piso 2 · Apto. 2-B · 197 m² netos (273 m² totales) · 3 hab · 3.5 baños · estar familiar · 3 parqueos · US$535,000
- Piso 2 · Apto. 2-C · 105 m² netos (129 m² totales) · 2 hab · 2.5 baños · 2 parqueos · US$283,500
- Piso 8 · Apto. 8-D · 90 m² netos (114 m² totales) · 2 hab · 2.5 baños · 2 parqueos · US$280,000
- Piso 2 · Apto. 2-E · 126 m² netos (150 m² totales) · 2 hab · 2.5 baños · estar familiar · US$330,750
- Piso 2 · Apto. 2-F · 137 m² netos (183 m² totales) · 3 hab · 3.5 baños · estar familiar · US$395,000
- Piso 3 · Apto. 3-F · 137 m² netos (161 m² totales) · 3 hab · 3.5 baños · estar familiar · US$367,500
- Piso 5 · Apto. 5-F · 137 m² netos (161 m² totales) · 3 hab · 3.5 baños · estar familiar · US$371,700
- Piso 6 · Apto. 6-F · 137 m² netos (161 m² totales) · 3 hab · 3.5 baños · estar familiar · US$375,000`,
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
    slug: "apartamento-la-esperilla-caoba",
    name: "Apartamento en La Esperilla",
    status: "En venta",
    price: "US$ 420,000",
    specs: "3 hab · 3.5 baños · piso 6",
    location: "La Esperilla, Santo Domingo",
    photos: 23,
    body: `Amplio apartamento en el sexto piso de una torre con seguridad y acceso controlado, en el corazón de La Esperilla.

## Características del apartamento

- Amplia sala y comedor
- Balcón
- Family room
- Cocina
- Área de lavado independiente
- Cuarto de servicio con baño
- 3 habitaciones, cada una con baño privado y walking closet
- Medio baño para visitas
- Clóset de ropa blanca
- Todas las puertas en caoba
- 2 parqueos

## Características de la torre

- 2 ascensores (uno de servicio)
- Seguridad y acceso controlado`,
  },
  {
    slug: "apartamento-la-esperilla-vista-mar",
    name: "Apartamento con vista al mar en La Esperilla",
    status: "En venta",
    price: "US$ 415,000",
    specs: "3 hab · 3.5 baños · 202 m² · piso 4",
    location: "La Esperilla, Santo Domingo",
    photos: 28,
    listedAt: "2026-08-14",
    body: `Amplio apartamento en venta en La Esperilla, ubicado en el cuarto piso de una exclusiva torre residencial. Su terraza balcón se extiende desde la habitación principal hasta la sala, ofreciendo una agradable vista al mar y excelente iluminación natural.

## Distribución

- Sala y comedor
- Terraza balcón
- Tres habitaciones, cada una con baño privado
- Medio baño para visitas
- Cocina
- Área de lavado
- Habitación de servicio con baño
- Locker de gran tamaño en el primer nivel
- Tres parqueos

## Amenidades de la torre

- Recepción de lujo
- Tres ascensores KONE
- Doce parqueos para visitantes
- Gazebo con amplia terraza para actividades
- Área de juegos
- Cámaras de seguridad
- Vigilancia permanente
- Planta eléctrica de cobertura completa
- Gas común
- Ducto de basura

Una excelente oportunidad para adquirir un apartamento espacioso con vista al mar, tres parqueos y una ubicación privilegiada en La Esperilla, Santo Domingo.`,
  },
  {
    slug: "apartamento-terraza-300",
    name: "Apartamento con terraza privada",
    status: "En venta",
    price: "US$ 395,000",
    specs: "3 hab · 3.5 baños · 300 m²",
    location: "Santo Domingo",
    photos: 16,
    body: `Espectacular apartamento de 300 m² en el corazón de la ciudad, diseñado para quienes valoran el espacio, la comodidad y el estilo.

## Distribución

- 3 amplias habitaciones, cada una con su baño
- 3.5 baños en total
- Elegante sala y comedor
- Cocina con potencial de amplitud
- Área de lavado independiente
- Cuarto de servicio con baño

## Terraza privada de 100 m²

Ideal para crear tu espacio social, BBQ o área de relajación.

Una propiedad única que combina amplitud, privacidad y un espacio exterior difícil de encontrar.`,
  },
  {
    slug: "apartamento-piantini-2hab",
    name: "Apartamento de 2 habitaciones en Piantini",
    status: "En venta",
    price: "US$ 360,000",
    specs: "2 hab · 2.5 baños · 156 m²",
    location: "Piantini, Santo Domingo",
    photos: 16,
    listedAt: "2026-08-16",
    body: `Elegante apartamento ubicado estratégicamente entre las avenidas Winston Churchill y Abraham Lincoln, en una de las zonas más exclusivas y valorizadas de Santo Domingo.

La propiedad cuenta con 156 m², incluyendo sus dos estacionamientos y locker privado. Su distribución moderna y funcional ofrece espacios cómodos, excelente iluminación y la privacidad ideal para vivir o invertir.

## Características del inmueble

- 2 habitaciones con baño privado y walk-in closet
- Sala
- Comedor
- Amplio balcón
- Cocina
- Medio baño para visitas
- Área de lavado
- Cuarto de servicio
- 2 estacionamientos
- Locker privado

## Amenidades

- Piscina
- Jacuzzi
- Gimnasio equipado
- Sauna
- Salón para eventos
- Área de BBQ
- Elegante lobby
- Seguridad y control de acceso 24/7

Precio de venta: US$360,000 negociables.

Una excelente oportunidad para adquirir una propiedad contemporánea, con ubicación privilegiada y completas amenidades en el corazón de Piantini.`,
  },
  {
    slug: "apartamento-la-esperilla-amueblado",
    name: "Apartamento amueblado en La Esperilla",
    status: "En venta",
    price: "US$ 288,000",
    specs: "3 hab · 3.5 baños · 152 m² · amueblado · piso 9",
    location: "La Esperilla, Santo Domingo",
    photos: 9,
    listedAt: "2026-08-18",
    body: `Descubre este elegante apartamento totalmente amueblado, ubicado en el noveno piso de una moderna torre en La Esperilla, uno de los sectores más exclusivos, céntricos y valorizados de Santo Domingo.

Con una distribución amplia y funcional, esta propiedad ofrece el equilibrio perfecto entre comodidad, privacidad y ubicación. Se entrega lista para ocupar, convirtiéndose en una excelente alternativa tanto para residencia familiar como para inversión inmobiliaria.

## Características del inmueble

- 152 m²
- Totalmente amueblado
- 3 habitaciones
- 3.5 baños
- Sala y comedor
- Cocina
- Área de lavado
- Cuarto de servicio
- Locker privado
- 2 estacionamientos paralelos en el nivel S1
- Piso 9

## Amenidades de la torre

- Piscina
- Gimnasio equipado
- Sala de cine
- Sauna
- Salón para eventos
- Área de juegos infantiles
- Lobby`,
  },
  {
    slug: "apartamento-la-esperilla-parque",
    name: "Apartamento frente al Parque Iberoamérica",
    status: "En venta",
    price: "US$ 280,000",
    specs: "2 hab · 2.5 baños · 140 m² · piso 7",
    location: "La Esperilla, Santo Domingo",
    photos: 33,
    body: `Ubicado en una exclusiva torre residencial frente al emblemático Parque Iberoamérica, este elegante apartamento combina amplitud, funcionalidad y una ubicación privilegiada en uno de los sectores más cotizados de Santo Domingo.

Con 140 m² de construcción, cuenta con dos amplias habitaciones, 2.5 baños, una luminosa sala-comedor, balcón, moderna cocina, área de lavado y habitación de servicio con baño. Situado en el séptimo nivel, disfruta de una agradable elevación y de la tranquilidad de esta exclusiva zona residencial.

Vivir frente al Parque Iberoamérica significa disfrutar diariamente de uno de los espacios verdes más exclusivos de la ciudad, con acceso inmediato a las mejores vías, restaurantes, centros comerciales, colegios y servicios de Santo Domingo.

## Características principales

- 140 m² de construcción
- 2 habitaciones · 2.5 baños
- Sala, comedor y balcón
- Cocina · área de lavado
- Habitación de servicio con baño
- 2 parqueos techados · locker privado
- 7.º piso

## Amenidades de la torre

- Frente al Parque Iberoamérica
- Elegante lobby · 3 ascensores
- Parqueos para visitantes
- Seguridad 24/7 · acceso controlado`,
  },
  {
    slug: "penthouse-juan-dolio",
    name: "Penthouse en Juan Dolio",
    status: "En venta",
    price: "US$ 245,000",
    specs: "3 hab · 4 baños · 190 m² · 2 niveles",
    location: "Juan Dolio",
    photos: 9,
    listedAt: "2026-08-08",
    body: `Una propiedad pensada para disfrutar de amplitud, privacidad y el estilo de vida de Juan Dolio.

Este penthouse de dos niveles ofrece una distribución funcional y un atractivo diferencial: cada piso cuenta con entrada independiente, brindando mayor privacidad y versatilidad en el uso de los espacios.

## Características

- 190 m²
- 2 niveles
- 3 habitaciones
- 4 baños
- Balcón
- Amplia terraza
- Área de lavado
- Entrada independiente en cada nivel
- Se vende sin amueblar

Una excelente opción como residencia, segunda vivienda o propiedad de inversión en Juan Dolio.`,
  },
  {
    slug: "apartamentos-piantini-poligono",
    name: "Apartamentos en Piantini",
    status: "Obra nueva",
    pricePrefix: "Desde",
    price: "US$ 244,703",
    specs: "Torre de uso mixto · Polígono Central",
    location: "Piantini, Santo Domingo",
    photos: 17,
    listedAt: "2026-08-14",
    body: `Innovador proyecto de apartamentos en venta en Piantini, ubicado entre las calles David Ben Gurion y Federico Geraldino, en el corazón del Polígono Central de Santo Domingo.

La torre integra áreas residenciales, comerciales y sociales dentro de una propuesta arquitectónica moderna, con más de 500 m² destinados al uso peatonal y espacios diseñados para ofrecer comodidad, entretenimiento y una experiencia urbana completa.

Precios desde US$244,703 hasta US$540,656.

## Amenidades

- Piscina
- Gimnasio
- Lounge bar
- Coworking
- Coffee shop
- Terraza abierta
- Asoleadero húmedo
- Área de juegos para niños
- Club para adolescentes
- Jardines
- Lobbies independientes
- Áreas comerciales
- Lockers
- Estar para choferes
- Estacionamientos
- Escaleras de emergencia

## Forma de pago

- Reserva: US$5,000
- Firma del contrato: 20%
- Durante la construcción: 40%
- Contra entrega: 40%

Una atractiva oportunidad para adquirir un apartamento en Piantini, con amenidades modernas, ubicación estratégica y fácil acceso a restaurantes, comercios, oficinas y servicios del centro de Santo Domingo.`,
  },
  {
    slug: "apartamento-bella-vista-nuevo",
    name: "Apartamento a estrenar en Bella Vista",
    status: "En venta",
    price: "US$ 187,000",
    specs: "2 hab · 2.5 baños · 82 m² · a estrenar",
    location: "Bella Vista, Santo Domingo",
    photos: 12,
    cover: "/assets/listings/apartamento-bella-vista-nuevo/6.jpg",
    listedAt: "2026-08-14",
    body: `Moderno apartamento en venta en Bella Vista, ubicado en el cuarto piso de una torre nueva. Su distribución funcional integra cómodamente la sala, el comedor y la cocina, convirtiéndolo en una excelente opción para vivir o invertir en Santo Domingo.

## Distribución

- Sala y comedor
- Cocina
- Dos habitaciones
- Dos baños completos
- Medio baño para visitas
- Un parqueo
- Ascensor
- Escaleras de emergencia

## Áreas sociales

- Lobby amueblado
- Terraza con picuzzi
- Salón para eventos
- Área de BBQ
- Gimnasio
- Área de juegos para niños

Una atractiva oportunidad para adquirir un apartamento a estrenar en Bella Vista, con espacios bien distribuidos, amenidades modernas y una ubicación privilegiada.`,
  },
  {
    slug: "residencial-los-tres-ojos",
    name: "Apartamentos en Los Tres Ojos",
    status: "Obra nueva",
    pricePrefix: "Desde",
    price: "US$ 139,000",
    specs: "122–174 m² · solo 12 apartamentos",
    location: "Los Tres Ojos, Santo Domingo Este",
    photos: 22,
    cover: "/assets/listings/residencial-los-tres-ojos/5.jpg",
    listedAt: "2026-08-14",
    body: `Exclusivo proyecto residencial de solo 12 apartamentos, diseñado para brindar privacidad, comodidad y espacios amplios.

## Disponibilidad

- 122 m² desde US$139,000
- 130 m² desde US$153,427.53
- Último piso: 174 m² + 36 m² de terraza — US$195,677

## Características del proyecto

- Planta eléctrica de cobertura total
- Lobby climatizado
- Área social
- Salón de eventos
- Área de BBQ
- Gas común con medidores individuales
- Parqueos según la unidad

Una excelente oportunidad para vivir o invertir en una zona residencial de Santo Domingo Este.`,
  },
  {
    slug: "residencial-soraya-i",
    name: "Residencial Soraya I",
    status: "Obra nueva",
    price: "Precio a consultar",
    specs: "8 apartamentos · 101–151 m²",
    location: "Prado Oriental, Santo Domingo Este",
    photos: 7,
    body: `Descubre un proyecto residencial que redefine la forma de vivir en Prado Oriental, Santo Domingo Este. Residencial Soraya I ha sido concebido para quienes buscan un hogar moderno, funcional y estratégicamente ubicado, a solo una esquina de la Avenida Ecológica.

Con tan solo 8 exclusivos apartamentos, este residencial ofrece un ambiente de privacidad y tranquilidad, con espacios que combinan arquitectura contemporánea, excelente distribución y acabados pensados para brindar confort en cada detalle. Las unidades cuentan con metrajes desde 101.49 m² hasta 151.4 m².

## Ubicación privilegiada

- A una esquina de la Av. Ecológica
- A 5 minutos de la Autopista de San Isidro
- A 5 minutos de la Av. Charles de Gaulle
- A 6 minutos de City Center
- A 15 minutos del Aeropuerto Internacional de Las Américas

Además, tendrás a pocos minutos supermercados, plazas comerciales, bancos, gimnasios y una amplia oferta de servicios.

Residencial Soraya I es la combinación perfecta entre ubicación, diseño y calidad de vida. Contáctanos y conoce las unidades disponibles antes de su entrega.`,
  },
  {
    slug: "proyecto-ciudad-juan-bosch",
    name: "Proyecto Residencial · Ciudad Juan Bosch",
    status: "En venta",
    price: "US$ 3,700,000",
    specs: "224 unidades · 2.ª etapa 60% avanzada",
    location: "Ciudad Juan Bosch, Santo Domingo Este",
    photos: 1,
    body: `Oportunidad única para adquirir un proyecto residencial de gran escala ubicado en una de las zonas de mayor crecimiento de Santo Domingo Este.

El desarrollo contempla un total de 224 unidades residenciales, con una primera etapa completamente entregada y habitada, y una segunda etapa con aproximadamente 60% de avance de construcción, reduciendo significativamente el tiempo de ejecución para el inversionista.

## Características principales

- Proyecto bajo fideicomiso aprobado
- Licencia general de construcción vigente
- Planos aprobados
- Terreno propio con todos los servicios (agua potable, drenaje pluvial y sanitario)
- Cinco edificios en obra gris con importante avance constructivo
- Alto potencial de valorización y comercialización en Ciudad Juan Bosch

La operación incluye la venta del proyecto junto con la empresa desarrolladora, ofreciendo una estructura legal y financiera lista para continuar el desarrollo de inmediato. Además, existen cubicaciones por cobrar por obras ejecutadas.

Solicita el dossier completo, planos, documentación legal y avance de obra.`,
  },
  {
    slug: "estacion-combustible-en-venta",
    name: "Estación de combustible en operación",
    status: "En venta",
    price: "US$ 3,750,000",
    specs: "50,000 gal/mes · food shop · +5,000 m²",
    location: "República Dominicana",
    photos: 1,
    body: `Excelente oportunidad de inversión en una estación de combustible moderna, rentable y actualmente en funcionamiento, ubicada en una zona estratégica de la República Dominicana con alto potencial de crecimiento comercial.

Con apenas 19 meses de construida y operando, esta propiedad combina la venta de combustibles con un food shop de alto movimiento, generando distintas fuentes de ingresos dentro de una misma operación.

La estación registra un volumen aproximado de 50,000 galones mensuales, comercializados íntegramente a través de surtidores, y mantiene un contrato de suministro con un beneficio de RD$13 por galón, al cual le restan aproximadamente 13.5 años de vigencia.

El food shop complementa la operación con ventas mensuales estimadas entre RD$2.3 millones y RD$2.5 millones, fortaleciendo el flujo comercial y la rentabilidad del negocio.

La propiedad cuenta con una superficie superior a 5,000 m², con la posibilidad de incorporar aproximadamente 2,000 m² adicionales actualmente en negociación, ofreciendo espacio para futuras ampliaciones, nuevos servicios o desarrollos comerciales complementarios.

## Características principales

- Estación moderna con solo 19 meses de operación
- Volumen aproximado de 50,000 galones mensuales
- Venta de combustible totalmente por surtidores
- Beneficio contractual de RD$13 por galón
- Aproximadamente 13.5 años restantes de contrato
- Food shop con ventas mensuales entre RD$2.3 y RD$2.5 millones
- Más de 5,000 m² de terreno
- Posibilidad de integrar unos 2,000 m² adicionales
- Negocio establecido, operativo y con potencial de expansión

Por razones de confidencialidad, la ubicación exacta, los estados financieros y demás informaciones sensibles serán suministrados únicamente a compradores debidamente calificados.

Una inversión comercial con operación activa, contrato vigente y múltiples fuentes de ingresos en el creciente mercado de combustibles de la República Dominicana.`,
  },
  {
    slug: "hotel-la-tambora-samana",
    name: "La Tambora · Activo turístico híbrido",
    status: "En venta",
    price: "US$ 8,000,000",
    specs: "Hotel 70 hab + 10,000 m² frente a playa",
    location: "La Tambora, Samaná",
    photos: 14,
    body: `Una oportunidad que no se compra… se identifica antes que el mercado. Mientras muchos compiten construyendo desde cero, los inversionistas estratégicos adquieren activos infravalorados con infraestructura existente, potencial de flujo de caja inmediato y capacidad real de expansión. Eso es exactamente La Tambora, Samaná: un activo turístico híbrido con tres motores de rentabilidad claros.

## Tres motores de rentabilidad

- Infraestructura existente (70 habitaciones): un hotel listo para reposicionar, ahorrando más de 24 meses en permisos y construcción pesada
- Terreno de expansión frente a la playa (10,000 m²): ideal para desarrollar villas de lujo o eco-villas bajo modelo Condo-Hotel
- Ubicación estratégica en el nuevo corredor de crecimiento de Samaná, entre Las Galeras, Cayo Levantado y Los Haitises

## La jugada financiera

- Compras el terreno a valor de mercado
- Recibes la infraestructura hotelera construida a costo casi cero
- Capacidad de generar flujo de caja en meses, no años
- Fuerte potencial de valorización mediante expansión inmobiliaria

En mercados comparables como Cosón o Las Terrenas, activos similares ya superan los US$250/m².

No es un hotel: es arbitraje inmobiliario inteligente, en uno de los destinos con mayor demanda del Caribe.`,
  },
  {
    slug: "terreno-bavaro-punta-cana",
    name: "Terreno con máster plan · Bávaro–Punta Cana",
    status: "En venta",
    price: "US$ 18,000,000",
    specs: "250,000 m² · máster plan aprobado · US$72/m²",
    location: "Bávaro–Punta Cana",
    photos: 1,
    body: `Excepcional oportunidad de inversión y desarrollo inmobiliario en Bávaro–Punta Cana, uno de los destinos turísticos y residenciales de mayor proyección de la República Dominicana.

Este importante terreno cuenta con una superficie aproximada de 250,000 m² y una ubicación privilegiada frente a la Autovía/Boulevard Turístico del Este, ofreciendo alta visibilidad, excelente conectividad y condiciones favorables para desarrollar un proyecto residencial, turístico o de uso mixto a gran escala.

La propiedad se encuentra a solo 2.538 km de una de las playas más hermosas de Bávaro, aproximadamente 5 minutos en vehículo. Esta cercanía al mar incrementa significativamente su atractivo para el desarrollo de proyectos orientados al turismo, la residencia vacacional y la inversión inmobiliaria.

La propiedad dispone de un máster plan definido y aprobado, organizado en seis etapas de desarrollo. Además, ya se han ejecutado importantes trabajos preliminares de infraestructura, lo que representa una ventaja estratégica para inversionistas y desarrolladores interesados en optimizar los tiempos de ejecución.

## Características principales

- Superficie aproximada de 250,000 m²
- Ubicación estratégica en Bávaro–Punta Cana
- Frente a la Autovía/Boulevard Turístico del Este
- A solo 2.538 km de una de las playas más atractivas de Bávaro
- Máster plan aprobado y estructurado en seis etapas
- Propiedad delimitada con muros de bloques
- Movimiento de tierra parcialmente ejecutado
- Parte del cableado y del sistema de drenaje instalada
- Documentación y estatus disponibles ante las instituciones correspondientes
- Potencial para desarrollo residencial, turístico o de uso mixto

## Oportunidad de inversión

El inmueble cuenta con una tasación aproximada de US$32,000,000 y se ofrece actualmente por US$18,000,000 negociables, equivalente a unos US$72 por m².

Esta diferencia frente al valor tasado, combinada con su extensión, cercanía a la playa, infraestructura adelantada y planificación aprobada, convierte la propiedad en una atractiva oportunidad para desarrolladores, fondos de inversión y grupos empresariales que buscan adquirir tierra con alto potencial de valorización en Punta Cana.

La ubicación exacta, el expediente técnico, la tasación, el máster plan y las documentaciones correspondientes serán presentados a compradores o inversionistas debidamente calificados.`,
  },
  {
    slug: "terreno-la-romana",
    name: "Terreno para desarrollo · La Romana",
    status: "En venta",
    price: "US$ 18,528,183",
    specs: "264,688 m² · US$70/m²",
    location: "La Romana",
    photos: 1,
    body: `Si buscas un terreno en venta en La Romana, esta es una de las mejores oportunidades de inversión disponibles en República Dominicana. Se ofrece un terreno estratégico con una superficie de 264,688.33 m², ideal para desarrollar proyectos residenciales, apartamentos, villas, viviendas económicas, proyectos de nivel medio o desarrollos de uso mixto.

Ubicado en una de las zonas de mayor crecimiento de La Romana, el terreno se encuentra próximo a Multiplaza La Romana, Jumbo, La Sirena, UFHEC, bancos, centros médicos y las principales vías de acceso, garantizando una excelente plusvalía y alta demanda para futuros desarrollos.

## Detalles del terreno

- Ubicación: La Romana, República Dominicana
- Superficie: 264,688.33 m²
- Precio: US$70 por m²
- Precio total: US$18,528,183.10

Los propietarios mantienen una posición flexible de negociación, están abiertos a recibir ofertas y pueden estructurar la operación mediante un aporte en naturaleza de una parte del terreno, participando como socios del proyecto — una excelente alternativa para desarrolladores, constructoras y fondos de inversión que buscan reducir el capital inicial y maximizar la rentabilidad.`,
  },
  {
    slug: "terreno-boca-chavon",
    name: "Terreno estratégico · Boca Chavón",
    status: "En venta",
    price: "US$ 30",
    priceSuffix: "/m²",
    specs: "1,099,769 m² · frente al Río Chavón",
    location: "Boca Chavón, La Romana",
    photos: 1,
    body: `Una oportunidad excepcional para desarrolladores e inversionistas que buscan adquirir un activo de gran escala en una de las zonas con mayor potencial de crecimiento del Este de la República Dominicana.

Ubicado en Boca Chavón, entre La Romana, San Rafael del Yuma y Bayahibe, este impresionante terreno ofrece una combinación difícil de encontrar: más de un millón de metros cuadrados, acceso por carretera, cercanía a los principales polos turísticos del país y una extensa franja con frente al majestuoso Río Chavón.

Con una superficie total de 1,099,769.17 m² (aproximadamente 110 hectáreas), la propiedad corresponde a la Parcela 160-E-26, Distrito Catastral 10.4, dividida naturalmente por una carretera de caliche en dos grandes porciones:

- 291,454.20 m² con aproximadamente 1,600 metros lineales de frente sobre la Riviera del Río Chavón
- 808,314.97 m² con acceso y cercanía al poblado de Boca Chavón

## Ubicación estratégica

- A 16 minutos del Aeropuerto Internacional de La Romana
- A 55 minutos del Aeropuerto Internacional de Punta Cana
- Acceso desde la Autovía del Este, ~1 km después del Puente Ing. Carlos Morales Troncoso

## Información catastral

- Parcela: 160-E-26 · Distrito Catastral: 10.4
- Municipio San Rafael del Yuma, Provincia La Altagracia
- Coordenadas UTM: 512089.29 m E / 2036021.87 m N (Zona 19Q)

Su extraordinaria dimensión, la cercanía a Casa de Campo, Bayahibe y Punta Cana, y su privilegiado frente al Río Chavón convierten esta propiedad en una oportunidad única para un proyecto de alto impacto.

Precio de venta: US$30 por m².`,
  },
  {
    slug: "apartamento-bella-vista",
    name: "Apartamento con terraza · Bella Vista",
    status: "En alquiler",
    price: "US$ 4,000",
    priceSuffix: "/mes",
    specs: "3 hab · 3.5 baños · 200 m² + terraza 160 m²",
    location: "Bella Vista, Santo Domingo",
    photos: 16,
    cover: "/assets/props/prop6.jpg",
    body: `Vive con amplitud, privacidad y comodidad en este exclusivo apartamento ubicado en Bella Vista, uno de los sectores residenciales más céntricos y valorados de Santo Domingo.

La propiedad cuenta con espacios interiores generosos y una impresionante terraza privada de 160 m², perfecta para crear diferentes ambientes sociales y disfrutar momentos especiales en familia.

## Características del apartamento

- 200 m² de construcción interior
- 160 m² de terraza privada
- Segundo nivel
- 3 habitaciones
- 3.5 baños
- Amplia sala y comedor
- Cocina espaciosa
- Área de lavado
- Cuarto de servicio con baño
- 3 estacionamientos

## Amenidades de la torre

- Elegante lobby
- Piscina
- Gimnasio equipado
- Salón para eventos
- Terraza techada
- Área de juegos infantiles
- Amplias áreas sociales`,
  },
  {
    slug: "apartamento-vista-mar-alquiler",
    name: "Apartamento amueblado con vista al mar",
    status: "En alquiler",
    price: "US$ 2,450",
    priceSuffix: "/mes",
    specs: "2 hab · 2.5 baños · piso 9",
    location: "Próximo al Hotel Catalonia, Santo Domingo",
    photos: 13,
    body: `Disfruta de un estilo de vida exclusivo en este elegante apartamento con vista al mar, ubicado en una zona privilegiada, próximo al Hotel Catalonia.

## Características del apartamento

- Amplia sala con excelente iluminación natural
- Comedor
- Cocina espaciosa y totalmente equipada
- 2 habitaciones
- Habitación principal con walking clóset, baño privado y balcón
- 2.5 baños en total
- Área de lavado · cuarto de servicio con baño
- Vista al mar
- 2 parqueos · piso 9
- Totalmente amueblado

## Amenidades de la torre

- Lobby elegante · áreas comunes
- Gimnasio · terraza · piscina
- Salón de conferencias`,
  },
  {
    slug: "apartamento-piantini-alquiler",
    name: "Apartamento amueblado en Piantini",
    status: "En alquiler",
    price: "US$ 1,600",
    priceSuffix: "/mes",
    specs: "2 hab · 2.5 baños · 157 m² · piso 6",
    location: "Piantini, Santo Domingo",
    photos: 11,
    body: `Elegante apartamento amueblado en alquiler en Piantini, ubicado en una exclusiva torre residencial. Cuenta con una distribución amplia y funcional, terminaciones de calidad y un cómodo balcón, ideal para quienes buscan vivir en una de las zonas más céntricas y valoradas de Santo Domingo.

## Distribución

- Sala y comedor
- Amplio balcón
- Cocina
- Dos habitaciones, cada una con baño privado
- Medio baño para visitas
- Habitación de servicio
- Área de lavado amplia
- Dos parqueos

## Amenidades de la torre

- Lobby climatizado
- Salón multiuso en el último nivel
- Gimnasio
- Área de juegos para niños

Una excelente opción para alquilar un apartamento amueblado en Piantini, con espacios cómodos, amenidades funcionales y acceso rápido a comercios, restaurantes y servicios.`,
  },
  {
    slug: "apartamento-la-esperilla-alquiler",
    name: "Apartamento en La Esperilla",
    status: "En alquiler",
    price: "US$ 1,400",
    priceSuffix: "/mes",
    specs: "2 hab · 2 baños + medio",
    location: "La Esperilla, Santo Domingo",
    photos: 21,
    body: `Vive con comodidad y estilo en este apartamento ubicado en una de las zonas más exclusivas de Santo Domingo.

## Distribución

- Balcón · sala · comedor · cocina
- Medio baño para visitas
- Área de lavado
- Cuarto de servicio con baño
- Línea blanca incluida: nevera, estufa y extractor
- 2 habitaciones
- Habitación principal con baño privado y walking clóset
- 2 baños completos

## Amenidades del edificio

- Elegante lobby
- Área social en el 5.º nivel
- Piscina techada
- Área de BBQ · salón de eventos
- Gimnasio equipado
- Área de juegos para niños
- 3 ascensores (incluyendo 1 de servicio)
- 2 escaleras de emergencia`,
  },
  {
    slug: "apartamento-juan-dolio-alquiler",
    name: "Apartamento amueblado en Juan Dolio",
    status: "En alquiler",
    price: "US$ 1,400",
    priceSuffix: "/mes",
    specs: "2 hab · 2 baños · piso 3 · amueblado",
    location: "Juan Dolio",
    photos: 14,
    body: `Ubicado a pocos metros de la playa, este moderno apartamento totalmente amueblado combina comodidad, ubicación y excelentes amenidades para disfrutar del estilo de vida de Juan Dolio.

## Características del apartamento

- Piso 3 · totalmente amueblado
- Sala y comedor
- Balcón
- Cocina
- 2 habitaciones · 2 baños
- 2 ascensores

## Amenidades del proyecto

- Piscina
- Terraza techada
- Salón de eventos
- Gimnasio
- Áreas sociales en el segundo nivel`,
  },
];

export function getListing(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}

/** Dated listings first (newest to oldest), then the rest in curated order. */
export function listingsByNewest(): Listing[] {
  return listings
    .map((l, i) => ({ l, i }))
    .sort((a, b) => {
      const da = a.l.listedAt ? +new Date(a.l.listedAt) : -1;
      const db = b.l.listedAt ? +new Date(b.l.listedAt) : -1;
      return db - da || a.i - b.i;
    })
    .map((x) => x.l);
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
