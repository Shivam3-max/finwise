import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mx-auto inline-flex">
            <Star className="w-3.5 h-3.5 fill-current" />
            Customer Stories
          </div>
          <h2 className="section-title mb-4">
            Real Decisions, Real Results
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Over 1.8 lakh customers have made better financial decisions with FinWise.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 relative group"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-brand-100 absolute top-6 right-6 group-hover:text-brand-200 transition-colors" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Outcome badge */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2 mb-5 inline-block">
                <span className="text-xs font-bold text-emerald-700">{t.savings}</span>
                <span className="text-xs text-emerald-500 ml-1">via {t.product}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 bg-gradient-to-br ${t.color} rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust metrics */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "4.9 / 5", label: "App Store Rating", sub: "38,000+ reviews" },
            { val: "98.7%", label: "Advisor Verification Rate", sub: "Background checked" },
            { val: "< 24 hrs", label: "Avg Advisor Response", sub: "Or we follow up" },
            { val: "₹0", label: "Cost to Explore", sub: "Forever free" },
          ].map(({ val, label, sub }) => (
            <div key={label} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center">
              <div className="text-2xl font-bold text-slate-900 mb-1">{val}</div>
              <div className="text-sm font-semibold text-slate-700 mb-0.5">{label}</div>
              <div className="text-xs text-slate-400">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
