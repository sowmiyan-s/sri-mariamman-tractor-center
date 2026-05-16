import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Phone, MapPin, Wrench, Cog, Sprout, Truck, Handshake,
  ShieldCheck, Star, ArrowUpRight, Tractor, Quote, CheckCircle2, Clock, Languages,
} from "lucide-react";
import heroTractor from "@/assets/hero-tractor.jpg";
import eqRotavator from "@/assets/eq-rotavator.jpg";
import eqTanker from "@/assets/eq-tanker.jpg";
import eqTractor575 from "@/assets/eq-tractor-575.jpg";
import eqTractor475 from "@/assets/eq-tractor-475.jpg";
import { Scrollytelling } from "@/components/Scrollytelling";
import { CustomCursor } from "@/components/CustomCursor";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Hero3D } from "@/components/Hero3D";
import { Suspense } from "react";

const PHONE_1 = "9443361295";
const PHONE_2 = "9382334477";
const WA = `https://wa.me/91${PHONE_1}?text=${encodeURIComponent("Hello Sri Mariamman Tractor Center, I'd like to know more about your tractors and services.")}`;
const MAPS = "https://maps.app.goo.gl/ie2L7h3c2tf3VtHn6";
const MAPS_EMBED = "https://www.google.com/maps?q=Sri+Mariamman+Tractor+Center+Paramathi+Velur+Namakkal&output=embed";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "Sri Mariamman Tractor Center",
  description: "Trusted tractor sales, brokerage, service, spare parts and agricultural equipment in Namakkal. 25+ years of experience, 1,000+ farmers served.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Road, Near G.H Hospital, N. Kandampalayam",
    addressLocality: "Paramathi Velur",
    addressRegion: "Tamil Nadu",
    postalCode: "637203",
    addressCountry: "IN",
  },
  telephone: ["+91-9443361295", "+91-9382334477"],
  priceRange: "₹₹",
  hasMap: MAPS,
  url: "https://srimariammantractor.in/",
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    opens: "08:00", closes: "19:00",
  }],
  areaServed: "Namakkal, Tamil Nadu",
  makesOffer: [
    "Mahindra 575 DI", "Mahindra 475 DI", "Tractor Sales", "Tractor Brokerage",
    "Tractor Service", "Genuine Spare Parts", "Rotavator", "Water Tanker",
  ],
  sameAs: [`https://wa.me/91${PHONE_1}`],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sri Mariamman Tractor Center — Sales, Broker & Service, Namakkal" },
      { name: "description", content: "25+ years of trusted Mahindra tractor sales, brokerage, servicing & spare parts in Paramathi Velur, Namakkal. 1,000+ farmers served. Mon–Fri 8am–7pm." },
      { name: "keywords", content: "tractor service Namakkal, tractor broker Namakkal, Mahindra 575, Mahindra 475, Paramathi Velur, rotavator, water tanker, agricultural equipment Tamil Nadu" },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Paramathi Velur, Namakkal" },
      { property: "og:title", content: "Sri Mariamman Tractor Center — Namakkal" },
      { property: "og:description", content: "25+ years · 1,000+ farmers served. Tractor sales, broker, service & spares in Paramathi Velur, Namakkal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://srimariammantractor.in/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessSchema) }],
  }),
});

