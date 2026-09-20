import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <main className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>404</h1>
                <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
                    The page you’re looking for doesn’t exist or has moved.
                </p>
                <Link to="/" style={{ display: 'inline-block', background: '#0ea5e9', color: '#fff', padding: '0.9rem 1.5rem', borderRadius: '999px', fontWeight: 700 }}>
                    Return home
                </Link>
            </div>
        </main>
    );
}
