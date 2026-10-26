import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (targetId) => {
    setMobileMenuOpen(false);
    if (targetId === 0) {
      window.lenis?.scrollTo(0, { duration: 1.5 });
    } else {
      window.lenis?.scrollTo(targetId, { duration: 1.5 });
    }
  };

  return (
    <>
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
        zIndex: 1000,
        backgroundColor: 'rgba(245, 245, 245, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick(0)}
          style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', textTransform: 'uppercase', cursor: 'pointer', zIndex: 1001 }}
        >
          BLAZIN CODE
        </div>
        
        {/* Desktop Nav Links */}
        <div className="desktop-nav-links" style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
          <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services') }} style={{ transition: 'color 0.2s' }}>Services</a>
          <a href="#expertise" onClick={(e) => { e.preventDefault(); handleNavClick('#expertise') }} style={{ transition: 'color 0.2s' }}>Expertise</a>
          <a href="#works" onClick={(e) => { e.preventDefault(); handleNavClick('#works') }} style={{ transition: 'color 0.2s' }}>Works</a>
        </div>

        {/* Desktop Book a Call CTA */}
        <button 
          className="desktop-call-btn"
          style={{
            backgroundColor: 'var(--btn-bg)',
            color: 'var(--btn-text)',
            padding: '0.65rem 1.4rem',
            borderRadius: '50px',
            fontWeight: 500,
            fontSize: '0.85rem',
            transition: 'transform 0.2s, opacity 0.2s'
          }}
          onClick={() => window.location.href = 'tel:+14153048837'}
        >
          Book a Call
        </button>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40px',
            height: '40px',
            background: 'none',
            border: 'none',
            padding: 0,
            zIndex: 1001,
            cursor: 'pointer'
          }}
        >
          <span style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#111',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            marginBottom: '5px'
          }} />
          <span style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#111',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            opacity: mobileMenuOpen ? 0 : 1,
            marginBottom: '5px'
          }} />
          <span style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#111',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
          }} />
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: '#0c0c0e',
          color: '#fff',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5rem',
          padding: '2rem'
        }}>
          <a 
            href="#services" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#services') }} 
            style={{ fontSize: '1.75rem', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em' }}
          >
            Services
          </a>
          <a 
            href="#expertise" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#expertise') }} 
            style={{ fontSize: '1.75rem', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em' }}
          >
            Expertise
          </a>
          <a 
            href="#works" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#works') }} 
            style={{ fontSize: '1.75rem', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em' }}
          >
            Works
          </a>

          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              window.location.href = 'tel:+14153048837';
            }}
            style={{
              marginTop: '1rem',
              backgroundColor: '#ff3300',
              color: '#fff',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 700,
              boxShadow: '0 10px 25px rgba(255, 51, 0, 0.4)'
            }}
          >
            Book a Call ↗
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
