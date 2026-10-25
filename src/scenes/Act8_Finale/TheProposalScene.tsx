import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Heart, ArrowRight } from 'lucide-react';

export const TheProposalScene: React.FC = () => {
  const { nextScene } = usePresentation();

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
      {/* Pulsing Glowing Heart */}
      <motion.div
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{
          width: '76px',
          height: '76px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 183, 197, 0.35) 0%, rgba(224, 195, 252, 0.1) 70%)',
          border: '2px solid rgba(255, 183, 197, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFB7C5',
          boxShadow: '0 0 40px rgba(255, 183, 197, 0.3)',
        }}
      >
        <Heart size={36} fill="#FFB7C5" />
      </motion.div>

      {/* The Central Question */}
      <div style={{ maxWidth: '440px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <h1
          style={{
            fontSize: 'clamp(1.5rem, 5.5vw, 2.2rem)',
            fontWeight: 800,
            lineHeight: 1.35,
            letterSpacing: '-0.02em',
            color: '#FDFBFF',
          }}
        >
          Jokes aside, I genuinely like you.
        </h1>

        <p
          style={{
            fontSize: 'clamp(1.1rem, 4vw, 1.35rem)',
            color: '#FFB7C5',
            fontWeight: 700,
            lineHeight: 1.45,
          }}
        >
          Would you be open to going on a proper date with me and seeing where it goes?
        </p>
      </div>

      <p style={{ fontSize: '0.84rem', color: '#847693', maxWidth: '340px', lineHeight: 1.5 }}>
        No pressure at all. Take all the time you need.
      </p>

      {/* Button to response ballot */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={nextScene}
        style={{
          marginTop: '6px',
          padding: '16px 36px',
          borderRadius: '999px',
          background: 'linear-gradient(135deg, #FFB7C5, #E0C3FC)',
          border: 'none',
          color: '#1E1624',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(255, 183, 197, 0.4)',
        }}
      >
        <span>Your Response</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