// ───────────────── i18n ─────────────────
type Lang = "en" | "ta";
const t = {
  en: {
    nav: ["About", "Services", "Equipment", "Why Us", "Contact"],
    badge: "ESTABLISHED 25+ YEARS · NAMAKKAL",
    h1a: "Powering modern", h1b: "agriculture", h1c: "with trusted tractor solutions.",
    sub: "Sales · Brokerage · Service · Agricultural Equipment · Spare Parts. Built for farmers who demand reliability — every season, every harvest.",
    callNow: "Call Now", whatsapp: "WhatsApp", viewTractors: "View Tractors",
    stats: [["25+","Years experience"],["1,000+","Farmers served"],["Mon–Fri","8 AM – 7 PM"]],
    locStrip: "Near G.H · N. Kandampalayam · P. Velur (Tk) · Namakkal (Dt) · Tamil Nadu — 637203",
    aboutKicker: "About us",
    aboutTitle: "Trusted tractor experts serving 1,000+ farmers in Namakkal.",
    aboutBody: "Sri Mariamman Tractor Center is a family-run dealership and service center providing reliable tractor sales, trusted brokerage of pre-owned tractors, agricultural equipment, genuine spare parts and field servicing for farmers across Namakkal and nearby districts.",
    aboutPills: ["Quality service","Genuine parts","Fair brokerage","Customer satisfaction"],
    servicesKicker: "What we do",
    servicesTitle: "Everything your tractor needs — under one roof.",
    talk: "Talk to a specialist",
    services: [
      ["Tractor Sales","New Mahindra tractors with the right HP for your farm."],
      ["Tractor Broker","Honest brokerage of used tractors — fair valuation, verified buyers & sellers."],
      ["Tractor Service","Engine repair, periodic maintenance, oil service & full inspection."],
      ["Genuine Spare Parts","OEM-quality tractor spare parts always in stock."],
      ["Agricultural Equipment","Rotavators, cultivators, ploughs, sprayers and water tankers."],
      ["Doorstep Field Support","Quick on-site assistance across nearby villages."],
    ],
    equipKicker: "Featured equipment",
    equipTitle: "Workhorses for every field.",
    enquire: "Enquire on WhatsApp",
    equipment: [
      ["Mahindra 575 DI","Bestseller","India's most loved 47 HP workhorse — fuel-efficient and powerful."],
      ["Mahindra 475 DI","Classic","Reliable 42 HP all-rounder, perfect for medium farms."],
      ["Rotavator","Implement","Heavy-duty soil prep with even tilling depth."],
      ["Water Tanker","Irrigation","High-capacity tanker for irrigation & water transport."],
    ],
    whyKicker: "Why choose us",
    whyTitle: "Built on trust. Backed by 25 years of service.",
    reasons: [
      ["Experienced technicians","25+ years on the field."],
      ["Genuine spare parts","Sourced from authorized OEMs."],
      ["Fast servicing","Minimum downtime, maximum harvest."],
      ["Affordable pricing","Honest quotes, no surprises."],
      ["1,000+ farmers served","Loved across Namakkal region."],
      ["Customer-first support","We pick up. We show up."],
    ],
    voiceKicker: "Farmer voices",
    voiceTitle: "Trusted across the region.",
    testimonials: [
      ["Best tractor service in Namakkal. Quick response and genuine parts.","Murugan S.","Paramathi Velur"],
      ["They helped me sell my old Mahindra at a fair price. Honest brokers.","Karthik R.","Namakkal"],
      ["Fixed my tractor in a day during harvest. Lifesavers.","Selvam P.","Velur"],
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
    sub: "விற்பனை · தரகு · சேவை · விவசாய உபகரணங்கள் · உதிரி பாகங்கள். நம்பகத்தன்மையை விரும்பும் விவசாயிகளுக்காக.",
    callNow: "அழைக்கவும்", whatsapp: "வாட்ஸ்அப்", viewTractors: "டிராக்டர்கள்",
    stats: [["25+","ஆண்டுகள்"],["1,000+","விவசாயிகள்"],["திங்–வெள்","8 AM – 7 PM"]],
    locStrip: "G.H அருகில் · N. கந்தம்பாளையம் · ப.வேலூர் (வட்டம்) · நாமக்கல் (மாவட்டம்) · தமிழ்நாடு — 637203",
    aboutKicker: "எங்களைப் பற்றி",
    aboutTitle: "நாமக்கலில் 1,000+ விவசாயிகளுக்கு சேவை செய்த நம்பகமான நிபுணர்கள்.",
    aboutBody: "ஸ்ரீ மாரியம்மன் டிராக்டர் சென்டர் ஒரு குடும்ப நடத்தும் டீலர்ஷிப் & சர்வீஸ் சென்டர் — புதிய டிராக்டர் விற்பனை, பழைய டிராக்டர் தரகு (பிராக்கர்), விவசாய உபகரணங்கள், ஒரிஜினல் உதிரி பாகங்கள் மற்றும் கள சேவை வழங்குகிறது.",
    aboutPills: ["தரமான சேவை","ஒரிஜினல் பாகங்கள்","நேர்மையான தரகு","வாடிக்கையாளர் திருப்தி"],
    servicesKicker: "நாங்கள் செய்வது",
    servicesTitle: "உங்கள் டிராக்டருக்கு தேவையான அனைத்தும் — ஒரே இடத்தில்.",
    talk: "நிபுணரிடம் பேசுங்கள்",
    services: [
      ["டிராக்டர் விற்பனை","உங்கள் பண்ணைக்கு ஏற்ற புதிய மஹிந்திரா டிராக்டர்கள்."],
      ["டிராக்டர் தரகு","பழைய டிராக்டருக்கு நேர்மையான தரகு — சரியான விலை, நம்பகமான வாங்குபவர் & விற்பவர்."],
      ["டிராக்டர் சேவை","என்ஜின் ரிப்பேர், பராமரிப்பு, ஆயில் சர்வீஸ் & பரிசோதனை."],
      ["ஒரிஜினல் உதிரி பாகங்கள்","OEM தரத்தில் டிராக்டர் உதிரி பாகங்கள்."],
      ["விவசாய உபகரணங்கள்","ரோட்டாவேட்டர், கல்டிவேட்டர், கலப்பை, ஸ்ப்ரேயர், தண்ணீர் டாங்கர்."],
      ["வீடு சேவை","அருகிலுள்ள கிராமங்களில் விரைவான களச் சேவை."],
    ],
    equipKicker: "சிறப்பு உபகரணங்கள்",
    equipTitle: "ஒவ்வொரு வயலுக்கும் வேலைக்காரர்கள்.",
    enquire: "வாட்ஸ்அப்பில் கேளுங்கள்",
    equipment: [
      ["மஹிந்திரா 575 DI","அதிகம் விற்பனை","இந்தியாவின் விரும்பப்படும் 47 HP — எரிபொருள் சிக்கனம்."],
      ["மஹிந்திரா 475 DI","கிளாசிக்","நம்பகமான 42 HP, நடுத்தர பண்ணைகளுக்கு ஏற்றது."],
      ["ரோட்டாவேட்டர்","உபகரணம்","சீரான ஆழத்தில் கடினமான மண் தயாரிப்பு."],
      ["தண்ணீர் டாங்கர்","பாசனம்","பாசனம் மற்றும் தண்ணீர் கொண்டு செல்ல உயர் கொள்ளளவு டாங்கர்."],
    ],
    whyKicker: "ஏன் நாங்கள்",
    whyTitle: "நம்பிக்கையில் கட்டப்பட்டது. 25 ஆண்டு சேவையால் ஆதரிக்கப்பட்டது.",
    reasons: [
      ["அனுபவமிக்க தொழில்நுட்ப வல்லுநர்கள்","களத்தில் 25+ ஆண்டுகள்."],
      ["ஒரிஜினல் உதிரி பாகங்கள்","அங்கீகரிக்கப்பட்ட OEM-களிடமிருந்து."],
      ["விரைவான சேவை","குறைந்த நேர விரயம், அதிக அறுவடை."],
      ["மலிவான விலை","நேர்மையான விலை, மறைவில்லை."],
      ["1,000+ விவசாயிகள்","நாமக்கல் முழுவதும் விரும்பப்படுகிறது."],
      ["வாடிக்கையாளர் முதல்","நாங்கள் பதிலளிப்போம். வந்து சேருவோம்."],
    ],
    voiceKicker: "விவசாயிகளின் குரல்",
    voiceTitle: "மக்கள் நம்பும் சேவை.",
    testimonials: [
      ["நாமக்கலில் சிறந்த டிராக்டர் சேவை. விரைவான பதில் & ஒரிஜினல் பாகங்கள்.","முருகன் எஸ்.","பரமத்தி வேலூர்"],
      ["என் பழைய மஹிந்திராவை நல்ல விலையில் விற்க உதவினர். நேர்மையான தரகர்கள்.","கார்த்திக் ஆர்.","நாமக்கல்"],
      ["அறுவடை நேரத்தில் என் டிராக்டரை ஒரே நாளில் சரி செய்தனர். உயிர் காப்பாளர்கள்.","செல்வம் பி.","வேலூர்"],
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
    <main className="relative min-h-screen cursor-none overflow-x-hidden">
      <CustomCursor />
      <Scrollytelling />
      <Nav L={L} lang={lang} setLang={setLang} />
      <Hero L={L} />
      <LocationStrip L={L} />
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
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-5 pointer-events-none">
      <div className="pointer-events-auto glass flex items-center gap-8 rounded-full px-8 py-3">
        <nav className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-soil/80">
          {L.nav.map((label, i) => {
            const slugs = ["about","services","equipment","why-us","contact"];
            return <a key={i} href={`#${slugs[i]}`} className="hover:text-primary transition-colors">
              {label}
            </a>;
          })}
        </nav>
        <div className="h-4 w-px bg-soil/20" />
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-soil/60 hover:text-primary transition"
            aria-label="Toggle language">
            {lang === "en" ? "TA" : "EN"}
          </button>
          <MagneticButton>
            <a href={`tel:+91${PHONE_1}`} className="h-10 w-10 rounded-full bg-primary text-white grid place-items-center hover:scale-110 transition shadow-lg shadow-primary/20">
              <Phone className="h-4 w-4" />
            </a>
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}

function Hero({ L }: { L: typeof t.en }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      <Suspense fallback={null}>
        <Hero3D />
      </Suspense>
      <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <motion.div className="lg:col-span-6" style={{ opacity }}>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
            className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.32em] uppercase text-soil/70">
            <span className="h-px w-10 bg-soil/40" />
            {L.badge}
          </motion.div>
          <motion.h1
            initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.9, ease: [0.16, 1, 0.3, 1], delay:0.2}}
            className="mt-7 font-display font-black text-soil leading-[0.9] text-balance text-5xl sm:text-7xl lg:text-[6.5rem] tracking-tighter text-readable-strong">
            {L.h1a} <em className="italic font-light text-primary">{L.h1b}</em> {L.h1c}
          </motion.h1>
          <p className="mt-4 font-display italic text-xl text-rust text-readable" style={{ fontFamily: 'var(--font-tamil)' }}>
            ஸ்ரீ மாரியம்மன் டிராக்டர் சென்டர்
          </p>
          <p className="mt-6 text-lg text-soil/85 max-w-xl leading-relaxed font-medium text-readable">{L.sub}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton>
              <a href={`tel:+91${PHONE_1}`}
                className="group inline-flex items-center gap-2.5 rounded-full bg-soil text-white pl-5 pr-2 py-2 text-base font-semibold hover:bg-primary transition shadow-lg shadow-soil/20">
                <Phone className="h-5 w-5" /> {L.callNow}
                <span className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-primary text-white group-hover:rotate-45 transition">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href={WA} target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-soil/15 bg-white/40 backdrop-blur-xl px-6 py-3 text-base font-semibold text-soil hover:border-primary transition shadow-lg shadow-soil/5">
                <WhatsAppIcon className="h-5 w-5 text-primary" /> {L.whatsapp}
              </a>
            </MagneticButton>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {L.stats.map(([k, v]) => (
              <div key={v} className="glass-soft rounded-2xl px-4 py-3">
                <div className="font-display text-3xl font-black text-soil tracking-tighter">{k}</div>
                <div className="text-[10px] text-soil/70 uppercase tracking-[0.2em] mt-1 font-bold">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-3xl rounded-full" />
          <motion.div
            initial={{opacity:0, x: 50}} animate={{opacity:1, x: 0}} transition={{duration:1, ease: [0.16, 1, 0.3, 1]}}
            style={{ y }}
            className="relative">
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-primary/20 blur-xl" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full border-4 border-soil/5" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] animate-float-slow aspect-[4/5]">
              <img src={heroTractor} alt="Mahindra 575 DI tractor"
                width={1280} height={1600} className="w-full h-full object-cover img-premium" />
            </div>
            <motion.div
              initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} transition={{delay:0.8}}
              className="glass absolute -left-4 bottom-10 hidden sm:flex items-center gap-4 rounded-3xl px-6 py-5">
              <div className="h-12 w-12 rounded-2xl bg-primary text-white grid place-items-center shadow-lg">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-soil/70 font-black mb-1">{L.hours}</div>
                <div className="font-black text-soil text-sm tracking-tight">{L.hoursLine}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Marquee />
    </section>
  );
}

