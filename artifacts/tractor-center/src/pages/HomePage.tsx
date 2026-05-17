import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Wrench,
  Cog,
  Sprout,
  Truck,
  Handshake,
  ArrowUpRight,
  Tractor,
  Quote,
  Star,
  Clock,
} from "lucide-react";
import eqRotavator from "@/assets/eq-rotavator.png";
import eqTrailer from "@/assets/eq-trailer.png";
import eqTractor575 from "@/assets/eq-tractor-575.png";
import eqTractor475 from "@/assets/eq-tractor-475.png";
import eqMechanic from "@/assets/eq-servicing.png";
import { Scrollytelling } from "@/components/Scrollytelling";
import { MagneticButton } from "@/components/ui/magnetic-button";

const PHONE_1 = "9443361295";
const PHONE_2 = "9382334477";
const WA = `https://wa.me/91${PHONE_1}?text=${encodeURIComponent("Hello Sri Mariamman Tractor Center, I'd like to know more about your tractors and services.")}`;
const MAPS = "https://maps.app.goo.gl/ie2L7h3c2tf3VtHn6";

type Lang = "en" | "ta";

const t = {
  en: {
    nav: ["About", "Services", "Equipment", "Why Us", "Contact"],
    badge: "ஸ்ரீ ஆச்சியம்மன் துணை",
    h1a: "Sri Mariamman",
    h1b: "Tractor Center",
    h1c: "Center",
    sub: "Sales · Brokerage · Service · Equipment · Spare Parts. Built for farmers who demand reliability.",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
    stats: [
      ["25+", "Years"],
      ["1,000+", "Farmers"],
      ["8 AM", "7 PM"],
    ] as [string, string][],
    locStrip: "Near G.H · N. Kandampalayam · P. Velur (Tk) · Namakkal (Dt) — 637203",
    aboutKicker: "Our Legacy",
    aboutTitle: "Trusted experts for 1,000+ farmers.",
    aboutBody:
      "Sri Mariamman Tractor Center is a heritage brand providing reliable tractor sales, trusted brokerage, and field servicing across Tamil Nadu.",
    aboutPills: ["Quality service", "Genuine parts", "Fair brokerage", "Customer trust"],
    servicesKicker: "Capabilities",
    servicesTitle: "Everything your tractor needs.",
    services: [
      ["Tractor Sales", "New Mahindra tractors with the right HP for your farm."],
      ["Tractor Broker", "Honest brokerage — fair valuation, verified sellers."],
      ["Tractor Service", "Engine repair, periodic maintenance & full inspection."],
      ["Genuine Parts", "OEM-quality tractor spare parts always in stock."],
      ["Equipment", "Rotavators, cultivators, ploughs and water tankers."],
      ["Field Support", "Quick on-site assistance across nearby villages."],
    ] as [string, string][],
    equipKicker: "Portfolio",
    equipTitle: "Workhorses for every field.",
    enquire: "Enquire Now",
    equipment: [
      ["Mahindra Tractor Expert", "Bestseller", "Complete engine overhaul, servicing & transmission repair."],
      ["Other Tractors Repair", "All Brands", "We repair John Deere, Swaraj, Massey Ferguson & more."],
      ["Rotavators Repair", "Implement", "Blade replacement, gearbox servicing and balancing."],
      ["Trailer Repair", "Heavy Duty", "Axle welding, hydraulic cylinder fixes & chassis repair."],
    ] as [string, string, string][],
    whyKicker: "Reliability",
    whyTitle: "Built on trust.",
    reasons: [
      ["Expert technicians", "25+ years on the field."],
      ["Genuine parts", "Sourced from authorized OEMs."],
      ["Fast servicing", "Minimum downtime, maximum harvest."],
      ["Affordable pricing", "Honest quotes, no surprises."],
      ["Local presence", "Loved across Namakkal region."],
      ["Customer first", "We pick up. We show up."],
    ] as [string, string][],
    voiceKicker: "Trust",
    voiceTitle: "What farmers say.",
    testimonials: [
      ["Best tractor service in Namakkal. Quick response and genuine parts.", "Murugan S.", "Paramathi Velur"],
      ["They helped me sell my old Mahindra at a fair price. Honest brokers.", "Karthik R.", "Namakkal"],
      ["Fixed my tractor in a day during harvest. Lifesavers.", "Selvam P.", "Velur"],
    ] as [string, string, string][],
    contactKicker: "Contact",
    contactTitle: "Visit us in Namakkal.",
    address: "Location",
    phone: "Direct Call",
    googleMaps: "Google Maps",
    footerNote: "N. Kandampalayam, Namakkal (Dt) - 637203",
  },
  ta: {
    nav: ["எங்களைப் பற்றி", "சேவைகள்", "உபகரணங்கள்", "ஏன் நாங்கள்", "தொடர்பு"],
    badge: "ஸ்ரீ ஆச்சியம்மன் துணை",
    h1a: "ஸ்ரீ மாரியம்மன்",
    h1b: "டிராக்டர் சென்டர்",
    h1c: "சென்டர்",
    sub: "விற்பனை · தரகு · சேவை · விவசாய உபகரணங்கள் · உதிரி பாகங்கள். நம்பகத்தன்மையை விரும்பும் விவசாயிகளுக்காக.",
    callNow: "அழைக்கவும்",
    whatsapp: "வாட்ஸ்அப்",
    stats: [
      ["25+", "ஆண்டுகள்"],
      ["1,000+", "விவசாயிகள்"],
      ["8 AM", "7 PM"],
    ] as [string, string][],
    locStrip: "G.H அருகில் · N. கந்தம்பாளையம் · ப.வேலூர் (வட்டம்) · நாமக்கல் — 637203",
    aboutKicker: "எங்கள் பாரம்பரியம்",
    aboutTitle: "1,000+ விவசாயிகளுக்கு சேவை செய்த நிபுணர்கள்.",
    aboutBody:
      "ஸ்ரீ மாரியம்மன் டிராக்டர் சென்டர் ஒரு பாரம்பரிய பிராண்ட் — புதிய டிராக்டர் விற்பனை, பழைய டிராக்டர் தரகு, விவசாய உபகரணங்கள் மற்றும் கள சேவை வழங்குகிறது.",
    aboutPills: ["தரமான சேவை", "ஒரிஜினல் பாகங்கள்", "நேர்மையான தரகு", "வாடிக்கையாளர் நம்பிக்கை"],
    servicesKicker: "திறன்கள்",
    servicesTitle: "உங்கள் டிராக்டருக்கு தேவையான அனைத்தும்.",
    services: [
      ["டிராக்டர் விற்பனை", "உங்கள் பண்ணைக்கு ஏற்ற மஹிந்திரா டிராக்டர்கள்."],
      ["டிராக்டர் தரகு", "பழைய டிராக்டருக்கு நேர்மையான தரகு — சரியான விலை."],
      ["டிராக்டர் சேவை", "என்ஜின் ரிப்பேர், பராமரிப்பு & பரிசோதனை."],
      ["உதிரி பாகங்கள்", "OEM தரத்தில் டிராக்டர் உதிரி பாகங்கள்."],
      ["உபகரணங்கள்", "ரோட்டாவேட்டர், கல்டிவேட்டர், தண்ணீர் டாங்கர்."],
      ["வீடு சேவை", "அருகிலுள்ள கிராமங்களில் விரைவான களச் சேவை."],
    ] as [string, string][],
    equipKicker: "தொகுப்பு",
    equipTitle: "ஒவ்வொரு வயலுக்கும் வேலைக்காரர்கள்.",
    enquire: "கேளுங்கள்",
    equipment: [
      ["மஹிந்திரா டிராக்டர் நிபுணர்", "அதிகம் விற்பனை", "முழுமையான என்ஜின், சர்வீஸ் & கியர்பாக்ஸ் ரிப்பேர்."],
      ["மற்ற டிராக்டர்கள் ரிப்பேர்", "அனைத்து பிராண்டுகள்", "ஜான் டீர், ஸ்வராஜ், மாஸ்ஸி பெர்குசன் ரிப்பேர்."],
      ["ரோட்டாவேட்டர் ரிப்பேர்", "உபகரணம்", "பிளேடு மாற்றுதல், கியர்பாக்ஸ் சர்வீஸ்."],
      ["டிரெய்லர் ரிப்பேர்", "ஹெவி டியூட்டி", "ஹைட்ராலிக் மற்றும் சேஸ் ரிப்பேர்."],
    ] as [string, string, string][],
    whyKicker: "நம்பகத்தன்மை",
    whyTitle: "நம்பிக்கையில் கட்டப்பட்டது.",
    reasons: [
      ["நிபுணர்கள்", "களத்தில் 25+ ஆண்டுகள்."],
      ["ஒரிஜினல் பாகங்கள்", "OEM-களிடமிருந்து."],
      ["விரைவான சேவை", "குறைந்த நேர விரயம்."],
      ["மலிவான விலை", "நேர்மையான விலை."],
      ["உள்ளூர் சேவை", "நாமக்கல் முழுவதும்."],
      ["வாடிக்கையாளர் முதல்", "நாங்கள் வந்து சேருவோம்."],
    ] as [string, string][],
    voiceKicker: "நம்பிக்கை",
    voiceTitle: "விவசாயிகளின் குரல்.",
    testimonials: [
      ["நாமக்கலில் சிறந்த டிராக்டர் சேவை. விரைவான பதில் & ஒரிஜினல் பாகங்கள்.", "முருகன் எஸ்.", "பரமத்தி வேலூர்"],
      ["என் பழைய மஹிந்திராவை நல்ல விலையில் விற்க உதவினர். நேர்மையான தரகர்கள்.", "கார்த்திக் ஆர்.", "நாமக்கல்"],
      ["அறுவடை நேரத்தில் என் டிராக்டரை ஒரே நாளில் சரி செய்தனர். உயிர் காப்பாளர்கள்.", "Selvam P.", "வேலூர்"],
    ] as [string, string, string][],
    contactKicker: "தொடர்பு",
    contactTitle: "நாமக்கலில் எங்களை சந்திக்கவும்.",
    address: "இடம்",
    phone: "அழைக்கவும்",
    googleMaps: "கூகிள் மேப்ஸ்",
    footerNote: "N. கந்தம்பாளையம், நாமக்கல் - 637203",
  },
};

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M.057 24l1.687-6.163A11.867 11.867 0 010 11.945C0 5.36 5.373 0 11.99 0a11.86 11.86 0 018.413 3.488 11.819 11.819 0 013.49 8.414c-.003 6.585-5.376 11.946-11.99 11.946a12.05 12.05 0 01-5.668-1.45L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const L = t[lang];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-transparent selection:bg-primary selection:text-white">
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
  const [isOpen, setIsOpen] = useState(false);
  const slugs = ["about", "services", "equipment", "why-us", "contact"];

  return (
    <header className="fixed top-4 md:top-8 inset-x-0 z-[100] flex flex-col items-center px-4 pointer-events-none">
      {/* Desktop & Mobile Capsule Dock */}
      <div className="pointer-events-auto w-full max-w-sm md:max-w-4xl flex flex-col items-stretch rounded-2xl md:rounded-full border-2 border-soil bg-white/90 backdrop-blur-3xl p-2 md:p-3 shadow-2xl transition-all duration-500 hover:shadow-primary/5">
        <div className="flex items-center justify-end md:justify-between gap-4 px-2 sm:px-4">
          


          {/* Inline Navigation (Desktop Only) */}
          <nav className="hidden md:flex items-center gap-6 text-[10px] font-mono font-black uppercase tracking-[0.15em] text-soil">
            {L.nav.map((label, i) => (
              <a
                key={i}
                href={`#${slugs[i]}`}
                className="hover:text-primary hover:scale-105 transition-all duration-300 relative px-1 py-0.5 border-b-2 border-transparent hover:border-primary"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Quick Console Controls */}
          <div className="flex items-center gap-3">
            {/* Language Switch */}
            <button
              onClick={() => setLang(lang === "en" ? "ta" : "en")}
              className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-widest text-soil hover:text-primary transition-all duration-300"
              aria-label="Toggle language"
            >
              <span className={lang === "ta" ? "text-primary" : "text-soil/30"}>தமிழ்</span>
              <span className="text-soil/15">|</span>
              <span className={lang === "en" ? "text-primary" : "text-soil/30"}>ENG</span>
            </button>

            {/* Telephone Call Button */}
            <MagneticButton>
              <a
                href={`tel:+91${PHONE_1}`}
                className="h-8 w-8 rounded-full bg-primary text-white grid place-items-center hover:scale-105 transition shadow-lg shadow-primary/20"
              >
                <Phone className="h-3.5 w-3.5" />
              </a>
            </MagneticButton>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden flex-col justify-center items-center gap-1 w-8 h-8 rounded-full border border-soil/20 text-soil hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`h-0.5 w-4 bg-current transform transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`h-0.5 w-4 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-4 bg-current transform transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel (Slides Open) */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden mt-3 border-t border-soil/10 pt-3 pb-2 flex flex-col gap-2 px-2"
          >
            {L.nav.map((label, i) => (
              <a
                key={i}
                href={`#${slugs[i]}`}
                onClick={() => setIsOpen(false)}
                className="text-left font-mono font-black uppercase text-[10px] tracking-widest text-soil hover:text-primary py-2 px-3 hover:bg-soil/5 transition-all duration-300 border-l-2 border-transparent hover:border-primary"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
}

function Hero({ L }: { L: typeof t.en }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <section
        id="top"
        ref={ref}
        className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden px-4 md:px-10"
      >
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-center"
      >
        {/* Wix Studio Column 1: Vertical Graphic Running Down Left Side */}
        <div className="hidden lg:block lg:col-span-1 border-r-2 border-soil/10 h-[500px] relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-270 origin-center whitespace-nowrap">
            <span className="font-mono text-[9px] font-black uppercase tracking-[0.6em] text-soil/30">
              NAMAKKAL · TAMIL NADU · MACHINERY HUB
            </span>
          </div>
        </div>

        {/* Wix Studio Column 2: Heavy Avant-Garde Overlapping Title Grid */}
        <div className="lg:col-span-11 flex flex-col items-start text-left pl-0 lg:pl-10 relative">
          
          {/* technical badge box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 border-2 border-soil px-3.5 py-1.5 rounded-none font-mono text-[9px] sm:text-[10px] font-black tracking-[0.3em] uppercase text-soil mb-6 bg-white"
          >
            <span className="h-1.5 w-1.5 bg-primary animate-ping" />
            {L.badge}
          </motion.div>

          {/* Double-Stroked Master Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-black text-soil leading-[0.95] text-balance text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase"
          >
            <span className="text-stroke-bold-soil text-white drop-shadow-sm block mb-1">
              {L.h1a}
            </span>
            <span className="text-primary text-stroke-bold-white drop-shadow-sm block">{L.h1b}</span>
          </motion.h1>

          {/* Overlapping Floating Tamil Label styled as an Industrial Decal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6"
          >
            <span className="inline-block bg-white/95 border-2 border-soil px-5 py-2.5 font-serif italic text-lg sm:text-2xl text-soil font-black tracking-tight shadow-md">
              ஸ்ரீ மாரியம்மன் டிராக்டர் சென்டர்
            </span>
          </motion.div>



          {/* Wix Studio Action Console Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <MagneticButton>
              <a
                href={`tel:+91${PHONE_1}`}
                className="group flex items-center gap-4 rounded-none border-2 border-soil bg-soil text-white px-5 py-3.5 text-xs font-mono font-black uppercase tracking-[0.2em] hover:bg-primary hover:border-primary transition-all duration-500 shadow-xl"
              >
                <Phone className="h-4 w-4" /> {L.callNow}
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-4 rounded-none border-2 border-soil bg-white text-soil px-5 py-3.5 text-xs font-mono font-black uppercase tracking-[0.2em] hover:bg-soil hover:text-white transition-all duration-500 shadow-md"
              >
                <WhatsAppIcon className="h-4 w-4 text-primary" /> {L.whatsapp}
              </a>
            </MagneticButton>
          </div>

          {/* Wix Studio Stats Banner - Horizontal Spec Lines */}
          <div className="mt-12 w-full grid grid-cols-3 gap-4 border-t-2 border-soil/15 pt-8 relative z-20">
            {L.stats.map(([k, v]) => (
              <div key={v} className="border-l-2 border-primary pl-4 sm:pl-6">
                <div className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-soil tracking-tighter leading-none text-stroke-bold-white drop-shadow-md">
                  {k}
                </div>
                <div className="text-[8px] sm:text-[9px] md:text-[10px] text-soil font-mono font-black uppercase tracking-[0.2em] mt-1.5 text-stroke-bold-white drop-shadow-md">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>

    {/* Infinite Horizontal Spec Belt - FULL SCREEN EDGE TO EDGE */}
    <div className="w-full relative z-20 bg-white">
      <MarqueeStrip />
    </div>
    </>
  );
}

function LocationStrip({ L }: { L: typeof t.en }) {
  return (
    <a
      href={MAPS}
      target="_blank"
      rel="noopener"
      className="block bg-primary text-white hover:bg-soil transition duration-500 relative z-20 border-y-2 border-soil"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-center gap-4 text-center">
        <MapPin className="h-4 w-4 flex-shrink-0 animate-bounce" />
        <p className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-[0.25em]">
          {L.locStrip}
        </p>
        <ArrowUpRight className="h-4 w-4 flex-shrink-0" />
      </div>
    </a>
  );
}

function MarqueeStrip() {
  const items = [
    "Mahindra 575 DI",
    "Mahindra 475 DI",
    "Tractor Brokerage",
    "Genuine Spare Parts",
    "Field Service",
    "Rotavators",
    "Water Tankers",
    "Engine Repair",
  ];
  return (
    <div className="relative w-full overflow-hidden bg-white border-y-2 border-soil py-5 select-none whitespace-nowrap z-20">
      {/* Container holding double marquee list for seamless loop */}
      <div className="flex w-max animate-marquee gap-16">
        {[...Array(2)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-16 min-w-full">
            {items.map((item) => (
              <span
                key={item}
                className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-soil/90 flex items-center gap-4 whitespace-nowrap"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function About({ L }: { L: typeof t.en }) {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 md:px-10 py-20 sm:py-32">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Wix Studio Grid Left - Massive Physical Trust Box */}
        <div className="lg:col-span-5 relative">
          <div className="border-4 border-soil rounded-none p-6 sm:p-10 bg-white/80 backdrop-blur-md shadow-2xl relative overflow-hidden group">
            {/* Background pattern grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03]" />
            
            <div className="relative z-10">
              <span className="font-mono text-[9px] font-black tracking-[0.4em] uppercase text-primary mb-6 block">
                [ CREDENTIAL ]
              </span>
              <div className="font-display font-black text-soil text-7xl sm:text-8xl md:text-9xl leading-none tracking-tighter mb-4">
                25+
              </div>
              <div className="font-mono text-[10px] sm:text-11px font-black tracking-[0.45em] uppercase text-soil mb-6 border-b-2 border-soil/15 pb-6">
                YEARS OF EXCELLENCE
              </div>
              <p className="text-xs sm:text-sm font-mono text-soil/80 leading-relaxed mb-8">
                Providing local tractor dealerships, trustworthy pre-owned machinery brokerage, and professional engine mechanics inside Tamil Nadu.
              </p>
              
              {/* Wix Studio Physical Stamp Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {L.aboutPills.map((pill) => (
                  <span
                    key={pill}
                    className="font-mono text-[8px] sm:text-[9px] font-black uppercase tracking-wider bg-soil text-white px-2.5 py-1"
                  >
                    #{pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wix Studio Grid Right - Narrative & Bold Outlines */}
        <div className="lg:col-span-7 flex flex-col justify-center bg-white/90 backdrop-blur-md border-4 border-soil p-8 sm:p-12 shadow-2xl relative">
          <p className="font-mono text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-4">
            // {L.aboutKicker}
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl text-soil tracking-tighter leading-[1] uppercase mb-8">
            {L.aboutTitle}
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-soil/85 leading-snug mb-8 pl-4 border-l-4 border-primary">
            "{L.aboutBody}"
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="border-t-2 border-soil pt-4">
              <div className="font-mono text-[10px] font-black uppercase tracking-widest text-primary mb-2">
                01 / LOCAL ORIGIN
              </div>
              <p className="text-xs text-soil/75 font-mono">
                Serving the agriculture lands of Namakkal and surrounding districts since 1999.
              </p>
            </div>
            <div className="border-t-2 border-soil pt-4">
              <div className="font-mono text-[10px] font-black uppercase tracking-widest text-primary mb-2">
                02 / PRE-OWNED BROKERAGE
              </div>
              <p className="text-xs text-soil/75 font-mono">
                Fair valuation, transparency, and verified sellers across state lines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ L }: { L: typeof t.en }) {
  return (
    <section id="services" className="relative border-y-2 border-soil py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Wix Studio Sticky Blueprint Title Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="font-mono text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-4">
              // {L.servicesKicker}
            </p>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-soil tracking-tighter leading-[1] uppercase mb-6">
              {L.servicesTitle}
            </h2>
            <div className="w-full aspect-[4/3] border-2 border-soil/15 p-4 rounded-none bg-white/40 backdrop-blur-sm relative overflow-hidden hidden sm:block">
              {/* Technical schematic box design with actual image */}
              <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.04]" />
              <div className="absolute inset-4 border border-dashed border-soil/20 overflow-hidden group bg-white/50">
                <img src={eqMechanic} alt="Mechanic Schematic" className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 opacity-90" />
                <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 font-mono text-[8px] text-soil font-black tracking-[0.2em] shadow-sm border border-soil/10">
                  [ SCHEMATIC_BOARD_V1 ]
                </div>
              </div>
            </div>
          </div>

          {/* Wix Studio Interactive Specs List (Accordions/Blueprints Grid) */}
          <div className="lg:col-span-7 flex flex-col border-t-2 border-soil">
            {L.services.map(([title, desc], i) => (
              <div
                key={title}
                className="group py-6 border-b-2 border-soil/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-background px-4 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-primary font-black pt-1">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-black text-soil uppercase group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs text-soil/75 font-mono max-w-lg mt-1">
                      {desc}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 self-end sm:self-center">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener"
                    className="h-9 w-9 rounded-full border-2 border-soil group-hover:border-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-500"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function Equipment({ L }: { L: typeof t.en }) {
  const imgs = [eqTractor575, eqTractor475, eqRotavator, eqTrailer];
  


  return (
    <section id="equipment" className="relative mx-auto max-w-7xl px-4 md:px-10 py-20 sm:py-32">
      
      {/* Editorial Header */}
      <div className="flex flex-col items-start lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-20">
        <div>
          <p className="font-mono text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-4">
            // {L.equipKicker}
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl text-soil tracking-tighter leading-[1] uppercase">
            {L.equipTitle}
          </h2>
        </div>
        <MagneticButton>
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-4 rounded-none border-2 border-soil px-6 py-4 text-xs font-mono font-black uppercase tracking-[0.2em] bg-soil text-white hover:bg-primary hover:border-primary transition-all duration-500"
          >
            {L.enquire}
          </a>
        </MagneticButton>
      </div>

      {/* Wix Studio Dealership Grid layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {L.equipment.map(([title, tag, desc], i) => (
          <article
            key={title}
            className="border-2 border-soil bg-white/80 backdrop-blur-md p-3 rounded-none flex flex-col group relative hover:shadow-2xl transition-all duration-500"
          >
            {/* Visual crop box */}
            <div className="relative aspect-[4/5] overflow-hidden mb-4 border-2 border-soil">
              <img
                src={imgs[i]}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0 filter saturate-125"
              />
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-soil text-white font-mono text-[8px] font-black uppercase tracking-widest">
                {tag}
              </div>
              
              {/* Wix Studio Premium Hover Overlay Button */}
              <div className="absolute inset-0 bg-soil/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                <a
                  href={`https://wa.me/91${PHONE_1}?text=${encodeURIComponent(`Hello Sri Mariamman Tractor Center, I am interested in inquiring about the ${title} (${tag}) shown on your website.`)}`}
                  target="_blank"
                  rel="noopener"
                  className="font-mono text-[10px] font-black tracking-[0.25em] uppercase bg-white text-soil hover:bg-primary hover:text-white px-5 py-3 shadow-2xl scale-95 group-hover:scale-100 transition-all duration-500 flex items-center gap-2 border-2 border-soil"
                >
                  ENQUIRE <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Spec Content & Tech Details Tables */}
            <div className="px-1 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-black text-soil leading-tight mb-2 uppercase group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-xs text-soil/75 font-mono mb-4 leading-relaxed">
                  {desc}
                </p>
              </div>

            </div>

          </article>
        ))}
      </div>

    </section>
  );
}

function WhyUs({ L }: { L: typeof t.en }) {
  return (
    <section id="why-us" className="relative border-y-2 border-soil py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        
        {/* Header block */}
        <div className="text-left mb-16 max-w-lg">
          <p className="font-mono text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-4">
            // {L.whyKicker}
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-soil tracking-tighter leading-[1] uppercase">
            {L.whyTitle}
          </h2>
        </div>

        {/* Wix Studio Industrial Number Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {L.reasons.map(([title, desc], i) => (
            <div
              key={title}
              className="group border-2 border-soil bg-white/60 backdrop-blur-sm p-6 hover:bg-white/95 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[160px]"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-display text-4xl font-black text-soil/15 group-hover:text-primary/20 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-1.5 w-1.5 bg-primary rounded-full opacity-30 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="font-display text-lg font-black text-soil uppercase mb-2 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-xs font-mono text-soil/75 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Testimonials({ L }: { L: typeof t.en }) {
  return (
    <section className="py-20 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        
        {/* Editorial Heading */}
        <div className="mb-16 text-left">
          <p className="font-mono text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-4">
            // {L.voiceKicker}
          </p>
          <h2 className="font-serif italic text-3xl sm:text-5xl lg:text-7xl font-black text-soil tracking-tight leading-[1]">
            {L.voiceTitle}
          </h2>
        </div>

        {/* Technical Rated Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {L.testimonials.map(([q, n, r], i) => (
            <div
              key={i}
              className="border-2 border-soil bg-white/80 backdrop-blur-md p-6 sm:p-10 flex flex-col justify-between min-h-[300px] hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative"
            >
              {/* Gold Stars Board */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="h-8 w-8 text-primary opacity-20" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Quote narrative */}
              <p className="font-serif italic text-lg sm:text-xl font-black text-soil/90 leading-snug flex-grow">
                "{q}"
              </p>

              {/* Monogram client avatar panel */}
              <div className="pt-6 border-t-2 border-soil/10 mt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-none bg-soil text-white font-display font-black text-sm grid place-items-center select-none shadow-md group-hover:bg-primary transition-colors duration-500">
                  {n.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-mono font-bold uppercase tracking-widest text-xs text-soil">{n}</div>
                  <div className="text-[9px] font-mono font-black text-primary uppercase tracking-[0.2em]">{r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Contact({ L }: { L: typeof t.en }) {
  return (
    <section id="contact" className="relative border-y-2 border-soil py-20 sm:py-32 bg-white/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Asymmetric Left Panel: The Machinery Command Registry */}
          <div className="lg:col-span-6 flex flex-col justify-between border-4 border-soil bg-white p-8 sm:p-12 shadow-2xl relative">
            {/* Wix corner aesthetic indicators */}
            <div className="absolute -top-2 -left-2 h-3.5 w-3.5 bg-primary" />
            <div className="absolute -top-2 -right-2 h-3.5 w-3.5 bg-primary" />
            <div className="absolute -bottom-2 -left-2 h-3.5 w-3.5 bg-primary" />
            <div className="absolute -bottom-2 -right-2 h-3.5 w-3.5 bg-primary" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-1.5 w-1.5 bg-primary animate-ping" />
                <span className="font-mono text-[9px] sm:text-[10px] font-black tracking-[0.35em] uppercase text-primary">
                  [ SHOWROOM REGISTRY ]
                </span>
              </div>
              
              <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-4xl xl:text-5xl text-soil leading-[0.95] tracking-tighter uppercase mb-10 text-balance">
                {L.contactTitle}
              </h2>
              
              <div className="space-y-8">
                {/* Phones Registry */}
                <div className="border-l-4 border-primary pl-6 py-1">
                  <div className="font-mono text-[10px] font-black uppercase tracking-[0.25em] text-soil/55 mb-2">
                    {L.phone}
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`tel:+91${PHONE_1}`}
                      className="group inline-flex items-center gap-3 text-2xl sm:text-4xl font-black text-soil hover:text-primary transition-colors tracking-tighter font-display"
                    >
                      <span>94433 61295</span>
                      <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </a>
                    <a
                      href={`tel:+91${PHONE_2}`}
                      className="group inline-flex items-center gap-3 text-2xl sm:text-4xl font-black text-soil hover:text-primary transition-colors tracking-tighter font-display"
                    >
                      <span>93823 34477</span>
                      <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </a>
                  </div>
                </div>

                {/* Address Registry */}
                <div className="border-l-4 border-primary pl-6 py-1">
                  <div className="font-mono text-[10px] font-black uppercase tracking-[0.25em] text-soil/55 mb-2">
                    {L.address}
                  </div>
                  <p className="text-xl sm:text-2xl font-black text-soil tracking-tighter font-display leading-tight text-balance">
                    {L.footerNote}, India
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Subtext/Badge */}
            <div className="mt-12 pt-6 border-t border-soil/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-8">
              <span className="font-mono text-[8px] font-black text-soil/40 tracking-wider">
                SRI MARIAMMAN TRACTOR CENTER · ESTD 1999
              </span>
              <span className="font-mono text-[8px] font-black text-primary tracking-wider">
                LIVE STATUS: ACTIVE
              </span>
            </div>
            
            {/* New Schematic Servicing Image Section placed here as requested */}
            <div className="w-full aspect-[2/1] border-2 border-soil/15 p-2 rounded-none bg-white/40 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-2 border border-dashed border-soil/20 overflow-hidden">
                <img src={eqMechanic} alt="Tractor Servicing" className="w-full h-full object-cover filter contrast-110 opacity-95 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 font-mono text-[8px] text-soil font-black tracking-[0.2em] shadow-sm border border-soil/10 z-10">
                  [ SCHEMATIC_BOARD_V1 ]
                </div>
              </div>
            </div>
          </div>

          {/* Asymmetric Right Panel: The Satellite Showroom Locator & Quick Action Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Interactive Embedded Satellite Map Container */}
            <div className="border-4 border-soil bg-white p-4 shadow-xl flex-grow flex flex-col justify-between relative min-h-[300px]">
              <div className="absolute top-6 left-6 z-10 bg-soil text-white px-3 py-1 font-mono text-[8px] font-black uppercase tracking-[0.2em] border border-white/20">
                SATELLITE RADAR
              </div>
              
              <div className="w-full flex-grow relative overflow-hidden bg-muted border-2 border-soil/15">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1432427845344!2d78.1636181!3d11.026723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2faf828236d9%3A0x477193d1973452d7!2sSri%20Mariamman%20Tractor%20Center!5e0!3m2!1sen!2sin!4v1715878411032!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0 grayscale saturate-[1.4] hover:grayscale-0 transition-all duration-700"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
              <div className="mt-3 flex items-center justify-between font-mono text-[9px] font-black text-soil/60 uppercase tracking-widest px-1">
                <span>COORD: 11.0267° N, 78.1636° E</span>
                <span className="text-primary">NAMAKKAL, TAMIL NADU</span>
              </div>
            </div>

            {/* Quick Action Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <MagneticButton>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener"
                  className="border-2 border-soil flex items-center justify-between p-5 font-mono font-black uppercase tracking-[0.2em] text-[10px] bg-soil text-white hover:bg-primary hover:border-primary transition-all duration-500 group shadow-lg w-full"
                >
                  <span className="flex items-center gap-3">
                    <WhatsAppIcon className="h-5 w-5 text-white" /> {L.whatsapp}
                  </span>
                  <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </MagneticButton>
              
              <MagneticButton>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener"
                  className="border-2 border-soil flex items-center justify-between p-5 font-mono font-black uppercase tracking-[0.2em] text-[10px] bg-white text-soil hover:bg-soil hover:text-white transition-all duration-500 group shadow-md w-full"
                >
                  <span className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary animate-bounce" /> {L.googleMaps}
                  </span>
                  <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </MagneticButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return <span className="text-[10px] text-primary">{time || "08:30:00 PM"}</span>;
}

function Footer({ L }: { L: typeof t.en }) {
  return (
    <footer className="py-20 bg-soil text-white relative z-10 overflow-hidden border-t-4 border-primary">
      
      {/* Huge Watermark Tamil Graphic Underlay */}
      <div className="absolute -bottom-10 -right-10 font-serif italic text-[120px] sm:text-[180px] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter whitespace-nowrap z-0">
        ஸ்ரீ மாரியம்மன்
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 border-b-2 border-white/5 pb-12">
        <div className="flex flex-col">
          <div className="font-display font-black text-white text-2xl tracking-tighter uppercase leading-none mb-2">
            Sri Mariamman
          </div>
          <div className="font-mono text-[9px] tracking-[0.4em] uppercase text-primary font-black">
            Tractor Center
          </div>
        </div>
        
        <div className="font-mono flex flex-wrap gap-6 md:gap-10 text-[9px] font-black uppercase tracking-[0.2em]">
          {L.nav.map((label, i) => (
            <a
              key={i}
              href={`#${["about", "services", "equipment", "why-us", "contact"][i]}`}
              className="hover:text-primary border-b border-transparent hover:border-primary transition-all duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Dynamic Clock Support Info Belt */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10 pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 font-mono text-[9px] tracking-[0.25em] uppercase text-white/50">
        <div className="flex items-center gap-3">
          <Clock className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: "12s" }} />
          <span>NAMAKKAL, IN — </span>
          <LiveClock />
        </div>
        <div>
          © {new Date().getFullYear()} SRI MARIAMMAN. ALL BLUEPRINTS SECURED.
        </div>
      </div>

    </footer>
  );
}

function FloatingWA() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp Support"
      className="fixed bottom-6 right-6 z-[100] h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-soil text-white grid place-items-center shadow-2xl hover:bg-primary transition-all duration-700 group animate-pulse-ring border-2 border-white/20"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7 group-hover:scale-110 transition-transform duration-500" />
    </a>
  );
}
