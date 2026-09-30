import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const numbers = gsap.utils.toArray('.count-up-number');
    
    numbers.forEach((num) => {
      const targetVal = parseInt(num.getAttribute('data-target'), 10);
      const suffix = num.getAttribute('data-suffix') || '';
      
      const proxy = { val: 0 };
      
      gsap.to(proxy, {
        val: targetVal,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: num,
          start: "top 85%", // Starts animating when number comes into view
        },
        onUpdate: () => {
          num.innerText = Math.floor(proxy.val) + suffix;
        }
      });
    });
  }, []);

  const reviews = [
    {
      text: "Their attention to detail and ability to maintain consistency make the experience feel very professional and smooth.",
      author: "Co-Founder, Fokus Nachhilfe",
      verified: true
    },
    {
      text: "The redesigned website gives Casavo a significantly stronger digital presence.",
      author: "Growth Specialist, Casavo",
      verified: true
    },
    {
      text: "Their proactive approach and clear explanations made working with them easy and reassuring.",
      author: "CEO, Obriy Design Buro",
      verified: true
    },
    {
      text: "Their attention to detail and ability to keep everything consistent made the whole experience feel very professional.",
      author: "CEO, Freq",
      verified: true
    },
    {
      text: "What impressed us most was how creatively Blazin Code approached every detail.",
      author: "CEO, Sasquatch Digital",
      verified: true
    },
    {
      text: "We had a smooth and enjoyable experience working with Blazin Code.",
      author: "Founder, Profpereklad",
      verified: true
    }
  ];

  return (
    <section ref={containerRef} id="testimonials" style={{ padding: '8rem 5%', backgroundColor: '#f5f5f5', color: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Top Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
          <span style={{ color: '#e50000', letterSpacing: '2px', fontSize: '1.2rem' }}>★★★★★</span>
          <span style={{ textDecoration: 'underline', color: '#555' }}>Verified by Clutch™ reviews</span>
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '800px', margin: '0 auto' }}>
          Trusted by product teams<br/>across the US and Europe
        </h2>
      </div>

      {/* Clutch Reviews Widget Mock */}
      <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '2.5rem', width: '100%', maxWidth: '1000px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', marginBottom: '8rem' }}>
        
        {/* Widget Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 500 }}>Blazin Code Reviews</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontWeight: 600 }}>5.0</span>
              <span style={{ color: '#e50000', fontSize: '1rem', letterSpacing: '1px' }}>★★★★★</span>
              <span style={{ color: '#0066cc', fontSize: '0.8rem', fontWeight: 500 }}>20 reviews</span>
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', color: '#555', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Powered by <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111' }}>Clutch</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {reviews.map((rev, idx) => (
            <div key={idx} style={{ padding: '1.5rem', border: '1px solid #eaeaea', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>5.0</span>
                <span style={{ color: '#e50000', fontSize: '0.9rem', letterSpacing: '1px' }}>★★★★★</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#444', lineHeight: 1.5, marginBottom: '2rem', flex: 1 }}>
                "{rev.text}"
              </p>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.5rem' }}>{rev.author}</div>
                {rev.verified && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#009944', fontSize: '0.7rem' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Verified Review
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Big Numbers Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1000px', flexWrap: 'wrap', gap: '3rem' }}>
        
        <div style={{ flex: '1 1 250px' }}>
          <div 
            className="count-up-number" 
            data-target="500" 
            data-suffix=""
            style={{ fontSize: 'clamp(5rem, 10vw, 8rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.05em', color: '#111', marginBottom: '1rem' }}
          >
            0
          </div>
          <div style={{ fontSize: '0.9rem', color: '#444', fontWeight: 500, maxWidth: '200px' }}>
            Projects successfully launched for clients
          </div>
        </div>

        <div style={{ flex: '1 1 250px' }}>
          <div 
            className="count-up-number" 
            data-target="12" 
            data-suffix=""
            style={{ fontSize: 'clamp(5rem, 10vw, 8rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.05em', color: '#111', marginBottom: '1rem' }}
          >
            0
          </div>
          <div style={{ fontSize: '0.9rem', color: '#444', fontWeight: 500, maxWidth: '200px' }}>
            Years in Web & UX Design
          </div>
        </div>

        <div style={{ flex: '1 1 250px' }}>
          <div 
            className="count-up-number" 
            data-target="60" 
            data-suffix="+"
            style={{ fontSize: 'clamp(5rem, 10vw, 8rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.05em', color: '#111', marginBottom: '1rem' }}
          >
            0+
          </div>
          <div style={{ fontSize: '0.9rem', color: '#444', fontWeight: 500, maxWidth: '200px' }}>
            International Design Awards
          </div>
        </div>

      </div>

    </section>
  );
};

export default Testimonials;
