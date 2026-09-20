import { services } from '../../data/services';
import { Link } from 'react-router-dom';

export default function PayPerClickAdvertisingPage() {
  const service = services.find((item) => item.slug === 'pay-per-click-advertising');
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
            <span className="eyebrow mono">PPC Advertising · United States</span>
            <h1>
              {service.title || 'Put your business in front of people already '}
              <em>ready to buy</em>.
            </h1>
            <p>{service.description || "System Map AI builds and manages Google, Bing, and social ad campaigns that turn ad spend into measurable leads and sales."}</p>
            <div className="btn-row">
              <Link to="/contact-us" className="btn btn-primary">Request a Free Consultation</Link>
              <a href="#services" className="btn btn-secondary">See What We Manage</a>
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
              <text x="248" y="200" className="node-label">CAMPAIGN.CORE</text>

              <circle cx="60" cy="340" r="5" fill="#6b7280" />
              <text x="20" y="365" className="node-label">SEARCH</text>

              <circle cx="420" cy="90" r="5" fill="#6b7280" />
              <text x="388" y="72" className="node-label">SOCIAL</text>

              <circle cx="100" cy="90" r="5" fill="#6b7280" />
              <text x="60" y="72" className="node-label">DISPLAY</text>

              <circle cx="360" cy="300" r="5" fill="#6b7280" />
              <text x="368" y="325" className="node-label">REMARKETING</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow mono">Core Services</span>
            <h2>Every campaign type, working from one strategy.</h2>
            <p>Search, social, and remarketing ads all feed the same reporting layer, so you always know exactly where your budget is working.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <span className="service-tag">01 / SEARCH</span>
              <h3>Google Ads Management</h3>
              <p>Search, Display, and Shopping campaigns built to capture people actively looking for what you sell.</p>
            </div>
            <div className="service-card">
              <span className="service-tag">02 / SOCIAL</span>
              <h3>Social Media Ads</h3>
              <p>Paid campaigns on Facebook, Instagram, and LinkedIn that put your brand in front of the right audience.</p>
            </div>
            <div className="service-card">
              <span className="service-tag">03 / RETARGETING</span>
              <h3>Remarketing Campaigns</h3>
              <p>Ads that bring back visitors who didn't convert the first time, keeping your brand top of mind.</p>
            </div>
            <div className="service-card">
              <span className="service-tag">04 / AUDIT</span>
              <h3>PPC Audit & Strategy</h3>
              <p>Already running ads? We find the wasted spend and rebuild a strategy around what actually converts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section id="benefits">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow mono">Why Us</span>
            <h2>Every dollar tracked back to a result.</h2>
            <p>PPC only works if you can see what it's doing. We build campaigns around clear, measurable outcomes from day one.</p>
          </div>

          <div className="benefits">
            <div className="benefit-item">
              <span className="benefit-num mono">A</span>
              <h4>Instant traffic</h4>
              <p>Campaigns start driving clicks the moment they go live — no waiting months for results.</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-num mono">B</span>
              <h4>Targeted reach</h4>
              <p>Ads shown to the exact audience most likely to convert, not a broad, wasteful net.</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-num mono">C</span>
              <h4>Budget control</h4>
              <p>Optimized bidding means you spend only what you need to hit your targets.</p>
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
            <h2>Straightforward PPC packages, no surprise fees.</h2>
            <p>We recommend at least $500/month in ad spend on top of these fees to generate meaningful results.</p>
          </div>

          <div className="pricing-grid">
            <div className="price-card">
              <span className="price-tier mono">Startup</span>
              <h3>Get Started</h3>
              <div className="price-amount">$399<span>/month</span></div>
              <ul className="price-list">
                <li>Basic Google Ads setup</li>
                <li>1 campaign</li>
                <li>Monthly reporting</li>
              </ul>
              <Link to="/contact-us" className="btn btn-secondary" style={{ justifyContent: 'center' }}>Order Now</Link>
              <div className="price-note">10% off when billed yearly</div>
            </div>

            <div className="price-card featured">
              <span className="featured-tag mono">Popular</span>
              <span className="price-tier mono">Pro</span>
              <h3>Scale Up</h3>
              <div className="price-amount">$599<span>/month</span></div>
              <ul className="price-list">
                <li>Everything in Startup</li>
                <li>Multiple campaigns</li>
                <li>Remarketing included</li>
                <li>Advanced targeting</li>
              </ul>
              <Link to="/contact-us" className="btn btn-primary" style={{ justifyContent: 'center' }}>Order Now</Link>
              <div className="price-note">15% off when billed yearly</div>
            </div>

            <div className="price-card">
              <span className="price-tier mono">Elite</span>
              <h3>Full Scale</h3>
              <div className="price-amount">Custom</div>
              <ul className="price-list">
                <li>Everything in Pro</li>
                <li>Enterprise cross-platform campaigns</li>
                <li>Dedicated account management</li>
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
            <h2>Questions about PPC advertising.</h2>
          </div>

          <div className="faq-list">
            <details className="faq-item" open>
              <summary>What is PPC and how does it work?</summary>
              <p>PPC (pay-per-click) means you only pay when someone clicks your ad — driving targeted traffic instantly instead of waiting on organic growth.</p>
            </details>
            <details className="faq-item">
              <summary>Which platforms do you run ads on?</summary>
              <p>Google Ads, Bing Ads, and social platforms including Facebook, Instagram, and LinkedIn.</p>
            </details>
            <details className="faq-item">
              <summary>How soon will I see results?</summary>
              <p>Most clients see results within the first 30 days, with performance improving further as campaigns are optimized over time.</p>
            </details>
            <details className="faq-item">
              <summary>What's the minimum ad spend required?</summary>
              <p>We recommend at least $500/month in ad spend to generate meaningful, measurable results.</p>
            </details>
            <details className="faq-item">
              <summary>Will I own my ad accounts?</summary>
              <p>Yes — you always have full ownership and transparency over your ad accounts.</p>
            </details>
            <details className="faq-item">
              <summary>Can you manage campaigns for both small and large businesses?</summary>
              <p>Yes. We design PPC campaigns that fit the budget and goals of local businesses and large enterprises alike.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-band" id="quote">
        <div className="wrap">
          <h2>Ready to turn clicks into customers?</h2>
          <p>Tell us your goals. We'll show you where your ad budget should actually go.</p>
          <Link to="/contact-us" className="btn btn-primary">Request Your Free PPC Consultation</Link>
        </div>
      </section>
    </div>
  );
}