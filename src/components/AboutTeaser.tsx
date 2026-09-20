import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutTeaser() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Pioneering AI & Blockchain Innovation from London
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              As the demand for intelligent and decentralised technology accelerates,{' '}
              <strong>SystemMap.AI</strong> leads from the front — an AI and blockchain-forward
              engineering company. Committed to transforming the digital landscape, we combine deep
              expertise in artificial intelligence and distributed systems with full-stack software
              delivery, setting a new benchmark for innovation.
            </p>
            <Link
              to="/about-us"
              className="mt-8 inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700"
            >
              Let’s Build Something <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-5xl font-extrabold text-sky-600">200+</div>
                <div className="mt-2 text-slate-600 font-medium">Production systems shipped</div>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="font-bold text-slate-900">AI</div>
                    <div className="text-slate-500">Models & Agents</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="font-bold text-slate-900">Blockchain</div>
                    <div className="text-slate-500">L1 / Web3 / RWA</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="font-bold text-slate-900">Cloud</div>
                    <div className="text-slate-500">AWS · Azure · GCP</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="font-bold text-slate-900">Full-Stack</div>
                    <div className="text-slate-500">Web · Mobile · SaaS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
