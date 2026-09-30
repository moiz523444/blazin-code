import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  const services = [
    {
      num: '1',
      title: 'WEB DEVELOPMENT',
      tags: ['React', 'Next.js', 'Frontend', 'Backend', 'Full Stack', 'Performance'],
      image: '/mockups/web_dev.jpg',
      desc: 'Crafting high-performance, beautiful websites tailored to your brand. We build fast, scalable, and secure web solutions.'
    },
    {
      num: '2',
      title: 'MOBILE APP DEVELOPMENT',
      tags: ['iOS', 'Android', 'React Native', 'Flutter', 'Cross-Platform'],
      image: '/mockups/mobile_app.jpg',
      desc: 'Building native and cross-platform apps for iOS and Android. Engaging mobile experiences that keep users coming back.'
    },
    {
      num: '3',
      title: 'CUSTOM WEB APPLICATIONS',
      tags: ['Enterprise', 'Dashboard', 'Portal', 'API Integration', 'Cloud'],
      image: '/mockups/web_app.jpg',
      desc: 'Scalable and secure web apps engineered for complex business needs. Automate workflows and scale your operations.'
    },
    {
      num: '4',
      title: 'SEO & GROWTH',
      tags: ['Technical SEO', 'Content Strategy', 'Analytics', 'Conversion Rate'],
      image: '/mockups/seo_growth.jpg',
      desc: 'Data-driven strategies to dominate search results and scale traffic. Turn visitors into loyal customers.'
    },
    {
      num: '5',
      title: 'ECOMMERCE SOLUTIONS',
      tags: ['Shopify', 'WooCommerce', 'Custom Store', 'Payments', 'Cart'],
      image: '/mockups/ecommerce.jpg',
      desc: 'High-converting online stores built on Shopify and custom architectures. Optimized for sales and seamless checkout.'
    },
    {
      num: '6',
      title: 'SOCIAL MEDIA MARKETING',
      tags: ['Campaigns', 'Brand Awareness', 'Engagement', 'Content Creation'],
      image: '/mockups/social_media.jpg',
      desc: 'Creative campaigns that engage audiences and build brand loyalty. Stand out on every social platform.'
    },
    {
      num: '7',
      title: 'UI/UX DESIGN',
      tags: ['User Research', 'Wireframes', 'Prototyping', 'Design Systems'],
      image: '/mockups/ui_ux.jpg',
      desc: 'Intuitive, award-winning interfaces designed for conversion. We make complex systems feel incredibly simple.'
    },
    {
      num: '8',
      title: 'SAAS ENGINEERING',
      tags: ['Architecture', 'Multi-tenant', 'Microservices', 'Scalability'],
      image: '/mockups/saas.jpg',
      desc: 'End-to-end development of scalable Software as a Service products. Built robustly for rapid user growth.'
    }
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray('.service-wrapper');

    cards.forEach((card, i) => {
      if (i !== cards.length - 1) {
        const innerContent = card.querySelector('.service-content');

        gsap.to(innerContent, {
          scale: 0.95,
          opacity: 0.3,
          scrollTrigger: {
            trigger: card,
            start: "top 15%",
            endTrigger: cards[i + 1],
            end: "top 35%",
            scrub: true,
          }
        });
      }
    });
  }, []);

  return (
    <section ref={containerRef} id="services" style={{ position: 'relative', padding: '6rem 0 10vh', backgroundColor: '#050505', color: '#fff' }}>

      {/* Top Toggles */}
      <div style={{ padding: '0 5%', marginBottom: '3rem', display: 'flex', gap: '1rem' }}>
        <button style={{ backgroundColor: '#fff', color: '#111', padding: '0.6rem 1.25rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.85rem' }}>
          Services <span style={{ color: '#999', fontSize: '0.7rem', marginLeft: '0.25rem' }}>(4)</span>
        </button>
        <button style={{ backgroundColor: '#222', color: '#999', padding: '0.6rem 1.25rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.85rem', border: '1px solid #333' }}>
          Industries <span style={{ color: '#666', fontSize: '0.7rem', marginLeft: '0.25rem' }}>(10)</span>
        </button>
      </div>

      {/* Sticky Stacking Services Container */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column' }}>
        {services.map((service, idx) => (

          /* The sticky wrapper uses 45vh so 2 services are visible at once, tightly stacked */
          <div key={idx} className="service-wrapper" style={{
            position: 'sticky',
            top: '15vh',
            height: '45vh',
            width: '100%',
            padding: '0 5%',
          }}>

            {/* The actual solid card that covers the previous one, height is strictly natural now */}
            <div className="service-content" style={{
              width: '100%',
              backgroundColor: '#050505',
              position: 'relative',
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: '1px dotted #333',
              paddingTop: '2.5rem',
              paddingBottom: '2.5rem',
              transformOrigin: 'top center'
            }}>

              {/* Left Side (Title & Tags) */}
              <div style={{ width: '45%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ff3300', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.65rem', fontWeight: 700 }}>
                    {service.num}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f5f5f5', letterSpacing: '-0.02em' }}>{service.title}</h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', maxWidth: '400px' }}>
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} style={{ backgroundColor: '#1f1f1f', padding: '0.4rem 0.8rem', borderRadius: '50px', fontSize: '0.75rem', color: '#aaa' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: '0.5rem' }}>
                  <button style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600 }}>
                    Show more
                  </button>
                </div>
              </div>

              {/* Right Side (Image & Desc) */}
              <div style={{ width: '45%', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '450px' }}>
                <div style={{ width: '100%', height: '220px', borderRadius: '12px', overflow: 'hidden' }}>
                  <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  {service.desc}
                </p>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
