import { Link } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  Palette,
  Bot,
  Cloud,
  Code2,
  ArrowRight,
} from 'lucide-react';
import { services } from '../data/content';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Palette,
  Bot,
  Cloud,
  Code2,
};

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Our Full-Stack Digital Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            End-to-end engineering from idea to production — AI, blockchain, web, mobile, and cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="group relative p-6 rounded-2xl border border-slate-100 bg-white hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
