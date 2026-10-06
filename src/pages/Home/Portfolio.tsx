import { useEffect, useRef } from 'react';

const projects = [
    {
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
        title: 'Agriculture & Farming',
        category: 'Agriculture',
        description:
            'Digital solutions for agriculture businesses, from modern websites to platforms that connect farmers with their customers.',
    },
    {
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85',
        title: 'Pharmaceutical',
        category: 'Pharmaceutical',
        description:
            'Professional digital experiences for pharmaceutical companies, healthcare brands, and medical businesses.',
    },
    {
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85',
        title: 'Energy & Solar',
        category: 'Energy',
        description:
            'High-performance websites and digital solutions for solar, renewable energy, and sustainability businesses.',
    },
    {
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85',
        title: 'Healthcare',
        category: 'Healthcare',
        description:
            'User-friendly digital experiences designed for healthcare providers, clinics, and medical professionals.',
    },
    {
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
        title: 'Professional Services',
        category: 'Professional Services',
        description:
            'Modern websites and digital solutions for consultants, agencies, legal firms, and other professional businesses.',
    },
];

export default function Portfolio() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const isPaused = useRef(false);

    /*
     * Automatically move the cards
     */
    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        const interval = setInterval(() => {
            if (isPaused.current) return;

            const cardWidth = 356;

            if (
                slider.scrollLeft + slider.clientWidth >=
                slider.scrollWidth - 10
            ) {
                slider.scrollTo({
                    left: 0,
                    behavior: 'smooth',
                });
            } else {
                slider.scrollBy({
                    left: cardWidth,
                    behavior: 'smooth',
                });
            }
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: direction === 'right' ? 356 : -356,
            behavior: 'smooth',
        });
    };

    return (
        <section
            style={{
                background: '#fff',
                padding: '4rem 0',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    maxWidth: 1400,
                    margin: '0 auto',
                    padding: '0 3rem',
                    boxSizing: 'border-box',
                }}
            >
                {/* Heading */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '2rem',
                        marginBottom: '2rem',
                    }}
                >
                    <div>
                        <p
                            style={{
                                color: '#0369a1',
                                fontWeight: 700,
                                fontSize: '0.8rem',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                margin: '0 0 0.5rem',
                            }}
                        >
                            Industries We Serve
                        </p>

                        <h2
                            style={{
                                margin: 0,
                                color: '#303033',
                                fontSize: 'clamp(1.8rem, 3vw, 2.7rem)',
                                lineHeight: 1.15,
                                letterSpacing: '-0.025em',
                                fontWeight: 750,
                                maxWidth: 700,
                            }}
                        >
                            We don't just build websites,
                            <br />
                            we understand your industry.
                        </h2>

                        <p
                            style={{
                                color: '#64748b',
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                                margin: '0.75rem 0 0',
                                maxWidth: 600,
                            }}
                        >
                            We create digital solutions tailored to the
                            unique needs of agriculture, pharmaceutical,
                            healthcare, energy, and professional businesses.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '0.6rem',
                            flexShrink: 0,
                        }}
                    >
                        <button
                            onClick={() => scroll('left')}
                            aria-label="Previous industries"
                            style={{
                                width: 38,
                                height: 38,
                                borderRadius: '50%',
                                border: '1.5px solid #94a3b8',
                                background: '#fff',
                                color: '#475569',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 18,
                                cursor: 'pointer',
                            }}
                        >
                            ←
                        </button>

                        <button
                            onClick={() => scroll('right')}
                            aria-label="Next industries"
                            style={{
                                width: 38,
                                height: 38,
                                borderRadius: '50%',
                                border: 'none',
                                background: '#303033',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 18,
                                cursor: 'pointer',
                            }}
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div
                    ref={sliderRef}
                    onMouseEnter={() => {
                        isPaused.current = true;
                    }}
                    onMouseLeave={() => {
                        isPaused.current = false;
                    }}
                    style={{
                        display: 'flex',
                        gap: '1.25rem',
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 'none',
                        paddingBottom: '0.5rem',
                        marginRight: '-3rem',
                    }}
                >
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            style={{
                                position: 'relative',
                                flex: '0 0 330px',
                                height: 460,
                                borderRadius: 24,
                                overflow: 'hidden',
                                background: '#e2e8f0',
                                cursor: 'pointer',
                            }}
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    transition:
                                        'transform 0.5s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                        'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                        'scale(1)';
                                }}
                            />

                            {/* Gradient */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0.02) 30%, rgba(0,0,0,0.78) 100%)',
                                }}
                            />

                            {/* Category */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 16,
                                    left: 16,
                                    padding: '0.4rem 0.65rem',
                                    borderRadius: 999,
                                    background:
                                        'rgba(255,255,255,0.92)',
                                    color: '#303033',
                                    fontSize: 10,
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em',
                                }}
                            >
                                {project.category}
                            </div>

                            {/* Content */}
                            <div
                                style={{
                                    position: 'absolute',
                                    left: 20,
                                    right: 20,
                                    bottom: 20,
                                    color: '#fff',
                                }}
                            >
                                <h3
                                    style={{
                                        margin: '0 0 0.4rem',
                                        fontSize: '1.35rem',
                                        lineHeight: 1.15,
                                        fontWeight: 750,
                                    }}
                                >
                                    {project.title}
                                </h3>

                                <p
                                    style={{
                                        margin: '0 0 0.9rem',
                                        fontSize: '0.82rem',
                                        lineHeight: 1.5,
                                        color: 'rgba(255,255,255,0.82)',
                                    }}
                                >
                                    {project.description}
                                </p>

                                <span
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 6,
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                    }}
                                >
                                    Explore Industry
                                    <span style={{ fontSize: 15 }}>
                                        →
                                    </span>
                                </span>
                            </div>
                        </article>
                    ))}

                    <div
                        style={{
                            flex: '0 0 2rem',
                        }}
                    />
                </div>
            </div>

            {/* Responsive styling */}
            <style>
                {`
                    div::-webkit-scrollbar {
                        display: none;
                    }

                    @media (max-width: 768px) {
                        section {
                            padding: 3rem 0 !important;
                        }

                        section > div {
                            padding: 0 1.25rem !important;
                        }

                        section h2 {
                            font-size: 1.8rem !important;
                        }

                        section h2 br {
                            display: none;
                        }

                        section article {
                            flex-basis: 290px !important;
                            height: 420px !important;
                            border-radius: 22px !important;
                        }

                        section > div > div:first-child {
                            align-items: flex-end !important;
                        }
                    }

                    @media (max-width: 550px) {
                        section article {
                            flex-basis: 82vw !important;
                        }
                    }
                `}
            </style>
        </section>
    );
}