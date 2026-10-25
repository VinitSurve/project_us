import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';

export const DroppingMemesScene: React.FC = () => {
  const [activePhoto, setActivePhoto] = React.useState<'bouquet' | 'tree' | 'meme'>('bouquet');

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
            color: '#E0C3FC',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Heart size={12} fill="#FFB7C5" color="#FFB7C5" /> TURNING DOWN THE VOLUME
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Okay, Jokes Aside...
        </h2>
        <p style={{ color: '#D8CCE6', fontSize: '0.82rem', marginTop: '2px' }}>
          Taking a quiet breath before the real question.
        </p>
      </div>

      {/* Switcher Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '3px',
          borderRadius: '999px',
          border: '1px solid rgba(224, 195, 252, 0.25)',
        }}
      >
        <button
          onClick={() => setActivePhoto('bouquet')}
          style={{
            padding: '4px 12px',
            borderRadius: '999px',
            border: 'none',
            background: activePhoto === 'bouquet' ? '#FFB7C5' : 'transparent',
            color: activePhoto === 'bouquet' ? '#1E1624' : '#BDB0C9',
            fontSize: '0.7rem',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          🌹 Roses &amp; Cake
        </button>
        <button
          onClick={() => setActivePhoto('tree')}
          style={{
            padding: '4px 12px',
            borderRadius: '999px',
            border: 'none',
            background: activePhoto === 'tree' ? '#E0C3FC' : 'transparent',
            color: activePhoto === 'tree' ? '#1E1624' : '#BDB0C9',
            fontSize: '0.7rem',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          ✨ Floral Candid
        </button>
        <button
          onClick={() => setActivePhoto('meme')}
          style={{
            padding: '4px 12px',
            borderRadius: '999px',
            border: 'none',
            background: activePhoto === 'meme' ? '#38E09A' : 'transparent',
            color: activePhoto === 'meme' ? '#1E1624' : '#BDB0C9',
            fontSize: '0.7rem',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          🥺 Soft Meme
        </button>
      </div>

      {/* Media Slot */}
      <div style={{ width: '100%', maxWidth: '380px' }}>
        {activePhoto === 'bouquet' && (
          <AssetPlaceholder
            slotKey="herCafeBouquet"
            height="200px"
            width="100%"
            objectFit="cover"
          />
        )}
        {activePhoto === 'tree' && (
          <AssetPlaceholder
            slotKey="herBouquetCandid"
            height="200px"
            width="100%"
            objectFit="cover"
          />
        )}
        {activePhoto === 'meme' && (
          <AssetPlaceholder
            slotKey="softSideCatMeme"
            height="130px"
            width="100%"
            objectFit="contain"
          />
        )}
      </div>

      {/* Gentle transition card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          width: '100%',
          maxWidth: '380px',
          background: 'linear-gradient(145deg, rgba(32, 23, 40, 0.8), rgba(18, 14, 23, 0.9))',
          border: '1px solid rgba(224, 195, 252, 0.25)',
          borderRadius: '18px',
          padding: '18px 20px',
          textAlign: 'center',
          boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
        }}
      >
        <p style={{ color: '#FDFBFF', fontSize: '0.92rem', lineHeight: 1.6, fontWeight: 500 }}>
          The cat memes are fun, and the brainrot makes me laugh. But the reason I made this is very simple:
        </p>
        <p
          className="font-handwriting"
          style={{
            fontSize: '1.35rem',
            color: '#FFB7C5',
            marginTop: '10px',
            lineHeight: 1.35,
          }}
        >
          I really, genuinely like you.
        </p>
      </motion.div>
    </div>
  );
};
