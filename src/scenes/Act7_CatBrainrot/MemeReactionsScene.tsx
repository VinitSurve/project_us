import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Cat } from 'lucide-react';
import { soundManager } from '../../utils/sound';

const STAGES = [
  {
    id: 'stage-1',
    label: 'STAGE 01',
    title: 'Waiting for your message',
    emoji: '👀🐱',
    desc: 'Casually refreshing phone every 12 seconds while pretending to write serious code.',
    memeTag: 'Side-Eye Cat',
    color: '#FFE600',
    src: '/memes/reactions/side_eye_cat.jpg',
  },
  {
    id: 'stage-2',
    label: 'STAGE 02',
    title: 'When your notification pops up',
    emoji: '⚡😻',
    desc: 'Instant dopamine spike. Uncontrollable grin in public. Zero professional composure.',
    memeTag: 'Popcat (High Frequency)',
    color: '#38E09A',
    src: '/memes/reactions/popcat.gif',
  },
  {
    id: 'stage-3',
    label: 'STAGE 03',
    title: 'Remembering a random joke from our ride',
    emoji: '🛵😹',
    desc: 'Laughing out loud hours later because a stray thought crossed my mind.',
    memeTag: 'Vibing Cat',
    color: '#FFB7C5',
    src: '/memes/reactions/vibing_cat.gif',
  },
  {
    id: 'stage-4',
    label: 'STAGE 04',
    title: 'Trying to act completely normal',
    emoji: '🕴️🐈',
    desc: 'Proceeds to build an entire interactive 19-scene cat website instead.',
    memeTag: 'Smudge the Cat',
    color: '#00F0FF',
    src: '/memes/reactions/smudge_cat.jpg',
  },
];

export const MemeReactionsScene: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handleSelect = (idx: number) => {
    soundManager.playClick();
    setSelectedIdx(idx);
  };

  const current = STAGES[selectedIdx];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '12px',
        padding: '6px 0',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#FFE600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Cat size={12} /> SCIENTIFIC FIELD OBSERVATIONS
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Stages of Talking to You
        </h2>
        <p style={{ color: '#D8CCE6', fontSize: '0.82rem', marginTop: '2px' }}>
          Documented feline brain activity on any given day:
        </p>
      </div>

      {/* Stage Selector Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          width: '100%',
          maxWidth: '380px',
          justifyContent: 'center',
        }}
      >
        {STAGES.map((s, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <motion.button
              key={s.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect(idx)}
              style={{
                flex: 1,
                padding: '6px 4px',
                borderRadius: '8px',
                background: isSelected ? `${s.color}22` : 'rgba(255, 255, 255, 0.04)',
                border: isSelected ? `1.5px solid ${s.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                color: isSelected ? s.color : '#847693',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              0{idx + 1}
            </motion.button>
          );
        })}
      </div>

      {/* Main Selected Stage Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          style={{
            width: '100%',
            maxWidth: '380px',
            background: 'linear-gradient(145deg, rgba(35, 26, 44, 0.9), rgba(18, 14, 23, 0.95))',
            border: `1.5px solid ${current.color}44`,
            borderRadius: '20px',
            padding: '20px 18px',
            boxShadow: `0 10px 30px ${current.color}15`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            textAlign: 'center',
          }}
        >
          {/* Real Curated Meme from dataset */}
          <div
            style={{
              width: '100%',
              height: '135px',
              borderRadius: '14px',
              overflow: 'hidden',
              position: 'relative',
              background: '#0d0914',
              border: `1.5px solid ${current.color}33`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={current.src}
              alt={current.title}
              loading="lazy"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '10px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '6px',
                right: '8px',
                fontSize: '1.1rem',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))',
              }}
            >
              {current.emoji}
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: '0.68rem',
                fontFamily: 'var(--font-mono)',
                color: current.color,
                fontWeight: 800,
                letterSpacing: '0.08em',
              }}
            >
              {current.label}
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FDFBFF', marginTop: '2px' }}>
              {current.title}
            </div>
          </div>

          <p style={{ fontSize: '0.82rem', color: '#BDB0C9', lineHeight: 1.45 }}>
            {current.desc}
          </p>

          <div
            style={{
              fontSize: '0.66rem',
              fontFamily: 'var(--font-mono)',
              color: '#847693',
              background: 'rgba(0,0,0,0.3)',
              padding: '3px 10px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            🐾 Meme match: {current.memeTag}
          </div>
        </motion.div>
      </AnimatePresence>

      <div style={{ fontSize: '0.72rem', color: '#847693' }}>
        Tap through stages 01 to 04
      </div>
    </div>
  );
};
