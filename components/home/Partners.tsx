import { partners } from "@/lib/data";

const partnerColors: Record<string, string> = {
  "State Bank of India": "text-blue-700",
  "HDFC Bank": "text-red-700",
  "ICICI Bank": "text-orange-600",
  "Axis Bank": "text-rose-700",
  "Kotak Mahindra": "text-red-800",
  "Bajaj Finance": "text-blue-800",
  "LIC": "text-green-700",
  "HDFC Life": "text-red-600",
  "ICICI Prudential": "text-orange-700",
  "Tata AIA": "text-blue-600",
  "Zerodha": "text-emerald-700",
  "Groww": "text-violet-600",
  "HDFC Mutual Fund": "text-red-700",
  "SBI Mutual Fund": "text-blue-700",
  "Nippon India MF": "text-red-600",
};

export default function Partners() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
            Trusted by India&apos;s Leading Financial Institutions
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="group cursor-pointer"
            >
              <span
                className={`text-sm font-bold tracking-wide opacity-40 group-hover:opacity-80 transition-all duration-200 ${
                  partnerColors[partner] || "text-slate-600"
                }`}
              >
                {partner.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-8">
          +85 more banks, NBFCs, insurance companies, and investment firms
        </p>
      </div>
    </section>
  );
}
