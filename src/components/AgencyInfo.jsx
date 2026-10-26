import React from 'react';
import { motion } from 'framer-motion';

const AgencyInfo = () => {
  const techStack = [
    { 
      num: '01', 
      name: 'React.js', 
      desc: 'Frontend & Web Apps',
      icon: (
        <svg width="56" height="56" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    },
    { 
      num: '02', 
      name: 'Flutter', 
      desc: 'Cross-Platform Mobile',
      icon: (
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
          <path d="M14.314 0L2.3 12 6.5 16.2 22.7 0h-8.386z" fill="#42A5F5"/>
          <path d="M14.314 11.571L8.414 17.471 14.314 23.371H22.7l-5.9-5.9 5.9-5.9h-8.386z" fill="#0D47A1"/>
          <path d="M10.5 19.557l3.814-3.814 2.486 2.486L14.314 20.714H10.5v-1.157z" fill="#29B6F6"/>
        </svg>
      )
    },
    { 
      num: '03', 
      name: 'Java', 
      desc: 'Enterprise & Backend',
      icon: (
        <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
          <path d="M8.5 16.5c-2.5-.5-3.5-2-.5-3 1.5-.5 3.5-.5 4.5.5s-.5 2-4 2.5z" stroke="#E76F00" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 12c2.5 1 3.5 2.5 1 3.5-3 1-6.5.5-8-.5" stroke="#E76F00" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M6 19c4.5 1 10 1 12-.5.5-.5-1-1.5-3-1.5-4 0-8 .5-9 2z" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 2c-1 3-3 5-1 8 1-2 2-4 1-8z" fill="#E76F00"/>
          <path d="M15 4c-.5 2.5-2 4 0 6 .5-1.5 1-3 0-6z" fill="#5382A1"/>
        </svg>
      )
    },
    { 
      num: '04', 
      name: 'Next.js', 
      desc: 'Full-Stack React Framework',
      icon: (
        <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000"/>
          <path d="M7 8v8M17 16l-7-9.5V8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      num: '05', 
      name: 'Python', 
      desc: 'AI, ML & Backend API',
      icon: (
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
          <path d="M11.9 2c-3.4 0-5.4 1.5-5.4 3.5v2.6h5.5v.8H4.6C2.6 8.9 1 10.6 1 13.5c0 2.8 1.6 4.3 4.3 4.3h1.8v-2.2c0-2.1 1.7-3.8 3.8-3.8h4.5c.9 0 1.6-.7 1.6-1.6V5.5C17 3.5 15.3 2 11.9 2zm-1.8 1.8a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB"/>
          <path d="M12.1 22c3.4 0 5.4-1.5 5.4-3.5v-2.6H12v-.8h7.4c2 0 3.6-1.7 3.6-4.6 0-2.8-1.6-4.3-4.3-4.3h-1.8v2.2c0 2.1-1.7 3.8-3.8 3.8H8.6c-.9 0-1.6.7-1.6 1.6v4.7c0 2 1.7 3.5 5.1 3.5zm1.8-1.8a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B"/>
        </svg>
      )
    },
    { 
      num: '06', 
      name: 'Node.js', 
      desc: 'Scalable Microservices',
      icon: (
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z" stroke="#339933" strokeWidth="2" strokeLinejoin="round" fill="rgba(51,153,51,0.08)"/>
          <path d="M12 7.5v9M8.5 10l7 4M8.5 14l7-4" stroke="#339933" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      num: '07', 
      name: 'TypeScript', 
      desc: 'Type-Safe Architecture',
      icon: (
        <div style={{ width: '48px', height: '48px', backgroundColor: '#3178C6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '1.6rem', fontFamily: 'monospace' }}>
          TS
        </div>
      )
    },
    { 
      num: '08', 
      name: 'Swift / iOS', 
      desc: 'Native Apple Ecosystem',
      icon: (
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
          <path d="M20.5 4.5c-4.5 4-8.5 8.5-16.5 15C10 16 14.5 12 16.5 7.5c-3 1.5-6.5 3-10.5 3.5 6-4 11-6.5 14.5-6.5z" fill="#FA7343"/>
        </svg>
      )
    },
    { 
      num: '09', 
      name: 'PostgreSQL & Cloud', 
      desc: 'Databases & DevOps',
      icon: (
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6" rx="9" ry="3" stroke="#336791" strokeWidth="2"/>
          <path d="M3 6v6c0 1.66 4.03 3 9 3s9-1.34 9-3V6" stroke="#336791" strokeWidth="2"/>
          <path d="M3 12v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" stroke="#336791" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  // Double the array to create a seamless infinite loop
  const infiniteTech = [...techStack, ...techStack, ...techStack];

  return (
    <section id="expertise" className="agency-info-section" style={{ padding: '5rem 0', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      
      {/* Top Section: Text + Clutch Widget */}
      <div style={{ padding: '0 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '3rem' }}>
        
        {/* Left Side: Headings */}
        <div style={{ flex: '1 1 320px', maxWidth: '800px' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-light)', marginBottom: '1.5rem', fontWeight: 600 }}>
            OUR TECH STACK & EXPERTISE
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            color: 'var(--text-color)'
          }}>
            Software agency<br/>that accelerates your<br/>digital products.
          </h2>
          
          <p style={{
            color: 'var(--text-light)',
            fontSize: '1rem',
            lineHeight: 1.6,
            maxWidth: '500px'
          }}>
            Blazin Code engineers scalable software, high-performance web applications, and intuitive digital experiences. We embed directly with your engineering vision to ship robust, future-proof code that scales.
          </p>
        </div>

        {/* Right Side: Clutch Widget Replica */}
        <div style={{ 
          width: '100%',
          maxWidth: '360px', 
          backgroundColor: '#fff', 
          borderRadius: '16px', 
          border: '1px solid #e5e5e5',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          {/* Widget Header */}
          <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ backgroundColor: '#111', color: '#fff', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700 }}>CLUTCH</div>
            <div style={{ fontWeight: 600, color: '#333' }}>Blazin Code Reviews</div>
          </div>
          
          {/* Ratings */}
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <div style={{ backgroundColor: '#111', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '20px', fontWeight: 600 }}>5.0</div>
              <div style={{ color: '#1664f6', letterSpacing: '0.1em', fontSize: '0.9rem' }}>★★★★★</div>
              <div style={{ color: '#1664f6', fontSize: '0.85rem', fontWeight: 600 }}>20 reviews</div>
            </div>
            
            {['Engineering', 'Velocity', 'Code Quality', 'Reliability'].map((item, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#555', marginBottom: '0.25rem' }}>
                  <span>{item}</span>
                  <span style={{ fontWeight: 600 }}>5.0</span>
                </div>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[1,2,3,4,5].map(bar => <div key={bar} style={{ height: '4px', flex: 1, background: 'linear-gradient(90deg, #1664f6, #38bdf8)', borderRadius: '2px' }}></div>)}
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

      {/* Bottom Section: Infinite Auto-Scrolling Tech Stack Cards */}
      <div style={{ 
        width: '100%', 
        overflow: 'hidden', 
        paddingBottom: '2rem',
        display: 'flex'
      }}>
        <motion.div 
          animate={{ x: ['0%', '-33.333333%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
          style={{ display: 'flex', gap: '1.5rem', paddingLeft: '1.5rem' }}
        >
          {infiniteTech.map((tech, idx) => (
            <div key={idx} style={{ width: '250px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
              {/* White Card */}
              <div style={{
                width: '100%',
                aspectRatio: '1/1',
                backgroundColor: '#fff',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '1.5rem',
                border: '1px solid #ededed',
                boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <span style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', fontSize: '0.75rem', color: '#aaa', fontWeight: 600 }}>
                  ({tech.num})
                </span>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                  {tech.icon}
                </div>
              </div>
              
              {/* Texts below card */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#111', marginBottom: '0.25rem', letterSpacing: '-0.01em' }}>{tech.name}</div>
                <div style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{tech.desc}</div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default AgencyInfo;
