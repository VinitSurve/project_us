import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Stamp, Check, Sparkles } from 'lucide-react';

export const ConfidentialityScene: React.FC = () => {
  const { unlockEasterEgg, nextScene } = usePresentation();
  const [checks, setChecks] = useState<Record<number, boolean>>({ 0: false, 1: false, 2: false });
  const [signed, setSigned] = useState(false);

  const toggleCheck = (idx: number) => {
    soundManager.playClick();
    setChecks((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleSign = () => {
    soundManager.playBell();
    setSigned(true);
    setChecks({ 0: true, 1: true, 2: true });
    unlockEasterEgg('nda-speedrunner');
  };

  const TERMS = [
    { emoji: '🐱', text: 'I accept an unreasonable amount of cat memes.' },
    { emoji: '🧠', text: 'I forgive the developer for chronic overthinking.' },
    { emoji: '💛', text: 'My freedom to say no is 100% respected.' },
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
          The Feline NDA
        </h2>
        <p style={{ color: '#E0C3FC', fontSize: '0.86rem', marginTop: '4px' }}>
          By proceeding, you playfully acknowledge:
        </p>
      </div>

      {/* 3 Interactive Tactile Clauses */}
      <div style={{ width: '100%', maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {TERMS.map((term, i) => {
          const checked = checks[i];
          return (
            <motion.div
              key={i}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleCheck(i)}
              style={{
                padding: '14px 16px',
                background: checked ? 'rgba(56, 224, 154, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                border: checked ? '1px solid #38E09A' : '1px solid rgba(224, 195, 252, 0.2)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: checked ? '#38E09A' : 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: checked ? '#120E17' : '#847693',
                  fontSize: '1.1rem',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                }}
              >
                {checked ? <Check size={18} strokeWidth={3} /> : term.emoji}
              </div>
              <span style={{ fontSize: '0.88rem', color: checked ? '#FDFBFF' : '#BDB0C9', fontWeight: 500 }}>
                {term.text}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Big Tactile Paw Stamp */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        onClick={handleSign}
        style={{
          marginTop: '6px',
          padding: '16px 32px',
          borderRadius: '999px',
          background: signed
            ? 'rgba(56, 224, 154, 0.2)'
            : 'linear-gradient(135deg, #FF4757, #FF2A85)',
          border: signed ? '2px solid #38E09A' : 'none',
          color: '#FFF',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: signed ? 'none' : '0 8px 25px rgba(255, 71, 87, 0.4)',
        }}
      >
        <Stamp size={18} />
        <span>{signed ? '🐾 Stamped by बाळ' : 'Paw Print to Sign'}</span>
      </motion.button>
    </div>
  );
};
