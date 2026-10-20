import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

export const InvitationPortalScene: React.FC = () => {
  const { nextScene, unlockEasterEgg } = usePresentation();
  const [taps, setTaps] = useState(0);

  const handleSummonTap = () => {
    soundManager.playMeow();
    const nextTaps = taps + 1;
    setTaps(nextTaps);
    if (nextTaps >= 3) {
      unlockEasterEgg('pspsps-caller');
    }
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      {/* Top playful subtitle */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontFamily: 'var(--font-mono)',
          color: '#FFB7C5',
          fontSize: '0.85rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <Sparkles size={14} /> CLASSIFIED SUMMONS PROTOCOL
      </motion.div>

      {/* Main Whisper heading */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
        <h1
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, #FFFDF9 30%, #FFB7C5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          pspspspsps...
        </h1>
        <p
          style={{
            color: '#E0C3FC',
            fontSize: '1.15rem',
            marginTop: '8px',
            fontWeight: 500,
          }}
        >
          You have been formally summoned.
        </p>
      </motion.div>

      {/* Interactive Cat Gateway Portal */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        onClick={handleSummonTap}
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 183, 197, 0.25) 0%, rgba(35, 27, 47, 0.8) 70%)',
          border: '2px dashed rgba(255, 183, 197, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          boxShadow: '0 0 35px rgba(255, 183, 197, 0.2)',
        }}
      >
        {/* Animated Paw SVG */}
        <svg width="74" height="74" viewBox="0 0 100 100" fill="none">
          {/* Main Pad */}
          <ellipse cx="50" cy="62" rx="24" ry="18" fill="#FFB7C5" />
          {/* Toe Pads */}
          <ellipse cx="28" cy="38" rx="8" ry="12" fill="#E0C3FC" transform="rotate(-15 28 38)" />
          <ellipse cx="44" cy="30" rx="8" ry="12" fill="#E0C3FC" transform="rotate(-5 44 30)" />
          <ellipse cx="58" cy="30" rx="8" ry="12" fill="#E0C3FC" transform="rotate(5 58 30)" />
          <ellipse cx="73" cy="38" rx="8" ry="12" fill="#E0C3FC" transform="rotate(15 73 38)" />
        </svg>

        <span
          style={{
            position: 'absolute',
            bottom: '12px',
            fontSize: '0.68rem',
            color: '#FFB7C5',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {taps > 0 ? `Tapped ${taps}x 🐾` : 'Tap the Paw'}
        </span>
      </motion.div>

      {/* Explanation card */}
      <div
        className="glass-panel"
        style={{
          padding: '16px 20px',
          maxWidth: '440px',
          color: '#BDB0C9',
          fontSize: '0.9rem',
          lineHeight: 1.5,
        }}
      >
        A confidential document regarding future tea dates, shared laughter, and an unusually high Kundali compatibility score has been prepared for your review.
      </div>

      {/* Proceed Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => {
          soundManager.playBell();
          nextScene();
        }}
        style={{
          padding: '15px 32px',
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
          boxShadow: '0 8px 24px rgba(255, 183, 197, 0.4)',
        }}
      >
        <span>Open Proposal</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
