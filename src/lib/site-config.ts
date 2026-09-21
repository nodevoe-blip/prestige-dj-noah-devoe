/**
 * Single source of truth for business facts, NAP, and site navigation.
 * Fields still wrapped in [BRACKETS] are the ones we don't have real data
 * for yet. Never populate AggregateRating / Review schema with invented
 * numbers.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://djnoahdevoe.com";

export const prestige = {
  name: "Prestige Weddings & Events",
  legalName: "Prestige Weddings & Events LLC",
  shortName: "Prestige",
  description:
    "Michigan wedding DJ, photography, videography, day-of coordination, photo booth, and lighting — one team, fully booked around your date.",
  founded: "2008",
  telephone: "248-978-5137",
  email: "noah@prestigeweddings.com",
  priceRange: "$$-$$$",
  address: {
    streetAddress: "1700 W Hamlin Rd, Suite 200",
    addressLocality: "Rochester Hills",
    addressRegion: "MI",
    postalCode: "48309",
    addressCountry: "US",
  },
  geo: {
    // Rochester Hills, MI city-center coordinates — swap for the exact
    // building geocode if precision matters for local-pack ranking.
    latitude: 42.6583,
    longitude: -83.1499,
  },
  sameAs: [
    "https://www.weddingwire.com/biz/prestige-entertainment-rochester",
    "https://www.theknot.com/marketplace/prestige-weddings-and-events-rochester-hills-mi-594649",
    "https://www.zola.com/wedding-vendors/wedding-bands-djs/prestige-entertainment-dj-photo-booth-video",
    "https://www.instagram.com/prestige_weddings_events/",
    "https://www.facebook.com/prestigewedding/",
    "https://www.trustindex.io/reviews/www.prestigeweddings.com",
  ],
  // Sourced from WeddingWire's own listing (checked 2026-09). Review counts
  // grow — re-check the live number periodically rather than treating this
  // as permanent. This is the only rating data in the codebase actually
  // wired into AggregateRating schema; never add another without a real,
  // checkable source like this one.
  aggregateRating: {
    ratingValue: 5.0,
    reviewCount: 233,
    source: "WeddingWire",
  },
  awards: [
    "WeddingWire Couples' Choice Award — 11 years (2013, 2014, 2018–2026)",
    "The Knot Best of Weddings — 4+ years",
  ],
} as const;

export const noah = {
  name: "Noah DeVoe",
  jobTitle: "Co-Owner, Detroit Lead DJ/MC",
  bio: "Co-owner of Prestige Weddings & Events and its Detroit-market lead DJ/MC.",
  sameAs: ["https://www.instagram.com/noah_devoe/"],
} as const;

/** Real, given numbers — single source so every page stays in sync. */
export const stats = {
  weddingsServedCompanyWide: "4,000+",
  weddingsDjdByNoah: "600+",
  yearsInBusiness: `${new Date().getFullYear() - 2008}`,
  teamDjStartingPrice: "$1,545",
  noahStartingPrice: "$2,545",
} as const;

/** The company's actual founder — distinct from Noah, who is a co-owner. */
export const founder = {
  name: "Mike",
  jobTitle: "Founder, Detroit Boutique DJ/MC",
} as const;

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  market: "Detroit" | "Grand Rapids";
  bio: string;
  image: string;
  profileUrl: string | null;
};

/**
 * Full real roster, scraped from prestigeweddings.com/dj-team on 2026-09-09.
 * Photos live at /images/team/{slug}.webp (downloaded + compressed from the
 * live site's Wix-hosted originals).
 */
