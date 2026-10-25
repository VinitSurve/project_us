import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Sparkles, Heart } from 'lucide-react';

export const ExecutiveSummaryScene: React.FC = () => {
  const [mode, setMode] = useState<'friends' | 'date'>('friends');

  const toggleMode = () => {
    soundManager.playBell();
    setMode(mode === 'friends' ? 'date' : 'friends');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '28px',
        padding: '10px 0',
      }}
    >
      <div>
        <h1
          style={{
            fontSize: 'clamp(2rem, 6.5vw, 3rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, #FFF 30%, #E0C3FC 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Executive Summary
        </h1>
        <p style={{ color: '#BDB0C9', fontSize: '0.92rem', marginTop: '6px' }}>
          The core thesis in three simple lines:
        </p>
      </div>

      {/* 3 Punchy Statements */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '380px', width: '100%' }}>
        <div
          style={{
            padding: '12px 18px',
            background: 'rgba(255, 255, 255, 0.04)',
            borderRadius: '14px',
            border: '1px solid rgba(224, 195, 252, 0.2)',
            fontSize: '0.9rem',
            color: '#FDFBFF',
            fontWeight: 600,
          }}
        >
          ✨ The connection is already rare.
        </div>
        <div
          style={{
            padding: '12px 18px',
            background: 'rgba(255, 255, 255, 0.04)',
            borderRadius: '14px',
            border: '1px solid rgba(224, 195, 252, 0.2)',
            fontSize: '0.9rem',
            color: '#FDFBFF',
            fontWeight: 600,
          }}
        >
          ☕ The conversations are effortless.
        </div>
        <div
          style={{
            padding: '12px 18px',
            background: 'rgba(255, 183, 197, 0.1)',
            borderRadius: '14px',
            border: '1px solid rgba(255, 183, 197, 0.3)',
            fontSize: '0.95rem',
            color: '#FFB7C5',
            fontWeight: 700,
          }}
        >
          🚀 So... what if we went on a proper date?
        </div>
      </div>

      {/* Interactive Magnetic Toggle */}
      <motion.div
        whileTap={{ scale: 0.96 }}
        onClick={toggleMode}
        style={{
          background: '#1A1324',
          border: '2px solid rgba(224, 195, 252, 0.3)',
          borderRadius: '999px',
          padding: '6px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
        }}
      >
        <span
          style={{
            padding: '8px 16px',
            borderRadius: '999px',
            background: mode === 'friends' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            color: mode === 'friends' ? '#FDFBFF' : '#847693',
            fontSize: '0.8rem',
            fontWeight: 700,
            transition: 'all 0.2s ease',
          }}
        >
          Great Friends ☕
        </span>
        <span
          style={{
            padding: '8px 16px',
            borderRadius: '999px',
            background: mode === 'date' ? 'linear-gradient(135deg, #FFB7C5, #E0C3FC)' : 'transparent',
            color: mode === 'date' ? '#1E1624' : '#847693',
            fontSize: '0.8rem',
            fontWeight: 800,
            transition: 'all 0.2s ease',
          }}
        >
          A Proper Date ✨
        </span>
      </motion.div>
    </div>
  );
};
