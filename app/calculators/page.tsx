"use client";

import { useState } from "react";
import { Calculator, TrendingUp, Home, User, Sun, ShieldCheck } from "lucide-react";

type CalcKey = "emi" | "sip" | "eligibility" | "retirement" | "tax";

const calculators: { key: CalcKey; label: string; icon: React.ComponentType<{className?: string}>; desc: string }[] = [
  { key: "emi", label: "EMI Calculator", icon: Home, desc: "Calculate monthly installments for any loan" },
  { key: "sip", label: "SIP Calculator", icon: TrendingUp, desc: "Project returns from systematic investments" },
  { key: "eligibility", label: "Loan Eligibility", icon: User, desc: "Check your maximum loan eligibility" },
  { key: "retirement", label: "Retirement Planner", icon: Sun, desc: "Plan your retirement corpus" },
  { key: "tax", label: "Tax Saving (80C)", icon: ShieldCheck, desc: "Maximize your tax deductions" },
];

function EMICalc() {
  const [p, setP] = useState(3000000);
  const [r, setR] = useState(8.5);
  const [t, setT] = useState(20);
  const mr = r / 12 / 100;
  const n = t * 12;
  const emi = mr > 0 ? (p * mr * Math.pow(1 + mr, n)) / (Math.pow(1 + mr, n) - 1) : p / n;
  const total = emi * n;
  const interest = total - p;
  const interestPct = ((interest / total) * 100).toFixed(0);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <Slider label="Loan Amount" value={p} setValue={setP} min={100000} max={10000000} step={100000} display={`₹${(p/100000).toFixed(1)}L`} minLabel="₹1L" maxLabel="₹1Cr" />
        <Slider label="Interest Rate (p.a.)" value={r} setValue={setR} min={6} max={24} step={0.1} display={`${r.toFixed(1)}%`} minLabel="6%" maxLabel="24%" />
        <Slider label="Loan Tenure" value={t} setValue={setT} min={1} max={30} step={1} display={`${t} years`} minLabel="1 yr" maxLabel="30 yrs" />
      </div>
      <div className="space-y-4">
        <ResultBox label="Monthly EMI" value={`₹${Math.round(emi).toLocaleString("en-IN")}`} color="brand" />
        <div className="grid grid-cols-2 gap-3">
          <SmallResult label="Principal" value={`₹${(p/100000).toFixed(1)}L`} />
          <SmallResult label="Total Interest" value={`₹${(interest/100000).toFixed(1)}L`} accent="orange" />
          <SmallResult label="Total Payment" value={`₹${(total/100000).toFixed(1)}L`} />
          <SmallResult label="Interest Ratio" value={`${interestPct}%`} accent="rose" />
        </div>
        {/* Visual bar */}
        <div className="rounded-xl overflow-hidden h-4 bg-slate-100 flex">
          <div className="bg-brand-600 h-full transition-all duration-300" style={{ width: `${100 - Number(interestPct)}%` }} />
          <div className="bg-orange-400 h-full transition-all duration-300" style={{ width: `${interestPct}%` }} />
        </div>
        <div className="flex gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-brand-600 rounded-sm" />Principal</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-orange-400 rounded-sm" />Interest</span>
        </div>
      </div>
    </div>
  );
}

function SIPCalc() {
  const [m, setM] = useState(10000);
  const [r, setR] = useState(12);
  const [y, setY] = useState(15);
  const months = y * 12;
  const mr = r / 12 / 100;
  const fv = mr > 0 ? m * ((Math.pow(1 + mr, months) - 1) / mr) * (1 + mr) : m * months;
  const invested = m * months;
  const gains = fv - invested;
  const gainPct = ((gains / fv) * 100).toFixed(0);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <Slider label="Monthly SIP" value={m} setValue={setM} min={500} max={100000} step={500} display={`₹${m.toLocaleString("en-IN")}`} minLabel="₹500" maxLabel="₹1L" />
        <Slider label="Expected Annual Return" value={r} setValue={setR} min={6} max={20} step={0.5} display={`${r}% p.a.`} minLabel="6%" maxLabel="20%" />
        <Slider label="Investment Period" value={y} setValue={setY} min={1} max={40} step={1} display={`${y} years`} minLabel="1 yr" maxLabel="40 yrs" />
      </div>
      <div className="space-y-4">
        <ResultBox label="Maturity Value" value={`₹${(fv/100000).toFixed(1)}L`} color="emerald" />
        <div className="grid grid-cols-2 gap-3">
          <SmallResult label="Amount Invested" value={`₹${(invested/100000).toFixed(1)}L`} />
          <SmallResult label="Wealth Gained" value={`₹${(gains/100000).toFixed(1)}L`} accent="emerald" />
          <SmallResult label="Est. Return" value={`${r}% CAGR`} />
          <SmallResult label="Gain Ratio" value={`${gainPct}%`} accent="emerald" />
        </div>
        <div className="rounded-xl overflow-hidden h-4 bg-slate-100 flex">
          <div className="bg-brand-600 h-full" style={{ width: `${100 - Number(gainPct)}%` }} />
          <div className="bg-emerald-500 h-full" style={{ width: `${gainPct}%` }} />
        </div>
        <div className="flex gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-brand-600 rounded-sm" />Invested</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-emerald-500 rounded-sm" />Gains</span>
        </div>
      </div>
    </div>
  );
}

