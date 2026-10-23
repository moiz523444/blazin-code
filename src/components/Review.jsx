import React from 'react';

const Review = () => {
  return (
    <section style={{ padding: '6rem 5%', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '4rem',
        borderRadius: '24px',
        maxWidth: '800px',
        width: '100%',
        boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
        border: '1px solid var(--border-color)'
      }}>
        <h3 style={{ fontSize: '2rem', fontWeight: 500, lineHeight: 1.4, marginBottom: '2rem' }}>
          "Blazin Code is an exceptional software engineering partner. Their team is extremely professional, agile, and technically proficient. They delivered a robust, high-performance product on schedule."
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#eee', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Avatar" />
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>John Doe</div>
            <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>CEO, TechCorp</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
