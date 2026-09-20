import { Link } from 'react-router-dom';
import { stats } from '../data/content';

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Businesses Trust SystemMap.AI
          </h2>
          <p className="mt-3 text-slate-400">
            Trusted by startups, enterprises, and innovators worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-sky-400">{s.value}</div>
              <div className="mt-2 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 text-white font-medium hover:bg-slate-800 transition-colors"
          >
            See How We Work
          </Link>
        </div>
      </div>
    </section>
  );
}
