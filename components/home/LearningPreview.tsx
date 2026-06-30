import Link from "next/link";
import { BookOpen, ArrowRight, Clock, ChevronRight } from "lucide-react";
import { articles } from "@/lib/data";

export default function LearningPreview() {
  const featured = articles[0];
  const rest = articles.slice(1, 5);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-label">
              <BookOpen className="w-3.5 h-3.5" />
              Learning Center
            </div>
            <h2 className="section-title">
              Financial Knowledge
              <br />
              That Empowers Decisions
            </h2>
          </div>
          <Link href="/learn" className="btn-secondary text-sm px-5 py-2.5 self-start md:self-auto">
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured article */}
          <div className="lg:col-span-3 group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
            {/* Placeholder image area */}
            <div className="bg-gradient-to-br from-brand-700 to-brand-900 h-52 flex items-end p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-40 h-40 bg-white rounded-full" />
                <div className="absolute bottom-0 left-8 w-24 h-24 bg-white rounded-full" />
              </div>
              <span className={`badge badge-blue ${featured.tagColor} relative z-10`}>{featured.tag}</span>
            </div>
            <div className="p-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="badge-blue">{featured.category}</span>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" />
                  {featured.readTime}
                </div>
                <span className="text-xs text-slate-400">{featured.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors leading-snug mb-3">
                {featured.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{featured.excerpt}</p>
              <Link href="/learn" className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-brand-700 hover:text-brand-900 cursor-pointer transition-colors">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Rest of articles */}
          <div className="lg:col-span-2 space-y-3">
            {rest.map((article) => (
              <Link
                key={article.id}
                href="/learn"
                className="group flex gap-4 bg-white rounded-2xl border border-slate-100 p-4 hover:border-brand-200 hover:shadow-card transition-all duration-200 cursor-pointer"
              >
                {/* Color accent */}
                <div className="w-1 flex-shrink-0 bg-brand-200 rounded-full group-hover:bg-brand-600 transition-colors duration-200" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`badge ${article.tagColor}`}>{article.tag}</span>
                    <span className="text-xs text-slate-400">{article.readTime}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-800 group-hover:text-brand-700 transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">{article.category} · {article.date}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 flex-shrink-0 self-center transition-colors duration-200" />
              </Link>
            ))}

            {/* CTA card */}
            <Link
              href="/learn"
              className="flex items-center justify-center gap-2 bg-brand-50 border border-brand-100 rounded-2xl p-4 hover:bg-brand-100 transition-all duration-200 cursor-pointer text-sm font-semibold text-brand-700"
            >
              Explore All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
