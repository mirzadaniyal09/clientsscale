import { services } from '../../data/services';
import { Link } from 'react-router-dom';

export default function SocialMediaManagementPage() {
    const service = services.find((item) => item.slug === 'social-media-management');
    if (!service) return null;

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
      `}</style>

            {/* ================= HERO ================= */}
            <section className="ai-hero">
                <div className="ai-hero-inner">
                    <div>
                        <Link to="/services" className="ai-back-link">← Back to services</Link>
                        <div className="ai-eyebrow" style={{ marginTop: '28px' }}>Service</div>
                        <h1>
                            {service.title}
                            <span>for U.S. Businesses</span>
                        </h1>
                        <p className="ai-hero-description">{service.description}</p>
                        <div className="ai-buttons">
                            <Link to="/contact" className="ai-btn ai-btn-primary">Get Free Quote</Link>
                            <Link to="/portfolio" className="ai-btn ai-btn-secondary">View Portfolio</Link>
                        </div>
                    </div>

                    <div className="ai-diagram">
                        <svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="300" cy="90" r="46" fill="#e7f8fb" stroke="#09a9c7" strokeWidth="2" />
                            <text x="300" y="96" textAnchor="middle" fontSize="13" fontWeight="700" fill="#078da8">Strategy</text>

                            <circle cx="130" cy="240" r="46" fill="#e7f8fb" stroke="#09a9c7" strokeWidth="2" />
                            <text x="130" y="246" textAnchor="middle" fontSize="13" fontWeight="700" fill="#078da8">Content</text>

                            <circle cx="470" cy="240" r="46" fill="#e7f8fb" stroke="#09a9c7" strokeWidth="2" />
                            <text x="470" y="246" textAnchor="middle" fontSize="13" fontWeight="700" fill="#078da8">Community</text>

                            <circle cx="300" cy="360" r="46" fill="#09a9c7" stroke="#09a9c7" strokeWidth="2" />
                            <text x="300" y="366" textAnchor="middle" fontSize="13" fontWeight="700" fill="#ffffff">Analytics</text>

                            <line className="ai-node-line" x1="300" y1="136" x2="130" y2="200" stroke="#09a9c7" strokeWidth="2" />
                            <line className="ai-node-line" x1="300" y1="136" x2="470" y2="200" stroke="#09a9c7" strokeWidth="2" />
                            <line className="ai-node-line" x1="130" y1="286" x2="300" y2="330" stroke="#09a9c7" strokeWidth="2" />
                            <line className="ai-node-line" x1="470" y1="286" x2="300" y2="330" stroke="#09a9c7" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* ================= FEATURES ================= */}
            <section className="ai-section ai-section-light">
                <div className="ai-container">
                    <div className="ai-heading">
                        <span className="ai-eyebrow-label">Service Features</span>
                        <h2>Social Media Management Features</h2>
                        <p>Our services include all the essential features to maximize your brand's impact on social platforms.</p>
                    </div>

                    <div className="ai-services">
                        <div className="ai-service-card">
                            <span className="ai-service-number">01</span>
                            <h3>Multi-Platform Support</h3>
                            <p>Management across Facebook, Instagram, LinkedIn, Twitter, and more.</p>
                        </div>
                        <div className="ai-service-card">
                            <span className="ai-service-number">02</span>
                            <h3>Targeted Campaigns</h3>
                            <p>Strategies designed for your specific audience.</p>
                        </div>
                        <div className="ai-service-card">
                            <span className="ai-service-number">03</span>
                            <h3>Creative Assets</h3>
                            <p>Professional graphics, videos, and captions crafted for engagement.</p>
                        </div>
                        <div className="ai-service-card">
                            <span className="ai-service-number">04</span>
                            <h3>Data-Driven Adjustments</h3>
                            <p>Ongoing optimizations to improve performance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= BENEFITS ================= */}
            <section className="ai-section ai-section-gray">
                <div className="ai-container">
                    <div className="ai-heading">
                        <span className="ai-eyebrow-label">Service Benefits</span>
                        <h2>Why Businesses Choose Our Social Media Management Services?</h2>
                        <p>Social media is a powerful channel for brand building and customer engagement. Our services ensure you stay relevant and drive measurable results.</p>
                    </div>

                    <div className="ai-benefits">
                        <div className="ai-benefit">
                            <div className="ai-benefit-letter">A</div>
                            <h3>Stronger Online Presence</h3>
                            <p>Consistent activity builds brand credibility.</p>
                        </div>
                        <div className="ai-benefit">
                            <div className="ai-benefit-letter">B</div>
                            <h3>Increased Engagement</h3>
                            <p>Interactive content that keeps your audience connected.</p>
                        </div>
                        <div className="ai-benefit">
                            <div className="ai-benefit-letter">C</div>
                            <h3>Better Lead Generation</h3>
                            <p>Social campaigns that convert followers into customers.</p>
                        </div>
                        <div className="ai-benefit">
                            <div className="ai-benefit-letter">D</div>
                            <h3>Customized Strategies</h3>
                            <p>Tailored to your business and audience.</p>
                        </div>
                        <div className="ai-benefit">
                            <div className="ai-benefit-letter">E</div>
                            <h3>Scalable Management</h3>
                            <p>From startups to enterprises, we handle all levels.</p>
                        </div>
                        <div className="ai-benefit">
                            <div className="ai-benefit-letter">F</div>
                            <h3>Dedicated Support</h3>
                            <p>Regular communication and performance reviews.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CORE SERVICES ================= */}
            <section className="ai-section ai-section-light">
                <div className="ai-container">
                    <div className="ai-heading">
                        <span className="ai-eyebrow-label">Core Services</span>
                        <h2>Our Core Social Media Management Services</h2>
                        <p>We provide comprehensive services that handle every part of your social media presence. From strategy to execution, we create campaigns that connect with your audience and grow your business.</p>
                    </div>

                    <div className="ai-services">
                        <div className="ai-service-card">
                            <span className="ai-service-number">01</span>
                            <h3>Social Strategy Development</h3>
                            <p>Customized plans that define goals, audience, and approach.</p>
                        </div>
                        <div className="ai-service-card">
                            <span className="ai-service-number">02</span>
                            <h3>Content Creation & Posting</h3>
                            <p>Engaging visuals, captions, and videos tailored to each platform.</p>
                        </div>
                        <div className="ai-service-card">
                            <span className="ai-service-number">03</span>
                            <h3>Community Management</h3>
                            <p>Responding to comments, messages, and building relationships.</p>
                        </div>
                        <div className="ai-service-card">
                            <span className="ai-service-number">04</span>
                            <h3>Performance Analytics</h3>
                            <p>Monthly reports that track engagement, reach, and conversions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STATS ================= */}
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

            {/* ================= PRICING ================= */}
            <section className="ai-section ai-section-light">
                <div className="ai-container">
                    <div className="ai-heading">
                        <span className="ai-eyebrow-label">Pricing</span>
                        <h2>Affordable Social Media Management Packages</h2>
                        <p>We provide flexible packages to meet the needs of businesses at every stage. Custom options are also available.</p>
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
                            <Link to="/contact" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Order Now</Link>
                            <div className="ai-price-note">10% discount when paid yearly</div>
                        </div>

                        <div className="ai-price-card featured">
                            <span className="ai-popular">Popular</span>
                            <span className="ai-price-tier">Pro Package</span>
                            <h3>Great for growing businesses</h3>
                            <div className="ai-price">$699<span> / month</span></div>
                            <ul className="ai-price-list">
                                <li>Everything in Startup, plus</li>
                                <li>5 platforms managed</li>
                                <li>20 posts / month</li>
                                <li>Paid ad support & strategy</li>
                            </ul>
                            <Link to="/contact" className="ai-btn ai-btn-primary" style={{ width: '100%' }}>Order Now</Link>
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
                            <Link to="/contact" className="ai-btn ai-btn-secondary" style={{ width: '100%' }}>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="ai-section ai-section-gray">
                <div className="ai-container">
                    <div className="ai-heading">
                        <span className="ai-eyebrow-label">Service FAQs</span>
                        <h2>Got Questions About Social Media Management?</h2>
                        <p>Our FAQ section provides concise and easily understandable responses to all of your inquiries pertaining to our services.</p>
                    </div>

                    <div className="ai-faq">
                        <details className="ai-faq-item">
                            <summary>Which platforms do you manage?</summary>
                            <p>We manage all major platforms including Facebook, Instagram, LinkedIn, Twitter, and TikTok.</p>
                        </details>
                        <details className="ai-faq-item">
                            <summary>Do you create content as well?</summary>
                            <p>Yes, we handle both content creation and posting tailored to each platform.</p>
                        </details>
                        <details className="ai-faq-item">
                            <summary>Can you run paid ads too?</summary>
                            <p>Absolutely — we provide paid ad management alongside organic posting.</p>
                        </details>
                        <details className="ai-faq-item">
                            <summary>How do you measure results?</summary>
                            <p>We track metrics like engagement, reach, clicks, and conversions with monthly reports.</p>
                        </details>
                        <details className="ai-faq-item">
                            <summary>Will you engage with my followers?</summary>
                            <p>Yes, we manage comments, messages, and interactions to build relationships.</p>
                        </details>
                        <details className="ai-faq-item">
                            <summary>Is this suitable for small businesses?</summary>
                            <p>Yes, we offer packages for startups and growing businesses with flexible pricing.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="ai-cta">
                <div className="ai-container ai-cta-content">
                    <h2>Ready to grow your brand and engage your audience?</h2>
                    <p>Contact us today for a free consultation and discover how our social media management services can take your business to the next level.</p>
                    <Link to="/contact" className="ai-btn ai-btn-primary">Request Your Free Social Media Consultation</Link>
                </div>
            </section>
        </div>
    );
}