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
            src="https://video.cosmos.studio/cosmonaut-dance_Silly-Dance.webm"
          />
       </div>

       {/* Dark Overlay Gradient to blend edges of the video into the section */}
       <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 30%, #000 90%)', zIndex: 2, pointerEvents: 'none' }}></div>
       
       {/* Foreground Content */}
       <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <motion.h1 
            style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', fontWeight: 500, color: '#f5f5f5', lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: '2.5rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
             Start your project<br/>with Blazin Code
          </motion.h1>
          
          <motion.button 
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)', 
              backdropFilter: 'blur(10px)', 
              color: '#fff', 
              border: '1px solid rgba(255,255,255,0.15)', 
              padding: '1.2rem 3rem', 
              borderRadius: '50px', 
              fontSize: '0.9rem', 
              fontWeight: 600, 
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', // Smooth Apple-like easing
              boxShadow: '0px 4px 20px rgba(0,0,0,0.5)'
            }}
            onClick={() => window.location.href = 'mailto:support@blazincode.com'}
            whileHover={{ 
              backgroundColor: '#fff', 
              color: '#000', 
              scale: 1.05, 
              boxShadow: '0px 15px 35px rgba(255,255,255,0.25)',
              borderColor: '#fff'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
             Get in Touch
          </motion.button>
       </div>

    </section>
  )
}

export default StartProject;