export const team: TeamMember[] = [
  { slug: "mike", name: "Mike", title: "Founder | Detroit Boutique DJ/MC", market: "Detroit", bio: "The guy that started it all, Mike is the backbone of all things Prestige. He's the foundation for the company's customized feel and excellent customer service. And he can play the heck out of some music on the turntables.", image: "/images/team/mike.webp", profileUrl: "https://www.prestigeweddings.com/mike" },
  { slug: "noah", name: "Noah", title: "Co-Owner | Detroit Lead Boutique DJ/MC", market: "Detroit", bio: "Noah will bring the life to the party, wherever he's at. Want your event to rock? Want people on the floor all night long? This is your guy. Everyone who's held a party with this guy at the helm has raved about him.", image: "/images/team/noah.webp", profileUrl: "/noah-devoe" },
  { slug: "spencer", name: "Spencer", title: "Detroit Boutique DJ/MC | DJ Op. Manager", market: "Detroit", bio: "Spencer knows how to create an atmosphere that you and your guests will remember and enjoy. With a keen eye for details and a calm approach, Spencer will be there every step of the way to ensure your wedding is one for the books.", image: "/images/team/spencer.webp", profileUrl: "https://www.prestigeweddings.com/spencer" },
  { slug: "dan", name: "Dan", title: "Detroit Boutique DJ/MC", market: "Detroit", bio: "Dan has a vast background in the DJ world and has the tools to create a great party. He's super upbeat and extremely service-oriented — your event will not only be fun, but will be highly personalized to your exact specifications.", image: "/images/team/dan.webp", profileUrl: "https://www.prestigeweddings.com/dan" },
  { slug: "logan", name: "Logan", title: "Detroit DJ/MC | DJ Equipment Manager", market: "Detroit", bio: "Logan is the ultimate MC and loves getting your guests amped up for an amazing evening. In addition to DJing, he is a music producer and loves the Michigan hip-hop scene. His charming personality makes him the perfect man to have as your DJ and MC for your wedding!", image: "/images/team/logan.webp", profileUrl: "https://www.prestigeweddings.com/logan" },
  { slug: "nathan", name: "Nathan", title: "Detroit DJ/MC | Photo Booth Manager", market: "Detroit", bio: "Nathan knows how to mix! Not only is he a phenomenal wedding DJ, he is a trained percussionist and loves producing music. Nathan has a relaxed personality and his presence on the mic is a perfect blend of energetic and genuine. Be ready for an amazing night!", image: "/images/team/nathan.webp", profileUrl: "https://www.prestigeweddings.com/nathan" },
  { slug: "will", name: "Will", title: "Detroit DJ/MC", market: "Detroit", bio: "Will has a passion for music and loves creating a fun-filled atmosphere. He has a smooth style and is very creative with his dance floor setlists. Will is a calm, yet assertive MC and his relaxed personality is perfect for a stress free event.", image: "/images/team/will.webp", profileUrl: "https://www.prestigeweddings.com/will" },
  { slug: "alec", name: "Alec", title: "Detroit DJ/MC", market: "Detroit", bio: "Alec has years of experience in the musical world. His caring approach and laid-back personality makes him the type of guy that everyone wants to be friends with. Alec is an expert at managing all aspects of a wedding and will make sure your day is fun and stress-free.", image: "/images/team/alec.webp", profileUrl: "https://www.prestigeweddings.com/alec" },
  { slug: "brandon-a", name: "Brandon A.", title: "Detroit DJ/MC", market: "Detroit", bio: "With his infectious energy and approachable nature, he's the guy you want as your wedding MC/host. When it's time to turn up the fun, Brandon is the ultimate DJ, ready to unleash an incredible selection of tunes that will have everyone on the dance floor.", image: "/images/team/brandon-a.webp", profileUrl: "https://www.prestigeweddings.com/brandona" },
  { slug: "tito", name: "Tito", title: "Detroit DJ/MC", market: "Detroit", bio: "DJ Tito is dedicated to ensuring you have the best time, surrounded by your closest friends and family. With a passion for creating unforgettable moments, Tito's goal is to keep the dance floor alive all night long, with a carefully curated playlist and seamless transitions.", image: "/images/team/tito.webp", profileUrl: "https://www.prestigeweddings.com/tito" },
  { slug: "fadi", name: "Fadi", title: "Detroit DJ/MC (Trilingual: Arabic, Turkish, English)", market: "Detroit", bio: "With genuine warmth and dedication, Fadi ensures your day is truly yours. Passionate about personalizing each event, Fadi's professionalism and attentiveness shine through. From curating the perfect playlist to seamless transitions, Fadi creates unforgettable moments tailored to your unique style.", image: "/images/team/fadi.webp", profileUrl: "https://www.prestigeweddings.com/fadi" },
  { slug: "michael", name: "Michael", title: "Detroit DJ/MC", market: "Detroit", bio: "Michael's calm, feel good energy makes every event feel effortless and fun. Always smiling and in tune with the crowd, he keeps the dance floor moving with seamless transitions. While he loves throwbacks and techno, he tailors every playlist to match your vibe, creating a celebration that's uniquely yours.", image: "/images/team/michael.webp", profileUrl: "https://www.prestigeweddings.com/michael" },
  { slug: "bryan", name: "Bryan", title: "Detroit DJ/MC", market: "Detroit", bio: "Bryan got his start in the clubs around Boston and New York and he knows how to pack a dance floor. With lots of energy and a supremely positive vibe, you'll be so glad Bryan was your wedding DJ!", image: "/images/team/bryan.webp", profileUrl: "https://www.prestigeweddings.com/bryan" },
  { slug: "jeff-d", name: "Jeff D.", title: "Detroit DJ/MC", market: "Detroit", bio: "Jeff, a true Detroiter, brings expert mixing skills and a deep love for music to every event. His seamless transitions and instinct for reading the crowd keep the dance floor alive, ensuring an unforgettable celebration from start to finish.", image: "/images/team/jeff-d.webp", profileUrl: "https://www.prestigeweddings.com/jeffd" },
  { slug: "devin", name: "Devin", title: "Detroit DJ/MC", market: "Detroit", bio: "With an engineering background, Devin brings precision and a sharp ear for detail to every event. A talented mixer and polished MC, he seamlessly blends tracks and hypes up the crowd, ensuring a flawless, high-energy celebration.", image: "/images/team/devin.webp", profileUrl: null },
  { slug: "thomas", name: "Thomas", title: "Detroit DJ/MC", market: "Detroit", bio: "Thomas is a well-rounded DJ with a deep love for music and a knack for reading the room. His extensive music knowledge and passion for the craft ensure every event feels effortless, engaging, and perfectly in tune with the crowd.", image: "/images/team/thomas.webp", profileUrl: null },
  { slug: "jeff-c", name: "Jeff C.", title: "Detroit DJ/MC (Bilingual: Spanish, English)", market: "Detroit", bio: "Jeff C is a skilled mixer with a true passion for music and DJing. Active in the nightlife scene, he knows how to bring the perfect balance of energy and flow to any event, keeping the party going with seamless transitions and a dynamic presence.", image: "/images/team/jeff-c.webp", profileUrl: "https://www.prestigeweddings.com/jeffc" },
  { slug: "tom", name: "Tom", title: "Detroit DJ/MC", market: "Detroit", bio: "Tom might be the most knowledgeable DJ/MC on our team! His background in sound systems and lighting led to becoming a professional DJ, and the rest is history. You will love having Tom hype up your crowd and pack your dance floor!", image: "/images/team/tom.webp", profileUrl: "https://www.prestigeweddings.com/tom" },
  { slug: "ricky", name: "Ricky", title: "Detroit DJ/MC", market: "Detroit", bio: "DJ Ricky is passionate about making your day unforgettable. His friendly and easygoing nature ensures a smooth and enjoyable experience. Dedicated to creating a fun atmosphere, Ricky is committed to making sure every moment of your celebration is special.", image: "/images/team/ricky.webp", profileUrl: null },
  { slug: "brandon-m", name: "Brandon M.", title: "Grand Rapids Co-Owner + DJ/MC", market: "Grand Rapids", bio: "Meet Brandon, your go-to DJ/MC and Co-Owner of Prestige GR. With a passion for crafting unforgettable experiences, he brings both expertise and enthusiasm to every event. Fun fact: Brandon is also the in-house DJ for Central Michigan's football and men + women's basketball teams. Fire Up Chips!", image: "/images/team/brandon-m.webp", profileUrl: "https://www.prestigeweddings.com/brandonm" },
  { slug: "ayden", name: "Ayden", title: "Grand Rapids DJ/MC", market: "Grand Rapids", bio: "Meet Ayden, your GR DJ/MC, who discovered his passion for DJing through mastering smooth transitions and energizing the crowd. Ayden loves nothing more than getting people out on the dance floor and creating an atmosphere where everyone can let loose.", image: "/images/team/ayden.webp", profileUrl: "https://www.prestigeweddings.com/ayden" },
  { slug: "jack", name: "Jack", title: "Grand Rapids DJ/MC", market: "Grand Rapids", bio: "Jack is your GR DJ/MC who knows how to turn any event into an unforgettable party. His journey into DJing began with a fascination for smooth transitions, creating the ultimate dance floor experience. Jack's ability to read the room and keep the energy alive ensures a night of fun and lasting memories.", image: "/images/team/jack.webp", profileUrl: "https://www.prestigeweddings.com/jack" },
  { slug: "collin", name: "Collin", title: "Grand Rapids DJ/MC", market: "Grand Rapids", bio: "Meet Collin, your DJ/MC with years of experience creating unforgettable celebrations. He started DJing at 16 and has been hooked ever since! As a seasoned PA sports announcer for MSU, CMU, and GVSU, commanding a mic and energizing a crowd comes naturally. Collin is committed to keeping your day seamless, elevated, and full of energy!", image: "/images/team/collin.webp", profileUrl: "https://www.prestigeweddings.com/collin" },
  { slug: "kiel", name: "Kiel", title: "Grand Rapids DJ/MC", market: "Grand Rapids", bio: "Meet Kiel, your GR DJ/MC, dedicated to flawlessly orchestrating your event and creating a personalized experience for your day. With a passion for excellence and a knack for keeping the flow smooth, Kiel ensures every moment is unforgettable. Get ready for a tailored and seamless celebration!", image: "/images/team/kiel.webp", profileUrl: "https://www.prestigeweddings.com/kiel" },
  { slug: "alex", name: "Alex", title: "Grand Rapids DJ/MC", market: "Grand Rapids", bio: "Meet Alex, your GR DJ/MC, dedicated to crafting unforgettable memories and delivering epic experiences. With a passion for excellence, Alex ensures a seamless and unforgettable event, keeping the energy high and the dance floor packed. Get ready for a night to remember with Alex at the helm.", image: "/images/team/alex.webp", profileUrl: null },
];

