import React from 'react';
import { motion } from 'framer-motion';

const StartProject = () => {

  return (
    <section id="start-project" style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
       
       {/* Premium 3D Character Video Background */}
       <div style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundColor: '#000', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain', 
              opacity: 0.9,
              transform: 'scale(0.8)' // slightly scale down so it's not overwhelmingly large
            }}
            src="/dance-character.mp4"
          />
       </div>

       {/* Dark Overlay Gradient to blend edges of the video into the section */}
       <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 30%, #000 90%)', zIndex: 2, pointerEvents: 'none' }}></div>
       
       {/* Foreground Content */}
       <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 5%' }}>
          
          <motion.h1 
            style={{ fontSize: 'clamp(2.4rem, 7vw, 6.5rem)', fontWeight: 500, color: '#f5f5f5', lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: '2.5rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
             Start your project<br/>with Blazin Code
          </motion.h1>
          
          <motion.button 
            className="btn-magnetic"
            style={{ 
              position: 'relative',
              background: 'linear-gradient(135deg, #1d6bf3 0%, #0d4bcc 100%)', 
              color: '#ffffff', 
              border: '1px solid rgba(255, 255, 255, 0.35)', 
              padding: '1.25rem 3.4rem', 
              borderRadius: '50px', 
              fontSize: '1rem', 
              fontWeight: 700, 
              cursor: 'pointer',
              letterSpacing: '0.02em',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 20px 50px -10px rgba(22, 100, 246, 0.7), 0 0 30px rgba(56, 189, 248, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.85rem'
            }}
            onClick={() => window.location.href = 'mailto:support@blazincode.com'}
            whileHover={{ 
              scale: 1.06, 
              boxShadow: '0 25px 65px -10px rgba(22, 100, 246, 0.9), 0 0 45px rgba(56, 189, 248, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.7)',
              borderColor: '#ffffff'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
             {/* Small glowing beacon inside CTA */}
             <span style={{ 
               width: '8px', 
               height: '8px', 
               borderRadius: '50%', 
               backgroundColor: '#38bdf8', 
               boxShadow: '0 0 10px #38bdf8',
               display: 'inline-block' 
             }}></span>
             <span>Get in Touch</span>
             <span style={{ fontSize: '1.1rem', fontWeight: 400 }}>→</span>
          </motion.button>
       </div>

    </section>
  )
}

export default StartProject;
