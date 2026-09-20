import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { ArrowRight } from 'lucide-react'; // or your preferred icon library

export default function ServicesList() {
    return (
        <div className="services-container">
            {/* Header Section */}
            <div className="services-header">
                <span className="services-badge">What We Offer</span>
                <h1 className="services-title">Our Services</h1>
                <p className="services-description">
                    From product strategy to cloud operations, we help businesses
                    build better tools and experiences that drive real impact.
                </p>
            </div>

            {/* Services Grid */}
            <div className="services-grid">
                {services.map((service) => {
                    const Icon = service.icon;

                    return (
                        <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="service-card"
                        >
                            <div className="service-card-inner">
                                {/* Icon with gradient background */}
                                <div className="service-icon-wrapper">
                                    <div className="service-icon-circle">
                                        <Icon className="service-icon" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="service-content">
                                    <h3 className="service-title">
                                        {service.title}
                                    </h3>
                                    <p className="service-summary">
                                        {service.summary}
                                    </p>
                                </div>

                                {/* Arrow indicator */}
                                <div className="service-arrow">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* Optional CTA Section */}
            <div className="services-cta">
                <p>Need a custom solution?</p>
                <Link to="/contact" className="cta-button">
                    Let's Talk
                </Link>
            </div>

            <style>{`
                .services-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 3rem 1.5rem;
                }

                /* Header Styles */
                .services-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .services-badge {
                    display: inline-block;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 0.35rem 1.25rem;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    margin-bottom: 1rem;
                }

                .services-title {
                    font-size: 2.75rem;
                    font-weight: 800;
                    color: #0f172a;
                    margin-bottom: 1rem;
                    letter-spacing: -0.025em;
                }

                .services-description {
                    font-size: 1.125rem;
                    color: #475569;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                /* Grid Layout */
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 4rem;
                }

                /* Service Card */
                .service-card {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    background: white;
                    border-radius: 16px;
                    border: 1px solid #e2e8f0;
                    overflow: hidden;
                    position: relative;
                }

                .service-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
                    border-color: #cbd5e1;
                }

                .service-card:active {
                    transform: translateY(-2px);
                }

                .service-card-inner {
                    padding: 2rem 1.5rem;
                    position: relative;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                /* Icon Styles */
                .service-icon-wrapper {
                    margin-bottom: 1.25rem;
                }

                .service-icon-circle {
                    width: 56px;
                    height: 56px;
                    border-radius: 12px;
                    background: linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .service-card:hover .service-icon-circle {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    transform: scale(1.05) rotate(-3deg);
                }

                .service-icon {
                    width: 28px;
                    height: 28px;
                    color: #667eea;
                    transition: all 0.3s ease;
                }

                .service-card:hover .service-icon {
                    color: white;
                }

                /* Content Styles */
                .service-content {
                    flex: 1;
                }

                .service-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0 0 0.5rem 0;
                    transition: color 0.3s ease;
                }

                .service-card:hover .service-title {
                    color: #667eea;
                }

                .service-summary {
                    color: #64748b;
                    line-height: 1.6;
                    margin: 0;
                    font-size: 0.95rem;
                }

                /* Arrow Indicator */
                .service-arrow {
                    margin-top: 1.25rem;
                    color: #94a3b8;
                    transition: all 0.3s ease;
                    display: flex;
                    justify-content: flex-end;
                }

                .service-card:hover .service-arrow {
                    color: #667eea;
                    transform: translateX(4px);
                }

                /* Gradient hover overlay */
                .service-card::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
                    background-size: 200% 100%;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .service-card:hover::after {
                    opacity: 1;
                    animation: shimmer 2s infinite;
                }

                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }

                /* CTA Section */
                .services-cta {
                    text-align: center;
                    padding: 3rem 2rem;
                    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                    border-radius: 16px;
                    border: 1px solid #e2e8f0;
                }

                .services-cta p {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #0f172a;
                    margin-bottom: 1rem;
                }

                .cta-button {
                    display: inline-block;
                    padding: 0.75rem 2.5rem;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    text-decoration: none;
                    border-radius: 50px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
                }

                .cta-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .services-title {
                        font-size: 2rem;
                    }

                    .services-grid {
                        grid-template-columns: 1fr;
                        max-width: 500px;
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .service-card-inner {
                        padding: 1.5rem;
                    }
                }

                @media (min-width: 769px) and (max-width: 1024px) {
                    .services-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </div>
    );
}