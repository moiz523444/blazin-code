import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Initial Text Reveal
    gsap.fromTo(
      textRef.current,
      { y: '100%', opacity: 0, rotateX: -20 },
      { y: '0%', opacity: 1, rotateX: 0, duration: 1.5, ease: 'power4.out', delay: 0.1 }
    );

    // Initial Video Reveal
    gsap.fromTo(
      videoRef.current,
      { scale: 0.8, opacity: 0, y: 100 },
      { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', delay: 0.4 }
    );

    // Scroll Animation: Scale down video on scroll
    gsap.to(videoRef.current, {
      scale: 0.9,
      y: 100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <section ref={containerRef} style={{ padding: 'calc(var(--nav-height) + 2rem) 5% 0', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>

      {/* Massive Top Text */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
        perspective: '1000px'
      }}>
        <div ref={textRef} style={{ width: '100%', display: 'flex', justifyContent: 'center', transformOrigin: 'bottom center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 150" style={{ width: '100%', height: 'auto', fill: 'var(--text-color)' }}>
            <text x="50%" y="80%" textAnchor="middle" style={{ fontSize: '120px', fontWeight: 900, fontFamily: 'sans-serif', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              BLAZIN CODE
            </text>
          </svg>
        </div>
      </div>

      {/* Services Row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--text-light)',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <span>Web & Cloud Architecture</span>
        <span>Mobile & Cross-Platform</span>
        <span>Custom SaaS Engineering</span>
        <span>UI/UX Product Design</span>
      </div>

      {/* Showreel Video */}
      <div ref={videoRef} style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        height: '100vh',
        backgroundColor: '#0d0d0d',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        willChange: 'transform'
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
          src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc%2F6a3148893a8ffe203d76b9f2_showreel-v1_mp4_mp4.mp4"
        ></video>
      </div>

    </section>
  );
};

export default Hero;