export type ServiceArea = {
  slug: string;
  name: string;
  region: string;
  blurb: string;
  live: boolean;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "oakland-county",
    name: "Oakland County",
    region: "Metro Detroit",
    blurb: "Birmingham, Rochester, Clarkston, Novi, Troy & the northern Woodward corridor.",
    live: true,
  },
  {
    slug: "metro-detroit",
    name: "Metro Detroit",
    region: "Southeast Michigan",
    blurb: "Shelby Township, downtown Detroit, Eastern Market, Fenton & Brighton.",
    live: true,
  },
  {
    slug: "grand-rapids",
    name: "Grand Rapids",
    region: "West Michigan",
    blurb: "Grand Rapids, Rockford & the Grand River valley — led locally by co-owner Brandon.",
    live: true,
  },
  {
    slug: "southwest-michigan",
    name: "Southwest Michigan",
    region: "Southwest Michigan",
    blurb: "Kalamazoo, St. Joseph & the lakeshore wine-country venues.",
    live: false,
  },
  {
    slug: "traverse-city",
    name: "Traverse City",
    region: "Northern Michigan",
    blurb: "Traverse City, Old Mission & Leelanau Peninsula vineyard weddings.",
    live: false,
  },
];

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  blurb: string;
  /** Full path — the DJ flagship lives at /wedding-dj, not /services/wedding-dj */
  path: string;
};

