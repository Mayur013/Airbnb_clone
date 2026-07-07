export interface Photo {
  id: string;
  src: string;
  room: string;
  title: string;
  subtitle: string;
}

export const photos: Photo[] = [
  // ── Living room ──
  {
    id: "living-room-1",
    src: "/images/living-room-1.jpg",
    room: "Living room",
    title: "Living room",
    subtitle: "Sofa · Air conditioning · Ceiling fan · TV",
  },
  {
    id: "living-room-2",
    src: "/images/living-room-2.jpg",
    room: "Living room",
    title: "Living room 2",
    subtitle: "Dining table · Air conditioning",
  },
  {
    id: "living-room-3",
    src: "/images/image copy 12.png",
    room: "Living room",
    title: "Living room 3",
    subtitle: "City view",
  },
  // ── Kitchen ──
  {
    id: "full-kitchen",
    src: "/images/full-kitchen.jpg",
    room: "Kitchen",
    title: "Full Kitchen",
    subtitle: "Refrigerator · Microwave · Stovetop · Cookware",
  },
  {
    id: "full-kitchen-2",
    src: "/images/image copy 8.png",
    room: "Kitchen",
    title: "Dining area",
    subtitle: "Dining table",
  },
  {
    id: "full-kitchen-3",
    src: "/images/image copy 13.png",
    room: "Kitchen",
    title: "Dining area",
    subtitle: "City view",
  },
  // ── Bedroom ──
  {
    id: "bedroom",
    src: "/images/bedroom.jpg",
    room: "Bedroom",
    title: "Bedroom",
    subtitle: "1 double bed · Air conditioning · Wardrobe",
  },
  {
    id: "bedroom-2",
    src: "/images/bedroom2.png",
    room: "Bedroom",
    title: "Bedroom view",
    subtitle: "Air conditioning",
  },
    {
    id: "bedroom-3",
    src: "/images/bedroom3.png",
    room: "Bedroom",
    title: "Bedroom view",
    subtitle: "City view",
  },
  // ── Bathroom ──
  {
    id: "full-bathroom",
    src: "/images/image copy 9.png",
    room: "Bathroom",
    title: "Full bathroom",
    subtitle: "Jacuzzi · Hot water · Hair dryer",
  },
  {
    id: "full-bathroom-2",
    src: "/images/image copy 10.png",
    room: "Bathroom",
    title: "Private jacuzzi",
    subtitle: "Hot tub",
  },
   {
    id: "full-bathroom-3",
    src: "/images/image copy 14.png",
    room: "Bathroom",
    title: "Private jacuzzi",
    subtitle: "Toiletries provided",
  },
  // ── Pool ──
  {
    id: "pool",
    src: "/images/pool.jpg",
    room: "Pool",
    title: "Pool",
    subtitle: "Shared outdoor pool · Loungers",
  },
  {
    id: "pool-2",
    src: "/images/pool-2.jpg",
    room: "Pool",
    title: "Pool area",
    subtitle: "Poolside seating",
  },
  {
    id: "pool-3",
    src: "/images/pool-3.jpg",
    room: "Pool",
    title: "Pool area",
    subtitle: "Evening view",
  },
  // ── Exterior ──
  {
    id: "exterior",
    src: "/images/exterior.jpg",
    room: "Exterior",
    title: "Exterior",
    subtitle: "Building entrance · Garden view",
  },
  {
    id: "exterior-2",
    src: "/images/image copy 11.png",
    room: "Exterior",
    title: "Building view",
    subtitle: "Outdoor area · Parking",
  },
  {
    id: "exterior-3",
    src: "/images/image copy 15.png",
    room: "Exterior",
    title: "Building view",
    subtitle: "Outdoor area · Parking",
  },
];

