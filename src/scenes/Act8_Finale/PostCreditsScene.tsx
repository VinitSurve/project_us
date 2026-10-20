import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { RotateCcw, Heart, Sparkles, Moon, Cat } from 'lucide-react';

export const PostCreditsScene: React.FC = () => {
  const { goToScene, setDrawerOpen } = usePresentation();

  const handleRestart = () => {
    soundManager.playBell();
    goToScene(0);
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
        padding: '20px 10px',
      }}
    >
      {/* Sleeping Cat Illustration / Icon */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224, 195, 252, 0.2) 0%, rgba(30, 22, 36, 0.8) 70%)',
          border: '2px solid rgba(224, 195, 252, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 30px rgba(224, 195, 252, 0.2)',
          position: 'relative',
        }}
      >
        <span style={{ fontSize: '3rem' }}>😴</span>
        <motion.span
          animate={{ opacity: [0.2, 1, 0.2], y: [-2, -8, -2] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: 'absolute',
            top: '10px',
            right: '15px',
            fontSize: '0.85rem',
            color: '#E0C3FC',
            fontFamily: 'var(--font-mono)',
            fontWeight: 800,
          }}
        >
          zzz...
        </motion.span>
      </motion.div>

      {/* Epilogue Text */}
      <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            color: '#FFB7C5',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <Moon size={14} /> MIDNIGHT TRANSMISSION // EPILOGUE
        </div>

        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 1.9rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Whenever you&apos;re ready. No rush.
        </h2>

        <p style={{ color: '#D8CCE6', fontSize: '0.92rem', lineHeight: 1.6 }}>
          Billi-bot has concluded its diagnostic duties and is taking a well-deserved cat nap.
          Thank you for letting me share this with you. Whatever happens tomorrow or next week, I am simply glad to know you.
        </p>

        <div
          className="font-handwriting"
          style={{
            fontSize: '1.35rem',
            color: '#FFB7C5',
            marginTop: '8px',
          }}
        >
          Always in your corner. ✨
        </div>
      </div>

      {/* Replay Presentation Button */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleRestart}
          style={{
            padding: '14px 24px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(224, 195, 252, 0.3)',
            color: '#FDFBFF',
            fontWeight: 700,
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
          }}
        >
          <RotateCcw size={16} />
          <span>Replay from Beginning</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setDrawerOpen(true)}
          style={{
            padding: '14px 24px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #FFB7C5, #E0C3FC)',
            border: 'none',
            color: '#1E1624',
            fontWeight: 800,
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 18px rgba(255, 183, 197, 0.35)',
          }}
        >
          <Sparkles size={16} />
          <span>Browse All Scenes</span>
        </motion.button>
      </div>
    </div>
  );
};
