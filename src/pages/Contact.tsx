import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SustainableSection from '../components/SustainableSection';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Contact SystemMapAi – Get in Touch with Our Team
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-3xl mx-auto">
            Whether you’re a startup or an enterprise, we’d love to hear about your project. Our
            London-based team works with clients worldwide.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <p className="text-slate-600 mb-8">
                Reach out to us through the form or directly via email, phone, or our London HQ. We
                also serve clients across Europe, the USA, and GCC.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-sky-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Email</div>
                    <a href="mailto:info@systemmapai.com" className="text-sky-600 hover:underline">
                      info@systemmapai.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-sky-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Phone</div>
                    <a href="tel:+447470801776" className="text-sky-600 hover:underline">
                      +44-7470 801776
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">London HQ</div>
                    <p className="text-slate-600">
                      27 Old Gloucester Street, London WC1N 3AX, United Kingdom
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-2xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Thank you!</h3>
                  <p className="mt-2 text-slate-600">
                    We’ll get back to you within 12 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Company (optional)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      How can we help?
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-colors"
                  >
                    Submit <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <SustainableSection />
    </>
  );
}
