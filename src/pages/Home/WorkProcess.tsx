import { useState } from 'react';

type Step = {
    number: string;
    title: string;
    text: string;
    tag: string;
};

type Technology = {
    name: string;
    slug: string;
    variant?: string;
};

const steps: Step[] = [
    {
        number: '01',
        title: 'Discovery',
        text: 'Understanding your goals, challenges, and business needs before anything else.',
        tag: 'Understand',
    },
    {
        number: '02',
        title: 'Strategy',
        text: 'Building a tailored roadmap for growth, technology, design, and execution.',
        tag: 'Plan',
    },
    {
        number: '03',
        title: 'Development',
        text: 'Designing and coding smart, scalable solutions that bring your strategy to life.',
        tag: 'Build',
    },
    {
        number: '04',
        title: 'Launch',
        text: 'Deploying your product and continuously optimizing it for real-world performance.',
        tag: 'Grow',
    },
];

const getLogo = (technology: Technology) => {
    const variant = technology.variant || 'original';

    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${technology.slug}/${technology.slug}-${variant}.svg`;
};

const tech: Record<string, Technology[]> = {
    'AI Development': [
        { name: 'Python', slug: 'python' },
        { name: 'TensorFlow', slug: 'tensorflow' },
        { name: 'PyTorch', slug: 'pytorch' },
        { name: 'OpenCV', slug: 'opencv' },
        { name: 'Jupyter', slug: 'jupyter' },
        { name: 'NumPy', slug: 'numpy' },
        { name: 'Pandas', slug: 'pandas' },
        { name: 'Scikit Learn', slug: 'scikitlearn' },
        { name: 'Keras', slug: 'keras' },
        { name: 'Matplotlib', slug: 'matplotlib' },
        { name: 'Anaconda', slug: 'anaconda' },
        { name: 'FastAPI', slug: 'fastapi' },
        { name: 'Flask', slug: 'flask' },
        { name: 'Django', slug: 'django' },
        { name: 'R Language', slug: 'r' },
        { name: 'C++', slug: 'cplusplus' },
        { name: 'Java', slug: 'java' },
        { name: 'PostgreSQL', slug: 'postgresql' },
        { name: 'MongoDB', slug: 'mongodb' },
        { name: 'Redis', slug: 'redis' },
        { name: 'Docker', slug: 'docker' },
        { name: 'Kubernetes', slug: 'kubernetes' },
        { name: 'Git', slug: 'git' },
        { name: 'Linux', slug: 'linux' },
        { name: 'Google Cloud', slug: 'googlecloud' },
        {
            name: 'AWS',
            slug: 'amazonwebservices',
            variant: 'original-wordmark',
        },
        { name: 'Azure', slug: 'azure' },
        { name: 'Apache Spark', slug: 'apachespark' },
        { name: 'Apache Kafka', slug: 'apachekafka' },
        { name: 'Hadoop', slug: 'hadoop' },
        { name: 'Selenium', slug: 'selenium' },
        { name: 'Bash', slug: 'bash' },
    ],

    'Web Development': [
        { name: 'React', slug: 'react' },
        { name: 'Next.js', slug: 'nextjs' },
        { name: 'Vue.js', slug: 'vuejs' },
        { name: 'Angular', slug: 'angular' },
        { name: 'Node.js', slug: 'nodejs' },
        { name: 'Express.js', slug: 'express' },
        { name: 'JavaScript', slug: 'javascript' },
        { name: 'TypeScript', slug: 'typescript' },
        { name: 'HTML5', slug: 'html5' },
        { name: 'CSS3', slug: 'css3' },
        { name: 'Tailwind CSS', slug: 'tailwindcss' },
        { name: 'Bootstrap', slug: 'bootstrap' },
        { name: 'Sass', slug: 'sass' },
        { name: 'Redux', slug: 'redux' },
        { name: 'Webpack', slug: 'webpack' },
        { name: 'Vite', slug: 'vitejs' },
        { name: 'jQuery', slug: 'jquery' },
        { name: 'PHP', slug: 'php' },
        { name: 'Laravel', slug: 'laravel' },
        { name: 'WordPress', slug: 'wordpress' },
        { name: 'Django', slug: 'django' },
        { name: 'Flask', slug: 'flask' },
        { name: 'GraphQL', slug: 'graphql' },
        { name: 'PostgreSQL', slug: 'postgresql' },
        { name: 'MySQL', slug: 'mysql' },
        { name: 'MongoDB', slug: 'mongodb' },
        { name: 'Firebase', slug: 'firebase' },
        { name: 'Git', slug: 'git' },
        { name: 'GitHub', slug: 'github' },
        { name: 'Nginx', slug: 'nginx' },
        { name: 'Docker', slug: 'docker' },
        { name: 'Jest', slug: 'jest' },
        { name: 'Figma', slug: 'figma' },
    ],

    'Blockchain Development': [
        { name: 'Ethereum', slug: 'ethereum' },
        { name: 'Solidity', slug: 'solidity' },
        { name: 'Rust', slug: 'rust' },
        { name: 'JavaScript', slug: 'javascript' },
        { name: 'TypeScript', slug: 'typescript' },
        { name: 'Node.js', slug: 'nodejs' },
        { name: 'React', slug: 'react' },
        { name: 'Next.js', slug: 'nextjs' },
        { name: 'Polygon', slug: 'polygon' },
        { name: 'Docker', slug: 'docker' },
        { name: 'Kubernetes', slug: 'kubernetes' },
        { name: 'PostgreSQL', slug: 'postgresql' },
        { name: 'MongoDB', slug: 'mongodb' },
        { name: 'Redis', slug: 'redis' },
        { name: 'Git', slug: 'git' },
        { name: 'GitHub', slug: 'github' },
        { name: 'Linux', slug: 'linux' },
        { name: 'Go', slug: 'go' },
        { name: 'Python', slug: 'python' },
        { name: 'Java', slug: 'java' },
        { name: 'C++', slug: 'cplusplus' },
        { name: 'GraphQL', slug: 'graphql' },
        {
            name: 'AWS',
            slug: 'amazonwebservices',
            variant: 'original-wordmark',
        },
        { name: 'Google Cloud', slug: 'googlecloud' },
        { name: 'Azure', slug: 'azure' },
        { name: 'Terraform', slug: 'terraform' },
        { name: 'Jenkins', slug: 'jenkins' },
        { name: 'Nginx', slug: 'nginx' },
        { name: 'RabbitMQ', slug: 'rabbitmq' },
        { name: 'Kotlin', slug: 'kotlin' },
        { name: 'Bash', slug: 'bash' },
    ],

    'Custom Software Development': [
        { name: 'C#', slug: 'csharp' },
        { name: '.NET', slug: 'dotnetcore' },
        { name: 'Java', slug: 'java' },
        { name: 'Spring', slug: 'spring' },
        { name: 'Python', slug: 'python' },
        { name: 'C++', slug: 'cplusplus' },
        { name: 'C', slug: 'c' },
        { name: 'Rust', slug: 'rust' },
        { name: 'Go', slug: 'go' },
        { name: 'PHP', slug: 'php' },
        { name: 'Laravel', slug: 'laravel' },
        { name: 'Ruby', slug: 'ruby' },
        { name: 'Rails', slug: 'rails' },
        { name: 'Kotlin', slug: 'kotlin' },
        { name: 'Swift', slug: 'swift' },
        { name: 'Scala', slug: 'scala' },
        { name: 'PostgreSQL', slug: 'postgresql' },
        { name: 'MySQL', slug: 'mysql' },
        { name: 'MongoDB', slug: 'mongodb' },
        { name: 'Redis', slug: 'redis' },
        { name: 'Docker', slug: 'docker' },
        { name: 'Kubernetes', slug: 'kubernetes' },
        { name: 'Git', slug: 'git' },
        { name: 'GitHub', slug: 'github' },
        { name: 'Jenkins', slug: 'jenkins' },
        {
            name: 'AWS',
            slug: 'amazonwebservices',
            variant: 'original-wordmark',
        },
        { name: 'Azure', slug: 'azure' },
        { name: 'Linux', slug: 'linux' },
        { name: 'RabbitMQ', slug: 'rabbitmq' },
        { name: 'Nginx', slug: 'nginx' },
        { name: 'Bash', slug: 'bash' },
        { name: 'Gradle', slug: 'gradle' },
    ],

    'Mobile App Development': [
        { name: 'React Native', slug: 'react' },
        { name: 'Flutter', slug: 'flutter' },
        { name: 'Android', slug: 'android' },
        { name: 'Kotlin', slug: 'kotlin' },
        { name: 'Java', slug: 'java' },
        { name: 'Swift', slug: 'swift' },
        { name: 'Apple', slug: 'apple' },
        { name: 'Dart', slug: 'dart' },
        { name: 'Firebase', slug: 'firebase' },
        { name: 'SQLite', slug: 'sqlite' },
        { name: 'Node.js', slug: 'nodejs' },
        { name: 'TypeScript', slug: 'typescript' },
        { name: 'JavaScript', slug: 'javascript' },
        { name: 'GraphQL', slug: 'graphql' },
        { name: 'PostgreSQL', slug: 'postgresql' },
        { name: 'MongoDB', slug: 'mongodb' },
        {
            name: 'AWS',
            slug: 'amazonwebservices',
            variant: 'original-wordmark',
        },
        { name: 'Google Cloud', slug: 'googlecloud' },
        { name: 'Azure', slug: 'azure' },
        { name: 'Docker', slug: 'docker' },
        { name: 'Git', slug: 'git' },
        { name: 'GitHub', slug: 'github' },
        { name: 'Figma', slug: 'figma' },
        { name: 'Jest', slug: 'jest' },
        { name: 'Python', slug: 'python' },
        { name: 'FastAPI', slug: 'fastapi' },
        { name: 'Django', slug: 'django' },
        { name: 'Redis', slug: 'redis' },
        { name: 'Kubernetes', slug: 'kubernetes' },
        { name: 'Nginx', slug: 'nginx' },
        { name: 'Linux', slug: 'linux' },
        { name: 'Webpack', slug: 'webpack' },
    ],
};

const categories = Object.keys(tech);

export default function WorkProcess() {
    const [active, setActive] = useState<string>(
        categories[0] ?? ''
    );

    // Prevents "Cannot read properties of undefined (reading 'map')"
    const activeTechnologies: Technology[] = tech[active] ?? [];

    return (
        <>
            {/* =========================================================
                WORK PROCESS
            ========================================================= */}

            <section
                className="section work-process"
                style={{
                    background: '#ffffff',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '90px 0',
                }}
            >
                {/* Background decoration */}
                <div
                    style={{
                        position: 'absolute',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'rgba(3, 105, 161, 0.06)',
                        filter: 'blur(20px)',
                        top: '-200px',
                        right: '-100px',
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        background: 'rgba(14, 165, 233, 0.05)',
                        filter: 'blur(20px)',
                        bottom: '-150px',
                        left: '-100px',
                    }}
                />

                <div
                    className="container"
                    style={{
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <div style={{ maxWidth: '700px' }}>
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '7px 14px',
                                borderRadius: '999px',
                                background: '#e0f2fe',
                                color: '#0369a1',
                                fontSize: '12px',
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                            }}
                        >
                            <span
                                style={{
                                    width: '7px',
                                    height: '7px',
                                    borderRadius: '50%',
                                    background: '#0ea5e9',
                                }}
                            />

                            Work Process
                        </div>

                        <h2
                            className="section-title"
                            style={{
                                marginTop: '18px',
                                marginBottom: '14px',
                                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                                lineHeight: 1.1,
                                color: '#0f172a',
                            }}
                        >
                            From idea to impact.
                            <br />

                            <span style={{ color: '#0369a1' }}>
                                We make it happen.
                            </span>
                        </h2>

                        <p
                            style={{
                                color: '#64748b',
                                maxWidth: '580px',
                                fontSize: '1.05rem',
                                lineHeight: 1.7,
                                margin: 0,
                            }}
                        >
                            We transform your ideas into powerful digital
                            solutions through a simple, transparent, and proven
                            development process.
                        </p>
                    </div>

                    {/* Process cards */}
                    <div
                        style={{
                            position: 'relative',
                            marginTop: '65px',
                        }}
                    >
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(220px, 1fr))',
                                gap: '24px',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            {steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    style={{
                                        position: 'relative',
                                        background: '#ffffff',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '20px',
                                        padding: '28px',
                                        minHeight: '270px',
                                        boxShadow:
                                            '0 10px 30px rgba(15, 23, 42, 0.05)',
                                        transition:
                                            'transform 0.25s ease, box-shadow 0.25s ease',
                                    }}
                                    onMouseEnter={(event) => {
                                        event.currentTarget.style.transform =
                                            'translateY(-8px)';

                                        event.currentTarget.style.boxShadow =
                                            '0 20px 45px rgba(15, 23, 42, 0.10)';
                                    }}
                                    onMouseLeave={(event) => {
                                        event.currentTarget.style.transform =
                                            'translateY(0)';

                                        event.currentTarget.style.boxShadow =
                                            '0 10px 30px rgba(15, 23, 42, 0.05)';
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '78px',
                                            height: '78px',
                                            borderRadius: '50%',
                                            background:
                                                'linear-gradient(135deg, #0f172a, #0369a1)',
                                            color: '#ffffff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '18px',
                                            fontWeight: 800,
                                            marginBottom: '24px',
                                        }}
                                    >
                                        {step.number}
                                    </div>

                                    <span
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: 700,
                                            color: '#0369a1',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                        }}
                                    >
                                        {step.tag}
                                    </span>

                                    <h3
                                        style={{
                                            margin: '10px 0',
                                            fontSize: '21px',
                                            color: '#0f172a',
                                        }}
                                    >
                                        {step.title}
                                    </h3>

                                    <p
                                        style={{
                                            color: '#64748b',
                                            lineHeight: 1.65,
                                            margin: 0,
                                        }}
                                    >
                                        {step.text}
                                    </p>

                                    {index < steps.length - 1 && (
                                        <span
                                            style={{
                                                position: 'absolute',
                                                top: '25px',
                                                right: '25px',
                                                color: '#cbd5e1',
                                                fontSize: '22px',
                                            }}
                                        >
                                            →
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                TECHNOLOGY STACK
            ========================================================= */}

            <section
                style={{
                    padding: '100px 0',
                    background:
                        'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        maxWidth: '1650px',
                        margin: '0 auto',
                        padding: '0 30px',
                    }}
                >
                    {/* Heading */}
                    <div
                        style={{
                            textAlign: 'center',
                            maxWidth: '760px',
                            margin: '0 auto 55px',
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-block',
                                padding: '8px 18px',
                                background: '#e0f2fe',
                                color: '#0369a1',
                                borderRadius: '999px',
                                fontSize: '12px',
                                fontWeight: 800,
                                letterSpacing: '0.08em',
                                marginBottom: '18px',
                            }}
                        >
                            TECHNOLOGY STACK
                        </div>

                        <h2
                            style={{
                                fontSize: 'clamp(2rem, 5vw, 3.3rem)',
                                color: '#0f172a',
                                margin: '0 0 18px',
                                lineHeight: 1.1,
                            }}
                        >
                            Our Technology Stack
                        </h2>

                        <p
                            style={{
                                color: '#64748b',
                                fontSize: '17px',
                                lineHeight: 1.7,
                                margin: 0,
                            }}
                        >
                            We use modern technologies, frameworks, languages,
                            and platforms to build powerful, scalable, and
                            high-performance digital solutions.
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            overflowX: 'auto',
                            borderBottom: '1px solid #e2e8f0',
                            scrollbarWidth: 'thin',
                        }}
                    >
                        {categories.map((category) => {
                            const isActive = active === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActive(category)}
                                    style={{
                                        flex: '1 0 auto',
                                        minWidth: '220px',
                                        padding: '20px 25px',
                                        border: 'none',
                                        background: isActive
                                            ? '#132f4b'
                                            : 'transparent',
                                        color: isActive
                                            ? '#ffffff'
                                            : '#64748b',
                                        borderRadius: isActive
                                            ? '13px 13px 0 0'
                                            : '0',
                                        cursor: 'pointer',
                                        fontSize: '17px',
                                        fontWeight: isActive ? 700 : 500,
                                        transition: 'all 0.25s ease',
                                        whiteSpace: 'nowrap',
                                    }}
                                    onMouseEnter={(event) => {
                                        if (!isActive) {
                                            event.currentTarget.style.color =
                                                '#0f172a';
                                            event.currentTarget.style.background =
                                                '#ffffff';
                                        }
                                    }}
                                    onMouseLeave={(event) => {
                                        if (!isActive) {
                                            event.currentTarget.style.color =
                                                '#64748b';
                                            event.currentTarget.style.background =
                                                'transparent';
                                        }
                                    }}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>

                    {/* Technology Grid Container */}
                    <div
                        style={{
                            background:
                                'linear-gradient(145deg, #f1f3f6, #e9edf2)',
                            borderRadius: '35px',
                            padding: '45px 35px',
                            minHeight: '680px',
                            boxShadow:
                                'inset 0 1px 0 rgba(255,255,255,0.8)',
                        }}
                    >
                        {activeTechnologies.length > 0 ? (
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns:
                                        'repeat(auto-fit, minmax(140px, 1fr))',
                                    gap: '38px 28px',
                                    alignItems: 'center',
                                }}
                            >
                                {activeTechnologies.map((technology) => (
                                    <div
                                        key={technology.name}
                                        style={{
                                            minHeight: '145px',
                                            padding: '18px 12px',
                                            borderRadius: '20px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '15px',
                                            transition:
                                                'transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease',
                                        }}
                                        onMouseEnter={(event) => {
                                            event.currentTarget.style.transform =
                                                'translateY(-8px)';

                                            event.currentTarget.style.background =
                                                'rgba(255,255,255,0.75)';

                                            event.currentTarget.style.boxShadow =
                                                '0 15px 35px rgba(15,23,42,0.08)';
                                        }}
                                        onMouseLeave={(event) => {
                                            event.currentTarget.style.transform =
                                                'translateY(0)';

                                            event.currentTarget.style.background =
                                                'transparent';

                                            event.currentTarget.style.boxShadow =
                                                'none';
                                        }}
                                    >
                                        {/* Logo */}
                                        <div
                                            style={{
                                                width: '82px',
                                                height: '82px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <img
                                                src={getLogo(technology)}
                                                alt={technology.name}
                                                loading="lazy"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                }}
                                                onError={(event) => {
                                                    const image =
                                                        event.currentTarget;

                                                    image.style.display =
                                                        'none';

                                                    const parent =
                                                        image.parentElement;

                                                    if (
                                                        parent &&
                                                        !parent.querySelector(
                                                            '.logo-fallback'
                                                        )
                                                    ) {
                                                        const fallback =
                                                            document.createElement(
                                                                'div'
                                                            );

                                                        fallback.className =
                                                            'logo-fallback';

                                                        fallback.textContent =
                                                            technology.name
                                                                .slice(0, 2)
                                                                .toUpperCase();

                                                        fallback.style.width =
                                                            '70px';

                                                        fallback.style.height =
                                                            '70px';

                                                        fallback.style.borderRadius =
                                                            '18px';

                                                        fallback.style.background =
                                                            '#132f4b';

                                                        fallback.style.color =
                                                            '#ffffff';

                                                        fallback.style.display =
                                                            'flex';

                                                        fallback.style.alignItems =
                                                            'center';

                                                        fallback.style.justifyContent =
                                                            'center';

                                                        fallback.style.fontWeight =
                                                            '800';

                                                        fallback.style.fontSize =
                                                            '22px';

                                                        parent.appendChild(
                                                            fallback
                                                        );
                                                    }
                                                }}
                                            />
                                        </div>

                                        {/* Name */}
                                        <span
                                            style={{
                                                color: '#334155',
                                                fontSize: '14px',
                                                fontWeight: 700,
                                                textAlign: 'center',
                                                lineHeight: 1.35,
                                            }}
                                        >
                                            {technology.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div
                                style={{
                                    minHeight: '500px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    gap: '15px',
                                    color: '#64748b',
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: '55px',
                                    }}
                                >
                                    ⚙️
                                </div>

                                <h3
                                    style={{
                                        color: '#0f172a',
                                        margin: 0,
                                    }}
                                >
                                    No technologies found
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Please select another technology category.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}