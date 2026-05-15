import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone, MessageCircle, MapPin, Wrench, Cog, Sprout, Truck,
  ShieldCheck, Star, ArrowUpRight, Tractor, Quote, CheckCircle2, Clock, Languages,
} from "lucide-react";
import heroTractor from "@/assets/hero-tractor.jpg";
import eqRotavator from "@/assets/eq-rotavator.jpg";
import eqTrailer from "@/assets/eq-trailer.jpg";
import eqTanker from "@/assets/eq-tanker.jpg";
import eqTractor575 from "@/assets/eq-tractor-575.jpg";
import eqTractor475 from "@/assets/eq-tractor-475.jpg";

const PHONE_1 = "9443361295";
const PHONE_2 = "9382334477";
const WA = `https://wa.me/91${PHONE_1}?text=${encodeURIComponent("Hello Sri Mariamman Tractor Center, I'd like to know more about your tractors and services.")}`;
const MAPS = "https://maps.google.com/?q=Sri+Mariamman+Tractor+Center+Paramathi+Velur+Namakkal";
const ADDRESS = "Main Road, Near G.H Hospital, N. Kandhampalayam, Paramathi Velur, Namakkal — 637203";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "Sri Mariamman Tractor Center",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Mahindra_575_Di_-Tamil_girl_watching_sunset_at_a_village_sugar_cane_field_and_palm_trees_sitting_barefoot_in_pink_Sari_on_a_red_tractor_-_Tamil_Nadu_village_gas_station_with_her_mobile_phone_-_myindiaexperience_-feature_story_photo.jpg/1280px-thumbnail.jpg",
  description: "Trusted tractor sales, service, spare parts and agricultural equipment in Namakkal. 25+ years of experience.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Road, Near G.H Hospital, N. Kandhampalayam",
    addressLocality: "Paramathi Velur",
    addressRegion: "Tamil Nadu",
    postalCode: "637203",
    addressCountry: "IN",
  },
  telephone: ["+91-9443361295", "+91-9382334477"],
  priceRange: "₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  areaServed: "Namakkal, Tamil Nadu",
  makesOffer: [
    "Mahindra 575 DI", "Mahindra 475 DI", "Tractor Service",
    "Genuine Spare Parts", "Rotavator", "Trailer", "Water Tanker",
  ],
  sameAs: [
    `https://wa.me/91${PHONE_1}`,
  ],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sri Mariamman Tractor Center — Sales & Service, Namakkal" },
      { name: "description", content: "25+ years of trusted Mahindra tractor sales, servicing, spare parts & agricultural equipment in Paramathi Velur, Namakkal. Mon–Fri 8am–7pm. Call 94433 61295." },
      { name: "keywords", content: "tractor service Namakkal, Mahindra 575, Mahindra 475, tractor mechanic Paramathi Velur, rotavator, trailer, water tanker" },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Paramathi Velur, Namakkal" },
      { property: "og:title", content: "Sri Mariamman Tractor Center — Namakkal" },
      { property: "og:description", content: "25+ years of trusted Mahindra tractor sales, service & spares in Paramathi Velur, Namakkal." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Mahindra_575_Di_-Tamil_girl_watching_sunset_at_a_village_sugar_cane_field_and_palm_trees_sitting_barefoot_in_pink_Sari_on_a_red_tractor_-_Tamil_Nadu_village_gas_station_with_her_mobile_phone_-_myindiaexperience_-feature_story_photo.jpg/1280px-thumbnail.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://srimariammantractor.in/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
});

