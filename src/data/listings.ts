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
    photos: 12,
    body: `Exclusiva torre en Piantini — apartamento amueblado en el sexto piso, con 157 m².

## Características del apartamento

- 2 habitaciones, cada una con su baño de lujo
- Medio baño de visitas
- Sala-comedor
- Cocina
- Área de lavado amplia
- Amplio balcón
- Habitación de servicio
- 2 parqueos

## Amenidades de la torre

- Salón multiuso en el último nivel
- Gimnasio
- Lobby climatizado
- Área de juegos para niños`,
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
