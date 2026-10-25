import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { soundManager } from '../../utils/sound';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';

export const LittleThingsArchiveScene: React.FC = () => {
  const STICKERS = [
    {
      emoji: '🧶',
      title: 'Crochet Cat Ears',
      desc: 'Iconic signature. 10/10 aesthetic confidence.',
      bg: 'rgba(255, 183, 197, 0.15)',
      border: '#FFB7C5',
    },
    {
      emoji: '💻',
      title: 'Billi-Bot Desktop Cat',
      desc: 'Coding an animated companion for your screen.',
      bg: 'rgba(224, 195, 252, 0.15)',
      border: '#E0C3FC',
    },
    {
      emoji: '☕',
      title: 'Favourite Chai Orders',
      desc: 'Hot cutting tea and zero hurry to finish.',
      bg: 'rgba(255, 211, 182, 0.15)',
      border: '#FFD3B6',
    },
    {
      emoji: '🐱',
      title: 'Street Cat Spotting',
      desc: 'Pausing any story to say hi to a stray kitten.',
      bg: 'rgba(56, 224, 154, 0.15)',
      border: '#38E09A',
    },
  ];

  const [archiveMode, setArchiveMode] = React.useState<'photo' | 'meme'>('photo');

  const handleTap = () => {
    soundManager.playMeow();
  };

  const handleModeToggle = (mode: 'photo' | 'meme') => {
    soundManager.playClick();
    setArchiveMode(mode);
  };

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
            color: '#FFB7C5',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Sparkles size={12} /> THE AUTHENTIC DETAILS
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Little Things I Remember
        </h2>
        <p style={{ color: '#D8CCE6', fontSize: '0.82rem', marginTop: '2px' }}>
          It’s always the tiny, specific moments that stay:
        </p>
      </div>

      {/* Switcher */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '3px',
          borderRadius: '999px',
          border: '1px solid rgba(255, 183, 197, 0.25)',
        }}
      >
        <button
          onClick={() => handleModeToggle('photo')}
          style={{
            padding: '4px 12px',
            borderRadius: '999px',
            border: 'none',
            background: archiveMode === 'photo' ? '#FFB7C5' : 'transparent',
            color: archiveMode === 'photo' ? '#1E1624' : '#BDB0C9',
            fontSize: '0.7rem',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          📖 Cozy Bookstore Afternoon
        </button>
        <button
          onClick={() => handleModeToggle('meme')}
          style={{
            padding: '4px 12px',
            borderRadius: '999px',
            border: 'none',
            background: archiveMode === 'meme' ? '#38E09A' : 'transparent',
            color: archiveMode === 'meme' ? '#1E1624' : '#BDB0C9',
            fontSize: '0.7rem',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          😸 Smiling Cat Meme
        </button>
      </div>

      {/* Media Slot */}
      <div style={{ width: '100%', maxWidth: '380px' }}>
        {archiveMode === 'photo' ? (
          <AssetPlaceholder
            slotKey="herBookstore"
            height="175px"
            width="100%"
            objectFit="cover"
          />
        ) : (
          <AssetPlaceholder
            slotKey="littleThingsCatMeme"
            height="125px"
            width="100%"
            objectFit="contain"
          />
        )}
      </div>

      {/* 2x2 Interactive Sticker Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
          width: '100%',
          maxWidth: '380px',
        }}
      >
        {STICKERS.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04, rotate: i % 2 === 0 ? 2 : -2 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleTap}
            style={{
              padding: '10px 8px',
              background: s.bg,
              border: `1.5px dashed ${s.border}`,
              borderRadius: '14px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              gap: '4px',
              boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
              userSelect: 'none',
            }}
          >
            <span style={{ fontSize: '1.8rem' }}>{s.emoji}</span>
            <div style={{ color: '#FDFBFF', fontSize: '0.8rem', fontWeight: 800 }}>{s.title}</div>
            <div style={{ color: '#BDB0C9', fontSize: '0.68rem', lineHeight: 1.3 }}>{s.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
