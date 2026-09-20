import { Link } from 'react-router-dom';
import { testimonials } from '../../data/testimonials';

export default function c() {
    return (
        <>
            <h1 className="section-title">Client Testimonials</h1>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                {testimonials.map((item) => (
                    <Link key={item.slug} to={`/testimonials/${item.slug}`} className="card" style={{ display: 'block' }}>
                        <p style={{ fontSize: '1.05rem', color: '#334155' }}>
                            “{item.quote}”
                        </p>
                        <div style={{ marginTop: '1rem', fontWeight: 700 }}>{item.name}</div>
                        <div style={{ color: '#64748b' }}>{item.role}</div>
                    </Link>
                ))}
            </div>
        </>
    );
}
