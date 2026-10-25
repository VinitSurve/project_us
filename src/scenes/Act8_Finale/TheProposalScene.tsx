import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Heart, ArrowRight } from 'lucide-react';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';

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
        gap: '12px',
        padding: '6px 0',
      }}
    >
      {/* Pulsing Glowing Heart */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 183, 197, 0.35) 0%, rgba(224, 195, 252, 0.1) 70%)',
          border: '2px solid rgba(255, 183, 197, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFB7C5',
          boxShadow: '0 0 30px rgba(255, 183, 197, 0.3)',
        }}
      >
        <Heart size={26} fill="#FFB7C5" />
      </motion.div>

      {/* Sincere, clean breathing room */}

      {/* The Central Question */}
      <div style={{ maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h1
          style={{
            fontSize: 'clamp(1.3rem, 4.8vw, 1.85rem)',
            fontWeight: 800,
            lineHeight: 1.35,
            letterSpacing: '-0.02em',
            color: '#FDFBFF',
          }}
        >
          Would you be open to going on a proper date with me? ☕✨
        </h1>

        <p style={{ fontSize: '0.84rem', color: '#BDB0C9', lineHeight: 1.5 }}>
          Chai, good food, and seeing where things go naturally. Zero rush, zero pressure.
        </p>
      </div>

      {/* Button to response ballot */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={nextScene}
        style={{
          marginTop: '4px',
          padding: '12px 28px',
          borderRadius: '999px',
          background: 'linear-gradient(135deg, #FFB7C5, #E0C3FC)',
          border: 'none',
          color: '#1E1624',
          fontWeight: 800,
          fontSize: '0.88rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(255, 183, 197, 0.4)',
        }}
      >
        <span>Your Honest Answer</span>
        <ArrowRight size={16} />
      </motion.button>
    </div>
  );
};
