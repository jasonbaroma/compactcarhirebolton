export type Vehicle = {
  title: string
  body: string
  image: string
  alt: string
}

export type Faq = {
  question: string
  answer: string
}

export type WhyChooseItem = {
  title: string
  body: string
}

export type LocalRelevanceBlock = {
  title: string
  body: string
}

export type ServicePageContent = {
  metadata: {
    title: string
    description: string
  }
  currentLocationName?: string
  heroImage: string
  heroAlt: string
  heroTitle: string
  heroDescription: string
  heroSecondaryActionLabel?: string
  inventorySectionId?: string
  mainServiceKicker?: string
  mainServiceTitle: string
  mainServiceDescription: string
  mainVehicles: Vehicle[]
  mainVehicleAction: boolean
  whyChooseKicker?: string
  whyChooseTitle: string
  whyChooseDescription: string
  whyChooseItems: WhyChooseItem[]
  additionalServicesKicker?: string
  additionalServicesTitle?: string
  additionalServicesDescription?: string
  additionalVehicles?: Vehicle[]
  featureCtaTitle: string
  featureCtaDescription: string
  serviceAreasKicker?: string
  serviceAreasTitle?: string
  serviceAreasDescription?: string
  localRelevanceKicker?: string
  localRelevanceTitle: string
  localRelevanceDescription: string
  localRelevanceBlocks: LocalRelevanceBlock[]
  bottomCtaTitle: string
  bottomCtaDescription: string
  faqKicker?: string
  faqTitle?: string
  faqs: Faq[]
}

type VehicleText = {
  body: string
  alt: string
}

type WhyChooseText = {
  title: string
  body: string
}

type LocalBlockText = {
  title: string
  body: string
}

type FaqText = {
  question: string
  answer: string
}

type ContentTokenSet = {
  metadata: {
    title: string
    description: string
  }
  heroImage: string
  heroAlt: string
  heroTitle: string
  heroDescription: string
  heroSecondaryActionLabel: string
  mainServiceKicker: string
  mainServiceTitle: string
  mainServiceDescription: string
  mainVehicles: VehicleText[]
  whyChooseKicker: string
  whyChooseTitle: string
  whyChooseDescription: string
  whyChooseItems: WhyChooseText[]
  additionalServicesKicker?: string
  additionalServicesTitle?: string
  additionalServicesDescription?: string
  additionalVehicles?: VehicleText[]
  featureCtaTitle: string
  featureCtaDescription: string
  serviceAreasKicker: string
  serviceAreasTitle: string
  serviceAreasDescription: string
  localRelevanceKicker: string
  localRelevanceTitle: string
  localRelevanceDescription: string
  localRelevanceBlocks: LocalBlockText[]
  bottomCtaTitle: string
  bottomCtaDescription: string
  faqKicker: string
  faqTitle: string
  faqs: FaqText[]
}

export type ServiceSlug =
  | "compact-car"
  | "van-hire"
  | "truck-hire"
  | "minibus-hire"

function isTemplateToken(value: string) {
  return value.startsWith("{{") && value.endsWith("}}")
}

const compactCarMainImages = [
  "/compact-car/Fiat500.png",
  "/compact-car/Hyundai-i10Auto.png",
  "/compact-car/VWGolf.png",
  "/compact-car/FocusAuto.png",
] as const

const compactCarAdditionalImages = [
  "/compact-car/FocusEstate.png",
  "/compact-car/Mondeo.png",
  "/compact-car/MondeoAuto.png",
  "/compact-car/MondeoEstate.png",
  "/compact-car/RAV4Auto.png",
  "/compact-car/CClassAuto.png",
  "/compact-car/EClassAuto.png",
  "/compact-car/RangeRover.png",
] as const

const vanMainImages = [
  "/van/CaddyVan.png",
  "/van/FordTransitSWB.png",
  "/van/VWTransporterAutomatic.png",
  "/van/FordTransitMWB.png",
  "/van/FordTransitLWB.png",
  "/van/4MTRSprinter.png",
  "/van/FordLutonBoxTailLift.png",
  "/van/FordTransitDropsideVan.png",
  "/van/3.5TonneTipperTransit.png",
  "/van/RecoveryVanTruck.png",
  "/van/VWCampervan.png",
  "/van/12.5MCherryPicker3.5T.png",
] as const

const minibusMainImages = [
  "/minibus/VauxhallZafira5plus2.png",
  "/minibus/Galaxy7SeaterManual.png",
  "/minibus/Galaxy7SeaterAutomatic.png",
  "/minibus/9SeaterManual.png",
  "/minibus/9SeaterAutomatic.png",
  "/minibus/FordMinibus12Seater.png",
  "/minibus/FordMinibus15Seater.png",
  "/minibus/FordMinibusLITE 17Seater(no D1).png",
  "/minibus/FordMinibus17Seater.png",
] as const

const truckMainImages = [
  "/truck/FordLuton3.5TonTailBoxLiftTruck.png",
  "/truck/3.5TonneTipperTransitTruck.png",
  "/truck/3.5TonneRecoveryTruck.png",
  "/truck/7.5TonneBoxTruckWithTailLift.png",
  "/truck/7.5TonneCurtainSideTruck.png",
  "/truck/7.5TonneDropsideTruck.png",
  "/truck/7.5TonneTipperTruck.png",
  "/truck/7.5TonneSleeperTailLiftTruck.png",
  "/truck/18TonneBoxTruck.png",
  "/truck/18TonneCurtainsideTruck.png",
  "/truck/26TonneCurtainSideTruck.png",
  "/truck/44TonneSleeperTruck.png",
] as const

const compactCarMainNames = [
  "Fiat 500",
  "Hyundai i10 Auto",
  "VW Golf",
  "Focus Auto",
] as const

const compactCarAdditionalNames = [
  "Focus Estate",
  "Mondeo",
  "Mondeo Auto",
  "Mondeo Estate",
  "RAV4 Auto",
  "C Class Auto",
  "E Class Auto",
  "Range Rover",
] as const

const vanMainNames = [
  "Caddy Van",
  "Ford Transit SWB",
  "VW Transporter Automatic",
  "Ford Transit MWB",
  "Ford Transit LWB",
  "4 MTR Sprinter",
  "Ford Luton Box Tail Lift",
  "Ford Transit Dropside Van",
  "3.5 Tonne Tipper Transit",
  "Recovery Van",
  "VW Campervan",
  "12.5M Cherry Picker 3.5T",
] as const

const minibusMainNames = [
  "Vauxhall Zafira 5 + 2",
  "Galaxy 7 Seater Manual",
  "Galaxy 7 Seater Automatic",
  "9 Seater Manual",
  "9 Seater Automatic",
  "Ford Minibus 12 Seater",
  "Ford Minibus 15 Seater",
  "Ford Minibus LITE 17 Seater (no D1)",
  "Ford Minibus 17 Seater",
] as const

const truckMainNames = [
  "Ford Luton 3.5 ton Tail Box Lift Truck",
  "3.5 Tonne Tipper Transit Truck",
  "3.5 Tonne Recovery Truck",
  "7.5 Tonne Box Truck With Tail Lift",
  "7.5 Tonne Curtain Side Truck",
  "7.5 Tonne Dropside Truck",
  "7.5 Tonne Tipper Truck",
  "7.5 Tonne Sleeper Tail Lift Truck",
  "18 Tonne Box Truck",
  "18 Tonne Curtain Side Truck",
  "26 Tonne Curtain Side Truck",
  "44 Tonne Sleeper Truck",
] as const

export const siteConfig = {
  businessName: "Compact Car Hire Bolton",
  companyTagline: "Practical self-drive hire across Bolton and beyond",
  legalBusinessName: "Compact Car Hire Bolton",
  locationName: "Bolton",
  siteUrl: "https://compactcarhirebolton.co.uk",
  phone: "0204 634 8248",
  displayPhone: "0204 634 8248",
  ui: {
    navLocationsLabel: "Locations",
    navServicesLabel: "Services",
    navCallToBookLabel: "Call to Book",
    navCallShortLabel: "Call",
    bookNowLabel: "Call to Book",
    footerCopyrightLabel: "Â© 2026 Compact Car Hire Bolton. All rights reserved.",
  },
} as const

export function getMetadataBase() {
  const rawSiteUrl = siteConfig.siteUrl

  if (isTemplateToken(rawSiteUrl)) {
    return new URL("https://example.com")
  }

  return new URL(rawSiteUrl)
}

export function withCanonicalPath(
  metadata: ServicePageContent["metadata"],
  canonicalPath: string,
) {
  return {
    ...metadata,
    alternates: {
      canonical: canonicalPath,
    },
  }
}

export const serviceNavigation: Array<{
  label: string
  route: string
}> = [
  { label: "Compact Car Hire", route: "/" },
  { label: "Van Hire", route: "/van-hire" },
  { label: "Minibus Hire", route: "/minibus-hire" },
  { label: "Truck Hire", route: "/truck-hire" },
]

function createVehicles(
  names: readonly string[],
  images: readonly string[],
  vehicleText: VehicleText[],
): Vehicle[] {
  return names.map((name, index) => ({
    title: name,
    body: vehicleText[index].body,
    image: images[index],
    alt: vehicleText[index].alt,
  }))
}

function createContentSet(args: {
  tokens: ContentTokenSet
  mainVehicleNames: readonly string[]
  mainVehicleImages: readonly string[]
  inventorySectionId: string
  currentLocationName?: string
  mainVehicleAction?: boolean
  additionalVehicleNames?: readonly string[]
  additionalVehicleImages?: readonly string[]
}): ServicePageContent {
  const {
    tokens,
    mainVehicleNames,
    mainVehicleImages,
    inventorySectionId,
    currentLocationName,
    mainVehicleAction = false,
    additionalVehicleNames,
    additionalVehicleImages,
  } = args

  return {
    metadata: {
      title: tokens.metadata.title,
      description: tokens.metadata.description,
    },
    currentLocationName,
    heroImage: tokens.heroImage,
    heroAlt: tokens.heroAlt,
    heroTitle: tokens.heroTitle,
    heroDescription: tokens.heroDescription,
    heroSecondaryActionLabel: tokens.heroSecondaryActionLabel,
    inventorySectionId,
    mainServiceKicker: tokens.mainServiceKicker,
    mainServiceTitle: tokens.mainServiceTitle,
    mainServiceDescription: tokens.mainServiceDescription,
    mainVehicles: createVehicles(
      mainVehicleNames,
      mainVehicleImages,
      tokens.mainVehicles,
    ),
    mainVehicleAction,
    whyChooseKicker: tokens.whyChooseKicker,
    whyChooseTitle: tokens.whyChooseTitle,
    whyChooseDescription: tokens.whyChooseDescription,
    whyChooseItems: tokens.whyChooseItems,
    additionalServicesKicker: tokens.additionalServicesKicker,
    additionalServicesTitle: tokens.additionalServicesTitle,
    additionalServicesDescription: tokens.additionalServicesDescription,
    additionalVehicles:
      additionalVehicleNames &&
      additionalVehicleImages &&
      tokens.additionalVehicles
        ? createVehicles(
            additionalVehicleNames,
            additionalVehicleImages,
            tokens.additionalVehicles,
          )
        : undefined,
    featureCtaTitle: tokens.featureCtaTitle,
    featureCtaDescription: tokens.featureCtaDescription,
    serviceAreasKicker: tokens.serviceAreasKicker,
    serviceAreasTitle: tokens.serviceAreasTitle,
    serviceAreasDescription: tokens.serviceAreasDescription,
    localRelevanceKicker: tokens.localRelevanceKicker,
    localRelevanceTitle: tokens.localRelevanceTitle,
    localRelevanceDescription: tokens.localRelevanceDescription,
    localRelevanceBlocks: tokens.localRelevanceBlocks,
    bottomCtaTitle: tokens.bottomCtaTitle,
    bottomCtaDescription: tokens.bottomCtaDescription,
    faqKicker: tokens.faqKicker,
    faqTitle: tokens.faqTitle,
    faqs: tokens.faqs,
  }
}

