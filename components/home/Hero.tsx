"use client";

import Link from "next/link";
import { ArrowRight, Star, Shield, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const floatingCards = [
  {
    id: 1,
    title: "Home Loan Rate",
    value: "8.40%",
    sub: "SBI — Lowest Rate",
    change: "↓ 0.10% this week",
    changeColor: "text-emerald-600",
    icon: "🏠",
    delay: "0s",
    position: "top-16 right-0",
  },
  {
    id: 2,
    title: "Advisor Connected",
    value: "Rajesh S.",
    sub: "CFP • 18 yrs exp",
    change: "⭐ 4.9 • 312 reviews",
    changeColor: "text-amber-600",
    icon: "👤",
    delay: "0.4s",
    position: "top-52 right-8",
  },
  {
    id: 3,
    title: "SIP Returns",
    value: "₹42.6L",
    sub: "₹10K/mo • 15 years",
    change: "↑ 14.2% CAGR",
    changeColor: "text-emerald-600",
    icon: "📈",
    delay: "0.8s",
    position: "bottom-16 right-4",
  },
];

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #1E40AF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 rounded-full px-4 py-2 text-sm font-semibold text-brand-700">
              <Sparkles className="w-3.5 h-3.5" />
              India&apos;s #1 Financial Decision Platform
              <ArrowRight className="w-3.5 h-3.5" />
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Every Financial
                <br />
                Decision
                <br />
                <span className="text-brand-700">Starts Here.</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
                Connect with verified advisors, compare products from 100+ institutions, and make confident financial decisions — all in one place.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Shield, label: "SEBI Registered Advisors" },
                { icon: CheckCircle2, label: "Zero Hidden Costs" },
                { icon: Star, label: "4.9/5 Rated Platform" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-3 py-1.5 shadow-sm">
                  <Icon className="w-3.5 h-3.5 text-brand-600" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/advisors" className="btn-primary text-base px-8 py-4 justify-center shadow-premium">
                Find an Advisor
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/compare" className="btn-secondary text-base px-8 py-4 justify-center">
                <TrendingUp className="w-5 h-5" />
                Compare Products
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-100">
              {[
                { label: "Verified Advisors", end: 2400, suffix: "+" },
                { label: "Financial Products", end: 5000, suffix: "+" },
                { label: "Clients Served", end: 180000, suffix: "+" },
              ].map(({ label, end, suffix }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-slate-900">
                    <AnimatedCounter end={end} suffix={suffix} />
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual dashboard */}
          <div className="relative hidden lg:block">
            {/* Main dashboard card */}
            <div className="relative bg-white rounded-3xl border border-slate-100 shadow-premium p-6 ml-8">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Your Financial Overview</p>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">Portfolio Summary</h3>
                </div>
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-brand-600" />
                </div>
              </div>

              {/* Mini chart bars */}
              <div className="flex items-end gap-2 h-24 mb-6">
                {[45, 62, 55, 78, 65, 89, 72, 95, 83, 100, 88, 96].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-sm transition-all duration-300 ${
                      i === 11 ? "bg-brand-700" : i >= 8 ? "bg-brand-300" : "bg-slate-100"
                    }`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              {/* Metric cards row */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: "Net Worth", value: "₹48.6L", change: "+12.4%", up: true },
                  { label: "Monthly SIP", value: "₹25,000", change: "Active", up: true },
                  { label: "Loan EMI", value: "₹42,800", change: "On Track", up: true },
                  { label: "Insurance", value: "₹1.5 Cr", change: "Protected", up: true },
                ].map(({ label, value, change, up }) => (
                  <div key={label} className="bg-slate-50 rounded-xl p-3">
                    <p className="text-xs text-slate-400 font-medium">{label}</p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{value}</p>
                    <p className={`text-xs font-semibold mt-0.5 ${up ? "text-emerald-600" : "text-red-500"}`}>
                      {change}
                    </p>
                  </div>
                ))}
              </div>

              {/* Upcoming consultation */}
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-3 flex items-center gap-3">
                <div className="w-9 h-9 bg-gradient-to-br from-brand-600 to-brand-800 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  RS
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-slate-700">Rajesh Sharma • CFP</p>
                  <p className="text-xs text-slate-500">Consultation Today, 3:00 PM</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-xs font-semibold text-brand-700 bg-white px-2 py-1 rounded-lg border border-brand-200">Join</span>
                </div>
              </div>
            </div>

            {/* Floating info cards */}
            {floatingCards.map((card) => (
              <div
                key={card.id}
                className={`absolute ${card.position} bg-white rounded-2xl border border-slate-100 shadow-card-hover p-3.5 w-48 animate-float`}
                style={{ animationDelay: card.delay }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-base">{card.icon}</span>
                  <span className="text-xs font-semibold text-slate-400">{card.title}</span>
                </div>
                <p className="text-base font-bold text-slate-900">{card.value}</p>
                <p className="text-xs text-slate-400">{card.sub}</p>
                <p className={`text-xs font-semibold mt-1 ${card.changeColor}`}>{card.change}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-slate-300 rounded-full" />
        <span className="text-xs text-slate-400 font-medium tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
