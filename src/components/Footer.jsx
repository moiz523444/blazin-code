import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [now, setNow] = useState(new Date());
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`New Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:support@blazincode.com?subject=${subject}&body=${body}`;
  };

  useEffect(() => {
    // Update the clocks every second for the live effect
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const clocks = [
    { label: 'UK, London', tz: 'Europe/London' },
    { label: 'USA, New York', tz: 'America/New_York' },
    { label: 'UAE, Dubai', tz: 'Asia/Dubai' },
    { label: 'Ukraine, Kyiv', tz: 'Europe/Kiev' },
  ];

  const formatTimeInfo = (date, timeZone) => {
    try {
      const timeStr = new Intl.DateTimeFormat('en-US', { timeZone, hour: '2-digit', minute: '2-digit', hour12: true }).format(date);
      const parts = timeStr.split(' ');
      return { time: parts[0], ampm: parts[1] || '' };
    } catch (e) {
      return { time: '00:00', ampm: 'AM' };
    }
  };

  const formatDateInfo = (date, timeZone) => {
    try {
      return new Intl.DateTimeFormat('en-US', { timeZone, weekday: 'long', month: 'long', day: 'numeric' }).format(date);
    } catch (e) {
      return 'Date Error';
    }
  };

  return (
    <footer style={{ backgroundColor: '#fff', color: '#111', paddingTop: '6rem', borderTop: '1px solid #eaeaea', position: 'relative', overflow: 'hidden' }}>
      
      <div style={{ padding: '0 5%', maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'space-between' }}>
        
        {/* Left Side: Contact Form */}
        <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
          <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1.5rem', fontWeight: 600 }}>Let's talk</div>
          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Your name" style={{ width: '100%', padding: '1rem', backgroundColor: '#f5f5f5', border: 'none', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>Email</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Enter your email" style={{ width: '100%', padding: '1rem', backgroundColor: '#f5f5f5', border: 'none', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>Message</label>
              <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="A few words about your project" rows="4" style={{ width: '100%', padding: '1rem', backgroundColor: '#f5f5f5', border: 'none', borderRadius: '8px', fontSize: '0.9rem', outline: 'none', resize: 'none' }}></textarea>
            </div>
            <button type="submit" style={{ backgroundColor: '#111', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, border: 'none', cursor: 'pointer', width: 'fit-content', marginTop: '0.5rem' }}>
              Send message
            </button>
          </form>
        </div>

        {/* Right Side: Navigation & Email */}
        <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between' }}>
            {/* Pages Column */}
            <div>
              <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '1.5rem', fontWeight: 500 }}>Pages:</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth'}) }} style={{ color: '#111', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Home</a></li>
                <li><a href="#works" onClick={(e) => { e.preventDefault(); document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' }) }} style={{ color: '#111', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Works</a></li>
              </ul>
            </div>
            {/* Services Column */}
            <div>
              <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '1.5rem', fontWeight: 500 }}>Services</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }} style={{ color: '#111', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>UI engineering</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }} style={{ color: '#111', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Product UI/UX Design</a></li>
              </ul>
            </div>
            {/* Industries Column */}
            <div>
              <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '1.5rem', fontWeight: 500 }}>Industries</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li><a href="#why-choose-us" onClick={(e) => { e.preventDefault(); document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' }) }} style={{ color: '#111', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Education / EdTech</a></li>
                <li><a href="#why-choose-us" onClick={(e) => { e.preventDefault(); document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' }) }} style={{ color: '#111', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Military Tech</a></li>
              </ul>
            </div>
            {/* Contact Us Column */}
            <div>
              <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '1.5rem', fontWeight: 500 }}>Contact us:</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>LinkedIn</a></li>
                <li><a href="https://behance.net" target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Behance</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Instagram</a></li>
              </ul>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.5rem', fontWeight: 500 }}>Let's get down to business:</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#111' }}>support@blazincode.com</span>
              <button onClick={() => window.location.href = 'mailto:support@blazincode.com'} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Live Clocks Section */}
      <div style={{ padding: '4rem 5%', display: 'flex', gap: '1.5rem', overflowX: 'auto', flexWrap: 'nowrap', marginTop: '2rem' }}>
        {clocks.map((clock, idx) => {
          const { time, ampm } = formatTimeInfo(now, clock.tz);
          const date = formatDateInfo(now, clock.tz);
          
          return (
            <div key={idx} style={{ flex: '1 0 250px', backgroundColor: '#f6f6f6', borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1.5rem', fontFamily: 'monospace, "Courier New", Courier' }}>
                <span style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '2px', color: '#111' }}>
                  {time}
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 700, marginLeft: '4px', color: '#111' }}>
                  {ampm}
                </span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.7rem', color: '#666', fontWeight: 600 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {date}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  {clock.label}
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Massive Bottom Text */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2rem', padding: '0 2% 2rem 2%' }}>
        <h1 style={{ 
          fontSize: '13vw', // Adjusted to fit perfectly on one line
          fontWeight: 900, 
          color: '#111', 
          margin: 0, 
          lineHeight: 1, 
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap' // Prevents it from breaking into two lines
        }}>
          BLAZIN CODE
        </h1>
      </div>

    </footer>
  );
};

export default Footer;