const homepageTokens: ContentTokenSet = {
  metadata: {
    title: "Compact Car Hire Bolton | Self-Drive Vehicle Hire",
    description: "Compact car hire in Bolton for local driving, station runs, airport trips and everyday travel, with vans, minibuses and trucks also available.",
  },
  heroImage: "/images/homepage_image_1.jpeg",
  heroAlt: "Line of compact hire cars with wider vehicle fleet in a clean forecourt setting",
  heroTitle: "Compact car hire in Bolton made simple",
  heroDescription: "Compact car hire in Bolton for easy local driving, station runs, airport trips and everyday travel. We also offer vans, minibuses and trucks when you need more space or a different type of vehicle.",
  heroSecondaryActionLabel: "View vehicle options",
  mainServiceKicker: "Compact car hire",
  mainServiceTitle: "Self-drive compact cars for everyday travel in Bolton",
  mainServiceDescription: "Our core service is compact car hire for drivers who want something easy to manage, easy to park and comfortable enough for both local and regional travel. Small cars are a strong fit for everyday journeys around Bolton, from shopping trips and appointments to station runs, visiting family and covering temporary transport needs when your own car is off the road.\n\nWe focus on practical self-drive options rather than overcomplicated packages. That means a straightforward choice of compact vehicles including city-friendly models and slightly larger hatchbacks, with manual and automatic options available across the wider range. If your journey changes and you need extra room, we can also help with estates, larger cars and SUVs.\n\nBeyond compact cars, we support broader vehicle hire needs across Bolton with vans, minibuses and trucks. So whether you need a small runabout today or a larger vehicle for a different job next week, you can arrange it through the same business.",
  mainVehicles: [
    { body: "The Fiat 500 is ideal for quick local trips, easy parking and drivers who want a small car that feels simple to use around town.", alt: "Fiat 500 compact hire car for easy driving in Bolton" },
    { body: "A smart choice for convenient automatic driving, especially for short urban journeys, station pickups and everyday errands.", alt: "Hyundai i10 automatic compact hire car in Bolton" },
    { body: "The VW Golf gives you a little more cabin and boot space while still keeping the practical feel of a compact everyday hire car.", alt: "Volkswagen Golf hatchback available for hire in Bolton" },
    { body: "Useful for drivers who want the ease of an automatic with enough comfort for longer regional trips as well as local mileage.", alt: "Ford Focus automatic available for self-drive hire in Bolton" },
  ],
  whyChooseKicker: "Why choose us",
  whyChooseTitle: "A practical approach to self-drive hire in Bolton",
  whyChooseDescription: "Hiring a car should feel practical, not padded out with unnecessary sales talk. We focus on useful vehicles, clear communication and helping customers find a car that actually fits the journey they have planned in and around Bolton.",
  whyChooseItems: [
    { title: "Cars that suit real journeys", body: "Our compact car range is built around everyday usability, with options that are easy to drive in town and comfortable on longer runs." },
    { title: "Practical vehicle choices", body: "Need a small city car, an automatic or something with more boot space? We help match the vehicle to the trip rather than forcing one option." },
    { title: "Straightforward booking support", body: "We keep the process clear and useful, so you can quickly understand what is available and what best fits your plans." },
    { title: "More than just car hire", body: "If your plans move beyond a compact car, we can also arrange vans, minibuses and trucks through the same business." },
    { title: "Well suited to the area", body: "Bolton drivers often need vehicles for station access, motorway links and local errands, so our service is shaped around everyday local use." },
    { title: "Flexible around changing needs", body: "Short notice, changed plans and different trip types are common, and we aim to keep your options practical when that happens." },
  ],
  additionalServicesKicker: "Wider fleet options",
  additionalServicesTitle: "More vehicles when your journey needs extra room",
  additionalServicesDescription: "Need more space than a compact hatchback? Alongside our smaller cars, we also offer larger family cars, estates, premium automatics and SUVs, plus vans, minibuses and trucks for wider transport needs.",
  additionalVehicles: [
    { body: "The Focus Estate is a useful step up when you want car-like driving with a larger boot for luggage, equipment or shopping runs.", alt: "Ford Focus Estate available for practical luggage and load space in Bolton" },
    { body: "A solid choice for longer motorway travel, business appointments and day trips where extra comfort matters.", alt: "Ford Mondeo saloon for longer road journeys from Bolton" },
    { body: "The automatic Mondeo suits drivers who want an easier drive in traffic while keeping the space and comfort of a larger car.", alt: "Ford Mondeo automatic for comfortable self-drive hire in Bolton" },
    { body: "Ideal when passengers and luggage both need room, making it well suited to airport runs, family travel and longer stays away.", alt: "Ford Mondeo Estate with extended luggage room for Bolton hires" },
    { body: "A practical SUV option with a higher driving position, useful for mixed local and regional journeys with passengers and bags.", alt: "Toyota RAV4 automatic SUV for flexible travel around Bolton" },
    { body: "For business travel or a more refined drive, the C Class Auto gives you a smarter cabin and easy motorway comfort.", alt: "Mercedes C Class automatic for executive car hire in Bolton" },
    { body: "The E Class Auto works well for longer business mileage, client travel and occasions where a more spacious executive car is preferred.", alt: "Mercedes E Class automatic executive vehicle hire in Bolton" },
    { body: "When you want extra presence, comfort and cabin space, the Range Rover is suited to higher-end journeys and larger personal loads.", alt: "Range Rover SUV hire for premium travel in Bolton" },
  ],
  featureCtaTitle: "Looking for the right vehicle in Bolton?",
  featureCtaDescription: "Need a practical car for local driving, a weekend away or business travel? Get in touch and we will help you find the right vehicle quickly.",
  serviceAreasKicker: "Areas we cover",
  serviceAreasTitle: "Vehicle hire around Bolton and nearby areas",
  serviceAreasDescription: "We cover Bolton and surrounding towns with practical self-drive hire. If you are nearby and need a compact car, we can also help with larger cars, vans, minibuses and trucks.",
  localRelevanceKicker: "Driving in Bolton",
  localRelevanceTitle: "Why compact car hire works well in Bolton",
  localRelevanceDescription: "Bolton is the kind of place where compact car hire makes practical sense. Many journeys here involve a blend of town-centre roads, local residential routes and quick access onto larger connections such as the M6, M58 and A49. A smaller car helps keep those trips straightforward, whether you are visiting family, covering for your own vehicle, heading to a meeting or making a rail station pickup.\n\nCompact cars also suit the everyday reality of driving around busy local areas where parking space, turning room and stop-start traffic all matter. If you only need a clean, manageable vehicle that is easy to live with for a short trip or a few days of regular use, a compact model is usually the sensible choice.\n\nBecause Bolton sits between major routes and surrounding towns, it is also common for customers to need more than one type of vehicle depending on the job. That is why we keep the wider fleet available too, so if your plans move from local driving to moving goods, group travel or larger commercial work, you can stay with one practical self-drive hire provider.",
  localRelevanceBlocks: [
    { title: "A good fit for mixed Bolton driving", body: "Bolton works well for compact cars because so many everyday trips mix town driving with short stretches on faster roads. Whether you are heading between the centre, residential areas or nearby retail parks, a smaller car is easier to place, easier to park and less awkward in tighter spaces.\n\nThe M6, M58 and A49 all keep Bolton well connected, so a compact hatchback also makes sense if your day includes a mix of local stops and regional travel. You get straightforward motorway capability without stepping up to a larger vehicle than you actually need." },
    { title: "Useful around stations, retail areas and town routes", body: "If your journey starts near Bolton North Western or Bolton Wallgate, a compact car is often the most practical choice. It keeps things simple for collections, onward travel and quick turnarounds, especially if you are picking someone up with luggage but do not need a full-size car.\n\nThe same applies to everyday errands around Robin Park, the town centre and surrounding districts where parking spaces and traffic flow can make a smaller vehicle the easier option. For business users, it is a sensible choice when you need to stay mobile without overcomplicating the trip." },
    { title: "Choose the right size before you set off", body: "Not every journey suits the same vehicle, which is why we keep the wider fleet in view as well. A Fiat 500 or Hyundai i10 Auto can be ideal for compact urban use, while a Golf or Focus Auto gives you extra comfort if your route is longer or you expect more passenger use.\n\nIf plans change and you suddenly need luggage room, load space or passenger capacity, we can also point you towards estates, SUVs, vans, minibuses or trucks. That makes it easier to start with the right vehicle instead of trying to make the wrong one work." },
  ],
  bottomCtaTitle: "Book compact car hire in Bolton with straightforward support",
  bottomCtaDescription: "Tell us where you need to go and what kind of driving you have planned. We will help you choose the right compact car or a larger vehicle from our wider fleet.",
  faqKicker: "Common questions",
  faqTitle: "Compact car hire FAQs for Bolton",
  faqs: [
    { question: "Why choose compact car hire in Bolton?", answer: "A compact car is often the easiest option for Bolton driving if you want simple parking, lighter fuel use and comfortable travel on local roads and short motorway runs." },
    { question: "Can I arrange compact car hire in Bolton at short notice?", answer: "Yes, we can help with short-notice availability in Bolton when vehicles are ready to go. The best option is to call and we will talk through what is currently available." },
    { question: "Do you only offer small cars in Bolton?", answer: "Yes. If you need more room than a small hatchback, we also offer estate cars, larger saloons, SUVs, vans, minibuses and trucks." },
    { question: "What are compact hire cars in Bolton usually used for?", answer: "Many customers use compact cars in Bolton for station pickups, airport journeys, visiting family, temporary vehicle cover and everyday local travel." },
    { question: "What do I need to collect my hire car in Bolton?", answer: "Bring your driving licence and any booking details when collecting in Bolton. If anything else is needed for your hire, we will confirm it before you travel." },
    { question: "Are automatic cars available for hire in Bolton?", answer: "Yes, subject to availability. If you prefer an easier drive for stop-start traffic or a more relaxed motorway run, ask us about our automatic options in Bolton." },
  ],
}

const vanHireTokens: ContentTokenSet = {
  metadata: {
    title: "Van Hire Bolton | Practical Vans for Moves, Deliveries and Trade",
    description: "Van hire in Bolton for home moves, deliveries, trade work and specialist jobs. Choose from compact vans, larger Transits, Lutons and more.",
  },
  heroImage: "/images/van_hire_image_1.jpeg",
  heroAlt: "Modern rental van being loaded with boxes outside a house",
  heroTitle: "Van hire in Bolton for work, moves and deliveries",
  heroDescription: "Practical van hire in Bolton for moves, trade work, deliveries, collections and business use. Choose from compact vans, larger panel vans and specialist vehicles to suit the job.",
  heroSecondaryActionLabel: "View van options",
  mainServiceKicker: "Bolton van fleet",
  mainServiceTitle: "Van hire for moves, work and transport needs",
  mainServiceDescription: "Our van hire service in Bolton is built around real day to day jobs. Some customers need a compact van for quick collections, storage runs or tool transport. Others need a larger panel van for furniture, stock, equipment or a full moving day. We also offer specialist options for more specific work, including dropsides, tippers, recovery vehicles and a cherry picker.\n\nWhether you are moving home, covering trade jobs, handling site work or making business deliveries, the right van makes a big difference. A smaller van can be easier to park and manoeuvre in tighter areas, while longer wheelbase and box vans give you the extra carrying room needed for larger loads. If you are unsure what will suit your route or cargo, we can help you narrow it down to a practical choice.",
  mainVehicles: [
    { body: "A compact Caddy van that suits small deliveries, toolbox transport, parcel runs and quick local collections where easy parking is important.", alt: "Caddy van for compact cargo and local deliveries" },
    { body: "The short wheelbase Transit is a solid all rounder for furniture pickups, trade materials and everyday business loads without moving into a larger footprint.", alt: "Ford Transit SWB van for everyday transport jobs" },
    { body: "An automatic VW Transporter that works well for drivers who want a smooth, easy van for city driving, service visits and regular stop start journeys.", alt: "VW Transporter automatic van for easy urban driving" },
    { body: "A medium wheelbase Transit with extra load length for moving larger items, boxed stock, event kit or trade equipment across several stops.", alt: "Ford Transit MWB van for medium load transport" },
    { body: "The long wheelbase Transit is well suited to larger house moves, bulky furniture, workplace clearances and loads that need more internal space.", alt: "Ford Transit LWB van for bulky loads and moves" },
    { body: "A longer 4 metre Sprinter for extended loads, larger move days and commercial transport where extra room helps avoid multiple trips.", alt: "4 metre Sprinter van for long items and larger loads" },
    { body: "A Luton box van with tail lift that is ideal for removals, appliances, heavier furniture and jobs where easier loading makes a real difference.", alt: "Ford Luton box van with tail lift for removals and heavy items" },
    { body: "A dropside Transit for timber, landscaping materials, site equipment and other awkward loads that are easier to secure on an open body.", alt: "Ford Transit dropside van for open load carrying" },
    { body: "A 3.5 tonne tipper Transit for builders, landscapers and site teams moving aggregates, waste, tools and loose materials efficiently.", alt: "3.5 tonne tipper Transit for site and waste jobs" },
    { body: "A practical recovery van for vehicle transport, collection work and planned roadside moves where a dedicated carrying setup is needed.", alt: "Recovery van for vehicle transport and collection work" },
    { body: "A VW campervan for weekend escapes, touring breaks and flexible road trips when you want a practical self drive leisure vehicle.", alt: "VW campervan for touring and leisure travel" },
    { body: "A cherry picker van for access work such as maintenance, inspections, signage and property tasks where safe reach matters as much as mobility.", alt: "12.5 metre cherry picker van for elevated access work" },
  ],
  whyChooseKicker: "Why hire from us",
  whyChooseTitle: "A practical van hire service for real work",
  whyChooseDescription: "Van hire is rarely just about getting any vehicle. It is about getting one that actually works for the route, the load and the way the day is going to run. We keep that in mind when helping customers choose between compact vans, larger panel vans and specialist options in Bolton.",
  whyChooseItems: [
    { title: "Useful fleet choices", body: "From compact vans to larger carrying options, the fleet covers everyday transport jobs as well as heavier duty tasks." },
    { title: "Job led advice", body: "Whether you are moving furniture, carrying tools or collecting stock, we focus on what the van needs to do in practice." },
    { title: "Specialist options available", body: "Automatic vans, Lutons, tippers, dropsides and recovery vehicles help when a standard panel van is not the right fit." },
    { title: "Practical route matching", body: "A van that suits your streets, loading points and route plan can save time and hassle on the day." },
    { title: "Good regional access", body: "Bolton is well placed for local work and wider travel across the North West, making van hire useful for both short and longer runs." },
    { title: "Straightforward booking support", body: "We keep the process straightforward so you can get on with the move, delivery or job without overcomplicating it." },
  ],
  featureCtaTitle: "Need van hire in Bolton?",
  featureCtaDescription: "Need a van for moving, deliveries or site work in Bolton? Speak to our team and we will help you choose a practical vehicle without the guesswork.",
  serviceAreasKicker: "Areas we cover",
  serviceAreasTitle: "Van hire in Bolton and nearby areas",
  serviceAreasDescription: "We support van hire from Bolton across surrounding towns and key route corridors, making it easier to cover local jobs, regional deliveries and one off transport tasks.",
  localRelevanceKicker: "Local van hire guidance",
  localRelevanceTitle: "Van hire that fits the way Bolton journeys actually work",
  localRelevanceDescription: "Van hire in Bolton suits a wide range of practical jobs, from moving between neighbourhoods to making collections across the wider North West. The town is well placed for local runs and regional travel alike, with strong links through the M6, M58 and A49. That makes it a useful base whether you are collecting furniture, transporting tools, delivering stock or handling a one off house move.\n\nThe key is matching the van to the work. Smaller vans are easier in tighter streets and busier built up areas, while longer and taller vans make better use of time when the load is bulky or awkward. For more specialist tasks, vehicles such as Lutons, dropsides, tippers and recovery vans can make the whole day more straightforward.\n\nIf you know the route, the type of load and how many stops are involved, choosing well becomes much easier. That is especially true around Bolton, where one hire might include residential streets, retail collections, motorway sections and site access all in the same journey.",
  localRelevanceBlocks: [
    { title: "Planning routes around Bolton and beyond", body: "Bolton works well for van hire because it sits between major routes rather than being cut off from them. If you are moving between Bolton town centre, Standish, Ashton-in-Makerfield or Hindley, a van gives you the flexibility to load once and keep the day moving. For wider trips, the M6, M58 and M61 links help with access across Lancashire, Greater Salford and Merseyside.\n\nIf your route includes industrial estates, retail parks or storage sites, it is worth thinking about turning space and loading access before you travel. A smaller van can be much easier around tighter streets and smaller forecourts, while a longer wheelbase van makes more sense when the load is bulky and the route is more straightforward." },
    { title: "Choosing a van for home moves and collections", body: "For domestic jobs, access often matters as much as load volume. Terraced streets, shared parking bays and short loading windows can all affect which van is easiest to live with for the day. Areas closer to the town centre or around station approaches may suit a compact van better, especially if you are making repeated stops or collecting from mixed residential and retail locations.\n\nOn larger move days, it helps to break the journey into stages before collection. Measure the biggest items, think about door widths, and consider whether a tail lift or lower loading height would make the job smoother. A Luton or bigger Transit can save repeat trips, but only if the pickup and drop off points allow for easier parking and unloading." },
    { title: "Vans for trade work, stock and site tasks", body: "Trade users often need vans that work across a full day rather than just getting from one point to another. If you are carrying tools, materials or stock between jobs in Bolton, Bryn, Ince-in-Makerfield or nearby business parks, choosing the right van can make loading faster and keep the working day more organised. Dropsides and tippers are especially useful where awkward materials or site waste are part of the plan.\n\nFor motorway runs or timed delivery work, it is smart to consider where delays are most likely. Junctions feeding the M6 and M61 can slow down at busy times, and town centre access changes the pace of short local jobs. A sensible van choice keeps the route manageable, the load secure and the day easier to schedule." },
  ],
  bottomCtaTitle: "Book the right van for the job",
  bottomCtaDescription: "Tell us what you need to carry, where you are heading and how long you need the van for. We will help you choose a practical option for the job.",
  faqKicker: "Van hire FAQs",
  faqTitle: "Common questions about van hire in Bolton",
  faqs: [
    { question: "What size van should I hire?", answer: "A compact van suits small loads, tools and boxed items, while larger vans are better for furniture, pallets or longer materials. If you are unsure, describe the load and we can point you towards a sensible size." },
    { question: "Can I hire a van for moving house or collecting furniture?", answer: "Yes, many customers use van hire for house moves, flat moves, furniture collection, event kit, trade work and business transport. The best van depends on access, load shape and how many stops you need to make." },
    { question: "Do you offer automatic vans?", answer: "Automatic options are available in selected vans, including practical choices for drivers who prefer easier stop start driving around town or on motorway runs." },
    { question: "Can I use the van for longer distance travel?", answer: "Yes, vans are commonly used for local work in Bolton as well as regional trips across Greater Salford, Lancashire, Merseyside and beyond. Let us know your route so we can help match the van to the journey." },
    { question: "Do you have specialist vans as well as standard panel vans?", answer: "Recovery vans are designed for vehicle transport, while tippers, dropsides and Lutons suit very different jobs. If you need specialist capability, tell us the task and we will guide you to the right vehicle type." },
    { question: "What should I check before collecting a hire van?", answer: "Bring your licence and the usual hire details, and make sure you are comfortable with the vehicle size before setting off. It also helps to plan parking, loading space and any low clearance points on your route." },
  ],
}