export const services: Service[] = [
  {
    slug: "wedding-dj",
    name: "Wedding DJ & MC",
    shortName: "DJ & MC",
    blurb: "A full team of Michigan wedding DJs — ceremony sound through last dance.",
    path: "/wedding-dj",
  },
  {
    slug: "photography",
    name: "Wedding Photography",
    shortName: "Photography",
    blurb: "Full-day coverage from getting-ready through the last dance.",
    path: "/services/photography",
  },
  {
    slug: "videography",
    name: "Wedding Videography",
    shortName: "Videography",
    blurb: "Cinematic highlight films and full ceremony/reception footage.",
    path: "/services/videography",
  },
  {
    slug: "coordination",
    name: "Day-Of Coordination",
    shortName: "Coordination",
    blurb: "A dedicated coordinator running your timeline so you don't have to.",
    path: "/services/coordination",
  },
  {
    slug: "photo-booth",
    name: "Photo Booth",
    shortName: "Photo Booth",
    blurb: "Open-air or enclosed booths with instant prints and digital sharing.",
    path: "/services/photo-booth",
  },
  {
    slug: "lighting",
    name: "Lighting & Effects",
    shortName: "Lighting",
    blurb: "Uplighting, dance-floor washes, monograms, and cold-spark effects.",
    path: "/services/lighting",
  },
];

export type Venue = {
  slug: string;
  name: string;
  city: string;
  /** service-area slug this venue belongs to, for cross-linking */
  regionSlug: string;
  blurb: string;

  // Researched public facts — venue history/character/capacity, sourced from
  // public listings and the venue's own material. NOT Noah's personal
  // account, and must never be phrased as if it were.
  about?: string;
  spaces?: string;
  publicParkingNotes?: string;
  /** A policy the venue itself publishes (e.g. a stated curfew) — safe to
   * state as fact since it's the venue's own published rule, not hearsay. */
  publishedPolicies?: string;

  // Noah's own firsthand account. Leave undefined until he's actually
  // confirmed it — a venue page with every field forced full of guesses
  // isn't honest, and a real venue's own reception doesn't need doorway-page
  // padding to be worth a page.
  weddingsWorked?: string;
  ceremonySetup?: string;
  receptionSetup?: string;
  djPlacement?: string;
  audioNotes?: string;
  loadIn?: string;
  parking?: string;
  noiseRestrictions?: string;
  danceFloorNotes?: string;
  photos?: string[]; // filenames under /public/images/portfolio, no extension
};

