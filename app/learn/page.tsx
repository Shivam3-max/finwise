"use client";

import { useState } from "react";
import { Search, BookOpen, Clock, TrendingUp, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { articles } from "@/lib/data";

const allCategories = ["All", "Home Loans", "Investments", "Insurance", "Tax Planning", "Credit", "Business Finance", "Retirement"];

const featuredTopics = [
  { label: "Home Loan Guide", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { label: "SIP Basics", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  { label: "Term Insurance", color: "bg-violet-50 text-violet-700 border-violet-100" },
  { label: "CIBIL Score", color: "bg-amber-50 text-amber-700 border-amber-100" },
  { label: "80C Deductions", color: "bg-rose-50 text-rose-700 border-rose-100" },
  { label: "NPS vs PPF", color: "bg-cyan-50 text-cyan-700 border-cyan-100" },
  { label: "Retirement Planning", color: "bg-orange-50 text-orange-700 border-orange-100" },
  { label: "Business Loans", color: "bg-indigo-50 text-indigo-700 border-indigo-100" },
];

const allArticles = [
  ...articles,
  {
    id: 7,
    title: "How to Build an Emergency Fund: The 6-Month Rule Explained",
    category: "Personal Finance",
    readTime: "5 min read",
    date: "Jun 3, 2025",
    excerpt: "An emergency fund is the foundation of financial stability. Here's exactly how much you need, where to keep it, and how to build it fast.",
    tag: "Guide",
    tagColor: "badge-green",
  },
  {
    id: 8,
    title: "Gold Loan vs Personal Loan: Which Is Better for Urgent Needs?",
    category: "Loans",
    readTime: "6 min read",
    date: "Jun 1, 2025",
    excerpt: "Gold loans offer lower interest and faster disbursal but require pledging your jewellery. Personal loans are unsecured but cost more. The trade-offs, explained.",
    tag: "Comparison",
    tagColor: "badge-blue",
  },
];

export default function LearnPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = allArticles.filter((a) => {
    const matchSearch = search === "" ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Header */}
      <div className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold bg-brand-950/50 border border-brand-900 px-3 py-1.5 rounded-full mb-5">
              <BookOpen className="w-3.5 h-3.5" />
              Learning Center
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Financial Knowledge
              <br />
              <span className="text-brand-400">That Empowers You</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Expert-written guides, product comparisons, market updates, and financial explainers — designed to help you make smarter decisions.
            </p>
          </div>
          {/* Search in hero */}
          <div className="mt-8 relative max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles, guides, topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 text-white placeholder:text-slate-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-400 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Featured topics */}
        <div className="flex flex-wrap gap-2 mb-10">
          {featuredTopics.map((t) => (
            <button
              key={t.label}
              onClick={() => setSearch(t.label)}
              className={`text-sm font-semibold border px-3 py-1.5 rounded-full hover:shadow-sm transition-all duration-150 cursor-pointer ${t.color}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-card sticky top-24">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Categories</p>
              <nav className="space-y-1">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer ${
                      activeCategory === cat
                        ? "bg-brand-50 text-brand-700 border border-brand-100"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {cat}
                    <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                  </button>
                ))}
              </nav>

              {/* Stats */}
              <div className="border-t border-slate-100 mt-5 pt-5 space-y-3">
                {[
                  { label: "Total Articles", val: "450+" },
                  { label: "Expert Authors", val: "38" },
                  { label: "Monthly Readers", val: "2.4L" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-xs text-slate-400">{label}</span>
                    <span className="text-xs font-bold text-slate-700">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Articles */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-500">
                Showing <strong className="text-slate-900">{filtered.length}</strong> articles
                {activeCategory !== "All" && ` in ${activeCategory}`}
              </p>
            </div>

            {filtered.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-5">
                {filtered.map((article, i) => (
                  <Link
                    key={article.id}
                    href={`/learn/${article.id}`}
                    className={`group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-brand-200 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${
                      i === 0 && activeCategory === "All" && search === "" ? "md:col-span-2" : ""
                    }`}
                  >
                    {/* Accent bar */}
                    <div className={`h-1 bg-gradient-to-r from-brand-600 to-brand-400 ${i === 0 && activeCategory === "All" && search === "" ? "" : ""}`} />
                    <div className="p-6">
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className={`badge ${article.tagColor}`}>{article.tag}</span>
                        <span className="badge-blue">{article.category}</span>
                        <div className="flex items-center gap-1 text-xs text-slate-400 ml-auto">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className={`font-bold text-slate-900 group-hover:text-brand-700 transition-colors leading-snug mb-3 ${
                        i === 0 && activeCategory === "All" && search === "" ? "text-xl" : "text-base"
                      }`}>
                        {article.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                        <span className="text-xs text-slate-400">{article.date}</span>
                        <span className="flex items-center gap-1 text-xs font-semibold text-brand-700 group-hover:gap-2 transition-all duration-150">
                          Read Article <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-slate-400" />
                </div>
                <p className="font-semibold text-slate-900 mb-2">No articles found</p>
                <p className="text-slate-500 text-sm">Try a different search term or category.</p>
                <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="btn-secondary text-sm mt-4">
                  Clear filters
                </button>
              </div>
            )}

            {/* Load more */}
            {filtered.length > 0 && (
              <div className="text-center mt-10">
                <button className="btn-secondary px-8 py-3 text-sm">
                  Load More Articles
                  <TrendingUp className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