export interface Review {
  id: string;
  author: string;
  initials: string;
  avatar?: string;
  date: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Priya",
    initials: "P",
    date: "March 2024",
    rating: 5,
    text: "Absolutely stunning place! The jacuzzi was a highlight of our trip. The apartment is exactly as described — clean, well-furnished, and very close to the beach. Mirashya was very responsive and helpful throughout.",
  },
  {
    id: "r2",
    author: "Rahul",
    avatar: "/images/rahul.png",
    initials: "R",
    date: "February 2024",
    rating: 5,
    text: "Perfect romantic getaway. The apartment is beautifully decorated and the jacuzzi is just amazing. Loved the shared pool as well. Would definitely come back!",
  },
  {
    id: "r3",
    author: "Sophie",
    initials: "S",
    avatar:"/images/sofie.png",
    date: "January 2024",
    rating: 5,
    text: "We had a fantastic stay. The place was spotlessly clean and the host made sure everything was perfect before our arrival. The location is great — walking distance to restaurants and the beach.",
  },
  {
    id: "r4",
    author: "Arjun",
    initials: "A",
    date: "December 2023",
    rating: 4,
    text: "Great place with a beautiful jacuzzi. The kitchen was fully equipped and we cooked a few meals at home. Check-in was very smooth. Minor issue with hot water but resolved quickly.",
  },
  {
    id: "r5",
    author: "Meera",
    initials: "M",
    avatar:"/images/meera.png",
    date: "November 2023",
    rating: 5,
    text: "One of the best Airbnb stays we've had in Goa! The jacuzzi, the pool, and the cozy vibes made our anniversary super special. Host was incredibly accommodating.",
  },
  {
    id: "r6",
    author: "James",
    initials: "J",
    date: "October 2023",
    rating: 5,
    text: "Lovely apartment in a great location. Very clean and comfortable. The private jacuzzi was a luxurious touch. Will definitely recommend this place to friends visiting Goa.",
  },
];

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  type: "Entire serviced apartment in Candolim, India",
  location: "Candolim, Goa, India",
  guests: 5,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.86,
  reviewCount: 128,
  isSuperhost: true,
  price: 4250,
  currency: "₹",
  discountNote: "Get 10% off your next stay, Terms apply",
  description:
    "Step into this romantic 1BHK apartment in the heart of Candolim, just minutes from the beach. Featuring a private jacuzzi, cozy living space, and a fully equipped kitchen, it's an ideal retreat for couples looking to unwind. The building offers a shared pool and garden area, perfect for relaxing evenings after a day of sightseeing.",
  descriptionFull:
    "Step into this romantic 1BHK apartment in the heart of Candolim, just minutes from the beach. Featuring a private jacuzzi, cozy living space, and a fully equipped kitchen, it's an ideal retreat for couples looking to unwind. The building offers a shared pool and garden area, perfect for relaxing evenings after a day of sightseeing.\n\nThe apartment is located on the upper ground floor of the Mirashya complex, offering easy access to all amenities. You'll be within walking distance of some of the best restaurants, beach shacks, and nightlife Goa has to offer. Candolim beach is just a 5-minute drive away.\n\nWe provide complimentary toiletries, fresh towels, and bed linen. The kitchen is stocked with all the basics you need. High-speed WiFi is available throughout the apartment.",
  amenities: [
    "Private jacuzzi",
    "Shared pool",
    "Air conditioning",
    "Free WiFi",
    "Fully equipped kitchen",
    "Free parking on premises",
    "Washing machine",
    "Dedicated workspace",
    "TV with streaming",
    "Hair dryer",
    "Iron",
    "Smoke alarm",
  ],
  host: {
    name: "Mirashya Stays",
    joined: "Joined in 2019",
    yearsHosting: 2,
    reviewCount: 1463,
    rating: 4.68,
    isSuperhost: true,
    bio: "We are a hospitality brand focused on providing premium yet affordable stays in Goa. Our apartments are thoughtfully designed for couples and small families looking for a home-like experience with luxury amenities. We're always just a message away!",
    responseRate: "100%",
    responseTime: "within an hour",
    initials: "M",
  },
  coHosts: [
    { name: "Sharath", initials: "S", color: "#7c6f5b" },
    { name: "Aman Dev Pahwa", initials: "A", color: "#5b7c6f" },
    { name: "Maria Karen Priyanka", initials: "M", color: "#6f5b7c" },
    { name: "Simran", initials: "S", color: "#7c5b6f" },
    { name: "Pallavi", initials: "P", color: "#5b6f7c" },
    { name: "Sanyukta", initials: "S", color: "#7c7c5b" },
    { name: "Shruti", initials: "S", color: "#ff9eb5", bg: "#ffe0e8" },
    { name: "Amisha", initials: "A", color: "#ffffff", bg: "#8ab4f8" },
  ],
  houseRules: [
    "Check-in: 2:00 PM – 11:00 PM",
    "Checkout: 11:00 AM",
    "No smoking",
    "No pets",
    "No parties or events",
    "Maximum 5 guests",
  ],
  safetyFeatures: [
    "Smoke alarm",
    "Carbon monoxide alarm",
    "Fire extinguisher",
    "First aid kit",
  ],
  cancellationPolicy:
    "Free cancellation before 3:00 PM on check-in day. Review the full cancellation policy.",
  mapLocation: { lat: 15.5146, lng: 73.7631 },
};