// Venues below all have confirmed real Noah/Prestige experience — either a
// named couple's review at that address, dated wedding-video folders Noah
// confirmed are his own, or Prestige's own photo captions naming the venue.
// General facts are researched/public; firsthand fields stay empty until
// Noah confirms them directly (see the questionnaire).
export const venues: Venue[] = [
  {
    slug: "packard-proving-grounds",
    name: "Packard Proving Grounds",
    city: "Shelby Township, MI",
    regionSlug: "metro-detroit",
    blurb: "A 17-acre historic automotive proving ground turned event venue, anchored by the 6,400 sq. ft. Repair Garage.",
    about: "Built in 1928 for the Packard Motor Car Company and designed by Albert Kahn, the property is listed on the National Register of Historic Places. Ceremonies are typically held in the Lodge Garage or along the tree-lined boulevard under its iron gate.",
    spaces: "The Repair Garage seats up to roughly 296 for a reception. The Lodge Garage seats about 200 theater-style for an indoor ceremony. A courtyard between the two garages is commonly used for cocktail hour.",
    weddingsWorked: "2 weddings DJ'd here since 2023",
    photos: ["packard-proving-grounds-01"],
  },
  {
    slug: "addison-oaks",
    name: "Addison Oaks",
    city: "Leonard, MI",
    regionSlug: "oakland-county",
    blurb: "An Oakland County Parks estate built around the 1927–28 Buhl family manor, with a banquet room, outdoor deck, and dedicated wedding garden.",
    about: "Addison Oaks is an Oakland County Parks property spanning roughly 750–1,000 acres, centered on the English Tudor-style Buhl Estate manor house.",
    spaces: "The banquet room holds up to roughly 500 for cocktails and reception and opens onto an outdoor deck. A separate garden room suits smaller gatherings, and there's a dedicated outdoor wedding garden for ceremonies.",
    weddingsWorked: "3 weddings DJ'd here since 2023",
    photos: ["addison-oaks-01"],
  },
  {
    slug: "the-gem-theatre",
    name: "The Gem Theatre",
    city: "Detroit, MI",
    regionSlug: "metro-detroit",
    blurb: "A 1927 Spanish Revival former movie house in downtown Detroit, on the National Register of Historic Places.",
    about: "Reported capacity varies by configuration and source, generally cited from 150 up to 400+. Ceremonies can be held on the proscenium stage; the reception space includes a lower-level dining room and a landscaped outdoor patio.",
    publicParkingNotes: "The venue has its own attached parking deck.",
  },
  {
    slug: "the-whiskey-factory",
    name: "The Whiskey Factory",
    city: "Detroit, MI (Eastern Market)",
    regionSlug: "metro-detroit",
    blurb: "A second-floor event space above Detroit City Distillery in Eastern Market, lined with whiskey barrels around an original 1920s bar.",
    about: "The historic event floor is roughly 5,000–7,000 sq. ft. with freight-elevator access, holding about 200 seated or 250 standing.",
    publicParkingNotes: "Street parking near the venue is limited; Eastern Market's lots across the street are commonly used as overflow parking.",
    weddingsWorked: "1 wedding DJ'd here since 2023",
    photos: ["the-whiskey-factory-01"],
  },
  {
    slug: "vale-royal-barn",
    name: "Vale Royal Barn",
    city: "Fenton, MI",
    regionSlug: "metro-detroit",
    blurb: "A restored 1830s dairy barn on an 8-acre private estate, booked exclusively for the weekend.",
    about: "The venue offers exclusive Friday–Sunday use, a 2,200 sq. ft. dining room with a chandelier and indoor bar, and four separate ceremony sites: a covered bridge, a riverside dock, a garden courtyard, and the woodlands. Capacity runs roughly 150–160 including vendors, with golf carts available to move around the grounds.",
    publishedPolicies: "Per the venue's own published guidelines, music must end by 11:30pm and the event must be over by midnight.",
    weddingsWorked: "1 wedding DJ'd here since 2023",
    photos: ["vale-royal-barn-01"],
  },
  {
    slug: "planterra-conservatory",
    name: "Planterra Conservatory",
    city: "West Bloomfield Township, MI",
    regionSlug: "oakland-county",
    blurb: "A Belgian-glass, three-greenhouse conservatory — roughly 23,000 sq. ft. — with wedding season running September through May.",
    about: "Capacity runs up to about 200 for a reception, with some ceremony configurations seating up to 100. Prestige's own photo galleries include shots captioned “DJ Noah | Planterra,” confirming he's personally DJ'd here.",
    weddingsWorked: "2 weddings DJ'd here since 2023",
    photos: ["planterra-conservatory-01"],
  },
  {
    slug: "brewery-becker",
    name: "Brewery Becker",
    city: "Brighton, MI",
    regionSlug: "metro-detroit",
    blurb: "A historic late-1800s building in downtown Brighton, with an event space spanning two upper floors connected by wrought-iron stairs.",
    about: "Hickory wood floors and tall arched windows define the event space. The venue requires guests to be 21+.",
    weddingsWorked: "1 wedding DJ'd here since 2023",
    photos: ["brewery-becker-01"],
  },
  {
    slug: "fenton-winery-brewery",
    name: "Fenton Winery & Brewery",
    city: "Fenton, MI",
    regionSlug: "metro-detroit",
    blurb: "A rustic reception space with an indoor waterfall feature, an acre of outdoor gardens, and an on-site brewery taproom.",
    about: "The reception area seats up to 280 and features a dance floor, an indoor waterfall, and a bar built from oak barrels and repurposed pallet wood. Ceremonies can be held indoors or outdoors among an acre of gardens. A separate in-brewery taproom hosts smaller events like rehearsal dinners, up to about 30 guests.",
    spaces: "The venue is booked exclusively for the day, with a private bridal suite, groom's fitting rooms, and an outdoor patio with a brick fireplace.",
    weddingsWorked: "7 weddings DJ'd here since 2023",
    photos: ["fenton-winery-brewery-01"],
  },
  {
    slug: "creekside-acres",
    name: "Creekside Acres",
    city: "Goodrich, MI",
    regionSlug: "metro-detroit",
    blurb: "A 4,200 sq. ft. monitor-style barn with a 25-foot-ceilinged Great Room and a 70-foot covered porch for sunset views.",
    about: "The Great Room spans roughly 3,150 sq. ft. with 25-foot ceilings and includes a designated DJ area, dance floor, full bar, and ceremony space, all in one room. The barn is heated and cooled for year-round use.",
    spaces: "The Great Room seats up to 200 guests. A 70-foot covered porch runs the length of the barn for cocktail hour or sunset photos.",
    weddingsWorked: "9 weddings DJ'd here since 2023",
    photos: ["creekside-acres-01"],
  },
  {
    slug: "meadow-brook-hall",
    name: "Meadow Brook Hall",
    city: "Rochester, MI",
    regionSlug: "oakland-county",
    blurb: "A Tudor-revival mansion on Oakland University's campus, with a climate-controlled Garden Tent and the historic Christopher Wren Dining Room.",
    about: "Built in the late 1920s as the Matilda Dodge Wilson estate, Meadow Brook Hall can host up to 300 guests. Ceremonies are held in one of two outdoor gardens or the indoor ballroom, which seats 100 facing the fireplace or 150 facing its stained-glass windows.",
    spaces: "The climate-controlled Garden Tent (available April–October) holds up to 400 standing or around 300 seated. Indoor receptions in the Christopher Wren Dining Room seat 100.",
    weddingsWorked: "5 weddings DJ'd here since 2023",
    photos: ["meadow-brook-hall-01"],
  },
  {
    slug: "grosse-pointe-war-memorial",
    name: "Grosse Pointe War Memorial",
    city: "Grosse Pointe Farms, MI",
    regionSlug: "metro-detroit",
    blurb: "A lakefront estate on Lake St. Clair with a modern ballroom, a historic mansion, and grounds for an outdoor ceremony.",
    about: "The Crystal Ballroom in the venue's Fred M. Alger Center seats up to 250, or up to 450 combined with the adjoining Community Room. The historic Alger House offers three connected rooms for an intimate reception of around 70.",
    spaces: "Outdoor ceremonies on the back lawn hold up to 500 seated; an indoor ceremony in the Community Room holds up to 300.",
    weddingsWorked: "4 weddings DJ'd here since 2023",
    photos: ["grosse-pointe-war-memorial-01"],
  },
  {
    slug: "tandale-nature-barn",
    name: "Tandale Nature Barn",
    city: "Brighton, MI",
    regionSlug: "metro-detroit",
    blurb: "A certified wildlife-habitat barn on 25 acres in Livingston County, with multiple outdoor ceremony sites and a treehouse honeymoon suite.",
    about: "The venue holds up to 220 guests across its barn, patio, and grounds. It's a certified wildlife habitat with several distinct outdoor ceremony locations spread across the property.",
    weddingsWorked: "4 weddings DJ'd here since 2023",
    photos: ["tandale-nature-barn-01"],
  },
  {
    slug: "saint-johns-resort",
    name: "Saint John's Resort",
    city: "Plymouth, MI",
    regionSlug: "metro-detroit",
    blurb: "A resort with several ballrooms, from the intimate Provincial Room to the 1,500-guest Monarch Ballroom that opened in 2025.",
    about: "Event spaces range widely: the Monarch Ballroom holds up to 1,500, the Garden Pavilion up to 500, the glass-ceilinged Atrium up to 300, and the Mosaic and Provincial Ballrooms 300–320 each.",
    weddingsWorked: "4 weddings DJ'd here since 2023",
    photos: ["saint-johns-resort-01"],
  },
  {
    slug: "cherry-creek-golf-club",
    name: "Cherry Creek Golf Club",
    city: "Shelby Township, MI",
    regionSlug: "metro-detroit",
    blurb: "A golf-club banquet center with a divisible Lakeview Ballroom and a terrace overlooking the course.",
    about: "The Lakeview Ballroom splits into two 100-guest rooms or opens into one 230-guest space. The Terrace and Conservatory area seats up to 165, and the full clubhouse can handle up to 700 for a seated meal.",
    weddingsWorked: "4 weddings DJ'd here since 2023",
    photos: ["cherry-creek-golf-club-01"],
  },
  {
    slug: "pine-knob-mansion-carriage-house",
    name: "Pine Knob Mansion & Carriage House",
    city: "Clarkston, MI",
    regionSlug: "oakland-county",
    blurb: "Two wedding venues on one 850-acre Clarkston estate — the intimate Mansion and the larger Carriage House with its own outdoor pavilion.",
    about: "The Mansion holds up to 150 guests. The Carriage House is the larger of the two, holding up to 280, with a covered outdoor pavilion for ceremonies, cocktail hour, or outdoor dancing.",
    weddingsWorked: "4 weddings DJ'd here since 2023",
    photos: ["pine-knob-mansion-carriage-house-01"],
  },
  {
    slug: "shepherds-hollow-golf-club",
    name: "Shepherd's Hollow Golf Club",
    city: "Clarkston, MI",
    regionSlug: "oakland-county",
    blurb: "A 350-acre golf course estate anchored by the Station — a glass-walled event hall styled after a 19th-century European train station.",
    about: "The Station is a 6,000 sq. ft. event hall that holds up to 325 guests, with glass walls overlooking a lake and pine forest. The clubhouse also has a wraparound veranda over the golf course.",
    weddingsWorked: "3 weddings DJ'd here since 2023",
    photos: ["shepherds-hollow-golf-club-01"],
  },
  {
    slug: "royal-park-hotel",
    name: "Royal Park Hotel",
    city: "Rochester, MI",
    regionSlug: "oakland-county",
    blurb: "A downtown Rochester hotel with a Grand Ballroom, a Belgian-glass conservatory, and an outdoor Park Pavilion.",
    about: "The Royal Grand Ballroom spans roughly 10,440 sq. ft. and can seat up to 700 for dinner or hold up to 1,000 for a reception, with Murano crystal chandeliers and an Italian marble gallery. Smaller weddings can use the Belgian Glass Conservatory or the outdoor Park Pavilion instead.",
    weddingsWorked: "2 weddings DJ'd here since 2023",
    photos: ["royal-park-hotel-01"],
  },
  {
    slug: "roostertail",
    name: "Roostertail",
    city: "Detroit, MI",
    regionSlug: "metro-detroit",
    blurb: "A Detroit River waterfront venue since 1958, with floor-to-ceiling windows over the marina and the city skyline.",
    about: "Three event spaces scale from the 15–90 guest Club Room to the 100–250 guest Marine Room to the 125–800 guest Palm River Room. Two outdoor ceremony spaces sit along the water, with private entrances to patios and balconies.",
    weddingsWorked: "1 wedding DJ'd here since 2023",
    photos: ["roostertail-01"],
  },
  {
    slug: "colony-club",
    name: "Colony Club",
    city: "Detroit, MI",
    regionSlug: "metro-detroit",
    blurb: "A 1927 Georgian-style landmark in Detroit's Entertainment District, with a gold-leaf Grand Ballroom and a smaller Petite Ballroom.",
    about: "The Grand Ballroom on the third floor holds up to 350 guests, with crystal chandeliers and Louis XVI-style décor evoking Versailles. The fourth-floor Petite Ballroom suits smaller weddings of 100–120 guests.",
    weddingsWorked: "3 weddings DJ'd here since 2023",
    photos: ["colony-club-01"],
  },
  {
    slug: "shinola-hotel",
    name: "Shinola Hotel",
    city: "Detroit, MI",
    regionSlug: "metro-detroit",
    blurb: "A boutique hotel in Midtown Detroit with a white-tile ballroom, a marble fireplace, and several smaller event rooms.",
    about: "Bixby Hall, the largest space, seats up to 170 for dinner with dancing. The Birdy Room holds up to 70 seated or 150 standing. Overall the hotel can host anywhere from 10 to 350 guests across its spaces.",
    weddingsWorked: "3 weddings DJ'd here since 2023",
    photos: ["shinola-hotel-01"],
  },
  {
    slug: "the-treasury",
    name: "The Treasury",
    city: "Pontiac, MI",
    regionSlug: "oakland-county",
    blurb: "A 1921 former bank in downtown Pontiac, with Art Deco detailing and a bank vault that's become a favorite photo spot.",
    about: "The Main Floor holds up to 280 guests without a dance floor; the Mezzanine Level holds 175–250 depending on ceremony placement. The building features a coffered gold-leaf ceiling, marble elements, and Palladian windows, and gives couples exclusive use of the whole venue.",
    weddingsWorked: "3 weddings DJ'd here since 2023",
    photos: ["the-treasury-01"],
  },
  {
    slug: "masonic-temple-detroit",
    name: "Masonic Temple - Detroit",
    city: "Detroit, MI",
    regionSlug: "metro-detroit",
    blurb: "A massive Detroit landmark with three ballrooms, a chapel, and over 1,000 rooms across the building.",
    about: "The Crystal Ballroom holds up to 350 for a reception with a dance floor, the Fountain Ballroom up to 550, and the Chapel up to 400. The Crystal Ballroom alone spans over 10,500 sq. ft. of Italian-decor event space.",
    weddingsWorked: "3 weddings DJ'd here since 2023",
    photos: ["masonic-temple-detroit-01"],
  },
  {
    slug: "mirage",
    name: "Mirage",
    city: "Clinton Township, MI",
    regionSlug: "metro-detroit",
    blurb: "An Italian-catering banquet center in Clinton Township, with a full-service bar and large windows overlooking green space.",
    about: "The venue accommodates parties from 50 up to 1,000 seated (1,200 standing) in its largest room, with multiple smaller event spaces available for more intimate weddings.",
    weddingsWorked: "3 weddings DJ'd here since 2023",
    photos: ["mirage-01"],
  },
  {
    slug: "the-book-tower-detroit",
    name: "The Book Tower Detroit",
    city: "Detroit, MI",
    regionSlug: "metro-detroit",
    blurb: "A restored 1920s Detroit skyscraper, with ceremonies in the Linden Room and receptions in the sky-lit Conservatory Ballroom.",
    about: "The Conservatory Ballroom on the 13th floor holds up to 175 seated or 275 for a strolling reception, under a glass skylight with city views. The Linden Room, used for ceremonies, seats up to 140.",
    weddingsWorked: "3 weddings DJ'd here since 2023",
    photos: ["the-book-tower-detroit-01"],
  },
  {
    slug: "cushing-field-house",
    name: "Cushing Field House",
    city: "Holly, MI",
    regionSlug: "metro-detroit",
    blurb: "A rustic 30-acre venue in Holly with reclaimed barn wood walls, string lights, and Edison-bulb chandeliers, hosting one wedding per weekend.",
    about: "The main venue space holds up to 200 guests indoors, on a property spanning private farm fields and hardwood forest. Two get-ready suites are available for the wedding party, and the venue books only one event per weekend.",
    weddingsWorked: "6 weddings DJ'd here since 2023",
    photos: ["cushing-field-house-01"],
  },
];

