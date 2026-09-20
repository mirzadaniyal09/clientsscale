import Button from '../../components/ui/Button';

export default function CTA() {
    return (
        <main className="section">
            <div className="container">
                <div className="card" style={{ background: 'linear-gradient(135deg, #082f49, #0f172a)', color: '#fff', textAlign: 'center', padding: '4rem 2rem' }}>
                    <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#bae6fd', fontWeight: 700 }}>Ready to move?</p>
                    <h1 className="section-title" style={{ color: '#fff', margin: '1rem 0' }}>Let’s shape your next digital product.</h1>
                    <p style={{ margin: '0 auto 2rem', maxWidth: 640, color: '#dbeafe' }}>
                        Whether you need a polished launch or a roadmap for long-term growth, we can help you build with confidence.
                    </p>
                    <Button variant="primary" to="/contact">Book a discovery call</Button>
                </div>
            </div>
        </main>
    );
}
