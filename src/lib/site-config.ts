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
    blurb: "Detroit, Dearborn, Grosse Pointe & the riverfront and loft-venue scene.",
    live: false,
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

// Empty for now — venue-partnership pages (e.g. Cushing Field House) are on
// hold until that content is ready. Add entries here once it's time to build
// them back out; /venues/[slug] routes and the sitemap pick this up automatically.
export const venues: { slug: string; name: string; blurb: string }[] = [];

export const primaryNav = [
  {
    label: "Noah DeVoe",
    href: "/noah-devoe",
    children: [
      { label: "Bio & Portfolio", href: "/noah-devoe" },
      { label: "Mixes", href: "/noah-devoe/mixes" },
      { label: "Weddings I've DJ'd", href: "/noah-devoe/weddings" },
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
