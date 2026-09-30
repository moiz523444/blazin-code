import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const containerRef = useRef(null);

  const projects = [
    { title: 'Neo Vision', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', year: '2024', niche: 'AI-Powered Products' },
    { title: 'Aero Dynamics', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2500&auto=format&fit=crop', year: '2024', niche: 'Web Development' },
    { title: 'Quantum Shift', image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2500&auto=format&fit=crop', year: '2023', niche: 'Branding' },
    { title: 'Nexus Portal', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2500&auto=format&fit=crop', year: '2023', niche: 'SaaS Platform' },
  ];

  useEffect(() => {
    // Advanced GSAP: Scale down the card and fade out text as the next one covers it
    const cards = gsap.utils.toArray('.card-wrapper');
    
    cards.forEach((card, i) => {
      // We don't animate the last card scaling down
      if (i !== cards.length - 1) {
        const mainCard = card.querySelector('.main-card');
        const sideTexts = card.querySelectorAll('.side-text');

        // Scale and darken ONLY the image block
        gsap.to(mainCard, {
          scale: 0.9,
          opacity: 0.3,
          scrollTrigger: {
            trigger: card,
            start: "top 5%", 
            endTrigger: cards[i + 1],
            end: "top 20%", 
            scrub: true,
          }
        });

        // Completely fade out the side text so it doesn't overlap
        gsap.to(sideTexts, {
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 5%",
            endTrigger: cards[i + 1],
            end: "top 30%", // Fades out before next card reaches it
            scrub: true,
          }
        });
      }
    });
  }, []);

  return (
    <section ref={containerRef} id="works" style={{ position: 'relative', paddingBottom: '10vh', backgroundColor: 'var(--bg-color)' }}>
       {/* Title */}
       <div style={{ padding: '8rem 5% 4rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-light)', fontWeight: 600 }}>
        Selected works
      </div>

       {/* Sticky Stacking Cards Container */}
       <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column' }}>
         {projects.map((project, idx) => (
             /* The element that actually sticks */
             <div key={idx} className="card-wrapper" style={{
               position: 'sticky',
               top: '5vh', // Stops near the top of the viewport
               height: '100vh', // Forces the scroll to take 1 full viewport height per card
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               width: '100%',
               padding: '0 5%',
               transformOrigin: 'top center'
             }}>
                
                {/* Left Info (Year) */}
                <div className="side-text" style={{ position: 'absolute', left: '5%', display: 'flex', flexDirection: 'column', zIndex: 10 }}>
                   <span style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Year</span>
                   <span style={{ fontWeight: 600, color: 'var(--text-color)' }}>{project.year}</span>
                </div>

                {/* Main Card */}
                <div className="main-card" style={{
                  width: '75%',
                  height: '80vh',
                  backgroundColor: '#111', // Solid background so it covers the card underneath
                  borderRadius: '32px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 -20px 50px rgba(0,0,0,0.08)' // Shadow dropping onto the card behind it
                }}>
                   
                   {/* Top Pill Badge */}
                   <div style={{ 
                     position: 'absolute', 
                     top: '2rem', 
                     left: '50%', 
                     transform: 'translateX(-50%)', 
                     zIndex: 2, 
                     display: 'flex', 
                     alignItems: 'center', 
                     backgroundColor: 'rgba(255,255,255,0.1)', 
                     backdropFilter: 'blur(10px)', 
                     padding: '0.5rem 1rem', 
                     borderRadius: '50px', 
                     color: '#fff', 
                     fontSize: '0.85rem',
                     border: '1px solid rgba(255,255,255,0.2)'
                   }}>
                      <span style={{ fontWeight: 600, marginRight: '0.75rem' }}>{project.title}</span> 
                      <span style={{ color: 'rgba(255,255,255,0.4)' }}>|</span> 
                      <span style={{ marginLeft: '0.75rem', color: '#ccc' }}>See work</span>
                   </div>
                   
                   {/* Project Image */}
                   <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Right Info (Niche) */}
                <div className="side-text" style={{ position: 'absolute', right: '5%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', zIndex: 10 }}>
                   <span style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Niche</span>
                   <span style={{ fontWeight: 600, color: 'var(--text-color)' }}>{project.niche}</span>
                </div>

             </div>
         ))}
       </div>
    </section>
  );
};

export default Works;
