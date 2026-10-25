import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { RotateCw, Sparkles, Heart } from 'lucide-react';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';

const MEMORIES = [
  {
    slotKey: 'usTogetherMoments',
    title: 'Moments We’ve Shared',
    caption: 'Laughter, effortless banter, and time that moves too fast.',
    stickyNote: 'The exact moment I realized conversations with you feel like home.',
  },
  {
    slotKey: 'usTogetherHacknova',
    title: 'The Hacknova Milestone',
    caption: 'Where two people with zero sleep found endless things to discuss.',
    stickyNote: 'Surrounded by code and caffeine, but you were the best part.',
  },
  {
    slotKey: 'usTogetherChai',
    title: 'The Evening Chai Runs',
    caption: 'Cool night breeze and taking the scenic route home.',
    stickyNote: '“Just one more topic before we head back...”',
  },
];

export const PhotoMuseumScene: React.FC = () => {
  const { unlockEasterEgg } = usePresentation();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const current = MEMORIES[photoIndex];

  const handleFlip = () => {
    soundManager.playChime();
    setIsFlipped(!isFlipped);
    unlockEasterEgg('curious-explorer');
  };

  const nextPhoto = () => {
    soundManager.playClick();
    setIsFlipped(false);
    setPhotoIndex((prev) => (prev + 1) % MEMORIES.length);
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
          <Sparkles size={12} /> MEMORY GALLERY // POLAROID
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Moments We&apos;ve Shared
        </h2>
        <p style={{ color: '#D8CCE6', fontSize: '0.82rem', marginTop: '2px' }}>
          Tap the Polaroid to flip &amp; read the secret note:
        </p>
      </div>

      {/* 3D Flippable Polaroid */}
      <div style={{ perspective: '1000px', width: '100%', maxWidth: '340px', height: '330px' }}>
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onClick={handleFlip}
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            cursor: 'pointer',
          }}
        >
          {/* Front Face */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              background: '#FFFDF9',
              borderRadius: '16px',
              padding: '14px 14px 20px 14px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 12px 36px rgba(0,0,0,0.45)',
              border: '1px solid #E8E0D2',
            }}
          >
            {/* Washi Tape */}
            <div
              style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%) rotate(1deg)',
                width: '60px',
                height: '16px',
                background: 'rgba(255, 183, 197, 0.75)',
                borderRadius: '2px',
                zIndex: 2,
              }}
            />

            {/* Photo slot */}
            <div style={{ flex: 1, overflow: 'hidden', borderRadius: '8px' }}>
              <AssetPlaceholder
                slotKey={current.slotKey}
                height="100%"
                width="100%"
              />
            </div>

            <div style={{ marginTop: '10px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#231C18' }}>{current.title}</h3>
              <p style={{ fontSize: '0.74rem', color: '#5A5047', marginTop: '1px' }}>{current.caption}</p>
              <div style={{ marginTop: '6px', fontSize: '0.68rem', color: '#B388FF', fontWeight: 700 }}>
                ↻ Tap photo to flip card
              </div>
            </div>
          </div>

          {/* Back Face (Handwritten Note) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: '#FFF9C4',
              borderRadius: '16px',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 12px 36px rgba(0,0,0,0.45)',
              border: '1px solid #FFF59D',
              textAlign: 'left',
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#847693', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
              SECRET MEMO #{photoIndex + 1}
            </div>
            <p
              className="font-handwriting"
              style={{
                fontSize: '1.35rem',
                color: '#D81B60',
                lineHeight: 1.4,
                fontWeight: 700,
              }}
            >
              &ldquo;{current.stickyNote}&rdquo;
            </p>
            <div style={{ marginTop: '14px', fontSize: '0.68rem', color: '#847693' }}>
              ↻ Tap to flip back
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cycle Next Photo */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={nextPhoto}
        style={{
          background: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(224, 195, 252, 0.3)',
          color: '#FDFBFF',
          padding: '6px 14px',
          borderRadius: '999px',
          fontSize: '0.76rem',
          fontWeight: 700,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span>Next Moment ({photoIndex + 1}/{MEMORIES.length})</span>
        <RotateCw size={12} />
      </motion.button>
    </div>
  );
};
