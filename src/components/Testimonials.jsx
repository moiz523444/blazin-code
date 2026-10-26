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
      text: "Blazin Code engineered our decentralized financial analytics platform with remarkable speed and rock-solid architecture. A top-tier dev team.",
      author: "Founding Member, Fireball Finance",
      verified: true
    },
    {
      text: "The custom eCommerce experience built by Blazin Code skyrocketed our conversion rate and made our organic brand truly stand out.",
      author: "VP of Digital, Bathing Culture",
      verified: true
    },
    {
      text: "Building an in-browser graphics SaaS is extraordinarily complex. Blazin Code delivered lightning-fast canvas rendering and reliable cloud scale.",
      author: "Product Lead, Plasfy",
      verified: true
    },
    {
      text: "Our property booking UX is seamless, responsive, and loved by our guests across New Zealand. Highly recommend their engineering prowess.",
      author: "Managing Director, Lodg",
      verified: true
    },
    {
      text: "Their attention to architectural detail, clean code, and modern aesthetic transformed our digital presence into an award-worthy showcase.",
      author: "Principal Architect, Modify",
      verified: true
    },
    {
      text: "Blazin Code took our industrial thermal energy modeling tools and turned them into a powerful, interactive clean-tech platform.",
      author: "Chief Technology Officer, Exergy3",
      verified: true
    }
  ];

  return (
    <section ref={containerRef} id="testimonials" style={{ padding: '8rem 5%', backgroundColor: '#f5f5f5', color: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Top Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
          <span style={{ color: '#1664f6', letterSpacing: '2px', fontSize: '1.2rem' }}>★★★★★</span>
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
              <span style={{ color: '#1664f6', fontSize: '1rem', letterSpacing: '1px' }}>★★★★★</span>
              <span style={{ color: '#1664f6', fontSize: '0.8rem', fontWeight: 600 }}>20 reviews</span>
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
                <span style={{ color: '#1664f6', fontSize: '0.9rem', letterSpacing: '1px' }}>★★★★★</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#444', lineHeight: 1.5, marginBottom: '2rem', flex: 1 }}>
                "{rev.text}"
              </p>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.5rem' }}>{rev.author}</div>
                {rev.verified && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#1664f6', fontSize: '0.7rem', fontWeight: 600 }}>
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
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1000px', flexWrap: 'wrap', gap: '2.5rem' }}>
        
        <div style={{ flex: '1 1 200px' }}>
          <div 
            className="count-up-number" 
            data-target="500" 
            data-suffix=""
            style={{ fontSize: 'clamp(3.8rem, 10vw, 8rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.05em', color: '#111', marginBottom: '0.75rem' }}
          >
            0
          </div>
          <div style={{ fontSize: '0.9rem', color: '#444', fontWeight: 500, maxWidth: '200px' }}>
            Projects successfully launched for clients
          </div>
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <div 
            className="count-up-number" 
            data-target="12" 
            data-suffix=""
            style={{ fontSize: 'clamp(3.8rem, 10vw, 8rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.05em', color: '#111', marginBottom: '0.75rem' }}
          >
            0
          </div>
          <div style={{ fontSize: '0.9rem', color: '#444', fontWeight: 500, maxWidth: '200px' }}>
            Years in Web & UX Design
          </div>
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <div 
            className="count-up-number" 
            data-target="60" 
            data-suffix="+"
            style={{ fontSize: 'clamp(3.8rem, 10vw, 8rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.05em', color: '#111', marginBottom: '0.75rem' }}
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
