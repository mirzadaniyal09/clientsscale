import { testimonials } from '../../data/testimonials';
import { Link } from 'react-router-dom';

export default function ClientThreePage() {
    const item = testimonials.find((entry) => entry.slug === 'client-three');
    if (!item) return null;

    return (
        <div>
            <Link to="/testimonials" style={{ color: '#0369a1', fontWeight: 700 }}>← Back to testimonials</Link>
            <div className="card" style={{ marginTop: '1.5rem' }}>
                <p style={{ fontSize: '1.2rem', color: '#334155' }}>“{item.quote}”</p>
                <h2 style={{ marginTop: '1rem' }}>{item.name}</h2>
                <p style={{ margin: 0, color: '#64748b' }}>{item.role} · {item.company}</p>
            </div>
        </div>
    );
}
