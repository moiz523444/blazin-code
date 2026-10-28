import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data/projects';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);
  const modalScrollRef = useRef(null);
  const modalContentRef = useRef(null);
  const [activeModalCategory, setActiveModalCategory] = useState(null);

  const services = [
    {
      num: '1',
      title: 'WEB DEVELOPMENT',
      categoryKey: 'WEB DEVELOPMENT',
      tags: ['React', 'Next.js', 'Frontend', 'Backend', 'Full Stack', 'Performance'],
      image: '/projects/dshcp.jpeg',
      desc: 'Crafting high-performance, beautiful websites tailored to your brand. We build fast, scalable, and secure web solutions.'
    },
    {
      num: '2',
      title: 'MOBILE APP DEVELOPMENT',
      categoryKey: 'MOBILE APP DEVELOPMENT',
      tags: ['iOS', 'Android', 'React Native', 'Flutter', 'Cross-Platform'],
      image: '/projects/dufaa.jpeg',
      desc: 'Building native and cross-platform FinTech & consumer apps for iOS and Android, including bilingual mobile financing and banking platforms.'
    },
    {
      num: '3',
      title: 'CUSTOM WEB APPLICATIONS',
      categoryKey: 'CUSTOM WEB APPLICATIONS',
      tags: ['Enterprise', 'Dashboard', 'Portal', 'API Integration', 'Cloud'],
      image: '/projects/firmlogistix.jpeg',
      desc: 'Scalable and secure web apps engineered for complex business needs. Automate workflows and scale your operations.'
    },
    {
      num: '4',
      title: 'SEO & GROWTH',
      categoryKey: 'SEO & GROWTH',
      tags: ['Technical SEO', 'Content Strategy', 'Analytics', 'Conversion Rate'],
      image: '/projects/core1.jpeg',
      desc: 'Data-driven strategies to dominate search results and scale traffic. Turn visitors into loyal customers.'
    },
    {
      num: '5',
      title: 'ECOMMERCE SOLUTIONS',
      categoryKey: 'ECOMMERCE SOLUTIONS',
      tags: ['Shopify', 'WooCommerce', 'Custom Store', 'Payments', 'Cart'],
      image: '/projects/bathingculture.jpeg',
      desc: 'High-converting online stores built on Shopify and custom architectures. Optimized for sales and seamless checkout.'
    },
    {
      num: '6',
      title: 'BRAND & DIGITAL TECH',
      categoryKey: 'BRAND & DIGITAL TECH',
      tags: ['Global Localization', 'Design Systems', 'Dynamic Catalog', 'Conversion'],
      image: '/projects/elica.jpeg',
      desc: 'Award-winning enterprise web experiences built with modern architecture and immersive presentation.'
    },
    {
      num: '7',
      title: 'UI/UX DESIGN & ARCHITECTURE',
      categoryKey: 'UI/UX DESIGN',
      tags: ['User Research', 'Wireframes', 'Prototyping', 'Design Systems'],
      image: '/projects/modify.jpeg',
      desc: 'Intuitive, award-winning interfaces designed for conversion. We make complex systems feel clean and luxurious.'
    },
    {
      num: '8',
      title: 'SAAS ENGINEERING',
      categoryKey: 'SAAS ENGINEERING',
      tags: ['Architecture', 'Multi-tenant', 'Microservices', 'Scalability'],
      image: '/projects/vinsdaddy.jpeg',
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
    ? projectsData.filter(p => p.category === activeModalCategory || (p.categories && p.categories.includes(activeModalCategory)))
    : projectsData;

  const displayProjects = filteredProjects.length > 0 ? filteredProjects : projectsData;

  // Dedicated smooth Lenis scroll inside modal + pause background Lenis
  useEffect(() => {
    if (!activeModalCategory) {
      document.body.style.overflow = '';
      window.lenis?.start();
      return;
    }

    document.body.style.overflow = 'hidden';
    window.lenis?.stop();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalCategory(null);
    };
    window.addEventListener('keydown', handleKeyDown);

    let modalLenis = null;
    let rafId = null;

    if (modalScrollRef.current && modalContentRef.current) {
      modalScrollRef.current.scrollTop = 0;
      modalLenis = new Lenis({
        wrapper: modalScrollRef.current,
        content: modalContentRef.current,
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      });

      const raf = (time) => {
        modalLenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (rafId) cancelAnimationFrame(rafId);
      if (modalLenis) modalLenis.destroy();
      document.body.style.overflow = '';
      window.lenis?.start();
    };
  }, [activeModalCategory]);

  return (
    <section ref={containerRef} id="services" style={{ position: 'relative', padding: '6rem 0 10vh', backgroundColor: '#050505', color: '#fff' }}>

      {/* Top Toggles */}
      <div style={{ padding: '0 5%', marginBottom: '3rem', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button style={{ 
            backgroundColor: '#ffffff', 
            color: '#0f1011', 
            padding: '0.65rem 1.4rem', 
            borderRadius: '50px', 
            fontWeight: 700, 
            fontSize: '0.85rem', 
            border: 'none',
            boxShadow: '0 4px 15px rgba(255,255,255,0.15)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <span>Services</span> 
            <span style={{ color: '#1664f6', fontSize: '0.75rem', fontWeight: 800 }}>({services.length})</span>
          </button>
          
          <button 
            onClick={() => setActiveModalCategory('ALL')}
            className="btn-magnetic"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.05)', 
              color: '#ffffff', 
              padding: '0.65rem 1.4rem', 
              borderRadius: '50px', 
              fontWeight: 600, 
              fontSize: '0.85rem', 
              border: '1px solid rgba(22, 100, 246, 0.35)', 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.6rem',
              boxShadow: '0 4px 18px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(22, 100, 246, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.7)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(22, 100, 246, 0.35)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(22, 100, 246, 0.35)';
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>All Projects Showcase</span>
            <span style={{ 
              backgroundColor: '#1664f6', 
              color: '#fff', 
              fontSize: '0.7rem', 
              padding: '0.15rem 0.5rem', 
              borderRadius: '20px',
              fontWeight: 700,
              boxShadow: '0 0 10px rgba(22, 100, 246, 0.5)'
            }}>
              {projectsData.length}
            </span>
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
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#1664f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.7rem', fontWeight: 700 }}>
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

              {/* Right Side (Clean Studio Mockup Frame & Desc) */}
              <div className="service-right-col">
                <div 
                  onClick={() => setActiveModalCategory(service.categoryKey)}
                  className="service-img-preview" 
                  style={{ 
                    width: '100%', 
                    height: '245px', 
                    borderRadius: '20px', 
                    padding: '6px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)', 
                    boxShadow: '0 24px 48px -12px rgba(0,0,0,0.75)',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.45)';
                    e.currentTarget.style.boxShadow = '0 24px 48px -12px rgba(22, 100, 246, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = '0 24px 48px -12px rgba(0,0,0,0.75)';
                  }}
                >
                  <div style={{ width: '100%', height: '100%', borderRadius: '14px', overflow: 'hidden', position: 'relative', backgroundColor: '#0b0b0e' }}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        objectPosition: 'center center',
                        transform: 'scale(1.06)',
                        transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)'
                      }} 
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.11)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      backgroundColor: 'rgba(8, 10, 15, 0.88)',
                      border: '1px solid rgba(255,255,255,0.14)',
                      padding: '0.28rem 0.7rem',
                      borderRadius: '30px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      color: '#fff',
                      pointerEvents: 'none'
                    }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ade80' }}></span>
                      <span>View Case Studies ↗</span>
                    </div>
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

      {/* Ultra-Premium Full-Screen Studio Showcase Modal */}
      {activeModalCategory && typeof document !== 'undefined' && createPortal(
        <div 
          className="modal-backdrop-fade"
          onClick={() => setActiveModalCategory(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#07080c',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            cursor: 'default'
          }}
        >
          <div 
            className="modal-dialog-box"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100vw',
              maxWidth: 'none',
              height: '100vh',
              backgroundColor: '#07080c',
              borderRadius: 0,
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            {/* Top Header */}
            <div className="modal-header-bar" style={{
              padding: '2rem 4% 1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              zIndex: 10,
              backgroundColor: '#07080c'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.45rem' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: 'rgba(22, 100, 246, 0.14)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '30px',
                    fontSize: '0.68rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#38bdf8',
                    fontWeight: 700
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
                    CLIENT PORTFOLIO
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>
                    {projectsData.length} Verified Production Systems
                  </span>
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.03em' }}>
                  Selected Works & Deployments
                </h2>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setActiveModalCategory(null)}
                aria-label="Close Showcase"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#fff',
                  height: '42px',
                  padding: '0 1rem',
                  borderRadius: '50px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease, border-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', letterSpacing: '0.04em' }}>ESC</span>
                <span style={{ fontSize: '1rem', lineHeight: 1 }}>✕</span>
              </button>
            </div>

            {/* Sleek Scrollbar-Free Category Filter Bar */}
            <div className="modal-tabs-bar" style={{
              padding: '0 4% 1.15rem',
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
              position: 'relative',
              zIndex: 10,
              backgroundColor: '#07080c'
            }}>
              <button
                onClick={() => setActiveModalCategory('ALL')}
                style={{
                  background: activeModalCategory === 'ALL'
                    ? 'linear-gradient(135deg, #1664f6 0%, #0d4bcc 100%)'
                    : 'rgba(255, 255, 255, 0.035)',
                  color: activeModalCategory === 'ALL' ? '#fff' : 'rgba(255, 255, 255, 0.65)',
                  border: activeModalCategory === 'ALL'
                    ? '1px solid rgba(56, 189, 248, 0.5)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '0.5rem 1.1rem',
                  borderRadius: '50px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>All Works</span>
                <span style={{
                  backgroundColor: activeModalCategory === 'ALL' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  padding: '0.08rem 0.45rem',
                  borderRadius: '20px',
                  fontSize: '0.68rem',
                  fontWeight: 700
                }}>
                  {projectsData.length}
                </span>
              </button>

              {services.map((s, idx) => {
                const isActive = activeModalCategory === s.categoryKey;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveModalCategory(s.categoryKey)}
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, #1664f6 0%, #0d4bcc 100%)'
                        : 'rgba(255, 255, 255, 0.035)',
                      color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.65)',
                      border: isActive
                        ? '1px solid rgba(56, 189, 248, 0.5)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '0.5rem 1.05rem',
                      borderRadius: '50px',
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {s.title}
                  </button>
                );
              })}
            </div>

            {/* Lenis-Powered Smooth Scroll Container */}
            <div 
              ref={modalScrollRef}
              className="modal-projects-scroll"
              data-lenis-prevent="true"
            >
              <div ref={modalContentRef} className="modal-projects-grid">
                {displayProjects.map((proj, index) => {
                  const cleanDomain = proj.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
                  return (
                    <a
                      key={proj.id}
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-showcase-card"
                    >
                      {/* Studio Mockup Image Frame */}
                      <div className="portfolio-card-thumb">
                        <img 
                          src={proj.image} 
                          alt={proj.title}
                          decoding="async"
                        />

                        {/* Subtle Top-Right Index Pill */}
                        <div style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          backgroundColor: 'rgba(8, 10, 15, 0.88)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          padding: '0.22rem 0.6rem',
                          borderRadius: '20px',
                          color: 'rgba(255, 255, 255, 0.85)',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          fontFamily: 'monospace'
                        }}>
                          #{String(index + 1).padStart(2, '0')}
                        </div>

                        {/* Bottom-Left Live Domain Pill */}
                        <div className="portfolio-domain-badge">
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ade80' }} />
                          <span>{cleanDomain}</span>
                          <span style={{ fontSize: '0.75rem', opacity: 0.85 }}>↗</span>
                        </div>
                      </div>

                      {/* Editorial Card Content */}
                      <div style={{
                        padding: '1.15rem 0.85rem 0.85rem',
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        justifyContent: 'space-between',
                        gap: '0.85rem'
                      }}>
                        <div>
                          {/* Meta Row */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                            <span style={{
                              color: '#38bdf8',
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em'
                            }}>
                              {proj.niche}
                            </span>
                            <span style={{
                              color: 'rgba(255, 255, 255, 0.4)',
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              padding: '0.12rem 0.5rem',
                              borderRadius: '20px',
                              border: '1px solid rgba(255, 255, 255, 0.06)'
                            }}>
                              {proj.year}
                            </span>
                          </div>

                          {/* Title + Circular Arrow Button */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', marginBottom: '0.45rem' }}>
                            <h3 style={{
                              fontSize: '1.35rem',
                              fontWeight: 700,
                              color: '#ffffff',
                              margin: 0,
                              letterSpacing: '-0.025em'
                            }}>
                              {proj.title}
                            </h3>
                            <div className="portfolio-card-arrow">
                              ↗
                            </div>
                          </div>

                          {/* Concise Description */}
                          <p style={{
                            color: 'rgba(255, 255, 255, 0.55)',
                            fontSize: '0.84rem',
                            lineHeight: 1.55,
                            margin: 0
                          }}>
                            {proj.desc}
                          </p>
                        </div>

                        {/* Subtle Footer Tag */}
                        <div style={{
                          paddingTop: '0.75rem',
                          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <span style={{
                            fontSize: '0.68rem',
                            color: 'rgba(255, 255, 255, 0.4)',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
                          }}>
                            {proj.category}
                          </span>
                          <span style={{
                            fontSize: '0.76rem',
                            color: '#38bdf8',
                            fontWeight: 600
                          }}>
                            Explore Live →
                          </span>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer Bar */}
            <div style={{
              padding: '1rem 4%',
              backgroundColor: '#07080c',
              borderTop: '1px solid rgba(255, 255, 255, 0.07)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.8rem',
              color: 'rgba(255, 255, 255, 0.5)',
              position: 'relative',
              zIndex: 10
            }}>
              <span>Showing <strong style={{ color: '#fff' }}>{displayProjects.length}</strong> production case studies</span>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {activeModalCategory !== 'ALL' && (
                  <button 
                    onClick={() => setActiveModalCategory('ALL')}
                    style={{
                      backgroundColor: 'rgba(22, 100, 246, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.35)',
                      color: '#38bdf8',
                      padding: '0.4rem 1rem',
                      borderRadius: '50px',
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Show All ({projectsData.length})
                  </button>
                )}
                <button 
                  onClick={() => setActiveModalCategory(null)}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    padding: '0.4rem 1.1rem',
                    borderRadius: '50px',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Close Showcase
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

    </section>
  );
};

export default Services;
