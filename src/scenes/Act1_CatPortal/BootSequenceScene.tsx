import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Sparkles, ArrowRight } from 'lucide-react';
import { soundManager } from '../../utils/sound';

const BOOT_PUNCHES = [
  { label: '37,000 Cat Memes', status: 'LOADED', color: '#FFB7C5' },
  { label: 'Yapping Tolerance', status: 'INFINITY', color: '#00F0FF' },
  { label: 'Emotional Compatibility', status: 'CRITICAL MATCH', color: '#38E09A' },
  { label: 'Overthinking Units', status: 'MAX CAPACITY', color: '#FFE600' },
];

export const BootSequenceScene: React.FC = () => {
  const { nextScene } = usePresentation();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev < BOOT_PUNCHES.length) {
          soundManager.playClick();
          return prev + 1;
        }
        clearInterval(timer);
        soundManager.playBell();
        return prev;
      });
    }, 420);

    return () => clearInterval(timer);
  }, []);

  const isReady = step >= BOOT_PUNCHES.length;

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
      {/* Animated Glowing Cyber-Kitten Avatar */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 183, 197, 0.25) 0%, rgba(30, 22, 36, 0.9) 70%)',
          border: '2px solid rgba(255, 183, 197, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 35px rgba(255, 183, 197, 0.3)',
          fontSize: '3rem',
        }}
      >
        🐱
      </motion.div>

      {/* Title */}
      <div>
        <h1
          style={{
            fontSize: 'clamp(1.8rem, 6vw, 2.6rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, #FFF 30%, #FFB7C5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          PROJECT: US
        </h1>
        <p style={{ color: '#847693', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginTop: '4px' }}>
          INITIALIZING SECURE FELINE CONNECTION...
        </p>
      </div>

      {/* Kinetic Status Grid */}
      <div
        style={{
          width: '100%',
          maxWidth: '340px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {BOOT_PUNCHES.map((item, idx) => {
          const visible = idx < step;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: visible ? 1 : 0.2, y: visible ? 0 : 8 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 14px',
                background: visible ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.01)',
                border: visible ? `1px solid ${item.color}44` : '1px solid rgba(255,255,255,0.04)',
                borderRadius: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ color: '#D8CCE6' }}>{item.label}</span>
              <span style={{ color: visible ? item.color : '#5A4F68', fontWeight: 800 }}>
                {visible ? `[ ${item.status} ]` : '[ ... ]'}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Big Tactile Proceed Prompt */}
      {isReady && (
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextScene}
          style={{
            marginTop: '8px',
            padding: '14px 28px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #FFB7C5, #E0C3FC)',
            border: 'none',
            color: '#1E1624',
            fontWeight: 800,
            fontSize: '0.92rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(255, 183, 197, 0.4)',
          }}
        >
          <span>Open Proposal</span>
          <ArrowRight size={18} />
        </motion.button>
      )}
    </div>
  );
};
