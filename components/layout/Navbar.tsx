"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, TrendingUp, Shield, Calculator, BookOpen, Users, BarChart3, Phone } from "lucide-react";

const navLinks = [
  {
    label: "Advisors",
    href: "/advisors",
    mega: false,
  },
  {
    label: "Compare",
    href: "/compare",
    mega: true,
    items: [
      { label: "Home Loans", href: "/compare#home-loans", icon: "🏠" },
      { label: "Personal Loans", href: "/compare#personal-loans", icon: "👤" },
      { label: "Health Insurance", href: "/compare#health-insurance", icon: "❤️" },
      { label: "Mutual Funds", href: "/compare#mutual-funds", icon: "📈" },
      { label: "Fixed Deposits", href: "/compare#fixed-deposits", icon: "🔒" },
      { label: "Term Insurance", href: "/compare#term-insurance", icon: "🛡️" },
    ],
  },
  {
    label: "Calculators",
    href: "/calculators",
    mega: false,
  },
  {
    label: "Learn",
    href: "/learn",
    mega: false,
  },
  {
    label: "About",
    href: "/about",
    mega: false,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-700 to-brand-500 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-premium transition-shadow duration-200">
              <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900 leading-none tracking-tight">
                Fin<span className="text-brand-700">Wise</span>
              </span>
              <span className="text-[9px] text-slate-400 font-medium tracking-widest uppercase leading-none">
                Financial Platform
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.mega && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 hover:text-brand-700 rounded-lg hover:bg-brand-50 transition-all duration-150 cursor-pointer"
                >
                  {link.label}
                  {link.mega && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Mega dropdown */}
                {link.mega && activeDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-card-hover border border-slate-100 p-3 animate-fade-in">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-2 pb-2">
                      Compare Products
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {link.items?.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-2 px-2.5 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-all duration-150 cursor-pointer"
                        >
                          <span className="text-base">{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-slate-100 mt-2 pt-2">
                      <Link
                        href="/compare"
                        className="flex items-center gap-2 px-2.5 py-2 rounded-xl text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-all duration-150 cursor-pointer"
                      >
                        <BarChart3 className="w-4 h-4" />
                        View All Comparisons
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918069998888"
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-700 font-medium transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 80 6999 8888
            </a>
            <Link href="/login" className="text-sm font-semibold text-slate-700 hover:text-brand-700 px-3 py-2 rounded-lg hover:bg-slate-50 transition-all duration-150 cursor-pointer">
              Sign In
            </Link>
            <Link href="/advisors" className="btn-primary text-sm px-5 py-2.5">
              Find Advisor
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-card-hover animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-all duration-150 cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link href="/login" className="btn-secondary justify-center text-sm" onClick={() => setMobileOpen(false)}>
                Sign In
              </Link>
              <Link href="/advisors" className="btn-primary justify-center text-sm" onClick={() => setMobileOpen(false)}>
                Find an Advisor
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
