import { Link } from 'react-router-dom';

const services = [
    {
        number: '01',
        icon: 'WEB',
        title: 'Web Design & Development',
        text: 'Fast, modern websites built around your brand, customers, SEO, and business goals.',
    },
    {
        number: '02',
        icon: 'GROW',
        title: 'Digital Marketing',
        text: 'AI-assisted SEO, PPC, and social campaigns designed to attract qualified customers.',
    },
    {
        number: '03',
        icon: 'SEO',
        title: 'SEO & Content Strategy',
        text: 'Search-focused content and technical SEO strategies that build long-term organic visibility.',
    },
    {
        number: '04',
        icon: 'AI',
        title: 'AI Automation & Chatbots',
        text: 'Smart workflows and AI assistants that capture leads, automate tasks, and save your team time.',
    },
    {
        number: '05',
        icon: 'APP',
        title: 'App Development',
        text: 'Web and mobile applications designed to simplify operations and improve customer experiences.',
    },
    {
        number: '06',
        icon: 'BRAND',
        title: 'Branding & Creative',
        text: 'Distinctive visual identities, campaigns, and creative assets that make your business memorable.',
    },
];

export default function ServicesOverview() {
    return (
        <section
            style={{
                background: '#ffffff',
                padding: '4.5rem 0',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    padding: '0 1rem',
                }}
            >
                {/* Header */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        gap: '2rem',
                        marginBottom: '2.5rem',
                    }}
                    className="services-header"
                >
                    <div style={{ maxWidth: 680 }}>
                        <p
                            style={{
                                color: '#0369a1',
                                fontWeight: 800,
                                fontSize: '0.75rem',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                margin: 0,
                            }}
                        >
                            What We Do
                        </p>

                        <h2
                            style={{
                                color: '#0f172a',
                                fontSize:
                                    'clamp(2rem, 4vw, 2.8rem)',
                                lineHeight: 1.1,
                                letterSpacing: '-0.035em',
                                margin:
                                    '0.6rem 0 0.75rem',
                                fontWeight: 800,
                            }}
                        >
                            Everything you need to
                            <br />
                            <span style={{ color: '#0284c7' }}>
                                grow digitally.
                            </span>
                        </h2>

                        <p
                            style={{
                                color: '#64748b',
                                fontSize: '0.92rem',
                                lineHeight: 1.65,
                                margin: 0,
                                maxWidth: 620,
                            }}
                        >
                            From websites and SEO to AI automation
                            and digital marketing, we bring the
                            essential pieces of your digital growth
                            strategy together.
                        </p>
                    </div>

                    <Link
                        to="/services"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 7,
                            color: '#0369a1',
                            fontSize: '0.85rem',
                            fontWeight: 800,
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            paddingBottom: 4,
                        }}
                    >
                        Explore all services
                        <span style={{ fontSize: 16 }}>→</span>
                    </Link>
                </div>

                {/* Services */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(3, minmax(0, 1fr))',
                        gap: '1rem',
                    }}
                    className="services-grid"
                >
                    {services.map((service, index) => (
                        <Link
                            key={service.title}
                            to="/services"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                            }}
                        >
                            <article
                                style={{
                                    position: 'relative',
                                    height: '100%',
                                    minHeight: 230,
                                    padding: '1.5rem',
                                    boxSizing: 'border-box',
                                    borderRadius: 18,
                                    border:
                                        index === 0
                                            ? '1px solid #bae6fd'
                                            : '1px solid #e2e8f0',
                                    background:
                                        index === 0
                                            ? '#f8fcff'
                                            : '#ffffff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden',
                                    transition:
                                        'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                        'translateY(-5px)';
                                    e.currentTarget.style.boxShadow =
                                        '0 18px 40px rgba(15,23,42,0.08)';
                                    e.currentTarget.style.borderColor =
                                        '#7dd3fc';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                        'translateY(0)';
                                    e.currentTarget.style.boxShadow =
                                        'none';

                                    e.currentTarget.style.borderColor =
                                        index === 0
                                            ? '#bae6fd'
                                            : '#e2e8f0';
                                }}
                            >
                                {/* Top line */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: 3,
                                        background:
                                            index === 0
                                                ? 'linear-gradient(90deg, #0284c7, #38bdf8)'
                                                : '#e0f2fe',
                                    }}
                                />

                                {/* Number + icon */}
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent:
                                            'space-between',
                                        marginBottom: '1.5rem',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 42,
                                            height: 42,
                                            borderRadius: 11,
                                            background:
                                                index === 0
                                                    ? '#e0f2fe'
                                                    : '#f1f5f9',
                                            color:
                                                index === 0
                                                    ? '#0284c7'
                                                    : '#475569',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent:
                                                'center',
                                            fontSize: 9,
                                            fontWeight: 900,
                                            letterSpacing: '0.03em',
                                        }}
                                    >
                                        {service.icon}
                                    </div>

                                    <span
                                        style={{
                                            color: '#94a3b8',
                                            fontSize: '0.72rem',
                                            fontWeight: 800,
                                        }}
                                    >
                                        {service.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3
                                    style={{
                                        color: '#0f172a',
                                        fontSize: '1.05rem',
                                        lineHeight: 1.25,
                                        margin: 0,
                                        fontWeight: 800,
                                    }}
                                >
                                    {service.title}
                                </h3>

                                <p
                                    style={{
                                        color: '#64748b',
                                        fontSize: '0.82rem',
                                        lineHeight: 1.6,
                                        margin:
                                            '0.65rem 0 0',
                                    }}
                                >
                                    {service.text}
                                </p>

                                {/* Arrow */}
                                <div
                                    style={{
                                        marginTop: 'auto',
                                        paddingTop: '1.25rem',
                                        color:
                                            index === 0
                                                ? '#0284c7'
                                                : '#64748b',
                                        fontSize: '0.78rem',
                                        fontWeight: 800,
                                    }}
                                >
                                    Learn more
                                    <span
                                        style={{
                                            marginLeft: 6,
                                            fontSize: 15,
                                        }}
                                    >
                                        →
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div
                    style={{
                        marginTop: '2rem',
                        padding: '1.25rem 1.5rem',
                        borderRadius: 15,
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        flexWrap: 'wrap',
                    }}
                >
                    <div>
                        <strong
                            style={{
                                display: 'block',
                                color: '#0f172a',
                                fontSize: '0.9rem',
                            }}
                        >
                            Not sure what your business needs?
                        </strong>

                        <span
                            style={{
                                color: '#64748b',
                                fontSize: '0.78rem',
                            }}
                        >
                            Let's find the right digital strategy
                            for you.
                        </span>
                    </div>

                    <Link
                        to="/contact-us"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 7,
                            background:
                                'linear-gradient(90deg, #0284c7, #0ea5e9)',
                            color: '#ffffff',
                            padding: '0.65rem 0.95rem',
                            borderRadius: 8,
                            fontSize: '0.8rem',
                            fontWeight: 800,
                            textDecoration: 'none',
                            boxShadow:
                                '0 8px 20px rgba(14,165,233,0.15)',
                        }}
                    >
                        Talk to Us →
                    </Link>
                </div>
            </div>

            {/* Responsive */}
            <style>
                {`
                    @media (max-width: 900px) {
                        .services-grid {
                            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
                        }

                        .services-header {
                            align-items: flex-start !important;
                            flex-direction: column !important;
                        }
                    }

                    @media (max-width: 600px) {
                        .services-grid {
                            grid-template-columns: 1fr !important;
                        }

                        .services-grid article {
                            min-height: 210px !important;
                        }
                    }
                `}
            </style>
        </section>
    );
}