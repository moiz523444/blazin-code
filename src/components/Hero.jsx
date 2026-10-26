import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

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
      { scale: 0.95, opacity: 0, y: 40 },
      { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    );

    // Scroll Animation: Subtle smooth scale without shifting down
    gsap.to(videoRef.current, {
      scale: 0.97,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

  }, []);

  return (
    <section ref={containerRef} className="hero-section">

      {/* Massive Top Text */}
      <div className="hero-text-container">
        <div ref={textRef} style={{ width: '100%', display: 'flex', justifyContent: 'center', transformOrigin: 'bottom center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 150" className="hero-svg-title">
            <defs>
              <linearGradient id="heroBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#1664f6" />
              </linearGradient>
            </defs>
            <text x="50%" y="80%" textAnchor="middle" style={{ fontSize: '115px', fontWeight: 900, fontFamily: 'sans-serif', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              <tspan fill="var(--text-color)">BLAZIN </tspan>
              <tspan fill="url(#heroBlueGrad)">CODE</tspan>
            </text>
          </svg>
        </div>
      </div>

      {/* Services Row with responsive wrap */}
      <div className="hero-services-row">
        <span>Web & Cloud Architecture</span>
        <span>Mobile & Cross-Platform</span>
        <span>Custom SaaS Engineering</span>
        <span>UI/UX Product Design</span>
      </div>

      {/* Showreel Video */}
      <div ref={videoRef} className="hero-video-box">
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            objectPosition: 'center center',
            display: 'block' 
          }}
          src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc%2F6a3148893a8ffe203d76b9f2_showreel-v1_mp4_mp4.mp4"
        ></video>
      </div>

    </section>
  );
};

export default Hero;
