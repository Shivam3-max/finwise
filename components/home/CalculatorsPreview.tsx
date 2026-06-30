"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";

function EMICalc() {
  const [principal, setPrincipal] = useState(3000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;
  const emi =
    months > 0 && monthlyRate > 0
      ? (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)
      : 0;
  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  return (
    <div className="space-y-5">
      {/* Principal */}
      <div>
        <div className="flex justify-between text-xs mb-1.5">
          <label className="font-medium text-slate-600">Loan Amount</label>
          <span className="font-bold text-brand-700">
            ₹{(principal / 100000).toFixed(1)}L
          </span>
        </div>
        <input
          type="range"
          min={100000}
          max={10000000}
          step={100000}
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
          className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-brand-700"
        />
        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
          <span>₹1L</span><span>₹1 Cr</span>
        </div>
      </div>

      {/* Rate */}
      <div>
        <div className="flex justify-between text-xs mb-1.5">
          <label className="font-medium text-slate-600">Interest Rate</label>
          <span className="font-bold text-brand-700">{rate.toFixed(1)}%</span>
        </div>
        <input
          type="range"
          min={6}
          max={24}
          step={0.1}
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-brand-700"
        />
        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
          <span>6%</span><span>24%</span>
        </div>
      </div>

      {/* Tenure */}
      <div>
        <div className="flex justify-between text-xs mb-1.5">
          <label className="font-medium text-slate-600">Tenure</label>
          <span className="font-bold text-brand-700">{tenure} years</span>
        </div>
        <input
          type="range"
          min={1}
          max={30}
          step={1}
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
          className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-brand-700"
        />
        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
          <span>1 yr</span><span>30 yrs</span>
        </div>
      </div>

      {/* Result */}
      <div className="bg-brand-50 rounded-xl p-4 border border-brand-100">
        <p className="text-xs text-brand-600 font-medium mb-1">Monthly EMI</p>
        <p className="text-3xl font-bold text-brand-800">
          ₹{Math.round(emi).toLocaleString("en-IN")}
        </p>
        <div className="flex gap-4 mt-3 text-xs text-slate-500">
          <div>
            <span className="font-semibold text-slate-700">₹{Math.round(totalInterest / 100000).toFixed(1)}L</span> interest
          </div>
          <div>
            <span className="font-semibold text-slate-700">₹{Math.round(totalPayment / 100000).toFixed(1)}L</span> total
          </div>
        </div>
      </div>
    </div>
  );
}

function SIPCalc() {
  const [monthly, setMonthly] = useState(10000);
  const [rateP, setRateP] = useState(12);
  const [years, setYears] = useState(15);

  const months = years * 12;
  const monthlyRate = rateP / 12 / 100;
  const futureValue = monthlyRate > 0
    ? monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
    : monthly * months;
  const invested = monthly * months;
  const gains = futureValue - invested;

  return (
    <div className="space-y-5">
      <div>
        <div className="flex justify-between text-xs mb-1.5">
          <label className="font-medium text-slate-600">Monthly SIP</label>
          <span className="font-bold text-brand-700">₹{monthly.toLocaleString("en-IN")}</span>
        </div>
        <input type="range" min={500} max={100000} step={500} value={monthly}
          onChange={(e) => setMonthly(Number(e.target.value))}
          className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-brand-700" />
        <div className="flex justify-between text-[10px] text-slate-400 mt-1"><span>₹500</span><span>₹1L</span></div>
      </div>
      <div>
        <div className="flex justify-between text-xs mb-1.5">
          <label className="font-medium text-slate-600">Expected Return</label>
          <span className="font-bold text-brand-700">{rateP}% p.a.</span>
        </div>
        <input type="range" min={6} max={20} step={0.5} value={rateP}
          onChange={(e) => setRateP(Number(e.target.value))}
          className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-brand-700" />
        <div className="flex justify-between text-[10px] text-slate-400 mt-1"><span>6%</span><span>20%</span></div>
      </div>
      <div>
        <div className="flex justify-between text-xs mb-1.5">
          <label className="font-medium text-slate-600">Investment Period</label>
          <span className="font-bold text-brand-700">{years} years</span>
        </div>
        <input type="range" min={1} max={40} step={1} value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-brand-700" />
        <div className="flex justify-between text-[10px] text-slate-400 mt-1"><span>1 yr</span><span>40 yrs</span></div>
      </div>
      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
        <p className="text-xs text-emerald-700 font-medium mb-1">Future Value</p>
        <p className="text-3xl font-bold text-emerald-800">
          ₹{(futureValue / 100000).toFixed(1)}L
        </p>
        <div className="flex gap-4 mt-3 text-xs text-slate-500">
          <div><span className="font-semibold text-slate-700">₹{(invested / 100000).toFixed(1)}L</span> invested</div>
          <div><span className="font-semibold text-emerald-700">₹{(gains / 100000).toFixed(1)}L</span> gains</div>
        </div>
      </div>
    </div>
  );
}

export default function CalculatorsPreview() {
  const [active, setActive] = useState<"emi" | "sip">("emi");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: heading */}
          <div>
            <div className="section-label">
              <Calculator className="w-3.5 h-3.5" />
              Financial Calculators
            </div>
            <h2 className="section-title mb-6">
              Know the Numbers
              <br />
              Before You Decide
            </h2>
            <p className="section-subtitle mb-8">
              Run real calculations for EMIs, SIP returns, loan eligibility, tax savings, and retirement corpus — all with live inputs.
            </p>
            <div className="space-y-3">
              {[
                "EMI Calculator for any loan type",
                "SIP & Lump Sum Return Projections",
                "Loan Eligibility based on income",
                "Retirement Corpus Planner",
                "Tax Saving Estimator (80C, 80D)",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <div className="w-5 h-5 bg-brand-50 border border-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-brand-600 rounded-full" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
            <Link href="/calculators" className="btn-primary mt-8 inline-flex">
              Open All Calculators
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: interactive calculator */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-premium p-8">
            {/* Tabs */}
            <div className="flex bg-slate-100 rounded-xl p-1 mb-6">
              {[
                { key: "emi", label: "EMI Calculator" },
                { key: "sip", label: "SIP Calculator" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key as "emi" | "sip")}
                  className={`flex-1 text-sm font-semibold py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    active === tab.key
                      ? "bg-white text-brand-700 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {active === "emi" ? <EMICalc /> : <SIPCalc />}
          </div>
        </div>
      </div>
    </section>
  );
}