const minibusHireTokens: ContentTokenSet = {
  metadata: {
    title: "Minibus Hire Bolton | Group Travel Vehicle Hire",
    description: "Minibus hire in Bolton for airport transfers, family trips, events and group travel. Choose practical passenger vehicles for local and regional journeys.",
  },
  heroImage: "/images/minibus_hire_image_1.jpeg",
  heroAlt: "Modern minibus loading passengers and luggage near an airport pickup area",
  heroTitle: "Minibus Hire Bolton",
  heroDescription: "Practical minibus hire in Bolton for family trips, airport journeys, events, teams and group outings. Choose from flexible people carriers and larger minibuses.",
  heroSecondaryActionLabel: "View minibus options",
  mainServiceKicker: "Group vehicle hire",
  mainServiceTitle: "Bolton minibus hire for shared journeys of all kinds",
  mainServiceDescription: "Our Bolton minibus hire service is built around real group travel needs. That might mean a compact people carrier for family outings, a larger vehicle for a club trip, or a full minibus for airport transfers, weddings or event travel. The focus is on giving you enough seats, sensible luggage space and a vehicle that feels suited to the road plan ahead.\n\nWe support journeys that stay local as well as trips heading further afield across the North West and beyond. If you are organising transport for relatives, colleagues, sports teams or guests, we help you sort the practical side early so the travel day is easier to manage.",
  mainVehicles: [
    { body: "The Vauxhall Zafira 5 plus 2 is a flexible choice for families and small groups who need extra seats without stepping up to a full minibus.", alt: "Vauxhall Zafira 5 plus 2 people carrier for hire in Bolton" },
    { body: "The Galaxy 7 Seater Manual is well suited to airport runs, weekend breaks and group travel where passenger comfort matters.", alt: "Ford Galaxy 7 seater manual hire vehicle in Bolton" },
    { body: "The Galaxy 7 Seater Automatic offers the same roomy layout with easier driving for longer trips and mixed urban motorway routes.", alt: "Ford Galaxy 7 seater automatic people carrier for Bolton hire" },
    { body: "The 9 Seater Manual is a practical option for larger families, work outings and sports travel when one vehicle is easier than multiple cars.", alt: "9 seater manual minibus for group travel in Bolton" },
    { body: "The 9 Seater Automatic is a useful choice for shared travel where automatic driving and easy passenger loading are both important.", alt: "9 seater automatic minibus hire in Bolton" },
    { body: "The Ford 12 Seater works well for clubs, school outings, guest transport and group day trips with straightforward boarding and seating.", alt: "Ford 12 seater minibus available for hire in Bolton" },
    { body: "The Ford 15 Seater gives growing groups more room, making it a strong fit for event travel, team transport and organised outings.", alt: "Ford 15 seater minibus for larger groups in Bolton" },
    { body: "The Ford Minibus LITE 17 Seater is designed for larger groups needing extra capacity, with a layout aimed at drivers without D1 entitlement.", alt: "Ford Minibus Lite 17 seater no D1 hire vehicle in Bolton" },
    { body: "The Ford 17 Seater is a full-capacity option for major group movements where keeping everyone together is the priority.", alt: "Ford 17 seater minibus hire for group transport in Bolton" },
  ],
  whyChooseKicker: "Why choose us",
  whyChooseTitle: "Minibus hire planned around real journeys",
  whyChooseDescription: "Group travel can become awkward quickly if the vehicle is too small, the luggage space is overlooked or the route has not been thought through. We keep the process practical, helping customers in Bolton choose a passenger vehicle that genuinely fits the journey rather than simply filling seats.",
  whyChooseItems: [
    { title: "Options for different group sizes", body: "From smaller people carriers to larger minibuses, we help you match the vehicle to the number of passengers and the type of trip." },
    { title: "Luggage considered properly", body: "We consider bags, prams, sports equipment and travel extras so the vehicle works in practice, not just on seat count alone." },
    { title: "Built around the trip", body: "Airport runs, weddings, fixtures and family events all have different timing needs. We help you choose with the journey purpose in mind." },
    { title: "Straight advice on licence needs", body: "If a larger minibus needs a specific licence category, we explain that clearly and point you toward suitable alternatives where available." },
    { title: "Ready for short and longer routes", body: "Our vehicles are suited to local Bolton travel as well as longer motorway journeys across the region." },
    { title: "Supported by a broader fleet", body: "If your plans change and you need a van, compact car or truck instead, we can help through the wider hire fleet." },
  ],
  featureCtaTitle: "Travelling together starts with the right vehicle",
  featureCtaDescription: "Need to move a group without splitting into several cars? Speak to us about practical minibus hire options for Bolton and surrounding routes.",
  serviceAreasKicker: "Areas we cover",
  serviceAreasTitle: "Serving Bolton and surrounding areas for minibus hire",
  serviceAreasDescription: "We provide minibus hire from Bolton across nearby towns and onward routes, helping groups travel together for local pickups, regional trips and airport journeys.",
  localRelevanceKicker: "Local travel guidance",
  localRelevanceTitle: "Minibus hire that suits how groups travel from Bolton",
  localRelevanceDescription: "Minibus hire in Bolton works best when the vehicle matches the real shape of the journey. Some trips are short local runs with a few passengers and light bags. Others involve airport travel, event schedules, relatives joining from different pickup points or teams carrying kit. We help you choose a minibus that fits the route, the group and the practical demands of the day.\n\nBolton is well placed for regional travel, but that also means journeys often join busy main roads quickly. Whether you are setting off toward the M6, linking across the M61, or heading west on the M58, the right passenger vehicle makes a big difference to comfort, loading and overall timing. A properly matched minibus keeps the trip simpler from the first pickup to the final stop.",
  localRelevanceBlocks: [
    { title: "Getting groups moving around Bolton", body: "Bolton sits in a useful position for group travel because routes split easily towards Salford, Liverpool, Horwich and the wider North West. If your journey starts near the town centre, it helps to plan around the A49 and A577 corridors, especially when schools, stations and shopping traffic all overlap. A minibus is often easier to manage than several separate cars when your pickup points are spread across different parts of town.\n\nFor airport runs or event travel, keeping everyone together also helps with timing. Rather than coordinating arrivals from multiple vehicles, one minibus keeps the journey simpler and makes luggage planning easier from the start." },
    { title: "Choosing the right size for the journey", body: "If you are heading out from Bolton North Western or Bolton Wallgate areas, or collecting people from nearby neighbourhoods before joining the motorway network, a smaller people carrier can be the neatest option for mixed age groups and light luggage. It is easier to place in tighter streets and simpler for drivers more used to standard cars.\n\nFor weddings, sports teams, school events or longer day trips, a larger minibus usually makes more sense. It gives you better passenger capacity and avoids the stop-start feel that comes with trying to convoy several vehicles across the M6 or M58 corridors." },
    { title: "Better planning for shared travel", body: "The most useful group travel plans are the ones that deal with real details early. Think about where everyone is boarding, whether you need room for hold luggage, and how much time you want between pickups. Journeys toward Salford Airport, matchdays, race meetings or family events all run more smoothly when the passenger count and luggage needs are clear before collection.\n\nIf your route involves schools, hotels, venues or sports grounds, tell us that up front. We can help you narrow the choice so the minibus suits both the trip and the driver, rather than just the headcount on paper." },
  ],
  bottomCtaTitle: "Plan your Bolton minibus hire with confidence",
  bottomCtaDescription: "Tell us where you are travelling, how many people are coming and what kind of trip you are planning. We will help you find the right minibus hire for Bolton.",
  faqKicker: "Minibus hire questions",
  faqTitle: "Bolton minibus hire FAQs",
  faqs: [
    { question: "What is Bolton minibus hire usually used for?", answer: "Yes, we can help with minibus hire in Bolton for airport runs, family travel, sporting fixtures, wedding guests and other shared journeys." },
    { question: "How do I choose the right minibus for my trip?", answer: "Choose based on passenger numbers, luggage and journey length. A smaller people carrier may suit a family trip, while larger groups are better served by a full minibus." },
    { question: "Can I hire a minibus without D1 on my licence?", answer: "Some larger minibuses require the right entitlement, while others are suitable for drivers without D1. Ask before booking and we will explain the options clearly." },
    { question: "Is there enough luggage space in a minibus?", answer: "It can do, depending on the vehicle and the amount of luggage. Let us know if you are travelling with cases, prams, sports kit or event equipment." },
    { question: "Do you provide minibuses for clubs and group outings in Bolton?", answer: "Yes, Bolton minibus hire is often a practical choice for school, club and team travel when everyone needs to arrive together." },
    { question: "How do I arrange minibus hire in Bolton?", answer: "Call us with your travel dates, group size and destination. We will talk you through the available minibus options and help you choose the best fit." },
  ],
}

const truckHireTokens: ContentTokenSet = {
  metadata: {
    title: "Truck Hire Bolton | Commercial Truck Rental",
    description: "Truck hire in Bolton for removals, deliveries, site work and commercial transport. Box, curtain side, dropside, tipper and tail lift truck options available.",
  },
  heroImage: "/images/truck_hire_image_1.jpeg",
  heroAlt: "Rigid hire truck parked at an industrial unit during a delivery job",
  heroTitle: "Truck Hire Bolton",
  heroDescription: "Truck hire in Bolton for removals, site work, larger deliveries and commercial transport. Choose from box trucks, curtain siders, tippers, recovery trucks and more.",
  heroSecondaryActionLabel: "View truck options",
  mainServiceKicker: "Commercial vehicle hire",
  mainServiceTitle: "Truck hire in Bolton for serious carrying work",
  mainServiceDescription: "Our truck hire service in Bolton is built for heavier transport tasks where a van is no longer enough. That includes removals support, site deliveries, stock movement, trade transport, recovery work and larger commercial loads. We offer a range of vehicle types so the choice is based on what the job actually needs rather than simply moving up to the biggest option.\n\nWhether you need a tail lift for boxed goods, a curtain side for easier loading access, a dropside for awkward materials or a tipper for site use, we help you make a practical choice. The aim is simple: a truck that suits the route, the payload and the working conditions on the day.",
  mainVehicles: [
    { body: "The Ford Luton 3.5 ton Tail Box Lift Truck is ideal for house moves, bulky goods and appliance transport where rear lift support makes loading easier.", alt: "Ford Luton 3.5 ton tail box lift truck for hire in Bolton" },
    { body: "The 3.5 Tonne Tipper Transit Truck is a practical choice for site clearance, loose materials, landscaping work and building jobs.", alt: "3.5 tonne tipper transit truck for site work in Bolton" },
    { body: "The 3.5 Tonne Recovery Truck suits vehicle transport and recovery tasks where secure loading and stable carriage are essential.", alt: "3.5 tonne recovery truck available in Bolton" },
    { body: "The 7.5 Tonne Box Truck With Tail Lift works well for larger deliveries, stock movement and removals support with easier rear loading.", alt: "7.5 tonne box truck with tail lift for Bolton deliveries" },
    { body: "The 7.5 Tonne Curtain Side Truck is well suited to pallet work and trade deliveries where side access speeds up loading and unloading.", alt: "7.5 tonne curtain side truck for loading access in Bolton" },
    { body: "The 7.5 Tonne Dropside Truck is useful for building materials, site equipment and awkward loads that benefit from open-sided access.", alt: "7.5 tonne dropside truck for materials transport in Bolton" },
    { body: "The 7.5 Tonne Tipper Truck is built for more demanding site work, waste movement and bulk material jobs that need higher carrying capacity.", alt: "7.5 tonne tipper truck for heavy site tasks in Bolton" },
    { body: "The 7.5 Tonne Sleeper Tail Lift Truck is suited to longer working runs where loading support and added driver practicality are both useful.", alt: "7.5 tonne sleeper tail lift truck for regional runs from Bolton" },
    { body: "The 18 Tonne Box Truck is designed for larger enclosed loads, distribution work and substantial stock movement.", alt: "18 tonne box truck for major commercial transport in Bolton" },
    { body: "The 18 Tonne Curtain Side Truck is a strong option for pallet networks, larger deliveries and trade loads needing side access.", alt: "18 tonne curtain side truck for freight movement in Bolton" },
    { body: "The 26 Tonne Curtain Side Truck suits higher-volume transport where larger payload capacity and side loading are both important.", alt: "26 tonne curtain side truck for major transport jobs in Bolton" },
    { body: "The 44 Tonne Sleeper Truck is designed for substantial haulage tasks where long-distance work and serious carrying capability are required.", alt: "44 tonne sleeper truck for long haul work from Bolton" },
  ],
  whyChooseKicker: "Why choose us",
  whyChooseTitle: "Truck hire guided by the job, not guesswork",
  whyChooseDescription: "Truck hire only works well when the details are right. Load shape, weight, unloading method, route access and site conditions all matter. We help customers in Bolton think through those practical points so the vehicle suits the task properly and the job can move forward with fewer problems on the day.",
  whyChooseItems: [
    { title: "Useful truck choice", body: "We offer a broad truck range so you can choose based on access, load type and unloading needs rather than guessing what might work." },
    { title: "Body styles for specific tasks", body: "Box, curtain side, dropside, tipper and tail lift options are available for very different kinds of work." },
    { title: "Access and route awareness", body: "We help you think through route restrictions, yard access and collection points before the vehicle is booked." },
    { title: "Fit for the load", body: "Loads differ in shape, weight and handling method, so we focus on matching the truck to the practical demands of the job." },
    { title: "Local and regional capability", body: "From local Bolton work to wider regional transport, our truck hire service supports jobs that need dependable carrying capacity." },
    { title: "Support beyond trucks", body: "If the task changes and a van or another vehicle type is more suitable, we can help through the wider self-drive fleet." },
  ],
  featureCtaTitle: "Talk through the load before you book",
  featureCtaDescription: "If the job needs more than a van, we can help you choose a truck that matches the load, access conditions and route plan across Bolton and beyond.",
  serviceAreasKicker: "Areas we serve",
  serviceAreasTitle: "Truck hire coverage around Bolton and nearby areas",
  serviceAreasDescription: "We support truck hire from Bolton into surrounding towns, industrial areas and regional routes, helping with transport jobs that need more capacity and the right body type.",
  localRelevanceKicker: "Operational guidance",
  localRelevanceTitle: "Truck hire that fits the route, the load and the job in Bolton",
  localRelevanceDescription: "Truck hire in Bolton needs a practical approach because the jobs vary so widely. Some customers need a straightforward box vehicle for removals support or stock movement. Others need a curtain side for easier loading, a dropside for awkward materials, or a tipper for site work. The right truck depends on what you are moving, how it will be loaded and where it needs to go.\n\nBolton also sits on useful regional routes, which makes it a strong base for commercial transport. Whether the journey stays local or heads out along the M6, M58 or A49 corridors, choosing the correct size and body style helps avoid access problems and makes loading more efficient. We focus on fit for purpose rather than one-size-fits-all truck hire.",
  localRelevanceBlocks: [
    { title: "Routing trucks around Bolton", body: "Bolton is well connected for truck movements, but route choice matters. Jobs heading toward the M6, M58 or A580 can be straightforward with the right vehicle, while urban collections nearer the town centre may need tighter planning around access, loading bays and turning space. The more accurately the route is understood at the start, the easier it is to match the truck to the job.\n\nThat is especially important for deliveries into mixed environments where industrial estates, retail areas and residential roads all sit close together. A truck that is ideal for open motorway work may be less suitable if the delivery point has restricted yard space or awkward unloading conditions." },
    { title: "Matching the body type to the task", body: "Truck choice is not just about carrying more. A Luton with tail lift may suit furniture, boxed stock or appliances, while a curtain side can be the better option for side loading on trade jobs. Tippers and dropsides are often more practical for site work, loose materials and jobs with frequent loading and unloading points.\n\nIf you are collecting from one of Bolton's industrial areas or delivering into active commercial premises, think about the handling method before the journey starts. Forklift access, handball unloading, pallet movement and loading height all affect which vehicle body works best." },
    { title: "Planning for loading and access", body: "The busiest truck jobs are usually the ones with the least room for delay. If your route involves timed collections, warehouse drop-offs or site access windows, it helps to confirm dimensions, vehicle type and unloading requirements before the day itself. That reduces wasted trips and avoids turning up with a truck that does not fit the task.\n\nFor work around Bolton and onward regional runs, a clear plan saves time. Tell us whether the load is palletised, long, loose, fragile or heavy, and whether access is open yard, roadside or restricted entrance. We can then help steer you toward a truck that makes the job run more smoothly." },
  ],
  bottomCtaTitle: "Need the right truck for a serious load?",
  bottomCtaDescription: "Tell us about the load, the route and the type of access involved. We will help you arrange truck hire in Bolton that suits the job properly.",
  faqKicker: "Truck hire questions",
  faqTitle: "Bolton truck hire FAQs",
  faqs: [
    { question: "How do I choose the right truck for a job in Bolton?", answer: "Start with the load type, access at both ends and whether you need a tail lift, curtain side, dropside or tipper body. We can help narrow it down." },
    { question: "Do I need a special licence for truck hire?", answer: "Some trucks require the correct licence entitlement, depending on the vehicle class. Ask us before booking and we will explain what applies to the truck you need." },
    { question: "When is a tail lift truck the best option?", answer: "A tail lift is useful when loading pallets, bulky goods, appliances or heavier items where ground-level loading is not practical." },
    { question: "Can I hire a truck in Bolton for business use?", answer: "Yes, truck hire in Bolton is often used for site work, deliveries, removals support and commercial transport across local and regional routes." },
    { question: "Are all loads suitable for every truck type?", answer: "That depends on the vehicle body and your load. Curtain side, box, tipper and dropside trucks all suit different kinds of work, so it is best to check in advance." },
    { question: "What information should I have ready when arranging truck hire?", answer: "Have the collection point, delivery point, load details and any site restrictions ready. That helps us guide you to the most suitable truck more quickly." },
  ],
}

