import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Sparkles, ArrowRight } from 'lucide-react';

export const InvitationPortalScene: React.FC = () => {
  const { nextScene, unlockEasterEgg } = usePresentation();
  const [taps, setTaps] = useState(0);
  const [paws, setPaws] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleSummonTap = (e: React.MouseEvent) => {
    soundManager.playMeow();
    const nextTaps = taps + 1;
    setTaps(nextTaps);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 20;
    const y = e.clientY - rect.top - 20;
    setPaws((prev) => [...prev.slice(-4), { id: Date.now() + Math.random(), x, y }]);

    if (nextTaps >= 3) {
      unlockEasterEgg('pspsps-caller');
      soundManager.playBell();
      setTimeout(nextScene, 400);
    }
  };

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
      {/* Big Playful Heading */}
      <div>
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{
            fontSize: 'clamp(2.4rem, 7vw, 3.6rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            background: 'linear-gradient(135deg, #FFFDF9 30%, #FFB7C5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          pspspspsps...
        </motion.h1>
        <p style={{ color: '#E0C3FC', fontSize: '1.1rem', marginTop: '6px', fontWeight: 600 }}>
          You have been formally summoned.
        </p>
      </div>

      {/* Giant Interactive Cat Paw Button */}
      <motion.div
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        onClick={handleSummonTap}
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 183, 197, 0.3) 0%, rgba(35, 27, 47, 0.85) 70%)',
          border: '2px dashed rgba(255, 183, 197, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          boxShadow: '0 0 45px rgba(255, 183, 197, 0.35)',
          overflow: 'hidden',
        }}
      >
        {/* Floating Paw Prints inside */}
        {paws.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 0, scale: 1.4, y: -20 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              left: p.x,
              top: p.y,
              fontSize: '1.4rem',
              pointerEvents: 'none',
            }}
          >
            🐾
          </motion.span>
        ))}

        {/* Big Neon Cat Paw SVG */}
        <svg width="86" height="86" viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="62" rx="24" ry="18" fill="#FFB7C5" />
          <ellipse cx="28" cy="38" rx="8" ry="12" fill="#E0C3FC" transform="rotate(-15 28 38)" />
          <ellipse cx="44" cy="30" rx="8" ry="12" fill="#E0C3FC" transform="rotate(-5 44 30)" />
          <ellipse cx="58" cy="30" rx="8" ry="12" fill="#E0C3FC" transform="rotate(5 58 30)" />
          <ellipse cx="73" cy="38" rx="8" ry="12" fill="#E0C3FC" transform="rotate(15 73 38)" />
        </svg>

        <span
          style={{
            marginTop: '8px',
            fontSize: '0.72rem',
            color: '#FFB7C5',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          {taps === 0 ? 'Tap the Paw' : taps >= 3 ? 'Access Granted! 🐾' : `Tap ${3 - taps} more times`}
        </span>
      </motion.div>

      {/* Manual skip if user prefers single tap */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#847693', fontSize: '0.78rem' }}>
        <span>Or tap the next arrow below</span>
      </div>
    </div>
  );
};
