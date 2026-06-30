"use client";

import Link from "next/link";
import { Home, User, Briefcase, GraduationCap, Car, Building2, Heart, Shield, Umbrella, Truck, TrendingUp, BarChart2, Lock, FileText, Calculator, Sun, CreditCard, Layers, ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  user: User,
  briefcase: Briefcase,
  graduation: GraduationCap,
  car: Car,
  building: Building2,
  heart: Heart,
  shield: Shield,
  umbrella: Umbrella,
  truck: Truck,
  trending: TrendingUp,
  chart: BarChart2,
  lock: Lock,
  "file-text": FileText,
  calculator: Calculator,
  sun: Sun,
  "credit-card": CreditCard,
  layers: Layers,
};

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-label">
              <BarChart2 className="w-3.5 h-3.5" />
              Financial Products
            </div>
            <h2 className="section-title">
              One Platform,
              <br />
              Every Financial Need
            </h2>
          </div>
          <div className="md:text-right max-w-sm">
            <p className="text-slate-500 leading-relaxed">
              From loans to investments, insurance to tax planning — compare every product and connect with experts who specialise in each.
            </p>
            <Link href="/compare" className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-brand-700 hover:text-brand-900 cursor-pointer transition-colors">
              View All Products <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Home;
            return (
              <Link
                key={cat.id}
                href={`/compare#${cat.id}`}
                className="group bg-white rounded-2xl border border-slate-100 p-4 hover:border-brand-200 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-center"
                style={{ animationDelay: `${i * 30}ms` }}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-slate-800 group-hover:text-brand-700 transition-colors duration-200 leading-tight">
                  {cat.label}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">{cat.count}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
