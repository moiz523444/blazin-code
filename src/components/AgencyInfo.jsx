import React from 'react';
import { motion } from 'framer-motion';

const AgencyInfo = () => {
  const awards = [
    { num: '01', logo: 'FWA', name: 'TheFWA', desc: '3x FWA of the Day' },
    { num: '02', logo: 'W.', name: 'Awwwards', desc: '15 awards. 4x Site of the Day' },
    { num: '03', logo: 'CSS', name: 'CSS DA', desc: '25x UI, UX, Innovation' },
    { num: '04', logo: 'ORP', name: 'Orpetron', desc: '4x SOTD, SOTM, OWDA' },
    { num: '05', logo: 'RED', name: 'Red Dot Awards', desc: '1x Winner Brand identity' },
    { num: '06', logo: 'WIN', name: 'CSS Winner', desc: '5x Site of the Day, Dev Award' },
  ];

  // Double the array to create a seamless infinite loop
  const infiniteAwards = [...awards, ...awards, ...awards];

  return (
    <section style={{ padding: '8rem 0', display: 'flex', flexDirection: 'column', gap: '6rem' }}>
      
      {/* Top Section: Text + Clutch Widget */}
      <div style={{ padding: '0 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4rem' }}>
        
        {/* Left Side: Headings */}
        <div style={{ flex: '1 1 600px', maxWidth: '800px' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-light)', marginBottom: '2rem', fontWeight: 600 }}>
            WE ARE
          </div>
          
          <h2 style={{
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 500,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            marginBottom: '2rem',
            color: 'var(--text-color)'
          }}>
            UI/UX design agency<br/>that keeps your<br/>product growing.
          </h2>
          
          <p style={{
            color: 'var(--text-light)',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            maxWidth: '500px'
          }}>
            Cosmos Studio provides UI/UX design services for growing digital products, helping teams move faster. We embed into your team, learn your product inside out, and becomes the design partner you never have to re-onboard.
          </p>
        </div>

        {/* Right Side: Clutch Widget Replica */}
        <div style={{ 
          width: '320px', 
          backgroundColor: '#fff', 
          borderRadius: '12px', 
          border: '1px solid #e5e5e5',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          {/* Widget Header */}
          <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ backgroundColor: '#111', color: '#fff', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700 }}>CLUTCH</div>
            <div style={{ fontWeight: 600, color: '#333' }}>Cosmos Studio Reviews</div>
          </div>
          
          {/* Ratings */}
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <div style={{ backgroundColor: '#111', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '20px', fontWeight: 600 }}>5.0</div>
              <div style={{ color: '#ff3366', letterSpacing: '0.1em', fontSize: '0.9rem' }}>★★★★★</div>
              <div style={{ color: '#0066cc', fontSize: '0.85rem' }}>20 reviews</div>
            </div>
            
            {['Scheduling', 'Quality', 'Cost', 'Would Refer'].map((item, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#555', marginBottom: '0.25rem' }}>
                  <span>{item}</span>
                  <span style={{ fontWeight: 600 }}>5.0</span>
                </div>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[1,2,3,4,5].map(bar => <div key={bar} style={{ height: '4px', flex: 1, backgroundColor: '#ff3366', borderRadius: '2px' }}></div>)}
                </div>
              </div>
            ))}
          </div>

          {/* Widget Footer */}
          <div style={{ backgroundColor: '#1f2937', padding: '1rem', textAlign: 'center', color: '#fff', fontSize: '0.85rem' }}>
            Powered by <span style={{ fontWeight: 700 }}>Clutch</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Infinite Auto-Scrolling Awards Cards */}
      <div style={{ 
        width: '100%', 
        overflow: 'hidden', 
        paddingBottom: '2rem',
        display: 'flex'
      }}>
        <motion.div 
          animate={{ x: ['0%', '-33.333333%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
          style={{ display: 'flex', gap: '1.5rem', paddingLeft: '1.5rem' }}
        >
          {infiniteAwards.map((award, idx) => (
            <div key={idx} style={{ width: '250px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
              {/* White Card */}
              <div style={{
                width: '100%',
                aspectRatio: '1/1',
                backgroundColor: '#fff',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '1.5rem',
                border: '1px solid #f0f0f0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
              }}>
                <span style={{ position: 'absolute', top: '1.5rem', fontSize: '0.75rem', color: '#999', fontWeight: 500 }}>
                  ({award.num})
                </span>
                <span style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.05em', color: '#111' }}>
                  {award.logo}
                </span>
              </div>
              
              {/* Texts below card */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 600, fontSize: '1rem', color: '#111', marginBottom: '0.25rem' }}>{award.name}</div>
                <div style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{award.desc}</div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default AgencyInfo;
