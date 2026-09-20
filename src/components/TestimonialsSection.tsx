import { testimonials } from '../data/content';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Testimonials
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Where our clients rate us 5 stars across Google, Clutch, and Yell.
          </p>
          <div className="mt-4 flex items-center justify-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="ml-2 text-slate-700 font-semibold">5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col"
            >
              <div className="flex gap-0.5 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed flex-1">“{t.quote}”</p>
              <p className="mt-4 font-semibold text-slate-900 text-sm">{t.author}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Client Satisfaction <span className="font-bold text-sky-600">100%</span>
          </p>
        </div>
      </div>
    </section>
  );
}
