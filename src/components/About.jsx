import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {

  // Dummy avatar images for the team members
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop'
  ];

  return (
    <section id="about" className="about-section">

      {/* Left Side (White block) */}
      <div className="about-card-left">

        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#999', marginBottom: '2rem', fontWeight: 600 }}>
          ABOUT US
        </div>

        <h2 style={{
          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
          fontWeight: 500,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: '2rem',
          color: '#111'
        }}>
          A dedicated software team<br />that engineers scalable<br />and modern digital<br />solutions
        </h2>

        <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.6, maxWidth: '400px', marginBottom: '4rem' }}>
          We're not a freelancer who disappears after delivery, nor a rigid agency with endless layers. We are Blazin Code — an agile, full-stack software team dedicated to bringing complex ideas to life with speed and precision.
        </p>

        {/* Bottom Icons/Text row */}
        <div className="about-features-row">

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ marginTop: '4px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <div>
              <div style={{ fontWeight: 600, color: '#111', marginBottom: '0.25rem', fontSize: '0.95rem' }}>US based</div>
              <div style={{ color: '#999', fontSize: '0.8rem' }}>Remote-friendly team growing fast</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ marginTop: '4px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>
            </div>
            <div>
              <div style={{ fontWeight: 600, color: '#111', marginBottom: '0.25rem', fontSize: '0.95rem' }}>Senior team, lasting results</div>
              <div style={{ color: '#999', fontSize: '0.8rem' }}>We focus on quality over quantity</div>
            </div>
          </div>

        </div>
      </div>

      {/* Right Side (Dark block with Live Animations) */}
      <div className="about-card-right">

        {/* Tiny stars background with subtle blue ambient core */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at center, #333 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.25 }}></div>
        <div style={{ position: 'absolute', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(22, 100, 246, 0.18) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }}></div>

        {/* Center Text inside Orbits */}
        <div style={{ position: 'absolute', zIndex: 10, textAlign: 'center' }}>
          <h3 style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            A strong team of<br />real humans
          </h3>
          <p style={{ color: 'var(--brand-cyan, #38bdf8)', fontSize: '0.65rem', marginTop: '0.75rem', letterSpacing: '0.15em', fontWeight: 600 }}>
            NOT AI AGENTS
          </p>
        </div>

        {/* Orbit 1 (Inner) */}
        <div className="orbit-1" style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(22, 100, 246, 0.2)' }}></div>
        <motion.div
          className="orbit-1"
          style={{ position: 'absolute', width: '300px', height: '300px' }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {/* Avatar 1 */}
          <motion.div
            style={{ position: 'absolute', top: '-25px', left: '125px', width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(22, 100, 246, 0.4)' }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            <img src={avatars[0]} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
          </motion.div>
          {/* Avatar 2 */}
          <motion.div
            style={{ position: 'absolute', bottom: '-25px', right: '125px', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #0d0d0d' }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            <img src={avatars[1]} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
          </motion.div>
          {/* Avatar 3 */}
          <motion.div
            style={{ position: 'absolute', left: '-20px', top: '150px', width: '45px', height: '45px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #0d0d0d' }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            <img src={avatars[2]} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
          </motion.div>
        </motion.div>

        {/* Orbit 2 (Outer) */}
        <div className="orbit-2" style={{ position: 'absolute', width: '450px', height: '450px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)' }}></div>
        <motion.div
          className="orbit-2"
          style={{ position: 'absolute', width: '450px', height: '450px' }}
          animate={{ rotate: -360 }} // Rotates opposite direction
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {/* Avatar 4 */}
          <motion.div
            style={{ position: 'absolute', top: '40px', right: '40px', width: '55px', height: '55px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #0d0d0d' }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            <img src={avatars[3]} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
          </motion.div>
          {/* Avatar 5 */}
          <motion.div
            style={{ position: 'absolute', bottom: '20px', left: '100px', width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #0d0d0d' }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            <img src={avatars[4]} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
          </motion.div>
          {/* Avatar 6 */}
          <motion.div
            style={{ position: 'absolute', top: '200px', right: '-25px', width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #0d0d0d' }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            <img src={avatars[5]} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
          </motion.div>
          {/* Avatar 7 */}
          <motion.div
            style={{ position: 'absolute', top: '100px', left: '-15px', width: '45px', height: '45px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #0d0d0d' }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            <img src={avatars[6]} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
};

export default About;
