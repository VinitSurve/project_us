import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { ShieldCheck, Heart, Navigation, Sparkles } from 'lucide-react';

export const ValuePropositionScene: React.FC = () => {
  const TOKENS = [
    { icon: <ShieldCheck size={20} color="#38E09A" />, label: 'Emotional Safety', sub: 'Zero judgment. 100% support.' },
    { icon: <Navigation size={20} color="#00F0FF" />, label: 'Chai & Ride Partner', sub: 'Scooter & fresh air on standby.' },
    { icon: <Heart size={20} color="#FFB7C5" />, label: 'Real Presence', sub: 'Remembering what matters to you.' },
    { icon: <Sparkles size={20} color="#FFE600" />, label: 'Space & Freedom', sub: 'Cheering your individual goals.' },
  ];

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
          Value Proposition
        </h2>
        <p style={{ color: '#38E09A', fontSize: '0.86rem', marginTop: '4px', fontWeight: 600 }}>
          Four tangible commitments brought to the table:
        </p>
      </div>

      {/* 2x2 Clean Promise Tokens */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          width: '100%',
          maxWidth: '380px',
        }}
      >
        {TOKENS.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            style={{
              padding: '16px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(56, 224, 154, 0.25)',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {t.icon}
            <div style={{ color: '#FDFBFF', fontSize: '0.86rem', fontWeight: 700 }}>{t.label}</div>
            <div style={{ color: '#847693', fontSize: '0.72rem' }}>{t.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
