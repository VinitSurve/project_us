import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';

export const LittleThingsArchiveScene: React.FC = () => {
  const STICKERS = [
    {
      emoji: '🧶',
      title: 'Crochet Cat Ears',
      desc: 'Iconic signature. 10/10 aesthetic.',
      bg: 'rgba(255, 183, 197, 0.15)',
      border: '#FFB7C5',
    },
    {
      emoji: '💻',
      title: 'Billi-Bot Deploy',
      desc: 'Coding a desktop companion just to make you smile.',
      bg: 'rgba(224, 195, 252, 0.15)',
      border: '#E0C3FC',
    },
    {
      emoji: '🛵',
      title: 'The Long Chai Route',
      desc: 'Taking the 45-minute route home for one extra topic.',
      bg: 'rgba(255, 211, 182, 0.15)',
      border: '#FFD3B6',
    },
    {
      emoji: '🐱',
      title: 'Street Cat Spotting',
      desc: 'Stopping mid-sentence to greet every kitten.',
      bg: 'rgba(56, 224, 154, 0.15)',
      border: '#38E09A',
    },
  ];

  const handleTap = () => {
    soundManager.playMeow();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '20px',
        padding: '10px 0',
      }}
    >
      <div>
        <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Little Things
        </h2>
        <p style={{ color: '#FFB7C5', fontSize: '0.86rem', marginTop: '4px' }}>
          Specific, authentic, unforgettable details:
        </p>
      </div>

      {/* 2x2 Interactive Sticker Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          width: '100%',
          maxWidth: '380px',
        }}
      >
        {STICKERS.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 3 : -3 }}
            whileTap={{ scale: 0.92, rotate: i % 2 === 0 ? -5 : 5 }}
            onClick={handleTap}
            style={{
              padding: '16px 12px',
              background: s.bg,
              border: `2px dashed ${s.border}`,
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              gap: '6px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
          >
            <span style={{ fontSize: '2.4rem' }}>{s.emoji}</span>
            <div style={{ color: '#FDFBFF', fontSize: '0.86rem', fontWeight: 800 }}>{s.title}</div>
            <div style={{ color: '#BDB0C9', fontSize: '0.72rem', lineHeight: 1.35 }}>{s.desc}</div>
          </motion.div>
        ))}
      </div>

      <div style={{ fontSize: '0.74rem', color: '#847693' }}>
        🐾 Tap any sticker to hear Billi-Bot!
      </div>
    </div>
  );
};