function EligibilityCalc() {
  const [income, setIncome] = useState(120000);
  const [existing, setExisting] = useState(15000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const maxEmi = income * 0.5 - existing;
  const mr = rate / 12 / 100;
  const n = tenure * 12;
  const maxLoan = maxEmi > 0 && mr > 0
    ? maxEmi * ((Math.pow(1 + mr, n) - 1) / (mr * Math.pow(1 + mr, n)))
    : 0;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <Slider label="Monthly Net Income" value={income} setValue={setIncome} min={20000} max={500000} step={5000} display={`₹${(income/1000).toFixed(0)}K`} minLabel="₹20K" maxLabel="₹5L" />
        <Slider label="Existing EMIs" value={existing} setValue={setExisting} min={0} max={100000} step={1000} display={existing === 0 ? "None" : `₹${(existing/1000).toFixed(0)}K`} minLabel="₹0" maxLabel="₹1L" />
        <Slider label="Interest Rate" value={rate} setValue={setRate} min={6} max={18} step={0.1} display={`${rate.toFixed(1)}%`} minLabel="6%" maxLabel="18%" />
        <Slider label="Loan Tenure" value={tenure} setValue={setTenure} min={1} max={30} step={1} display={`${tenure} years`} minLabel="1 yr" maxLabel="30 yrs" />
      </div>
      <div className="space-y-4">
        <ResultBox label="Maximum Loan Eligibility" value={`₹${(maxLoan/100000).toFixed(1)}L`} color="brand" />
        <div className="grid grid-cols-2 gap-3">
          <SmallResult label="Eligible EMI" value={`₹${Math.round(maxEmi).toLocaleString("en-IN")}`} />
          <SmallResult label="Income Used" value={`${Math.round((maxEmi / income) * 100)}%`} />
          <SmallResult label="Net Income" value={`₹${income.toLocaleString("en-IN")}`} />
          <SmallResult label="Free Cash Flow" value={`₹${(income - existing - maxEmi).toLocaleString("en-IN")}`} />
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-amber-800">
          <strong>Rule of thumb:</strong> Most banks allow up to 50% of income for all EMIs combined, including existing obligations.
        </div>
      </div>
    </div>
  );
}

function RetirementCalc() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retireAge, setRetireAge] = useState(60);
  const [monthly, setMonthly] = useState(50000);
  const [inflation, setInflation] = useState(6);
  const [returnRate, setReturnRate] = useState(10);
  const years = retireAge - currentAge;
  const inflationFactor = Math.pow(1 + inflation / 100, years);
  const inflatedExpense = monthly * inflationFactor;
  const annualExpense = inflatedExpense * 12;
  const corpus = annualExpense * 25;
  const mr = returnRate / 12 / 100;
  const n = years * 12;
  const monthlyNeeded = mr > 0
    ? corpus / (((Math.pow(1 + mr, n) - 1) / mr) * (1 + mr))
    : corpus / n;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <Slider label="Current Age" value={currentAge} setValue={setCurrentAge} min={20} max={55} step={1} display={`${currentAge} yrs`} minLabel="20" maxLabel="55" />
        <Slider label="Retirement Age" value={retireAge} setValue={setRetireAge} min={currentAge + 5} max={70} step={1} display={`${retireAge} yrs`} minLabel={`${currentAge + 5}`} maxLabel="70" />
        <Slider label="Current Monthly Expenses" value={monthly} setValue={setMonthly} min={10000} max={500000} step={5000} display={`₹${(monthly/1000).toFixed(0)}K`} minLabel="₹10K" maxLabel="₹5L" />
        <Slider label="Expected Inflation" value={inflation} setValue={setInflation} min={3} max={10} step={0.5} display={`${inflation}%`} minLabel="3%" maxLabel="10%" />
        <Slider label="Expected Investment Return" value={returnRate} setValue={setReturnRate} min={6} max={15} step={0.5} display={`${returnRate}%`} minLabel="6%" maxLabel="15%" />
      </div>
      <div className="space-y-4">
        <ResultBox label="Retirement Corpus Needed" value={`₹${(corpus/10000000).toFixed(1)} Cr`} color="emerald" />
        <div className="grid grid-cols-2 gap-3">
          <SmallResult label="Years to Retire" value={`${years} years`} />
          <SmallResult label="Future Monthly Expense" value={`₹${(inflatedExpense/1000).toFixed(0)}K`} accent="orange" />
          <SmallResult label="Monthly SIP Needed" value={`₹${Math.round(monthlyNeeded).toLocaleString("en-IN")}`} accent="emerald" />
          <SmallResult label="Inflation Factor" value={`${inflationFactor.toFixed(1)}x`} />
        </div>
        <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 text-sm text-brand-800">
          <strong>25x Rule:</strong> You need 25× your annual retirement expenses as corpus (4% withdrawal rate, recommended by financial planners globally).
        </div>
      </div>
    </div>
  );
}