function LocationStrip({ L }: { L: typeof t.en }) {
  return (
    <a href={MAPS} target="_blank" rel="noopener"
      className="block bg-primary text-white hover:bg-soil transition duration-500">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-4 flex items-center justify-center gap-4 text-center">
        <MapPin className="h-4 w-4 flex-shrink-0" />
        <p className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em]">{L.locStrip}</p>
        <ArrowUpRight className="h-4 w-4 flex-shrink-0" />
      </div>
    </a>
  );
}

function Marquee() {
  const items = ["Mahindra 575 DI", "Mahindra 475 DI", "Tractor Brokerage", "Genuine Spare Parts", "Field Service", "Rotavators", "Water Tankers", "Engine Repair"];
  const row = [...items, ...items];
  return (
    <div className="glass-dark text-white py-6 overflow-hidden border-y border-white/10">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {row.map((t,i)=>(
          <span key={i} className="inline-flex items-center gap-4 font-display font-black text-2xl tracking-tighter uppercase opacity-80 hover:opacity-100 transition-opacity">
            <Sprout className="h-5 w-5 text-primary" /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function About({ L }: { L: typeof t.en }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="about" 
      className="relative mx-auto max-w-7xl px-5 lg:px-10 py-40 grid lg:grid-cols-12 gap-16 items-center"
    >
      <div className="lg:col-span-5">
        <p className="text-xs font-black tracking-[0.4em] uppercase text-primary mb-6 text-readable">{L.aboutKicker}</p>
        <h2 className="font-display font-black text-4xl lg:text-7xl text-soil tracking-tighter leading-[0.9] text-readable-strong">
          {L.aboutTitle}
        </h2>
      </div>
      <div className="lg:col-span-7">
        <p className="text-xl text-soil/85 leading-relaxed font-medium mb-12 text-readable">{L.aboutBody}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {L.aboutPills.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass flex items-center gap-4 rounded-[2rem] p-5 hover:border-primary/60 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="h-10 w-10 grid place-items-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                <CheckCircle2 className="h-5 w-5"/>
              </div>
              <span className="font-black text-soil text-sm uppercase tracking-widest">{p}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Services({ L }: { L: typeof t.en }) {
  const icons = [Tractor, Handshake, Wrench, Cog, Sprout, Truck];
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="services" 
      className="relative py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10 relative z-10">
        <div className="flex items-end justify-between flex-wrap gap-8 mb-20">
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>
            <p className="text-xs font-black tracking-[0.4em] uppercase text-primary mb-4 text-readable">{L.servicesKicker}</p>
            <h2 className="font-display font-black text-4xl lg:text-7xl text-balance max-w-3xl leading-[0.9] tracking-tighter text-soil text-readable-strong">
              {L.servicesTitle}
            </h2>
          </motion.div>
          <MagneticButton>
            <a href={`tel:+91${PHONE_1}`} className="inline-flex items-center gap-3 bg-soil text-white px-8 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-primary transition-all duration-500 shadow-2xl">
              {L.talk} <ArrowUpRight className="h-5 w-5"/>
            </a>
          </MagneticButton>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {L.services.map(([title, desc], i) => {
            const Icon = icons[i];
            return (
              <motion.div key={title}
                initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06, duration:0.5}}
                className="group glass relative rounded-[2.5rem] p-10 hover:-translate-y-3 hover:border-primary/60 transition-all duration-500">
                <div className="flex items-center justify-between mb-12">
                  <div className="h-16 w-16 grid place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30 group-hover:rotate-6 transition-transform duration-500">
                    <Icon className="h-8 w-8" />
                  </div>
                  <span className="font-display font-black text-6xl opacity-10 group-hover:opacity-20 transition-opacity tracking-tighter text-soil">0{i+1}</span>
                </div>
                <h3 className="font-display text-3xl font-black mb-4 leading-[0.9] tracking-tighter uppercase text-soil">{title}</h3>
                <p className="text-base text-soil/80 leading-relaxed font-medium">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function Equipment({ L }: { L: typeof t.en }) {
  const imgs = [eqTractor575, eqTractor475, eqRotavator, eqTanker];
  const alts = [
    "Mahindra 575 DI tractor for farming",
    "Mahindra 475 DI tractor for medium farms",
    "Agricultural rotavator for soil preparation",
    "High-capacity water tanker for farm irrigation",
  ];
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="equipment" 
      className="relative mx-auto max-w-7xl px-5 lg:px-10 py-40"
    >
      <div className="flex items-end justify-between flex-wrap gap-8 mb-16">
        <div>
          <p className="text-xs font-black tracking-[0.4em] uppercase text-primary mb-4 text-readable">{L.equipKicker}</p>
          <h2 className="font-display font-black text-4xl lg:text-7xl text-soil tracking-tighter leading-[0.9] text-readable-strong">
            {L.equipTitle}
          </h2>
        </div>
        <a href={WA} target="_blank" rel="noopener" className="font-black uppercase tracking-widest text-xs text-soil hover:text-primary transition group text-readable">
          {L.enquire} <ArrowUpRight className="inline-block h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-1"/>
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {L.equipment.map(([title, tag, desc], i)=>(
          <motion.article key={title}
            initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08, duration:0.5}}
            className="group glass rounded-[2rem] overflow-hidden hover:border-primary/60 hover:-translate-y-2 transition-all duration-700">
            <div className="relative aspect-[3/4] overflow-hidden bg-white/10">
              <img src={imgs[i]} alt={alts[i]} loading="lazy" width={800} height={1000}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-1000 img-premium" />
              <div className="absolute top-6 left-6 glass-soft px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-soil">
                {tag}
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-black text-soil leading-tight tracking-tight mb-2">{title}</h3>
              <p className="text-sm text-soil/80 leading-relaxed font-medium">{desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function WhyUs({ L }: { L: typeof t.en }) {
  return (
    <section id="why-us" className="py-40">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="max-w-2xl mb-24">
          <p className="text-xs font-black tracking-[0.4em] uppercase text-primary mb-6 text-readable">{L.whyKicker}</p>
          <h2 className="font-display font-black text-4xl lg:text-7xl text-soil tracking-tighter leading-[0.9] text-readable-strong">
            {L.whyTitle}
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {L.reasons.map(([t, d], i)=>(
            <motion.div key={t}
              initial={{opacity:0, y: 20}} whileInView={{opacity:1, y: 0}} viewport={{once:true}} transition={{delay:i*0.1}}
              className="group glass relative rounded-[2.5rem] p-10 hover:-translate-y-2 hover:border-primary/60 transition-all duration-500">
              <div className="h-16 w-16 rounded-2xl bg-soil text-white grid place-items-center mb-8 group-hover:bg-primary transition-all duration-500 shadow-2xl group-hover:shadow-primary/40 group-hover:-rotate-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-black mb-4 tracking-tighter uppercase leading-[1.1] text-soil">{t}</h3>
              <p className="text-base text-soil/80 leading-relaxed font-medium">{d}</p>
              <div className="mt-8 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ L }: { L: typeof t.en }) {
  return (
    <section className="py-40">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-2xl mx-auto mb-24">
          <p className="text-xs font-black tracking-[0.4em] uppercase text-primary mb-6 text-readable">{L.voiceKicker}</p>
          <h2 className="font-display font-black text-4xl lg:text-7xl text-soil tracking-tighter leading-[0.9] text-readable-strong">{L.voiceTitle}</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {L.testimonials.map(([q, n, r], i)=>(
            <motion.div key={i}
              initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
              className="glass rounded-[2.5rem] p-12 relative hover:-translate-y-2 hover:border-primary/60 transition-all duration-500">
              <Quote className="absolute top-12 right-12 h-12 w-12 text-primary/15"/>
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_,j)=><Star key={j} className="h-4 w-4 fill-primary text-primary"/>)}
              </div>
              <p className="font-display text-2xl font-black text-soil leading-[1.1] tracking-tight mb-10">"{q}"</p>
              <div className="pt-8 border-t border-white/30">
                <div className="font-black text-soil uppercase tracking-widest text-sm mb-1">{n}</div>
                <div className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{r}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ L }: { L: typeof t.en }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="contact" 
      className="mx-auto max-w-7xl px-5 lg:px-10 py-40"
    >
      <div className="grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <p className="text-xs font-black tracking-[0.4em] uppercase text-primary mb-6 text-readable">{L.contactKicker}</p>
          <h2 className="font-display font-black text-4xl lg:text-7xl text-soil leading-[0.9] tracking-tighter text-readable-strong">
            {L.contactTitle}
          </h2>
          <div className="mt-16 space-y-8">
            <div className="glass flex gap-6 rounded-[2rem] p-6">
              <div className="h-16 w-16 rounded-2xl bg-soil text-white grid place-items-center flex-shrink-0 shadow-xl">
                <Phone className="h-7 w-7" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-soil/70 mb-2">{L.phone}</div>
                <a href={`tel:+91${PHONE_1}`} className="block text-2xl font-black text-soil hover:text-primary transition-colors tracking-tighter">94433 61295</a>
                <a href={`tel:+91${PHONE_2}`} className="block text-2xl font-black text-soil hover:text-primary transition-colors tracking-tighter">93823 34477</a>
              </div>
            </div>
            <div className="glass flex gap-6 rounded-[2rem] p-6">
              <div className="h-16 w-16 rounded-2xl bg-primary text-white grid place-items-center flex-shrink-0 shadow-xl shadow-primary/30">
                <MapPin className="h-7 w-7" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-soil/70 mb-2">{L.address}</div>
                <p className="text-xl font-black text-soil tracking-tight leading-tight">{L.locStrip}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 glass-dark rounded-[3rem] text-white p-12 lg:p-16 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 h-64 w-64 bg-primary/10 blur-[100px] pointer-events-none" />
          <div>
            <h3 className="font-display text-4xl font-black mb-10 tracking-tighter uppercase">{L.quickActions}</h3>
            <div className="grid gap-6">
              <MagneticButton>
                <a href={WA} target="_blank" rel="noopener" className="flex items-center justify-between rounded-3xl bg-white text-soil p-8 font-black uppercase tracking-[0.2em] text-xs hover:bg-primary hover:text-white transition-all duration-500 shadow-xl group">
                  <span className="flex items-center gap-6"><WhatsAppIcon className="h-8 w-8" /> {L.whatsapp}</span>
                  <ArrowUpRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href={MAPS} target="_blank" rel="noopener" className="flex items-center justify-between rounded-3xl border-2 border-white/10 p-8 font-black uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all group">
                  <span className="flex items-center gap-6"><MapPin className="h-8 w-8" /> {L.googleMaps}</span>
                  <ArrowUpRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </MagneticButton>
            </div>
          </div>
          <div className="mt-16 pt-16 border-t border-white/5 flex flex-wrap gap-8">
            {[WhatsAppIcon, InstagramIcon, FacebookIcon, YouTubeIcon].map((Icon, i) => (
              <MagneticButton key={i}>
                <a href="#" className="h-14 w-14 rounded-2xl bg-white/5 grid place-items-center hover:bg-primary transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </a>
              </MagneticButton>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Footer({ L }: { L: typeof t.en }) {
  return (
    <footer className="glass-dark text-white/90 border-t border-white/10 py-20 mt-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-soil text-white grid place-items-center shadow-2xl">
              <Tractor className="h-8 w-8" />
            </div>
            <div>
              <div className="font-display font-black text-soil text-2xl tracking-tighter uppercase leading-none mb-1">Sri Mariamman</div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-primary font-black">Tractor Center</div>
            </div>
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-soil/40">
            {L.nav.map((l, i) => (
              <a key={i} href={`#${["about","services","equipment","why-us","contact"][i]}`} className="hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-soil/20">
            © {new Date().getFullYear()} · {L.footerNote}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a href={WA} target="_blank" rel="noopener" aria-label="WhatsApp"
      className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full bg-leaf text-white grid place-items-center shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 transition duration-500">
      <WhatsAppIcon className="h-7 w-7"/>
      <span className="absolute inset-0 rounded-full animate-pulse-ring"/>
    </a>
  );
}
