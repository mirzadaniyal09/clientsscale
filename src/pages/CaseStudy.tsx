import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { featuredCaseStudies, blockchainCaseStudies } from '../data/content';

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const all = [...featuredCaseStudies, ...blockchainCaseStudies];
  const study = all.find((c) => c.href.endsWith(slug || '') || c.id === slug);

  if (!study) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Case study not found</h1>
        <Link to="/" className="mt-4 inline-flex items-center gap-2 text-sky-600">
          <ArrowLeft className="w-4 h-4" /> Back home
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
            {study.category}
          </span>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{study.title}</h1>
          <p className="mt-4 text-lg text-slate-300">{study.description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Impact Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {study.metrics.map((m) => (
              <div key={m.label} className="bg-slate-50 rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-sky-600">{m.value}</div>
                <div className="mt-1 text-sm text-slate-500">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-sky-50 border border-sky-100 text-center">
            <h3 className="text-xl font-bold text-slate-900">Ready to build something similar?</h3>
            <p className="mt-2 text-slate-600">
              Let’s discuss how we can deliver the same level of impact for your product.
            </p>
            <Link
              to="/contact-us"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600"
            >
              contact us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