function TaxCalc() {
  const [income, setIncome] = useState(1200000);
  const [elss, setElss] = useState(150000);
  const [ppf, setPpf] = useState(0);
  const [nps, setNps] = useState(50000);
  const [healthIns, setHealthIns] = useState(25000);
  const totalDeduction = Math.min(elss + ppf, 150000) + Math.min(nps, 50000) + Math.min(healthIns, 25000);
  const taxableIncome = Math.max(income - totalDeduction - 50000, 0);
  const oldTax = calcOldTax(taxableIncome);
  const newTax = calcNewTax(income);
  const savings = newTax - oldTax;

  function calcOldTax(inc: number) {
    if (inc <= 250000) return 0;
    if (inc <= 500000) return (inc - 250000) * 0.05;
    if (inc <= 1000000) return 12500 + (inc - 500000) * 0.2;
    return 112500 + (inc - 1000000) * 0.3;
  }
  function calcNewTax(inc: number) {
    if (inc <= 300000) return 0;
    if (inc <= 600000) return (inc - 300000) * 0.05;
    if (inc <= 900000) return 15000 + (inc - 600000) * 0.1;
    if (inc <= 1200000) return 45000 + (inc - 900000) * 0.15;
    if (inc <= 1500000) return 90000 + (inc - 1200000) * 0.2;
    return 150000 + (inc - 1500000) * 0.3;
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-5">
        <Slider label="Annual Income" value={income} setValue={setIncome} min={300000} max={5000000} step={50000} display={`₹${(income/100000).toFixed(1)}L`} minLabel="₹3L" maxLabel="₹50L" />
        <Slider label="ELSS / Mutual Funds (80C)" value={elss} setValue={setElss} min={0} max={150000} step={5000} display={elss === 0 ? "₹0" : `₹${(elss/1000).toFixed(0)}K`} minLabel="₹0" maxLabel="₹1.5L" />
        <Slider label="PPF Contribution (80C)" value={ppf} setValue={setPpf} min={0} max={150000} step={5000} display={ppf === 0 ? "₹0" : `₹${(ppf/1000).toFixed(0)}K`} minLabel="₹0" maxLabel="₹1.5L" />
        <Slider label="NPS (80CCD 1B)" value={nps} setValue={setNps} min={0} max={50000} step={5000} display={nps === 0 ? "₹0" : `₹${(nps/1000).toFixed(0)}K`} minLabel="₹0" maxLabel="₹50K" />
        <Slider label="Health Insurance Premium (80D)" value={healthIns} setValue={setHealthIns} min={0} max={75000} step={5000} display={healthIns === 0 ? "₹0" : `₹${(healthIns/1000).toFixed(0)}K`} minLabel="₹0" maxLabel="₹75K" />
      </div>
      <div className="space-y-4">
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
          <p className="text-xs font-semibold text-emerald-600 mb-1">Tax Saved with Old Regime + Deductions</p>
          <p className="text-3xl font-bold text-emerald-800">₹{Math.round(Math.max(savings, 0)).toLocaleString("en-IN")}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <SmallResult label="Old Regime Tax" value={`₹${Math.round(oldTax).toLocaleString("en-IN")}`} accent="orange" />
          <SmallResult label="New Regime Tax" value={`₹${Math.round(newTax).toLocaleString("en-IN")}`} />
          <SmallResult label="Total Deductions" value={`₹${totalDeduction.toLocaleString("en-IN")}`} accent="emerald" />
          <SmallResult label="Taxable Income" value={`₹${(taxableIncome/100000).toFixed(1)}L`} />
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">Calculation based on FY 2025-26 tax slabs. Surcharge and cess not included. Consult a tax advisor for precise calculations.</p>
      </div>
    </div>
  );
}

