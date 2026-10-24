import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 5%',
      zIndex: 100,
      backgroundColor: 'rgba(245, 245, 245, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div 
        onClick={() => window.lenis?.scrollTo(0, { duration: 1.5 })}
        style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.02em', textTransform: 'uppercase', cursor: 'none' }}
      >
        BLAZIN CODE
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
        <a href="#services" onClick={(e) => { e.preventDefault(); window.lenis?.scrollTo('#services', { duration: 1.5 }) }} style={{ transition: 'color 0.2s', cursor: 'none' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-color)'}>Services</a>
        <a href="#expertise" onClick={(e) => { e.preventDefault(); window.lenis?.scrollTo('#expertise', { duration: 1.5 }) }} style={{ transition: 'color 0.2s', cursor: 'none' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-color)'}>Expertise</a>
        <a href="#works" onClick={(e) => { e.preventDefault(); window.lenis?.scrollTo('#works', { duration: 1.5 }) }} style={{ transition: 'color 0.2s', cursor: 'none' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-color)'}>Works</a>
      </div>

      <button style={{
        backgroundColor: 'var(--btn-bg)',
        color: 'var(--btn-text)',
        padding: '0.75rem 1.5rem',
        borderRadius: '50px',
        fontWeight: 500,
        fontSize: '0.9rem',
        cursor: 'none',
        transition: 'transform 0.2s, opacity 0.2s'
      }}
      onClick={() => window.location.href = 'tel:+14153048837'}
      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        Book a Call
      </button>
    </nav>
  );
};

export default Navbar;
