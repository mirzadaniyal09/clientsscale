import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { featuredCaseStudies, blockchainCaseStudies } from '../data/content';

function CaseCard({
  category,
  title,
  description,
  metrics,
  href,
}: {
  category: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  href: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-shadow">
      <div className="p-6 md:p-8 flex-1">
        <span className="text-xs font-semibold tracking-wider text-sky-600 uppercase">
          {category}
        </span>
        <h3 className="mt-2 text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-600 text-sm leading-relaxed">{description}</p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {metrics.map((m) => (
            <div key={m.label} className="bg-slate-50 rounded-lg px-3 py-2">
              <div className="text-lg font-bold text-slate-900">{m.value}</div>
              <div className="text-xs text-slate-500">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 md:px-8 pb-6">
        <Link
          to={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Featured Case Studies
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Real production systems delivering measurable business impact.
          </p>
        </div>

        {/* Featured growth stories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {featuredCaseStudies.map((cs) => (
            <CaseCard key={cs.id} {...cs} />
          ))}
        </div>

        {/* Blockchain / AI deep dives */}
        <h3 className="text-xl font-bold text-slate-900 mb-6">Blockchain, AI & Web3 Builds</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blockchainCaseStudies.map((cs) => (
            <CaseCard key={cs.id} {...cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
