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
    <section ref={containerRef} className="hero-section">

      {/* Massive Top Text */}
      <div className="hero-text-container">
        <div ref={textRef} style={{ width: '100%', display: 'flex', justifyContent: 'center', transformOrigin: 'bottom center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 150" className="hero-svg-title">
            <text x="50%" y="80%" textAnchor="middle" style={{ fontSize: '120px', fontWeight: 900, fontFamily: 'sans-serif', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              BLAZIN CODE
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
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
          src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc%2F6a3148893a8ffe203d76b9f2_showreel-v1_mp4_mp4.mp4"
        ></video>
      </div>

    </section>
  );
};

export default Hero;
