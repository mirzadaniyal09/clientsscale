import { industries } from '../data/content';

export default function IndustriesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Proven Expertise Across 16+ Industries
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We don’t just build websites, we understand your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="p-5 rounded-xl border border-slate-100 hover:border-sky-200 hover:bg-sky-50/50 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">{ind.name}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{ind.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
