import { Link } from 'react-router-dom';

export default function Pricing() {
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
        .ai-automation-page h4,
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
           BACK LINK
        ===================================================== */

        .ai-back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 24px 0 0;

          color: #0369a1;
          font-weight: 700;
          font-size: 14px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .ai-hero {
          width: 100%;
          min-height: calc(100vh - 80px);

          display: flex;
          align-items: flex-start;

          padding-top: 0 !important;

          background:
            radial-gradient(
              circle at 80% 45%,
              rgba(0, 184, 214, 0.12),
              transparent 35%
            ),
            linear-gradient(
              180deg,
              #ffffff 0%,
              #f8fcfd 100%
            );

          border-bottom: 1px solid #e5e7eb;
        }

        .ai-hero-inner {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;

          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: start;

          gap: 40px;
          padding: 48px 0 !important;
        }

        .ai-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;

          margin-bottom: 24px;

          color: #079bb5;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ai-eyebrow::before {
          content: "";
          width: 34px;
          height: 2px;
          background: #09afd0;
        }

        .ai-hero h1 {
          max-width: 700px;

          font-size: clamp(
            40px,
            5vw,
            64px
          );

          line-height: 1.02;
          letter-spacing: -0.045em;
          font-weight: 800;

          color: #08111f;
        }

        .ai-hero h1 span {
          display: block;
          color: #08a3be;
        }

        .ai-hero-description {
          max-width: 600px;
          margin-top: 28px;

          color: #667085;
          font-size: 18px;
          line-height: 1.75;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .ai-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;

          margin-top: 36px;
        }

        .ai-btn {
          min-height: 52px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 0 26px;

          border-radius: 8px;

          font-size: 14px;
          font-weight: 700;

          transition: 0.2s ease;
        }

        .ai-btn-primary {
          background: #09a9c7;
          color: white;
          box-shadow:
            0 8px 25px rgba(9, 169, 199, 0.22);
        }

        .ai-btn-primary:hover {
          background: #078da8;
          transform: translateY(-2px);
        }

        .ai-btn-secondary {
          background: white;
          color: #111827;
          border: 1px solid #d9e1e8;
        }

        .ai-btn-secondary:hover {
          border-color: #09a9c7;
          color: #078da8;
          transform: translateY(-2px);
        }

        /* =====================================================
           SYSTEM DIAGRAM
        ===================================================== */

        .ai-diagram {
          width: 100%;
          min-height: 460px;

          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;

          background: white;

          border: 1px solid #dfe6ec;
          border-radius: 22px;

          box-shadow:
            0 30px 80px rgba(10, 30, 50, 0.08);

          overflow: hidden;
        }

        .ai-diagram::before {
          content: "";

          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              #edf1f4 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              #edf1f4 1px,
              transparent 1px
            );

          background-size: 48px 48px;
        }

        .ai-diagram svg {
          position: relative;
          z-index: 2;

          width: 90%;
          height: auto;
        }

        .ai-node-line {
          stroke-dasharray: 7 9;
          animation: ai-line 4s linear infinite;
        }

        @keyframes ai-line {
          to {
            stroke-dashoffset: -160;
          }
        }

        /* =====================================================
           GENERAL SECTIONS
        ===================================================== */

        .ai-section {
          width: 100%;
          padding: 110px 0;
        }

        .ai-section-light {
          background: #ffffff;
        }

        .ai-section-gray {
          background: #f7fafc;
          border-top: 1px solid #edf0f2;
          border-bottom: 1px solid #edf0f2;
        }

        .ai-heading {
          max-width: 720px;
          margin-bottom: 55px;
        }

        .ai-eyebrow-label {
          display: block;
          margin-bottom: 14px;

          color: #079bb5;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ai-heading h2 {
          color: #08111f;

          font-size: clamp(
            34px,
            4vw,
            50px
          );

          line-height: 1.08;
          letter-spacing: -0.04em;
          font-weight: 800;
        }

        .ai-heading p {
          margin-top: 18px;

          color: #667085;
          font-size: 16px;
          line-height: 1.75;
        }

        /* =====================================================
           SERVICES
        ===================================================== */

        .ai-services {
          display: grid;
          grid-template-columns: repeat(4, 1fr);

          border: 1px solid #e1e7ec;
          border-radius: 16px;
          overflow: hidden;

          background: #e1e7ec;
          gap: 1px;
        }

        .ai-service-card {
          min-height: 250px;

          padding: 32px;

          background: white;

          transition: 0.25s ease;
        }

        .ai-service-card:hover {
          transform: translateY(-5px);
          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.07);
        }

        .ai-service-number {
          display: block;

          margin-bottom: 48px;

          color: #079db7;

          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .ai-service-card h3 {
          margin-bottom: 14px;

          color: #101828;

          font-size: 20px;
          line-height: 1.3;
        }

        .ai-service-card p {
          color: #667085;

          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           BENEFITS
        ===================================================== */

        .ai-benefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .ai-benefit {
          padding: 34px;

          background: white;

          border: 1px solid #e1e7ec;
          border-radius: 14px;
        }

        .ai-benefit-letter {
          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 28px;

          border-radius: 50%;

          background: #e7f8fb;
          color: #078fa8;

          font-size: 13px;
          font-weight: 800;
        }

        .ai-benefit h3 {
          margin-bottom: 12px;

          color: #101828;
          font-size: 19px;
        }

        .ai-benefit p {
          color: #667085;
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           STATS
        ===================================================== */

        .ai-stats {
          width: 100%;
          padding: 0;

          background: #071827;
        }

        .ai-stats-inner {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;

          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .ai-stat {
          padding: 55px 20px;

          text-align: center;

          border-right:
            1px solid rgba(255,255,255,0.1);
        }

        .ai-stat:last-child {
          border-right: none;
        }

        .ai-stat-number {
          color: #ffffff;

          font-size: 46px;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .ai-stat-label {
          margin-top: 8px;

          color: #aebdca;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* =====================================================
           PRICING
        ===================================================== */

        .ai-pricing {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .ai-price-card {
          position: relative;

          display: flex;
          flex-direction: column;

          padding: 38px 32px;

          background: white;

          border: 1px solid #e0e6eb;
          border-radius: 14px;

          box-shadow:
            0 8px 25px rgba(0,0,0,0.035);
        }

        .ai-price-card.featured {
          border:
            2px solid #09a9c7;

          box-shadow:
            0 20px 50px rgba(9,169,199,0.12);
        }

        .ai-popular {
          position: absolute;

          top: 17px;
          right: 17px;

          padding: 6px 12px;

          border-radius: 20px;

          background: #e6f8fb;
          color: #078da8;

          font-size: 10px;
          font-weight: 800;

          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .ai-price-tier {
          color: #667085;

          font-size: 12px;
          font-weight: 800;

          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .ai-price-card h3 {
          margin-top: 8px;

          color: #101828;
          font-size: 24px;
        }

        .ai-price {
          margin-top: 24px;

          color: #08111f;

          font-size: 42px;
          line-height: 1;

          font-weight: 800;
        }

        .ai-price span {
          color: #667085;
          font-size: 13px;
          font-weight: 500;
        }

        .ai-price-list {
          flex: 1;
          margin: 28px 0;
        }

        .ai-price-list li {
          position: relative;

          padding:
            12px 0
            12px 23px;

          border-top:
            1px solid #edf0f2;

          color: #667085;

          font-size: 14px;
        }

        .ai-price-list li::before {
          content: "✓";

          position: absolute;
          left: 0;

          color: #09a9c7;
          font-weight: 800;
        }

        .ai-price-note {
          margin-top: 12px;

          text-align: center;

          color: #98a2b3;

          font-size: 12px;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .ai-faq {
          max-width: 900px;
        }

        .ai-faq-item {
          border-bottom:
            1px solid #dfe5ea;
        }

        .ai-faq-item summary {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 30px;

          padding: 24px 0;

          cursor: pointer;

          list-style: none;

          color: #101828;

          font-size: 16px;
          font-weight: 700;
        }

        .ai-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .ai-faq-item summary::after {
          content: "+";

          color: #08a3be;

          font-size: 24px;
          font-weight: 400;
        }

        .ai-faq-item[open]
          summary::after {
          content: "−";
        }

        .ai-faq-item p {
          max-width: 750px;

          padding-bottom: 24px;

          color: #667085;

          font-size: 14px;
          line-height: 1.8;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .ai-cta {
          width: 100%;

          padding: 120px 0;

          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(8,180,210,0.18),
              transparent 45%
            ),
            #071827;

          text-align: center;
        }

        .ai-cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .ai-cta h2 {
          color: white;

          font-size: clamp(
            36px,
            4.5vw,
            56px
          );

          line-height: 1.08;
          letter-spacing: -0.04em;
          font-weight: 800;
        }

        .ai-cta p {
          max-width: 620px;

          margin: 20px auto 34px;

          color: #aebdca;

          font-size: 16px;
          line-height: 1.75;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1050px) {

          .ai-hero-inner {
            grid-template-columns: 1fr;
          }

          .ai-diagram {
            max-width: 800px;
          }

          .ai-services {
            grid-template-columns: repeat(2, 1fr);
          }

          .ai-benefits {
            grid-template-columns: 1fr;
          }

          .ai-pricing {
            grid-template-columns: 1fr;
            max-width: 700px;
          }
        }

        @media (max-width: 700px) {

          .ai-container,
          .ai-hero-inner,
          .ai-stats-inner {
            width: calc(100% - 32px);
          }

          .ai-hero-inner {
            padding: 24px 0;
          }

          .ai-hero h1 {
            font-size: 40px;
          }

          .ai-section {
            padding: 75px 0;
          }

          .ai-services {
            grid-template-columns: 1fr;
          }

          .ai-stats-inner {
            grid-template-columns: 1fr 1fr;
          }

          .ai-stat {
            border-bottom:
              1px solid rgba(255,255,255,0.1);
          }

          .ai-stat:nth-child(2) {
            border-right: none;
          }

          .ai-stat-number {
            font-size: 36px;
          }

          .ai-buttons {
            flex-direction: column;
          }

          .ai-btn {
            width: 100%;
          }

          .ai-diagram {
            min-height: 320px;
          }
        }
      

        /* =====================================================
           CENTERED HERO (used on content-only pages)
        ===================================================== */

        .ai-hero-centered {
          min-height: auto;
          padding: 110px 0 90px !important;
        }

        .ai-hero-centered .ai-hero-inner {
          display: block;
          padding: 0 !important;
        }

        .ai-hero-centered .ai-eyebrow {
          justify-content: center;
        }

        .ai-hero-centered .ai-eyebrow::before {
          display: none;
        }

        .ai-hero-centered h1 {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }

        .ai-hero-centered .ai-hero-description {
          max-width: 640px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .ai-hero-centered .ai-buttons {
          justify-content: center;
        }

        /* =====================================================
           SECTION LABEL PILL
        ===================================================== */

        .ai-faq-category {
          display: inline-block;
          margin-bottom: 14px;

          padding: 6px 14px;

          border-radius: 20px;

          background: #e6f8fb;
          color: #078da8;

          font-size: 12px;
          font-weight: 800;

          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* =====================================================
           CHECKMARK LIST
        ===================================================== */

        .ai-mission-list {
          max-width: 720px;
          margin: 0 0 55px;
        }

        .ai-mission-list.centered {
          margin: 0 auto 55px;
        }

        .ai-mission-list li {
          position: relative;

          padding: 10px 0 10px 26px;

          color: #475569;
          font-size: 15px;
          line-height: 1.7;
        }

        .ai-mission-list li::before {
          content: "✓";

          position: absolute;
          left: 0;

          color: #09a9c7;
          font-weight: 800;
        }

        /* =====================================================
           TEAM GRID
        ===================================================== */

        .ai-team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .ai-team-card {
          padding: 30px 24px;

          text-align: center;

          background: white;

          border: 1px solid #e1e7ec;
          border-radius: 14px;

          transition: 0.25s ease;
        }

        .ai-team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.07);
        }

        .ai-team-avatar {
          width: 72px;
          height: 72px;

          margin: 0 auto 18px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #e7f8fb;
          color: #078da8;

          font-size: 20px;
          font-weight: 800;
        }

        .ai-team-name {
          color: #101828;
          font-size: 16px;
          font-weight: 700;
        }

        .ai-team-role {
          margin-top: 4px;

          color: #667085;
          font-size: 13px;
        }

        /* =====================================================
           TESTIMONIALS
        ===================================================== */

        .ai-testimonials {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .ai-testimonial-card {
          display: flex;
          flex-direction: column;

          padding: 30px;

          background: white;

          border: 1px solid #e1e7ec;
          border-radius: 14px;
        }

        .ai-testimonial-stars {
          color: #f5a623;
          font-size: 14px;
          letter-spacing: 2px;

          margin-bottom: 16px;
        }

        .ai-testimonial-quote {
          flex: 1;

          color: #475569;
          font-size: 14px;
          line-height: 1.75;

          margin-bottom: 22px;
        }

        .ai-testimonial-name {
          color: #101828;
          font-size: 15px;
          font-weight: 700;
        }

        .ai-testimonial-role {
          margin-top: 2px;

          color: #667085;
          font-size: 13px;
        }

        /* =====================================================
           PRICING GROUP RESPONSIVE
        ===================================================== */

        @media (max-width: 1050px) {
          .ai-team-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ai-testimonials {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .ai-team-grid {
            grid-template-columns: 1fr;
          }
        }
`}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ai-hero ai-hero-centered">
        <div className="ai-hero-inner">

          <div className="ai-eyebrow">Pricing</div>

          <h1>
            Transparent pricing.
            <span>No hidden fees.</span>
          </h1>

          <p className="ai-hero-description">
            We believe in complete transparency in our pricing. Check out
            our pricing options designed to deliver maximum value for your
            investment.
          </p>

          <div className="ai-buttons">
            <Link to="/contact-us" className="ai-btn ai-btn-primary">contact Us →</Link>
            <Link to="/services" className="ai-btn ai-btn-secondary">Browse Services</Link>
          </div>

        </div>
      </section>

      {/* =====================================================
          VALUE PROPOSITION
      ===================================================== */}

      <section className="ai-section ai-section-light">
        <div className="ai-container">

          <div className="ai-heading" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
            <h2>Discover unbeatable value with our transparent pricing</h2>
            <p>
              Experience exceptional quality with our transparent pricing.
              We offer unbeatable value, ensuring you know exactly what
              you're paying for. With no hidden fees or surprises, you can
              trust that our rates are clear and fair, providing the best
              value for your investment.
            </p>
          </div>

          <div className="ai-benefits" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: 800, margin: '0 auto' }}>

            <div className="ai-benefit">
              <div className="ai-benefit-letter">A</div>
              <h3>Value for Money</h3>
              <p>We offer high-quality services at low prices. We make sure that your money gives you the best return possible.</p>
            </div>

            <div className="ai-benefit">
              <div className="ai-benefit-letter">B</div>
              <h3>Competitive Pricing</h3>
              <p>We offer our top-quality services at competitive prices, providing you with great value for your investment.</p>
            </div>

          </div>

        </div>
      </section>

      <section className="ai-section ai-section-light">
        <div className="ai-container">

          <div className="ai-heading">
            <span className="ai-faq-category">Pricing</span>
            <h2>AI Automation & Chatbot</h2>
            <p>We keep our pricing simple and transparent. Basic packages cover common needs, but most businesses require a tailored solution.</p>
          </div>

          <div className="ai-pricing">
            <div className="ai-price-card">
              <span className="ai-price-tier">Startup Package</span>
              <h3>Ideal for startups</h3>
              <div className="ai-price">$380<span> / month</span></div>
              <ul className="ai-price-list">
                <li>Basic chatbot template</li>
                <li>Up to 3 intents (FAQs only)</li>
                <li>Email support</li>
                <li>Perfect for businesses testing AI chatbots for the first time</li>
              </ul>
              <Link to="/ai-automation-chatbots" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Order Now</Link>
              <div className="ai-price-note">10% discount when paid yearly</div>
            </div>

            <div className="ai-price-card featured">
              <span className="ai-popular">Popular</span>
              <span className="ai-price-tier">Pro Package</span>
              <h3>Great for growing businesses</h3>
              <div className="ai-price">$670<span> / month</span></div>
              <ul className="ai-price-list">
                <li>Everything in Startup, plus</li>
                <li>Customizable chatbot with up to 10 intents</li>
                <li>Integration with one business tool</li>
                <li>Basic analytics dashboard</li>
              </ul>
              <Link to="/ai-automation-chatbots" className="ai-btn ai-btn-primary" style={{ width: '100%' }}>Order Now</Link>
              <div className="ai-price-note">15% discount when paid yearly</div>
            </div>

            <div className="ai-price-card">
              <span className="ai-price-tier">Elite Package</span>
              <h3>Best for large businesses</h3>
              <div className="ai-price">Custom</div>
              <ul className="ai-price-list">
                <li>Everything in Pro, plus</li>
                <li>Full-scale AI automation</li>
                <li>Unlimited chatbot intents</li>
                <li>Dedicated support team</li>
              </ul>
              <Link to="/ai-automation-chatbots" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Contact Us</Link>
            </div>
          </div>

        </div>
      </section>

      <section className="ai-section ai-section-gray">
        <div className="ai-container">

          <div className="ai-heading">
            <span className="ai-faq-category">Pricing</span>
            <h2>Branding & Graphic Designing</h2>
            <p>Every business has unique design needs. We offer simple starter packages, while full-scale branding solutions are available through custom packages.</p>
          </div>

          <div className="ai-pricing">
            <div className="ai-price-card">
              <span className="ai-price-tier">Startup Package</span>
              <h3>Ideal for startups</h3>
              <div className="ai-price">$199<span> / month</span></div>
              <ul className="ai-price-list">
                <li>Logo design (2 concepts, 1 final)</li>
                <li>Basic color palette</li>
                <li>Website content writing with AI</li>
                <li>Social media profile image</li>
              </ul>
              <Link to="/branding-graphic-designing" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Order Now</Link>
              <div className="ai-price-note">10% discount when paid yearly</div>
            </div>

            <div className="ai-price-card featured">
              <span className="ai-popular">Popular</span>
              <span className="ai-price-tier">Pro Package</span>
              <h3>Great for growing businesses</h3>
              <div className="ai-price">$399<span> / month</span></div>
              <ul className="ai-price-list">
                <li>Everything in Startup, plus</li>
                <li>Brand color palette + typography</li>
                <li>5 social media post templates</li>
                <li>Business card design</li>
                <li>Brand usage mini-guide</li>
              </ul>
              <Link to="/branding-graphic-designing" className="ai-btn ai-btn-primary" style={{ width: '100%' }}>Order Now</Link>
              <div className="ai-price-note">15% discount when paid yearly</div>
            </div>

            <div className="ai-price-card">
              <span className="ai-price-tier">Elite Package</span>
              <h3>Best for large businesses</h3>
              <div className="ai-price">Custom</div>
              <ul className="ai-price-list">
                <li>Everything in Pro, plus</li>
                <li>Full brand identity system</li>
                <li>Packaging & marketing collateral</li>
                <li>Website and digital assets</li>
                <li>Ongoing creative support</li>
              </ul>
              <Link to="/branding-graphic-designing" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Contact Us</Link>
            </div>
          </div>

        </div>
      </section>

      <section className="ai-section ai-section-light">
        <div className="ai-container">

          <div className="ai-heading">
            <span className="ai-faq-category">Pricing</span>
            <h2>Pay-Per-Click (PPC) Advertising</h2>
            <p>Enjoy top-notch quality with our premium services, all at competitive rates that offer exceptional value for your investment.</p>
          </div>

          <div className="ai-pricing">
            <div className="ai-price-card">
              <span className="ai-price-tier">Startup Package</span>
              <h3>Ideal for startups</h3>
              <div className="ai-price">$399<span> / month</span></div>
              <ul className="ai-price-list">
                <li>Basic Google Ads setup</li>
                <li>1 campaign + reporting</li>
              </ul>
              <Link to="/pay-per-click-advertising-services" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Order Now</Link>
              <div className="ai-price-note">10% discount when paid yearly</div>
            </div>

            <div className="ai-price-card featured">
              <span className="ai-popular">Popular</span>
              <span className="ai-price-tier">Pro Package</span>
              <h3>Great for growing businesses</h3>
              <div className="ai-price">$599<span> / month</span></div>
              <ul className="ai-price-list">
                <li>Everything in Startup, plus</li>
                <li>Multiple campaigns</li>
                <li>Remarketing + advanced targeting</li>
              </ul>
              <Link to="/pay-per-click-advertising-services" className="ai-btn ai-btn-primary" style={{ width: '100%' }}>Order Now</Link>
              <div className="ai-price-note">15% discount when paid yearly</div>
            </div>

            <div className="ai-price-card">
              <span className="ai-price-tier">Elite Package</span>
              <h3>Best for large businesses</h3>
              <div className="ai-price">Custom</div>
              <ul className="ai-price-list">
                <li>Everything in Pro, plus</li>
                <li>Enterprise-level PPC management</li>
                <li>Cross-platform campaigns</li>
                <li>Dedicated account management</li>
              </ul>
              <Link to="/pay-per-click-advertising-services" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Contact Us</Link>
            </div>
          </div>

        </div>
      </section>

      <section className="ai-section ai-section-gray">
        <div className="ai-container">

          <div className="ai-heading">
            <span className="ai-faq-category">Pricing</span>
            <h2>Search Engine Optimization (SEO)</h2>
            <p>Enjoy top-notch quality with our premium services, all at competitive rates that offer exceptional value for your investment.</p>
          </div>

          <div className="ai-pricing">
            <div className="ai-price-card">
              <span className="ai-price-tier">Startup Package</span>
              <h3>Ideal for startups</h3>
              <div className="ai-price">$299<span> / month</span></div>
              <ul className="ai-price-list">
                <li>Basic on-page optimization</li>
                <li>Monthly reports</li>
              </ul>
              <Link to="/search-engine-optimization-2" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Order Now</Link>
              <div className="ai-price-note">10% discount when paid yearly</div>
            </div>

            <div className="ai-price-card featured">
              <span className="ai-popular">Popular</span>
              <span className="ai-price-tier">Pro Package</span>
              <h3>Great for growing businesses</h3>
              <div className="ai-price">$599<span> / month</span></div>
              <ul className="ai-price-list">
                <li>Everything in Startup, plus</li>
                <li>On-page + technical SEO</li>
                <li>5 backlinks / month</li>
              </ul>
              <Link to="/search-engine-optimization-2" className="ai-btn ai-btn-primary" style={{ width: '100%' }}>Order Now</Link>
              <div className="ai-price-note">15% discount when paid yearly</div>
            </div>

            <div className="ai-price-card">
              <span className="ai-price-tier">Elite Package</span>
              <h3>Best for large businesses</h3>
              <div className="ai-price">Custom</div>
              <ul className="ai-price-list">
                <li>Everything in Pro, plus</li>
                <li>National or enterprise SEO</li>
                <li>Advanced link-building strategies</li>
              </ul>
              <Link to="/search-engine-optimization-2" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Contact Us</Link>
            </div>
          </div>

        </div>
      </section>

      <section className="ai-section ai-section-light">
        <div className="ai-container">

          <div className="ai-heading">
            <span className="ai-faq-category">Pricing</span>
            <h2>Software Development Services</h2>
            <p>Enjoy top-notch quality with our premium services, all at competitive rates that offer exceptional value for your investment.</p>
          </div>

          <div className="ai-pricing">
            <div className="ai-price-card">
              <span className="ai-price-tier">Startup Package</span>
              <h3>Ideal for startups</h3>
              <div className="ai-price">$1,499<span> one time</span></div>
              <ul className="ai-price-list">
                <li>Basic web or mobile app MVP</li>
                <li>Essential features included</li>
              </ul>
              <Link to="/software-development-services" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Order Now</Link>
            </div>

            <div className="ai-price-card featured">
              <span className="ai-popular">Popular</span>
              <span className="ai-price-tier">Pro Package</span>
              <h3>Great for growing businesses</h3>
              <div className="ai-price">$3,499<span> one time</span></div>
              <ul className="ai-price-list">
                <li>Everything in Startup, plus</li>
                <li>Full-featured custom application</li>
                <li>Integrations and testing</li>
              </ul>
              <Link to="/software-development-services" className="ai-btn ai-btn-primary" style={{ width: '100%' }}>Order Now</Link>
            </div>

            <div className="ai-price-card">
              <span className="ai-price-tier">Elite Package</span>
              <h3>Best for large businesses</h3>
              <div className="ai-price">Custom</div>
              <ul className="ai-price-list">
                <li>Enterprise-level solutions</li>
                <li>Industry-specific software</li>
                <li>Advanced features by scope</li>
              </ul>
              <Link to="/software-development-services" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Contact Us</Link>
            </div>
          </div>

        </div>
      </section>

      <section className="ai-section ai-section-gray">
        <div className="ai-container">

          <div className="ai-heading">
            <span className="ai-faq-category">Pricing</span>
            <h2>Web Development Services</h2>
            <p>We offer clear starter options and custom projects for advanced needs. Contact us for a tailored quote.</p>
          </div>

          <div className="ai-pricing">
            <div className="ai-price-card">
              <span className="ai-price-tier">Startup Package</span>
              <h3>Ideal for startups</h3>
              <div className="ai-price">$799<span> one time</span></div>
              <ul className="ai-price-list">
                <li>5 responsive pages</li>
                <li>Basic contact form</li>
                <li>Simple SEO setup</li>
              </ul>
              <Link to="/web-development-services" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Order Now</Link>
            </div>

            <div className="ai-price-card featured">
              <span className="ai-popular">Popular</span>
              <span className="ai-price-tier">Pro Package</span>
              <h3>Great for growing businesses</h3>
              <div className="ai-price">$1,499<span> one time</span></div>
              <ul className="ai-price-list">
                <li>Everything in Startup, plus</li>
                <li>Custom design, up to 10 pages</li>
                <li>Basic integrations</li>
                <li>Speed optimization</li>
              </ul>
              <Link to="/web-development-services" className="ai-btn ai-btn-primary" style={{ width: '100%' }}>Order Now</Link>
            </div>

            <div className="ai-price-card">
              <span className="ai-price-tier">Elite Package</span>
              <h3>Best for large businesses</h3>
              <div className="ai-price">Custom</div>
              <ul className="ai-price-list">
                <li>Everything in Pro, plus</li>
                <li>Advanced e-commerce, web apps</li>
                <li>Complex integrations, custom APIs</li>
              </ul>
              <Link to="/web-development-services" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Contact Us</Link>
            </div>
          </div>

        </div>
      </section>

      <section className="ai-section ai-section-light">
        <div className="ai-container">

          <div className="ai-heading">
            <span className="ai-faq-category">Pricing</span>
            <h2>Content Creation & Marketing</h2>
            <p>We offer packages for businesses at every stage, from startups to large enterprises.</p>
          </div>

          <div className="ai-pricing">
            <div className="ai-price-card">
              <span className="ai-price-tier">Startup Package</span>
              <h3>Ideal for startups</h3>
              <div className="ai-price">$399<span> / month</span></div>
              <ul className="ai-price-list">
                <li>4 blog posts or social campaigns / month</li>
                <li>Basic SEO optimization</li>
                <li>Standard performance report</li>
              </ul>
              <Link to="/content-creation-marketing" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Order Now</Link>
            </div>

            <div className="ai-price-card featured">
              <span className="ai-popular">Popular</span>
              <span className="ai-price-tier">Pro Package</span>
              <h3>Great for growing businesses</h3>
              <div className="ai-price">$799<span> one time</span></div>
              <ul className="ai-price-list">
                <li>8 blog posts or campaigns / month</li>
                <li>SEO + keyword strategy</li>
                <li>Multi-platform publishing</li>
                <li>Monthly performance review</li>
              </ul>
              <Link to="/content-creation-marketing" className="ai-btn ai-btn-primary" style={{ width: '100%' }}>Order Now</Link>
            </div>

            <div className="ai-price-card">
              <span className="ai-price-tier">Elite Package</span>
              <h3>Best for large businesses</h3>
              <div className="ai-price">Custom</div>
              <ul className="ai-price-list">
                <li>Tailored strategy</li>
                <li>Large-scale campaigns</li>
                <li>Video content, and more</li>
              </ul>
              <Link to="/content-creation-marketing" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Contact Us</Link>
            </div>
          </div>

        </div>
      </section>

      <section className="ai-section ai-section-gray">
        <div className="ai-container">

          <div className="ai-heading">
            <span className="ai-faq-category">Pricing</span>
            <h2>Social Media Management</h2>
            <p>We provide flexible packages to meet the needs of businesses at every stage.</p>
          </div>

          <div className="ai-pricing">
            <div className="ai-price-card">
              <span className="ai-price-tier">Startup Package</span>
              <h3>Ideal for startups</h3>
              <div className="ai-price">$399<span> / month</span></div>
              <ul className="ai-price-list">
                <li>3 platforms managed</li>
                <li>12 posts / month</li>
                <li>Basic reporting</li>
              </ul>
              <Link to="/social-media-management" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Order Now</Link>
              <div className="ai-price-note">10% discount when paid yearly</div>
            </div>

            <div className="ai-price-card featured">
              <span className="ai-popular">Popular</span>
              <span className="ai-price-tier">Pro Package</span>
              <h3>Great for growing businesses</h3>
              <div className="ai-price">$699<span> / month</span></div>
              <ul className="ai-price-list">
                <li>Everything in Startup, plus</li>
                <li>5 platforms managed, 20 posts/month</li>
                <li>Paid ad support + strategy</li>
              </ul>
              <Link to="/social-media-management" className="ai-btn ai-btn-primary" style={{ width: '100%' }}>Order Now</Link>
              <div className="ai-price-note">15% discount when paid yearly</div>
            </div>

            <div className="ai-price-card">
              <span className="ai-price-tier">Elite Package</span>
              <h3>Best for large businesses</h3>
              <div className="ai-price">Custom</div>
              <ul className="ai-price-list">
                <li>Large-scale campaigns</li>
                <li>Influencer partnerships</li>
                <li>Video production, and more</li>
              </ul>
              <Link to="/social-media-management" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Contact Us</Link>
            </div>
          </div>

        </div>
      </section>

      <section className="ai-section ai-section-light">
        <div className="ai-container">

          <div className="ai-heading">
            <span className="ai-faq-category">Pricing</span>
            <h2>Website Design</h2>
            <p>Our packages are flexible and designed to fit different business needs.</p>
          </div>

          <div className="ai-pricing">
            <div className="ai-price-card">
              <span className="ai-price-tier">Startup Package</span>
              <h3>Ideal for startups</h3>
              <div className="ai-price">$999</div>
              <ul className="ai-price-list">
                <li>5-page website</li>
                <li>Mobile responsive design</li>
                <li>Basic SEO setup</li>
              </ul>
              <Link to="/website-design" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Order Now</Link>
            </div>

            <div className="ai-price-card featured">
              <span className="ai-popular">Popular</span>
              <span className="ai-price-tier">Pro Package</span>
              <h3>Great for growing businesses</h3>
              <div className="ai-price">$2,499</div>
              <ul className="ai-price-list">
                <li>10–15 pages</li>
                <li>E-commerce setup or advanced business site</li>
                <li>SEO-friendly structure + speed optimization</li>
              </ul>
              <Link to="/website-design" className="ai-btn ai-btn-primary" style={{ width: '100%' }}>Order Now</Link>
            </div>

            <div className="ai-price-card">
              <span className="ai-price-tier">Elite Package</span>
              <h3>Best for large businesses</h3>
              <div className="ai-price">Custom</div>
              <ul className="ai-price-list">
                <li>Large-scale websites, portals,</li>
                <li>or advanced integrations built</li>
                <li>specifically for your needs</li>
              </ul>
              <Link to="/website-design" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Contact Us</Link>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="ai-stats">
        <div className="ai-stats-inner">

          <div className="ai-stat">
            <div className="ai-stat-number">870+</div>
            <div className="ai-stat-label">Completed Projects</div>
          </div>

          <div className="ai-stat">
            <div className="ai-stat-number">10+</div>
            <div className="ai-stat-label">Years of Experience</div>
          </div>

          <div className="ai-stat">
            <div className="ai-stat-number">50+</div>
            <div className="ai-stat-label">Team Members</div>
          </div>

          <div className="ai-stat">
            <div className="ai-stat-number">225+</div>
            <div className="ai-stat-label">Client Reviews</div>
          </div>

        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="ai-section ai-section-light">
        <div className="ai-container">

          <div className="ai-heading">
            <span className="ai-faq-category">Testimonials</span>
            <h2>Our success, echoed by our clients.</h2>
            <p>Our clients share their experiences of transformation and growth. Unfiltered feedback and the true testament to our service quality.</p>
          </div>

          <div className="ai-testimonials">
            <div className="ai-testimonial-card">
              <div className="ai-testimonial-stars">★★★★★</div>
              <p className="ai-testimonial-quote">Their maintenance service has been a lifesaver for us. They are quick to respond and fix any issues, and their proactive approach helps us avoid potential problems. They've been integral in pushing our digital boundaries.</p>
              <div className="ai-testimonial-name">Ethan Robinson</div>
              <div className="ai-testimonial-role">CFO, FinTrack Corp.</div>
            </div>

            <div className="ai-testimonial-card">
              <div className="ai-testimonial-stars">★★★★★</div>
              <p className="ai-testimonial-quote">Working with them was a breath of fresh air. Their professionalism, creativity, and technical expertise blew us away. They took the time to understand our needs and executed beyond our expectations.</p>
              <div className="ai-testimonial-name">John Smith</div>
              <div className="ai-testimonial-role">COO, TechSolutions Inc.</div>
            </div>

            <div className="ai-testimonial-card">
              <div className="ai-testimonial-stars">★★★★★</div>
              <p className="ai-testimonial-quote">We entrusted them with a complex software development project, and they delivered beyond our expectations. Their technical expertise and commitment to quality are unparalleled.</p>
              <div className="ai-testimonial-name">Jessica Taylor</div>
              <div className="ai-testimonial-role">CEO, Quantum Analytics</div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          PRICING FAQS
      ===================================================== */}

      <section className="ai-section ai-section-gray">
        <div className="ai-container">

          <div className="ai-heading">
            <span className="ai-faq-category">Pricing FAQs</span>
            <h2>Questions about payment and pricing.</h2>
            <p>How we handle scope changes, accepted payment methods, and long-term pricing.</p>
          </div>

          <div className="ai-faq">
            <details className="ai-faq-item">
              <summary>How do you handle changes or additional requests during a project?</summary>
              <p>We review changes with you and provide an updated timeline and quote before implementation.</p>
            </details>
            <details className="ai-faq-item">
              <summary>What payment methods do you accept?</summary>
              <p>We accept U.S. credit cards, bank transfers, and secure online payments.</p>
            </details>
            <details className="ai-faq-item">
              <summary>Can I get a discount for long-term projects or ongoing work?</summary>
              <p>Yes. We offer custom pricing for clients in the U.S. who partner with us on long-term or recurring projects.</p>
            </details>
          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="ai-cta">
        <div className="ai-container">
          <div className="ai-cta-content">

            <h2>Let's Build Your Success Story</h2>

            <p>
              Impressed by our work? Let's create something extraordinary
              for your business. Contact us today to start your project.
            </p>

            <Link to="/contact-us" className="ai-btn ai-btn-primary">Get in Touch →</Link>

          </div>
        </div>
      </section>

    </div>
  );
}