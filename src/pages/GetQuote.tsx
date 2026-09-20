import { useState } from 'react';
import type { FormEvent } from 'react';
import { Send, ShieldCheck, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Web Development',
  'Mobile App Development',
  'AI / ML Solutions',
  'UI/UX Design',
  'Branding & Graphic Design',
  'Cloud & DevOps',
];

const BUDGET_OPTIONS = [
  'Under £10k',
  '£10k – £25k',
  '£25k – £50k',
  '£50k – £100k',
  '£100k+',
];

const TIMELINE_OPTIONS = [
  'Less than 1 month',
  '1 – 3 months',
  '3 – 6 months',
  'More than 6 months',
];

const CONTACT_METHOD_OPTIONS = ['Email', 'Phone'];

const HEARD_ABOUT_OPTIONS = ['Search / Social', 'Referral', 'Other'];

export default function GetQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubmitted(true);
  };

  return (
    <div className="ai-automation-page">
      <style>{`
        /* =====================================================
           FULL PAGE RESET
        ===================================================== */

        .ai-automation-page {
          width: 100%;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background: #ffffff;
          color: #111827;
          font-family: Inter, Arial, sans-serif;
          overflow-x: hidden;
        }

        .ai-automation-page *,
        .ai-automation-page *::before,
        .ai-automation-page *::after {
          box-sizing: border-box;
        }

        .ai-automation-page h1,
        .ai-automation-page h2,
        .ai-automation-page h3,
        .ai-automation-page p {
          margin: 0;
        }

        .ai-automation-page a {
          text-decoration: none;
          color: inherit;
        }

        .ai-automation-page ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        /* =====================================================
           CONTENT WIDTH
        ===================================================== */

        .ai-container {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .ai-hero {
          position: relative;
          isolation: isolate;
          width: 100%;
          min-height: 430px;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 92px 0 88px;
          background:
            radial-gradient(circle at 8% 20%, rgba(9, 169, 199, 0.10), transparent 30%),
            radial-gradient(circle at 92% 10%, rgba(9, 169, 199, 0.16), transparent 34%),
            linear-gradient(135deg, #ffffff 0%, #fbfdfe 48%, #eefbfd 100%);
          border-bottom: 1px solid #e4edf0;
          text-align: center;
        }

        .ai-hero::before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 520px;
          height: 520px;
          left: -260px;
          bottom: -340px;
          border: 1px solid rgba(9, 169, 199, 0.14);
          border-radius: 50%;
          box-shadow:
            0 0 0 70px rgba(9, 169, 199, 0.025),
            0 0 0 140px rgba(9, 169, 199, 0.018);
        }

        .ai-hero::after {
          content: "";
          position: absolute;
          z-index: -1;
          width: 420px;
          height: 420px;
          right: -230px;
          top: -300px;
          border: 1px solid rgba(9, 169, 199, 0.13);
          border-radius: 50%;
          box-shadow: 0 0 0 65px rgba(9, 169, 199, 0.025);
        }

        .ai-hero .ai-container {
          position: relative;
          z-index: 1;
        }

        .ai-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
          margin-bottom: 20px;
          padding: 8px 14px;
          border: 1px solid rgba(9, 169, 199, 0.18);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.72);
          box-shadow: 0 8px 28px rgba(12, 65, 80, 0.06);
          color: #078fa8;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .ai-eyebrow::before {
          content: "";
          width: 24px;
          height: 2px;
          border-radius: 999px;
          background: #09afd0;
        }

        .ai-hero h1 {
          max-width: 900px;
          margin: 0 auto;
          font-size: clamp(42px, 5.4vw, 68px);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 850;
          color: #07111f;
          text-wrap: balance;
          text-shadow: 0 2px 0 rgba(255, 255, 255, 0.8);
        }

        .ai-hero-description {
          display: block;
          width: min(760px, calc(100% - 32px));
          max-width: 760px;
          margin: 16px auto 0 !important;
          padding: 0;
          text-align: center !important;
          color: #5f7187;
          font-size: 17px;
          line-height: 1.7;
          text-wrap: balance;
        }

        .ai-hero::selection {
          background: rgba(9, 169, 199, 0.18);
        }

        /* =====================================================
           QUOTE FORM SECTION
        ===================================================== */

        .ai-quote-section {
          width: 100%;
          padding: 80px 0 110px;
          background: #ffffff;
        }

        .ai-quote-card {
          max-width: 860px;
          margin: 0 auto;

          padding: 44px;

          background: #f7fafc;

          border: 1px solid #e1e7ec;
          border-radius: 20px;

          box-shadow: 0 30px 80px rgba(10, 30, 50, 0.06);
        }

        .ai-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .ai-form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ai-form-group.full {
          grid-column: 1 / -1;
        }

        .ai-form-group label {
          color: #344054;
          font-size: 13px;
          font-weight: 700;
        }

        .ai-form-group .optional {
          color: #98a2b3;
          font-weight: 500;
        }

        .ai-form-group input[type='text'],
        .ai-form-group input[type='email'],
        .ai-form-group input[type='tel'],
        .ai-form-group input[type='url'],
        .ai-form-group textarea {
          width: 100%;

          padding: 13px 16px;

          background: white;

          border: 1px solid #d9e1e8;
          border-radius: 10px;

          color: #101828;
          font-size: 14px;
          font-family: inherit;

          transition: 0.2s ease;
        }

        .ai-form-group input:focus,
        .ai-form-group textarea:focus {
          outline: none;
          border-color: #09a9c7;
          box-shadow: 0 0 0 3px rgba(9, 169, 199, 0.15);
        }

        .ai-form-group textarea {
          resize: none;
        }

        .ai-form-section-title {
          margin: 8px 0 2px;
          color: #101828;
          font-size: 15px;
          font-weight: 800;
        }

        .ai-option-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .ai-option-pill {
          display: flex;
          align-items: center;
          gap: 10px;

          padding: 11px 14px;

          background: white;

          border: 1px solid #d9e1e8;
          border-radius: 10px;

          color: #344054;
          font-size: 13.5px;
          font-weight: 600;

          cursor: pointer;

          transition: 0.2s ease;
        }

        .ai-option-pill:hover {
          border-color: #09a9c7;
        }

        .ai-option-pill input {
          accent-color: #09a9c7;
          width: 15px;
          height: 15px;
        }

        .ai-quote-submit {
          width: 100%;
          min-height: 54px;

          margin-top: 10px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          border: none;
          border-radius: 10px;

          background: #09a9c7;
          color: white;

          font-size: 15px;
          font-weight: 700;

          cursor: pointer;
          transition: 0.2s ease;

          box-shadow: 0 8px 25px rgba(9, 169, 199, 0.22);
        }

        .ai-quote-submit:hover {
          background: #078da8;
          transform: translateY(-2px);
        }

        .ai-privacy-note {
          display: flex;
          align-items: flex-start;
          gap: 10px;

          margin-top: 22px;

          color: #667085;
          font-size: 12.5px;
          line-height: 1.6;
        }

        .ai-privacy-note svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #09a9c7;
        }

        .ai-contact-line {
          margin-top: 14px;
          text-align: center;
          color: #667085;
          font-size: 13.5px;
        }

        .ai-contact-line a {
          color: #078da8;
          font-weight: 700;
        }

        /* =====================================================
           SUCCESS STATE
        ===================================================== */

        .ai-quote-success {
          padding: 60px 20px;
          text-align: center;
        }

        .ai-quote-success-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 18px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #e7f8fb;
          color: #078fa8;

          font-size: 26px;
        }

        .ai-quote-success h3 {
          color: #101828;
          font-size: 22px;
          font-weight: 800;
        }

        .ai-quote-success p {
          margin-top: 10px;
          color: #667085;
          font-size: 15px;
          line-height: 1.7;
        }

        /* =====================================================
           TRUSTED BY / LOGO STRIP
        ===================================================== */

        .ai-trust-strip {
          width: 100%;
          padding: 70px 0;

          background: #f7fafc;
          border-top: 1px solid #edf0f2;
        }

        .ai-trust-heading {
          text-align: center;
          color: #667085;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 40px;
        }

        .ai-trust-logos {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
          align-items: center;
        }

        .ai-trust-logo {
          height: 44px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: white;

          border: 1px solid #e1e7ec;
          border-radius: 10px;

          color: #98a2b3;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* =====================================================
           PREMIUM FOOTER
        ===================================================== */

        .ai-footer {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 72px 0 28px;
          background:
            radial-gradient(circle at 8% 15%, rgba(0, 199, 224, 0.08), transparent 28%),
            radial-gradient(circle at 92% 10%, rgba(80, 60, 160, 0.12), transparent 30%),
            #090711;
          color: #f8fafc;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ai-footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(14, 198, 220, 0.75), transparent);
        }

        .ai-footer-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr 1fr;
          gap: 72px;
          padding-bottom: 58px;
        }

        .ai-footer-brand {
          max-width: 390px;
        }

        .ai-footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          color: #ffffff;
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .ai-footer-logo-mark {
          position: relative;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.25);
        }

        .ai-footer-logo-mark::before,
        .ai-footer-logo-mark::after {
          content: "";
          position: absolute;
          width: 24px;
          height: 10px;
          border-radius: 999px;
          background: #090711;
          transform: rotate(-8deg);
        }

        .ai-footer-logo-mark::before {
          top: 10px;
          left: 9px;
        }

        .ai-footer-logo-mark::after {
          bottom: 10px;
          right: 9px;
        }

        .ai-footer-tagline {
          margin-top: 20px !important;
          max-width: 390px;
          color: #a8a5b5;
          font-size: 15px;
          line-height: 1.8;
        }

        .ai-footer-heading {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 26px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .ai-footer-heading::after {
          content: "";
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.14);
        }

        .ai-footer-contact-list {
          display: grid;
          gap: 20px;
        }

        .ai-footer-contact {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          color: #d8d5df;
          font-size: 14px;
          line-height: 1.65;
        }

        .ai-footer-contact svg {
          flex: 0 0 auto;
          margin-top: 2px;
          color: #18c6dc;
        }

        .ai-footer-contact a {
          transition: color 0.2s ease;
        }

        .ai-footer-contact a:hover {
          color: #18c6dc;
        }

        .ai-footer-newsletter-copy {
          margin-bottom: 18px !important;
          color: #a8a5b5;
          font-size: 14px;
          line-height: 1.7;
        }

        .ai-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ai-newsletter-input-wrap {
          position: relative;
        }

        .ai-newsletter-input {
          width: 100%;
          height: 52px;
          padding: 0 16px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 9px;
          outline: none;
          background: #2d2347;
          color: #ffffff;
          font: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .ai-newsletter-input::placeholder {
          color: #aaa5b6;
        }

        .ai-newsletter-input:focus {
          border-color: #18c6dc;
          box-shadow: 0 0 0 3px rgba(24, 198, 220, 0.12);
        }

        .ai-newsletter-button {
          width: 100%;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid #18c6dc;
          border-radius: 8px;
          background: transparent;
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }

        .ai-newsletter-button:hover {
          background: #18c6dc;
          color: #071014;
          transform: translateY(-1px);
        }

        .ai-newsletter-success {
          min-height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 20px;
          border: 1px solid rgba(24, 198, 220, 0.35);
          border-radius: 10px;
          background: rgba(24, 198, 220, 0.06);
          color: #dffcff;
          font-size: 14px;
          text-align: center;
        }

        .ai-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding-top: 24px;
          border-top: 1px dashed rgba(255, 255, 255, 0.14);
          color: #777382;
          font-size: 12px;
        }

        .ai-footer-bottom-links {
          display: flex;
          gap: 22px;
        }

        .ai-footer-bottom-links a {
          transition: color 0.2s ease;
        }

        .ai-footer-bottom-links a:hover {
          color: #18c6dc;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 900px) {
          .ai-form-grid,
          .ai-option-grid {
            grid-template-columns: 1fr;
          }

          .ai-trust-logos {
            grid-template-columns: repeat(3, 1fr);
          }

          .ai-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px 36px;
          }

          .ai-footer-brand {
            grid-column: 1 / -1;
            max-width: 620px;
          }
        }

        @media (max-width: 700px) {
          .ai-container {
            width: calc(100% - 32px);
          }

          .ai-hero {
            min-height: 390px;
            padding: 70px 0 62px;
          }

          .ai-hero h1 {
            font-size: 40px;
            line-height: 1;
          }

          .ai-hero-description {
            max-width: 560px;
            font-size: 15.5px;
            line-height: 1.65;
          }

          .ai-quote-section {
            padding: 56px 0 70px;
          }

          .ai-quote-card {
            padding: 26px;
            border-radius: 16px;
          }

          .ai-trust-logos {
            grid-template-columns: repeat(2, 1fr);
          }

          .ai-footer {
            padding: 56px 0 22px;
          }

          .ai-footer-grid {
            grid-template-columns: 1fr;
            gap: 42px;
            padding-bottom: 42px;
          }

          .ai-footer-brand {
            grid-column: auto;
          }

          .ai-footer-logo {
            font-size: 24px;
          }

          .ai-footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 14px;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="ai-hero">
        <div className="ai-container">
          <div className="ai-eyebrow">Get Started</div>
          <h1>contact Us</h1>
          <p className="ai-hero-description">
            Ready to elevate your project? Get a free, no-obligation quote today. Fill out
            the form below and we'll respond promptly with a customized plan and pricing.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="ai-quote-section">
        <div className="ai-container">
          <div className="ai-quote-card">
            {submitted ? (
              <div className="ai-quote-success">
                <div className="ai-quote-success-icon">✓</div>
                <h3>Quote request received!</h3>
                <p>
                  Thanks for reaching out — our team will review your details and get back
                  to you within 12 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="ai-form-grid">
                  <div className="ai-form-group">
                    <label>First Name *</label>
                    <input type="text" required placeholder="Jane" />
                  </div>
                  <div className="ai-form-group">
                    <label>Last Name *</label>
                    <input type="text" required placeholder="Doe" />
                  </div>

                  <div className="ai-form-group">
                    <label>
                      Business Name <span className="optional">(Optional)</span>
                    </label>
                    <input type="text" placeholder="Acme Inc." />
                  </div>
                  <div className="ai-form-group">
                    <label>
                      Website URL <span className="optional">(Optional)</span>
                    </label>
                    <input type="url" placeholder="https://yourcompany.com" />
                  </div>

                  <div className="ai-form-group">
                    <label>Email Address *</label>
                    <input type="email" required placeholder="jane@company.com" />
                  </div>
                  <div className="ai-form-group">
                    <label>Phone Number *</label>
                    <input type="tel" required placeholder="+44 7000 000000" />
                  </div>

                  <div className="ai-form-group full">
                    <div className="ai-form-section-title">Services Required</div>
                    <div className="ai-option-grid">
                      {SERVICE_OPTIONS.map((service) => (
                        <label className="ai-option-pill" key={service}>
                          <input type="checkbox" name="services" value={service} />
                          {service}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="ai-form-group">
                    <div className="ai-form-section-title">Project Budget</div>
                    <div className="ai-option-grid" style={{ gridTemplateColumns: '1fr' }}>
                      {BUDGET_OPTIONS.map((budget) => (
                        <label className="ai-option-pill" key={budget}>
                          <input type="radio" name="budget" value={budget} />
                          {budget}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="ai-form-group">
                    <div className="ai-form-section-title">Project Timeline</div>
                    <div className="ai-option-grid" style={{ gridTemplateColumns: '1fr' }}>
                      {TIMELINE_OPTIONS.map((timeline) => (
                        <label className="ai-option-pill" key={timeline}>
                          <input type="radio" name="timeline" value={timeline} />
                          {timeline}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="ai-form-group">
                    <div className="ai-form-section-title">Preferred Contact Method</div>
                    <div className="ai-option-grid">
                      {CONTACT_METHOD_OPTIONS.map((method) => (
                        <label className="ai-option-pill" key={method}>
                          <input type="radio" name="contactMethod" value={method} />
                          {method}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="ai-form-group">
                    <div className="ai-form-section-title">How Did You Hear About Us?</div>
                    <div className="ai-option-grid">
                      {HEARD_ABOUT_OPTIONS.map((source) => (
                        <label className="ai-option-pill" key={source}>
                          <input type="radio" name="heardAbout" value={source} />
                          {source}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="ai-form-group full">
                    <label>Project Details *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your goals, timeline, and any requirements..."
                    />
                  </div>
                </div>

                <button type="submit" className="ai-quote-submit">
                  Submit Request <Send className="w-4 h-4" />
                </button>

                <div className="ai-privacy-note">
                  <ShieldCheck className="w-4 h-4" />
                  <span>
                    Your information is never sold or shared. It's used solely for the
                    purpose of contacting you about your project.
                  </span>
                </div>
              </form>
            )}
          </div>

          <p className="ai-contact-line">
            You can reach us directly with any questions at{' '}
            <a href="tel:+16265487517">(626) 548 7517</a>
          </p>
        </div>
      </section>

      {/* TRUSTED BY
      <section className="ai-trust-strip">
        <div className="ai-container">
          <div className="ai-trust-heading">We are trusted by thousands of clients</div>
          <div className="ai-trust-logos">
            <div className="ai-trust-logo">Client One</div>
            <div className="ai-trust-logo">Client Two</div>
            <div className="ai-trust-logo">Client Three</div>
            <div className="ai-trust-logo">Client Four</div>
            <div className="ai-trust-logo">Client Five</div>
            <div className="ai-trust-logo">Client Six</div>
          </div>
        </div>
      </section> */}


      {/* FOOTER */}
      <footer className="ai-footer">
        <div className="ai-container">
          <div className="ai-footer-grid">
            <div className="ai-footer-brand">
              <a href="/" className="ai-footer-logo" aria-label="SystemMapAI home">
                <span className="ai-footer-logo-mark" aria-hidden="true" />
                <span>SystemMapAI</span>
              </a>
              <p className="ai-footer-tagline">
                SystemMap AI — AI-Powered Digital Marketing, SEO, And Web Solutions For U.S. Businesses.
              </p>
            </div>

            <div>
              <h3 className="ai-footer-heading">Contact Info</h3>
              <div className="ai-footer-contact-list">
                <div className="ai-footer-contact">
                  <MapPin size={21} />
                  <span>1894 E William St STE 4<br />Carson City, NV 89701</span>
                </div>
                <div className="ai-footer-contact">
                  <Phone size={20} />
                  <a href="tel:+16265487517">(626) 548 7517</a>
                </div>
                <div className="ai-footer-contact">
                  <Mail size={20} />
                  <a href="mailto:info@systemmapai.com">info@systemmapai.com</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="ai-footer-heading">Newsletter</h3>
              {newsletterSubmitted ? (
                <div className="ai-newsletter-success">
                  <ShieldCheck size={20} />
                  <span>You're subscribed. Thanks for joining us!</span>
                </div>
              ) : (
                <>
                  <p className="ai-footer-newsletter-copy">
                    Sign up for our newsletter to get the latest updates, insights, and AI marketing tips.
                  </p>
                  <form className="ai-newsletter-form" onSubmit={handleNewsletterSubmit}>
                    <div className="ai-newsletter-input-wrap">
                      <input
                        className="ai-newsletter-input"
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        required
                        placeholder="Your email address..."
                        aria-label="Your email address"
                      />
                    </div>
                    <button type="submit" className="ai-newsletter-button">
                      SUBSCRIBE <ArrowRight size={16} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          <div className="ai-footer-bottom">
            <span>© {new Date().getFullYear()} SystemMapAI. All rights reserved.</span>
            <div className="ai-footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}