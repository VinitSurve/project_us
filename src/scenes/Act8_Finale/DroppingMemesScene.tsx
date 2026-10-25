import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';

export const DroppingMemesScene: React.FC = () => {
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
          <Heart size={12} fill="#FFB7C5" color="#FFB7C5" /> TURNING DOWN THE VOLUME
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Okay, Jokes Aside...
        </h2>
        <p style={{ color: '#D8CCE6', fontSize: '0.82rem', marginTop: '2px' }}>
          Taking a quiet breath before the real question.
        </p>
      </div>

      {/* Cat Meme Slot */}
      <AssetPlaceholder
        slotKey="softSideCatMeme"
        height="125px"
        width="100%"
        style={{ maxWidth: '380px' }}
      />

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
