import { Target, Eye, Heart, Shield, Zap, Users2, ArrowRight, CheckCircle2, Linkedin } from "lucide-react";
import Link from "next/link";

const values = [
  { icon: Shield, title: "Integrity Above All", desc: "We never take undisclosed commissions. Our advisors are paid by users, not product companies — ensuring unbiased guidance every time.", color: "text-brand-600 bg-brand-50" },
  { icon: Users2, title: "People Over Products", desc: "We begin with understanding your financial situation, not with selling you a product. Your goals come first, always.", color: "text-violet-600 bg-violet-50" },
  { icon: Zap, title: "Radical Simplicity", desc: "Financial decisions should feel clear, not confusing. We obsess over making complexity simple, and jargon plain.", color: "text-amber-600 bg-amber-50" },
  { icon: Target, title: "Outcome Focused", desc: "We measure success not by products sold, but by the quality of decisions our users make and the wealth they build.", color: "text-rose-600 bg-rose-50" },
  { icon: Eye, title: "Complete Transparency", desc: "Every comparison is neutral. Every rate is verified. Every advisor credential is checked. No sponsored placements.", color: "text-emerald-600 bg-emerald-50" },
  { icon: Heart, title: "Long-Term Partnership", desc: "We believe financial guidance is a relationship, not a transaction. Our advisors are partners across every life milestone.", color: "text-cyan-600 bg-cyan-50" },
];

const leadership = [
  {
    name: "Karan Malhotra",
    role: "Co-Founder & CEO",
    bg: "from-blue-700 to-blue-900",
    avatar: "KM",
    prev: "Ex-Goldman Sachs, IIT Bombay",
    bio: "Previously built India's first robo-advisory platform. 14 years in financial services across US, Singapore, and India.",
  },
  {
    name: "Sanya Agarwal",
    role: "Co-Founder & CTO",
    bg: "from-violet-700 to-purple-900",
    avatar: "SA",
    prev: "Ex-Flipkart, BITS Pilani",
    bio: "Led engineering at Flipkart's fintech division. Deep expertise in building consumer-grade financial technology at scale.",
  },
  {
    name: "Rohit Joshi",
    role: "Chief Investment Officer",
    bg: "from-emerald-700 to-teal-900",
    avatar: "RJ",
    prev: "SEBI RIA, CFA, IIM Ahmedabad",
    bio: "20 years of wealth management experience. Former Head of Advisory at HDFC Securities. SEBI Registered Investment Advisor.",
  },
  {
    name: "Preethi Nair",
    role: "VP, Advisor Network",
    bg: "from-rose-700 to-pink-900",
    avatar: "PN",
    prev: "Ex-Paytm Money, NIT Calicut",
    bio: "Built and scaled a network of 2,400+ certified financial advisors across 80+ cities in India since 2022.",
  },
];

const milestones = [
  { year: "2021", label: "FinWise Founded", desc: "Started with 5 advisors and a simple comparison tool" },
  { year: "2022", label: "SEBI Registration", desc: "Obtained SEBI Investment Advisor platform license" },
  { year: "2023", label: "1L Customers", desc: "Crossed 100,000 customers served across India" },
  { year: "2024", label: "Series A", desc: "Raised ₹120 Cr to expand advisor network and products" },
  { year: "2025", label: "2,400+ Advisors", desc: "Expanded to 80 cities with verified financial experts" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Hero */}
      <div className="bg-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold bg-brand-950/50 border border-brand-900 px-3 py-1.5 rounded-full mb-6">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We Built the Platform
              <br />
              <span className="text-brand-400">We Wished Existed.</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
              Every financial website we used was either selling us products, hiding fees, or giving us advice that benefited them — not us. So in 2021, we built something different: a financial platform that puts advice before products, always.
            </p>
          </div>
        </div>
      </div>

      {/* Mission + Vision */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-50 border border-brand-100 rounded-3xl p-10">
              <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-brand-700" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To democratize access to unbiased financial expertise — so that every Indian, regardless of income or background, can make confident, well-informed financial decisions.
              </p>
            </div>
            <div className="bg-slate-950 text-white rounded-3xl p-10">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-brand-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                A future where no Indian ever makes a financial decision in the dark — where expert guidance, transparent comparisons, and trusted products are available to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Problem We Solve */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">The Problem We&apos;re Solving</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Most financial platforms are designed to maximize product sales, not user outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Hidden Commissions", desc: "Advisors on traditional platforms are paid commissions by product companies — creating a direct conflict of interest with users.", icon: "❌" },
              { title: "Comparison Sites Sell Too", desc: "Popular comparison websites charge institutions for featured placement, making 'top rankings' meaningless and often misleading.", icon: "❌" },
              { title: "No Holistic View", desc: "Most platforms focus on one product category. No single place helps you see your entire financial picture and plan across it.", icon: "❌" },
            ].map((p, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-7">
                <span className="text-2xl mb-4 block">{p.icon}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 text-brand-700 font-semibold text-lg">
              <CheckCircle2 className="w-5 h-5" />
              FinWise solves all three.
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Stand For</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Our values shape every decision we make — from the products we feature to the advisors we verify.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${v.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`bg-white border border-slate-100 rounded-2xl p-6 shadow-card ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                      <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2 py-1 rounded-lg">{m.year}</span>
                      <h3 className="font-bold text-slate-900 text-lg mt-3 mb-1">{m.label}</h3>
                      <p className="text-slate-500 text-sm">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-10 h-10 bg-brand-700 rounded-full items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-premium z-10">
                    {i + 1}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Built by former Goldman Sachs, Flipkart, and HDFC Securities professionals who understand both finance and technology.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.map((l) => (
              <div key={l.name} className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group">
                <div className={`bg-gradient-to-br ${l.bg} h-24 flex items-end p-4 relative overflow-hidden`}>
                  <div className="absolute -bottom-4 left-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-xl font-bold border-4 border-white shadow-card"
                      style={{ color: "#1E40AF" }}>
                      {l.avatar}
                    </div>
                  </div>
                </div>
                <div className="pt-8 pb-5 px-5">
                  <h3 className="font-bold text-slate-900 text-base">{l.name}</h3>
                  <p className="text-brand-600 text-xs font-semibold mt-0.5">{l.role}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{l.prev}</p>
                  <p className="text-slate-500 text-xs leading-relaxed mt-3">{l.bio}</p>
                  <button className="flex items-center gap-1.5 mt-3 text-xs font-semibold text-slate-400 hover:text-brand-700 transition-colors cursor-pointer">
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Numbers */}
      <div className="py-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "2,400+", label: "Verified Advisors", sub: "Across 80+ cities" },
              { val: "1.8L+", label: "Customers Served", sub: "& counting" },
              { val: "₹48,000 Cr+", label: "Products Facilitated", sub: "Total value" },
              { val: "4.9/5", label: "Platform Rating", sub: "38,000+ reviews" },
            ].map(({ val, label, sub }) => (
              <div key={label}>
                <div className="text-3xl md:text-4xl font-bold text-brand-400 mb-1">{val}</div>
                <div className="text-white font-semibold text-sm">{label}</div>
                <div className="text-slate-400 text-xs mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join CTA */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Join India&apos;s Most Trusted
            <br />Financial Platform
          </h2>
          <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re looking for advice, want to compare products, or are a financial expert looking to expand your practice — FinWise is for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/advisors" className="btn-primary px-8 py-4 text-base">
              Find an Advisor <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/partners" className="btn-secondary px-8 py-4 text-base">
              Join as an Advisor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
