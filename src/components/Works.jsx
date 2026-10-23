import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const featuredWorks = [
  // 1. FinTech & DeFi
  projectsData.find(p => p.id === 'fireball-finance') || projectsData[1],
  // 2. Cloud Design & SaaS
  projectsData.find(p => p.id === 'plasfy') || projectsData[9],
  // 3. E-Commerce & Luxury Lifestyle
  projectsData.find(p => p.id === 'bathing-culture') || projectsData[0],
  // 4. Industrial CleanTech & Energy
  projectsData.find(p => p.id === 'exergy3') || projectsData[4],
];

const Works = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Advanced GSAP: Scale down the card and fade out text as the next one covers it
    const cards = gsap.utils.toArray('.card-wrapper');
    
    cards.forEach((card, i) => {
      if (i !== cards.length - 1) {
        const mainCard = card.querySelector('.main-card');
        const sideTexts = card.querySelectorAll('.side-text');

        gsap.to(mainCard, {
          scale: 0.92,
          opacity: 0.35,
          scrollTrigger: {
            trigger: card,
            start: "top 5%", 
            endTrigger: cards[i + 1],
            end: "top 20%", 
            scrub: true,
          }
        });

        gsap.to(sideTexts, {
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 5%",
            endTrigger: cards[i + 1],
            end: "top 30%",
            scrub: true,
          }
        });
      }
    });
  }, []);

  return (
    <section ref={containerRef} id="works" style={{ position: 'relative', paddingBottom: '10vh', backgroundColor: 'var(--bg-color)' }}>
       {/* Title */}
       <div style={{ padding: '8rem 5% 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-light)', fontWeight: 600, marginBottom: '0.5rem' }}>
            Flagship Industry Case Studies (4)
          </div>
          <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.95rem' }}>
            Spotlighting top builds across FinTech, SaaS, E-Commerce & CleanTech
          </p>
        </div>
        <a 
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            window.lenis ? window.lenis.scrollTo('#services', { duration: 1.2 }) : document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{ fontSize: '0.85rem', color: '#fff', backgroundColor: '#111', border: '1px solid var(--border-color)', padding: '0.6rem 1.2rem', borderRadius: '25px', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
        >
          <span>Explore All 10 Projects in Services</span>
          <span style={{ color: '#ff3300' }}>↓</span>
        </a>
      </div>

       {/* Sticky Stacking Cards Container */}
       <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column' }}>
         {featuredWorks.map((project, idx) => (
             <div key={idx} className="card-wrapper" style={{
               position: 'sticky',
               top: '5vh',
               height: '100vh',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               width: '100%',
               padding: '0 5%',
               transformOrigin: 'top center'
             }}>
                
                {/* Left Info (Year & Index) */}
                <div className="side-text" style={{ position: 'absolute', left: '5%', display: 'flex', flexDirection: 'column', zIndex: 10 }}>
                   <span style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Index</span>
                   <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-color)', marginBottom: '1rem' }}>#{String(idx + 1).padStart(2, '0')}</span>
                   <span style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Year</span>
                   <span style={{ fontWeight: 600, color: 'var(--text-color)' }}>{project.year}</span>
                </div>

                {/* Main Card with link navigation */}
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="main-card" 
                  style={{
                    width: '78%',
                    height: '80vh',
                    backgroundColor: '#111',
                    borderRadius: '28px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'block',
                    textDecoration: 'none',
                    boxShadow: '0 -20px 50px rgba(0,0,0,0.12)',
                    transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                   {/* Top Pill Badge */}
                   <div style={{ 
                     position: 'absolute', 
                     top: '2rem', 
                     left: '50%', 
                     transform: 'translateX(-50%)', 
                     zIndex: 2, 
                     display: 'flex', 
                     alignItems: 'center', 
                     backgroundColor: 'rgba(0,0,0,0.65)', 
                     backdropFilter: 'blur(16px)', 
                     padding: '0.6rem 1.4rem', 
                     borderRadius: '50px', 
                     color: '#fff', 
                     fontSize: '0.85rem',
                     border: '1px solid rgba(255,255,255,0.2)',
                     boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                     whiteSpace: 'nowrap'
                   }}>
                      <span style={{ fontWeight: 700, marginRight: '0.75rem', letterSpacing: '-0.01em' }}>{project.title}</span> 
                      <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span> 
                      <span style={{ marginLeft: '0.75rem', color: '#4ade80', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        Visit Live ↗
                      </span>
                   </div>
                   
                   {/* Project Image */}
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     style={{ 
                       width: '100%', 
                       height: '100%', 
                       objectFit: 'cover',
                       objectPosition: 'top center',
                       transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                     }} 
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                   />

                   {/* Subtle Bottom Gradient Overlay with title and prompt */}
                   <div style={{
                     position: 'absolute',
                     bottom: 0,
                     left: 0,
                     right: 0,
                     padding: '2.5rem 2rem 1.5rem',
                     background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'flex-end',
                     color: '#fff'
                   }}>
                     <div>
                       <div style={{ fontSize: '0.75rem', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{project.niche}</div>
                       <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{project.title}</div>
                     </div>
                     <span style={{ fontSize: '0.8rem', backgroundColor: 'rgba(255,255,255,0.15)', padding: '0.35rem 0.8rem', borderRadius: '20px', backdropFilter: 'blur(10px)' }}>
                       {project.url.replace('https://', '').replace(/\/$/, '')}
                     </span>
                   </div>
                </a>

                {/* Right Info (Niche) */}
                <div className="side-text" style={{ position: 'absolute', right: '5%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', zIndex: 10 }}>
                   <span style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Category</span>
                   <span style={{ fontWeight: 600, color: 'var(--text-color)', textAlign: 'right', maxWidth: '140px' }}>{project.niche}</span>
                </div>

             </div>
         ))}
       </div>
    </section>
  );
};

export default Works;
