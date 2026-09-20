import { services } from '../../data/services';
import { Link } from 'react-router-dom';

export default function AiAutomationPage() {
  const service = services.find(
    (item) => item.slug === 'ai-automation'
  );

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
           IMPORTANT: this does NOT constrain the page itself.
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

          margin-bottom: 24px;

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

          /* remove top padding so the hero sits directly under the header */
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
          padding: 0 !important;
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
            48px,
            6vw,
            76px
          );

          line-height: 0.98;
          letter-spacing: -0.055em;
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
          color: #ffffff !important;
          box-shadow:
            0 8px 25px rgba(9, 169, 199, 0.22);
        }

        .ai-btn-primary:hover,
        .ai-btn-primary:focus,
        .ai-btn-primary:visited {
          color: #ffffff !important;
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
          min-height: 310px;

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
            font-size: 46px;
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

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ai-hero">

        <div className="ai-hero-inner">

          <div>

            <Link to="/services" className="ai-back-link">
              ← Back to services
            </Link>

            <div className="ai-eyebrow">
              AI Automation · United States
            </div>

            <h1>
              Map every repetitive task.
              <span>Automate it.</span>
            </h1>

            <p className="ai-hero-description">
              {service.description ||
                'SystemMapAI designs chatbots, workflows, and data pipelines that help businesses run leaner without adding unnecessary headcount.'}
            </p>

            <div className="ai-buttons">

              <Link
                to="/contact-us"
                className="ai-btn ai-btn-primary"
              >
                Request a Free Consultation →
              </Link>

              <a
                href="#services"
                className="ai-btn ai-btn-secondary"
              >
                See What We Automate
              </a>

            </div>

          </div>

          {/* DIAGRAM */}

          <div className="ai-diagram">

            <svg
              viewBox="0 0 520 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              {/* CHATBOT */}

              <path
                className="ai-node-line"
                d="M90 95 C150 125 170 165 255 205"
                stroke="#F5A623"
                strokeWidth="2"
              />

              {/* CRM */}

              <path
                className="ai-node-line"
                d="M430 95 C370 125 345 165 265 205"
                stroke="#09B4D2"
                strokeWidth="2"
              />

              {/* INTAKE */}

              <path
                className="ai-node-line"
                d="M75 330 C150 295 170 250 245 215"
                stroke="#8B9AAA"
                strokeWidth="2"
              />

              {/* ANALYTICS */}

              <path
                className="ai-node-line"
                d="M445 330 C370 295 345 250 270 215"
                stroke="#09B4D2"
                strokeWidth="2"
              />

              {/* CORE */}

              <circle
                cx="260"
                cy="210"
                r="10"
                fill="#09A9C7"
              />

              <circle
                cx="260"
                cy="210"
                r="25"
                stroke="#09A9C7"
                opacity="0.25"
              />

              <text
                x="285"
                y="215"
                fill="#172033"
                fontSize="11"
                fontWeight="700"
              >
                SYS.CORE
              </text>

              {/* CHATBOT */}

              <circle
                cx="90"
                cy="95"
                r="7"
                fill="#667085"
              />

              <text
                x="58"
                y="70"
                fill="#667085"
                fontSize="11"
                fontWeight="700"
              >
                CHATBOT
              </text>

              {/* CRM */}

              <circle
                cx="430"
                cy="95"
                r="7"
                fill="#667085"
              />

              <text
                x="407"
                y="70"
                fill="#667085"
                fontSize="11"
                fontWeight="700"
              >
                CRM
              </text>

              {/* INTAKE */}

              <circle
                cx="75"
                cy="330"
                r="7"
                fill="#667085"
              />

              <text
                x="35"
                y="355"
                fill="#667085"
                fontSize="11"
                fontWeight="700"
              >
                INTAKE
              </text>

              {/* ANALYTICS */}

              <circle
                cx="445"
                cy="330"
                r="7"
                fill="#667085"
              />

              <text
                x="390"
                y="355"
                fill="#667085"
                fontSize="11"
                fontWeight="700"
              >
                ANALYTICS
              </text>

            </svg>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="ai-section ai-section-light"
        id="services"
      >

        <div className="ai-container">

          <div className="ai-heading">

            <div className="ai-eyebrow">
              Core Services
            </div>

            <h2>
              Four systems. One connected workflow.
            </h2>

            <p>
              Each service is designed to connect with the others,
              creating one intelligent automation system across
              your business.
            </p>

          </div>

          <div className="ai-services">

            <div className="ai-service-card">

              <span className="ai-service-number">
                01 / AUTOMATION
              </span>

              <h3>
                Workflow Automation
              </h3>

              <p>
                We take over data entry, reporting, and scheduling
                so your team stops doing work a system can handle
                faster and more consistently.
              </p>

            </div>

            <div className="ai-service-card">

              <span className="ai-service-number">
                02 / CONVERSATION
              </span>

              <h3>
                AI Chatbots
              </h3>

              <p>
                AI assistants answer questions, qualify leads,
                and hand complex requests to your team.
              </p>

            </div>

            <div className="ai-service-card">

              <span className="ai-service-number">
                03 / CUSTOM BUILD
              </span>

              <h3>
                Custom AI Development
              </h3>

              <p>
                When existing tools don't fit, we build the AI
                assistant or automation layer your workflow needs.
              </p>

            </div>

            <div className="ai-service-card">

              <span className="ai-service-number">
                04 / INSIGHT
              </span>

              <h3>
                AI-Powered Analytics
              </h3>

              <p>
                Automated interactions become valuable data that
                can be transformed into forecasts and insights.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section
        className="ai-section ai-section-gray"
        id="benefits"
      >

        <div className="ai-container">

          <div className="ai-heading">

            <div className="ai-eyebrow">
              Why Choose Us
            </div>

            <h2>
              Built around your business.
            </h2>

            <p>
              We don't force your company into a fixed product.
              We understand your workflow first and build around it.
            </p>

          </div>

          <div className="ai-benefits">

            <div className="ai-benefit">

              <div className="ai-benefit-letter">
                A
              </div>

              <h3>
                Custom Conversation Design
              </h3>

              <p>
                Every chat flow is written around your brand voice
                and your customers' real questions.
              </p>

            </div>

            <div className="ai-benefit">

              <div className="ai-benefit-letter">
                B
              </div>

              <h3>
                Seamless Integrations
              </h3>

              <p>
                Connect your CRM, helpdesk, communication platforms,
                and other business tools.
              </p>

            </div>

            <div className="ai-benefit">

              <div className="ai-benefit-letter">
                C
              </div>

              <h3>
                Continuous Improvement
              </h3>

              <p>
                We monitor and improve your systems so performance
                gets better over time.
              </p>

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
            <div className="ai-stat-number">
              870+
            </div>

            <div className="ai-stat-label">
              Projects Completed
            </div>
          </div>

          <div className="ai-stat">
            <div className="ai-stat-number">
              225+
            </div>

            <div className="ai-stat-label">
              Client Reviews
            </div>
          </div>

          <div className="ai-stat">
            <div className="ai-stat-number">
              50+
            </div>

            <div className="ai-stat-label">
              Team Members
            </div>
          </div>

          <div className="ai-stat">
            <div className="ai-stat-number">
              6+
            </div>

            <div className="ai-stat-label">
              Years Experience
            </div>
          </div>

        </div>

      </section>

      {/* =====================================================
          PRICING
      ===================================================== */}

      <section
        className="ai-section ai-section-light"
        id="pricing"
      >

        <div className="ai-container">

          <div className="ai-heading">

            <div className="ai-eyebrow">
              Pricing
            </div>

            <h2>
              Simple packages that scale with you.
            </h2>

            <p>
              Start with the package that fits your current needs
              and upgrade as your business grows.
            </p>

          </div>

          <div className="ai-pricing">

            {/* STARTUP */}

            <div className="ai-price-card">

              <span className="ai-price-tier">
                Startup
              </span>

              <h3>
                Get Started
              </h3>

              <div className="ai-price">
                $380
                <span>/month</span>
              </div>

              <ul className="ai-price-list">
                <li>Basic chatbot template</li>
                <li>Up to 3 intents</li>
                <li>FAQs and basic responses</li>
                <li>Email support</li>
              </ul>

              <Link
                to="/contact-us"
                className="ai-btn ai-btn-secondary"
              >
                Order Now
              </Link>

              <div className="ai-price-note">
                10% off when billed yearly
              </div>

            </div>

            {/* PRO */}

            <div className="ai-price-card featured">

              <div className="ai-popular">
                Most Popular
              </div>

              <span className="ai-price-tier">
                Pro
              </span>

              <h3>
                Scale Up
              </h3>

              <div className="ai-price">
                $670
                <span>/month</span>
              </div>

              <ul className="ai-price-list">
                <li>Everything in Startup</li>
                <li>Custom chatbot</li>
                <li>Up to 10 intents</li>
                <li>One tool integration</li>
                <li>Basic analytics dashboard</li>
              </ul>

              <Link
                to="/contact-us"
                className="ai-btn ai-btn-primary"
              >
                Order Now
              </Link>

              <div className="ai-price-note">
                15% off when billed yearly
              </div>

            </div>

            {/* ELITE */}

            <div className="ai-price-card">

              <span className="ai-price-tier">
                Elite
              </span>

              <h3>
                Full Scale
              </h3>

              <div className="ai-price">
                Custom
              </div>

              <ul className="ai-price-list">
                <li>Everything in Pro</li>
                <li>Full-scale AI automation</li>
                <li>Unlimited chatbot intents</li>
                <li>Multiple integrations</li>
                <li>Dedicated support team</li>
              </ul>

              <Link
                to="/contact-us"
                className="ai-btn ai-btn-secondary"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section
        className="ai-section ai-section-gray"
        id="faq"
      >

        <div className="ai-container">

          <div className="ai-heading">

            <div className="ai-eyebrow">
              FAQ
            </div>

            <h2>
              Questions about AI automation.
            </h2>

          </div>

          <div className="ai-faq">

            <details
              className="ai-faq-item"
              open
            >
              <summary>
                What is AI automation and how can it help my business?
              </summary>

              <p>
                AI automation uses software to handle repetitive
                tasks such as data entry, reporting, and customer
                replies, allowing your team to focus on higher-value work.
              </p>
            </details>

            <details className="ai-faq-item">
              <summary>
                How do chatbots improve customer service?
              </summary>

              <p>
                They answer common questions instantly, provide
                support around the clock, and route complex requests
                to a human when necessary.
              </p>
            </details>

            <details className="ai-faq-item">
              <summary>
                Can your chatbots integrate with our existing tools?
              </summary>

              <p>
                Yes. AI chatbots can connect with CRMs, helpdesks,
                communication platforms, and other business systems.
              </p>
            </details>

            <details className="ai-faq-item">
              <summary>
                How long does it take to launch an AI chatbot?
              </summary>

              <p>
                Most projects can launch within 2–6 weeks depending
                on the complexity of the chatbot and integrations.
              </p>
            </details>

            <details className="ai-faq-item">
              <summary>
                Is customer data secure with your AI solutions?
              </summary>

              <p>
                We use secure APIs, encryption, and privacy-focused
                implementation practices.
              </p>
            </details>

            <details className="ai-faq-item">
              <summary>
                Do I need technical skills to manage the chatbot?
              </summary>

              <p>
                No. The system can be managed through a straightforward
                dashboard with training and ongoing support.
              </p>
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

            <h2>
              Ready to put your business on autopilot?
            </h2>

            <p>
              Tell us where the bottlenecks are. We'll show you
              what to automate first and how AI can fit into your
              existing workflow.
            </p>

            <Link
              to="/contact-us"
              className="ai-btn ai-btn-primary"
            >
              Request Your Free AI Consultation →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}