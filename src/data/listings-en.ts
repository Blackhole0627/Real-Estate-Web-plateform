/**
 * English overlay for file-mode listings, keyed by slug. Any field left out
 * falls back to the Spanish original; listings without an entry render in
 * Spanish with English chrome. Once the database is live, these values move
 * to the *_en columns and this file retires.
 */
export interface ListingEn {
  name?: string;
  specs?: string;
  body?: string;
}

export const listingsEn: Record<string, ListingEn> = {
  "rio-arriba-12-casa-de-campo": {
    name: "Río Arriba 12",
    specs: "6 beds · 6.5 baths · 1,516 m²",
    body: `Located in one of the most exclusive areas of Casa de Campo, Río Arriba 12 is an extraordinary luxury villa designed by renowned architect Alejandro Acebal, where elegance, technology and comfort come together seamlessly. With an impressive 1,516.52 m² of construction on a generous 3,302.11 m² lot, this residence offers spaces designed for a sophisticated, private lifestyle.

The property has 6 spacious bedrooms, each with a private bathroom and walk-in closet, for a total of 6.5 bathrooms, plus two staff bedrooms with independent bathrooms. Its interiors stand out for high ceilings, air-conditioned social areas, an elegant living room, formal dining room, TV lounge and an exclusive private cinema.

The villa features a spectacular, fully renovated designer kitchen, complemented by an outdoor kitchen ideal for entertaining. It also offers a driver's area, an equipped beauty salon, whole-home audio, smart automation for lighting, curtains and sound, as well as security cameras and solar panels.

Outside, ample terraces, balconies, an integrated BBQ area, a pool and impeccably kept gardens make the most of the breathtaking panoramic views over the prestigious Dye Fore golf course and the Caribbean Sea.

Fully furnished with exclusive pieces from Altri-Tempi and Restoration Hardware.

## Highlights

- 6 bedrooms with walk-in closets
- 6.5 bathrooms
- 1,516.52 m² of construction
- 3,302.11 m² lot
- Private cinema
- Private beauty salon
- Renovated indoor and outdoor kitchens
- Pool and BBQ area
- Integrated sound system and smart automation
- Solar panels and security cameras
- Central air conditioning
- Views of the sea and the Dye Fore golf course
- Fully furnished with luxury furniture
- Gated community with 24/7 security`,
  },
  "villa-las-palmas-cap-cana": {
    name: "Las Palmas",
    specs: "6 suites · 7 baths · 831 m²",
    body: `There are extraordinary properties, and then there are those that redefine exclusivity. Las Palmas belongs to the latter: a contemporary villa designed for those seeking absolute privacy, cutting-edge architecture and a permanent connection with one of the Caribbean's most privileged settings.

Set on hole 7 of the prestigious Punta Espada golf course, this residence offers an experience where the endless green of the course merges with ocean views, creating an incomparable atmosphere of serenity and sophistication.

With 831 m² of construction on an impressive 2,034 m² lot, the villa was conceived to blur the boundaries between indoors and outdoors. Spectacular double-height ceilings, floor-to-ceiling windows and an open layout let natural light take the leading role.

The residence offers six exclusive suites, complemented by six full bathrooms and a guest half-bath. The open-concept kitchen integrates flawlessly with the social and outdoor areas. It is delivered fully furnished.

Outside, a spectacular pool with jacuzzi, ample terraces, a BBQ area and lush gardens turn every day into a private-resort experience.

As a Cap Cana resident you will enjoy access to one of the Caribbean's most exclusive communities: white-sand beaches, a world-class marina, fine dining, equestrian and nautical activities, and the legendary Punta Espada Golf Course.

## Highlights

- 831 m² of construction · 2,034 m² lot
- 6 suites, each designed as a private retreat
- 6 full bathrooms + guest half-bath
- Double-height ceilings and floor-to-ceiling windows
- Pool with jacuzzi, terraces and BBQ area
- Delivered fully furnished
- On hole 7 of Punta Espada, with ocean views`,
  },
  "casa-la-nouba-las-terrenas": {
    name: "Casa La Nouba",
    specs: "6 suites · 750 m² · 1,607 m² lot",
    body: `Perched on a hill inside the prestigious Bonita Village residential community, Casa La Nouba redefines beachfront luxury. Steps from Playa Bonita and surrounded by lush tropical nature, this extraordinary residence offers absolute privacy, incomparable panoramic views and a way of living where architecture and landscape blend in complete harmony.

Developed on a 1,607 m² lot with approximately 750 m² of construction across three levels, the villa was designed to maximize natural light, cross ventilation and a permanent connection with the ocean. Its ample terraces capture some of the best views of Playa Bonita, Cayos Ballenas, Cosón and Portillo.

The heart of the property is a spectacular open-concept social area, where the main lounge, kitchen with bar, dining room and terraces converge onto an elegant 120 m² Ipe wood deck and a stunning 5 × 10 meter infinity pool.

The residence offers six suites, all with private bathrooms and dressing rooms, four of them with striking sea views. It also includes an independent apartment with living room, kitchen and bedroom, comfortably hosting up to twelve guests.

## Highlights

- 1,607 m² lot · ~750 m² of construction
- 6 suites with bathroom and dressing room
- Independent apartment with sea view
- Infinity pool and jacuzzi-ready area
- 120 m² Ipe wood deck
- Ample panoramic terraces
- Main kitchen with integrated bar · BBQ area
- Enclosed garage and parking for three vehicles
- 24 kW power plant · 13.3 kW photovoltaic system
- Solar and gas water heaters · cistern
- Permanent private security

## Bonita Village

One of Playa Bonita's most exclusive residential communities, with private security, tropical gardens, a 30-meter pool, tennis court and petanque area. From the property you can walk to the beach, the nautical club and renowned beachfront restaurants.`,
  },
  "villa-las-canas-frente-al-mar": {
    name: "Beachfront villa in Las Canas",
    specs: "4 beds · 4.5 baths · 900 m² · 5,717 m² lot",
    body: `Located in Las Canas, on the north coast of the Dominican Republic, this impressive beachfront villa offers an exceptional combination of privacy, space and direct connection with the natural Caribbean surroundings.

The property sits on an extraordinary 5,717 m² lot with approximately 900 m² of construction across two levels. Its privileged position offers open ocean views, direct beach access and an atmosphere of absolute tranquility surrounded by tropical vegetation.

The interior spaces open onto broad terraces and outdoor areas, creating a natural transition between the residence, the gardens, the pool and the ocean. The construction showcases coral stone, natural woods, artisanal stonework and decorative ironwork.

The main residence offers three spacious bedrooms. A fourth suite-style bedroom, set independently next to the pool area, provides additional private space for guests. The property also includes two independent staff houses.

## Highlights

- 5,717 m² lot · 900 m² of construction
- 4 bedrooms · 4.5 bathrooms · 2 levels
- Beachfront location with direct beach access
- Private pool · ample terraces
- Ocean and mountain views
- Coral stone and natural materials
- Air conditioning · 24-hour power · 24/7 security
- Independent guest suite
- 2 independent staff houses
- Extensive gardens and tropical vegetation`,
  },
  "torre-ocean-view-cacicazgos": {
    name: "Ocean View Tower",
    specs: "4 beds · 4.5 baths · 560 m² net",
    body: `Ocean View is an exclusive ultra-luxury residential tower on the prestigious Anacaona Avenue, one of the most coveted addresses in the Dominican Republic. Designed for those seeking space, privacy and a first-class residential experience, this imposing tower offers the exclusivity of one apartment per floor.

With modern, elegant architecture, Ocean View will rise 37 levels, with residences of approximately 560 m² net and a selection of amenities conceived for comfort and well-being facing Mirador Sur park.

Estimated delivery: 2029.

## Project features

- 37-level residential tower · one apartment per floor
- 4 basement parking levels
- Exclusive amenities level
- 2 luxury elevators + 1 service elevator
- Power generators · concierge
- CCTV security and monitoring
- Drivers' lounge
- Cistern water treatment · common gas

## Amenities

- Elegant lobby
- Events lounge
- Pool · fully equipped gym
- Children's play area
- Covered terrace with integrated bar
- Spa area · BBQ area

## Apartment layout

- Grand living room, private study and family room
- Independent dining room and ample terrace
- 4 bedrooms, each with bathroom and walk-in closet
- Cold and hot kitchens · laundry area
- Staff quarters · private locker
- 4 covered parking spaces per apartment

## Premium finishes

- Imported Crema Marfil marble floors and cladding
- Imported modular kitchens
- Imported 2.40 m engineered doors
- Thermally insulated windows
- VRF air-conditioning system installed

## Featured units

- Apartment 501 · 618 m² total · US$2,125,000
- Apartment 2001 · 621 m² total · US$2,440,000
- Apartment 3101 · 622 m² total · US$2,550,000`,
  },
  "villa-frente-al-oceano-cabarete": {
    name: "Oceanfront villa in Cabarete",
    specs: "3 beds · 5.5 baths · 547 m² · 3,530 m² lot",
    body: `Set directly on the ocean on the north coast of the Dominican Republic, this spectacular villa delivers a residential experience defined by sweeping panoramic views, generous spaces and architecture designed to make the most of its privileged setting.

Built on a 3,530 m² lot with approximately 547 m² of construction across two levels, the property uses its oceanfront position to weave the landscape, natural light and sea breeze into every room.

The villa offers 3 bedrooms and 5.5 bathrooms. One of its most distinctive architectural elements is the sunken living room — a customized space that becomes the centerpiece for gathering, entertaining or simply enjoying the views.

It features a private sauna, a lap-length pool and a jacuzzi, creating the ideal setting to unwind while enjoying the tropical surroundings and ocean views.

The villa sits close to Cabarete and Sosúa, with easy connection to the Gregorio Luperón International Airport in Puerto Plata, and convenient access to restaurants, shops, schools and medical services.

## Highlights

- 547 m² of construction · 3,530 m² lot
- 3 bedrooms · 5.5 bathrooms · 2 levels
- Oceanfront location with panoramic sea views
- Private pool · jacuzzi · private sauna
- Sunken living room
- Generous social areas integrated with the outdoors
- Air conditioning · 24-hour power
- 24/7 security · gated community
- 3 storage areas
- 2 covered parking spaces
- Close to Cabarete and Sosúa
- Easy access to Gregorio Luperón International Airport`,
  },
  "twin-towers-anacaona": {
    name: "Twin Towers · Block B",
    specs: "3 beds · 3.5 baths · 358–360 m²",
    body: `Twin Towers is an exclusive luxury residential development facing Mirador Sur park on the prestigious Anacaona Avenue, considered one of the most exclusive and fastest-appreciating addresses in Santo Domingo.

Developed under a modern, elegant concept, the project consists of two independent 23-level towers designed to offer space, privacy and privileged views of the Caribbean Sea, the city and the green areas of Mirador Sur park.

The project is fully completed and available for immediate delivery.

## Amenities

- Elegant air-conditioned luxury lobby
- Residents' pool
- Ample exclusive social areas
- Two luxury elevators + service elevator
- Concierge · CCTV security and monitoring
- Power generators · common gas
- Drivers' lounge and dining area
- Visitor parking

## Availability

- 358 m² apartment + 50 m² of parking · 3 beds · 3.5 baths · US$1,195,000
- 6th floor apartment – Unit 02 · 360 m² + 50 m² of parking · 3 beds · 3.5 baths · US$1,290,000

Completed and move-in ready — only 6 apartments available, with panoramic views of the city, the sea and the park.`,
  },
  "villa-palmera-residences": {
    name: "Villa Palmera Residences",
    specs: "3 beds · 3.5 baths · 295–302 m² net",
    body: `Villa Palmera Residences is an exclusive luxury residential tower in the prestigious Cacicazgos district, steps from Anacaona Avenue, one of Santo Domingo's most valued and prestigious areas.

With contemporary architectural design, the tower will hold only 18 apartments across 11 levels — 2 apartments per floor — offering an exclusive atmosphere and low resident density.

Estimated delivery: June 2029.

## Project features

- 11-level tower · only 18 apartments
- 2 basement parking levels
- Exclusive social areas level
- 2 luxury elevators + 1 service elevator
- Power generators · concierge
- CCTV security and monitoring
- Drivers' lounge
- Refrigerated garbage room with chute · common gas
- 17 additional parking spaces for sale

## Amenities

- Elegant lobby and waiting lounge
- Events lounge
- Lounge area with integrated bar
- Pool · equipped gym
- Children's play area · BBQ area

## Apartment layout

- Living room, study, dining room and terrace
- Cold and hot kitchens
- 3 bedrooms with bathroom and walk-in closet
- Staff quarters · linen closet
- 3 covered parking spaces · 1 private locker

## Featured units

- Unit 3B · 337.85 m² total · US$1,010,000
- Unit 7A · 348.45 m² total · US$1,090,000
- Unit 11A (Penthouse) · 344.85 m² total · US$1,165,000`,
  },
  "villa-comunidad-residencial-cabarete": {
    name: "Luxury villa in gated community · Cabarete",
    specs: "4 beds · 5 baths · 450 m² · 1,700 m² lot",
    body: `Located inside an exclusive beachfront residential community in Cabarete, this elegant two-level villa combines space, privacy and a tropical lifestyle in one of the best-known destinations on the north coast of the Dominican Republic.

The property offers 450 m² of construction on a 1,700 m² lot. Its layout includes 4 bedrooms, 5 bathrooms and a private office, making it an excellent option for families seeking comfort, independence and functional spaces.

The residence presents an open layout integrating the living room, dining room and kitchen. Large sliding doors connect the social areas with the covered terraces, gardens and private pool, taking advantage of natural light and the tropical climate all year round.

The main bedroom works as a private retreat within the residence, with a large closet, private bathroom and a terrace overlooking the tropical surroundings. The independent office provides a dedicated space for working from home.

## Highlights

- 450 m² of construction · 1,700 m² lot
- 4 bedrooms · 5 bathrooms · private office
- Two-level villa
- Main bedroom with private bathroom and terrace
- Open-concept living and dining room · modern kitchen
- Ample covered terraces · private pool · tropical gardens
- Air conditioning · 24-hour power · 24/7 security

## Community amenities

- Gated beachfront community with beach access
- Equestrian center
- Tennis club
- Community pool with waterfalls
- Oceanfront restaurant
- Trails and recreational areas
- Close to Cabarete's restaurants, shops, schools and services`,
  },
  "apartamento-kite-beach-cabarete": {
    name: "Beachfront apartment at Kite Beach",
    specs: "3 beds · 2 baths · 169 m² · beachfront",
    body: `Discover a different way to live the Caribbean at Kite Beach, Cabarete, one of the best-known beach destinations on the north coast of the Dominican Republic. This exclusive 169 m² apartment, with 3 bedrooms and 2 bathrooms, combines a privileged oceanfront location with generous spaces, open sea views and direct beach access.

Its open layout connects the living and dining areas with a wide private terrace facing the sea — the perfect spot to enjoy the breeze, watch the ocean and take in the signature kitesurfing scene that distinguishes Kite Beach.

The main bedroom enjoys a direct ocean view, private bathroom and terrace access. The other two bedrooms provide comfortable spaces for family and guests.

The property is part of a beachfront residential community with direct beach access, tropical landscaping and resort-style amenities, minutes from Cabarete's restaurants, cafés and entertainment.

## Highlights

- 169 m² · 3 bedrooms · 2 bathrooms
- Private terrace with ocean view
- Main bedroom with sea view and private bathroom
- Open-concept living and dining room · modern kitchen
- Direct beach access
- Beachfront residential community
- Tropical gardens and landscaping · resort-style amenities
- Excellent natural light and ventilation
- Located at Kite Beach, Cabarete

## Maintenance

- US$622 per month + electricity`,
  },
  "villa-loma-alta-cabrera": {
    name: "Ocean-view villa in Cabrera",
    specs: "4 beds · 5.5 baths · 371 m² · 7,100 m² lot",
    body: `Located in Loma Alta, Cabrera, this impressive villa offers an exceptional combination of space, privacy and panoramic views of the ocean and mountains. Built on an extensive 7,100 m² lot, it is an excellent choice for those seeking the tranquility and natural beauty of the Dominican north coast.

The property has approximately 371 m² of construction split between the main residence and an independent guest house. It sits about 12 minutes from the center of Cabrera by paved road and around 1 hour 30 minutes from the Gregorio Luperón International Airport in Puerto Plata.

The main residence offers 3 air-conditioned bedrooms and 4.5 bathrooms. On the upper level, the main suite has its own entrance and parking, nearly 360-degree views, front and rear balconies, indoor and outdoor showers, a bar area and two dressing rooms.

The independent guest house is equipped with 1 air-conditioned bedroom, 1 bathroom, kitchen and laundry area. In total the property offers 4 bedrooms and 5.5 bathrooms.

The organically shaped private pool is surrounded by coral stone, with a small additional pool adaptable as a jacuzzi.

## Highlights

- 371 m² of construction · 7,100 m² lot
- 4 bedrooms · 5.5 bathrooms in total
- 3-bedroom main residence + independent guest house
- Main suite with independent entrance and 360° views
- Panoramic ocean and mountain views
- Private pool + secondary pool adaptable as jacuzzi
- Victron Energy solar power system
- Water filtration and softening · solar and gas water heating
- Cistern of approximately 10,000 gallons
- 1-car garage · security post
- Alarm and camera system with mobile access
- Coral stone, wood ceilings and Spanish roof tiles
- 12 minutes from the center of Cabrera`,
  },
  "villa-puerto-bahia": {
    name: "Villa in Puerto Bahía",
    specs: "3 beds · 2 main suites",
    body: `Located inside the exclusive Puerto Bahía, one of the most prestigious residential and nautical developments in the Dominican Republic, this elegant three-bedroom villa — including two spacious main suites — offers an exceptional combination of luxury, privacy and an incomparable seaside lifestyle.

The property is part of a private community with first-class infrastructure: a private international marina, five-star hotel, restaurants, mini market, spa, recreational areas and 24-hour private security.

The villa sits at the heart of Samaná Bay, world-famous for humpback whale watching between January and March. From here, some of the country's most spectacular beaches are 10 to 30 minutes away.

Comfortably hosting up to eight guests, it is an excellent option both as a vacation residence and as an investment.

## Project amenities

- Private international marina
- Five-star hotel
- Restaurants · mini market · spa
- 24/7 private security with controlled access
- Recreational and sports areas

## Villa features

- 3 bedrooms · 2 main suites
- Generous interior spaces
- Capacity for 8 guests
- Privileged location inside Puerto Bahía`,
  },
  "apartamento-playa-nueva-romana": {
    name: "Apartment in Playa Nueva Romana",
    specs: "2 beds · 2 baths · 149.85 m² · beachfront",
    body: `Located on the beachfront, inside one of the most exclusive residential complexes in the eastern region.

## Apartment features

- 149.85 m²
- First level
- Living room
- Dining room
- Kitchen
- 2 bedrooms, each with its own bathroom
- Laundry area
- Private jacuzzi

## Complex amenities and services

- Pool
- More than 2 kilometers of beach
- Beach club and clubhouse
- 18-hole PGA golf course
- 9-hole executive golf course
- Golf clubhouse
- Sports center · gym
- Padel, pickleball, petanque and FootGolf courts
- Yoga room · spa and massage area
- Specialty restaurants
- Supermarket and minimarket
- Casino
- Playgrounds and parks
- Leisure and business center · event venues
- Commercial area
- Two five-star hotels
- Internal transportation
- 24-hour security
- Hair salon and courier service

An ideal property to live by the sea, enjoy with your family or invest in an exclusive setting with fully developed amenities.`,
  },
  "hotel-la-tambora-samana": {
    name: "La Tambora · Hybrid tourism asset",
    specs: "70-room hotel + 10,000 m² beachfront",
    body: `An opportunity you don't buy… you identify before the market does. While many still compete by building from scratch, strategic investors are acquiring undervalued assets with existing infrastructure, immediate cash-flow potential and real expansion capacity. That is exactly what La Tambora, Samaná represents: a hybrid tourism asset with three clear profit engines.

## Three profit engines

- Existing infrastructure (70 rooms): a hotel ready to be repositioned, saving 24+ months in permits and heavy construction
- Beachfront expansion land (10,000 m²): virgin land in a prime location, ideal for developing luxury villas or eco-villas under a condo-hotel model
- Strategic location in Samaná's new growth corridor, between Las Galeras, Cayo Levantado and Los Haitises

## The real financial play

- You buy land at market value
- You receive fully built hotel infrastructure at near-zero cost
- Capacity to generate cash flow in months, not years
- Strong upside through real estate expansion

In comparable markets such as Cosón or Las Terrenas, similar assets already exceed US$250/m².

This is not a hotel: it is smart real estate arbitrage in one of the Caribbean's most in-demand destinations.`,
  },
  "terreno-bavaro-punta-cana": {
    name: "Land with approved master plan · Bávaro–Punta Cana",
    specs: "250,000 m² · approved master plan · US$72/m²",
    body: `An exceptional investment and development opportunity in Bávaro–Punta Cana, one of the Dominican Republic's fastest-growing tourism and residential destinations.

This major property covers approximately 250,000 m² with a privileged position fronting the Autovía/Boulevard Turístico del Este, offering high visibility, excellent connectivity and favorable conditions for a large-scale residential, tourism or mixed-use project.

The property sits only 2.538 km from one of Bávaro's most beautiful beaches — about 5 minutes by car. This proximity to the sea significantly increases its appeal for tourism-oriented development, vacation residences and real estate investment.

The property has a defined and approved master plan organized into six development stages. Significant preliminary infrastructure work has already been executed, a strategic advantage for investors and developers looking to optimize execution timelines.

## Highlights

- Approximately 250,000 m²
- Strategic location in Bávaro–Punta Cana
- Fronting the Autovía/Boulevard Turístico del Este
- Only 2.538 km from one of Bávaro's most attractive beaches
- Approved master plan structured in six stages
- Property enclosed with block walls
- Earthworks partially executed
- Part of the wiring and drainage systems installed
- Documentation and status available with the corresponding institutions
- Potential for residential, tourism or mixed-use development

## Investment opportunity

The property has an appraisal of approximately US$32,000,000 and is currently offered at US$18,000,000 negotiable — about US$72 per m².

This gap versus the appraised value, combined with its scale, beach proximity, advanced infrastructure and approved planning, makes the property an attractive opportunity for developers, investment funds and business groups seeking land with high appreciation potential in Punta Cana.

The exact location, technical file, appraisal, master plan and corresponding documentation will be presented to duly qualified buyers or investors.`,
  },
  "terreno-la-romana": {
    name: "Development land · La Romana",
    specs: "264,688 m² · US$70/m²",
    body: `If you are looking for land for sale in La Romana, this is one of the best investment opportunities available in the Dominican Republic: a strategic property of 264,688.33 m², ideal for residential projects, apartments, villas, affordable housing, mid-level projects or mixed-use developments.

Located in one of La Romana's fastest-growing areas, the land sits near Multiplaza La Romana, Jumbo, La Sirena, UFHEC, banks, medical centers and the main access roads, ensuring excellent appreciation and strong demand for future developments.

## Land details

- Location: La Romana, Dominican Republic
- Surface: 264,688.33 m²
- Price: US$70 per m²
- Total price: US$18,528,183.10

The owners maintain a flexible negotiating position, are open to offers and can structure the deal through an in-kind contribution of part of the land, participating as project partners — an excellent alternative for developers, builders and investment funds looking to reduce initial capital and maximize returns.`,
  },
  "terreno-boca-chavon": {
    name: "Strategic land · Boca Chavón",
    specs: "1,099,769 m² · Chavón riverfront",
    body: `An exceptional opportunity for developers and investors seeking a large-scale asset in one of the highest-potential growth areas of the eastern Dominican Republic.

Located in Boca Chavón, between La Romana, San Rafael del Yuma and Bayahibe, this impressive property offers a combination hard to find: more than one million square meters, road access, proximity to the country's main tourism hubs and an extensive stretch fronting the majestic Chavón River.

With a total surface of 1,099,769.17 m² (approximately 110 hectares), the property corresponds to Parcel 160-E-26, Cadastral District 10.4, naturally divided by a gravel road into two large portions:

- 291,454.20 m² with approximately 1,600 linear meters fronting the Chavón Riviera
- 808,314.97 m² with access to and proximity to the town of Boca Chavón

## Strategic location

- 16 minutes from La Romana International Airport
- 55 minutes from Punta Cana International Airport
- Access from the Autovía del Este, ~1 km after the Ing. Carlos Morales Troncoso bridge

## Cadastral information

- Parcel: 160-E-26 · Cadastral District: 10.4
- San Rafael del Yuma municipality, La Altagracia province
- UTM coordinates: 512089.29 m E / 2036021.87 m N (Zone 19Q)

Its extraordinary scale, proximity to Casa de Campo, Bayahibe and Punta Cana, and privileged Chavón River frontage make this property a unique opportunity for a high-impact project.

Sale price: US$30 per m².`,
  },
  "estacion-combustible-en-venta": {
    name: "Operating fuel station",
    specs: "50,000 gal/month · food shop · +5,000 m²",
    body: `Excellent investment opportunity in a modern, profitable and currently operating fuel station, located in a strategic area of the Dominican Republic with high commercial growth potential.

Built and operating for just 19 months, this property combines fuel sales with a high-traffic food shop, generating multiple income streams within a single operation.

The station moves approximately 50,000 gallons per month, sold entirely through its pumps, and holds a supply contract with a margin of RD$13 per gallon, with approximately 13.5 years remaining.

The food shop complements the operation with estimated monthly sales between RD$2.3 million and RD$2.5 million, strengthening the commercial flow and profitability of the business.

The property covers more than 5,000 m², with the possibility of adding approximately 2,000 m² currently under negotiation, offering room for expansions, new services or complementary commercial developments.

## Highlights

- Modern station with only 19 months of operation
- Approximately 50,000 gallons per month
- Fuel sales entirely through pumps
- Contractual margin of RD$13 per gallon
- Approximately 13.5 years remaining on the contract
- Food shop with monthly sales between RD$2.3 and RD$2.5 million
- More than 5,000 m² of land
- Possibility of adding around 2,000 m²
- Established, operating business with expansion potential

For confidentiality reasons, the exact location, financial statements and other sensitive information will be provided only to duly qualified buyers.`,
  },

  // Local-market inventory: translated card fields; descriptions remain in
  // Spanish until the client provides or requests full translations.
  "apartamento-la-esperilla-caoba": {
    name: "Apartment in La Esperilla",
    specs: "3 beds · 3.5 baths · 6th floor",
  },
  "apartamento-la-esperilla-vista-mar": {
    name: "Ocean-view apartment in La Esperilla",
    specs: "3 beds · 3.5 baths · 202 m² · 4th floor",
  },
  "apartamento-terraza-300": {
    name: "Apartment with private terrace",
    specs: "3 beds · 3.5 baths · 300 m²",
  },
  "apartamento-piantini-2hab": {
    name: "2-bedroom apartment in Piantini",
    specs: "2 beds · 2.5 baths · 156 m²",
  },
  "apartamento-la-esperilla-parque": {
    name: "Apartment facing Parque Iberoamérica",
    specs: "2 beds · 2.5 baths · 140 m² · 7th floor",
  },
  "apartamento-la-esperilla-amueblado": {
    name: "Furnished apartment in La Esperilla",
    specs: "3 beds · 3.5 baths · 152 m² · furnished · 9th floor",
  },
  "penthouse-juan-dolio": {
    name: "Penthouse in Juan Dolio",
    specs: "3 beds · 4 baths · 190 m² · 2 levels",
  },
  "apartamentos-piantini-poligono": {
    name: "Apartments in Piantini",
    specs: "Mixed-use tower · Polígono Central",
  },
  "apartamento-bella-vista-nuevo": {
    name: "Brand-new apartment in Bella Vista",
    specs: "2 beds · 2.5 baths · 82 m² · brand new",
  },
  "residencial-los-tres-ojos": {
    name: "Apartments in Los Tres Ojos",
    specs: "122–174 m² · only 12 apartments",
  },
  "residencial-soraya-i": {
    name: "Residencial Soraya I",
    specs: "8 apartments · 101–151 m²",
  },
  "proyecto-ciudad-juan-bosch": {
    name: "Residential project · Ciudad Juan Bosch",
    specs: "224 units · 2nd stage 60% built",
  },
  "villa-palmera-xxi": {
    name: "Villa Palmera XXI",
    specs: "2–3 beds · 90–197 m² net",
  },
  "apartamento-bella-vista": {
    name: "Apartment with terrace · Bella Vista",
    specs: "3 beds · 3.5 baths · 200 m² + 160 m² terrace",
  },
  "apartamento-vista-mar-alquiler": {
    name: "Furnished sea-view apartment",
    specs: "2 beds · 2.5 baths · 9th floor",
  },
  "apartamento-piantini-alquiler": {
    name: "Furnished apartment in Piantini",
    specs: "2 beds · 2.5 baths · 157 m² · 6th floor",
  },
  "apartamento-la-esperilla-alquiler": {
    name: "Apartment in La Esperilla",
    specs: "2 beds · 2 full baths + half",
  },
  "apartamento-juan-dolio-alquiler": {
    name: "Furnished apartment in Juan Dolio",
    specs: "2 beds · 2 baths · 3rd floor · furnished",
  },
};
