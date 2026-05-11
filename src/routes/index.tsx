import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone, MessageCircle, MapPin, Wrench, Cog, Sprout, Truck,
  ShieldCheck, Star, ArrowUpRight, Tractor, Quote, CheckCircle2,
} from "lucide-react";
import heroTractor from "@/assets/hero-tractor.jpg";
import eqRotavator from "@/assets/eq-rotavator.jpg";
import eqTrailer from "@/assets/eq-trailer.jpg";
import eqTanker from "@/assets/eq-tanker.jpg";
import eqTractor from "@/assets/eq-tractor.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sri Mariamman Tractor Center — Trusted Tractor Sales & Service in Namakkal" },
      { name: "description", content: "25+ years of trusted tractor sales, servicing, spare parts and agricultural equipment in Paramathi Velur, Namakkal. Call 94433 61295." },
    ],
  }),
});

const PHONE_1 = "9443361295";
const PHONE_2 = "9382334477";
const WA = `https://wa.me/91${PHONE_1}?text=${encodeURIComponent("Hello Sri Mariamman Tractor Center, I'd like to know more about your tractors and services.")}`;
const MAPS = "https://maps.google.com/?q=Sri+Mariamman+Tractor+Center+Paramathi+Velur+Namakkal";

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg bg-soil text-cream grid place-items-center">
            <Tractor className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-soil text-[15px]">Sri Mariamman</div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Tractor Center</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-soil/80">
          {["About","Services","Equipment","Why Us","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(" ","-")}`} className="hover:text-soil transition">{l}</a>
          ))}
        </nav>
        <a href={`tel:+91${PHONE_1}`} className="inline-flex items-center gap-2 rounded-full bg-soil text-cream px-4 py-2 text-sm font-semibold hover:bg-leaf transition">
          <Phone className="h-4 w-4" /> Call
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 lg:px-10 pt-12 pb-20 lg:pt-20 lg:pb-32 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
            className="inline-flex items-center gap-2 rounded-full border border-soil/20 bg-cream px-3 py-1 text-xs font-semibold text-soil">
            <span className="h-1.5 w-1.5 rounded-full bg-rust animate-pulse" />
            EST. SINCE 25+ YEARS · NAMAKKAL
          </motion.div>
          <motion.h1
            initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7, delay:0.1}}
            className="mt-6 font-display font-black text-soil leading-[0.95] text-balance text-5xl sm:text-6xl lg:text-7xl">
            Powering modern <em className="not-italic text-rust">agriculture</em> with trusted tractor solutions.
          </motion.h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Sales · Service · Agricultural Equipment · Spare Parts. Built for farmers who demand reliability — every season, every harvest.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:+91${PHONE_1}`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-soil text-cream pl-5 pr-2 py-2 text-base font-semibold hover:bg-leaf transition">
              <Phone className="h-5 w-5" /> Call Now
              <span className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-harvest text-soil group-hover:rotate-45 transition">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <a href={WA} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border-2 border-soil/15 bg-cream px-5 py-3 text-base font-semibold text-soil hover:border-soil transition">
              <MessageCircle className="h-5 w-5 text-leaf" /> WhatsApp
            </a>
            <a href="#equipment"
              className="inline-flex items-center gap-2 rounded-full bg-harvest px-5 py-3 text-base font-semibold text-soil hover:brightness-95 transition">
              <Tractor className="h-5 w-5" /> View Tractors
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "25+", v: "Years" },
              { k: "5000+", v: "Farmers served" },
              { k: "24h", v: "Field support" },
            ].map(s => (
              <div key={s.v} className="border-l-2 border-rust pl-3">
                <div className="font-display text-2xl font-extrabold text-soil">{s.k}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.v}</div>
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
            <div className="relative rounded-3xl overflow-hidden glow-harvest animate-float-slow">
              <img src={heroTractor} alt="Premium tractor in field at golden hour"
                width={1280} height={1280} className="w-full h-full object-cover aspect-square" />
            </div>
            <motion.div
              initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.6}}
              className="absolute -left-4 bottom-10 hidden sm:flex items-center gap-3 rounded-2xl bg-cream/95 backdrop-blur shadow-xl px-4 py-3 border border-border">
              <CheckCircle2 className="h-5 w-5 text-leaf" />
              <div>
                <div className="text-xs text-muted-foreground">Authorized service for</div>
                <div className="font-semibold text-soil text-sm">Mahindra & more</div>
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
  const items = ["Mahindra Tractors", "Genuine Spare Parts", "Field Service", "Rotavators", "Trailers", "Water Tankers", "Cultivators", "Engine Repair"];
  const row = [...items, ...items];
  return (
    <div className="border-y border-soil/10 bg-soil text-cream py-4 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {row.map((t,i)=>(
          <span key={i} className="inline-flex items-center gap-3 font-display text-xl">
            <Sprout className="h-4 w-4 text-harvest" /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 lg:px-10 py-24 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-5">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-rust">About us</p>
        <h2 className="mt-3 font-display font-black text-4xl lg:text-5xl text-soil text-balance">
          Trusted tractor mechanic experts in Namakkal.
        </h2>
      </div>
      <div className="lg:col-span-7 space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Sri Mariamman Tractor Center provides reliable tractor sales, agricultural equipment, spare parts, and servicing solutions for farmers and agricultural businesses across Namakkal and nearby regions.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {["Quality service","Genuine work","Affordable pricing","Customer satisfaction"].map(p=>(
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

const services = [
  { icon: Tractor, title: "Tractor Sales", desc: "New and used tractor solutions for all farming needs." },
  { icon: Wrench, title: "Tractor Service", desc: "Engine repair, maintenance, oil service, and inspection." },
  { icon: Cog, title: "Spare Parts", desc: "High-quality genuine tractor spare parts available." },
  { icon: Sprout, title: "Agricultural Equipment", desc: "Rotavators, cultivators, ploughs, trailers, and more." },
  { icon: Truck, title: "Doorstep Support", desc: "Quick on-site support and field assistance nearby." },
];

function Services() {
  return (
    <section id="services" className="bg-soil text-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-harvest">What we do</p>
            <h2 className="mt-3 font-display font-black text-4xl lg:text-5xl text-balance max-w-2xl">
              Everything your tractor needs — under one roof.
            </h2>
          </div>
          <a href={`tel:+91${PHONE_1}`} className="inline-flex items-center gap-2 text-harvest hover:text-cream font-semibold">
            Talk to a specialist <ArrowUpRight className="h-4 w-4"/>
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
              className="group relative rounded-2xl border border-cream/10 bg-cream/[0.04] p-7 hover:bg-harvest hover:text-soil transition-all duration-300">
              <div className="flex items-center justify-between mb-8">
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-harvest text-soil group-hover:bg-soil group-hover:text-harvest transition">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-display text-3xl text-cream/20 group-hover:text-soil/30">0{i+1}</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm opacity-80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const equipment = [
  { img: eqTractor, title: "Mahindra Tractors", tag: "Exclusive", desc: "Powerful, fuel-efficient tractors built for Indian farms." },
  { img: eqRotavator, title: "Rotavator", tag: "Implement", desc: "Heavy-duty soil prep with even tilling depth." },
  { img: eqTrailer, title: "Trailer", tag: "Hauling", desc: "Strong steel trailer for crops and supplies." },
  { img: eqTanker, title: "Water Tanker", tag: "Irrigation", desc: "High-capacity tanker for irrigation & storage." },
];

function Equipment() {
  return (
    <section id="equipment" className="mx-auto max-w-7xl px-5 lg:px-10 py-24">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-rust">Featured equipment</p>
          <h2 className="mt-3 font-display font-black text-4xl lg:text-5xl text-soil">Workhorses for every field.</h2>
        </div>
        <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-semibold text-soil hover:text-rust">
          Enquire on WhatsApp <ArrowUpRight className="h-4 w-4"/>
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {equipment.map((e,i)=>(
          <motion.article key={e.title}
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}}
            className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-rust transition">
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img src={e.img} alt={e.title} loading="lazy" width={800} height={800}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-cream text-soil px-2 py-1 rounded-full">{e.tag}</span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-bold text-soil">{e.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

const reasons = [
  { t: "Experienced technicians", d: "25+ years on the field." },
  { t: "Genuine spare parts", d: "Sourced from authorized OEMs." },
  { t: "Fast servicing", d: "Minimum downtime, maximum harvest." },
  { t: "Affordable pricing", d: "Honest quotes, no surprises." },
  { t: "Trusted by farmers", d: "Loved across Namakkal region." },
  { t: "Customer-first support", d: "We pick up. We show up." },
];

function WhyUs() {
  return (
    <section id="why-us" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-rust">Why choose us</p>
          <h2 className="mt-3 font-display font-black text-4xl lg:text-5xl text-soil text-balance">
            Built on trust. Backed by 25 years of service.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {reasons.map((r,i)=>(
            <div key={r.t}
              className="group bg-cream p-8 hover:bg-soil hover:text-cream transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-display text-sm text-rust group-hover:text-harvest">0{i+1}</span>
                <ShieldCheck className="h-5 w-5 text-leaf group-hover:text-harvest"/>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{r.t}</h3>
              <p className="text-sm opacity-75">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { q: "Best tractor service in Namakkal. Quick response and genuine parts.", n: "Murugan S.", r: "Paramathi Velur" },
  { q: "Very friendly service and affordable pricing. Highly recommended!", n: "Karthik R.", r: "Namakkal" },
  { q: "Fixed my Mahindra in a day during harvest. Lifesavers.", n: "Selvam P.", r: "Velur" },
];

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-10 py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-rust">Farmer voices</p>
        <h2 className="mt-3 font-display font-black text-4xl lg:text-5xl text-soil">Trusted across the region.</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t,i)=>(
          <motion.div key={i}
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
            className="rounded-2xl border border-border bg-card p-7 relative">
            <Quote className="absolute top-5 right-5 h-8 w-8 text-harvest/40"/>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_,j)=><Star key={j} className="h-4 w-4 fill-harvest text-harvest"/>)}
            </div>
            <p className="font-display text-lg text-soil leading-snug">"{t.q}"</p>
            <div className="mt-5 pt-5 border-t border-border">
              <div className="font-semibold text-soil">{t.n}</div>
              <div className="text-xs text-muted-foreground">{t.r}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-soil text-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-harvest">Get in touch</p>
          <h2 className="mt-3 font-display font-black text-4xl lg:text-5xl text-balance">
            Visit us, call us, or message on WhatsApp.
          </h2>
          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <span className="h-11 w-11 grid place-items-center rounded-full bg-harvest text-soil flex-shrink-0"><MapPin className="h-5 w-5"/></span>
              <div>
                <div className="text-xs uppercase tracking-wider text-harvest mb-1">Address</div>
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
                <div className="text-xs uppercase tracking-wider text-harvest mb-1">Phone</div>
                <a href={`tel:+91${PHONE_1}`} className="block font-display text-2xl font-bold hover:text-harvest">94433 61295</a>
                <a href={`tel:+91${PHONE_2}`} className="block font-display text-2xl font-bold hover:text-harvest">93823 34477</a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-cream/[0.05] border border-cream/10 p-8 lg:p-10">
            <h3 className="font-display text-2xl font-bold mb-6">Quick actions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <a href={`tel:+91${PHONE_1}`} className="flex items-center justify-between rounded-xl bg-harvest text-soil p-5 font-semibold hover:brightness-95 transition">
                <span className="flex items-center gap-3"><Phone className="h-5 w-5"/> Call Now</span>
                <ArrowUpRight className="h-5 w-5"/>
              </a>
              <a href={WA} target="_blank" rel="noopener" className="flex items-center justify-between rounded-xl bg-leaf text-cream p-5 font-semibold hover:brightness-110 transition">
                <span className="flex items-center gap-3"><MessageCircle className="h-5 w-5"/> WhatsApp</span>
                <ArrowUpRight className="h-5 w-5"/>
              </a>
              <a href={MAPS} target="_blank" rel="noopener" className="flex items-center justify-between rounded-xl bg-cream text-soil p-5 font-semibold hover:bg-cream/90 transition">
                <span className="flex items-center gap-3"><MapPin className="h-5 w-5"/> Google Maps</span>
                <ArrowUpRight className="h-5 w-5"/>
              </a>
              <a href={`tel:+91${PHONE_2}`} className="flex items-center justify-between rounded-xl border border-cream/20 p-5 font-semibold hover:bg-cream/5 transition">
                <span className="flex items-center gap-3"><Phone className="h-5 w-5"/> Alt. Number</span>
                <ArrowUpRight className="h-5 w-5"/>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-cream/10 text-sm text-cream/70">
              Open Mon–Sat · Field service available across Namakkal & nearby villages.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-cream border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-md bg-soil text-cream grid place-items-center"><Tractor className="h-4 w-4"/></div>
          <div className="font-display font-bold text-soil">Sri Mariamman Tractor Center</div>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} · Namakkal, Tamil Nadu</p>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a href={WA} target="_blank" rel="noopener" aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-leaf text-cream grid place-items-center shadow-2xl hover:scale-110 transition">
      <MessageCircle className="h-6 w-6"/>
      <span className="absolute inset-0 rounded-full animate-pulse-ring"/>
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-cream">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Equipment />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWA />
    </main>
  );
}
