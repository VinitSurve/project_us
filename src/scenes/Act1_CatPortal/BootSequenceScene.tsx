import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { soundManager } from '../../utils/sound';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';

const BOOT_PUNCHES = [
  { label: '37,000 Cat Memes', status: 'LOADED', color: '#FFB7C5' },
  { label: 'Yapping Tolerance', status: 'INFINITY', color: '#00F0FF' },
  { label: 'Genuine Affection', status: 'UNCONDITIONAL', color: '#38E09A' },
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
    }, 380);

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
        gap: '14px',
        padding: '6px 0',
      }}
    >
      {/* Warning Pill */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(255, 230, 0, 0.12)',
          border: '1px solid rgba(255, 230, 0, 0.3)',
          color: '#FFE600',
          fontSize: '0.68rem',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          padding: '4px 10px',
          borderRadius: '999px',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        <AlertTriangle size={12} /> Warning: Highly Unserious Experience Ahead
      </div>

      {/* Title */}
      <div>
        <h1
          style={{
            fontSize: 'clamp(1.8rem, 6vw, 2.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, #FFF 30%, #FFB7C5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.1,
          }}
        >
          PROJECT: US
        </h1>
        <p style={{ color: '#A89BB5', fontSize: '0.8rem', marginTop: '4px' }}>
          Someone coded an entire website instead of a normal text message.
        </p>
      </div>

      {/* Cat Meme Slot */}
      <AssetPlaceholder
        slotKey="introCatMeme"
        height="130px"
        width="100%"
        style={{ maxWidth: '380px' }}
      />

      {/* Kinetic Status Grid */}
      <div
        style={{
          width: '100%',
          maxWidth: '380px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        {BOOT_PUNCHES.map((item, idx) => {
          const visible = idx < step;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: visible ? 1 : 0.2, y: visible ? 0 : 6 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px',
                background: visible ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.01)',
                border: visible ? `1px solid ${item.color}44` : '1px solid rgba(255,255,255,0.04)',
                borderRadius: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
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
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={nextScene}
          style={{
            marginTop: '4px',
            padding: '12px 24px',
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
          <span>Enter The Lore</span>
          <ArrowRight size={16} />
        </motion.button>
      )}
    </div>
  );
};
