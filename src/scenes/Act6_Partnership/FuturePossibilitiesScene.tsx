import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Check } from 'lucide-react';

export const FuturePossibilitiesScene: React.FC = () => {
  const [selected, setSelected] = useState<Record<number, boolean>>({});

  const CARDS = [
    { emoji: '🌅', title: 'Sunset Scooter Ride', sub: 'No destination, cool breeze, hot chai.' },
    { emoji: '🐱', title: 'Cat Sanctuary Afternoon', sub: 'Befriending 20 cats in one day.' },
    { emoji: '💻', title: 'Co-Working Cafe Date', sub: 'Parallel focus with occasional laughs.' },
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
        gap: '20px',
        padding: '10px 0',
      }}
    >
      <div>
        <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Future Blueprints
        </h2>
        <p style={{ color: '#E0C3FC', fontSize: '0.86rem', marginTop: '4px' }}>
          Tap to bookmark potential shared side-quests:
        </p>
      </div>

      {/* 2x2 Interactive Adventure Postcards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          width: '100%',
          maxWidth: '380px',
        }}
      >
        {CARDS.map((c, i) => {
          const isMarked = selected[i];
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => handleToggle(i)}
              style={{
                padding: '16px 12px',
                background: isMarked ? 'rgba(255, 183, 197, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                border: isMarked ? '2px solid #FFB7C5' : '1px solid rgba(224, 195, 252, 0.2)',
                borderRadius: '18px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.2s ease',
              }}
            >
              {isMarked && (
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#FFB7C5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#120E17',
                  }}
                >
                  <Check size={12} strokeWidth={3} />
                </div>
              )}
              <span style={{ fontSize: '2rem' }}>{c.emoji}</span>
              <div style={{ color: '#FDFBFF', fontSize: '0.84rem', fontWeight: 800, marginTop: '4px' }}>
                {c.title}
              </div>
              <div style={{ color: '#847693', fontSize: '0.7rem', marginTop: '2px', lineHeight: 1.3 }}>
                {c.sub}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
