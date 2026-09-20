const STATS = [
    { number: '870+', label: 'Completed Projects' },
    { number: '225+', label: 'Client Reviews' },
    { number: '10+', label: 'Years of Experience' },
];

const PROJECTS = [
    {
        title: 'E-Commerce Website for Retail Brand',
        description: 'A scalable online store with seamless checkout and mobile optimization.',
        tag: 'Web Design',
    },
    {
        title: 'Restaurant Branding & Website',
        description: 'Complete brand identity with menu design and a responsive, SEO-ready website.',
        tag: 'Branding',
    },
    {
        title: 'AI Chatbot Integration',
        description: 'Smart automation for a service business that boosted customer engagement.',
        tag: 'AI Automation',
    },
    {
        title: 'SEO Campaign for Healthcare Provider',
        description: 'Local SEO and content strategy that improved search visibility significantly.',
        tag: 'SEO',
    },
    {
        title: 'Digital Marketing Campaign',
        description: 'Multi-channel ad campaign generating qualified leads for a growing startup.',
        tag: 'Marketing',
    },
    {
        title: 'Fintech Dashboard',
        description: 'Custom web app with secure dashboards and workflow automation.',
        tag: 'App Development',
    },
];

const PROCESS_STEPS = [
    { number: '1', title: 'Discovery', description: 'Understanding your goals and requirements.' },
    { number: '2', title: 'Strategy', description: 'Crafting a tailored plan and approach.' },
    { number: '3', title: 'Development', description: 'Building and coding the solution.' },
    { number: '4', title: 'Launch', description: 'Deploying the final product live.' },
];

const TESTIMONIALS = [
    {
        quote: "Their maintenance service has been a lifesaver for us. They're quick to respond and fix any issues, and their proactive approach helps us avoid problems before they start.",
        name: 'Ethan Robinson',
        role: 'CFO, FinTrack Corp.',
    },
    {
        quote: 'Working with them was a breath of fresh air. Their professionalism, creativity, and technical expertise blew us away, and they executed beyond our expectations.',
        name: 'John Smith',
        role: 'COO, TechSolutions Inc.',
    },
    {
        quote: 'We entrusted them with a complex software project, and they delivered beyond expectations. Their technical expertise and commitment to quality are unmatched.',
        name: 'Jessica Taylor',
        role: 'CEO, Quantum Analytics',
    },
];