// ───────────────── i18n ─────────────────
type Lang = "en" | "ta";
const t = {
  en: {
    nav: ["About", "Services", "Equipment", "Why Us", "Contact"],
    badge: "ESTABLISHED 25+ YEARS · NAMAKKAL",
    h1a: "Powering modern", h1b: "agriculture", h1c: "with trusted tractor solutions.",
    sub: "Sales · Service · Agricultural Equipment · Spare Parts. Built for farmers who demand reliability — every season, every harvest.",
    callNow: "Call Now", whatsapp: "WhatsApp", viewTractors: "View Tractors",
    stats: [["25+","Years"],["5,000+","Farmers served"],["Mon–Fri","8 AM – 7 PM"]],
    aboutKicker: "About us",
    aboutTitle: "Trusted tractor mechanic experts in Namakkal.",
    aboutBody: "Sri Mariamman Tractor Center provides reliable tractor sales, agricultural equipment, spare parts, and servicing solutions for farmers and agricultural businesses across Namakkal and nearby regions.",
    aboutPills: ["Quality service","Genuine work","Affordable pricing","Customer satisfaction"],
    servicesKicker: "What we do",
    servicesTitle: "Everything your tractor needs — under one roof.",
    talk: "Talk to a specialist",
    services: [
      ["Tractor Sales","New and used tractor solutions for all farming needs."],
      ["Tractor Service","Engine repair, maintenance, oil service, and inspection."],
      ["Spare Parts","High-quality genuine tractor spare parts available."],
      ["Agricultural Equipment","Rotavators, cultivators, ploughs, trailers, and more."],
      ["Doorstep Support","Quick on-site support and field assistance nearby."],
    ],
    equipKicker: "Featured equipment",
    equipTitle: "Workhorses for every field.",
    enquire: "Enquire on WhatsApp",
    equipment: [
      ["Mahindra 575 DI","Bestseller","India's most loved 47 HP workhorse — fuel-efficient and powerful."],
      ["Mahindra 475 DI","Classic","Reliable 42 HP all-rounder, perfect for medium farms."],
      ["Rotavator","Implement","Heavy-duty soil prep with even tilling depth."],
      ["Trailer","Hauling","Strong steel trailer for crops and supplies."],
      ["Water Tanker","Irrigation","High-capacity tanker for irrigation & water transport."],
    ],
    whyKicker: "Why choose us",
    whyTitle: "Built on trust. Backed by 25 years of service.",
    reasons: [
      ["Experienced technicians","25+ years on the field."],
      ["Genuine spare parts","Sourced from authorized OEMs."],
      ["Fast servicing","Minimum downtime, maximum harvest."],
      ["Affordable pricing","Honest quotes, no surprises."],
      ["Trusted by farmers","Loved across Namakkal region."],
      ["Customer-first support","We pick up. We show up."],
    ],
    voiceKicker: "Farmer voices",
    voiceTitle: "Trusted across the region.",
    testimonials: [
      ["Best tractor service in Namakkal. Quick response and genuine parts.","Murugan S.","Paramathi Velur"],
      ["Very friendly service and affordable pricing. Highly recommended!","Karthik R.","Namakkal"],
      ["Fixed my Mahindra in a day during harvest. Lifesavers.","Selvam P.","Velur"],
    ],
    contactKicker: "Get in touch",
    contactTitle: "Visit us, call us, or message on WhatsApp.",
    address: "Address", phone: "Phone", hours: "Working hours",
    hoursLine: "Monday – Friday · 8:00 AM – 7:00 PM",
    quickActions: "Quick actions",
    googleMaps: "Google Maps", altNumber: "Alt. Number",
    langs: "We speak Tamil & English",
    footerNote: "Namakkal, Tamil Nadu",
  },
  ta: {
    nav: ["எங்களைப் பற்றி", "சேவைகள்", "உபகரணங்கள்", "ஏன் நாங்கள்", "தொடர்பு"],
    badge: "25+ ஆண்டுகள் அனுபவம் · நாமக்கல்",
    h1a: "நம்பகமான டிராக்டர் தீர்வுகளுடன்", h1b: "நவீன விவசாயத்திற்கு", h1c: "சக்தி அளிக்கிறோம்.",
    sub: "விற்பனை · சேவை · விவசாய உபகரணங்கள் · உதிரி பாகங்கள். ஒவ்வொரு பருவத்திலும் நம்பகத்தன்மையை விரும்பும் விவசாயிகளுக்காக.",
    callNow: "அழைக்கவும்", whatsapp: "வாட்ஸ்அப்", viewTractors: "டிராக்டர்கள்",
    stats: [["25+","ஆண்டுகள்"],["5,000+","விவசாயிகள்"],["திங்–வெள்","8 AM – 7 PM"]],
    aboutKicker: "எங்களைப் பற்றி",
    aboutTitle: "நாமக்கலின் நம்பகமான டிராக்டர் நிபுணர்கள்.",
    aboutBody: "ஸ்ரீ மாரியம்மன் டிராக்டர் சென்டர் நாமக்கல் மற்றும் அதைச் சுற்றியுள்ள பகுதிகளில் விவசாயிகளுக்கு டிராக்டர் விற்பனை, உபகரணங்கள், உதிரி பாகங்கள் மற்றும் சேவை வழங்குகிறது.",
    aboutPills: ["தரமான சேவை","உண்மையான வேலை","மலிவான விலை","வாடிக்கையாளர் திருப்தி"],
    servicesKicker: "நாங்கள் செய்வது",
    servicesTitle: "உங்கள் டிராக்டருக்கு தேவையான அனைத்தும் — ஒரே இடத்தில்.",
    talk: "நிபுணரிடம் பேசுங்கள்",
    services: [
      ["டிராக்டர் விற்பனை","அனைத்து விவசாய தேவைகளுக்கும் புதிய மற்றும் பழைய டிராக்டர்கள்."],
      ["டிராக்டர் சேவை","என்ஜின் ரிப்பேர், பராமரிப்பு, ஆயில் சர்வீஸ் மற்றும் பரிசோதனை."],
      ["உதிரி பாகங்கள்","உயர் தரமான ஒரிஜினல் டிராக்டர் உதிரி பாகங்கள்."],
      ["விவசாய உபகரணங்கள்","ரோட்டாவேட்டர், கல்டிவேட்டர், கலப்பை, டிரெய்லர் மற்றும் பல."],
      ["வீடு சேவை","அருகிலுள்ள இடங்களில் விரைவான களச் சேவை."],
    ],
    equipKicker: "சிறப்பு உபகரணங்கள்",
    equipTitle: "ஒவ்வொரு வயலுக்கும் வேலைக்காரர்கள்.",
    enquire: "வாட்ஸ்அப்பில் கேளுங்கள்",
    equipment: [
      ["மஹிந்திரா 575 DI","அதிகம் விற்பனை","இந்தியாவின் மிகவும் விரும்பப்படும் 47 HP — எரிபொருள் சிக்கனம்."],
      ["மஹிந்திரா 475 DI","கிளாசிக்","நம்பகமான 42 HP, நடுத்தர பண்ணைகளுக்கு ஏற்றது."],
      ["ரோட்டாவேட்டர்","உபகரணம்","சீரான ஆழத்தில் கடினமான மண் தயாரிப்பு."],
      ["டிரெய்லர்","ஏற்றுமதி","பயிர்கள் மற்றும் பொருட்களுக்கான வலிமையான ஸ்டீல் டிரெய்லர்."],
      ["தண்ணீர் டாங்கர்","பாசனம்","பாசனம் மற்றும் தண்ணீர் கொண்டு செல்ல உயர் கொள்ளளவு டாங்கர்."],
    ],
    whyKicker: "ஏன் நாங்கள்",
    whyTitle: "நம்பிக்கையில் கட்டப்பட்டது. 25 ஆண்டு சேவையால் ஆதரிக்கப்பட்டது.",
    reasons: [
      ["அனுபவமிக்க தொழில்நுட்ப வல்லுநர்கள்","களத்தில் 25+ ஆண்டுகள்."],
      ["ஒரிஜினல் உதிரி பாகங்கள்","அங்கீகரிக்கப்பட்ட OEM-களிடமிருந்து."],
      ["விரைவான சேவை","குறைந்த நேர விரயம், அதிக அறுவடை."],
      ["மலிவான விலை","நேர்மையான விலை, மறைவில்லை."],
      ["விவசாயிகளின் நம்பிக்கை","நாமக்கல் முழுவதும் விரும்பப்படுகிறது."],
      ["வாடிக்கையாளர் முதல்","நாங்கள் பதிலளிப்போம். வந்து சேருவோம்."],
    ],
    voiceKicker: "விவசாயிகளின் குரல்",
    voiceTitle: "மக்கள் நம்பும் சேவை.",
    testimonials: [
      ["நாமக்கலில் சிறந்த டிராக்டர் சேவை. விரைவான பதில் மற்றும் ஒரிஜினல் பாகங்கள்.","முருகன் எஸ்.","பரமத்தி வேலூர்"],
      ["மிகவும் நட்பான சேவை மற்றும் மலிவான விலை. மிகவும் பரிந்துரை செய்கிறேன்!","கார்த்திக் ஆர்.","நாமக்கல்"],
      ["அறுவடை நேரத்தில் என் மஹிந்திராவை ஒரே நாளில் சரி செய்தனர். உயிர் காப்பாளர்கள்.","செல்வம் பி.","வேலூர்"],
    ],
    contactKicker: "தொடர்பு கொள்ளுங்கள்",
    contactTitle: "வாருங்கள், அழையுங்கள், அல்லது வாட்ஸ்அப் செய்யுங்கள்.",
    address: "முகவரி", phone: "தொலைபேசி", hours: "வேலை நேரம்",
    hoursLine: "திங்கள் – வெள்ளி · காலை 8:00 – மாலை 7:00",
    quickActions: "விரைவு செயல்கள்",
    googleMaps: "கூகிள் மேப்ஸ்", altNumber: "மற்ற எண்",
    langs: "நாங்கள் தமிழ் & ஆங்கிலம் பேசுகிறோம்",
    footerNote: "நாமக்கல், தமிழ்நாடு",
  },
};

