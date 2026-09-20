import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Band */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Behind every great business is great technology.
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 mb-8">
            We partner with you to understand your goals, challenges, and vision then engineer AI,
            blockchain, and software solutions that are reliable, scalable, and built for real-world
            impact.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span
                className="font-black tracking-[-0.08em] text-[#0a2d5d]"
                style={{ fontSize: '2.1rem', lineHeight: 0.8 }}
              >
                CS
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              London-based AI, Blockchain & Software Engineering Partner. 200+ production systems
              shipped worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Discover SystemMap.AI</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-sky-400 transition-colors">
                  Contact
                </Link>
              </li>
           
            </ul>
          </div>

          {/* Core Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Core Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>AI & Machine Learning</li>
              <li>Blockchain & Web3</li>
              <li>Custom Software</li>
              <li>Mobile App Development</li>
              <li>Cloud & DevOps</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-sky-400 shrink-0" />
                <a href="mailto:info@systemmap.ai" className="hover:text-sky-400">
                  info@systemmap.ai
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-sky-400 shrink-0" />
                <a href="tel:+447470801776" className="hover:text-sky-400">
                  +44-7470 801776
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-sky-400 shrink-0" />
                <span>27 Old Gloucester Street, London WC1N 3AX, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SystemMap.AI. All rights reserved.</p>
          <p className="text-center md:text-right">
            Participant of the United Nations Global Compact · Responsible & Sustainable Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
