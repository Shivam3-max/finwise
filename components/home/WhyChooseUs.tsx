import { ShieldCheck, Users2, BarChart3, Building2, Globe2, Zap } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "100% Independent Advice",
    description: "Our advisors have no incentive to sell you anything. They are paid by you, not by product companies — ensuring completely unbiased guidance.",
    stat: "Zero conflict of interest",
    color: "text-brand-600 bg-brand-50",
  },
  {
    icon: Users2,
    title: "Verified Expert Advisors",
    description: "Every advisor on FinWise is background-checked and holds valid SEBI, IRDAI, or AMFI registrations. Credentials verified, expertise guaranteed.",
    stat: "2,400+ verified professionals",
    color: "text-violet-600 bg-violet-50",
  },
  {
    icon: BarChart3,
    title: "Transparent Comparisons",
    description: "Compare real interest rates, actual premiums, and true returns across products — no sponsored rankings, no paid placements, no hidden fees.",
    stat: "5,000+ products compared",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: Building2,
    title: "100+ Financial Institutions",
    description: "Access products from leading banks, NBFCs, insurance companies, and investment firms — all vetted and integrated into one platform.",
    stat: "HDFC, SBI, ICICI + 97 more",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: Globe2,
    title: "One Complete Ecosystem",
    description: "Everything financial in one place — compare, connect, calculate, learn, apply, and communicate without ever switching platforms.",
    stat: "A-Z financial decisions",
    color: "text-rose-600 bg-rose-50",
  },
  {
    icon: Zap,
    title: "No Hidden Costs",
    description: "Basic advisor browsing, product comparisons, and calculators are completely free. No subscriptions, no surprise charges, no upselling.",
    stat: "Always free to explore",
    color: "text-cyan-600 bg-cyan-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold bg-brand-950/50 border border-brand-900 px-3 py-1.5 rounded-full mb-5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Why FinWise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Built on Transparency,
            <br />
            <span className="text-brand-400">Not Commissions</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Most financial platforms are paid to recommend specific products. We&apos;re not. FinWise exists to help you make better decisions, not to sell you financial products.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${p.color} group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-emerald-400">{p.stat}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom proof bar */}
        <div className="mt-16 border-t border-slate-800 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "₹48,000 Cr+", label: "Financial Products Facilitated" },
            { val: "1.8L+", label: "Happy Clients" },
            { val: "4.9 / 5", label: "Average Platform Rating" },
            { val: "2021", label: "Year Founded" },
          ].map(({ val, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-white mb-1">{val}</div>
              <div className="text-sm text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
