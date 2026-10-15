export const site = {
  name: "Transporter Service",
  tagline: "Luxury",
  contactName: "Danial",
  phoneDisplay: "+60 14-855 5557",
  phoneIntl: "60148555557",
  values: ["Safe", "Reliable", "Comfort", "On Time"],
};

export function waLink(message?: string) {
  const base = `https://wa.me/${site.phoneIntl}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#fleet", label: "Fleet" },
  { href: "#services", label: "Services" },
  { href: "#destinations", label: "Destinations" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export type VehicleKind = "sedan" | "mpv" | "luxury" | "van";

export type Vehicle = {
  name: string;
  category: string;
  kind: VehicleKind;
  image: string;
  price: number;
  guests: string;
  luggage: string;
  features: string[];
};

// Photos: Wikimedia Commons (free licences), see src/lib/photo-credits.json.
// Placeholder prices copied from ftttransport.com (one way, KLIA → KL / Subang).
// Replace with Danial's real rates.
export const vehicles: Vehicle[] = [
  { name: "Toyota Alphard", image: "/images/stock/toyota-alphard.jpg", category: "Executive Premium", kind: "luxury", price: 220, guests: "4–5", luggage: "4 small", features: ["Executive Experience", "Airport Transfer", "VIP & Corporate"] },
  { name: "Toyota Vellfire", image: "/images/stock/toyota-vellfire.jpg", category: "Executive Premium", kind: "luxury", price: 220, guests: "4–5", luggage: "4 small", features: ["Executive Experience", "Airport Transfer", "Weddings & Events"] },
  { name: "Hyundai Staria", image: "/images/stock/hyundai-staria.jpg", category: "Premium MPV", kind: "mpv", price: 230, guests: "5–7", luggage: "6 standard", features: ["Spacious Cabin", "Airport Transfer", "City Tour"] },
  { name: "Toyota Innova", image: "/images/stock/toyota-innova.jpg", category: "MPV", kind: "mpv", price: 150, guests: "4", luggage: "4 standard", features: ["Airport Transfer", "City Tour", "Point to Point"] },
  { name: "Innova Zenix", image: "/images/stock/innova-zenix.jpg", category: "MPV", kind: "mpv", price: 150, guests: "4", luggage: "4 standard", features: ["Airport Transfer", "City Tour", "Point to Point"] },
  { name: "Perodua Alza", image: "/images/stock/perodua-alza.jpg", category: "Mini MPV", kind: "mpv", price: 140, guests: "4", luggage: "4 standard", features: ["Airport Transfer", "City Tour", "Point to Point"] },
  { name: "Toyota Avanza", image: "/images/stock/toyota-avanza.jpg", category: "Mini MPV", kind: "mpv", price: 140, guests: "4", luggage: "4 standard", features: ["Airport Transfer", "City Tour", "Point to Point"] },
  { name: "Toyota Camry", image: "/images/stock/toyota-camry.jpg", category: "Sedan Premium", kind: "sedan", price: 150, guests: "3", luggage: "3 standard", features: ["Business Class", "Airport Transfer", "Point to Point"] },
  { name: "Toyota Vios", image: "/images/stock/toyota-vios.jpg", category: "Sedan", kind: "sedan", price: 130, guests: "3", luggage: "2 standard", features: ["Airport Transfer", "City Tour", "Point to Point"] },
  { name: "Honda City", image: "/images/stock/honda-city.jpg", category: "Sedan", kind: "sedan", price: 130, guests: "3", luggage: "2 standard", features: ["Airport Transfer", "City Tour", "Point to Point"] },
  { name: "10-Seater Van", image: "/images/stock/toyota-hiace.jpg", category: "Family Van", kind: "van", price: 230, guests: "10", luggage: "13 small", features: ["Ideal for Tours & Events", "Family Trips", "Airport Transfer"] },
  { name: "14-Seater Van", image: "/images/stock/toyota-hiace.jpg", category: "Family Van", kind: "van", price: 230, guests: "14", luggage: "13 small", features: ["Ideal for Tours & Events", "Group Travel", "Airport Transfer"] },
  { name: "18-Seater Van", image: "/images/stock/toyota-hiace.jpg", category: "Family Van", kind: "van", price: 230, guests: "18", luggage: "13 small", features: ["Ideal for Tours & Events", "Group Travel", "Airport Transfer"] },
];

export const services = [
  {
    icon: "plane",
    title: "Airport Transfer",
    subtitle: "KLIA / KLIA2",
    text: "Meet & greet at arrivals, flight tracking and door-to-door drop-off anywhere in the Klang Valley.",
  },
  {
    icon: "clock",
    title: "Hourly Charter",
    subtitle: "Your car, your hours",
    text: "Meetings, shopping or a night out. Keep a car and driver on standby for as long as you need.",
  },
  {
    icon: "calendar",
    title: "Daily Booking",
    subtitle: "Full-day hire",
    text: "Book a full day with a dedicated driver for business trips, weddings, events or family outings.",
  },
  {
    icon: "user",
    title: "Private Tour",
    subtitle: "Across Malaysia",
    text: "Your own driver and vehicle for highland, island and city trips. Plan the stops your way.",
  },
] as const;

export const destinations = [
  { name: "Genting Highland", region: "Pahang", image: "/images/stock/genting-highland.jpg" },
  { name: "Melaka", region: "Melaka", image: "/images/stock/melaka.jpg" },
  { name: "Port Dickson", region: "Negeri Sembilan", image: "/images/stock/port-dickson.jpg" },
  { name: "Johor Bahru", region: "Johor", image: "/images/stock/johor-bahru.jpg" },
  { name: "Kuantan", region: "Pahang", image: "/images/stock/kuantan.jpg" },
  { name: "Terengganu", region: "East Coast", image: "/images/stock/terengganu.jpg" },
  { name: "Ipoh", region: "Perak", image: "/images/stock/ipoh.jpg" },
  { name: "Cameron Highland", region: "Pahang", image: "/images/stock/cameron-highland.jpg" },
  { name: "Penang", region: "Pulau Pinang", image: "/images/stock/penang.jpg" },
  { name: "Alor Star", region: "Kedah", image: "/images/stock/alor-star.jpg" },
  { name: "Kuala Perlis", region: "Perlis", image: "/images/stock/kuala-perlis.jpg" },
  { name: "Kelantan", region: "East Coast", image: "/images/stock/kelantan.jpg" },
];

export const promises = [
  { icon: "shield", title: "Safe", sub: "& Secure", text: "Well-maintained vehicles and careful, licensed drivers." },
  { icon: "thumb", title: "Reliable", sub: "Service", text: "Clear pricing and a driver who shows up as promised." },
  { icon: "seat", title: "Comfort", sub: "Ride", text: "Clean, air-conditioned luxury MPVs with room to relax." },
  { icon: "clock", title: "On Time", sub: "Every Time", text: "24-hour service. Early flights and late arrivals covered." },
] as const;

export const steps = [
  { title: "Choose your ride", text: "Pick a vehicle and service: airport transfer, charter, daily or tour." },
  { title: "WhatsApp Danial", text: "Send your pickup point, drop-off, date, time and number of passengers." },
  { title: "Confirm your booking", text: "Get a fixed quote and confirm. Payment options are shared on WhatsApp." },
  { title: "Sit back & ride", text: "Your driver arrives on time and gets you there in comfort." },
];
