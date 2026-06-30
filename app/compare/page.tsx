"use client";

import { useState } from "react";
import { BarChart3, CheckCircle2, X, Star, ArrowRight, Info, TrendingUp, Shield, Lock } from "lucide-react";
import Link from "next/link";
import { loanComparison } from "@/lib/data";

const tabs = [
  { key: "loans", label: "Loans", icon: TrendingUp },
  { key: "insurance", label: "Insurance", icon: Shield },
  { key: "investments", label: "Investments", icon: BarChart3 },
];

const insuranceData = [
  { bank: "Star Health", logo: "STAR", plan: "Comprehensive Care 5L", premium: "₹9,800/yr", coverage: "₹5 Lakhs", network: "14,000+ hospitals", csr: "90.3%", waiting: "30 days", highlight: "Best Network" },
  { bank: "HDFC ERGO", logo: "HDFC", plan: "Optima Restore 5L", premium: "₹11,200/yr", coverage: "₹5 Lakhs", network: "12,000+ hospitals", csr: "91.4%", waiting: "30 days", highlight: "Restore Benefit" },
  { bank: "Niva Bupa", logo: "NIVA", plan: "Reassure 2.0 — 5L", premium: "₹8,900/yr", coverage: "₹5 Lakhs", network: "10,000+ hospitals", csr: "92.7%", waiting: "30 days", highlight: "Highest CSR" },
  { bank: "Care Health", logo: "CARE", plan: "Care Advantage 5L", premium: "₹10,400/yr", coverage: "₹5 Lakhs", network: "11,500+ hospitals", csr: "88.6%", waiting: "30 days", highlight: "" },
  { bank: "ICICI Lombard", logo: "ICICI", plan: "Complete Health 5L", premium: "₹12,100/yr", coverage: "₹5 Lakhs", network: "6,500+ hospitals", csr: "86.2%", waiting: "30 days", highlight: "" },
];

const investmentData = [
  { fund: "Mirae Asset Large Cap", category: "Large Cap", ret3: "16.8%", ret5: "14.2%", ret10: "15.1%", risk: "Moderate", minSIP: "₹1,000", aum: "₹38,200 Cr", highlight: "Top Ranked" },
  { fund: "HDFC Mid-Cap Opportunities", category: "Mid Cap", ret3: "22.4%", ret5: "17.8%", ret10: "18.3%", risk: "High", minSIP: "₹500", aum: "₹64,100 Cr", highlight: "Largest AUM" },
  { fund: "Parag Parikh Flexi Cap", category: "Flexi Cap", ret3: "19.2%", ret5: "21.4%", ret10: "16.8%", risk: "Moderate", minSIP: "₹1,000", aum: "₹72,400 Cr", highlight: "Best 5yr Returns" },
  { fund: "Axis Small Cap", category: "Small Cap", ret3: "24.6%", ret5: "24.1%", ret10: "20.2%", risk: "Very High", minSIP: "₹500", aum: "₹22,800 Cr", highlight: "" },
  { fund: "SBI Bluechip Fund", category: "Large Cap", ret3: "14.2%", ret5: "13.8%", ret10: "14.6%", risk: "Moderate", minSIP: "₹500", aum: "₹44,200 Cr", highlight: "" },
];

function LoanTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-card">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-100">
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-4 sticky left-0 bg-slate-50 min-w-[140px]">Bank / NBFC</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4 whitespace-nowrap">Interest Rate</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4 whitespace-nowrap">Processing Fee</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4 whitespace-nowrap">Max Amount</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4 whitespace-nowrap">Max Tenure</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4 whitespace-nowrap">Approval Time</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4 whitespace-nowrap">Prepayment</th>
            <th className="px-4 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {loanComparison.map((loan, i) => (
            <tr key={i} className={`hover:bg-brand-50/30 transition-colors ${i === 0 ? "bg-emerald-50/30" : ""}`}>
              <td className="px-5 py-4 sticky left-0 bg-white hover:bg-brand-50/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-xs font-bold text-slate-600 flex-shrink-0">
                    {loan.logo}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{loan.bank}</p>
                    {loan.highlight && (
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">{loan.highlight}</span>
                    )}
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <span className="text-sm font-bold text-brand-700">{loan.rate}</span>
              </td>
              <td className="px-4 py-4 text-sm text-slate-600">{loan.processing}</td>
              <td className="px-4 py-4 text-sm font-medium text-slate-700">{loan.maxAmount}</td>
              <td className="px-4 py-4 text-sm text-slate-600">{loan.tenure}</td>
              <td className="px-4 py-4">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">{loan.approval}</span>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-1 text-sm text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {loan.prepayment}
                </div>
              </td>
              <td className="px-4 py-4">
                <button className="text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap">
                  Apply Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InsuranceTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-card">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-100">
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-4 min-w-[160px]">Insurer / Plan</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4">Annual Premium</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4">Coverage</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4 whitespace-nowrap">Network Hospitals</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4 whitespace-nowrap">Claim Settlement</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4 whitespace-nowrap">Waiting Period</th>
            <th className="px-4 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {insuranceData.map((ins, i) => (
            <tr key={i} className={`hover:bg-brand-50/30 transition-colors ${i === 2 ? "bg-emerald-50/30" : ""}`}>
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-xs font-bold text-slate-600">{ins.logo}</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{ins.bank}</p>
                    <p className="text-xs text-slate-400">{ins.plan}</p>
                    {ins.highlight && <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">{ins.highlight}</span>}
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-sm font-bold text-brand-700">{ins.premium}</td>
              <td className="px-4 py-4 text-sm font-medium text-slate-700">{ins.coverage}</td>
              <td className="px-4 py-4 text-sm text-slate-600">{ins.network}</td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-current" />
                  <span className="text-sm font-semibold text-slate-700">{ins.csr}</span>
                </div>
              </td>
              <td className="px-4 py-4 text-sm text-slate-600">{ins.waiting}</td>
              <td className="px-4 py-4">
                <button className="text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap">
                  Get Quote
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InvestmentTable() {
  const riskColor: Record<string, string> = {
    Moderate: "text-amber-700 bg-amber-50",
    High: "text-orange-700 bg-orange-50",
    "Very High": "text-red-700 bg-red-50",
    Low: "text-emerald-700 bg-emerald-50",
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-card">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-100">
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-4 min-w-[200px]">Fund Name</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4">Category</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4">3yr Returns</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4">5yr Returns</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4">10yr Returns</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4">Risk</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4 whitespace-nowrap">Min SIP</th>
            <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-4">AUM</th>
            <th className="px-4 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {investmentData.map((fund, i) => (
            <tr key={i} className={`hover:bg-brand-50/30 transition-colors ${fund.highlight ? "bg-emerald-50/30" : ""}`}>
              <td className="px-5 py-4">
                <p className="text-sm font-semibold text-slate-900">{fund.fund}</p>
                {fund.highlight && <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">{fund.highlight}</span>}
              </td>
              <td className="px-4 py-4"><span className="badge-blue">{fund.category}</span></td>
              <td className="px-4 py-4 text-sm font-bold text-emerald-700">{fund.ret3}</td>
              <td className="px-4 py-4 text-sm font-bold text-emerald-700">{fund.ret5}</td>
              <td className="px-4 py-4 text-sm font-bold text-emerald-700">{fund.ret10}</td>
              <td className="px-4 py-4">
                <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${riskColor[fund.risk] || "text-slate-600 bg-slate-100"}`}>
                  {fund.risk}
                </span>
              </td>
              <td className="px-4 py-4 text-sm font-medium text-slate-700">{fund.minSIP}</td>
              <td className="px-4 py-4 text-sm text-slate-500">{fund.aum}</td>
              <td className="px-4 py-4">
                <button className="text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap">
                  Invest Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ComparePage() {
  const [activeTab, setActiveTab] = useState("loans");

  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Page header */}
      <div className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold bg-brand-950/50 border border-brand-900 px-3 py-1.5 rounded-full mb-5">
              <BarChart3 className="w-3.5 h-3.5" />
              5,000+ Products Compared
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Compare Financial
              <br />
              <span className="text-brand-400">Products Side by Side</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Real rates, actual premiums, verified returns — no sponsored rankings, no hidden fees. 100% transparent comparisons across India&apos;s top institutions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Disclaimer */}
        <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-100 rounded-xl p-4 mb-8 text-sm text-amber-800">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600" />
          <span>
            <strong>Important:</strong> Rates shown are indicative and subject to eligibility. Final rates are determined by the respective financial institution based on your credit profile.
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 bg-slate-100 rounded-2xl p-1.5 mb-8 w-fit">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.key
                    ? "bg-white text-brand-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Category tabs for loans */}
        {activeTab === "loans" && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Home Loan", "Personal Loan", "Car Loan", "Education Loan", "Business Loan"].map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border cursor-pointer transition-all duration-150 ${
                    cat === "Home Loan"
                      ? "bg-brand-700 text-white border-brand-700"
                      : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900">Home Loan Comparison — June 2025</h2>
              <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-slow" />
                Live Data
              </div>
            </div>
            <LoanTable />
          </div>
        )}

        {activeTab === "insurance" && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Health Insurance", "Term Life", "Motor Insurance", "Travel Insurance"].map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border cursor-pointer transition-all duration-150 ${
                    cat === "Health Insurance"
                      ? "bg-brand-700 text-white border-brand-700"
                      : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900">Health Insurance — ₹5L Cover, Age 30, Non-Smoker</h2>
              <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-slow" />
                Live Quotes
              </div>
            </div>
            <InsuranceTable />
          </div>
        )}

        {activeTab === "investments" && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Mutual Funds", "Fixed Deposits", "Bonds & NCDs", "NPS"].map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border cursor-pointer transition-all duration-150 ${
                    cat === "Mutual Funds"
                      ? "bg-brand-700 text-white border-brand-700"
                      : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900">Top Mutual Funds — June 2025</h2>
              <p className="text-xs text-slate-400">Past performance is not indicative of future results</p>
            </div>
            <InvestmentTable />
          </div>
        )}

        {/* Advisor CTA */}
        <div className="mt-12 bg-slate-950 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Confused by the numbers?</h3>
            <p className="text-slate-400 max-w-md">
              A FinWise advisor can help you pick the right product based on your income, risk profile, and financial goals — at no extra cost.
            </p>
          </div>
          <Link href="/advisors" className="btn-primary whitespace-nowrap px-8 py-4">
            Talk to an Advisor <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
