import { Link } from 'react-router-dom';

export default function Faqs() {
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
           FAQ PAGE — CENTERED HERO
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
          max-width: 720px;
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
           FAQ CATEGORY LABEL
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
           MISSION BULLET LIST
        ===================================================== */

        .ai-mission-list {
          max-width: 720px;
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
`}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ai-hero ai-hero-centered">

        <div className="ai-hero-inner">

          <div className="ai-eyebrow">
            FAQs
          </div>

          <h1>
            Got Questions?
          </h1>

          <p className="ai-hero-description">
            Explore answers to the most common questions about our
            digital services. Whether you're a startup or an
            established U.S. business, our FAQ section is here to
            give you clarity and confidence.
          </p>

          <div className="ai-buttons">

            <Link to="/contact-us" className="ai-btn ai-btn-primary">
              contact us →
            </Link>

          
          </div>

        </div>

      </section>

      {/* =====================================================
          COMMON FAQS
      ===================================================== */}

      <section className="ai-section ai-section-light">

        <div className="ai-container">

          <div className="ai-heading">
            <span className="ai-faq-category">Common FAQs</span>
            <h2>Questions we hear most often.</h2>
            <p>A quick look at the things new clients usually want to know before getting started.</p>
          </div>

          <div className="ai-faq">
                        <details className="ai-faq-item">
                            <summary>What industries do you serve?</summary>
                            <p>We work with diverse industries across the United States, including technology, healthcare, finance, retail, education, and travel.</p>
                        </details>
                        <details className="ai-faq-item">
                            <summary>Do you offer support after project completion?</summary>
                            <p>Yes. Our team provides post-project support and maintenance to keep your digital platforms performing smoothly.</p>
                        </details>
                        <details className="ai-faq-item">
                            <summary>Are you compliant with data privacy laws?</summary>
                            <p>Absolutely. We follow U.S. and international data privacy regulations to protect your information.</p>
                        </details>
          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES FAQS
      ===================================================== */}

      <section className="ai-section ai-section-gray">

        <div className="ai-container">

          <div className="ai-heading">
            <span className="ai-faq-category">Services FAQs</span>
            <h2>Questions about how we work.</h2>
            <p>Details on customization, ongoing support, and what to expect from our services.</p>
          </div>

          <div className="ai-faq">
                        <details className="ai-faq-item">
                            <summary>Can you customize your services to fit my business needs?</summary>
                            <p>Yes. From small local businesses to nationwide enterprises, we tailor every strategy to match your goals.</p>
                        </details>
                        <details className="ai-faq-item">
                            <summary>Do you provide ongoing support and maintenance?</summary>
                            <p>We offer continuous updates and monitoring, ensuring your website and campaigns stay secure and effective.</p>
                        </details>
                        <details className="ai-faq-item">
                            <summary>Can you integrate third-party tools and systems with my website?</summary>
                            <p>Yes. We specialize in integrating CRM, ERP, and automation tools commonly used by U.S. businesses.</p>
                        </details>
                        <details className="ai-faq-item">
                            <summary>What kind of results can I expect from your digital marketing services?</summary>
                            <p>Expect stronger online visibility, targeted traffic, and higher conversion rates based on your industry and goals.</p>
                        </details>
          </div>

        </div>

      </section>

      {/* =====================================================
          PRICING FAQS
      ===================================================== */}

      <section className="ai-section ai-section-light">

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

          <p style={{ marginTop: 32, color: '#667085', fontSize: 15 }}>
            If you have more questions about our services, reach out to our
            team. We're here to provide guidance and help your business grow.
          </p>

          <div className="ai-buttons" style={{ marginTop: 20 }}>
            <Link to="/contact-us" className="ai-btn ai-btn-primary">
              Contact Us
            </Link>
          </div>

        </div>

      </section>

      {/* =====================================================
          DEDICATED TO EXCELLENCE
      ===================================================== */}

      <section className="ai-section ai-section-gray">

        <div className="ai-container">

          <div className="ai-heading" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
            <h2>Dedicated to Excellence and Client Satisfaction</h2>
            <p>
              We put client success at the center of everything we do.
              Our team delivers innovative strategies and reliable digital
              solutions that help U.S. businesses grow, cut costs, and
              strengthen their brand presence online.
            </p>
          </div>

          <ul className="ai-mission-list">
            <li>Streamlined processes that boost efficiency and reduce expenses.</li>
            <li>Modern digital strategies designed to enhance your brand reputation.</li>
            <li>Customized solutions tailored to the unique needs of your business.</li>
          </ul>

          <div className="ai-benefits">

            <div className="ai-benefit">
              <div className="ai-benefit-letter">A</div>
              <h3>Our Mission</h3>
              <p>
                Our mission is to help U.S. companies thrive in the digital
                space by providing data-driven marketing strategies, reliable
                support, and measurable growth.
              </p>
            </div>

            <div className="ai-benefit">
              <div className="ai-benefit-letter">B</div>
              <h3>Community Involvement</h3>
              <p>
                We actively contribute to local communities through
                collaborations, sponsorships, and volunteer initiatives that
                reflect our values.
              </p>
            </div>

            <div className="ai-benefit">
              <div className="ai-benefit-letter">C</div>
              <h3>Awards and Recognition</h3>
              <p>
                Our team has earned recognition for excellence in digital
                marketing, innovation, and client success — proof of our
                dedication to delivering results that matter.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="ai-cta">

        <div className="ai-container">

          <div className="ai-cta-content">

            <h2>Still have questions?</h2>

            <p>
              Our team is here to provide guidance and help your business
              grow. Reach out and we'll walk you through anything that's
              still unclear.
            </p>

            <Link to="/contact-us" className="ai-btn ai-btn-primary">
              Talk to Our Team →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}