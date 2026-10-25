import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundManager } from '../../utils/sound';
import { Check, Sparkles } from 'lucide-react';

export const FuturePossibilitiesScene: React.FC = () => {
  const [selected, setSelected] = useState<Record<number, boolean>>({});

  const CARDS = [
    { emoji: '🌅', title: 'Sunset Scooter Ride', sub: 'No destination, cool breeze, hot chai.' },
    { emoji: '🐱', title: 'Cat Spotting Safari', sub: 'Befriending street cats around the city.' },
    { emoji: '☕', title: 'Co-Working Cafe Day', sub: 'Parallel focus with occasional laughs.' },
    { emoji: '🌙', title: 'Midnight Food Debrief', sub: 'Life philosophy over roadside snacks.' },
  ];

  const handleToggle = (i: number) => {
    soundManager.playClick();
    setSelected((prev) => ({ ...prev, [i]: !prev[i] }));
  };

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
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#E0C3FC',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Sparkles size={12} /> POTENTIAL SIDE-QUESTS
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Simple Shared Adventures
        </h2>
        <p style={{ color: '#D8CCE6', fontSize: '0.82rem', marginTop: '2px' }}>
          Tap to vote on simple things to look forward to:
        </p>
      </div>

      {/* 2x2 Interactive Adventure Postcards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
          width: '100%',
          maxWidth: '380px',
        }}
      >
        {CARDS.map((c, i) => {
          const isMarked = selected[i];
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleToggle(i)}
              style={{
                padding: '14px 10px',
                background: isMarked ? 'rgba(255, 183, 197, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                border: isMarked ? '1.5px solid #FFB7C5' : '1px solid rgba(224, 195, 252, 0.2)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.2s ease',
                userSelect: 'none',
              }}
            >
              {isMarked && (
                <div
                  style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: '#FFB7C5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#120E17',
                  }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
              )}
              <span style={{ fontSize: '1.8rem' }}>{c.emoji}</span>
              <div style={{ color: '#FDFBFF', fontSize: '0.82rem', fontWeight: 800, marginTop: '4px' }}>
                {c.title}
              </div>
              <div style={{ color: '#847693', fontSize: '0.68rem', marginTop: '2px', lineHeight: 1.3 }}>
                {c.sub}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
