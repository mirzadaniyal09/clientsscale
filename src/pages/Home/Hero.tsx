export default function Hero() {
    return (
        <>
            {/* HERO */}
            <section
                style={{
                    position: 'relative',
                    padding: '1.5rem 0 5rem',
                    background: '#ffffff',
                    color: '#0f172a',
                    overflow: 'hidden',
                }}
            >
                {/* Subtle background decoration */}
                <div
                    style={{
                        position: 'absolute',
                        width: 500,
                        height: 500,
                        borderRadius: '50%',
                        background: 'rgba(14, 165, 233, 0.06)',
                        filter: 'blur(80px)',
                        top: -250,
                        right: -150,
                        pointerEvents: 'none',
                    }}
                />

                {/* Navigation removed (using external SystemMapAI nav) */}

                {/* Hero content */}
                <div
                    style={{
                        maxWidth: 1200,
                        margin: '0 auto',
                        padding: '0 1rem',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1.05fr 0.95fr',
                            gap: '4rem',
                            alignItems: 'center',
                        }}
                        className="hero-grid"
                    >
                        {/* Left */}
                        <div>

                            <h1
                                style={{
                                    fontSize:
                                        'clamp(2.5rem, 5vw, 4.3rem)',
                                    lineHeight: 1.04,
                                    margin: '1.25rem 0 1.25rem',
                                    fontWeight: 800,
                                    letterSpacing: '-0.045em',
                                    color: '#0f172a',
                                    maxWidth: 700,
                                }}
                            >
                                AI-powered digital
                                <br />
                                marketing that
                                <br />
                                <span style={{ color: '#0284c7' }}>
                                    drives growth.
                                </span>
                            </h1>

                            <p
                                style={{
                                    fontSize: '1rem',
                                    lineHeight: 1.7,
                                    color: '#64748b',
                                    maxWidth: '43rem',
                                    margin: 0,
                                }}
                            >
                                SystemMapAI helps U.S. businesses grow with
                                intelligent marketing, automation, SEO, web
                                development, and data-driven strategies.
                            </p>

                            {/* Buttons */}
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '0.8rem',
                                    flexWrap: 'wrap',
                                    marginTop: '2rem',
                                }}
                            >
                                <a
                                    href="/contact-us"
                                    style={{
                                        background:
                                            'linear-gradient(90deg, #0284c7, #0ea5e9)',
                                        color: '#fff',
                                        padding:
                                            '0.75rem 1.15rem',
                                        borderRadius: 8,
                                        fontWeight: 700,
                                        fontSize: '0.9rem',
                                        textDecoration: 'none',
                                        boxShadow:
                                            '0 10px 25px rgba(14,165,233,0.18)',
                                    }}
                                >
                                    Contact Us →
                                </a>

                                <a
                                    href="/services"
                                    style={{
                                        background: '#ffffff',
                                        color: '#0f172a',
                                        padding:
                                            '0.7rem 1.1rem',
                                        borderRadius: 8,
                                        border: '1px solid #cbd5e1',
                                        fontWeight: 700,
                                        fontSize: '0.9rem',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Explore Services
                                </a>
                            </div>

                            {/* Trust points */}
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '1.5rem',
                                    flexWrap: 'wrap',
                                    marginTop: '2rem',
                                    paddingTop: '1.5rem',
                                    borderTop: '1px solid #e2e8f0',
                                }}
                            >
                                <div>
                                    <strong
                                        style={{
                                            display: 'block',
                                            color: '#0f172a',
                                            fontSize: '1rem',
                                        }}
                                    >
                                        AI-Powered
                                    </strong>

                                    <span
                                        style={{
                                            color: '#64748b',
                                            fontSize: '0.78rem',
                                        }}
                                    >
                                        Smarter strategies
                                    </span>
                                </div>

                                <div>
                                    <strong
                                        style={{
                                            display: 'block',
                                            color: '#0f172a',
                                            fontSize: '1rem',
                                        }}
                                    >
                                        Data Driven
                                    </strong>

                                    <span
                                        style={{
                                            color: '#64748b',
                                            fontSize: '0.78rem',
                                        }}
                                    >
                                        Measurable results
                                    </span>
                                </div>

                                <div>
                                    <strong
                                        style={{
                                            display: 'block',
                                            color: '#0f172a',
                                            fontSize: '1rem',
                                        }}
                                    >
                                        U.S. Focused
                                    </strong>

                                    <span
                                        style={{
                                            color: '#64748b',
                                            fontSize: '0.78rem',
                                        }}
                                    >
                                        Built for growth
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right image */}
                        <div
                            style={{
                                position: 'relative',
                                borderRadius: 24,
                                overflow: 'hidden',
                                border: '1px solid #e2e8f0',
                                background: '#ffffff',
                                boxShadow:
                                    '0 25px 60px rgba(15,23,42,0.10)',
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                                alt="Marketing team collaborating around a laptop"
                                style={{
                                    width: '100%',
                                    height: 470,
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />

                            {/* Small floating card */}
                            <div
                                style={{
                                    position: 'absolute',
                                    left: 20,
                                    bottom: 20,
                                    background:
                                        'rgba(255,255,255,0.94)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '0.8rem 1rem',
                                    borderRadius: 12,
                                    border: '1px solid #e2e8f0',
                                    boxShadow:
                                        '0 10px 30px rgba(15,23,42,0.10)',
                                }}
                            >
                                <strong
                                    style={{
                                        display: 'block',
                                        color: '#0f172a',
                                        fontSize: '0.9rem',
                                    }}
                                >
                                    Smarter Marketing
                                </strong>

                                <span
                                    style={{
                                        color: '#64748b',
                                        fontSize: '0.72rem',
                                    }}
                                >
                                    Powered by data + AI
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          

            {/* QUALITY ASSURANCE */}
            <section
                style={{
                    padding: '4.5rem 0',
                    background: '#ffffff',
                }}
            >
                <div
                    style={{
                        maxWidth: 1200,
                        margin: '0 auto',
                        padding: '0 1rem',
                    }}
                >
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '3rem',
                            alignItems: 'center',
                        }}
                        className="qa-grid"
                    >
                        {/* Image */}
                        <div
                            style={{
                                width: '100%',
                                height: 480,
                                overflow: 'hidden',
                                borderRadius: 20,
                                border: '1px solid #e2e8f0',
                                boxShadow:
                                    '0 20px 50px rgba(15,23,42,0.08)',
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
                                alt="Team reviewing a project together"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <p
                                style={{
                                    margin: 0,
                                    color: '#0369a1',
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Built For Results
                            </p>

                            <h2
                                style={{
                                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                                    margin: '0.6rem 0 0',
                                    lineHeight: 1.1,
                                    fontWeight: 800,
                                    color: '#0f172a',
                                }}
                            >
                                Quality is built into
                                <br />
                                everything we do.
                            </h2>

                            <p
                                style={{
                                    color: '#64748b',
                                    marginTop: 12,
                                    lineHeight: 1.7,
                                    maxWidth: 560,
                                    fontSize: '0.95rem',
                                }}
                            >
                                We make sure every campaign and digital
                                product meets high standards before launch.
                                Testing, review, reporting, and continuous
                                improvement are part of our process.
                            </p>

                            <ul
                                style={{
                                    marginTop: 22,
                                    padding: 0,
                                    listStyle: 'none',
                                }}
                            >
                                {[
                                    [
                                        'Automated QA',
                                        'Automated checks and monitoring to prevent regressions.',
                                    ],
                                    [
                                        'Manual Review',
                                        'Human validation for UX and conversion-critical flows.',
                                    ],
                                    [
                                        'Reporting & Improvements',
                                        'Actionable reports and continuous optimization.',
                                    ],
                                ].map(([title, text]) => (
                                    <li
                                        key={title}
                                        style={{
                                            display: 'flex',
                                            gap: 12,
                                            alignItems:
                                                'flex-start',
                                            marginBottom: 17,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 26,
                                                height: 26,
                                                flexShrink: 0,
                                                borderRadius: '50%',
                                                background:
                                                    '#e0f2fe',
                                                color: '#0284c7',
                                                display: 'flex',
                                                alignItems:
                                                    'center',
                                                justifyContent:
                                                    'center',
                                                fontWeight: 800,
                                                fontSize: 13,
                                            }}
                                        >
                                            ✓
                                        </div>

                                        <div>
                                            <strong
                                                style={{
                                                    display:
                                                        'block',
                                                    color: '#0f172a',
                                                    fontSize:
                                                        '0.9rem',
                                                }}
                                            >
                                                {title}
                                            </strong>

                                            <span
                                                style={{
                                                    color: '#64748b',
                                                    fontSize:
                                                        '0.8rem',
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                {text}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="/contact-us"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    marginTop: 8,
                                    background:
                                        'linear-gradient(90deg, #0284c7, #0ea5e9)',
                                    color: '#fff',
                                    padding:
                                        '0.75rem 1.1rem',
                                    borderRadius: 8,
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    textDecoration: 'none',
                                    boxShadow:
                                        '0 8px 20px rgba(14,165,233,0.15)',
                                }}
                            >
                                Contact Us →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Responsive styles - no separate CSS file needed */}
            <style>
                {`
                    .hero-nav-link {
                        color: #64748b;
                        text-decoration: none;
                        font-weight: 600;
                        font-size: 0.85rem;
                        transition: color 0.2s ease;
                    }

                    .hero-nav-link:hover {
                        color: #0284c7;
                    }

                    @media (max-width: 900px) {
                        .hero-nav {
                            display: none !important;
                        }

                        .hero-grid {
                            grid-template-columns: 1fr !important;
                            gap: 2.5rem !important;
                        }

                        .hero-grid > div:last-child {
                            max-width: 650px;
                            width: 100%;
                            margin: 0 auto;
                        }

                        .feature-grid {
                            grid-template-columns: repeat(2, 1fr) !important;
                        }

                        .qa-grid {
                            grid-template-columns: 1fr !important;
                        }
                    }

                    @media (max-width: 600px) {
                        nav {
                            margin-bottom: 2.5rem !important;
                        }

                        nav > a:last-child {
                            font-size: 0.75rem !important;
                            padding: 0.55rem 0.75rem !important;
                        }

                        .feature-grid {
                            grid-template-columns: 1fr !important;
                        }

                        .hero-grid h1 {
                            font-size: 2.5rem !important;
                        }

                        .qa-grid > div:first-child {
                            height: 350px !important;
                        }
                    }
                `}
            </style>
        </>
    );
}