const location1Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Bury | Self-Drive Vehicle Hire", description: "Compact car hire in Bury for local driving, station pickups and regional travel, with larger cars, vans, minibuses and trucks also available." },
  heroImage: "/images/nearby_location_image_1.jpeg",
  heroAlt: "Compact hire car near a town-centre route in Bury",
  heroTitle: "Compact car hire in Bury",
  heroDescription: "Compact car hire in Bury for town driving, commuting, station pickups and straightforward regional travel, with larger vehicle options available when needed.",
  heroSecondaryActionLabel: "Check Bury vehicles",
  mainServiceKicker: "Bury compact hire",
  mainServiceTitle: "Self-drive compact cars for Bury travel",
  mainServiceDescription: "We provide compact car hire in Bury for customers who want a practical self-drive vehicle that suits everyday travel. Whether you need a car for local errands, a temporary replacement, a station pickup or a business journey, a compact model gives you the right balance of convenience, comfort and manageable size.\n\nSmaller cars are often the easiest option for Bury roads because they are simpler to park and less cumbersome in busier areas. They also work well for short motorway stretches and regional routes, so you are not limited to town driving alone. If you prefer an automatic or want slightly more space, we can help guide you through the best available options.\n\nWe also offer a wider fleet beyond compact cars. So while the Bury page is led by small car hire, customers can still move into estates, larger cars, SUVs, vans, minibuses or trucks when the journey calls for it.",
  mainVehicles: [
    { body: "The Fiat 500 is a strong option for Bury town journeys where easy parking and simple local driving are the main priority.", alt: "Fiat 500 compact hire car for Bury town driving" },
    { body: "A useful automatic for Bury drivers who want a small, stress-free car for local roads, errands and short regional trips.", alt: "Hyundai i10 automatic compact hire car in Bury" },
    { body: "The Golf gives Bury customers a bit more room and motorway comfort while keeping the practical feel of a compact hatchback.", alt: "Volkswagen Golf hatchback for hire in Bury" },
    { body: "Ideal when you want automatic convenience in Bury with enough space and comfort for longer drives as well as daily use.", alt: "Ford Focus automatic self-drive hire in Bury" },
  ],
  whyChooseKicker: "Why choose us in Bury",
  whyChooseTitle: "Straightforward compact car hire for Bury drivers",
  whyChooseDescription: "Bury customers often want a hire car that feels easy to arrange and sensible to use. We focus on practical compact vehicles, clear advice and a wider fleet that can support you if the job turns into something bigger than a small car trip.",
  whyChooseItems: [
    { title: "Built for everyday Bury trips", body: "Our Bury compact car options suit everyday use, from local appointments and family visits to station runs and regional mileage." },
    { title: "Easy to manage locally", body: "Smaller cars make life easier in busier parts of Bury where parking, turning and stop-start traffic can all slow bigger vehicles down." },
    { title: "Clear, helpful guidance", body: "We keep the hire process clear so Bury customers can quickly understand which vehicle best fits the journey." },
    { title: "A fleet that can adapt", body: "If your plans change in Bury, we can help you move from a compact car to something with more room or a different layout." },
    { title: "Automatic choices available", body: "Automatic options are available within the wider range for Bury drivers who want a simpler, more relaxed drive." },
    { title: "Wider vehicle hire support", body: "Beyond compact cars, Bury customers can also arrange vans, minibuses and trucks through the same self-drive provider." },
  ],
  additionalServicesKicker: "More vehicle hire options in Bury",
  additionalServicesTitle: "Extra vehicle options for Bury journeys",
  additionalServicesDescription: "If you need more room than a compact hatchback in Bury, we also offer larger cars, estates, SUVs and premium automatics, along with vans, minibuses and trucks for wider transport needs.",
  additionalVehicles: [
    { body: "A practical choice in Bury when you want everyday car handling with extra space for cases, work gear or shopping.", alt: "Ford Focus Estate for added luggage space on Bury hires" },
    { body: "Well suited to longer Bury journeys where comfort, cabin room and motorway ease matter more than a smaller footprint.", alt: "Ford Mondeo saloon for comfortable road travel from Bury" },
    { body: "Useful for Bury drivers who want a larger automatic car for business travel, family use or longer regional mileage.", alt: "Ford Mondeo automatic available for hire in Bury" },
    { body: "A good fit for Bury airport runs, family trips and any journey where passengers and luggage both need proper space.", alt: "Ford Mondeo Estate with extra boot space for Bury travel" },
    { body: "The RAV4 Auto gives Bury drivers a higher seating position and useful cabin space for mixed town and motorway use.", alt: "Toyota RAV4 automatic SUV hire for flexible Bury driving" },
    { body: "A refined option for Bury business travel, client meetings and occasions where a more premium drive is preferred.", alt: "Mercedes C Class automatic for executive hire in Bury" },
    { body: "The E Class Auto suits longer Bury journeys where extra comfort and a more spacious executive interior are helpful.", alt: "Mercedes E Class automatic executive car hire in Bury" },
    { body: "For Bury trips that call for more presence, comfort and room, the Range Rover offers a strong premium SUV option.", alt: "Range Rover SUV hire for premium travel in Bury" },
  ],
  featureCtaTitle: "Need a practical hire car in Bury?",
  featureCtaDescription: "Need a compact hire car in Bury without overcomplicating the process? Contact us and we will help you check the available options.",
  serviceAreasKicker: "Coverage around Bury",
  serviceAreasTitle: "Vehicle hire serving Bury and nearby areas",
  serviceAreasDescription: "We cover Bury and surrounding routes with practical self-drive hire, helping customers who need compact cars as well as larger vehicle options.",
  localRelevanceKicker: "Driving in Bury",
  localRelevanceTitle: "Why compact car hire works well in Bury",
  localRelevanceDescription: "Bury works well for compact car hire because so many everyday journeys mix town-centre access with quick links out towards surrounding routes. A smaller car is practical for getting around the busier parts of Bury, handling station pickups, retail trips and work travel without the bulk of a larger vehicle. It also suits drivers heading between residential areas, business parks and local appointments where easy manoeuvrability matters.\n\nFrom Bury town centre, routes such as the A666 St Peter's Way and connections towards the M61 make it straightforward to head wider across the area. For drivers collecting a car for commuting, visiting family, or short regional travel, a compact model keeps things simple in traffic, easier in car parks and comfortable for longer stretches when needed. Bury customers also regularly ask about vans, minibuses and trucks, so the wider fleet is there when the journey calls for more space or carrying capacity.",
  localRelevanceBlocks: [
    { title: "A sensible choice for Bury road patterns", body: "Bury suits compact cars particularly well because many journeys move between town-centre traffic, local neighbourhoods and quick access routes out towards surrounding roads. A smaller hatchback makes everyday driving simpler when you are dealing with tight parking, short errands or back-to-back appointments.\n\nRoutes such as the A666 and A58 keep traffic flowing in and out of Bury, but once you are near busier central areas, having a car that is easy to position becomes far more useful than having extra size you do not need. For many customers, compact simply feels more practical." },
    { title: "Helpful around central Bury and station trips", body: "Bury town centre, retail areas and station access points can all reward a smaller vehicle. If your day involves collecting someone, heading into meetings or fitting in several local stops, compact car hire keeps the trip straightforward without making parking or manoeuvring harder than it needs to be.\n\nThat is especially helpful if you are travelling around the station area or heading towards places where quick access matters more than load space. A car like the Fiat 500 or Hyundai i10 Auto is often all you need for those kinds of Bury journeys." },
    { title: "Think ahead before choosing your Bury vehicle", body: "Not every Bury journey is strictly local, so it helps to match the vehicle to the full day rather than only the first stop. A compact car is ideal for routine travel, but if you expect more luggage, more passengers or a longer motorway run, a Golf or Focus Auto may be the better fit.\n\nWe also keep larger vehicles available for customers in Bury who realise a small car is not enough after all. Estates, SUVs, vans, minibuses and trucks are all part of the wider fleet, so changing plans does not have to mean starting the search again elsewhere." },
  ],
  bottomCtaTitle: "Arrange compact car hire in Bury",
  bottomCtaDescription: "If you need a small hire car in Bury for local driving, station access or a longer run, get in touch and we will help you choose the right vehicle.",
  faqKicker: "Bury hire questions",
  faqTitle: "FAQs about compact car hire in Bury",
  faqs: [
    { question: "Is a compact car a good choice for driving in Bury?", answer: "Compact car hire in Bury suits busy local roads, town-centre parking and everyday trips where a smaller vehicle is easier to manage." },
    { question: "What do people usually hire compact cars for in Bury?", answer: "Yes, Bury customers often use compact hire cars for station collections, shopping trips, family visits, temporary cover and regional travel." },
    { question: "Can I get an automatic hire car in Bury?", answer: "Yes, subject to availability. If you want an easier drive in Bury traffic or on longer runs, ask about our automatic options." },
    { question: "Do you offer larger vehicles alongside compact car hire in Bury?", answer: "If you need more space than a compact car in Bury, we can also help with estates, larger saloons, SUVs, vans, minibuses and trucks." },
    { question: "Can I arrange last-minute car hire in Bury?", answer: "Yes, we can often help with short-notice compact car hire in Bury when a suitable vehicle is available. Calling ahead is the best way to check." },
    { question: "What do I need to collect my hire car in Bury?", answer: "For Bury hire, bring your driving licence and your booking details. If anything else is needed, we will confirm it before collection." },
  ],
}

