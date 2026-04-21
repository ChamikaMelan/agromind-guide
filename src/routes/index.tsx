import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroImg from "@/assets/hero-paddy.jpg";
import {
  Sprout, ArrowRight, Bug, Leaf, Map, Warehouse,
  Database, BrainCircuit, Lightbulb, Smartphone, TrendingUp, ShieldCheck, Coins, Clock,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgroMind — AI-Driven Platform for Paddy Farmers" },
      { name: "description", content: "AgroMind is an AI-powered smart agriculture platform helping Sri Lankan paddy farmers improve productivity, reduce losses, and optimize decisions across the full cultivation lifecycle." },
      { property: "og:title", content: "AgroMind — AI-Driven Platform for Paddy Farmers" },
      { property: "og:description", content: "Smart AI guidance for paddy cultivation: pest prediction, weed detection, crop planning and post-harvest advisory." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const benefits = [
  { icon: Clock, value: "12-day", label: "Early pest warning" },
  { icon: Coins, value: "28%", label: "Reduction in herbicide costs" },
  { icon: TrendingUp, value: "18%", label: "Increase in net profit" },
  { icon: ShieldCheck, value: "LKR 52,400", label: "Economic benefit per hectare" },
];

const modules = [
  { icon: Bug, title: "Pest Prediction", desc: "Random Forest + XGBoost models forecasting outbreaks 12 days in advance." },
  { icon: Leaf, title: "Weed Detection", desc: "MobileNetV2 lightweight vision model running on-device for instant identification." },
  { icon: Map, title: "Crop Planning", desc: "ML + geospatial data to recommend optimal varieties, sowing dates and zones." },
  { icon: Warehouse, title: "Post-Harvest Advisory", desc: "XGBoost + LSTM forecasts to minimise storage losses and time market sales." },
];

const layers = [
  { icon: Database, name: "Data Layer", desc: "Weather, satellite imagery, soil & farmer inputs" },
  { icon: BrainCircuit, name: "ML Layer", desc: "RF, XGBoost, LSTM, MobileNetV2 models" },
  { icon: Lightbulb, name: "Decision Layer", desc: "Rule engines & multi-module advisory orchestration" },
  { icon: Smartphone, name: "Presentation Layer", desc: "React Native mobile app for farmers (offline-first)" },
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          <img
            src={heroImg}
            alt="Sri Lankan paddy fields at sunrise"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary-glow/60" />
          <div className="relative max-w-7xl mx-auto px-6 py-32 text-primary-foreground">
            <div className="max-w-3xl animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-semibold tracking-wider uppercase mb-6">
                <Sprout className="w-3.5 h-3.5" /> SLIIT Research Project
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.05]">
                Agro<span className="text-accent">Mind</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-4 text-white/95">
                An AI-Driven Platform Guiding Paddy Farmers Across the Full Cultivation Lifecycle.
              </p>
              <p className="text-base md:text-lg text-white/85 mb-10 max-w-2xl leading-relaxed">
                AgroMind is an AI-powered smart agriculture platform designed for Sri Lankan paddy farmers
                to improve productivity, reduce losses, and optimize decision-making — from sowing to sale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/domain"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold rounded-lg shadow-elegant hover:shadow-glow hover:scale-[1.03] transition-smooth"
                >
                  Explore Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-smooth"
                >
                  Meet the Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 animate-fade-up">
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">Impact</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Measurable benefits for farmers</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, i) => (
                <div
                  key={b.label}
                  className="bg-gradient-card border border-border rounded-2xl p-7 hover-lift animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-1">{b.value}</div>
                  <div className="text-sm text-muted-foreground">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12 animate-fade-up">
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">Four Smart Modules</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">One platform, full lifecycle coverage</h2>
              <p className="text-muted-foreground">From pre-season planning to post-harvest sale, AgroMind unifies four AI modules into a single mobile experience.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((m, i) => (
                <div
                  key={m.title}
                  className="group p-7 rounded-2xl border border-border bg-card hover-lift animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-5 shadow-soft group-hover:shadow-glow transition-smooth">
                    <m.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section className="py-24 bg-gradient-section border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">System Architecture</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">A four-layer intelligent stack</h2>
              <p className="text-muted-foreground">Data flows upward — sensors and inputs at the base, decisions and farmer-facing experiences at the top.</p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {layers.map((l, i) => (
                <div
                  key={l.name}
                  className="relative bg-card border border-border rounded-2xl p-6 md:p-7 flex items-center gap-5 hover-lift animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <l.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-primary">LAYER {layers.length - i}</span>
                    </div>
                    <h3 className="font-bold text-lg">{l.name}</h3>
                    <p className="text-sm text-muted-foreground">{l.desc}</p>
                  </div>
                  {i < layers.length - 1 && (
                    <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-px h-3 bg-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-16 text-center shadow-elegant">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Discover the full AgroMind research
              </h2>
              <p className="text-primary-foreground/85 max-w-xl mx-auto mb-8">
                Explore methodology, milestones, documents and the team behind the project.
              </p>
              <Link
                to="/domain"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold rounded-lg shadow-elegant hover:scale-[1.03] transition-smooth"
              >
                Explore Project Domain <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
