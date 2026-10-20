import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

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
        gap: '28px',
        padding: '20px 10px',
      }}
    >
      {/* Subtle glowing halo icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 183, 197, 0.3) 0%, rgba(224, 195, 252, 0.1) 70%)',
          border: '1px solid rgba(255, 183, 197, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFB7C5',
          boxShadow: '0 0 35px rgba(255, 183, 197, 0.25)',
        }}
      >
        <Heart size={32} fill="#FFB7C5" />
      </motion.div>

      {/* The Central Question */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          maxWidth: '560px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: '#BDB0C9',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          THE ACTUAL QUESTION
        </span>

        <h1
          style={{
            fontSize: 'clamp(1.6rem, 5.5vw, 2.3rem)',
            fontWeight: 800,
            lineHeight: 1.35,
            letterSpacing: '-0.02em',
            color: '#FDFBFF',
          }}
        >
          Jokes aside, I genuinely like you, and I&apos;d like to explore whether there&apos;s something more between us.
        </h1>

        <p
          style={{
            fontSize: 'clamp(1.1rem, 3.8vw, 1.4rem)',
            color: '#FFB7C5',
            fontWeight: 600,
            lineHeight: 1.45,
          }}
        >
          Would you be open to going on a proper date with me and seeing where it goes?
        </p>
      </motion.div>

      {/* Reassurance note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          fontSize: '0.84rem',
          color: '#847693',
          maxWidth: '420px',
          lineHeight: 1.5,
        }}
      >
        Take all the time you need. Your comfort and feelings always come first.
      </motion.p>

      {/* Button to response ballot */}
      <motion.button
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={nextScene}
        style={{
          padding: '16px 36px',
          borderRadius: '999px',
          background: 'linear-gradient(135deg, #FFB7C5, #E0C3FC)',
          border: 'none',
          color: '#1E1624',
          fontWeight: 800,
          fontSize: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(255, 183, 197, 0.45)',
        }}
      >
        <span>Open The Boardroom Ballot</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
