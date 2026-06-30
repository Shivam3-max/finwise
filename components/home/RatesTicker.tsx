"use client";

import { TrendingUp, TrendingDown, Minus, RefreshCw } from "lucide-react";
import { financialRates } from "@/lib/data";

export default function RatesTicker() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Live Financial Rates</h2>
            <p className="text-sm text-slate-400 mt-0.5">Updated daily from verified bank sources</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1.5 font-semibold">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-slow" />
            Live Rates
          </div>
        </div>

        {/* Rates grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {financialRates.map((rate, i) => {
            const isUp = rate.change.startsWith("+");
            const isDown = rate.change.startsWith("-");
            const isFlat = rate.change === "0.00%";

            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-100 p-4 hover:border-brand-200 hover:shadow-card transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{rate.bank}</span>
                  <span
                    className={`flex items-center gap-0.5 text-xs font-semibold ${
                      isUp ? "text-rose-500" : isDown ? "text-emerald-600" : "text-slate-400"
                    }`}
                  >
                    {isUp && <TrendingUp className="w-3 h-3" />}
                    {isDown && <TrendingDown className="w-3 h-3" />}
                    {isFlat && <Minus className="w-3 h-3" />}
                    {rate.change}
                  </span>
                </div>
                <p className="text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors duration-200">
                  {rate.rate}
                </p>
                <p className="text-xs text-slate-500 mt-1 leading-tight">{rate.label}</p>
                <span
                  className={`mt-2 inline-block text-xs font-medium px-2 py-0.5 rounded-full ${
                    rate.type === "loan"
                      ? "bg-blue-50 text-blue-600"
                      : rate.type === "fd"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-violet-50 text-violet-600"
                  }`}
                >
                  {rate.type === "loan" ? "Loan" : rate.type === "fd" ? "FD" : "Insurance"}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-400">
          <RefreshCw className="w-3 h-3" />
          Rates last updated: Today, 9:00 AM IST · Source: Official bank websites
        </div>
      </div>
    </section>
  );
}