const location2Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Wigan | Self-Drive Vehicle Hire", description: "Compact car hire in Wigan for local trips, station travel, business use, and everyday driving. Vans, minibuses, and trucks also available." },
  heroImage: "/images/nearby_location_image_2.jpeg",
  heroAlt: "Compact hire car on a suburban road in Wigan",
  heroTitle: "Compact car hire in Wigan",
  heroDescription: "Compact car hire in Wigan for local trips, station runs, business travel, and everyday journeys. Easy self-drive options with larger vehicles available too.",
  heroSecondaryActionLabel: "View Wigan vehicles",
  mainServiceKicker: "Wigan self-drive hire",
  mainServiceTitle: "Straightforward compact car hire for Wigan journeys",
  mainServiceDescription: "Our compact car hire service in Wigan is built for practical day to day travel. Whether you need a small car for local appointments, a reliable vehicle while your own is off the road, or something easy to drive for business and personal use, we can help you choose a suitable option.\n\nCompact cars are a natural fit for Wigan because they are easy to park, comfortable on short and medium journeys, and well suited to town traffic as well as wider North West routes. We also offer automatic options and a broader self-drive range including vans, minibuses, and trucks, so you can keep everything with one provider if your plans change.",
  mainVehicles: [
    { body: "The Fiat 500 is ideal for Wigan drivers who want a compact, easy to park car for local errands, short commutes, and simple everyday travel.", alt: "Fiat 500 hire car for compact driving in Wigan" },
    { body: "A Hyundai i10 Auto makes Wigan town driving easy, with the convenience of automatic transmission and a size that suits tighter parking spots.", alt: "Hyundai i10 automatic available for hire in Wigan" },
    { body: "The VW Golf is a strong all rounder for Wigan, giving you extra comfort and space for longer drives while staying manageable around town.", alt: "VW Golf self-drive hire option in Wigan" },
    { body: "If you want automatic driving with everyday practicality, the Focus Auto suits Wigan business use, family journeys, and regular regional travel.", alt: "Ford Focus automatic hire car in Wigan" },
  ],
  whyChooseKicker: "Why Wigan drivers choose us",
  whyChooseTitle: "A practical choice for Wigan vehicle hire",
  whyChooseDescription: "Hiring a car in Wigan should feel simple, not overcomplicated. We focus on practical vehicles, clear communication, and helping customers choose something that suits the roads they will actually be driving. That might mean a small city-friendly car, an automatic for easier stop start traffic, or a larger option when the journey needs more space.",
  whyChooseItems: [
    { title: "Town-friendly vehicles", body: "Our Wigan car hire range is centred on vehicles that are easy to live with on typical local journeys." },
    { title: "Practical journey matching", body: "Whether you need a car for a quick local run or a longer journey, we help match the booking to the travel plan." },
    { title: "Automatic options available", body: "Automatic compact cars are available for Wigan drivers who want an easier drive in busier traffic." },
    { title: "Wider fleet when needed", body: "If you need more room than a compact car offers, we can also help with larger cars and wider vehicle types." },
    { title: "Useful for many journey types", body: "The service suits personal travel, commuting, business use, and temporary replacement vehicle needs around Wigan." },
    { title: "Helpful booking support", body: "You can speak to us directly to check availability and narrow down the most suitable vehicle for Wigan travel." },
  ],
  additionalServicesKicker: "More vehicle hire options in Wigan",
  additionalServicesTitle: "Extra fleet options for Wigan travel",
  additionalServicesDescription: "If a compact car is not quite enough for your plans in Wigan, we also offer larger cars, estates, SUVs and premium automatics, plus vans, minibuses and trucks.",
  additionalVehicles: [
    { body: "Useful in Wigan when you want the feel of a car but need a larger boot for bags, equipment or shopping.", alt: "Ford Focus Estate for practical luggage space on Wigan hires" },
    { body: "A comfortable larger car for Wigan drivers making longer regional or motorway journeys.", alt: "Ford Mondeo saloon for longer journeys from Wigan" },
    { body: "A practical automatic option in Wigan for customers who want extra room and a more relaxed drive.", alt: "Ford Mondeo automatic available for hire in Wigan" },
    { body: "Well suited to Wigan airport journeys, family travel and trips where luggage space matters.", alt: "Ford Mondeo Estate with generous boot space for Wigan travel" },
    { body: "A RAV4 Auto gives Wigan drivers extra ride height and easy automatic driving for longer trips, family travel, and mixed urban and motorway use.", alt: "Toyota RAV4 automatic SUV hire in Wigan" },
    { body: "The C Class Auto suits Wigan business travel, client visits, and comfortable regional journeys when you want a more refined drive.", alt: "Mercedes C Class automatic available for hire in Wigan" },
    { body: "An E Class Auto is a strong choice in Wigan for executive travel, airport runs, and longer journeys where comfort matters.", alt: "Mercedes E Class automatic hire option in Wigan" },
    { body: "For Wigan drivers needing space, presence, and a higher driving position, the Range Rover fits family trips, events, and longer road journeys.", alt: "Range Rover available for self-drive hire in Wigan" },
  ],
  featureCtaTitle: "Check Wigan vehicle availability",
  featureCtaDescription: "Need a car for local travel in Wigan or a journey further afield? Get in touch and check which vehicles are available for your dates.",
  serviceAreasKicker: "Around Wigan",
  serviceAreasTitle: "Vehicle hire around Wigan and nearby routes",
  serviceAreasDescription: "We support Wigan and surrounding areas with compact car hire, while also offering access to vans, minibuses, and trucks when a different vehicle suits the job better.",
  localRelevanceKicker: "Driving in Wigan",
  localRelevanceTitle: "Why compact car hire works well in Wigan",
  localRelevanceDescription: "Wigan is the kind of place where a compact hire car makes immediate sense. Local driving can include town centre calls, retail trips, work appointments, school runs, and short notice travel, all mixed into one day. A smaller vehicle keeps those journeys easy to manage while still being comfortable enough for trips beyond town.\n\nIt also works well for people travelling in and out of Wigan for work, family visits, or onward connections. With practical road links across the wider area, compact car hire gives you enough flexibility for local movement without making parking and manoeuvring harder than it needs to be.",
  localRelevanceBlocks: [
    { title: "A good fit for everyday Wigan driving", body: "Driving around Wigan is usually straightforward when you pick a car that suits everyday local roads. Compact models are especially useful if your route includes the town centre, residential streets, or regular stops through areas where parking space can be tighter than expected.\n\nIf your day takes you towards the A58, the East Lancashire Road corridor, or links out towards Rainford and Haydock, a smaller car keeps things simple. It is often the sensible choice for a mix of errands, work appointments, and short regional drives." },
    { title: "Useful for station links and onward routes", body: "Wigan journeys often combine local access with wider travel, especially for people connecting to rail services, retail parks, and business addresses. A compact car works well if you are moving between the station area, retail trips, and onward routes without wanting the bulk of a larger vehicle.\n\nFor drivers heading towards the M62 or making regular trips across Merseyside and the North West, keeping the vehicle manageable matters. You still get enough comfort for longer runs, while making town parking and repeat stops less of a chore." },
    { title: "Easy to scale up if your plans change", body: "Not every Wigan booking is just about a small car. Sometimes plans shift from a simple local run to carrying more passengers or more load space than expected. That is why it helps to use a hire company that can also assist with vans, minibuses, and trucks when needed.\n\nIf you start with compact car hire in Wigan but realise the job is bigger, it is easier to adjust when the wider fleet is available. That keeps your travel plans practical without overcomplicating the booking." },
  ],
  bottomCtaTitle: "Book your Wigan hire vehicle",
  bottomCtaDescription: "If you need compact car hire in Wigan, talk to our team and we will help you find a practical vehicle for the journey ahead.",
  faqKicker: "Wigan hire questions",
  faqTitle: "Compact car hire FAQs for Wigan",
  faqs: [
    { question: "Can I arrange compact car hire in Wigan at short notice?", answer: "Yes, we can help arrange compact car hire for Wigan when you need a practical vehicle for local driving, station journeys, or onward travel. Availability depends on the vehicle and timing, so it is best to check with us directly." },
    { question: "Why choose a compact car for driving in Wigan?", answer: "Compact cars are often a good fit for Wigan because they are easier to park, simple to handle on local roads, and well suited to everyday journeys around town and beyond." },
    { question: "Do you offer automatic cars for Wigan hires?", answer: "Yes, Wigan customers can ask about automatic compact car options. They are especially useful for town driving, busier junctions, and stop start traffic." },
    { question: "What kind of journeys are compact hire cars used for in Wigan?", answer: "Many Wigan bookings are for local appointments, visiting family, temporary vehicle cover, shopping trips, and rail connections, but the right car also works well for longer regional travel." },
    { question: "Can I hire more than just a compact car in Wigan?", answer: "Yes, alongside compact cars in Wigan we also offer vans, minibuses, and trucks, so if your plans change we can help you look at a more suitable vehicle." },
    { question: "How do I choose the right hire car for Wigan travel?", answer: "When booking your Wigan hire, tell us about passenger numbers, luggage, whether you want manual or automatic, and the type of journey you are planning. That helps us suggest the best option." },
  ],
}

const location3Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Chorley | Self-Drive Vehicle Hire", description: "Compact car hire in Chorley for commuting, local trips, station travel, and business use. Wider self-drive options include vans, minibuses, and trucks." },
  heroImage: "/images/nearby_location_image_1.jpeg",
  heroAlt: "Compact hire car on a commuter-style road near Chorley town centre",
  heroTitle: "Compact car hire in Chorley made simple",
  heroDescription: "Compact car hire in Chorley for commuting, shopping trips, local appointments, and onward travel. Practical self-drive vehicles with wider fleet options available.",
  heroSecondaryActionLabel: "View Chorley options",
  mainServiceKicker: "Chorley vehicle hire",
  mainServiceTitle: "Compact car hire for everyday travel in Chorley",
  mainServiceDescription: "We provide compact car hire in Chorley for customers who need a vehicle that is easy to drive, simple to park, and suitable for all kinds of everyday travel. Whether you are covering local appointments, sorting temporary transport, commuting, or heading out for a longer trip, we can help you choose a vehicle that fits.\n\nCompact cars are especially useful in Chorley because they cope well with mixed driving patterns. You get the convenience needed for town use without giving up comfort for wider regional journeys. If you need something larger, our broader fleet includes bigger cars, vans, minibuses, and trucks.",
  mainVehicles: [
    { body: "The Fiat 500 is a neat option for Chorley journeys where easy parking, short local trips, and simple town driving are the priority.", alt: "Fiat 500 compact hire car for Chorley roads" },
    { body: "A Hyundai i10 Auto suits Chorley customers who want an automatic compact car for local travel, commuting, and everyday convenience.", alt: "Hyundai i10 automatic hire option in Chorley" },
    { body: "The VW Golf works well in Chorley if you want a compact car with a little more cabin comfort for regular longer drives.", alt: "VW Golf self-drive vehicle available in Chorley" },
    { body: "For Chorley business travel, family use, or regional journeys, the Focus Auto offers practical space with easy automatic driving.", alt: "Ford Focus automatic car hire in Chorley" },
  ],
  whyChooseKicker: "Why Chorley drivers choose us",
  whyChooseTitle: "A practical self-drive option for Chorley",
  whyChooseDescription: "Chorley customers usually want vehicle hire to be useful, not complicated. We keep the focus on practical self-drive options, sensible guidance, and cars that make day to day travel easier. That means helping you choose a vehicle based on the journey itself rather than pushing something unsuitable.",
  whyChooseItems: [
    { title: "Good everyday fit", body: "Our Chorley compact cars are chosen for straightforward local use, comfortable driving, and everyday practicality." },
    { title: "Journey-led advice", body: "We help Chorley customers match the vehicle to the trip, whether that means town driving, commuting, or a longer run." },
    { title: "Automatic cars available", body: "Automatic choices are available for Chorley bookings where easier driving is the priority." },
    { title: "Space when you need it", body: "If you need more room than a compact hatchback offers, we can guide you towards larger alternatives." },
    { title: "Suitable for work or home", body: "Our Chorley service works for both personal and business use, from local appointments to temporary cover." },
    { title: "Straightforward support", body: "You can contact us directly to check vehicle suitability and availability for Chorley travel plans." },
  ],
  additionalServicesKicker: "More than compact cars in Chorley",
  additionalServicesTitle: "Wider vehicle choice for Chorley drivers",
  additionalServicesDescription: "If your Chorley journey needs more room, more comfort, or a higher spec vehicle, we can help with larger car options while still keeping the booking straightforward. We also offer vans, minibuses, and trucks for customers whose plans go beyond compact car hire.",
  additionalVehicles: [
    { body: "The Focus Estate is a useful step up for Chorley customers needing extra boot space for luggage, work kit, or longer family journeys.", alt: "Ford Focus Estate hire vehicle for Chorley travel" },
    { body: "A Mondeo suits Chorley drivers looking for a comfortable car for longer motorway runs, business travel, or day to day use with more cabin room.", alt: "Ford Mondeo available for self-drive hire in Chorley" },
    { body: "The Mondeo Auto offers added comfort for Chorley journeys where automatic driving and extra interior space make the day easier.", alt: "Ford Mondeo automatic hire option in Chorley" },
    { body: "For Chorley bookings that need both comfort and carrying space, the Mondeo Estate works well for extended trips, luggage, and everyday practicality.", alt: "Ford Mondeo Estate available for hire in Chorley" },
    { body: "A RAV4 Auto gives Chorley drivers more space and a raised driving position for family travel, business trips, and longer regional journeys.", alt: "Toyota RAV4 automatic hire vehicle in Chorley" },
    { body: "The C Class Auto is a smart option in Chorley for professional travel, client meetings, and comfortable journeys across the wider area.", alt: "Mercedes C Class automatic available for hire in Chorley" },
    { body: "An E Class Auto suits Chorley customers who want a refined vehicle for executive travel, airport runs, or longer distance driving.", alt: "Mercedes E Class automatic self-drive hire in Chorley" },
    { body: "The Range Rover is well suited to Chorley bookings where you want extra room, strong road presence, and comfort for family or event travel.", alt: "Range Rover hire option for Chorley journeys" },
  ],
  featureCtaTitle: "Check available hire cars for Chorley",
  featureCtaDescription: "Planning a journey in Chorley or heading further out on the main road network? Contact us to check available compact cars and larger alternatives.",
  serviceAreasKicker: "Around Chorley",
  serviceAreasTitle: "Serving Chorley and surrounding travel routes",
  serviceAreasDescription: "Our vehicle hire service supports Chorley and nearby routes with compact cars for daily travel, plus larger vehicles for customers who need more space or carrying capacity.",
  localRelevanceKicker: "Chorley travel guide",
  localRelevanceTitle: "Why compact cars suit Chorley so well",
  localRelevanceDescription: "Chorley drivers often need a car that can handle a bit of everything in the same day. That may mean local errands in town, work travel, family visits, or a run out onto the wider road network. Compact car hire suits that pattern well because it stays easy to handle while still covering longer trips comfortably.\n\nIt is also a sensible choice if parking, repeated stops, or busier local traffic are part of the journey. A smaller hire vehicle helps keep things straightforward, especially when your travel plan is practical rather than flashy.",
  localRelevanceBlocks: [
    { title: "Built for practical Chorley journeys", body: "Chorley is well suited to compact car hire because many journeys are short, mixed purpose, and spread across residential streets, local shops, and regular town centre stops. A smaller vehicle helps you stay flexible without making simple parking tasks harder than they need to be.\n\nIf your route takes you around the A580 East Lancashire Road corridor or through everyday local traffic, a compact car keeps the drive manageable. It is a good match for routine trips where convenience matters more than extra bulk." },
    { title: "Useful around town and beyond", body: "For people travelling in and out of Chorley for work, family commitments, or appointments, a compact hire car gives the right balance of economy of movement and comfort. You can cover local miles easily, then continue onto wider routes without feeling under-equipped.\n\nConnections towards the Atherleigh Way area and onward links around the town make a small, easy to place vehicle especially useful. If your day includes several stops rather than one straight run, compact size becomes a real advantage." },
    { title: "Flexible options if plans change", body: "Chorley bookings are not always the same from one customer to the next. Some need a compact car for commuting or temporary cover, while others start small and then realise they need estate space, a van, or a people carrying option.\n\nBecause we offer more than one type of vehicle, it is easier to keep your hire practical. If your Chorley plans change, you are not locked into one narrow choice." },
  ],
  bottomCtaTitle: "Arrange your Chorley car hire",
  bottomCtaDescription: "Speak to us about compact car hire in Chorley and we will help you find a vehicle that fits your route, passenger needs, and travel plans.",
  faqKicker: "Chorley FAQs",
  faqTitle: "Questions about compact car hire in Chorley",
  faqs: [
    { question: "What is compact car hire in Chorley best suited to?", answer: "Compact car hire in Chorley is a good option for local travel, commuting, family visits, and journeys connecting into surrounding routes. Smaller cars are often easier to park and simpler to manage on busy days." },
    { question: "Can I book an automatic hire car in Chorley?", answer: "Yes, automatic cars are available for Chorley hires. They can be especially useful if you expect regular stop start traffic or simply prefer an easier driving experience." },
    { question: "Why are compact cars a sensible choice for Chorley drivers?", answer: "Chorley has a mix of town driving, residential routes, and connections out towards major roads, so a compact vehicle gives you flexibility without feeling oversized for everyday use." },
    { question: "Can I upgrade from a compact car for my Chorley journey?", answer: "Yes, if your Chorley booking needs more space for passengers or luggage, we can also help with larger cars and other vehicle types where suitable." },
    { question: "Do you offer other vehicle hire services in Chorley?", answer: "Alongside compact car hire in Chorley, we also offer vans, minibuses, and trucks. That is useful if your requirements change after you first enquire." },
    { question: "How do I pick the right hire car for Chorley travel?", answer: "The best way to choose a Chorley hire car is to think about passenger numbers, luggage, the length of the trip, and whether you want manual or automatic. We can help narrow it down." },
  ],
}

