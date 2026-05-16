import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PHONE_1, M as MAPS } from "./router-B0RlOZd1.mjs";
import { C as Canvas } from "../_libs/react-three__fiber.mjs";
import { u as useScroll, a as useSpring, b as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import { P as Phone, A as ArrowUpRight, M as MapPin, T as Tractor, H as Handshake, W as Wrench, C as Cog, S as Sprout, a as Truck, Q as Quote } from "../_libs/lucide-react.mjs";
import { O as OrbitControls, F as Float, S as Sphere, M as MeshDistortMaterial } from "../_libs/react-three__drei.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/three.mjs";
import "../_libs/zustand.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/scheduler.mjs";
import "../_libs/its-fine.mjs";
import "../_libs/react-use-measure.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/three-stdlib.mjs";
const eqRotavator = "/PROJECTS/sri-mariamman-tractor-center-main/assets/eq-rotavator-D1Hj9zyT.jpg";
const eqTanker = "/PROJECTS/sri-mariamman-tractor-center-main/assets/eq-tanker-C2TqDpWu.jpg";
const eqTractor575 = "/PROJECTS/sri-mariamman-tractor-center-main/assets/eq-tractor-575-8fvEczhD.jpg";
const eqTractor475 = "/PROJECTS/sri-mariamman-tractor-center-main/assets/eq-tractor-475-C0CBIcNo.jpg";
const Scrollytelling = () => {
  const canvasRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    // Lower stiffness for more fluid motion
    damping: 20,
    // Balanced damping for smooth settling
    restDelta: 1e-3
  });
  const frameCount = 240;
  const images = reactExports.useRef([]);
  const [loadedCount, setLoadedCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `/sequence/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
        img.onload = () => {
          setLoadedCount((prev) => prev + 1);
        };
        img.onerror = () => {
          setLoadedCount((prev) => prev + 1);
        };
        images.current[i - 1] = img;
      }
    };
    preloadImages();
  }, []);
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);
  reactExports.useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    const render = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!context || !canvas) return;
      const index = Math.round(frameIndex.get());
      const img = images.current[index];
      if (img && img.complete && img.naturalWidth !== 0) {
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShiftX,
          centerShiftY,
          img.width * ratio,
          img.height * ratio
        );
      }
      requestAnimationFrame(render);
    };
    const animationFrame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, [frameIndex]);
  const isVisible = loadedCount >= 20;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 -z-20 pointer-events-none overflow-hidden bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: isVisible ? 1 : 0 },
      transition: { duration: 1.5 },
      className: "w-full h-full",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "w-full h-full" })
    }
  ) });
};
const MagneticButton = ({
  children,
  className = "",
  distance = 0.4
}) => {
  const ref = reactExports.useRef(null);
  const [position, setPosition] = reactExports.useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    };
    const x = (clientX - (left + width / 2)) * distance;
    const y = (clientY - (top + height / 2)) * distance;
    setPosition({ x, y });
  };
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      animate: { x: position.x, y: position.y },
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
      className,
      children
    }
  );
};
const AnimatedObject = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.5, rotationIntensity: 0.5, floatIntensity: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sphere, { args: [1, 64, 64], scale: 1.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    MeshDistortMaterial,
    {
      color: "#d4af37",
      distort: 0.3,
      speed: 1.5,
      roughness: 0.2,
      metalness: 0.8
    }
  ) }) });
};
const Hero3D = () => {
  if (typeof window === "undefined") return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { camera: { position: [0, 0, 5], fov: 60 }, gl: { alpha: true }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.7 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [5, 5, 5], intensity: 1, color: "#ffffff" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("spotLight", { position: [-5, 5, 5], angle: 0.2, intensity: 0.8 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedObject, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OrbitControls, { enableZoom: false, autoRotate: true, autoRotateSpeed: 0.3 })
  ] }) }) });
};
const PHONE_2 = "9382334477";
const WA = `https://wa.me/91${PHONE_1}?text=${encodeURIComponent("Hello Sri Mariamman Tractor Center, I'd like to know more about your tractors and services.")}`;
const t = {
  en: {
    nav: ["About", "Services", "Equipment", "Why Us", "Contact"],
    badge: "ESTABLISHED 25+ YEARS · NAMAKKAL",
    h1a: "Powering modern",
    h1b: "agriculture",
    h1c: "with trusted solutions.",
    sub: "Sales · Brokerage · Service · Equipment · Spare Parts. Built for farmers who demand reliability.",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
    viewTractors: "View Tractors",
    stats: [["25+", "Years"], ["1,000+", "Farmers"], ["8 AM", "7 PM"]],
    locStrip: "Near G.H · N. Kandampalayam · P. Velur (Tk) · Namakkal (Dt) — 637203",
    aboutKicker: "Our Legacy",
    aboutTitle: "Trusted experts for 1,000+ farmers.",
    aboutBody: "Sri Mariamman Tractor Center is a heritage brand providing reliable tractor sales, trusted brokerage, and field servicing across Tamil Nadu.",
    aboutPills: ["Quality service", "Genuine parts", "Fair brokerage", "Customer trust"],
    servicesKicker: "Capabilities",
    servicesTitle: "Everything your tractor needs.",
    talk: "Talk to a specialist",
    services: [["Tractor Sales", "New Mahindra tractors with the right HP for your farm."], ["Tractor Broker", "Honest brokerage — fair valuation, verified sellers."], ["Tractor Service", "Engine repair, periodic maintenance & full inspection."], ["Genuine Parts", "OEM-quality tractor spare parts always in stock."], ["Equipment", "Rotavators, cultivators, ploughs and water tankers."], ["Field Support", "Quick on-site assistance across nearby villages."]],
    equipKicker: "Portfolio",
    equipTitle: "Workhorses for every field.",
    enquire: "Enquire Now",
    equipment: [["Mahindra 575 DI", "Bestseller", "India's most loved 47 HP workhorse — fuel-efficient."], ["Mahindra 475 DI", "Classic", "Reliable 42 HP all-rounder, perfect for medium farms."], ["Rotavator", "Implement", "Heavy-duty soil prep with even tilling depth."], ["Water Tanker", "Irrigation", "High-capacity tanker for irrigation & transport."]],
    whyKicker: "Reliability",
    whyTitle: "Built on trust since 1999.",
    reasons: [["Expert technicians", "25+ years on the field."], ["Genuine parts", "Sourced from authorized OEMs."], ["Fast servicing", "Minimum downtime, maximum harvest."], ["Affordable pricing", "Honest quotes, no surprises."], ["Local presence", "Loved across Namakkal region."], ["Customer first", "We pick up. We show up."]],
    voiceKicker: "Trust",
    voiceTitle: "What farmers say.",
    testimonials: [["Best tractor service in Namakkal. Quick response and genuine parts.", "Murugan S.", "Paramathi Velur"], ["They helped me sell my old Mahindra at a fair price. Honest brokers.", "Karthik R.", "Namakkal"], ["Fixed my tractor in a day during harvest. Lifesavers.", "Selvam P.", "Velur"]],
    contactKicker: "Contact",
    contactTitle: "Visit us in Namakkal.",
    address: "Location",
    phone: "Direct Call",
    hours: "Hours",
    hoursLine: "Mon – Fri · 8:00 AM – 7:00 PM",
    quickActions: "Inquiries",
    googleMaps: "Google Maps",
    altNumber: "Office",
    langs: "Tamil & English",
    footerNote: "Namakkal, Tamil Nadu"
  },
  ta: {
    nav: ["எங்களைப் பற்றி", "சேவைகள்", "உபகரணங்கள்", "ஏன் நாங்கள்", "தொடர்பு"],
    badge: "25+ ஆண்டுகள் அனுபவம் · நாமக்கல்",
    h1a: "நம்பகமான தீர்வுகளுடன்",
    h1b: "நவீன விவசாயத்திற்கு",
    h1c: "சக்தி அளிக்கிறோம்.",
    sub: "விற்பனை · தரகு · சேவை · விவசாய உபகரணங்கள் · உதிரி பாகங்கள். நம்பகத்தன்மையை விரும்பும் விவசாயிகளுக்காக.",
    callNow: "அழைக்கவும்",
    whatsapp: "வாட்ஸ்அப்",
    viewTractors: "டிராக்டர்கள்",
    stats: [["25+", "ஆண்டுகள்"], ["1,000+", "விவசாயிகள்"], ["8 AM", "7 PM"]],
    locStrip: "G.H அருகில் · N. கந்தம்பாளையம் · ப.வேலூர் (வட்டம்) · நாமக்கல் — 637203",
    aboutKicker: "எங்கள் பாரம்பரியம்",
    aboutTitle: "1,000+ விவசாயிகளுக்கு சேவை செய்த நிபுணர்கள்.",
    aboutBody: "ஸ்ரீ மாரியம்மன் டிராக்டர் சென்டர் ஒரு பாரம்பரிய பிராண்ட் — புதிய டிராக்டர் விற்பனை, பழைய டிராக்டர் தரகு, விவசாய உபகரணங்கள் மற்றும் கள சேவை வழங்குகிறது.",
    aboutPills: ["தரமான சேவை", "ஒரிஜினல் பாகங்கள்", "நேர்மையான தரகு", "வாடிக்கையாளர் நம்பிக்கை"],
    servicesKicker: "திறன்கள்",
    servicesTitle: "உங்கள் டிராக்டருக்கு தேவையான அனைத்தும்.",
    talk: "பேசுங்கள்",
    services: [["டிராக்டர் விற்பனை", "உங்கள் பண்ணைக்கு ஏற்ற மஹிந்திரா டிராக்டர்கள்."], ["டிராக்டர் தரகு", "பழைய டிராக்டருக்கு நேர்மையான தரகு — சரியான விலை."], ["டிராக்டர் சேவை", "என்ஜின் ரிப்பேர், பராமரிப்பு & பரிசோதனை."], ["உதிரி பாகங்கள்", "OEM தரத்தில் டிராக்டர் உதிரி பாகங்கள்."], ["உபகரணங்கள்", "ரோட்டாவேட்டர், கல்டிவேட்டர், தண்ணீர் டாங்கர்."], ["வீடு சேவை", "அருகிலுள்ள கிராமங்களில் விரைவான களச் சேவை."]],
    equipKicker: "தொகுப்பு",
    equipTitle: "ஒவ்வொரு வயலுக்கும் வேலைக்காரர்கள்.",
    enquire: "கேளுங்கள்",
    equipment: [["மஹிந்திரா 575 DI", "அதிகம் விற்பனை", "இந்தியாவின் 47 HP — எரிபொருள் சிக்கனம்."], ["மஹிந்திரா 475 DI", "கிளாசிக்", "நம்பகமான 42 HP, நடுத்தர பண்ணைகளுக்கு."], ["ரோட்டாவேட்டர்", "உபகரணம்", "சீரான ஆழத்தில் மண் தயாரிப்பு."], ["தண்ணீர் டாங்கர்", "பாசனம்", "பாசனம் மற்றும் தண்ணீர் டாங்கர்."]],
    whyKicker: "நம்பகத்தன்மை",
    whyTitle: "1999 முதல் நம்பிக்கையில் கட்டப்பட்டது.",
    reasons: [["நிபுணர்கள்", "களத்தில் 25+ ஆண்டுகள்."], ["ஒரிஜினல் பாகங்கள்", "OEM-களிடமிருந்து."], ["விரைவான சேவை", "குறைந்த நேர விரயம்."], ["மலிவான விலை", "நேர்மையான விலை."], ["உள்ளூர் சேவை", "நாமக்கல் முழுவதும்."], ["வாடிக்கையாளர் முதல்", "நாங்கள் வந்து சேருவோம்."]],
    voiceKicker: "நம்பிக்கை",
    voiceTitle: "விவசாயிகளின் குரல்.",
    testimonials: [["நாமக்கலில் சிறந்த டிராக்டர் சேவை. விரைவான பதில் & ஒரிஜினல் பாகங்கள்.", "முருகன் எஸ்.", "பரமத்தி வேலூர்"], ["என் பழைய மஹிந்திராவை நல்ல விலையில் விற்க உதவினர். நேர்மையான தரகர்கள்.", "கார்த்திக் ஆர்.", "நாமக்கல்"], ["அறுவடை நேரத்தில் என் டிராக்டரை ஒரே நாளில் சரி செய்தனர். உயிர் காப்பாளர்கள்.", "Selvam P.", "வேலூர்"]],
    contactKicker: "தொடர்பு",
    contactTitle: "நாமக்கலில் எங்களை சந்திக்கவும்.",
    address: "இடம்",
    phone: "அழைக்கவும்",
    hours: "நேரம்",
    hoursLine: "திங்கள் – வெள்ளி · காலை 8:00 – மாலை 7:00",
    quickActions: "விசாரணைகள்",
    googleMaps: "கூகிள் மேப்ஸ்",
    altNumber: "அலுவலகம்",
    langs: "தமிழ் & ஆங்கிலம்",
    footerNote: "நாமக்கல், தமிழ்நாடு"
  }
};
const WhatsAppIcon = ({
  className = "h-5 w-5"
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M.057 24l1.687-6.163A11.867 11.867 0 010 11.945C0 5.36 5.373 0 11.99 0a11.86 11.86 0 018.413 3.488 11.819 11.819 0 013.49 8.414c-.003 6.585-5.376 11.946-11.99 11.946a12.05 12.05 0 01-5.668-1.45L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" }) });
function Index() {
  const [lang, setLang] = reactExports.useState("en");
  const L = t[lang];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollytelling, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { L, lang, setLang }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { L }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LocationStrip, { L }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, { L }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, { L }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Equipment, { L }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, { L }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, { L }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, { L }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { L }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWA, {})
  ] });
}
function Nav({
  L,
  lang,
  setLang
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-4 md:top-8 inset-x-0 z-[100] flex justify-center px-4 md:px-5 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto flex items-center gap-4 md:gap-8 rounded-full border border-black/5 bg-white/40 backdrop-blur-3xl px-6 md:px-10 py-3 md:py-4 shadow-xl transition-all duration-500", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex items-center gap-6 md:gap-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-soil/80", children: L.nav.slice(0, 3).map((label, i) => {
      const slugs = ["about", "services", "equipment"];
      return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${slugs[i]}`, className: "hover:text-primary transition-colors", children: label }, i);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-px bg-soil/20 hidden sm:block" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 md:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLang(lang === "en" ? "ta" : "en"), className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-soil/80 hover:text-primary transition-all duration-300", "aria-label": "Toggle language", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: lang === "ta" ? "text-primary" : "text-soil/30", children: "தமிழ்" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-soil/10", children: "/" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: lang === "en" ? "text-primary" : "text-soil/30", children: "ENG" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:+91${PHONE_1}`, className: "h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary text-white grid place-items-center hover:scale-110 transition shadow-lg shadow-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 md:h-5 md:w-5" }) }) })
    ] })
  ] }) });
}
function Hero({
  L
}) {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", ref, className: "relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden px-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hero3D, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
      opacity
    }, className: "relative z-10 max-w-6xl w-full text-center flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, className: "inline-flex items-center gap-4 text-[10px] md:text-[11px] font-black tracking-[0.5em] uppercase text-soil/30 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 md:w-10 bg-soil/10" }),
        L.badge,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 md:w-10 bg-soil/10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 40
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }, className: "font-display font-black text-soil leading-[0.9] text-balance text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase", children: [
        L.h1a,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-stroke text-transparent", children: L.h1b }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        L.h1c
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.5,
        duration: 1
      }, className: "mt-10 max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif italic text-2xl md:text-3xl text-rust/80 font-medium mb-8", style: {
          fontFamily: "var(--font-tamil)"
        }, children: "ஸ்ரீ மாரியம்மன் டிராக்டர் சென்டர்" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg text-soil/50 font-medium leading-tight max-w-xl mx-auto tracking-wide", children: L.sub })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:+91${PHONE_1}`, className: "group inline-flex items-center gap-3 rounded-full bg-soil text-white pl-6 pr-2 py-2 text-base font-bold hover:bg-primary transition-all duration-500 shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
          " ",
          L.callNow,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 grid h-8 w-8 place-items-center rounded-full bg-primary text-white group-hover:rotate-45 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WA, target: "_blank", rel: "noopener", className: "inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/30 backdrop-blur-2xl px-6 py-3 text-base font-bold text-soil hover:border-primary transition shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4 text-primary" }),
          " ",
          L.whatsapp
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-3 gap-8 md:gap-16", children: L.stats.map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-4xl font-extrabold text-soil tracking-tighter", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] md:text-[10px] text-soil/20 font-black uppercase tracking-[0.2em] mt-2 leading-none", children: v })
      ] }, v)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}) })
  ] });
}
function LocationStrip({
  L
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: MAPS, target: "_blank", rel: "noopener", className: "block bg-primary text-white hover:bg-soil transition duration-500 relative z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10 py-5 flex items-center justify-center gap-5 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 flex-shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.35em]", children: L.locStrip }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 flex-shrink-0" })
  ] }) });
}
function Marquee() {
  const items = ["Mahindra 575 DI", "Mahindra 475 DI", "Tractor Brokerage", "Genuine Spare Parts", "Field Service", "Rotavators", "Water Tankers", "Engine Repair"];
  const row = [...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-black/5 bg-white/5 backdrop-blur-md text-soil py-6 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-16 animate-marquee whitespace-nowrap", children: row.map((t2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-5 font-display font-bold text-2xl tracking-tighter uppercase opacity-30 hover:opacity-100 transition-opacity", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "h-5 w-5 text-primary" }),
    " ",
    t2
  ] }, i)) }) });
}
function About({
  L
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative mx-auto max-w-7xl px-5 lg:px-10 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-[2rem] p-10 md:p-16 flex flex-col items-center text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black tracking-[0.5em] uppercase text-primary mb-8", children: L.aboutKicker }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif font-black text-4xl lg:text-6xl text-soil tracking-tight leading-[1.1] mb-10 italic", children: L.aboutTitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-soil/60 font-medium leading-relaxed mb-12 tracking-wide", children: L.aboutBody }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-5 md:gap-8", children: L.aboutPills.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-soil/30 group-hover:text-soil text-[11px] uppercase tracking-[0.15em] transition-colors", children: p })
      ] }, p)) })
    ] })
  ] }) });
}
function Services({
  L
}) {
  const icons = [Tractor, Handshake, Wrench, Cog, Sprout, Truck];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black tracking-[0.5em] uppercase text-primary mb-6", children: L.servicesKicker }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans font-black text-4xl lg:text-6xl leading-[1] tracking-tight text-soil uppercase", children: L.servicesTitle })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: L.services.map(([title, desc], i) => {
      const Icon = icons[i];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.04
      }, className: "glass group p-8 rounded-[1.5rem] flex flex-col items-start text-left hover:border-primary/20 transition-all duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-soil/5 text-soil group-hover:bg-primary group-hover:text-white transition-all duration-500 grid place-items-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sans text-xl font-black mb-3 tracking-tight uppercase text-soil", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-soil/50 font-medium leading-relaxed", children: desc })
      ] }, title);
    }) })
  ] }) });
}
function Equipment({
  L
}) {
  const imgs = [eqTractor575, eqTractor475, eqRotavator, eqTanker];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "equipment", className: "relative mx-auto max-w-7xl px-5 lg:px-10 py-24 md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-10 mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black tracking-[0.5em] uppercase text-primary mb-6", children: L.equipKicker }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl lg:text-6xl text-soil tracking-tight leading-[1] uppercase", children: L.equipTitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WA, target: "_blank", rel: "noopener", className: "h-16 w-16 rounded-full border border-black/5 grid place-items-center hover:bg-primary hover:text-white transition-all duration-500 font-bold uppercase text-[8px] tracking-widest text-soil", children: L.enquire }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: L.equipment.map(([title, tag, desc], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
      opacity: 0,
      scale: 0.98
    }, whileInView: {
      opacity: 1,
      scale: 1
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.08
    }, className: "glass rounded-[1.5rem] p-3 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden mb-5 rounded-[1.2rem] shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imgs[i], alt: title, loading: "lazy", width: 800, height: 1e3, className: "w-full h-full object-cover group-hover:scale-110 transition duration-1000 grayscale group-hover:grayscale-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-[7px] font-black uppercase tracking-[0.15em] text-soil shadow-sm", children: tag })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-black text-soil leading-tight tracking-tight mb-2 uppercase", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-soil/50 font-medium leading-relaxed", children: desc })
      ] })
    ] }, title)) })
  ] });
}
function WhyUs({
  L
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why-us", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-[2rem] p-10 md:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black tracking-[0.5em] uppercase text-primary mb-6", children: L.whyKicker }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono font-bold text-3xl lg:text-5xl text-soil tracking-tighter leading-[1] uppercase", children: L.whyTitle })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12", children: L.reasons.map(([t2, d], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group text-left border-l border-black/5 pl-6 py-1 hover:border-primary transition-all duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-mono text-lg font-bold mb-3 tracking-tight uppercase text-soil", children: t2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-soil/40 font-medium leading-relaxed group-hover:text-soil transition-colors", children: d })
    ] }, t2)) })
  ] }) }) });
}
function Testimonials({
  L
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20 text-center md:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black tracking-[0.5em] uppercase text-primary mb-6", children: L.voiceKicker }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif font-black text-4xl lg:text-6xl tracking-tight leading-[1] italic text-soil", children: L.voiceTitle })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: L.testimonials.map(([q, n, r], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-10 rounded-[2rem] group hover:border-primary/20 transition-all duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-8 w-8 text-primary opacity-20 mb-8 group-hover:scale-110 transition-transform duration-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif italic text-xl md:text-2xl font-light leading-snug mb-10 text-soil/80", children: [
        '"',
        q,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 border-t border-black/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold uppercase tracking-widest text-xs mb-1 text-soil", children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-black text-primary uppercase tracking-[0.25em]", children: r })
      ] })
    ] }, i)) })
  ] }) });
}
function Contact({
  L
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "mx-auto max-w-7xl px-5 lg:px-10 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 md:gap-16 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black tracking-[0.5em] uppercase text-primary mb-6", children: L.contactKicker }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl lg:text-6xl text-soil leading-[1] tracking-tight uppercase mb-12", children: L.contactTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-black uppercase tracking-[0.4em] text-soil/20", children: L.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:+91${PHONE_1}`, className: "block text-3xl md:text-4xl font-black text-soil hover:text-primary transition-colors tracking-tighter", children: "94433 61295" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:+91${PHONE_2}`, className: "block text-3xl md:text-4xl font-black text-soil hover:text-primary transition-colors tracking-tighter", children: "93823 34477" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-black uppercase tracking-[0.4em] text-soil/20", children: L.address }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl md:text-2xl font-black text-soil tracking-tighter leading-tight", children: [
            L.footerNote,
            ", India"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WA, target: "_blank", rel: "noopener", className: "glass flex items-center justify-between rounded-[1.5rem] p-6 md:p-8 font-bold uppercase tracking-[0.2em] text-[10px] hover:border-primary transition-all duration-700 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-6 w-6 md:h-8 md:w-8 text-primary" }),
          " ",
          L.whatsapp
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-700" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: MAPS, target: "_blank", rel: "noopener", className: "glass flex items-center justify-between rounded-[1.5rem] p-6 md:p-8 font-bold uppercase tracking-[0.2em] text-[10px] hover:border-primary transition-all duration-700 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6 md:h-8 md:w-8 text-primary" }),
          " ",
          L.googleMaps
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-700" })
      ] }) })
    ] })
  ] }) });
}
function Footer({
  L
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "py-16 border-t border-black/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center md:items-start text-center md:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-soil text-xl tracking-tighter uppercase leading-none mb-1", children: "Sri Mariamman" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] tracking-[0.5em] uppercase text-primary font-black", children: "Tractor Center" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-6 md:gap-12 text-[8px] font-black uppercase tracking-[0.3em] text-soil/30", children: L.nav.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${["about", "services", "equipment", "why-us", "contact"][i]}`, className: "hover:text-primary transition-colors", children: l }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[8px] font-black uppercase tracking-[0.3em] text-soil/10", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] })
  ] }) });
}
function FloatingWA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WA, target: "_blank", rel: "noopener", "aria-label": "WhatsApp", className: "fixed bottom-6 right-6 z-[100] h-14 w-14 md:h-16 md:w-16 rounded-full bg-soil text-white grid place-items-center shadow-xl hover:bg-primary transition-all duration-700 group animate-pulse-ring", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 transition-transform duration-500" }) });
}
export {
  Index as component
};