export type RealWedding = {
  slug: string;
  couple: string;
  venueName?: string;
  /** Set only if that venue has its own page in `venues` above */
  venueSlug?: string;
  regionSlug?: string;
  date?: string;
  guestCount?: string;
  musicStyle?: string;
  notableMoments?: string;
  danceFloorNotes?: string;
  testimonial?: { quote: string; attribution: string };
  /** Filenames under /public/images/portfolio, no extension. Optional — some
   * entries below are confirmed real via a named review rather than a photo. */
  photos?: string[];
};

// Only weddings with a real, confirmed couple name go here — either real
// photos, a real review, or both. Fields left undefined render as gaps, not
// guesses.
export const realWeddings: RealWedding[] = [
  {
    slug: "casey-michael",
    couple: "Casey & Michael",
    photos: ["casey-michael-01", "casey-michael-02", "casey-michael-03", "casey-michael-04", "casey-michael-05"],
  },
  {
    slug: "the-beckers",
    couple: "The Beckers",
    venueName: "Brewery Becker",
    venueSlug: "brewery-becker",
    regionSlug: "metro-detroit",
    photos: ["becker-danceasaur-brewery"],
  },
  {
    slug: "larissa-connor",
    couple: "Larissa & Connor",
    venueName: "Fenton Winery & Brewery",
    venueSlug: "fenton-winery-brewery",
    regionSlug: "metro-detroit",
    testimonial: {
      quote:
        "DJ Noah was without a doubt the standout vendor. His mixing and DJ skills shined hard, even mixing between English and Brazilian turned out so good. He was great at reading the vibe of the room and just kept the energy up and moving the whole time. We even had a storm roll through and knock out the power for a few minutes and he kept it alive while things got set up again.",
      attribution: "Larissa & Connor",
    },
  },
  {
    slug: "lana-brian",
    couple: "Lana & Brian",
    venueName: "Addison Oaks",
    venueSlug: "addison-oaks",
    regionSlug: "oakland-county",
    testimonial: {
      quote:
        "He's an awesome MC, all the events of the day went so smoothly and the dancing part of the evening was perfect!! He chose all the right songs, read the crowd so well and created the perfect balance of a fun dance floor without feeling like a club, exactly what we wanted.",
      attribution: "Lana & Brian",
    },
  },
  {
    slug: "aubrey-alex",
    couple: "Aubrey & Alex",
    venueName: "The Gem Theatre",
    venueSlug: "the-gem-theatre",
    regionSlug: "metro-detroit",
    testimonial: {
      quote:
        "Noah made the wedding reception EPIC. Not only was he a great MC, but the dance floor was absolutely packed the entire night. We plan to refer Noah/Prestige to all our friends and family for their DJ'ing needs.",
      attribution: "Aubrey & Alex",
    },
  },
  {
    slug: "abby-alexander",
    couple: "Abby & Alexander",
    venueName: "The Whiskey Factory",
    venueSlug: "the-whiskey-factory",
    regionSlug: "metro-detroit",
    testimonial: {
      quote:
        "From the moment I decided to hire them for DJ, coordinator, and videography services, they made wedding planning as seamless and easy as possible. My wedding would not have been the fairytale it was without Prestige!",
      attribution: "Abby & Alexander",
    },
  },
  {
    slug: "shannon-brandyn",
    couple: "Shannon & Brandyn",
    venueName: "Vale Royal Barn",
    venueSlug: "vale-royal-barn",
    regionSlug: "metro-detroit",
    testimonial: {
      quote:
        "We hired Prestige for both DJ services and Day of Coordination. This was by far one of the best decisions made during the planning process. The dance floor was not empty once during the reception!",
      attribution: "Shannon & Brandyn",
    },
  },
];

export const primaryNav = [
  {
    label: "Noah DeVoe",
    href: "/noah-devoe",
    children: [
      { label: "Bio & Portfolio", href: "/noah-devoe" },
      { label: "Mixes", href: "/noah-devoe/mixes" },
      { label: "Weddings I've DJ'd", href: "/noah-devoe/weddings" },
      { label: "Venue Guide", href: "/venues" },
      { label: "Book Noah", href: "/noah-devoe/pricing" },
    ],
  },
  {
    label: "Wedding DJ Team",
    href: "/wedding-dj",
    children: [
      { label: "Meet the Team", href: "/prestige/team" },
      { label: "Packages", href: "/packages" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.shortName, href: s.path })),
  },
  {
    label: "Service Areas",
    href: "/service-area",
    children: serviceAreas.map((a) => ({ label: a.name, href: `/service-area/${a.slug}` })),
  },
  {
    label: "About Prestige",
    href: "/prestige",
    children: [
      { label: "Our Story", href: "/prestige" },
      { label: "Reviews", href: "/reviews" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
    ],
  },
] as const;
