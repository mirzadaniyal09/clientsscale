
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

import { services } from '../data/services';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }

    return location.pathname.startsWith(href);
  };

  const closeMobileMenu = () => {
    setOpen(false);
    setServicesOpen(false);
    setCompanyOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 md:h-20">

          {/* =====================================================
                              LOGO
          ====================================================== */}
          <Link
            to="/"
            className="group shrink-0 flex items-center"
          >
            <div
              className="font-black tracking-[-0.09em] text-[#0a2d5d]"
              style={{ fontSize: 'clamp(2.2rem, 3vw, 3.5rem)', lineHeight: 0.8 }}
            >
              CS
            </div>
          </Link>

          {/* =====================================================
                        DESKTOP NAVIGATION
          ====================================================== */}
          <nav className="hidden md:flex items-center gap-1">

            {/* HOME */}
            <Link
              to="/"
              className={`
                px-4 py-2 rounded-lg text-sm font-medium
                transition-colors
                ${
                  isActive('/')
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                }
              `}
            >
              Home
            </Link>

            {/* =================================================
                            SERVICES DROPDOWN
            ================================================== */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`
                  flex items-center gap-1
                  px-4 py-2 rounded-lg
                  text-sm font-medium
                  transition-colors
                  ${
                    isActive('/services')
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                  }
                `}
              >
                Services

                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-80">
                  <div className="bg-white rounded-xl border border-slate-100 shadow-xl p-2">

                    <Link
                      to="/services"
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-3 rounded-lg mb-1 bg-sky-50 text-sky-700 font-semibold text-sm hover:bg-sky-100 transition-colors"
                    >
                      View All Services
                    </Link>

                    <div className="h-px bg-slate-100 my-2" />

                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 group transition-colors"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">
                            {service.title}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ABOUT */}
            <Link
              to="/about-us"
              className={`
                px-4 py-2 rounded-lg text-sm font-medium
                transition-colors
                ${
                  isActive('/about-us')
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                }
              `}
            >
              About Us
            </Link>

            {/* PORTFOLIO */}
            <Link
              to="/portfolio"
              className={`
                px-4 py-2 rounded-lg text-sm font-medium
                transition-colors
                ${
                  isActive('/portfolio')
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                }
              `}
            >
              Portfolio
            </Link>

            {/* =================================================
                            COMPANY DROPDOWN
            ================================================== */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCompanyOpen(!companyOpen)}
                className={`
                  flex items-center gap-1
                  px-4 py-2 rounded-lg
                  text-sm font-medium
                  transition-colors
                  ${
                    isActive('/our-clients') ||
                    isActive('/our-team') ||
                    isActive('/faqs') ||
                    isActive('/pricing') ||
                    isActive('/contact-us')
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                  }
                `}
              >
                Company

                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    companyOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {companyOpen && (
                <div className="absolute right-0 top-full pt-2 w-64">
                  <div className="bg-white rounded-xl border border-slate-100 shadow-xl p-2">

                    <Link
                      to="/our-clients"
                      onClick={() => setCompanyOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-slate-50 group transition-colors"
                    >
                      <div className="text-sm font-semibold text-slate-800 group-hover:text-sky-600">
                        Our Clients
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Companies we've worked with
                      </p>
                    </Link>

                    <Link
                      to="/our-team"
                      onClick={() => setCompanyOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-slate-50 group transition-colors"
                    >
                      <div className="text-sm font-semibold text-slate-800 group-hover:text-sky-600">
                        Our Team
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Meet our experts
                      </p>
                    </Link>

                    <Link
                      to="/faqs"
                      onClick={() => setCompanyOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-slate-50 group transition-colors"
                    >
                      <div className="text-sm font-semibold text-slate-800 group-hover:text-sky-600">
                        FAQs
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Frequently asked questions
                      </p>
                    </Link>

                    <Link
                      to="/pricing"
                      onClick={() => setCompanyOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-slate-50 group transition-colors"
                    >
                      <div className="text-sm font-semibold text-slate-800 group-hover:text-sky-600">
                        Pricing
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Explore our pricing plans
                      </p>
                    </Link>

                  </div>
                </div>
              )}
            </div>

            {/* CONTACT */}
            <Link
              to="/contact-us"
              className={`
                px-4 py-2 rounded-lg text-sm font-medium
                transition-colors
                ${
                  isActive('/contact-us')
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                }
              `}
            >
              Contact
            </Link>
          </nav>


          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* =============================================================
                          MOBILE NAVIGATION
      ============================================================= */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg">
          <div className="px-4 py-4 space-y-1">

            {/* HOME */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`
                block px-4 py-3 rounded-lg
                text-base font-medium
                ${
                  isActive('/')
                    ? 'bg-sky-50 text-sky-600'
                    : 'text-slate-700 hover:bg-slate-50'
                }
              `}
            >
              Home
            </Link>

            {/* SERVICES */}
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              <span>Services</span>

              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="ml-3 pl-3 border-l-2 border-sky-100">

                <Link
                  to="/services"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2.5 text-sm font-semibold text-sky-600"
                >
                  View All Services
                </Link>

                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:text-sky-600"
                    >
                      <Icon className="w-4 h-4" />
                      {service.title}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* ABOUT */}
            <Link
              to="/about-us"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              About Us
            </Link>

            {/* PORTFOLIO */}
            <Link
              to="/portfolio"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Portfolio
            </Link>

            {/* =================================================
                            MOBILE COMPANY DROPDOWN
            ================================================== */}
            <button
              type="button"
              onClick={() => setCompanyOpen(!companyOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              <span>Company</span>

              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  companyOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {companyOpen && (
              <div className="ml-3 pl-3 border-l-2 border-sky-100">

                <Link
                  to="/our-clients"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2.5 text-sm text-slate-600 hover:text-sky-600"
                >
                  Our Clients
                </Link>

                <Link
                  to="/our-team"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2.5 text-sm text-slate-600 hover:text-sky-600"
                >
                  Our Team
                </Link>

                <Link
                  to="/faqs"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2.5 text-sm text-slate-600 hover:text-sky-600"
                >
                  FAQs
                </Link>

                <Link
                  to="/pricing"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2.5 text-sm text-slate-600 hover:text-sky-600"
                >
                  Pricing
                </Link>

              </div>
            )}

            {/* CONTACT */}
            <Link
              to="/contact-us"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

