import { services } from '../../data/services';
import { Link } from 'react-router-dom';

export default function SoftwareDevelopmentPage() {
  const service = services.find((item) => item.slug === 'software-development');
  if (!service) return null;

  return (
    <div className="smp-page">
      <style>{`
        .smp-page{
          --ink: #111827;
          --panel: #ffffff;
          --panel-2: #ffffff;
          --border: #e5e7eb;
          --cyan: #0ea5e9;
          --amber: #f59e0b;
          --text: #111827;
          --text-muted: #6b7280;
          --radius: 8px;

          background: #ffffff;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
        }
        .smp-page *{ box-sizing: border-box; }
        .smp-page a{ color: inherit; text-decoration: none; }
        .smp-page ul{ list-style: none; margin:0; padding:0; }
        .smp-page img{ max-width: 100%; display:block; }
        .smp-page h1, .smp-page h2, .smp-page h3, .smp-page h4{
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--text);
          margin: 0;
        }
        .smp-page .mono{
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-size: 12px;
        }
        .smp-page .eyebrow{
          display:inline-flex; align-items:center; gap:8px;
          color: var(--cyan); margin-bottom: 16px;
        }
        .smp-page .eyebrow::before{ content:""; width:16px; height:1px; background: var(--cyan); display:inline-block; }

        .smp-page .back-link{
          display:inline-flex; align-items:center; gap:8px;
          color: var(--cyan); font-weight:600; font-size:14px;
          padding: 24px 32px 0;
        }
        .smp-page .wrap{ max-width: 1100px; margin: 0 auto; padding: 0 24px; }

        .smp-page .hero{ padding: 48px 0 72px; }
        .smp-page .hero .wrap{
          display:grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center;
        }
        .smp-page .hero h1{ font-size: clamp(32px, 4.5vw, 48px); line-height: 1.12; margin-bottom: 18px; }
        .smp-page .hero h1 em{ font-style: normal; color: var(--cyan); }
        .smp-page .hero p{ color: var(--text-muted); font-size: 17px; max-width: 460px; margin-bottom: 28px; }
        .smp-page .btn-row{ display:flex; gap:12px; flex-wrap:wrap; }
        .smp-page .btn{
          display:inline-flex; align-items:center; gap:8px; padding: 12px 22px;
          border-radius: var(--radius); font-weight:600; font-size:14px;
          transition: background .2s, border-color .2s, color .2s;
        }
        .smp-page .btn-primary{ background: var(--cyan); color: #fff; }
        .smp-page .btn-primary:hover{ background: #0284c7; }
        .smp-page .btn-secondary{ border: 1px solid var(--border); color: var(--text); background: #fff; }
        .smp-page .btn-secondary:hover{ border-color: var(--cyan); color: var(--cyan); }

        .smp-page .hero-diagram svg{ width:100%; height:auto; }
        .smp-page .node-pulse{ stroke-dasharray: 6 10; animation: smp-dash 3.5s linear infinite; }
        @keyframes smp-dash{ to{ stroke-dashoffset: -160; } }
        .smp-page .node-dot{ fill: var(--cyan); }
        .smp-page .node-label{ font-family:'JetBrains Mono', monospace; font-size: 9px; fill: var(--text-muted); letter-spacing: 0.05em; }

        .smp-page section{ padding: 72px 0; }
        .smp-page .section-head{ max-width: 560px; margin-bottom: 40px; }
        .smp-page .section-head h2{ font-size: clamp(24px, 3vw, 32px); line-height:1.2; }
        .smp-page .section-head p{ color: var(--text-muted); margin-top:12px; font-size: 16px; }

        .smp-page .services-grid{
          display:grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
        }
        .smp-page .service-card{
          background: var(--panel-2); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 28px 24px;
          transition: border-color .2s;
        }
        .smp-page .service-card:hover{ border-color: var(--cyan); }
        .smp-page .service-tag{ font-family:'JetBrains Mono', monospace; font-size: 11px; color: var(--amber); display:block; margin-bottom: 14px; }
        .smp-page .service-card h3{ font-size: 17px; margin-bottom: 10px; }
        .smp-page .service-card p{ color: var(--text-muted); font-size: 14.5px; margin:0; }
        @media (max-width: 980px){ .smp-page .services-grid{ grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px){ .smp-page .services-grid{ grid-template-columns: 1fr; } }

        .smp-page .benefits{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .smp-page .benefit-item{
          padding: 24px; border: 1px solid var(--border); border-radius: var(--radius); background: #fff;
        }
        .smp-page .benefit-num{ font-family:'JetBrains Mono', monospace; font-size: 12px; color: var(--cyan); display:block; margin-bottom: 12px; }
        .smp-page .benefit-item h4{ font-size: 16px; margin-bottom: 8px; }
        .smp-page .benefit-item p{ color: var(--text-muted); font-size: 14.5px; margin:0; }
        @media (max-width: 860px){ .smp-page .benefits{ grid-template-columns: 1fr; } }

        .smp-page .stats-bar{
          display:grid; grid-template-columns: repeat(4,1fr);
          border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden;
          background: var(--panel-2);
        }
        .smp-page .stat{ padding: 32px 20px; text-align:center; border-left: 1px solid var(--border); }
        .smp-page .stat:first-child{ border-left:none; }
        .smp-page .stat-num{ font-family:'Space Grotesk', sans-serif; font-size: clamp(26px,3.5vw,36px); font-weight: 700; color: var(--cyan); }
        .smp-page .stat-label{ color: var(--text-muted); font-size: 13px; margin-top: 4px; }
        @media (max-width: 700px){ .smp-page .stats-bar{ grid-template-columns: 1fr 1fr; } .smp-page .stat:nth-child(3){ border-left:none; } }

        .smp-page .pricing-grid{ display:grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .smp-page .price-card{
          background: #fff; border: 1px solid var(--border); border-radius: var(--radius);
          padding: 32px 28px; display:flex; flex-direction:column; position: relative;
        }
        .smp-page .price-card.featured{ border-color: var(--cyan); box-shadow: 0 0 0 1px var(--cyan); }
        .smp-page .featured-tag{
          position:absolute; top:0; right:0; background: var(--amber); color: #111;
          font-family:'JetBrains Mono', monospace; font-size: 10px; padding: 4px 10px;
          border-radius: 0 var(--radius) 0 var(--radius);
        }
        .smp-page .price-tier{ color: var(--text-muted); font-size: 13px; margin-bottom: 4px; }
        .smp-page .price-card h3{ font-size: 18px; margin-bottom: 4px; }
        .smp-page .price-amount{ font-family:'Space Grotesk', sans-serif; font-size: 34px; font-weight: 700; margin: 16px 0 2px; }
        .smp-page .price-amount span{ font-size: 14px; color: var(--text-muted); font-weight:400; font-family:'Inter'; }
        .smp-page .price-list{ margin: 20px 0 24px; flex-grow:1; }
        .smp-page .price-list li{ font-size: 14px; color: var(--text-muted); padding: 8px 0; border-top: 1px solid var(--border); display:flex; gap:8px; }
        .smp-page .price-list li::before{ content:"›"; color: var(--cyan); }
        .smp-page .price-note{ font-size: 12px; color: var(--text-muted); margin-top:12px; text-align:center; }
        @media (max-width: 980px){ .smp-page .pricing-grid{ grid-template-columns: 1fr; } }

        .smp-page .faq-list{ max-width: 720px; }
        .smp-page .faq-item{ border-bottom: 1px solid var(--border); }
        .smp-page .faq-item summary{
          cursor:pointer; padding: 18px 0; font-family:'Space Grotesk', sans-serif;
          font-size: 16px; font-weight:500; display:flex; justify-content:space-between; align-items:center; list-style:none;
        }
        .smp-page .faq-item summary::-webkit-details-marker{ display:none; }
        .smp-page .faq-item summary::after{ content:"+"; color: var(--cyan); font-size: 20px; }
        .smp-page .faq-item[open] summary::after{ content:"−"; }
        .smp-page .faq-item p{ color: var(--text-muted); font-size: 14.5px; padding-bottom: 18px; max-width: 600px; margin:0; }

        .smp-page .cta-band{
          background: var(--panel-2); border-top: 1px solid var(--border);
          text-align:center; padding: 72px 0;
        }
        .smp-page .cta-band h2{ font-size: clamp(24px,3.2vw,34px); max-width: 640px; margin: 0 auto 14px; }
        .smp-page .cta-band p{ color: var(--text-muted); max-width: 500px; margin: 0 auto 28px; }

        @media (max-width: 900px){
          .smp-page .hero .wrap{ grid-template-columns: 1fr; gap: 32px; }
          .smp-page .hero-diagram{ max-width: 360px; margin: 0 auto; }
        }
      `}</style>

      <Link to="/services" className="back-link">← Back to services</Link>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="wrap">
          <div>
            <span className="eyebrow mono">Software Development · United States</span>
            <h1>
              {service.title || 'Turn your idea into software that actually '}
              <em>works</em>.
            </h1>
            <p>{service.description || "System Map AI designs and builds scalable, secure applications — from MVPs to enterprise systems — tailored to how your business actually runs."}</p>
            <div className="btn-row">
              <Link to="/contact-us" className="btn btn-primary">Request a Free Consultation</Link>
              <a href="#services" className="btn btn-secondary">See What We Build</a>
            </div>
          </div>

          <div className="hero-diagram">
            <svg viewBox="0 0 480 420" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="node-pulse" d="M60 340 C120 300 100 220 190 210" stroke="#e5e7eb" strokeWidth="1.5" />
              <path className="node-pulse" d="M60 340 C120 300 100 220 190 210" stroke="#0ea5e9" strokeWidth="1.2" opacity="0.7" />

              <path className="node-pulse" d="M420 90 C340 120 320 170 240 190" stroke="#e5e7eb" strokeWidth="1.5" />
              <path className="node-pulse" d="M420 90 C340 120 320 170 240 190" stroke="#0ea5e9" strokeWidth="1.2" opacity="0.7" />

              <path className="node-pulse" d="M100 90 C160 130 170 160 220 195" stroke="#e5e7eb" strokeWidth="1.5" />
              <path className="node-pulse" d="M100 90 C160 130 170 160 220 195" stroke="#f59e0b" strokeWidth="1.2" opacity="0.6" />

              <path className="node-pulse" d="M240 210 C260 250 310 260 360 300" stroke="#e5e7eb" strokeWidth="1.5" />
              <path className="node-pulse" d="M240 210 C260 250 310 260 360 300" stroke="#0ea5e9" strokeWidth="1.2" opacity="0.7" />

              <path className="node-pulse" d="M210 220 C190 270 140 280 100 330" stroke="#e5e7eb" strokeWidth="1.5" />

              <circle cx="230" cy="205" r="7" className="node-dot" />
              <circle cx="230" cy="205" r="16" stroke="#0ea5e9" strokeWidth="1" opacity="0.4" />
              <text x="248" y="200" className="node-label">BUILD.CORE</text>

              <circle cx="60" cy="340" r="5" fill="#6b7280" />
              <text x="20" y="365" className="node-label">WEB APP</text>

              <circle cx="420" cy="90" r="5" fill="#6b7280" />
              <text x="388" y="72" className="node-label">MOBILE</text>

              <circle cx="100" cy="90" r="5" fill="#6b7280" />
              <text x="60" y="72" className="node-label">SAAS</text>

              <circle cx="360" cy="300" r="5" fill="#6b7280" />
              <text x="368" y="325" className="node-label">ENTERPRISE</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow mono">Core Services</span>
            <h2>Software built around your actual workflow.</h2>
            <p>Whether you need a mobile app, a full enterprise system, or a SaaS product, every build is designed to fit your business, not the other way around.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <span className="service-tag">01 / CUSTOM</span>
              <h3>Custom Software</h3>
              <p>Tailor-made applications built to your exact requirements — no paying for features you'll never use.</p>
            </div>
            <div className="service-card">
              <span className="service-tag">02 / MOBILE</span>
              <h3>Mobile App Development</h3>
              <p>Native and cross-platform apps for iOS and Android that feel fast and familiar to your users.</p>
            </div>
            <div className="service-card">
              <span className="service-tag">03 / ENTERPRISE</span>
              <h3>Enterprise Solutions</h3>
              <p>Robust systems that streamline complex operations across teams and departments.</p>
            </div>
            <div className="service-card">
              <span className="service-tag">04 / SAAS</span>
              <h3>SaaS Development</h3>
              <p>Cloud-based platforms built for subscription models and multi-user environments from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section id="benefits">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow mono">Why Us</span>
            <h2>Software that scales with your business, not against it.</h2>
            <p>We build for growth from the first line of code — architecture, integrations, and support that hold up as you expand.</p>
          </div>

          <div className="benefits">
            <div className="benefit-item">
              <span className="benefit-num mono">A</span>
              <h4>Increased productivity</h4>
              <p>Custom tools that streamline the operations slowing your team down today.</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-num mono">B</span>
              <h4>Seamless integration</h4>
              <p>Built to work with the CRMs, ERPs, and tools you already rely on.</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-num mono">C</span>
              <h4>Scalable architecture</h4>
              <p>Systems designed to grow smoothly as your user base and feature list expand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section style={{ padding: 0 }}>
        <div className="stats-bar">
          <div className="stat"><div className="stat-num">870+</div><div className="stat-label mono">Projects Completed</div></div>
          <div className="stat"><div className="stat-num">225+</div><div className="stat-label mono">Client Reviews</div></div>
          <div className="stat"><div className="stat-num">50+</div><div className="stat-label mono">Team Members</div></div>
          <div className="stat"><div className="stat-num">6+</div><div className="stat-label mono">Years Experience</div></div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow mono">Pricing</span>
            <h2>Straightforward pricing for every project size.</h2>
            <p>From a lean MVP to a full enterprise build, we scope pricing around what you actually need.</p>
          </div>

          <div className="pricing-grid">
            <div className="price-card">
              <span className="price-tier mono">Startup</span>
              <h3>Get Started</h3>
              <div className="price-amount">$1,499<span>one time</span></div>
              <ul className="price-list">
                <li>Basic web or mobile app MVP</li>
                <li>Essential features only</li>
              </ul>
              <Link to="/contact-us" className="btn btn-secondary" style={{ justifyContent: 'center' }}>Order Now</Link>
            </div>

            <div className="price-card featured">
              <span className="featured-tag mono">Popular</span>
              <span className="price-tier mono">Pro</span>
              <h3>Scale Up</h3>
              <div className="price-amount">$3,499<span>one time</span></div>
              <ul className="price-list">
                <li>Everything in Startup</li>
                <li>Full-featured custom application</li>
                <li>Integrations and testing included</li>
              </ul>
              <Link to="/contact-us" className="btn btn-primary" style={{ justifyContent: 'center' }}>Order Now</Link>
            </div>

            <div className="price-card">
              <span className="price-tier mono">Elite</span>
              <h3>Full Scale</h3>
              <div className="price-amount">Custom</div>
              <ul className="price-list">
                <li>Enterprise-level solutions</li>
                <li>Industry-specific features</li>
                <li>Dedicated engineering support</li>
              </ul>
              <Link to="/contact-us" className="btn btn-secondary" style={{ justifyContent: 'center' }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow mono">FAQ</span>
            <h2>Questions about software development.</h2>
          </div>

          <div className="faq-list">
            <details className="faq-item" open>
              <summary>What industries do you develop software for?</summary>
              <p>We work across retail, healthcare, finance, logistics, and more — adapting to whatever your industry needs.</p>
            </details>
            <details className="faq-item">
              <summary>How long does it take to develop software?</summary>
              <p>Timelines range from around 4 weeks for MVPs to several months for more complex systems.</p>
            </details>
            <details className="faq-item">
              <summary>Do you provide post-launch support?</summary>
              <p>Yes — ongoing maintenance, bug fixes, and feature upgrades are all part of what we offer after launch.</p>
            </details>
            <details className="faq-item">
              <summary>Can you integrate with existing systems?</summary>
              <p>Absolutely. We specialize in integrating new software with CRMs, ERPs, and third-party tools you already use.</p>
            </details>
            <details className="faq-item">
              <summary>Do you follow secure coding practices?</summary>
              <p>Yes — we implement industry best practices throughout to protect your data and systems.</p>
            </details>
            <details className="faq-item">
              <summary>Will I own the source code?</summary>
              <p>Yes — you get full ownership of the software and source code once the project is complete.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-band" id="quote">
        <div className="wrap">
          <h2>Ready to build software that scales with you?</h2>
          <p>Tell us what you're trying to build. We'll show you the fastest path from idea to launch.</p>
          <Link to="/contact-us" className="btn btn-primary">Request Your Free Software Consultation</Link>
        </div>
      </section>
    </div>
  );
}