export default function PortfolioPage() {
    return (
        <main className="portfolio-page">

            <style>{`
                .portfolio-page {
                    --pm-bg: #f7fbfc;
                    --pm-surface: rgba(255,255,255,.88);
                    --pm-ink: #08111f;
                    --pm-muted: #64748b;
                    --pm-line: #e2e8f0;
                    --pm-cyan: #08abc8;
                    --pm-cyan-dark: #078da8;
                    width: 100%;
                    min-height: 100vh;
                    overflow: hidden;
                    background:
                        radial-gradient(circle at 10% 0%, rgba(8,171,200,.10), transparent 28%),
                        radial-gradient(circle at 90% 18%, rgba(8,171,200,.08), transparent 24%),
                        var(--pm-bg);
                    color: var(--pm-ink);
                    font-family: Inter, Arial, sans-serif;
                }

                .portfolio-page *,
                .portfolio-page *::before,
                .portfolio-page *::after { box-sizing: border-box; }

                .portfolio-page .section {
                    position: relative;
                    width: 100%;
                    padding: 92px 0;
                }

                .portfolio-page .container {
                    width: min(1180px, calc(100% - 48px));
                    margin: 0 auto;
                }

                .portfolio-page .hero-section {
                    padding: 110px 0 84px;
                    text-align: center;
                    border-bottom: 1px solid rgba(226,232,240,.8);
                    background:
                        linear-gradient(180deg, rgba(255,255,255,.96), rgba(247,251,252,.7));
                }

                .portfolio-page .hero-section::before {
                    content: "";
                    position: absolute;
                    width: 520px;
                    height: 520px;
                    border: 1px solid rgba(8,171,200,.10);
                    border-radius: 50%;
                    top: -300px;
                    right: -120px;
                    pointer-events: none;
                }

                .portfolio-page .hero-kicker {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 18px;
                    color: var(--pm-cyan-dark);
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: .16em;
                    text-transform: uppercase;
                }

                .portfolio-page .hero-kicker::before,
                .portfolio-page .hero-kicker::after {
                    content: "";
                    width: 28px;
                    height: 2px;
                    border-radius: 999px;
                    background: var(--pm-cyan);
                }

                .portfolio-page .section-title {
                    max-width: 850px;
                    margin: 0 auto;
                    color: var(--pm-ink);
                    font-size: clamp(2.5rem, 6vw, 4.6rem);
                    line-height: 1.02;
                    letter-spacing: -.055em;
                    font-weight: 850;
                }

                .portfolio-page .section-subtitle {
                    max-width: 680px;
                    margin: 18px auto 0;
                    color: var(--pm-muted);
                    font-size: 16px;
                    line-height: 1.8;
                }

                .portfolio-page .stats-section {
                    padding: 0 0 10px;
                }

                .portfolio-page .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    margin-top: -34px;
                    position: relative;
                    z-index: 2;
                    overflow: hidden;
                    border: 1px solid var(--pm-line);
                    border-radius: 18px;
                    background: rgba(255,255,255,.92);
                    box-shadow: 0 22px 55px rgba(15,23,42,.08);
                    backdrop-filter: blur(12px);
                }

                .portfolio-page .stat-item {
                    padding: 30px 24px;
                    text-align: center;
                    position: relative;
                }

                .portfolio-page .stat-item + .stat-item::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 28px;
                    bottom: 28px;
                    width: 1px;
                    background: var(--pm-line);
                }

                .portfolio-page .stat-number {
                    color: var(--pm-ink);
                    font-size: clamp(2rem, 4vw, 2.75rem);
                    line-height: 1;
                    letter-spacing: -.04em;
                    font-weight: 850;
                }

                .portfolio-page .stat-number span { color: var(--pm-cyan); }

                .portfolio-page .stat-label {
                    margin-top: 9px;
                    color: var(--pm-muted);
                    font-size: 13px;
                    font-weight: 600;
                }

                .portfolio-page .section-heading-wrap {
                    margin-bottom: 42px;
                    text-align: center;
                }

                .portfolio-page .section-heading-wrap .section-title {
                    font-size: clamp(1.9rem, 4vw, 2.65rem);
                    letter-spacing: -.04em;
                }

                .portfolio-page .section-heading-wrap .section-subtitle {
                    margin-top: 12px;
                }

                .portfolio-page .project-grid,
                .portfolio-page .process-grid,
                .portfolio-page .testimonial-grid {
                    display: grid;
                    gap: 20px;
                }

                .portfolio-page .project-grid {
                    grid-template-columns: repeat(3, 1fr);
                }

                .portfolio-page .card {
                    position: relative;
                    padding: 28px;
                    border: 1px solid var(--pm-line);
                    border-radius: 18px;
                    background: var(--pm-surface);
                    box-shadow: 0 12px 35px rgba(15,23,42,.045);
                    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
                }

                .portfolio-page .card::after {
                    content: "";
                    position: absolute;
                    left: 28px;
                    right: 28px;
                    top: 0;
                    height: 2px;
                    border-radius: 999px;
                    background: linear-gradient(90deg, transparent, var(--pm-cyan), transparent);
                    opacity: 0;
                    transition: opacity .25s ease;
                }

                .portfolio-page .card:hover {
                    transform: translateY(-7px);
                    border-color: rgba(8,171,200,.32);
                    box-shadow: 0 22px 50px rgba(15,23,42,.10);
                }

                .portfolio-page .card:hover::after { opacity: 1; }

                .portfolio-page .project-card {
                    min-height: 245px;
                    display: flex;
                    flex-direction: column;
                }

                .portfolio-page .tag {
                    align-self: flex-start;
                    display: inline-flex;
                    align-items: center;
                    padding: 6px 10px;
                    margin-bottom: 22px;
                    border: 1px solid rgba(8,171,200,.20);
                    border-radius: 999px;
                    background: rgba(8,171,200,.07);
                    color: var(--pm-cyan-dark);
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: .08em;
                    text-transform: uppercase;
                }

                .portfolio-page .card h3 {
                    margin: 0 0 10px;
                    color: var(--pm-ink);
                    font-size: 18px;
                    line-height: 1.35;
                    letter-spacing: -.02em;
                }

                .portfolio-page .card p {
                    color: var(--pm-muted);
                    font-size: 14px;
                    line-height: 1.7;
                }

                .portfolio-page .project-link {
                    margin-top: auto;
                    padding-top: 22px;
                    color: var(--pm-ink);
                    font-size: 13px;
                    font-weight: 800;
                    text-decoration: none;
                }

                .portfolio-page .project-link span {
                    color: var(--pm-cyan);
                    transition: margin-left .2s ease;
                }

                .portfolio-page .project-link:hover span { margin-left: 5px; }

                .portfolio-page .process-section {
                    background:
                        linear-gradient(180deg, #eef8fa 0%, #f7fbfc 100%);
                    border-top: 1px solid rgba(226,232,240,.8);
                    border-bottom: 1px solid rgba(226,232,240,.8);
                }

                .portfolio-page .process-grid {
                    grid-template-columns: repeat(4, 1fr);
                    position: relative;
                }

                .portfolio-page .process-grid::before {
                    content: "";
                    position: absolute;
                    top: 47px;
                    left: 12%;
                    right: 12%;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #b8dfe6, transparent);
                }

                .portfolio-page .process-card {
                    text-align: center;
                    padding: 24px 20px;
                    background: transparent;
                    border: 0;
                    box-shadow: none;
                }

                .portfolio-page .process-number {
                    position: relative;
                    z-index: 1;
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                    border: 1px solid rgba(8,171,200,.35);
                    border-radius: 50%;
                    background: white;
                    color: var(--pm-cyan-dark);
                    font-size: 14px;
                    font-weight: 850;
                    box-shadow: 0 8px 22px rgba(8,171,200,.12);
                }

                .portfolio-page .process-card h3 { margin-bottom: 8px; }
                .portfolio-page .process-card p { margin: 0; }

                .portfolio-page .testimonial-grid {
                    grid-template-columns: repeat(3, 1fr);
                }

                .portfolio-page .testimonial-card {
                    min-height: 245px;
                    display: flex;
                    flex-direction: column;
                }

                .portfolio-page .quote-mark {
                    color: var(--pm-cyan);
                    font-size: 42px;
                    line-height: .8;
                    font-weight: 900;
                    margin-bottom: 12px;
                }

                .portfolio-page .testimonial-quote {
                    margin-bottom: 24px !important;
                    color: #475569 !important;
                    font-size: 14px !important;
                    line-height: 1.8 !important;
                }

                .portfolio-page .testimonial-person { margin-top: auto; }
                .portfolio-page .testimonial-name { color: var(--pm-ink); font-weight: 800; }
                .portfolio-page .testimonial-role { margin-top: 4px; color: #94a3b8; font-size: 12px; }

                .portfolio-page .cta-section {
                    padding: 100px 0;
                    background: #07101d;
                    color: white;
                }

                .portfolio-page .cta-section::before {
                    content: "";
                    position: absolute;
                    width: 600px;
                    height: 600px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    border: 1px solid rgba(8,171,200,.14);
                    border-radius: 50%;
                    box-shadow:
                        0 0 0 70px rgba(8,171,200,.025),
                        0 0 0 140px rgba(8,171,200,.018);
                }

                .portfolio-page .cta-inner {
                    position: relative;
                    z-index: 1;
                    text-align: center;
                }

                .portfolio-page .cta-kicker {
                    color: #2bd0e8;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: .16em;
                    text-transform: uppercase;
                }

                .portfolio-page .cta-title {
                    margin: 14px auto 0;
                    max-width: 700px;
                    color: white;
                    font-size: clamp(2rem, 5vw, 3.4rem);
                    line-height: 1.08;
                    letter-spacing: -.045em;
                    font-weight: 850;
                }

                .portfolio-page .cta-text {
                    max-width: 620px;
                    margin: 16px auto 0;
                    color: #a8b6c8;
                    font-size: 15px;
                    line-height: 1.8;
                }

                .portfolio-page .cta-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 9px;
                    margin-top: 28px;
                    padding: 13px 22px;
                    border: 1px solid var(--pm-cyan);
                    border-radius: 999px;
                    background: var(--pm-cyan);
                    color: white;
                    font-size: 13px;
                    font-weight: 800;
                    box-shadow: 0 12px 30px rgba(8,171,200,.22);
                    transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
                }

                .portfolio-page .cta-button:hover {
                    transform: translateY(-2px);
                    background: var(--pm-cyan-dark);
                    box-shadow: 0 16px 36px rgba(8,171,200,.30);
                }

                @media (max-width: 900px) {
                    .portfolio-page .project-grid,
                    .portfolio-page .testimonial-grid { grid-template-columns: repeat(2, 1fr); }
                    .portfolio-page .process-grid { grid-template-columns: repeat(2, 1fr); }
                    .portfolio-page .process-grid::before { display: none; }
                }

                @media (max-width: 640px) {
                    .portfolio-page .section { padding: 68px 0; }
                    .portfolio-page .container { width: min(100% - 32px, 520px); }
                    .portfolio-page .hero-section { padding: 76px 0 70px; }
                    .portfolio-page .stats-grid,
                    .portfolio-page .project-grid,
                    .portfolio-page .testimonial-grid,
                    .portfolio-page .process-grid { grid-template-columns: 1fr; }
                    .portfolio-page .stat-item + .stat-item::before { display: none; }
                    .portfolio-page .stat-item + .stat-item { border-top: 1px solid var(--pm-line); }
                    .portfolio-page .section-heading-wrap { margin-bottom: 30px; }
                    .portfolio-page .card { padding: 24px; }
                    .portfolio-page .cta-section { padding: 76px 0; }
                }
            `}</style>

            {/* HERO */}
            <section className="section hero-section">
                <div className="container">
                    <div className="hero-kicker">Selected Work</div>
                    <h1 className="section-title">Our Portfolio</h1>
                    <p className="section-subtitle">
                        Explore the projects we've delivered for founders, teams, and growing brands,
                        showcasing creativity, functionality, and measurable results.
                    </p>
                </div>
            </section>

            {/* STATS */}
            <section className="section stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="stat-item">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECT GRID */}
            <section className="section">
                <div className="container">
                    <div className="section-heading-wrap">
                        <h2 className="section-title">
                            Showcasing Work That Drives Impact
                        </h2>
                        <p className="section-subtitle">
                        Our portfolio reflects the range of industries and clients we've served — each
                        project combines design, technology, and strategy to help businesses grow.
                        </p>
                    </div>

                    <div className="project-grid">
                        {PROJECTS.map((project) => (
                            <div key={project.title} className="card project-card">
                                <span className="tag">
                                    {project.tag}
                                </span>
                                <h3>{project.title}</h3>
                                <p style={{ color: '#475569', marginBottom: '1rem' }}>{project.description}</p>
                                <a href="#" className="project-link">
                                    View project details <span>→</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WORK PROCESS */}
            <section className="section process-section">
                <div className="container">
                    <div className="section-heading-wrap">
                        <h2 className="section-title">
                            Seamless Process, Stellar Solutions
                        </h2>
                        <p className="section-subtitle">
                        Here's how we turn your ideas into digital solutions, from first conversation to
                        launch day.
                        </p>
                    </div>

                    <div className="process-grid">
                        {PROCESS_STEPS.map((step) => (
                            <div key={step.number} className="card process-card">
                                <div className="process-number">
                                    {step.number}
                                </div>
                                <h3>{step.title}</h3>
                                <p style={{ color: '#475569', marginBottom: 0 }}>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="section">
                <div className="container">
                    <div className="section-heading-wrap">
                        <h2 className="section-title">
                            Our Success, Echoed by Our Clients
                        </h2>
                        <p className="section-subtitle">
                        Real feedback from the businesses we've worked with — the true measure of our
                        work.
                        </p>
                    </div>

                    <div className="testimonial-grid">
                        {TESTIMONIALS.map((testimonial) => (
                            <div key={testimonial.name} className="card testimonial-card">
                                <div className="quote-mark">“</div>
                                <p className="testimonial-quote">"{testimonial.quote}"</p>
                                <div className="testimonial-person">
                                    <div className="testimonial-name">{testimonial.name}</div>
                                    <div className="testimonial-role">{testimonial.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-inner">
                        <div className="cta-kicker">Start Something Great</div>
                        <h2 className="cta-title">Let's Build Your Success Story</h2>
                        <p className="cta-text">
                            Impressed by our work? Let's create something extraordinary for your business —
                            get in touch to start your project.
                        </p>
                        <a href="/contact" className="cta-button">
                            Get in Touch <span>→</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}