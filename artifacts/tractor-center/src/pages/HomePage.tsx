import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, Suspense } from "react";
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
} from "lucide-react";
import eqRotavator from "@/assets/eq-rotavator.jpg";
import eqTanker from "@/assets/eq-tanker.jpg";
import eqTractor575 from "@/assets/eq-tractor-575.jpg";
import eqTractor475 from "@/assets/eq-tractor-475.jpg";
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
    badge: "ESTABLISHED 25+ YEARS · NAMAKKAL",
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
      ["Mahindra 575 DI", "Bestseller", "India's most loved 47 HP workhorse — fuel-efficient."],
      ["Mahindra 475 DI", "Classic", "Reliable 42 HP all-rounder, perfect for medium farms."],
      ["Rotavator", "Implement", "Heavy-duty soil prep with even tilling depth."],
      ["Water Tanker", "Irrigation", "High-capacity tanker for irrigation & transport."],
    ] as [string, string, string][],
    whyKicker: "Reliability",
    whyTitle: "Built on trust since 1999.",
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
    footerNote: "Namakkal, Tamil Nadu",
  },
  ta: {
    nav: ["எங்களைப் பற்றி", "சேவைகள்", "உபகரணங்கள்", "ஏன் நாங்கள்", "தொடர்பு"],
    badge: "25+ ஆண்டுகள் அனுபவம் · நாமக்கல்",
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
      ["மஹிந்திரா 575 DI", "அதிகம் விற்பனை", "இந்தியாவின் 47 HP — எரிபொருள் சிக்கனம்."],
      ["மஹிந்திரா 475 DI", "கிளாசிக்", "நம்பகமான 42 HP, நடுத்தர பண்ணைகளுக்கு."],
      ["ரோட்டாவேட்டர்", "உபகரணம்", "சீரான ஆழத்தில் மண் தயாரிப்பு."],
      ["தண்ணீர் டாங்கர்", "பாசனம்", "பாசனம் மற்றும் தண்ணீர் டாங்கர்."],
    ] as [string, string, string][],
    whyKicker: "நம்பகத்தன்மை",
    whyTitle: "1999 முதல் நம்பிக்கையில் கட்டப்பட்டது.",
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
    footerNote: "நாமக்கல், தமிழ்நாடு",
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
    <main className="relative min-h-screen overflow-x-hidden">
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
    <header className="fixed top-4 md:top-8 inset-x-0 z-[100] flex justify-center px-2 sm:px-4 md:px-5 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-2.5 sm:gap-4 md:gap-8 rounded-full border border-black/5 bg-white/40 backdrop-blur-3xl px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 shadow-xl transition-all duration-500">
        <nav className="flex items-center gap-3 sm:gap-6 md:gap-10 text-[8px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-[0.1em] sm:tracking-[0.3em] text-soil/80">
          {L.nav.slice(0, 3).map((label, i) => {
            const slugs = ["about", "services", "equipment"];
            return (
              <a key={i} href={`#${slugs[i]}`} className="hover:text-primary transition-colors">
                {label}
              </a>
            );
          })}
        </nav>
        <div className="h-4 w-px bg-soil/20 hidden xs:block" />
        <div className="flex items-center gap-2.5 sm:gap-4 md:gap-6">
          <button
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            className="flex items-center gap-1 sm:gap-2 text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-soil/80 hover:text-primary transition-all duration-300"
            aria-label="Toggle language"
          >
            <span className={lang === "ta" ? "text-primary" : "text-soil/30"}>தமிழ்</span>
            <span className="text-soil/10">/</span>
            <span className={lang === "en" ? "text-primary" : "text-soil/30"}>ENG</span>
          </button>
          <MagneticButton>
            <a
              href={`tel:+91${PHONE_1}`}
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-primary text-white grid place-items-center hover:scale-110 transition shadow-lg shadow-primary/20"
            >
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
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
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden px-5"
    >

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl w-full text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-4 text-[10px] md:text-[11px] font-black tracking-[0.5em] uppercase text-soil/70 mb-10"
        >
          <span className="h-px w-6 md:w-10 bg-soil/30" />
          {L.badge}
          <span className="h-px w-6 md:w-10 bg-soil/30" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-soil leading-[1.05] text-balance text-3xl xs:text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase"
          style={{ textShadow: "0 2px 6px rgba(255, 255, 255, 0.95)" }}
        >
          {L.h1a} <br />
          <span className="text-primary">{L.h1b}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 max-w-4xl"
        >
          <p
            className="font-serif italic text-2xl md:text-3xl text-rust font-black mb-8 px-4"
            style={{
              fontFamily: "var(--font-tamil)",
              WebkitTextStroke: "1.5px white",
              paintOrder: "stroke fill",
              textShadow: "0 2px 4px rgba(255,255,255,0.4)",
            }}
          >
            ஸ்ரீ மாரியம்மன் டிராக்டர் சென்டர்
          </p>
          <p
            className="text-base md:text-lg text-soil/80 font-bold leading-tight max-w-xl mx-auto tracking-wide"
            style={{ textShadow: "0 1px 3px rgba(255, 255, 255, 0.9)" }}
          >
            {L.sub}
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <MagneticButton>
            <a
              href={`tel:+91${PHONE_1}`}
              className="group inline-flex items-center gap-3 rounded-full bg-soil text-white pl-6 pr-2 py-2 text-base font-bold hover:bg-primary transition-all duration-500 shadow-lg"
            >
              <Phone className="h-4 w-4" /> {L.callNow}
              <span className="ml-2 grid h-8 w-8 place-items-center rounded-full bg-primary text-white group-hover:rotate-45 transition">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/30 backdrop-blur-2xl px-6 py-3 text-base font-bold text-soil hover:border-primary transition shadow-md"
            >
              <WhatsAppIcon className="h-4 w-4 text-primary" /> {L.whatsapp}
            </a>
          </MagneticButton>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16">
          {L.stats.map(([k, v]) => (
            <div key={v} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-extrabold text-soil tracking-tighter">
                {k}
              </div>
              <div className="text-[9px] md:text-[10px] text-soil/75 font-black uppercase tracking-[0.2em] mt-2 leading-none">
                {v}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="w-full mt-16 z-20">
        <MarqueeStrip />
      </div>
    </section>
  );
}

function LocationStrip({ L }: { L: typeof t.en }) {
  return (
    <a
      href={MAPS}
      target="_blank"
      rel="noopener"
      className="block bg-primary text-white hover:bg-soil transition duration-500 relative z-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-5 flex items-center justify-center gap-5 text-center">
        <MapPin className="h-4 w-4 flex-shrink-0" />
        <p className="text-[10px] font-black uppercase tracking-[0.35em]">{L.locStrip}</p>
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
  const row = [...items, ...items];
  return (
    <div className="border-y border-black/5 bg-white/5 backdrop-blur-md text-soil py-6 overflow-hidden">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {row.map((label, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 font-display font-bold text-2xl tracking-tighter uppercase opacity-30 hover:opacity-100 transition-opacity"
          >
            <Sprout className="h-5 w-5 text-primary" /> {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function About({ L }: { L: typeof t.en }) {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-10 py-16 sm:py-24 md:py-32">
      <div className="glass rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 md:p-16 flex flex-col items-center text-center">
        <p className="text-[9px] font-black tracking-[0.5em] uppercase text-primary mb-8">
          {L.aboutKicker}
        </p>
        <h2 className="font-serif font-black text-4xl lg:text-6xl text-soil tracking-tight leading-[1.1] mb-10 italic">
          {L.aboutTitle}
        </h2>
        <div className="max-w-2xl">
          <p className="text-lg md:text-xl text-soil/85 font-medium leading-relaxed mb-12 tracking-wide">
            {L.aboutBody}
          </p>
          <div className="flex flex-wrap justify-center gap-5 md:gap-8">
            {L.aboutPills.map((p) => (
              <div key={p} className="flex items-center gap-2 group">
                <div className="h-1 w-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-500" />
                <span className="font-bold text-soil/30 group-hover:text-soil text-[11px] uppercase tracking-[0.15em] transition-colors">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ L }: { L: typeof t.en }) {
  const icons = [Tractor, Handshake, Wrench, Cog, Sprout, Truck];
  return (
    <section id="services" className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        <div className="text-center mb-12 sm:mb-20">
          <p className="text-[9px] font-black tracking-[0.5em] uppercase text-primary mb-6">
            {L.servicesKicker}
          </p>
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-6xl leading-[1] tracking-tight text-soil uppercase">
            {L.servicesTitle}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {L.services.map(([title, desc], i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass group p-6 sm:p-8 rounded-[1.5rem] flex flex-col items-start text-left hover:border-primary/20 transition-all duration-500"
              >
                <div className="h-12 w-12 rounded-xl bg-soil/5 text-soil group-hover:bg-primary group-hover:text-white transition-all duration-500 grid place-items-center mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-sans text-xl font-black mb-3 tracking-tight uppercase text-soil">
                  {title}
                </h3>
                <p className="text-sm text-soil/75 font-medium leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Equipment({ L }: { L: typeof t.en }) {
  const imgs = [eqTractor575, eqTractor475, eqRotavator, eqTanker];
  return (
    <section id="equipment" className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-10 py-16 sm:py-24 md:py-32">
      <div className="flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-10 mb-10 sm:mb-16">
        <div className="max-w-lg">
          <p className="text-[9px] font-black tracking-[0.5em] uppercase text-primary mb-6">
            {L.equipKicker}
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-6xl text-soil tracking-tight leading-[1] uppercase">
            {L.equipTitle}
          </h2>
        </div>
        <MagneticButton>
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            className="h-16 w-16 rounded-full border border-black/5 grid place-items-center hover:bg-primary hover:text-white transition-all duration-500 font-bold uppercase text-[8px] tracking-widest text-soil"
          >
            {L.enquire}
          </a>
        </MagneticButton>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {L.equipment.map(([title, tag, desc], i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-[1.5rem] p-3 group"
          >
            <div className="relative aspect-[4/5] overflow-hidden mb-5 rounded-[1.2rem] shadow-md">
              <img
                src={imgs[i]}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-[7px] font-black uppercase tracking-[0.15em] text-soil shadow-sm">
                {tag}
              </div>
            </div>
            <div className="px-3 pb-3">
              <h3 className="font-display text-lg font-black text-soil leading-tight tracking-tight mb-2 uppercase">
                {title}
              </h3>
              <p className="text-xs text-soil/75 font-medium leading-relaxed">{desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function WhyUs({ L }: { L: typeof t.en }) {
  return (
    <section id="why-us" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        <div className="glass rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 md:p-16">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[9px] font-black tracking-[0.5em] uppercase text-primary mb-6">
              {L.whyKicker}
            </p>
            <h2 className="font-mono font-bold text-3xl lg:text-5xl text-soil tracking-tighter leading-[1] uppercase">
              {L.whyTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {L.reasons.map(([title, desc]) => (
              <div
                key={title}
                className="group text-left border-l border-black/5 pl-6 py-1 hover:border-primary transition-all duration-500"
              >
                <h3 className="font-mono text-lg font-bold mb-3 tracking-tight uppercase text-soil">
                  {title}
                </h3>
                <p className="text-sm text-soil/75 font-semibold leading-relaxed group-hover:text-soil transition-colors">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials({ L }: { L: typeof t.en }) {
  return (
    <section className="py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        <div className="mb-12 sm:mb-20 text-center md:text-left">
          <p className="text-[9px] font-black tracking-[0.5em] uppercase text-primary mb-6">
            {L.voiceKicker}
          </p>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-6xl tracking-tight leading-[1] italic text-soil">
            {L.voiceTitle}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {L.testimonials.map(([q, n, r], i) => (
            <div
              key={i}
              className="glass p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] group hover:border-primary/20 transition-all duration-500"
            >
              <Quote className="h-8 w-8 text-primary opacity-20 mb-8 group-hover:scale-110 transition-transform duration-500" />
              <p className="font-serif italic text-xl md:text-2xl font-light leading-snug mb-10 text-soil/80">
                "{q}"
              </p>
              <div className="pt-6 border-t border-black/5">
                <div className="font-bold uppercase tracking-widest text-xs mb-1 text-soil">{n}</div>
                <div className="text-[9px] font-black text-primary uppercase tracking-[0.25em]">{r}</div>
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
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10 py-16 sm:py-24 md:py-32">
      <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 md:gap-16 items-start">
        <div className="lg:col-span-6">
          <p className="text-[9px] font-black tracking-[0.5em] uppercase text-primary mb-6">
            {L.contactKicker}
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-6xl text-soil leading-[1] tracking-tight uppercase mb-8 sm:mb-12">
            {L.contactTitle}
          </h2>
          <div className="space-y-10">
            <div className="flex flex-col gap-3">
              <div className="text-[9px] font-black uppercase tracking-[0.4em] text-soil/60">{L.phone}</div>
              <a href={`tel:+91${PHONE_1}`} className="block text-3xl md:text-4xl font-black text-soil hover:text-primary transition-colors tracking-tighter">
                94433 61295
              </a>
              <a href={`tel:+91${PHONE_2}`} className="block text-3xl md:text-4xl font-black text-soil hover:text-primary transition-colors tracking-tighter">
                93823 34477
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[9px] font-black uppercase tracking-[0.4em] text-soil/60">{L.address}</div>
              <p className="text-xl md:text-2xl font-black text-soil tracking-tighter leading-tight">
                {L.footerNote}, India
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 flex flex-col gap-4">
          <MagneticButton>
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="glass flex items-center justify-between rounded-[1.5rem] p-6 md:p-8 font-bold uppercase tracking-[0.2em] text-[10px] hover:border-primary transition-all duration-700 group"
            >
              <span className="flex items-center gap-5">
                <WhatsAppIcon className="h-6 w-6 md:h-8 md:w-8 text-primary" /> {L.whatsapp}
              </span>
              <ArrowUpRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-700" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href={MAPS}
              target="_blank"
              rel="noopener"
              className="glass flex items-center justify-between rounded-[1.5rem] p-6 md:p-8 font-bold uppercase tracking-[0.2em] text-[10px] hover:border-primary transition-all duration-700 group"
            >
              <span className="flex items-center gap-5">
                <MapPin className="h-6 w-6 md:h-8 md:w-8 text-primary" /> {L.googleMaps}
              </span>
              <ArrowUpRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-700" />
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

function Footer({ L }: { L: typeof t.en }) {
  return (
    <footer className="py-16 bg-soil text-white border-t border-white/10 relative z-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="font-display font-black text-white text-xl tracking-tighter uppercase leading-none mb-1">
            Sri Mariamman
          </div>
          <div className="text-[8px] tracking-[0.5em] uppercase text-primary font-black">
            Tractor Center
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[8px] font-black uppercase tracking-[0.3em] text-white/50">
          {L.nav.map((label, i) => (
            <a
              key={i}
              href={`#${["about", "services", "equipment", "why-us", "contact"][i]}`}
              className="hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="text-[8px] font-black uppercase tracking-[0.3em] text-white/30">
          © {new Date().getFullYear()}
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
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-[100] h-14 w-14 md:h-16 md:w-16 rounded-full bg-soil text-white grid place-items-center shadow-xl hover:bg-primary transition-all duration-700 group animate-pulse-ring"
    >
      <WhatsAppIcon className="h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 transition-transform duration-500" />
    </a>
  );
}