const location4Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Leigh | Vehicle Hire Leigh", description: "Compact car hire in Leigh for local travel, station runs and regional driving, with vans, minibuses and trucks also available when needed." },
  heroImage: "/images/nearby_location_image_2.jpeg",
  heroAlt: "Compact hire car on a business-travel route in Leigh",
  heroTitle: "Compact Car Hire in Leigh",
  heroDescription: "Compact car hire in Leigh for everyday travel, station pickups, business meetings and regional journeys. Easy-to-drive vehicles with support from a practical local team.",
  heroSecondaryActionLabel: "View vehicle options",
  mainServiceKicker: "Leigh compact car hire",
  mainServiceTitle: "Practical car hire for Leigh journeys",
  mainServiceDescription: "Compact car hire in Leigh suits everything from station runs and business travel to shopping trips and weekend plans. A smaller car is easy to handle around the town centre, residential streets and busy retail areas, while still being comfortable for longer journeys using the M6, M62 and A49. If you need a straightforward self-drive option for local travel in Leigh, we offer practical cars that are simple to park, economical on everyday mileage and well suited to solo drivers, couples and small families.",
  mainVehicles: [
    { body: "The Fiat 500 is a smart fit for Leigh town driving, short local trips and easy parking near busy central areas.", alt: "Fiat 500 compact hire car for Leigh" },
    { body: "The Hyundai i10 Auto is ideal for drivers who want a small automatic for comfortable local travel around Leigh.", alt: "Hyundai i10 automatic hire car for Leigh" },
    { body: "The VW Golf offers extra room and motorway confidence while still staying practical for everyday use in Leigh.", alt: "VW Golf hire car for Leigh travel" },
    { body: "The Focus Auto suits mixed Leigh journeys, giving you automatic ease for commuting, business calls and regional runs.", alt: "Ford Focus automatic hire car in Leigh" },
  ],
  whyChooseKicker: "Why Leigh drivers call us",
  whyChooseTitle: "A practical choice for compact car hire in Leigh",
  whyChooseDescription: "Hiring a compact car in Leigh should feel practical, not overcomplicated. We focus on useful vehicles, clear guidance and a service that works for real journeys, whether you are travelling locally, heading out on business or connecting with wider routes across the region.",
  whyChooseItems: [
    { title: "Compact cars that fit the area", body: "Choose a smaller car that suits town driving, station access and everyday travel around Leigh." },
    { title: "Straightforward vehicle guidance", body: "Our team helps match the vehicle to the journey so you are not left with more car than you need." },
    { title: "Useful choice across the fleet", body: "Automatic and manual compact options make it easier to book a car you feel comfortable driving in Leigh." },
    { title: "Ready for local and regional use", body: "From local errands to regional travel, our vehicles are suited to the mixed driving patterns common around Leigh." },
    { title: "Wider hire options available", body: "If your plans expand beyond compact car hire in Leigh, we can also arrange larger vehicles from the same fleet." },
    { title: "Easy to arrange", body: "We keep the process clear and practical so booking the right vehicle in Leigh feels simple." },
  ],
  additionalServicesKicker: "More than compact cars in Leigh",
  additionalServicesTitle: "Broader vehicle choice for Leigh travel",
  additionalServicesDescription: "Leigh journeys vary from local calls and station runs to business travel and longer motorway driving, so it helps to have more than one option. Alongside compact cars, we can help with larger cars plus vans, minibuses, and trucks where the journey calls for them.",
  additionalVehicles: [
    { body: "The Focus Estate gives Leigh drivers extra luggage room for business travel, family trips, and longer journeys without moving into a much larger vehicle.", alt: "Ford Focus Estate hire car for Leigh journeys" },
    { body: "A Mondeo suits Leigh customers who want a comfortable car for regular motorway use, client visits, or longer day trips.", alt: "Ford Mondeo available for hire in Leigh" },
    { body: "The Mondeo Auto is a practical choice in Leigh for drivers who want added cabin space and relaxed automatic driving.", alt: "Ford Mondeo automatic self-drive hire in Leigh" },
    { body: "For Leigh travel that needs both passenger comfort and strong boot capacity, the Mondeo Estate is a dependable all round option.", alt: "Ford Mondeo Estate available for Leigh hire" },
    { body: "A RAV4 Auto works well for Leigh drivers wanting a higher seating position, flexible space, and comfort for regional travel.", alt: "Toyota RAV4 automatic hire vehicle in Leigh" },
    { body: "The C Class Auto is well suited to Leigh business use, executive travel, and professional journeys across the North West.", alt: "Mercedes C Class automatic available for hire in Leigh" },
    { body: "An E Class Auto gives Leigh customers extra comfort for longer motorway routes, airport runs, and higher end travel needs.", alt: "Mercedes E Class automatic hire option in Leigh" },
    { body: "The Range Rover suits Leigh bookings where you want generous space, a raised driving position, and strong comfort for family or event travel.", alt: "Range Rover available for self-drive hire in Leigh" },
  ],
  featureCtaTitle: "Need compact car hire in Leigh?",
  featureCtaDescription: "If you need a practical compact car in Leigh, speak to our team and we will help you choose the right vehicle for local trips, business travel or onward journeys.",
  serviceAreasKicker: "Around Leigh",
  serviceAreasTitle: "Vehicle hire in and around Leigh",
  serviceAreasDescription: "We provide compact car hire across Leigh and nearby areas, with support for drivers who need an easy local vehicle as well as access to vans, minibuses and trucks.",
  localRelevanceKicker: "Driving in Leigh",
  localRelevanceTitle: "Why compact car hire works well in Leigh",
  localRelevanceDescription: "Leigh is the kind of place where a compact car makes immediate sense. The town sits between major motorway links and busy local roads, but many day-to-day journeys still depend on being able to park easily, turn around quickly and move between central streets, residential areas and business locations without hassle. For that kind of driving, a smaller car is often the most practical choice.\n\nIt is also a town with varied travel patterns. Some drivers need a car for rail connections, some for office visits, and others for errands, family travel or short regional trips. Compact car hire in Leigh suits that mix well, giving you a vehicle that feels comfortable on local roads while still being ready for travel farther out when needed.",
  localRelevanceBlocks: [
    { title: "Driving around central Leigh", body: "Leigh works well with a compact car because so many journeys involve switching between town-centre streets, retail parks and motorway links. If you are heading near Golden Square, the Cultural Quarter or the station approaches, a smaller vehicle is simply easier to place and easier to live with through a busy day.\n\nThe road network also means you can be in and out quickly when plans change. Routes such as the A49, A50 and A57 connect different parts of Leigh efficiently, while the M62 and M6 are close enough to make regional travel straightforward without needing a larger car." },
    { title: "Stations, offices and onward travel", body: "Compact car hire is especially useful in Leigh if your day includes rail connections or office visits. Around Leigh Central and Leigh Bank Quay, access can feel more manageable in a smaller vehicle, particularly when you are handling luggage, collecting colleagues or making a quick onward trip after arriving by train.\n\nFor business users travelling to Birchwood or visiting customers across the wider area, a compact hatchback gives a practical balance of comfort and manoeuvrability. It is well suited to mixed driving, from town traffic to short motorway stretches, without feeling oversized for tighter parking areas." },
    { title: "Planning practical journeys from Leigh", body: "Leigh is often a link point rather than a final stop, which makes choosing the right vehicle important. If your plans include shopping collections, family visits or leisure trips out toward surrounding routes, a compact car keeps things simple while still offering enough room for the usual bags, cases and day-to-day items.\n\nIt also helps to think about timing. Roads around key retail and commuter zones can feel busier at peak periods, so collecting the right car for the job can make the whole journey smoother. If you later need extra carrying space, we can also help with vans, minibuses and trucks from the wider fleet." },
  ],
  bottomCtaTitle: "Book a hire car for Leigh",
  bottomCtaDescription: "Need compact car hire in Leigh? Get in touch and we will help you choose a practical self-drive vehicle for town, business, or motorway use.",
  faqKicker: "Leigh FAQs",
  faqTitle: "Leigh compact car hire questions",
  faqs: [
    { question: "What is compact car hire in Leigh useful for?", answer: "Compact car hire in Leigh is ideal for local business travel, station connections, shopping trips, commuting, and everyday journeys where easy parking matters." },
    { question: "Can I hire an automatic car in Leigh?", answer: "Yes, automatic options are available for Leigh hires, which can be especially helpful if your route includes frequent junctions, queues, or regular town driving." },
    { question: "Why choose a compact hire car for Leigh travel?", answer: "A compact car makes sense in Leigh because it is easy to handle in busy areas while still being comfortable for trips out on the main road network." },
    { question: "Can I use a compact hire car in Leigh for business travel?", answer: "Yes, if your Leigh plans involve more luggage, more passengers, or a different kind of journey, we can also help with larger cars and other vehicle types." },
    { question: "Why choose a compact car for driving in Leigh?", answer: "A compact car suits many Leigh journeys because it is easier to park around the town centre, convenient for station runs, and comfortable for local and regional travel." },
    { question: "Do you offer other vehicle hire services in Leigh?", answer: "Yes. Alongside compact car hire in Leigh, we can also help with vans, minibuses and trucks when your plans need more space or carrying capacity." },
  ],
}

const location5Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Farnworth | Vehicle Hire Farnworth", description: "Compact car hire in Farnworth for local trips, station travel and regional driving, with access to a wider fleet when your plans need more space." },
  heroImage: "/images/nearby_location_image_2.jpeg",
  heroAlt: "Compact hire car driving near a retail and road-link area in Farnworth",
  heroTitle: "Compact Car Hire in Farnworth",
  heroDescription: "Compact car hire in Farnworth for local errands, commuting, rail connections and wider Lancashire journeys. A practical choice when you want easy driving and simple parking.",
  heroSecondaryActionLabel: "Check available vehicles",
  mainServiceKicker: "Farnworth compact cars",
  mainServiceTitle: "Compact hire cars for everyday Farnworth travel",
  mainServiceDescription: "Our compact car hire in Farnworth is designed for drivers who want a vehicle that feels easy to manage without giving up everyday comfort. Whether you need a small city-style car for errands and appointments or a slightly larger hatchback for regular travel, we offer sensible options for the way people move around Farnworth. Compact cars are a good match for local parking, daily driving and short regional routes where flexibility matters more than unnecessary size.\n\nThey also make sense for mixed-use bookings. Many Farnworth journeys combine town-centre stops, station access and trips onto larger roads, so having a car that handles all of that comfortably can make the day much easier.",
  mainVehicles: [
    { body: "The Fiat 500 is ideal for quick Farnworth journeys, easy parking and simple town-centre driving.", alt: "Fiat 500 compact hire car in Farnworth" },
    { body: "The Hyundai i10 Auto gives Farnworth drivers a small automatic that feels comfortable and easy to handle.", alt: "Hyundai i10 automatic rental car for Farnworth" },
    { body: "The VW Golf is a versatile option for Farnworth travel, combining everyday practicality with solid comfort on longer runs.", alt: "VW Golf hire car for Farnworth use" },
    { body: "The Focus Auto suits Farnworth drivers who want automatic convenience with space for regular travel and errands.", alt: "Ford Focus automatic hire car in Farnworth" },
  ],
  whyChooseKicker: "Why Farnworth customers choose us",
  whyChooseTitle: "A sensible approach to compact car hire in Farnworth",
  whyChooseDescription: "When you need a hire car in Farnworth, the right vehicle should fit naturally into your plans. We keep the focus on sensible compact options, straightforward booking support and a fleet that can also scale up if your journey turns into something bigger.",
  whyChooseItems: [
    { title: "Built for everyday use", body: "Our compact cars are well suited to the practical, mixed driving that is common around Farnworth." },
    { title: "Easy to live with", body: "Small, manageable vehicles make local parking and repeated stops simpler across Farnworth." },
    { title: "Choice that stays practical", body: "From simple runabouts to more spacious hatchbacks, we offer useful options for different Farnworth journeys." },
    { title: "Guidance that makes sense", body: "We help you pick a vehicle based on how you will use it, not just on category alone." },
    { title: "Flexibility across the fleet", body: "If your Farnworth booking changes, we can often point you toward a larger car, van, minibus or truck instead." },
    { title: "Simple local service", body: "Our focus is on keeping vehicle hire in Farnworth straightforward, useful and easy to arrange." },
  ],
  additionalServicesKicker: "More vehicle hire in Farnworth",
  additionalServicesTitle: "Extra hire choices beyond compact cars in Farnworth",
  additionalServicesDescription: "While compact cars are a strong choice for Farnworth, some trips need more room, more comfort or a different driving setup. Our wider fleet covers those needs without losing the same practical approach.",
  additionalVehicles: [
    { body: "The Focus Estate works well in Farnworth when you want compact-style driving with added boot space for luggage, equipment or shopping.", alt: "Ford Focus Estate hire vehicle for Farnworth" },
    { body: "The Mondeo suits longer Farnworth journeys where extra cabin comfort matters for business travel or family use.", alt: "Ford Mondeo hire car for Farnworth journeys" },
    { body: "The Mondeo Auto is a smooth option for Farnworth drivers who want a roomy automatic for regional roads and motorway travel.", alt: "Ford Mondeo automatic hire car in Farnworth" },
    { body: "The Mondeo Estate adds useful carrying space for Farnworth trips that involve cases, work items or larger day-to-day loads.", alt: "Ford Mondeo Estate hire car for Farnworth" },
    { body: "The RAV4 Auto gives you a higher driving position and flexible space, useful for family travel in and around Farnworth.", alt: "Toyota RAV4 automatic hire vehicle for Farnworth" },
    { body: "The C Class Auto is a refined choice for Farnworth business users and drivers wanting a more executive feel.", alt: "Mercedes C Class automatic hire car in Farnworth" },
    { body: "The E Class Auto is well suited to longer Farnworth journeys where comfort, cabin space and effortless driving all matter.", alt: "Mercedes E Class automatic hire car for Farnworth" },
    { body: "The Range Rover offers generous space and a more substantial drive for Farnworth trips that call for extra presence and comfort.", alt: "Range Rover hire vehicle for Farnworth travel" },
  ],
  featureCtaTitle: "Looking for a compact car in Farnworth?",
  featureCtaDescription: "Tell us what kind of driving you need to do in Farnworth and we will help you find a compact car that feels easy, practical and well matched to the trip.",
  serviceAreasKicker: "Around Farnworth",
  serviceAreasTitle: "Vehicle hire around Farnworth",
  serviceAreasDescription: "We cover Farnworth and surrounding areas with compact car hire for everyday travel, while also offering larger vehicles when the job or journey calls for them.",
  localRelevanceKicker: "Driving around Farnworth",
  localRelevanceTitle: "Why compact car hire makes sense in Farnworth",
  localRelevanceDescription: "Farnworth is well suited to compact car hire because so much local driving is about convenience. You may be heading into town, linking up with nearby routes, calling on customers, or travelling between home, work and appointments. In all of those cases, a smaller car keeps things straightforward and avoids the bulk of a larger vehicle when you do not need it.\n\nIt is also a place where one booking often has to cover different kinds of travel. You might need something easy for local roads during the day, but still comfortable for a longer run later on. Compact cars handle that blend well, which is why they remain a practical option for many Farnworth drivers.",
  localRelevanceBlocks: [
    { title: "A good fit for Farnworth roads", body: "Farnworth suits compact car hire because many journeys combine town-centre access with short hops onto larger roads. If you are moving between local shops, residential areas and workplaces, a smaller vehicle is easier to park and less awkward on tighter streets.\n\nThe town also benefits from strong road links, especially via the A6 and nearby M61 corridor. That makes a compact car a sensible all-rounder: small enough for everyday use in Farnworth, but still comfortable when your trip stretches farther across Lancashire." },
    { title: "Town-centre access and station travel", body: "For rail users, compact car hire in Farnworth is useful when your journey starts or ends around Farnworth station and nearby central streets. Picking up passengers, dealing with luggage or making quick onward connections tends to feel simpler in a smaller car that can slot into ordinary parking spaces without fuss.\n\nThe same applies to routine errands. Whether you are visiting local retail areas, heading to appointments or travelling across town several times in one day, a compact hatchback keeps things manageable and efficient rather than oversized for the job." },
    { title: "Flexible travel from Farnworth", body: "Farnworth also works as a base for outward travel, so it helps to choose a vehicle that can handle more than one purpose. A compact car gives you enough comfort for regional driving while still being practical once you are back in town. That balance makes it popular for mixed-use bookings rather than one single journey type.\n\nIf your plans develop and you need extra room for luggage, passengers or equipment, the wider fleet gives you more options without needing to look elsewhere. We can help with larger cars, and when required, vans, minibuses and trucks too." },
  ],
  bottomCtaTitle: "Book the right hire car for Farnworth",
  bottomCtaDescription: "For compact car hire in Farnworth, get in touch with our team and we will help you choose a vehicle that fits the journey.",
  faqKicker: "Farnworth hire questions",
  faqTitle: "Compact car hire FAQs for Farnworth",
  faqs: [
    { question: "Do you offer compact car hire in Farnworth?", answer: "Yes, we provide compact car hire in Farnworth for local driving, day-to-day use, station runs and longer regional journeys." },
    { question: "Is a compact car suitable for driving around Farnworth?", answer: "A compact car is often a strong choice in Farnworth because it is easy to drive through town, practical for parking and comfortable on routes linking into surrounding roads." },
    { question: "Can I book an automatic hire car in Farnworth?", answer: "Yes, if you prefer not to drive manual, automatic compact options are available for Farnworth bookings." },
    { question: "What kind of trips does compact car hire in Farnworth suit?", answer: "Compact car hire in Farnworth is useful for commuting, family visits, shopping trips, business travel and onward journeys into the wider area." },
    { question: "Do you have larger vehicles available from Farnworth?", answer: "If you need more room than a compact car offers in Farnworth, we can also help with larger cars as well as vans, minibuses and trucks." },
    { question: "How do I choose the right hire vehicle in Farnworth?", answer: "The best way is to speak with us about your route, passenger needs and luggage so we can help match the right vehicle for Farnworth travel." },
  ],
}

