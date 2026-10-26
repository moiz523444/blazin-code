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
        {/* Brand Logo with Image */}
        <div 
          onClick={() => handleNavClick(0)}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            cursor: 'pointer', 
            zIndex: 1001 
          }}
        >
          <img 
            src="/logo-clean.png" 
            alt="Blazin Code" 
            style={{ 
              height: '38px', 
              width: 'auto', 
              objectFit: 'contain',
              display: 'block'
            }} 
          />
        </div>
        
        {/* Desktop Nav Links with Floating Glass Capsule */}
        <div 
          className="desktop-nav-links" 
          style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '0.4rem', 
            fontSize: '0.88rem', 
            fontWeight: 500,
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            padding: '0.35rem 0.5rem',
            borderRadius: '50px',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.03)'
          }}
        >
          {[
            { href: '#services', label: 'Services' },
            { href: '#expertise', label: 'Expertise' },
            { href: '#works', label: 'Works' }
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className="navbar-link-pill"
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '50px',
                color: 'var(--text-color)',
                textDecoration: 'none',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#1664f6';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(22, 100, 246, 0.15), 0 1px 3px rgba(0,0,0,0.06)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-color)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Desktop Book a Call CTA - Ultra Premium Gradient & Inner Sheen */}
        <button 
          className="desktop-call-btn btn-magnetic"
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #1664f6 0%, #0b4bcc 100%)',
            color: '#ffffff',
            padding: '0.65rem 1.45rem',
            borderRadius: '50px',
            fontWeight: 600,
            fontSize: '0.85rem',
            letterSpacing: '0.01em',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 8px 24px -4px rgba(22, 100, 246, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 14px 30px -4px rgba(22, 100, 246, 0.65), 0 0 20px rgba(56, 189, 248, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(22, 100, 246, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.35)';
          }}
          onClick={() => window.location.href = 'tel:+14153048837'}
        >
          {/* Subtle Live Green Pulse Dot inside Button */}
          <span style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: '#4ade80',
            boxShadow: '0 0 8px #4ade80',
            display: 'inline-block'
          }} />
          <span>Book a Call</span>
          <span style={{ fontSize: '0.9rem', transform: 'translateX(0)', transition: 'transform 0.2s ease' }}>↗</span>
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
              backgroundColor: '#1664f6',
              color: '#fff',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 700,
              boxShadow: '0 10px 25px rgba(22, 100, 246, 0.4)'
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
