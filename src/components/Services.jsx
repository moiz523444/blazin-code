import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data/projects';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);
  const [activeModalCategory, setActiveModalCategory] = useState(null);

  const services = [
    {
      num: '1',
      title: 'WEB DEVELOPMENT',
      categoryKey: 'WEB DEVELOPMENT',
      tags: ['React', 'Next.js', 'Frontend', 'Backend', 'Full Stack', 'Performance'],
      image: '/projects/lodg.png',
      desc: 'Crafting high-performance, beautiful websites tailored to your brand. We build fast, scalable, and secure web solutions.'
    },
    {
      num: '2',
      title: 'MOBILE APP DEVELOPMENT',
      categoryKey: 'MOBILE APP DEVELOPMENT',
      tags: ['iOS', 'Android', 'React Native', 'Flutter', 'Cross-Platform'],
      image: '/projects/mojek.png',
      desc: 'Building native and cross-platform apps for iOS and Android. Engaging mobile experiences that keep users coming back.'
    },
    {
      num: '3',
      title: 'CUSTOM WEB APPLICATIONS',
      categoryKey: 'CUSTOM WEB APPLICATIONS',
      tags: ['Enterprise', 'Dashboard', 'Portal', 'API Integration', 'Cloud'],
      image: '/projects/fireball.png',
      desc: 'Scalable and secure web apps engineered for complex business needs. Automate workflows and scale your operations.'
    },
    {
      num: '4',
      title: 'SEO & GROWTH',
      categoryKey: 'SEO & GROWTH',
      tags: ['Technical SEO', 'Content Strategy', 'Analytics', 'Conversion Rate'],
      image: '/projects/core1.png',
      desc: 'Data-driven strategies to dominate search results and scale traffic. Turn visitors into loyal customers.'
    },
    {
      num: '5',
      title: 'ECOMMERCE SOLUTIONS',
      categoryKey: 'ECOMMERCE SOLUTIONS',
      tags: ['Shopify', 'WooCommerce', 'Custom Store', 'Payments', 'Cart'],
      image: '/projects/bathingculture.png',
      desc: 'High-converting online stores built on Shopify and custom architectures. Optimized for sales and seamless checkout.'
    },
    {
      num: '6',
      title: 'BRAND & DIGITAL TECH',
      categoryKey: 'BRAND & DIGITAL TECH',
      tags: ['Global Localization', 'Design Systems', 'Dynamic Catalog', 'Conversion'],
      image: '/projects/elica.png',
      desc: 'Award-winning enterprise web experiences built with modern architecture and immersive presentation.'
    },
    {
      num: '7',
      title: 'UI/UX DESIGN & ARCHITECTURE',
      categoryKey: 'UI/UX DESIGN',
      tags: ['User Research', 'Wireframes', 'Prototyping', 'Design Systems'],
      image: '/projects/modify.png',
      desc: 'Intuitive, award-winning interfaces designed for conversion. We make complex systems feel clean and luxurious.'
    },
    {
      num: '8',
      title: 'SAAS ENGINEERING',
      categoryKey: 'SAAS ENGINEERING',
      tags: ['Architecture', 'Multi-tenant', 'Microservices', 'Scalability'],
      image: '/projects/plasfy.png',
      desc: 'End-to-end development of scalable Software as a Service products. Built robustly for rapid user growth.'
    }
  ];

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 901px)", () => {
      const cards = gsap.utils.toArray('.service-wrapper');

      cards.forEach((card, i) => {
        if (i !== cards.length - 1) {
          const innerContent = card.querySelector('.service-content');

          gsap.to(innerContent, {
            scale: 0.95,
            opacity: 0.3,
            scrollTrigger: {
              trigger: card,
              start: "top 15%",
              endTrigger: cards[i + 1],
              end: "top 35%",
              scrub: true,
            }
          });
        }
      });
    });

    return () => mm.revert();
  }, []);

  // Filter projects for the modal (or show all if general)
  const filteredProjects = activeModalCategory && activeModalCategory !== 'ALL'
    ? projectsData.filter(p => p.category === activeModalCategory || p.niche.toLowerCase().includes(activeModalCategory.toLowerCase().slice(0, 4)))
    : projectsData;

  const displayProjects = filteredProjects.length > 0 ? filteredProjects : projectsData;

  // Manage body scroll lock cleanly when modal is opened
  useEffect(() => {
    if (activeModalCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [activeModalCategory]);

  return (
    <section ref={containerRef} id="services" style={{ position: 'relative', padding: '6rem 0 10vh', backgroundColor: '#050505', color: '#fff' }}>

      {/* Top Toggles */}
      <div style={{ padding: '0 5%', marginBottom: '3rem', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ backgroundColor: '#fff', color: '#111', padding: '0.6rem 1.25rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.85rem', border: 'none' }}>
            Services <span style={{ color: '#666', fontSize: '0.75rem', marginLeft: '0.25rem' }}>({services.length})</span>
          </button>
          <button 
            onClick={() => setActiveModalCategory('ALL')}
            style={{ backgroundColor: '#181818', color: '#eee', padding: '0.6rem 1.25rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.85rem', border: '1px solid #333', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span>All Projects Showcase</span>
            <span style={{ backgroundColor: '#ff3300', color: '#fff', fontSize: '0.65rem', padding: '0.1rem 0.4rem', borderRadius: '10px' }}>{projectsData.length}</span>
          </button>
        </div>

        <div style={{ fontSize: '0.8rem', color: '#777' }}>
          Click "See More" on any service to explore live client deployments
        </div>
      </div>

      {/* Sticky Stacking Services Container */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column' }}>
        {services.map((service, idx) => (

          <div key={idx} className="service-wrapper" style={{
            position: 'sticky',
            top: '15vh',
            height: '45vh',
            width: '100%',
            padding: '0 5%',
          }}>

            <div className="service-content" style={{
              width: '100%',
              backgroundColor: '#050505',
              position: 'relative',
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: '1px dotted #333',
              paddingTop: '2.5rem',
              paddingBottom: '2.5rem',
              transformOrigin: 'top center'
            }}>

              {/* Left Side (Title & Tags) */}
              <div className="service-left-col">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#ff3300', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.7rem', fontWeight: 700 }}>
                    {service.num}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f5f5f5', letterSpacing: '-0.02em' }}>{service.title}</h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', maxWidth: '400px' }}>
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} style={{ backgroundColor: '#1a1a1a', padding: '0.4rem 0.8rem', borderRadius: '50px', fontSize: '0.75rem', color: '#aaa', border: '1px solid #282828' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: '0.5rem' }}>
                  <button 
                    onClick={() => setActiveModalCategory(service.categoryKey)}
                    style={{ 
                      backgroundColor: '#1f1f1f', 
                      color: '#fff', 
                      padding: '0.6rem 1.25rem', 
                      borderRadius: '8px', 
                      fontSize: '0.8rem', 
                      fontWeight: 600,
                      border: '1px solid #333',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'background-color 0.2s, transform 0.2s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#000'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1f1f1f'; e.currentTarget.style.color = '#fff'; }}
                  >
                    <span>See more projects</span>
                    <span style={{ fontSize: '0.9rem' }}>→</span>
                  </button>
                </div>
              </div>

              {/* Right Side (Image & Desc) */}
              <div className="service-right-col">
                <div className="service-img-preview" style={{ 
                  width: '100%', 
                  height: '240px', 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  backgroundColor: '#121214',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  {/* Studio Window Chrome */}
                  <div style={{ height: '28px', backgroundColor: '#1a1a1e', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px', flexShrink: 0 }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27c93f' }}></div>
                    <span style={{ marginLeft: 'auto', fontSize: '0.65rem', color: '#666', fontFamily: 'monospace' }}>live deployment</span>
                  </div>

                  {/* Screenshot Viewport */}
                  <div style={{ flex: 1, width: '100%', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        objectPosition: 'top center',
                        transition: 'transform 0.5s ease'
                      }} 
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                </div>
                <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  {service.desc}
                </p>
              </div>

            </div>

          </div>
        ))}
      </div>

      {/* Ultra-Premium Showcase Modal rendered directly to body */}
      {activeModalCategory && typeof document !== 'undefined' && createPortal(
        <div 
          onClick={() => setActiveModalCategory(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1.5rem',
            cursor: 'default'
          }}
        >
          <div 
            className="modal-dialog-box"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '1280px',
              height: '92vh',
              backgroundColor: '#0c0c0e',
              borderRadius: '28px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 40px 120px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            {/* Ambient Spotlight */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '180px',
              background: 'radial-gradient(circle, rgba(255, 51, 0, 0.25) 0%, transparent 70%)',
              pointerEvents: 'none',
              filter: 'blur(50px)'
            }}></div>

            {/* Header */}
            <div className="modal-header-bar" style={{
              padding: '2rem 2.5rem 1.25rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              zIndex: 10,
              backgroundColor: '#0c0c0e'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff3300', boxShadow: '0 0 10px #ff3300' }}></span>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ff5522', fontWeight: 700 }}>
                    CLIENT PORTFOLIO
                  </span>
                  <span style={{ color: '#444' }}>•</span>
                  <span style={{ fontSize: '0.75rem', color: '#888' }}>
                    10 Production Deployments
                  </span>
                </div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.03em' }}>
                  Live Engineering Deployments
                </h2>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setActiveModalCategory(null)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s, transform 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ff3300'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                ✕
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="modal-tabs-bar" style={{
              padding: '0.85rem 2.5rem',
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              backgroundColor: '#111114',
              position: 'relative',
              zIndex: 10
            }}>
              <button
                onClick={() => setActiveModalCategory('ALL')}
                style={{
                  backgroundColor: activeModalCategory === 'ALL' ? '#ff3300' : 'rgba(255, 255, 255, 0.04)',
                  color: activeModalCategory === 'ALL' ? '#fff' : '#aaa',
                  border: activeModalCategory === 'ALL' ? '1px solid #ff3300' : '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '0.45rem 1rem',
                  borderRadius: '30px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                All Projects ({projectsData.length})
              </button>
              {services.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModalCategory(s.categoryKey)}
                  style={{
                    backgroundColor: activeModalCategory === s.categoryKey ? '#ff3300' : 'rgba(255, 255, 255, 0.04)',
                    color: activeModalCategory === s.categoryKey ? '#fff' : '#aaa',
                    border: activeModalCategory === s.categoryKey ? '1px solid #ff3300' : '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '0.45rem 1rem',
                    borderRadius: '30px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {s.title}
                </button>
              ))}
            </div>

            {/* Scrollable Projects Grid */}
            <div 
              className="modal-projects-grid"
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                overflowY: 'scroll',
                padding: '2.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                gap: '2.5rem',
                alignContent: 'start',
                minHeight: 0,
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {displayProjects.map((proj) => (
                <div
                  key={proj.id}
                  style={{
                    backgroundColor: '#141417',
                    borderRadius: '22px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.45)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                    minHeight: '440px',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = '#ff3300';
                    e.currentTarget.style.boxShadow = '0 20px 45px rgba(255, 51, 0, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.45)';
                  }}
                >
                  {/* Browser Header Bar */}
                  <div style={{
                    padding: '0.75rem 1.25rem',
                    backgroundColor: '#1c1c22',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexShrink: 0
                  }}>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></span>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></span>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }}></span>
                    </div>

                    <div style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      padding: '0.25rem 0.9rem',
                      borderRadius: '20px',
                      fontSize: '0.7rem',
                      fontFamily: 'monospace',
                      color: '#bbb',
                      maxWidth: '190px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}>
                      {proj.url.replace('https://', '').replace(/\/$/, '')}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ade80', boxShadow: '0 0 6px #4ade80' }}></span>
                      <span style={{ fontSize: '0.65rem', color: '#4ade80', fontWeight: 700 }}>LIVE</span>
                    </div>
                  </div>

                  {/* Browser Mockup Screen Image */}
                  <a 
                    href={proj.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '100%',
                      height: '240px',
                      minHeight: '240px',
                      maxHeight: '240px',
                      position: 'relative',
                      backgroundColor: '#0a0a0c',
                      overflow: 'hidden',
                      display: 'block',
                      flexShrink: 0
                    }}
                  >
                    <img 
                      src={proj.image} 
                      alt={proj.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        display: 'block'
                      }}
                    />

                    {/* Hover Visit Pill */}
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      padding: '0.35rem 0.8rem',
                      borderRadius: '20px',
                      color: '#fff',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}>
                      <span>Visit Live</span>
                      <span style={{ color: '#ff3300' }}>↗</span>
                    </div>
                  </a>

                  {/* Card Content & Details */}
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#141417', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <span style={{ color: '#ff5522', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          {proj.niche}
                        </span>
                        <span style={{ color: '#777', fontSize: '0.75rem', fontWeight: 600 }}>
                          {proj.year}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em' }}>
                        {proj.title}
                      </h3>

                      <p style={{ color: '#999', fontSize: '0.85rem', lineHeight: 1.5, margin: '0 0 1.25rem 0' }}>
                        {proj.desc}
                      </p>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                      <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 500 }}>
                        {proj.category}
                      </span>
                      <a 
                        href={proj.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: '#ff3300',
                          color: '#fff',
                          padding: '0.45rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          transition: 'opacity 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                      >
                        Launch ↗
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            {/* Modal Bottom Bar */}
            <div style={{
              padding: '1.1rem 2.5rem',
              backgroundColor: '#0a0a0c',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.82rem',
              color: '#777'
            }}>
              <span>Showing {displayProjects.length} enterprise deployments</span>
              <button 
                onClick={() => setActiveModalCategory(activeModalCategory === 'ALL' ? null : 'ALL')}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '20px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {activeModalCategory === 'ALL' ? 'Close Showcase' : 'View All 10 Projects'}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

    </section>
  );
};

export default Services;
