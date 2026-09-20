import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Palette, Bot, Cloud, Code2 } from 'lucide-react';
import { services } from '../data/content';
import TestimonialsSection from '../components/TestimonialsSection';
import SustainableSection from '../components/SustainableSection';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Palette,
  Bot,
  Cloud,
  Code2,
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Services: Web, Mobile, and Software Development Solutions
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-3xl mx-auto">
            We provide web development, mobile app development, and custom software solutions built
            for scalability, higher engagement, and measurable business growth.
          </p>
          <p className="mt-4 text-sm text-sky-400 font-medium">
            Rated 5.0 ★★★★★ on Clutch, Yell & Google
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <div
                  key={service.id}
                  className="p-8 rounded-2xl border border-slate-100 hover:border-sky-200 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700"
                  >
                    Discuss this service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SustainableSection />
      <TestimonialsSection />

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Build Smarter, Faster, and Stronger with SystemMapAi Services
          </h2>
          <p className="mt-4 text-slate-600">
            As London’s tech scene advances, SystemMapAi stands out delivering innovative and scalable
            solutions.
          </p>
          <Link
            to="/contact-us"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600"
          >
            Start My Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