const location6Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Westhoughton | Small Car Rental Options", description: "Compact car hire in Westhoughton for local trips, business travel and onward journeys. Practical self-drive vehicles with wider fleet options available." },
  heroImage: "/images/nearby_location_image_1.jpeg",
  heroAlt: "Compact hire car on a local access road in Westhoughton",
  heroTitle: "Compact Car Hire in Westhoughton",
  heroDescription: "Compact car hire in Westhoughton for local travel, work use, shopping trips and onward journeys. Practical vehicles that suit everyday driving without unnecessary size.",
  heroSecondaryActionLabel: "See compact car choices",
  mainServiceKicker: "Compact cars in Westhoughton",
  mainServiceTitle: "Straightforward compact car hire in Westhoughton",
  mainServiceDescription: "If you need compact car hire in Westhoughton, we offer practical vehicles that make local trips simpler. Small cars are well suited to everyday driving around residential areas, retail parks and business routes where easy parking and smooth manoeuvring matter. Whether you are heading to meetings, sorting family travel, covering a temporary vehicle gap or planning a longer run beyond town, a compact hire car gives you useful flexibility without taking up more space than you need.\n\nOur compact range covers straightforward town driving as well as comfortable travel for motorway connections. That means you can choose a city-friendly option for short local errands or a larger hatchback for regular runs in and out of Westhoughton. We also offer vans, minibuses and trucks if your plans change and you need more carrying space or passenger room.",
  mainVehicles: [
    { body: "A neat choice for short trips around Westhoughton, with easy handling for local roads, shopping runs and everyday travel.", alt: "Fiat 500 compact hire car for Westhoughton local driving" },
    { body: "An automatic compact car that keeps town driving simple, especially useful for stop start traffic and quick local errands.", alt: "Hyundai i10 automatic compact hire car in Westhoughton" },
    { body: "A solid all rounder for Westhoughton drivers who want compact size with extra comfort for commuting and regional journeys.", alt: "VW Golf compact hatchback hire car in Westhoughton" },
    { body: "A practical automatic for longer drives from Westhoughton, giving you relaxed road manners and useful cabin space.", alt: "Ford Focus automatic hire car for Westhoughton journeys" },
  ],
  whyChooseKicker: "Why Westhoughton drivers choose us",
  whyChooseTitle: "A practical option for Westhoughton car hire",
  whyChooseDescription: "Westhoughton journeys can vary quickly between local roads, retail access routes and motorway links, so it helps to hire a car that feels easy to live with. We keep the offer practical, with compact vehicles that are simple to drive, sensible for everyday plans and backed by a wider self-drive fleet when you need something larger.",
  whyChooseItems: [
    { title: "Useful for town driving", body: "A compact car is easier to place in busier parts of Westhoughton, especially when your day includes several short stops." },
    { title: "Choice that fits the trip", body: "Our range includes smaller options for local use and larger hatchbacks when you want extra room for regular journeys from Westhoughton." },
    { title: "Simple self-drive process", body: "We keep the process clear so you can get moving without unnecessary delays or guesswork." },
    { title: "Good for daily schedules", body: "Compact cars are a practical match for station drop offs, work appointments and planned travel around Westhoughton." },
    { title: "Wider fleet available", body: "If you later need extra carrying capacity, we can also help with vans, minibuses and trucks." },
    { title: "Practical service", body: "We focus on sensible vehicle hire for real journeys rather than overcomplicated packages." },
  ],
  additionalServicesKicker: "More vehicle hire in Westhoughton",
  additionalServicesTitle: "Additional vehicle hire options for Westhoughton",
  additionalServicesDescription: "Compact cars are often the right match for Westhoughton, but not every journey is the same. If you need more room, more comfort or a different type of vehicle, our wider fleet is available too.",
  additionalVehicles: [
    { body: "The Focus Estate adds flexible boot space for Westhoughton journeys that involve luggage, work gear or larger shopping loads.", alt: "Ford Focus Estate hire car for Westhoughton" },
    { body: "The Mondeo is a comfortable step up for Westhoughton drivers covering longer regional miles.", alt: "Ford Mondeo hire vehicle in Westhoughton" },
    { body: "The Mondeo Auto suits Westhoughton bookings where you want easy automatic driving and a more spacious cabin.", alt: "Ford Mondeo automatic hire car for Westhoughton" },
    { body: "The Mondeo Estate is useful for Westhoughton travel that combines passengers with larger bags or equipment.", alt: "Ford Mondeo Estate hire car in Westhoughton" },
    { body: "The RAV4 Auto offers extra versatility and a higher seating position for varied Westhoughton journeys.", alt: "Toyota RAV4 automatic hire vehicle for Westhoughton" },
    { body: "The C Class Auto is a refined option for Westhoughton business travel and more comfort-focused trips.", alt: "Mercedes C Class automatic hire car in Westhoughton" },
    { body: "The E Class Auto gives Westhoughton drivers extra room and a smooth drive for longer road use.", alt: "Mercedes E Class automatic hire car for Westhoughton" },
    { body: "The Range Rover is suited to Westhoughton bookings where space, comfort and a more substantial vehicle are preferred.", alt: "Range Rover hire vehicle for Westhoughton travel" },
  ],
  featureCtaTitle: "Arrange compact car hire in Westhoughton",
  featureCtaDescription: "Need a small, easy-to-manage vehicle in Westhoughton? Contact us and we will help you choose the right compact car for the way you travel.",
  serviceAreasKicker: "Westhoughton coverage",
  serviceAreasTitle: "Serving Westhoughton and nearby travel routes",
  serviceAreasDescription: "We support Westhoughton and surrounding routes with compact car hire that works for local driving, station runs, business travel and wider self-drive needs.",
  localRelevanceKicker: "Local driving in Westhoughton",
  localRelevanceTitle: "Compact car hire that suits Westhoughton journeys",
  localRelevanceDescription: "Westhoughton is a practical place to hire a compact car because many journeys are functional rather than flashy. Drivers often need to get between residential areas, retail destinations, work locations and connecting routes without making the trip more complicated than it needs to be. A compact vehicle does that job well, giving you simple local usability and enough comfort for longer miles.\n\nThe town's road layout also makes vehicle size worth thinking about. If your day includes repeated stops, everyday parking and quick turns onto major routes, a smaller car can be the most useful option overall. It fits the way many people travel in Westhoughton: flexible, efficient and easy to manage.",
  localRelevanceBlocks: [
    { title: "Well suited to local travel patterns", body: "Westhoughton is built around movement between neighbourhoods, shopping areas and major connecting roads, which is one reason compact cars work so well here. A smaller vehicle is easy to manage on routine local runs and still comfortable enough for longer journeys once you leave town.\n\nAccess to routes such as the M58 and A570 also means many trips quickly move from local roads to faster stretches. That makes compact car hire in Westhoughton a useful balance: practical in everyday settings, but not limited when the journey opens out." },
    { title: "Useful for errands, work and short hops", body: "Many Westhoughton bookings are about convenience rather than occasion travel. You may need a car for appointments, work visits, family travel or straightforward errands, and in those cases a compact vehicle usually feels like the right fit. It is easier to park, easier to turn around and easier to use over multiple stops in one day.\n\nThat matters around busier local destinations and shopping areas where space can be tighter and journeys more stop-start than open-road driving. A small hatchback can make those ordinary tasks feel less effort than using a larger vehicle you do not really need." },
    { title: "Ready for local use and regional links", body: "Westhoughton also sits in a position where outward travel is common. If your plans involve reaching business sites, connecting with nearby towns or covering regional miles, a compact car remains a sensible choice because it is comfortable enough for the road while still being manageable back on local streets.\n\nWhen the journey changes shape and you need more carrying space, the wider fleet is there to support that next step. We can help move from compact car hire in Westhoughton to larger cars, vans, minibuses or trucks depending on what the day actually requires." },
  ],
  bottomCtaTitle: "Speak to us about Westhoughton car hire",
  bottomCtaDescription: "Arrange compact car hire in Westhoughton with a team that focuses on practical vehicles and straightforward support.",
  faqKicker: "Westhoughton FAQs",
  faqTitle: "Compact car hire questions for Westhoughton",
  faqs: [
    { question: "Do you provide compact car hire in Westhoughton?", answer: "Yes, we offer compact car hire in Westhoughton for local driving, everyday travel and wider regional journeys." },
    { question: "Why hire a compact car in Westhoughton?", answer: "Compact cars work well in Westhoughton because they are practical for local roads, easier to park and comfortable for routine journeys." },
    { question: "Are automatic hire cars available in Westhoughton?", answer: "Yes, we can help with automatic compact hire cars in Westhoughton if that is your preferred driving option." },
    { question: "Is compact car hire in Westhoughton suitable for work use?", answer: "Yes, many drivers use compact car hire in Westhoughton for work visits, appointments, commuting and everyday business travel." },
    { question: "Can I upgrade to a larger vehicle in Westhoughton?", answer: "If your Westhoughton journey needs more room than a compact car provides, we can also assist with larger cars, vans, minibuses and trucks." },
    { question: "How do I pick the best hire car for Westhoughton?", answer: "Tell us how you expect to use the vehicle in Westhoughton and we will help point you toward the most suitable option in the fleet." },
  ],
}

const location7Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Horwich | Small Car Rental for City and Regional Travel", description: "Compact car hire in Horwich for local trips, business travel and easy regional driving. Small cars plus access to vans, minibuses and trucks." },
  heroImage: "/images/nearby_location_image_2.jpeg",
  heroAlt: "Compact hire car on a regional access road in Horwich",
  heroTitle: "Compact Car Hire in Horwich",
  heroDescription: "Practical compact car hire in Horwich for commuting, city-centre trips, business travel and easy regional driving. A smart choice when you want a vehicle that is simple to park and comfortable on the move.",
  heroSecondaryActionLabel: "View vehicle options",
  mainServiceKicker: "Horwich compact car hire",
  mainServiceTitle: "Small cars that suit the way Horwich journeys actually work",
  mainServiceDescription: "Our Horwich compact car hire service is built around everyday usability. Whether you need something for local appointments, work travel, visiting family, university-related journeys or onward trips beyond the city, a smaller vehicle keeps things straightforward. Compact cars are easier to manoeuvre in busier areas, simpler to park and well suited to mixed driving where your route may include central streets, dual carriageways and motorway sections.\n\nHorwich is the kind of place where that flexibility matters. One journey might involve station access, another a run across town, and the next a motorway connection heading out of the area. A compact hire car gives you practical comfort without feeling oversized for the job. If you need more space than a standard small car, we can also help with larger cars and other vehicle types through the wider fleet.",
  mainVehicles: [
    { body: "A compact city car that suits Ashton-in-Makerfield errands, local visits and short day to day journeys.", alt: "Fiat 500 hire car for local travel in Ashton-in-Makerfield" },
    { body: "An easy automatic choice for Ashton-in-Makerfield drivers who want light, simple handling around town.", alt: "Hyundai i10 automatic hire car in Ashton-in-Makerfield" },
    { body: "A versatile hatchback for Ashton-in-Makerfield trips that combine local driving with regular main road miles.", alt: "VW Golf hire car for Ashton-in-Makerfield journeys" },
    { body: "A comfortable automatic with enough space for longer Ashton-in-Makerfield travel while staying easy to manage locally.", alt: "Ford Focus automatic hire car in Ashton-in-Makerfield" },
  ],
  whyChooseKicker: "Why Horwich customers book with us",
  whyChooseTitle: "A practical choice for compact car hire in Horwich",
  whyChooseDescription: "Horwich journeys can change quickly between city traffic, retail access, station approaches and motorway travel, so the right hire vehicle needs to feel adaptable rather than awkward. We focus on straightforward compact car options that work for practical day-to-day use.\n\nCustomers in Horwich also value having access to a broader fleet when plans shift. If a small car is right today but a van, minibus or larger vehicle is needed next time, the wider service makes that easy to arrange through one team.",
  whyChooseItems: [
    { title: "Town friendly vehicles", body: "Smaller cars make sense for Ashton-in-Makerfield drivers who want something simple for local roads and routine stops." },
    { title: "Useful fleet choice", body: "Automatic and hatchback options help you match the car to the kind of driving you actually have planned in Ashton-in-Makerfield." },
    { title: "Straightforward to arrange", body: "We focus on practical self-drive hire with clear communication and sensible vehicle guidance." },
    { title: "Flexible for different journeys", body: "Compact cars are well suited to mixed trips that include local errands, work travel and wider road links from Ashton-in-Makerfield." },
    { title: "Easy to scale up", body: "You can move to a larger car or another vehicle type if your plans need more carrying room or passenger space." },
    { title: "Clear and useful service", body: "Our service is built around practical use, not overcomplicated wording or unnecessary extras." },
  ],
  additionalServicesKicker: "More Horwich vehicle options",
  additionalServicesTitle: "Wider vehicle hire choices for Horwich journeys",
  additionalServicesDescription: "Alongside compact car hire in Horwich, we also offer larger cars, estates, SUVs and executive models when your journey needs more room, extra comfort or stronger motorway presence. Van, minibus and truck hire can also be arranged through the wider fleet.",
  additionalVehicles: [
    { body: "A handy estate for Ashton-in-Makerfield drivers who need extra boot space for cases, equipment or bulky day to day loads.", alt: "Ford Focus Estate hire car for Ashton-in-Makerfield journeys" },
    { body: "A comfortable saloon suited to longer runs from Ashton-in-Makerfield, with a calmer feel on faster roads.", alt: "Ford Mondeo hire car in Ashton-in-Makerfield" },
    { body: "An automatic option for Ashton-in-Makerfield journeys where easy motorway driving and a more relaxed setup matter.", alt: "Ford Mondeo automatic hire car for Ashton-in-Makerfield" },
    { body: "Good for Ashton-in-Makerfield trips that need both passenger comfort and added load space for luggage or work items.", alt: "Ford Mondeo Estate hire car in Ashton-in-Makerfield" },
    { body: "A higher driving position and flexible cabin make this a strong choice for mixed local and regional travel from Ashton-in-Makerfield.", alt: "Toyota RAV4 automatic hire vehicle in Ashton-in-Makerfield" },
    { body: "A refined automatic for Ashton-in-Makerfield business use, client visits or longer personal trips where comfort counts.", alt: "Mercedes C Class automatic hire car for Ashton-in-Makerfield" },
    { body: "A spacious executive car for Ashton-in-Makerfield travel when you want a quieter, more relaxed drive with extra room.", alt: "Mercedes E Class automatic hire car in Ashton-in-Makerfield" },
    { body: "A roomy premium option for Ashton-in-Makerfield journeys that call for comfort, presence and flexible luggage space.", alt: "Range Rover hire vehicle for Ashton-in-Makerfield travel" },
  ],
  featureCtaTitle: "Check compact car availability in Horwich",
  featureCtaDescription: "Need a small car for Horwich driving, station access or a straightforward motorway run? Speak to us and we will help you find a practical compact hire option.",
  serviceAreasKicker: "Around Horwich",
  serviceAreasTitle: "Vehicle hire serving Horwich and nearby routes",
  serviceAreasDescription: "We support customers travelling in and around Horwich, with compact car hire that fits local driving as well as onward regional routes. The wider service also covers vans, minibuses and trucks when a larger vehicle is needed.",
  localRelevanceKicker: "Driving in Horwich",
  localRelevanceTitle: "Why compact car hire works well in Horwich",
  localRelevanceDescription: "Horwich suits compact car hire because so many journeys mix city-centre traffic with quick access to major routes. A smaller car is useful when you are heading through busy areas near Horwich Railway Station, moving around the ring-road sections, or fitting into tighter parking around shops, offices and residential streets. It gives you enough comfort for longer drives while staying easy to place in day-to-day traffic.\n\nThe city also works well as a base for wider travel. With the A59, A6, M6 and M55 all playing a part in local movement, a compact vehicle makes sense for customers who want a car that feels manageable in town but still settled on regional roads. That balance is often what Horwich drivers and visitors need most.",
  localRelevanceBlocks: [
    { title: "Why compact cars suit Ashton-in-Makerfield", body: "Driving in Ashton-in-Makerfield often means mixing short town journeys with quick links onto faster roads, so a compact car usually makes the most sense. It gives you enough comfort for everyday travel while staying easy to place in tighter spaces near shops, residential streets and local services.\n\nIf your day includes several stops, smaller vehicles help take the pressure out of parking and turning. That matters around the town centre and on busier approach roads where a larger vehicle can feel unnecessary for routine trips." },
    { title: "Road links and journey planning in Ashton-in-Makerfield", body: "One of the useful things about hiring in Ashton-in-Makerfield is how quickly you can connect to surrounding routes. The A58 and A49 make it easier to move between local destinations and onward journeys, so choosing the right car depends on whether you are staying close to town or heading further out.\n\nFor shorter local driving, a Fiat 500 or Hyundai i10 Auto keeps things simple. If you expect more time on main roads, a Golf or Focus Auto gives you extra comfort without losing the easy handling that works well in Ashton-in-Makerfield." },
    { title: "Choosing the right hire vehicle in Ashton-in-Makerfield", body: "Ashton-in-Makerfield also works well as a starting point for practical day to day travel, whether that means visiting family, covering work appointments or replacing your own car for a short period. A compact hire vehicle keeps things flexible without making local movement feel cumbersome.\n\nWhen you know you will need more room, it helps to think ahead about passengers, luggage and the type of roads you will use most. We keep the choice straightforward, so Ashton-in-Makerfield drivers can move from a simple compact car to a larger vehicle if the journey calls for it." },
  ],
  bottomCtaTitle: "Book your Horwich compact car hire",
  bottomCtaDescription: "If you need a compact car in Horwich for business travel, station runs, family visits or general local driving, contact the team and we will help you choose a suitable vehicle.",
  faqKicker: "Horwich hire FAQs",
  faqTitle: "Common questions about compact car hire in Horwich",
  faqs: [
    { question: "Can I hire a compact car for local and longer trips from Horwich?", answer: "Yes, we can help arrange compact car hire for Horwich journeys ranging from local errands and work appointments to longer regional travel. Let us know where you plan to drive and we can suggest a suitable option." },
    { question: "Why choose a compact car for driving in Horwich?", answer: "A compact car is often a good fit for Horwich because it is easier to handle around the city centre, station approaches, retail parking and busy routes feeding onto the A59 and M6." },
    { question: "Do you offer automatic compact cars in Horwich?", answer: "Yes, automatic compact car availability can be checked for Horwich bookings. If you prefer automatic driving for commuting, town traffic or motorway work, ask when you contact us." },
    { question: "Is Horwich compact car hire suitable for business use?", answer: "Many customers use Horwich compact car hire for business meetings, visiting clients, station pickups, university-related travel and convenient day-to-day driving where a smaller vehicle makes access easier." },
    { question: "Can I arrange other vehicle hire in Horwich as well as compact cars?", answer: "Yes, we also support Horwich customers who need vans, minibuses or trucks. If your plans change from a small car to something larger, we can talk through the wider fleet." },
    { question: "How do I book compact car hire in Horwich?", answer: "The quickest way to arrange Horwich compact car hire is to call with your preferred timing, driving requirements and any route plans. We will then help match the booking to the right vehicle." },
  ],
}

