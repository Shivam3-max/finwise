"use client";

import Link from "next/link";
import { Star, MapPin, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { advisors } from "@/lib/data";

export default function FeaturedAdvisors() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-label">
              <Users className="w-3.5 h-3.5" />
              Expert Advisors
            </div>
            <h2 className="section-title">
              Meet India&apos;s Most
              <br />
              Trusted Financial Experts
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-slate-500 text-sm max-w-xs">All advisors hold valid SEBI, IRDAI, or AMFI registrations.</p>
            <Link href="/advisors" className="btn-secondary text-sm px-5 py-2.5 whitespace-nowrap">
              Browse All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Advisor cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advisors.map((advisor) => (
            <div
              key={advisor.id}
              className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-brand-200 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${advisor.color} p-5 relative`}>
                <div className="flex items-start justify-between">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white font-bold text-xl border border-white/30">
                    {advisor.avatar}
                  </div>
                  {/* Badge */}
                  <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-sm border border-white/30 px-2.5 py-1 rounded-full">
                    {advisor.badge}
                  </span>
                </div>
                <div className="mt-3">
                  <h3 className="font-bold text-white text-lg leading-tight">{advisor.name}</h3>
                  <p className="text-white/80 text-xs mt-0.5">{advisor.title}</p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-slate-100">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-0.5 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-sm font-bold text-slate-900">{advisor.rating}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{advisor.reviews} reviews</p>
                  </div>
                  <div className="text-center border-x border-slate-100">
                    <div className="text-sm font-bold text-slate-900">{advisor.experience}yr</div>
                    <p className="text-xs text-slate-400 mt-0.5">Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-slate-900">{advisor.clients.toLocaleString("en-IN")}+</div>
                    <p className="text-xs text-slate-400 mt-0.5">Clients</p>
                  </div>
                </div>

                {/* Specializations */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {advisor.specializations.slice(0, 3).map((spec) => (
                    <span key={spec} className="badge-blue text-xs">{spec}</span>
                  ))}
                </div>

                {/* Details */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {advisor.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 font-medium">{advisor.availability}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                    {advisor.certifications.join(" • ")}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-2">
                  <Link
                    href={`/advisors/${advisor.id}`}
                    className="flex-1 btn-primary text-sm py-2.5 justify-center"
                  >
                    Book Consultation
                  </Link>
                  <Link
                    href={`/advisors/${advisor.id}`}
                    className="btn-secondary text-sm py-2.5 px-4"
                  >
                    Profile
                  </Link>
                </div>

                {/* Fee */}
                <p className="text-center text-xs text-slate-400 mt-2.5 font-medium">
                  {advisor.feeLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
