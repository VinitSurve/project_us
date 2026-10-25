import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { soundManager } from '../../utils/sound';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';

export const InsideJokeLoreScene: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const JOKES = [
    {
      title: 'The Infinite Yap Quota',
      punchline: 'Two hours pass in five minutes whenever we start talking.',
      color: '#FFF9C4',
      rotate: -2,
    },
    {
      title: 'The Cat Clip Precedent',
      punchline: 'The crochet cat clips that permanently set the bar for iconic fashion.',
      color: '#FFCDD2',
      rotate: 2,
    },
    {
      title: 'Billi-Bot Deploy',
      punchline: 'Coding a desktop companion cat because normal messages weren’t enough.',
      color: '#C8E6C9',
      rotate: -1,
    },
  ];

  const [loreMedia, setLoreMedia] = useState<'meme' | 'photo'>('photo');

  const handleTap = (i: number) => {
    soundManager.playClick();
    setActiveIdx(activeIdx === i ? null : i);
  };

  const handleMediaToggle = (mode: 'meme' | 'photo') => {
    soundManager.playClick();
    setLoreMedia(mode);
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
            color: '#FFE600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Sparkles size={12} /> CLASSIFIED SHARED FREQUENCY
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Inside Jokes &amp; Lore
        </h2>
        <p style={{ color: '#D8CCE6', fontSize: '0.84rem', marginTop: '2px' }}>
          Things only two people in the world understand:
        </p>
      </div>

      {/* Media Mode Switch */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '3px',
          borderRadius: '999px',
          border: '1px solid rgba(255, 230, 0, 0.25)',
        }}
      >
        <button
          onClick={() => handleMediaToggle('photo')}
          style={{
            padding: '4px 12px',
            borderRadius: '999px',
            border: 'none',
            background: loreMedia === 'photo' ? '#FFE600' : 'transparent',
            color: loreMedia === 'photo' ? '#120E17' : '#BDB0C9',
            fontSize: '0.7rem',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          🩺 The Toy Kit Exhibit
        </button>
        <button
          onClick={() => handleMediaToggle('meme')}
          style={{
            padding: '4px 12px',
            borderRadius: '999px',
            border: 'none',
            background: loreMedia === 'meme' ? '#FFB7C5' : 'transparent',
            color: loreMedia === 'meme' ? '#120E17' : '#BDB0C9',
            fontSize: '0.7rem',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          😏 Smug Cat Meme
        </button>
      </div>

      {/* Media Slot */}
      <div style={{ width: '100%', maxWidth: '380px' }}>
        {loreMedia === 'photo' ? (
          <AssetPlaceholder
            slotKey="herShopping"
            height="170px"
            width="100%"
            objectFit="cover"
          />
        ) : (
          <AssetPlaceholder
            slotKey="insideJokeCatMeme"
            height="130px"
            width="100%"
            objectFit="contain"
          />
        )}
      </div>

      {/* 3 Tilted Magnetic Notes */}
      <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {JOKES.map((j, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, rotate: 0 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleTap(i)}
            style={{
              padding: '10px 14px',
              background: j.color,
              color: '#231C18',
              borderRadius: '12px',
              transform: `rotate(${j.rotate}deg)`,
              boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
              cursor: 'pointer',
              textAlign: 'left',
              position: 'relative',
            }}
          >
            <div style={{ fontSize: '0.86rem', fontWeight: 800 }}>{j.title}</div>
            <div style={{ fontSize: '0.78rem', marginTop: '2px', color: '#4A3B32', lineHeight: 1.35 }}>
              {j.punchline}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
