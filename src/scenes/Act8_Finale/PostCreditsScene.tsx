import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { RotateCcw, Heart, Sparkles, Moon } from 'lucide-react';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';

export const PostCreditsScene: React.FC = () => {
  const { goToScene, setDrawerOpen } = usePresentation();

  const handleRestart = () => {
    soundManager.playBell();
    goToScene(0);
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
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#FFB7C5',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '4px',
          }}
        >
          <Moon size={12} /> MIDNIGHT TRANSMISSION // EPILOGUE
        </div>

        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 1.9rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Whenever you&apos;re ready. No rush.
        </h2>
      </div>

      {/* Cat Meme Slot */}
      <AssetPlaceholder
        slotKey="epilogueCatMeme"
        height="120px"
        width="100%"
        style={{ maxWidth: '360px' }}
      />

      {/* Epilogue Text */}
      <div style={{ maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ color: '#D8CCE6', fontSize: '0.86rem', lineHeight: 1.55 }}>
          Billi-bot has concluded its duties and is taking a well-deserved nap.
          Thank you for letting me share this with you. Whatever your answer is, I am simply glad to know you.
        </p>

        <div
          className="font-handwriting"
          style={{
            fontSize: '1.35rem',
            color: '#FFB7C5',
            marginTop: '2px',
          }}
        >
          Always in your corner. ✨
        </div>
      </div>

      {/* Dedication Banner */}
      <div
        style={{
          padding: '8px 14px',
          borderRadius: '10px',
          background: 'rgba(255, 42, 133, 0.1)',
          border: '1px solid rgba(255, 42, 133, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#FFB7C5',
          fontSize: '0.74rem',
          fontWeight: 700,
        }}
      >
        <Heart size={12} fill="#FF2A85" color="#FF2A85" />
        <span>Crafted with sincere fondness for बाळ.</span>
      </div>

      {/* Replay Presentation Button */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '2px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleRestart}
          style={{
            padding: '10px 18px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(224, 195, 252, 0.3)',
            color: '#FDFBFF',
            fontWeight: 700,
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
          }}
        >
          <RotateCcw size={14} />
          <span>Replay Story</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setDrawerOpen(true)}
          style={{
            padding: '10px 18px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #FFB7C5, #E0C3FC)',
            border: 'none',
            color: '#1E1624',
            fontWeight: 800,
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(255, 183, 197, 0.35)',
          }}
        >
          <Sparkles size={14} />
          <span>Browse All Parts</span>
        </motion.button>
      </div>

      {/* Dataset License & Attribution */}
      <div
        style={{
          marginTop: '6px',
          fontSize: '0.64rem',
          color: '#847693',
          fontFamily: 'var(--font-mono)',
          lineHeight: 1.4,
        }}
      >
        <span>Meme assets from </span>
        <a
          href="https://huggingface.co/datasets/pielet/cat-memes"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#FFB7C5', textDecoration: 'underline' }}
        >
          pielet/cat-memes
        </a>
        <span> · MIT License (Shiyang Jia)</span>
      </div>
    </div>
  );
};
