import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { MEMORY_PHOTOS } from '../../content/proposalData';
import { soundManager } from '../../utils/sound';
import { RotateCw, Sparkles } from 'lucide-react';

export const PhotoMuseumScene: React.FC = () => {
  const { unlockEasterEgg } = usePresentation();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const photo = MEMORY_PHOTOS[photoIndex];

  const handleFlip = () => {
    soundManager.playChime();
    setIsFlipped(!isFlipped);
    unlockEasterEgg('curious-explorer');
  };

  const nextPhoto = () => {
    soundManager.playClick();
    setIsFlipped(false);
    setPhotoIndex((prev) => (prev + 1) % MEMORY_PHOTOS.length);
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
          Memory Museum
        </h2>
        <p style={{ color: '#FFB7C5', fontSize: '0.86rem', marginTop: '4px' }}>
          Tap the Polaroid to flip &amp; read the back:
        </p>
      </div>

      {/* 3D Flippable Polaroid */}
      <div style={{ perspective: '1000px', width: '100%', maxWidth: '340px', height: '360px' }}>
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
              padding: '16px 16px 24px 16px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
              border: '1px solid #E8E0D2',
            }}
          >
            {/* Washi Tape */}
            <div
              style={{
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%) rotate(1deg)',
                width: '70px',
                height: '20px',
                background: 'rgba(255, 183, 197, 0.75)',
                borderRadius: '2px',
              }}
            />

            {/* Photo illustration placeholder */}
            <div
              style={{
                flex: 1,
                background: 'linear-gradient(135deg, #2D1F36, #1A1423)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFB7C5',
                fontSize: '2.8rem',
              }}
            >
              {photoIndex === 0 && '⚡'}
              {photoIndex === 1 && '🧶'}
              {photoIndex === 2 && '🛵'}
              {photoIndex === 3 && '💻'}
            </div>

            <div style={{ marginTop: '14px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#231C18' }}>{photo.title}</h3>
              <p style={{ fontSize: '0.78rem', color: '#5A5047', marginTop: '2px' }}>{photo.caption}</p>
              <div style={{ marginTop: '8px', fontSize: '0.7rem', color: '#B388FF', fontWeight: 700 }}>
                ↻ Tap to flip card
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
              padding: '28px 22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
              border: '1px solid #FFF59D',
              textAlign: 'left',
            }}
          >
            <div style={{ fontSize: '0.74rem', color: '#847693', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
              MEMO ARCHIVE #{photoIndex + 1}
            </div>
            <p
              className="font-handwriting"
              style={{
                fontSize: '1.45rem',
                color: '#D81B60',
                lineHeight: 1.4,
                fontWeight: 700,
              }}
            >
              &ldquo;{photo.stickyNote}&rdquo;
            </p>
            <div style={{ marginTop: '16px', fontSize: '0.7rem', color: '#847693' }}>
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
          padding: '8px 16px',
          borderRadius: '999px',
          fontSize: '0.8rem',
          fontWeight: 700,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span>Next Memory ({photoIndex + 1}/4)</span>
        <RotateCw size={12} />
      </motion.button>
    </div>
  );
};
