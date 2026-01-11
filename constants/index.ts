import { ActivityType, PropertyProps, Review, SegmentType } from "@/interfaces";

export const API_BASE_URL = 'http://localhost:9000/v1';

export const DEFAULT_IMAGE = 'https://placehold.co/600x400?text=Property+Image&font=roboto';

export const UI_TEXT = {
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
};

export const MAX_DESC_LENGTH = 300; // characters before truncation

export const WEEKLY_DISCOUNT = -88;
export const SERVICE_FEE = 433;

export const TEST_REVIEWS: Review[] = [
  {
    name: "Kerry",
    avatar: "/assets/detail-images/image25.png",
    rating: 4.60,
    comment: "I simply don’t have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
    date: "March 2024",
    activity: ActivityType.FamilyTrip,
    memberSince: "3",
  },
  {
    name: "Pooja",
     avatar: "/assets/detail-images/image25-2.png",
    rating: 4.85,
    comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,",
    date: "March 2024",
    activity: ActivityType.FamilyTrip,
    memberSince: "1",
  },
  {
    name: "Cindy & Ben",
     avatar: "/assets/detail-images/image25-1.png",
    rating: 4.70,
    comment: "I simply don’t have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
    date: "August 2023",
    activity: ActivityType.FamilyTrip,
    memberSince: "1",
  },
  {
    name: "Marnie",
     avatar: "/assets/detail-images/image25-3.png",
    rating: 4.89,
    comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,",
    date: "January 2023",
    activity: ActivityType.FamilyTrip,
    memberSince: "5",
  },
];

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Arrecife Beach House",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.76,
    category: ["Mountain view", "Shared beach access", "Chef", "Butler", "Cleaning/broom available", "Bartender", "Pool - infinity",  "Hot tub", "Kitchen/pan", "Wifi"],
    price: 2500,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/detail-images/image19.png",
    images: [
      "/assets/detail-images/image21.png",
      "/assets/detail-images/image22.png",
      "/assets/detail-images/image24.png",
    ],
    discount: "",
    reviews: TEST_REVIEWS,
    marketSegment: {
      id: "seg-001",
      name: "Mainstream",
      description: `
Aimed at the general population, offering affordable and comfortable properties that cater to everyday needs.`,
      averagePriceRange: [500, 2500],
      targetAudience: "General population seeking affordable and comfortable accommodations.",
      type: SegmentType.Mainstream,
    },    
    description: `
Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron's many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you're ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in the hot tub, and gazing out over incredible ocean views.

The space
BEDROOM & BATHROOM
- Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
`,
  },
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/listing-images/list1.png",
    discount: "",
    reviews: [],
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/listing-images/list2.png",
    discount: "30",
    reviews: [],
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/listing-images/list3.png",
    discount: "",
    reviews: [],
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/listing-images/list4.png",
    discount: "15",
    reviews: []
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "/assets/listing-images/list5.png",
    discount: "20",
    reviews: []
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "/assets/listing-images/list6.png",
    discount: "",
    reviews: []
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/listing-images/list7.png",
    discount: "10",
    reviews: []
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "/assets/listing-images/list8.png",
    discount: "25",
    reviews: []
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/listing-images/list9.png",
    discount: "",
    reviews: []
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/listing-images/list10.png",
    discount: "40",
    reviews: []
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/listing-images/list11.png",
    discount: "50",
    reviews: []
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/listing-images/list12.png",
    discount: "",
    reviews: []
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/listing-images/list13.png",
    discount: "35",
    reviews: []
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/assets/listing-images/list14.png",
    discount: "",
    reviews: []
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/listing-images/list15.png",
    discount: "20",
    reviews: []
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "/assets/listing-images/list16.png",
    discount: "25",
    reviews: []
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "/assets/listing-images/list17.png",
    discount: "30",
    reviews: []
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/listing-images/list18.png",
    discount: "",
    reviews: []
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "/assets/listing-images/list19.png",
    discount: "60",
    reviews: []
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/listing-images/list20.png",
    discount: "",
    reviews: []
  }
];
