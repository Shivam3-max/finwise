"use client";

import { useState } from "react";
import { Search, Filter, Star, MapPin, Clock, CheckCircle2, SlidersHorizontal, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { advisors } from "@/lib/data";

const specializations = ["All", "Mutual Funds", "Home Loans", "Insurance", "Tax Planning", "Retirement", "Business Finance", "Investments"];
const languages = ["All", "Hindi", "English", "Tamil", "Telugu", "Kannada", "Gujarati", "Marathi"];
const sortOptions = ["Most Reviewed", "Highest Rated", "Lowest Fee", "Most Experience"];

export default function AdvisorsPage() {
  const [search, setSearch] = useState("");
  const [activeSpec, setActiveSpec] = useState("All");
  const [activeLang, setActiveLang] = useState("All");
  const [sortBy, setSortBy] = useState("Most Reviewed");
  const [feeFilter, setFeeFilter] = useState("All");

  const filtered = advisors.filter((a) => {
    const matchSearch = search === "" ||
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.specializations.some(s => s.toLowerCase().includes(search.toLowerCase())) ||
      a.location.toLowerCase().includes(search.toLowerCase());
    const matchSpec = activeSpec === "All" || a.specializations.includes(activeSpec);
    const matchLang = activeLang === "All" || a.languages.includes(activeLang);
    const matchFee = feeFilter === "All" ||
      (feeFilter === "Free" && a.consultationFee === 0) ||
      (feeFilter === "Paid" && a.consultationFee > 0);
    return matchSearch && matchSpec && matchLang && matchFee;
  });

  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Page header */}
      <div className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold bg-brand-950/50 border border-brand-900 px-3 py-1.5 rounded-full mb-5">
              <Users className="w-3.5 h-3.5" />
              2,400+ Verified Experts
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Find Your
              <br />
              <span className="text-brand-400">Financial Expert</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Browse verified SEBI-registered advisors, chartered accountants, and certified financial planners. Choose by specialization, language, or fee.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Search + filters bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card mb-8">
          {/* Search row */}
          <div className="flex gap-3 mb-5">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, specialization, or city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field w-48"
            >
              {sortOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>

          {/* Filter chips */}
          <div className="space-y-3">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Filter className="w-3 h-3" /> Specialization
              </p>
              <div className="flex flex-wrap gap-2">
                {specializations.map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveSpec(s)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                      activeSpec === s
                        ? "bg-brand-700 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Language</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => setActiveLang(l)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                        activeLang === l
                          ? "bg-brand-700 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Consultation Fee</p>
                <div className="flex gap-2">
                  {["All", "Free", "Paid"].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFeeFilter(f)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                        feeFilter === f
                          ? "bg-brand-700 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500 font-medium">
            Showing <span className="font-bold text-slate-900">{filtered.length}</span> advisors
          </p>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            All credentials verified
          </div>
        </div>

        {/* Advisor cards */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((advisor) => (
              <div
                key={advisor.id}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-brand-200 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Card top strip */}
                <div className={`bg-gradient-to-r ${advisor.color} h-2`} />

                <div className="p-6">
                  {/* Header row */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 bg-gradient-to-br ${advisor.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                      {advisor.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-bold text-slate-900 text-base leading-snug">{advisor.name}</h3>
                          <p className="text-xs text-slate-500 mt-0.5">{advisor.title}</p>
                        </div>
                        <span className="text-xs font-bold text-brand-700 bg-brand-50 border border-brand-100 px-2 py-1 rounded-lg whitespace-nowrap flex-shrink-0">
                          {advisor.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4 bg-slate-50 rounded-xl p-3">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-0.5">
                        <Star className="w-3 h-3 text-amber-400 fill-current" />
                        <span className="text-sm font-bold text-slate-900">{advisor.rating}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">{advisor.reviews} reviews</p>
                    </div>
                    <div className="text-center border-x border-slate-200">
                      <div className="text-sm font-bold text-slate-900">{advisor.experience}yr</div>
                      <p className="text-[10px] text-slate-400 mt-0.5">Experience</p>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-slate-900">{advisor.clients.toLocaleString("en-IN")}+</div>
                      <p className="text-[10px] text-slate-400 mt-0.5">Clients</p>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {advisor.specializations.map((spec) => (
                      <span key={spec} className="badge-blue">{spec}</span>
                    ))}
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {advisor.certifications.map((cert) => (
                      <span key={cert} className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">{cert}</span>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="space-y-1.5 mb-5 pb-5 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {advisor.location}
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Clock className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 font-medium">{advisor.availability}</span>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-5">
                    <span className="text-slate-400">Speaks:</span>
                    {advisor.languages.map((lang, i) => (
                      <span key={lang} className="font-medium text-slate-600">
                        {lang}{i < advisor.languages.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2">
                    <button className="flex-1 btn-primary text-sm py-2.5 justify-center">
                      Book Consultation
                    </button>
                    <Link
                      href={`/advisors/${advisor.id}`}
                      className="btn-secondary text-sm py-2.5 px-4"
                    >
                      Profile
                    </Link>
                  </div>
                  <p className="text-center text-xs text-slate-400 mt-2 font-medium">{advisor.feeLabel}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No advisors found</h3>
            <p className="text-slate-500 text-sm">Try adjusting your filters or search term.</p>
            <button
              onClick={() => { setSearch(""); setActiveSpec("All"); setActiveLang("All"); setFeeFilter("All"); }}
              className="btn-secondary text-sm mt-4"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* CTA bottom */}
        <div className="mt-16 bg-brand-50 border border-brand-100 rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Not sure which advisor to choose?</h3>
          <p className="text-slate-500 mb-6 max-w-lg mx-auto">
            Answer a few questions about your financial goals and we&apos;ll match you with the most suitable expert in under 2 minutes.
          </p>
          <button className="btn-primary px-8 py-4 text-base">
            Get Matched With an Advisor
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