const location8Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Salford | Small Car Rental for City Travel", description: "Compact car hire in Salford for city journeys, business travel and easy regional driving. Small cars backed by a wider vehicle hire fleet." },
  heroImage: "/images/nearby_location_image_1.jpeg",
  heroAlt: "Compact hire car approaching a busy urban route in Salford",
  heroTitle: "Compact Car Hire in Salford",
  heroDescription: "Compact car hire in Salford for city driving, work travel, station access and flexible regional trips. A sensible option when you want easy handling without giving up everyday comfort.",
  heroSecondaryActionLabel: "See available vehicles",
  mainServiceKicker: "Salford compact car hire",
  mainServiceTitle: "Smart small-car hire for Salford travel",
  mainServiceDescription: "Our Salford compact car hire service is designed for drivers who need a vehicle that works in real city conditions. Whether you are travelling for meetings, visiting family, getting around central districts or connecting onto major regional routes, a compact car gives you the flexibility to move without feeling over-committed to a larger vehicle. It is a practical fit for stop-start traffic, tighter parking and mixed-use journeys across the city.\n\nSalford driving can change quickly from urban streets to major roads, and that is exactly where compact cars perform well. They are easy to place in crowded areas yet comfortable enough for longer motorway sections when your plans extend beyond the city. If you need more carrying capacity or passenger room, we can also support Salford customers with the wider fleet.",
  mainVehicles: [
    { body: "A neat choice for Salford when you want easy parking, light steering and a compact footprint for local streets, quick errands and city-centre trips.", alt: "Fiat 500 compact hire car for Salford driving" },
    { body: "The Hyundai i10 Auto suits Salford drivers who want straightforward automatic driving for commuting, station runs and everyday travel around the city.", alt: "Hyundai i10 automatic city car available for Salford hire" },
    { body: "A practical all-rounder for Salford, with extra comfort and space for longer drives, business travel and weekends away without feeling oversized.", alt: "VW Golf hatchback hire car for Salford journeys" },
    { body: "The Focus Auto is well suited to Salford traffic, giving you automatic convenience, solid motorway comfort and useful room for passengers or luggage.", alt: "Ford Focus automatic hire car in Salford" },
  ],
  whyChooseKicker: "Why Salford drivers choose us",
  whyChooseTitle: "Why choose our compact car hire in Salford",
  whyChooseDescription: "When you need compact car hire in Salford, the details matter. You want a vehicle that makes city driving simpler, collection straightforward and onward travel less of a faff. Our compact range is chosen for practical day-to-day use, whether you are staying local or heading out across Greater Salford.",
  whyChooseItems: [
    { title: "Well suited to local use", body: "Compact cars make day to day Tyldesley travel easier, particularly when you want straightforward driving and simpler parking." },
    { title: "Practical vehicle choice", body: "Our fleet includes compact manuals, automatics and larger hatchbacks so you can choose what feels right for Tyldesley journeys." },
    { title: "Simple to arrange", body: "We keep the booking process clear and focused on what you actually need for the trip." },
    { title: "Flexible for mixed driving", body: "Tyldesley travel can range from short local errands to wider road use, and compact cars are a strong fit for both." },
    { title: "Practical hire guidance", body: "Useful if you are heading into Salford for work, shopping, social plans or station connections and want a car that is simple to handle in busy streets." },
    { title: "Wider vehicle options", body: "If you need something beyond a compact car in Salford, we can also help with vans, minibuses and trucks through the wider fleet." },
  ],
  additionalServicesKicker: "More Salford vehicle choices",
  additionalServicesTitle: "Extra hire options beyond compact cars in Salford",
  additionalServicesDescription: "As well as compact car hire in Salford, we can arrange larger saloons, estates, SUVs and executive vehicles for journeys that call for extra room or added comfort. The wider fleet also includes vans, minibuses and trucks for more demanding transport needs.",
  additionalVehicles: [
    { body: "A useful estate for Tyldesley trips that call for extra boot room without stepping up to a much larger vehicle.", alt: "Ford Focus Estate hire car for Tyldesley travel" },
    { body: "A comfortable choice for Tyldesley drivers covering longer road miles or business travel with a more relaxed feel.", alt: "Ford Mondeo hire car in Tyldesley" },
    { body: "An automatic saloon that suits Tyldesley journeys where smooth driving and cabin comfort matter more.", alt: "Ford Mondeo automatic hire car for Tyldesley" },
    { body: "A practical option for Tyldesley customers who need room for luggage, equipment or larger personal loads.", alt: "Ford Mondeo Estate hire car for Tyldesley journeys" },
    { body: "A flexible automatic with a higher seating position, useful for Tyldesley travel that mixes local roads with longer runs.", alt: "Toyota RAV4 automatic hire vehicle in Tyldesley" },
    { body: "A refined car for Tyldesley business journeys, client visits or personal trips where comfort is the priority.", alt: "Mercedes C Class automatic hire car for Tyldesley" },
    { body: "A roomy executive automatic for Tyldesley drivers who want extra space and a quieter drive on longer routes.", alt: "Mercedes E Class automatic hire car in Tyldesley" },
    { body: "A spacious premium option for Tyldesley journeys with more passengers, more luggage or a preference for a higher driving position.", alt: "Range Rover hire vehicle for Tyldesley travel" },
  ],
  featureCtaTitle: "Check Salford compact car options",
  featureCtaDescription: "Need a small car that suits Salford traffic, business travel and easier parking? Contact us to check compact car availability for your Salford journey.",
  serviceAreasKicker: "Across Salford",
  serviceAreasTitle: "Vehicle hire covering Salford and surrounding routes",
  serviceAreasDescription: "We provide compact car hire for Salford travel, covering city-centre use, local districts and onward regional routes. If you need something larger, vans, minibuses and trucks are also available through the wider service.",
  localRelevanceKicker: "Salford driving guide",
  localRelevanceTitle: "Why compact car hire makes sense in Salford",
  localRelevanceDescription: "Salford is one of the clearest places to see the value of a compact hire car. Journeys often involve traffic-heavy corridors, city-centre turns, controlled parking areas and quick changes between urban streets and major road links. A smaller vehicle takes the pressure out of that. It is easier to manoeuvre around the inner districts, simpler to park and well suited to drivers who want a car that feels calm rather than bulky in busier conditions.\n\nThe city also demands flexibility. One trip may keep you near Salford Piccadilly or Oxford Road, while the next heads out via the Mancunian Way, M60 or M62. Compact cars work well because they bridge both styles of travel. You get something practical for dense city movement but still comfortable enough for longer runs beyond Salford.",
  localRelevanceBlocks: [
    { title: "Everyday driving around Tyldesley", body: "Tyldesley is the kind of place where a compact hire car often makes daily travel easier. Many journeys are local, practical and made up of short runs between residential areas, shops and routine appointments, so having a car that feels light and manageable is a real advantage.\n\nFor that sort of driving, a small hatchback or compact automatic keeps things simple. You get the flexibility of a self-drive vehicle without the bulk of something larger than the journey really needs." },
    { title: "Using Tyldesley for onward journeys", body: "Tyldesley also benefits from strong onward road links, especially via the A580 East Lancashire Road, which helps with travel beyond town. That makes compact hire a sensible middle ground. You can stay comfortable on a longer run while still keeping the car easy to park and handle when you return to local streets.\n\nIf your day involves mixed travel, it is worth thinking about time on faster roads as well as town access. Drivers staying mostly local may prefer the smallest options, while those using Tyldesley as a starting point for wider journeys often benefit from a Golf or Focus Auto." },
    { title: "Matching the car to the trip in Tyldesley", body: "Because travel needs in Tyldesley can shift quickly, the right vehicle often comes down to what the day actually looks like. A simple town based plan may call for a compact city car, while a longer route with passengers or luggage may need a larger hatchback or estate.\n\nWe keep that choice practical. Tyldesley customers can hire a compact car for convenience, then step into a larger vehicle if the journey changes. That flexibility also extends across our wider fleet when a van, minibus or truck becomes the better fit." },
  ],
  bottomCtaTitle: "Arrange your Salford compact car hire",
  bottomCtaDescription: "If you need a compact car in Salford for work, city travel, station pickups or a wider regional journey, get in touch and we will help you line up the right vehicle.",
  faqKicker: "Salford hire FAQs",
  faqTitle: "Helpful answers for compact car hire in Salford",
  faqs: [
    { question: "Why is a compact car a good option for driving in Salford?", answer: "A compact car is often ideal for Salford because it is easier to handle in dense traffic, city-centre parking areas, residential streets and busy approach roads while still being comfortable for longer drives." },
    { question: "Can I book compact car hire in Salford for business use?", answer: "Yes, Salford compact car hire works well for business travel, meetings, office visits, client appointments and general professional use where you want a vehicle that is tidy, practical and easy to park." },
    { question: "Do you have automatic compact cars available in Salford?", answer: "Automatic compact car availability can be checked for Salford bookings. If you expect heavier traffic or simply prefer automatic driving in the city, let us know when you enquire." },
    { question: "Is compact car hire in Salford useful for station and city-centre travel?", answer: "Yes, many customers use Salford compact car hire for rail station access, city-centre stays and straightforward onward travel. A smaller car is often easier to live with around busy arrival and parking points." },
    { question: "Can I arrange other vehicle hire in Salford through the same service?", answer: "Yes, alongside compact cars we can also help Salford customers with vans, minibuses and trucks when the journey or load calls for something larger." },
    { question: "How do I arrange compact car hire in Salford?", answer: "To book compact car hire in Salford, call with your travel dates, preferred vehicle type and any key route details. We will help you choose a suitable option for the journey." },
  ],
}

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  "compact-car": createContentSet({
    tokens: homepageTokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "main-flow-vehicles",
    currentLocationName: siteConfig.locationName,
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  "van-hire": createContentSet({
    tokens: vanHireTokens,
    mainVehicleNames: vanMainNames,
    mainVehicleImages: vanMainImages,
    inventorySectionId: "van-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
  "truck-hire": createContentSet({
    tokens: truckHireTokens,
    mainVehicleNames: truckMainNames,
    mainVehicleImages: truckMainImages,
    inventorySectionId: "truck-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
  "minibus-hire": createContentSet({
    tokens: minibusHireTokens,
    mainVehicleNames: minibusMainNames,
    mainVehicleImages: minibusMainImages,
    inventorySectionId: "minibus-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
}

export const locationPageContents: Record<number, ServicePageContent> = {
  1: createContentSet({
    tokens: location1Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location1-vehicles",
    currentLocationName: "Bury",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  2: createContentSet({
    tokens: location2Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location2-vehicles",
    currentLocationName: "Wigan",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  3: createContentSet({
    tokens: location3Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location3-vehicles",
    currentLocationName: "Chorley",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  4: createContentSet({
    tokens: location4Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location4-vehicles",
    currentLocationName: "Leigh",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  5: createContentSet({
    tokens: location5Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location5-vehicles",
    currentLocationName: "Farnworth",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  6: createContentSet({
    tokens: location6Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location6-vehicles",
    currentLocationName: "Westhoughton",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  7: createContentSet({
    tokens: location7Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location7-vehicles",
    currentLocationName: "Horwich",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  8: createContentSet({
    tokens: location8Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location8-vehicles",
    currentLocationName: "Salford",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
}