function Slider({ label, value, setValue, min, max, step, display, minLabel, maxLabel }: {
  label: string; value: number; setValue: (v: number) => void;
  min: number; max: number; step: number; display: string; minLabel: string; maxLabel: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-slate-700">{label}</label>
        <span className="text-sm font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-lg">{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-brand-700" />
      <div className="flex justify-between text-xs text-slate-400 mt-1">
        <span>{minLabel}</span><span>{maxLabel}</span>
      </div>
    </div>
  );
}

function ResultBox({ label, value, color }: { label: string; value: string; color: string }) {
  const colors: Record<string, string> = {
    brand: "bg-brand-50 border-brand-100",
    emerald: "bg-emerald-50 border-emerald-100",
  };
  const textColors: Record<string, string> = {
    brand: "text-xs text-brand-600 font-medium",
    emerald: "text-xs text-emerald-600 font-medium",
  };
  const valColors: Record<string, string> = {
    brand: "text-3xl font-bold text-brand-800",
    emerald: "text-3xl font-bold text-emerald-800",
  };

  return (
    <div className={`border rounded-xl p-5 ${colors[color]}`}>
      <p className={textColors[color]}>{label}</p>
      <p className={valColors[color]}>{value}</p>
    </div>
  );
}

function SmallResult({ label, value, accent }: { label: string; value: string; accent?: string }) {
  const colors: Record<string, string> = {
    orange: "text-orange-700",
    emerald: "text-emerald-700",
    rose: "text-rose-700",
  };
  return (
    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
      <p className="text-xs text-slate-400 font-medium mb-0.5">{label}</p>
      <p className={`text-sm font-bold ${accent ? colors[accent] : "text-slate-900"}`}>{value}</p>
    </div>
  );
}

export default function CalculatorsPage() {
  const [active, setActive] = useState<CalcKey>("emi");
  const current = calculators.find((c) => c.key === active)!;

  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Header */}
      <div className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold bg-brand-950/50 border border-brand-900 px-3 py-1.5 rounded-full mb-5">
              <Calculator className="w-3.5 h-3.5" />
              Financial Calculators
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Know Your Numbers
              <br />
              <span className="text-brand-400">Before You Decide</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Free, precise financial calculators built for the Indian market — EMI, SIP, retirement, tax savings, and loan eligibility.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-100 rounded-2xl p-3 shadow-card sticky top-24">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-3 pb-3">Select Calculator</p>
              <nav className="space-y-1">
                {calculators.map((calc) => {
                  const Icon = calc.icon;
                  return (
                    <button
                      key={calc.key}
                      onClick={() => setActive(calc.key)}
                      className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                        active === calc.key
                          ? "bg-brand-50 border border-brand-100 text-brand-700"
                          : "hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${active === calc.key ? "text-brand-600" : "text-slate-400"}`} />
                      <div>
                        <p className={`text-sm font-semibold leading-none mb-1 ${active === calc.key ? "text-brand-700" : ""}`}>
                          {calc.label}
                        </p>
                        <p className="text-xs text-slate-400">{calc.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Calculator area */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-100 rounded-2xl shadow-card p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900">{current.label}</h2>
                <p className="text-slate-500 text-sm mt-1">{current.desc}</p>
              </div>
              {active === "emi" && <EMICalc />}
              {active === "sip" && <SIPCalc />}
              {active === "eligibility" && <EligibilityCalc />}
              {active === "retirement" && <RetirementCalc />}
              {active === "tax" && <TaxCalc />}
            </div>

            <div className="mt-6 bg-brand-50 border border-brand-100 rounded-2xl p-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-900">Want personalized guidance on these numbers?</p>
                <p className="text-sm text-slate-500 mt-0.5">A certified financial advisor can help you act on these calculations.</p>
              </div>
              <a href="/advisors" className="btn-primary text-sm px-6 py-3 whitespace-nowrap">
                Talk to an Advisor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
