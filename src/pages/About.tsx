import { Link } from 'react-router-dom';
import {
  ArrowRight,
  
  Handshake,
  Scale,
  ShieldCheck,
  Gauge,
  LifeBuoy,
  Target,
  Heart,
  Award,
} from 'lucide-react';

export default function About() {
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
           HERO
        ===================================================== */

        .ai-hero {
          width: 100%;

          display: flex;
          align-items: flex-start;

          padding-top: 90px;
          padding-bottom: 90px;

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
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;

          gap: 40px;
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
          max-width: 620px;

          font-size: clamp(38px, 5.2vw, 64px);

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
          max-width: 560px;
          margin-top: 28px;

          color: #667085;
          font-size: 18px;
          line-height: 1.75;
        }

        .ai-rating {
          margin-top: 18px;
          color: #078da8;
          font-size: 13px;
          font-weight: 700;
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
          gap: 8px;

          padding: 0 26px;

          border-radius: 8px;

          font-size: 14px;
          font-weight: 700;

          transition: 0.2s ease;
          cursor: pointer;
          border: none;
        }

        .ai-btn-primary {
          background: #09a9c7;
          color: white;
          box-shadow: 0 8px 25px rgba(9, 169, 199, 0.22);
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
           HERO PANEL (replaces diagram)
        ===================================================== */

        .ai-hero-panel {
          width: 100%;

          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .ai-hero-stat-card {
          padding: 28px;

          background: white;
          border: 1px solid #dfe6ec;
          border-radius: 18px;

          box-shadow: 0 20px 50px rgba(10, 30, 50, 0.07);
        }

        .ai-hero-stat-number {
          color: #08111f;
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .ai-hero-stat-label {
          margin-top: 6px;
          color: #667085;
          font-size: 13px;
          font-weight: 600;
        }

        .ai-hero-list li {
          position: relative;
          padding: 10px 0 10px 24px;
          color: #475467;
          font-size: 14px;
        }

        .ai-hero-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #09a9c7;
          font-weight: 800;
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

        .ai-section-dark {
          background: #071827;
        }

        .ai-heading {
          max-width: 720px;
          margin-bottom: 55px;
        }

        .ai-heading.centered {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .ai-heading h2 {
          color: #08111f;

          font-size: clamp(30px, 3.6vw, 46px);

          line-height: 1.1;
          letter-spacing: -0.04em;
          font-weight: 800;
        }

        .ai-heading.on-dark h2 {
          color: #ffffff;
        }

        .ai-heading p {
          margin-top: 18px;

          color: #667085;
          font-size: 16px;
          line-height: 1.75;
        }

        .ai-heading.on-dark p {
          color: #aebdca;
        }

        /* =====================================================
           BENEFITS / WHY CHOOSE US
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

          transition: 0.25s ease;
        }

        .ai-benefit:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.07);
        }

        .ai-benefit-icon {
          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 28px;

          border-radius: 50%;

          background: #e7f8fb;
          color: #078fa8;
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
           TEAM
        ===================================================== */

        .ai-team {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .ai-team-card {
          padding: 30px 24px;

          text-align: center;

          background: white;
          border: 1px solid #e1e7ec;
          border-radius: 16px;

          transition: 0.25s ease;
        }

        .ai-team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.07);
        }

        .ai-team-avatar {
          width: 76px;
          height: 76px;
          margin: 0 auto 18px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: linear-gradient(135deg, #09a9c7, #08111f);

          color: white;
          font-size: 22px;
          font-weight: 800;
        }

        .ai-team-card h3 {
          color: #101828;
          font-size: 17px;
          font-weight: 700;
        }

        .ai-team-role {
          margin-top: 6px;
          color: #078da8;
          font-size: 13px;
          font-weight: 600;
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

          border-right: 1px solid rgba(255, 255, 255, 0.1);
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
           TESTIMONIALS
        ===================================================== */

        .ai-testimonials {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .ai-testimonial {
          padding: 32px;

          background: white;
          border: 1px solid #e1e7ec;
          border-radius: 16px;
        }

        .ai-testimonial p {
          color: #475467;
          font-size: 14px;
          line-height: 1.8;
        }

        .ai-testimonial-name {
          margin-top: 20px;
          color: #101828;
          font-size: 14px;
          font-weight: 700;
        }

        .ai-testimonial-role {
          margin-top: 2px;
          color: #98a2b3;
          font-size: 12px;
        }

        /* =====================================================
           VALUES (MISSION / COMMUNITY / AWARDS)
        ===================================================== */

        .ai-values {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .ai-value-card {
          padding: 34px;

          background: #f7fafc;
          border: 1px solid #e1e7ec;
          border-radius: 14px;
        }

        .ai-value-icon {
          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 24px;

          border-radius: 12px;

          background: #e7f8fb;
          color: #078fa8;
        }

        .ai-value-card h3 {
          margin-bottom: 12px;
          color: #101828;
          font-size: 18px;
        }

        .ai-value-card p {
          color: #667085;
          font-size: 14px;
          line-height: 1.75;
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
              rgba(8, 180, 210, 0.18),
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

          font-size: clamp(32px, 4.2vw, 52px);

          line-height: 1.1;
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

          .ai-benefits,
          .ai-values {
            grid-template-columns: 1fr 1fr;
          }

          .ai-team {
            grid-template-columns: 1fr 1fr;
          }

          .ai-testimonials {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .ai-container,
          .ai-hero-inner,
          .ai-stats-inner {
            width: calc(100% - 32px);
          }

          .ai-hero h1 {
            font-size: 40px;
          }

          .ai-section {
            padding: 75px 0;
          }

          .ai-benefits,
          .ai-values,
          .ai-team {
            grid-template-columns: 1fr;
          }

          .ai-stats-inner {
            grid-template-columns: 1fr 1fr;
          }

          .ai-stat {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
        }
      `}</style>

      {/* HERO */}
      <section className="ai-hero">
        <div className="ai-hero-inner">
          <div>
            <div className="ai-eyebrow">About SystemMapAi</div>
            <h1>
              The Minds Behind
              <span>Your Digital Growth</span>
            </h1>
            <p className="ai-hero-description">
              SystemMapAi is a London-based digital agency of strategists, engineers, and
              creatives. We help businesses worldwide grow with thoughtful web and mobile
              engineering, AI-driven solutions, and design that's built to convert.
            </p>
            <p className="ai-rating">Rated 5.0 ★★★★★ on Clutch, Yell &amp; Google</p>

            <div className="ai-buttons">
              <Link to="/contact-us" className="ai-btn ai-btn-primary">
                Meet the Team <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact-us" className="ai-btn ai-btn-secondary">
                Start a Project
              </Link>
            </div>
          </div>

          <div className="ai-hero-panel">
            <div className="ai-hero-stat-card">
              <div className="ai-hero-stat-number">30+</div>
              <div className="ai-hero-stat-label">Specialists on our team</div>
              <ul className="ai-hero-list" style={{ marginTop: 18 }}>
                <li>Faster delivery, fewer bottlenecks</li>
                <li>A modern, polished brand presence</li>
                <li>Solutions built around your goals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="ai-section ai-section-light">
        <div className="ai-container">
          <div className="ai-heading">
            <h2>Why Businesses Choose SystemMapAi</h2>
            <p>
              We combine strategy, engineering, and design to deliver digital products that
              are fast, reliable, and built for measurable results.
            </p>
          </div>

          <div className="ai-benefits">
            <div className="ai-benefit">
              <div className="ai-benefit-icon">
                <Handshake className="w-5 h-5" />
              </div>
              <h3>Client Collaboration</h3>
              <p>
                We involve clients at every stage and build feedback loops into our process
                to keep every project aligned with your goals.
              </p>
            </div>

            <div className="ai-benefit">
              <div className="ai-benefit-icon">
                <Scale className="w-5 h-5" />
              </div>
              <h3>Work-Life Balance</h3>
              <p>
                A well-supported team does better work. Flexible schedules keep our people
                sharp, so your projects get their best thinking.
              </p>
            </div>

            <div className="ai-benefit">
              <div className="ai-benefit-icon">
                <Target className="w-5 h-5" />
              </div>
              <h3>Innovation Lab</h3>
              <p>
                Our internal lab tests emerging tools and AI techniques so we can bring
                proven, forward-looking solutions to your project.
              </p>
            </div>

            <div className="ai-benefit">
              <div className="ai-benefit-icon">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3>Quality Assurance</h3>
              <p>
                Every build goes through rigorous QA so what we ship is fast, stable, and
                ready to perform from day one.
              </p>
            </div>

            <div className="ai-benefit">
              <div className="ai-benefit-icon">
                <Gauge className="w-5 h-5" />
              </div>
              <h3>Competitive Pricing</h3>
              <p>
                Transparent, value-based pricing structured around measurable ROI and
                sustainable, scalable growth.
              </p>
            </div>

            <div className="ai-benefit">
              <div className="ai-benefit-icon">
                <LifeBuoy className="w-5 h-5" />
              </div>
              <h3>Ongoing Support</h3>
              <p>
                Our relationship doesn't end at launch. We keep your platforms secure,
                updated, and performing long after delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="ai-section ai-section-gray">
        <div className="ai-container">
          <div className="ai-heading centered">
            <h2>Meet the Team Behind SystemMapAi</h2>
            <p>
              A multidisciplinary group of strategists, engineers, and creatives working
              together to turn your ideas into digital products that perform.
            </p>
          </div>

          <div className="ai-team">
            <div className="ai-team-card">
              <div className="ai-team-avatar">AK</div>
              <h3>Alex King</h3>
              <div className="ai-team-role">Founder &amp; CEO</div>
            </div>
            <div className="ai-team-card">
              <div className="ai-team-avatar">DR</div>
              <h3>Dana Reyes</h3>
              <div className="ai-team-role">Lead Software Engineer</div>
            </div>
            <div className="ai-team-card">
              <div className="ai-team-avatar">FM</div>
              <h3>Freya Morgan</h3>
              <div className="ai-team-role">Brand Strategist</div>
            </div>
            <div className="ai-team-card">
              <div className="ai-team-avatar">LH</div>
              <h3>Lucas Hale</h3>
              <div className="ai-team-role">Creative Director</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/contact-us" className="ai-btn ai-btn-primary" style={{ display: 'inline-flex' }}>
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
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
            <div className="ai-stat-number">30+</div>
            <div className="ai-stat-label">Team Members</div>
          </div>
          <div className="ai-stat">
            <div className="ai-stat-number">225+</div>
            <div className="ai-stat-label">Client Reviews</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="ai-section ai-section-light">
        <div className="ai-container">
          <div className="ai-heading centered">
            <h2>Our Success, Echoed by Our Clients</h2>
            <p>
              Real feedback from businesses we've helped grow — the true measure of our
              work.
            </p>
          </div>

          <div className="ai-testimonials">
            <div className="ai-testimonial">
              <p>
                "SystemMapAi rebuilt our checkout flow and cut our page load times in half.
                Communication was clear and the reporting made the whole process easy to
                follow."
              </p>
              <div className="ai-testimonial-name">Ethan Robinson</div>
              <div className="ai-testimonial-role">CFO, FinTrack Corp.</div>
            </div>

            <div className="ai-testimonial">
              <p>
                "They shipped a fast, SEO-ready site that started bringing in leads within
                weeks. The attention to detail, from design to performance, really showed."
              </p>
              <div className="ai-testimonial-name">John Smith</div>
              <div className="ai-testimonial-role">COO, TechSolutions Inc.</div>
            </div>

            <div className="ai-testimonial">
              <p>
                "Their automation work freed up hours of manual effort for our sales team
                every week. Setup was smooth and the results beat what we expected."
              </p>
              <div className="ai-testimonial-name">Jessica Taylor</div>
              <div className="ai-testimonial-role">CEO, Quantum Analytics</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / COMMUNITY / AWARDS */}
      <section className="ai-section ai-section-gray">
        <div className="ai-container">
          <div className="ai-heading">
            <h2>Dedicated to Excellence and Client Satisfaction</h2>
            <p>
              Excellence drives everything we build. We go beyond expectations to deliver
              web, mobile, and AI-powered solutions that leave clients not just satisfied,
              but genuinely delighted with the results.
            </p>
          </div>

          <div className="ai-values">
            <div className="ai-value-card">
              <div className="ai-value-icon">
                <Target className="w-5 h-5" />
              </div>
              <h3>Our Mission</h3>
              <p>
                To design and deliver web, mobile, and AI solutions that make businesses
                more efficient, scalable, and ready for the future.
              </p>
            </div>

            <div className="ai-value-card">
              <div className="ai-value-icon">
                <Heart className="w-5 h-5" />
              </div>
              <h3>Community Involvement</h3>
              <p>
                We mentor local talent and contribute engineering time to nonprofits,
                bringing the same craft to community projects that we bring to clients.
              </p>
            </div>

            <div className="ai-value-card">
              <div className="ai-value-icon">
                <Award className="w-5 h-5" />
              </div>
              <h3>Recognition</h3>
              <p>
                Businesses choose SystemMapAi for transparent reporting, dependable delivery,
                and results they can measure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ai-cta">
        <div className="ai-cta-content">
          <h2>Let's Build Something That Moves the Needle</h2>
          <p>
            Tell us about your project and we'll put the right strategists, engineers, and
            creatives on it.
          </p>
          <div className="ai-buttons" style={{ justifyContent: 'center' }}>
            <Link to="/contact-us" className="ai-btn ai-btn-primary">
              contact us <ArrowRight className="w-4 h-4" />
            </Link>
           
          </div>
        </div>
      </section>
    </div>
  );
}