import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { ShieldAlert, HeartHandshake } from 'lucide-react';

export const RedTeamReviewScene: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '24px',
        padding: '10px 0',
      }}
    >
      <div>
        <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Reality Check
        </h2>
        <p style={{ color: '#FFA834', fontSize: '0.86rem', marginTop: '4px', fontWeight: 600 }}>
          Grounded self-awareness before proceeding:
        </p>
      </div>

      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          width: '100%',
          maxWidth: '380px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 168, 52, 0.3)',
          borderRadius: '24px',
          padding: '28px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
        }}
      >
        <p style={{ fontSize: '0.96rem', color: '#FDFBFF', lineHeight: 1.6, fontWeight: 500 }}>
          Astrology scores, compatibility algorithms, and internet cat memes are fun...
        </p>
        <p style={{ fontSize: '1.05rem', color: '#FFA834', lineHeight: 1.5, fontWeight: 700 }}>
          ...but real human connection is built on honesty, mutual respect, and two people simply choosing each other.
        </p>
      </motion.div>
    </div>
  );
};
