import Link from "next/link";
import { TrendingUp, Mail, Phone, MapPin, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const footerLinks = {
  platform: {
    title: "Platform",
    links: [
      { label: "Find an Advisor", href: "/advisors" },
      { label: "Compare Products", href: "/compare" },
      { label: "Financial Calculators", href: "/calculators" },
      { label: "Learning Center", href: "/learn" },
      { label: "Market Rates", href: "/#rates" },
    ],
  },
  products: {
    title: "Products",
    links: [
      { label: "Home Loans", href: "/compare#home-loans" },
      { label: "Personal Loans", href: "/compare#personal-loans" },
      { label: "Health Insurance", href: "/compare#health-insurance" },
      { label: "Mutual Funds", href: "/compare#mutual-funds" },
      { label: "Fixed Deposits", href: "/compare#fixed-deposits" },
      { label: "Term Insurance", href: "/compare#term-insurance" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Partner with Us", href: "/partners" },
      { label: "Corporate Services", href: "/corporate" },
      { label: "Press & Media", href: "/press" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Regulatory Info", href: "/compliance" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Newsletter bar */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Stay financially informed</h3>
              <p className="text-slate-400 text-sm">Weekly insights on rates, market trends, and expert tips.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
              />
              <button className="btn-primary text-sm px-5 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group cursor-pointer">
              <div className="w-9 h-9 bg-gradient-to-br from-brand-600 to-brand-400 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-xl font-bold text-white leading-none">
                  Fin<span className="text-brand-400">Wise</span>
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              India&apos;s most trusted financial decision platform. Advice first, products second. Every financial decision starts here.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:hello@finwise.in" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer group">
                <Mail className="w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors" />
                hello@finwise.in
              </a>
              <a href="tel:+918069998888" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer group">
                <Phone className="w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors" />
                +91 80 6999 8888
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <span>WeWork Galaxy, Residency Rd,<br />Bengaluru — 560 025</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-slate-800 hover:bg-brand-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-150 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center md:text-left">
              © 2025 FinWise Financial Technologies Pvt. Ltd. All rights reserved. CIN: U74999KA2025PTC000001
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                SEBI Registered: INA200012345
              </span>
              <span>IRDAI: CA0987</span>
              <span>AMFI: ARN-125678</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-4 leading-relaxed max-w-4xl">
            <strong className="text-slate-500">Disclaimer:</strong> Investments in mutual funds and securities are subject to market risks. Read all scheme-related documents carefully before investing. Past performance is not indicative of future results. Insurance is a subject matter of solicitation. FinWise is not a bank, NBFC, or insurance company. We are a financial advisory marketplace connecting users with SEBI/IRDAI registered professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
