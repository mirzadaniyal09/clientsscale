import React from 'react';
import { testimonials } from '../../data/services';

export default function TestimonialsPage() {
  return (
    <main style={{ maxWidth: 1100, margin: '2.5rem auto', padding: '0 1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>What our clients say</h1>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Selected testimonials from SystemMapAI clients.</p>

      <div style={{ display: 'grid', gap: 16 }}>
        {testimonials.map((t) => (
          <blockquote key={t.id} style={{ background: '#fff', padding: 20, borderRadius: 12, boxShadow: '0 6px 18px rgba(2,6,23,0.06)' }}>
            <p style={{ margin: 0, color: '#0f172a' }}>&ldquo;{t.quote}&rdquo;</p>
            <footer style={{ marginTop: 12, color: '#64748b', fontWeight: 700 }}>{t.name} — {t.role}</footer>
          </blockquote>
        ))}
      </div>
    </main>
  );
}