// Realistic social icons (brand SVGs)
const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M.057 24l1.687-6.163A11.867 11.867 0 010 11.945C0 5.36 5.373 0 11.99 0a11.86 11.86 0 018.413 3.488 11.819 11.819 0 013.49 8.414c-.003 6.585-5.376 11.946-11.99 11.946a12.05 12.05 0 01-5.668-1.45L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);
const InstagramIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 00-2.13 1.38A5.86 5.86 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.86 5.86 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 002.13-1.38 5.86 5.86 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 00-1.38-2.13A5.86 5.86 0 0019.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.41-11.85a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z"/>
  </svg>
);
const FacebookIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.017 1.792-4.683 4.533-4.683 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.49 0-1.955.93-1.955 1.886v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);
const YouTubeIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const L = t[lang];

  return (
    <main className="min-h-screen bg-cream">
      <Nav L={L} lang={lang} setLang={setLang} />
      <Hero L={L} />
      <About L={L} />
      <Services L={L} />
      <Equipment L={L} />
      <WhyUs L={L} />
      <Testimonials L={L} />
      <Contact L={L} />
      <Footer L={L} />
      <FloatingWA />
    </main>
  );
}

function Nav({ L, lang, setLang }: { L: typeof t.en; lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg bg-soil text-cream grid place-items-center">
            <Tractor className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-soil text-[15px] tracking-tight">Sri Mariamman</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Tractor Center</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-soil/80">
          {L.nav.map((label, i) => {
            const slugs = ["about","services","equipment","why-us","contact"];
            return <a key={i} href={`#${slugs[i]}`} className="hover:text-soil transition">{label}</a>;
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            className="inline-flex items-center gap-1.5 rounded-full border border-soil/15 bg-cream px-3 py-1.5 text-xs font-semibold text-soil hover:border-soil transition"
            aria-label="Toggle language">
            <Languages className="h-3.5 w-3.5" />
            {lang === "en" ? "தமிழ்" : "English"}
          </button>
          <a href={`tel:+91${PHONE_1}`} className="inline-flex items-center gap-2 rounded-full bg-soil text-cream px-4 py-2 text-sm font-semibold hover:bg-leaf transition">
            <Phone className="h-4 w-4" /> {L.callNow}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ L }: { L: typeof t.en }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 lg:px-10 pt-12 pb-20 lg:pt-20 lg:pb-32 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
            className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.32em] uppercase text-soil/70">
            <span className="h-px w-10 bg-soil/40" />
            {L.badge}
          </motion.div>
          <motion.h1
            initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7, delay:0.1}}
            className="mt-7 font-display font-bold text-soil leading-[0.95] text-balance text-5xl sm:text-6xl lg:text-[5.5rem]">
            {L.h1a} <em className="italic font-normal text-leaf">{L.h1b}</em> {L.h1c}
          </motion.h1>
          <p className="mt-4 font-display italic text-xl text-rust/80" style={{ fontFamily: 'var(--font-tamil)' }}>
            ஸ்ரீ மாரியம்மன் டிராக்டர் சென்டர்
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed font-light">{L.sub}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:+91${PHONE_1}`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-soil text-cream pl-5 pr-2 py-2 text-base font-semibold hover:bg-leaf transition">
              <Phone className="h-5 w-5" /> {L.callNow}
              <span className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-harvest text-soil group-hover:rotate-45 transition">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <a href={WA} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border-2 border-soil/15 bg-cream px-5 py-3 text-base font-semibold text-soil hover:border-soil transition">
              <WhatsAppIcon className="h-5 w-5 text-leaf" /> {L.whatsapp}
            </a>
            <a href="#equipment"
              className="inline-flex items-center gap-2 rounded-full bg-harvest px-5 py-3 text-base font-semibold text-soil hover:brightness-95 transition">
              <Tractor className="h-5 w-5" /> {L.viewTractors}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {L.stats.map(([k, v]) => (
              <div key={v} className="border-l-2 border-rust pl-3">
                <div className="font-display text-2xl font-extrabold text-soil tracking-tight">{k}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-harvest/40 via-transparent to-rust/20 blur-3xl rounded-full" />
          <motion.div
            initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.8}}
            className="relative">
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-harvest" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full border-4 border-soil" />
            <div className="relative rounded-3xl overflow-hidden glow-harvest animate-float-slow aspect-[4/5]">
              <img src={heroTractor} alt="Mahindra 575 DI tractor at sunset in a Tamil Nadu sugarcane field"
                width={1280} height={1600} className="w-full h-full object-cover" />
            </div>
            <motion.div
              initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.6}}
              className="absolute -left-4 bottom-10 hidden sm:flex items-center gap-3 rounded-2xl bg-cream/95 backdrop-blur shadow-xl px-4 py-3 border border-border">
              <Clock className="h-5 w-5 text-leaf" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{L.hours}</div>
                <div className="font-semibold text-soil text-sm">Mon–Fri · 8 AM – 7 PM</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = ["Mahindra 575 DI", "Mahindra 475 DI", "Genuine Spare Parts", "Field Service", "Rotavators", "Trailers", "Water Tankers", "Engine Repair"];
  const row = [...items, ...items];
  return (
    <div className="border-y border-soil/10 bg-soil text-cream py-4 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {row.map((t,i)=>(
          <span key={i} className="inline-flex items-center gap-3 font-display text-xl tracking-tight">
            <Sprout className="h-4 w-4 text-harvest" /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function About({ L }: { L: typeof t.en }) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 lg:px-10 py-24 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-5">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-rust">{L.aboutKicker}</p>
        <h2 className="mt-3 font-display font-black text-4xl lg:text-5xl text-soil text-balance leading-[1.05]">
          {L.aboutTitle}
        </h2>
      </div>
      <div className="lg:col-span-7 space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">{L.aboutBody}</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {L.aboutPills.map(p=>(
            <li key={p} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <span className="h-8 w-8 grid place-items-center rounded-full bg-harvest text-soil"><CheckCircle2 className="h-4 w-4"/></span>
              <span className="font-semibold text-soil">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services({ L }: { L: typeof t.en }) {
  const icons = [Tractor, Wrench, Cog, Sprout, Truck];
  return (
    <section id="services" className="bg-soil text-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-harvest">{L.servicesKicker}</p>
            <h2 className="mt-3 font-display font-black text-4xl lg:text-5xl text-balance max-w-2xl leading-[1.05]">
              {L.servicesTitle}
            </h2>
          </div>
          <a href={`tel:+91${PHONE_1}`} className="inline-flex items-center gap-2 text-harvest hover:text-cream font-semibold">
            {L.talk} <ArrowUpRight className="h-4 w-4"/>
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {L.services.map(([title, desc], i) => {
            const Icon = icons[i];
            return (
              <motion.div key={title}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
                className="group relative rounded-2xl border border-cream/10 bg-cream/[0.04] p-7 hover:bg-harvest hover:text-soil transition-all duration-300">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-12 w-12 grid place-items-center rounded-xl bg-harvest text-soil group-hover:bg-soil group-hover:text-harvest transition">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl text-cream/20 group-hover:text-soil/30">0{i+1}</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2 leading-tight">{title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Equipment({ L }: { L: typeof t.en }) {
  const imgs = [eqTractor575, eqTractor475, eqRotavator, eqTrailer, eqTanker];
  return (
    <section id="equipment" className="mx-auto max-w-7xl px-5 lg:px-10 py-24">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-rust">{L.equipKicker}</p>
          <h2 className="mt-3 font-display font-black text-4xl lg:text-5xl text-soil leading-[1.05]">{L.equipTitle}</h2>
        </div>
        <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-semibold text-soil hover:text-rust">
          {L.enquire} <ArrowUpRight className="h-4 w-4"/>
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {L.equipment.map(([title, tag, desc], i)=>(
          <motion.article key={title}
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}}
            className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-rust transition">
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img src={imgs[i]} alt={title} loading="lazy" width={800} height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-cream text-soil px-2 py-1 rounded-full">{tag}</span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-bold text-soil leading-tight">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function WhyUs({ L }: { L: typeof t.en }) {
  return (
    <section id="why-us" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-rust">{L.whyKicker}</p>
          <h2 className="mt-3 font-display font-black text-4xl lg:text-5xl text-soil text-balance leading-[1.05]">
            {L.whyTitle}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {L.reasons.map(([t, d], i)=>(
            <div key={t}
              className="group bg-cream p-8 hover:bg-soil hover:text-cream transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-display text-sm text-rust group-hover:text-harvest">0{i+1}</span>
                <ShieldCheck className="h-5 w-5 text-leaf group-hover:text-harvest"/>
              </div>
              <h3 className="font-display text-xl font-bold mb-2 leading-tight">{t}</h3>
              <p className="text-sm opacity-75 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ L }: { L: typeof t.en }) {
  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-10 py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-rust">{L.voiceKicker}</p>
        <h2 className="mt-3 font-display font-black text-4xl lg:text-5xl text-soil leading-[1.05]">{L.voiceTitle}</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {L.testimonials.map(([q, n, r],i)=>(
          <motion.div key={i}
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
            className="rounded-2xl border border-border bg-card p-7 relative">
            <Quote className="absolute top-5 right-5 h-8 w-8 text-harvest/40"/>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_,j)=><Star key={j} className="h-4 w-4 fill-harvest text-harvest"/>)}
            </div>
            <p className="font-display text-lg text-soil leading-snug">"{q}"</p>
            <div className="mt-5 pt-5 border-t border-border">
              <div className="font-semibold text-soil">{n}</div>
              <div className="text-xs text-muted-foreground">{r}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact({ L }: { L: typeof t.en }) {
  return (
    <section id="contact" className="bg-soil text-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-harvest">{L.contactKicker}</p>
          <h2 className="mt-3 font-display font-black text-4xl lg:text-5xl text-balance leading-[1.05]">
            {L.contactTitle}
          </h2>
          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <span className="h-11 w-11 grid place-items-center rounded-full bg-harvest text-soil flex-shrink-0"><MapPin className="h-5 w-5"/></span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-harvest mb-1">{L.address}</div>
                <p className="text-cream/90 leading-relaxed">
                  Main Road, Near G.H Hospital,<br/>
                  N. Kandhampalayam, Paramathi Velur,<br/>
                  Namakkal — 637203
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="relative h-11 w-11 grid place-items-center rounded-full bg-rust text-cream flex-shrink-0">
                <Phone className="h-5 w-5"/>
                <span className="absolute inset-0 rounded-full animate-pulse-ring"/>
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-harvest mb-1">{L.phone}</div>
                <a href={`tel:+91${PHONE_1}`} className="block font-display text-2xl font-bold hover:text-harvest tracking-tight">94433 61295</a>
                <a href={`tel:+91${PHONE_2}`} className="block font-display text-2xl font-bold hover:text-harvest tracking-tight">93823 34477</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="h-11 w-11 grid place-items-center rounded-full bg-leaf text-cream flex-shrink-0"><Clock className="h-5 w-5"/></span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-harvest mb-1">{L.hours}</div>
                <p className="text-cream/90 font-semibold">{L.hoursLine}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="h-11 w-11 grid place-items-center rounded-full bg-cream/10 text-harvest flex-shrink-0"><Languages className="h-5 w-5"/></span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-harvest mb-1">Languages</div>
                <p className="text-cream/90">{L.langs}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-cream/[0.05] border border-cream/10 p-8 lg:p-10">
            <h3 className="font-display text-2xl font-bold mb-6">{L.quickActions}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <a href={`tel:+91${PHONE_1}`} className="flex items-center justify-between rounded-xl bg-harvest text-soil p-5 font-semibold hover:brightness-95 transition">
                <span className="flex items-center gap-3"><Phone className="h-5 w-5"/> {L.callNow}</span>
                <ArrowUpRight className="h-5 w-5"/>
              </a>
              <a href={WA} target="_blank" rel="noopener" className="flex items-center justify-between rounded-xl bg-leaf text-cream p-5 font-semibold hover:brightness-110 transition">
                <span className="flex items-center gap-3"><WhatsAppIcon /> {L.whatsapp}</span>
                <ArrowUpRight className="h-5 w-5"/>
              </a>
              <a href={MAPS} target="_blank" rel="noopener" className="flex items-center justify-between rounded-xl bg-cream text-soil p-5 font-semibold hover:bg-cream/90 transition">
                <span className="flex items-center gap-3"><MapPin className="h-5 w-5"/> {L.googleMaps}</span>
                <ArrowUpRight className="h-5 w-5"/>
              </a>
              <a href={`tel:+91${PHONE_2}`} className="flex items-center justify-between rounded-xl border border-cream/20 p-5 font-semibold hover:bg-cream/5 transition">
                <span className="flex items-center gap-3"><Phone className="h-5 w-5"/> {L.altNumber}</span>
                <ArrowUpRight className="h-5 w-5"/>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-cream/10">
              <div className="text-[11px] uppercase tracking-[0.2em] text-harvest mb-3">Follow us</div>
              <div className="flex gap-3">
                {[
                  { Icon: WhatsAppIcon, href: WA, label: "WhatsApp" },
                  { Icon: InstagramIcon, href: "#", label: "Instagram" },
                  { Icon: FacebookIcon, href: "#", label: "Facebook" },
                  { Icon: YouTubeIcon, href: "#", label: "YouTube" },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener" aria-label={label}
                    className="h-11 w-11 grid place-items-center rounded-full bg-cream/10 hover:bg-harvest hover:text-soil text-cream transition">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ L }: { L: typeof t.en }) {
  return (
    <footer className="bg-cream border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-md bg-soil text-cream grid place-items-center"><Tractor className="h-4 w-4"/></div>
          <div className="font-display font-bold text-soil tracking-tight">Sri Mariamman Tractor Center</div>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} · {L.footerNote}</p>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a href={WA} target="_blank" rel="noopener" aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-leaf text-cream grid place-items-center shadow-2xl hover:scale-110 transition">
      <WhatsAppIcon className="h-6 w-6"/>
      <span className="absolute inset-0 rounded-full animate-pulse-ring"/>
    </a>
  );
}
