import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const items = [
    "Awwwards - Site of the Day",
    "FWA of the Day",
    "CSS Design Awards",
    "Red Dot Winner",
    "Awwwards - Site of the Day",
    "FWA of the Day",
    "CSS Design Awards",
    "Red Dot Winner"
  ];

  return (
    <div style={{
      padding: '6rem 0',
      backgroundColor: 'var(--btn-bg)',
      color: 'var(--btn-text)',
      overflow: 'hidden',
      display: 'flex',
      whiteSpace: 'nowrap'
    }}>
      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25
        }}
        style={{
          display: 'flex',
          gap: '6rem',
          paddingLeft: '6rem',
          fontSize: '3rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.02em'
        }}
      >
        {items.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '6rem' }}>
            <span>{item}</span>
            <span style={{ fontSize: '1.5rem', color: '#ff3366' }}>✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
