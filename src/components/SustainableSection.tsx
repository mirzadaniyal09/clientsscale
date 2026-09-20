import { Leaf } from 'lucide-react';

export default function SustainableSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-sky-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mb-6">
          <Leaf className="w-7 h-7" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Responsible & Sustainable Technology
        </h2>
        <p className="mt-5 text-lg text-slate-600 leading-relaxed">
          SystemMap.AI is committed to building ethical, sustainable, and responsible digital solutions.
          As a participant of the United Nations Global Compact, we align our work with global
          principles covering human rights, labour, environmental responsibility, and anti-corruption
          — ensuring long-term value for our clients and communities.
        </p>
      </div>
    </section>
  );
}
