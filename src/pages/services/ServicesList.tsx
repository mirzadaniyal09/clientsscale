import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { ArrowRight } from 'lucide-react';

export default function ServicesList() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-16 md:py-24">
            {/* Background decoration - matching Hero */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sky-100/40 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section - matching Hero typography */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-medium mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                        What We Offer
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                        Our{' '}
                        <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                            Services
                        </span>
                    </h2>

                    <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        From product strategy to cloud operations, we help businesses
                        build better tools and experiences that drive real impact.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="group relative bg-white rounded-2xl border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            >
                                {/* Top gradient bar - matching Hero gradient */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="p-6 md:p-8">
                                    {/* Icon with gradient background - matching Hero badge */}
                                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100/50 group-hover:from-sky-100 group-hover:to-blue-100 transition-all duration-300 mb-5">
                                        <Icon className="w-6 h-6 text-sky-600 group-hover:text-sky-700 transition-colors" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        {service.summary}
                                    </p>

                                    {/* Learn more link - matching Hero button style */}
                                    <div className="flex items-center gap-1.5 text-sm font-semibold text-sky-600 group-hover:text-sky-700 transition-colors">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>

                                {/* Decorative corner gradient - subtle matching Hero */}
                                <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-br from-sky-100/20 to-blue-100/20 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                            </Link>
                        );
                    })}
                </div>

                {/* Bottom CTA - matching Hero CTA section */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-medium mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Ready to Build?
                    </div>

                    <p className="text-lg text-slate-600 mb-6">
                        Need a custom solution? Let's discuss your project.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact-us"
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-500 text-white font-semibold text-base hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30"
                        >
                            Contact Us
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-200 text-slate-700 font-semibold text-base hover:bg-slate-50 transition-colors"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}