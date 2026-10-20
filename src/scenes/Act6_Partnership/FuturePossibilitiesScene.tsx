import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Compass, ArrowRight, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const FuturePossibilitiesScene: React.FC = () => {
  const { nextScene } = usePresentation();
  const [selectedQuests, setSelectedQuests] = useState<Record<number, boolean>>({});

  const QUESTS = [
    {
      title: 'The Sunset Highway & Chai Mission',
      desc: 'Picking an uncharted road at dusk, driving with no deadline, and finding the ultimate tea stall.',
      emoji: '🛵',
    },
    {
      title: 'The Cat Sanctuary / Cafe Expedition',
      desc: 'Spending an entire afternoon surrounded by 20 adoptable cats and debating which one looks the most regal.',
      emoji: '🐱',
    },
    {
      title: 'Co-Working & Parallel Focus Session',
      desc: 'Sitting in a quiet, aesthetic cafe working on our respective goals with occasional shared laughs.',
      emoji: '💻',
    },
    {
      title: 'Midnight Snack Debates',
      desc: 'Debating serious life philosophy and ridiculous conspiracy theories over late-night street food.',
      emoji: '🌙',
    },
  ];

  const toggleQuest = (idx: number) => {
    soundManager.playClick();
    setSelectedQuests((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#E0C3FC',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Compass size={14} /> POTENTIAL ROADMAP // BLUEPRINTS
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Future Possibilities
        </h2>
      </div>

      {/* Main Glass Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '22px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#D8CCE6', fontSize: '0.84rem' }}>
            Tap the cards to bookmark shared side-quests:
          </span>
          <span style={{ fontSize: '0.72rem', color: '#FFB7C5', fontFamily: 'var(--font-mono)' }}>
            NON-BINDING DREAMS
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {QUESTS.map((q, idx) => {
            const isBookmarked = selectedQuests[idx];
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => toggleQuest(idx)}
                style={{
                  padding: '12px 14px',
                  background: isBookmarked ? 'rgba(255, 183, 197, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '12px',
                  border: isBookmarked ? '1px solid #FFB7C5' : '1px solid rgba(224, 195, 252, 0.15)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{q.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                    <h4 style={{ color: isBookmarked ? '#FFB7C5' : '#FDFBFF', fontSize: '0.88rem', fontWeight: 700 }}>
                      {q.title}
                    </h4>
                    {isBookmarked && <CheckCircle2 size={16} color="#FFB7C5" />}
                  </div>
                  <p style={{ color: '#BDB0C9', fontSize: '0.78rem', lineHeight: 1.45 }}>
                    {q.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={nextScene}
        style={{
          width: '100%',
          padding: '16px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #E0C3FC, #FFB7C5)',
          border: 'none',
          color: '#1E1624',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(224, 195, 252, 0.35)',
        }}
      >
        <span>Consult Relationship Handbook</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
