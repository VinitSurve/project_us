import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { MEMORY_PHOTOS } from '../../content/proposalData';
import { soundManager } from '../../utils/sound';
import { Camera, Sparkles, ArrowRight, Eye, StickyNote } from 'lucide-react';

export const PhotoMuseumScene: React.FC = () => {
  const { nextScene, unlockEasterEgg } = usePresentation();
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [showSecretNote, setShowSecretNote] = useState(false);

  const activePhoto = MEMORY_PHOTOS[activePhotoIndex];

  const handleReveal = () => {
    soundManager.playChime();
    setShowSecretNote(!showSecretNote);
    unlockEasterEgg('curious-explorer');
  };

  const selectPhoto = (index: number) => {
    soundManager.playClick();
    setActivePhotoIndex(index);
    setShowSecretNote(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#FFB7C5',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Camera size={14} /> CURATED GALLERY // EXHIBIT 03
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Photo Museum
        </h2>
      </div>

      {/* Main Polaroid Frame */}
      <div
        className="paper-sheet"
        style={{
          padding: '16px 16px 20px 16px',
          background: '#FFFDF9',
          color: '#231C18',
          borderRadius: '16px',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0,0,0,0.06)',
          position: 'relative',
        }}
      >
        {/* Washi Tape Graphic */}
        <div
          style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%) rotate(-1deg)',
            width: '90px',
            height: '24px',
            background: 'rgba(255, 183, 197, 0.75)',
            borderRadius: '2px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          }}
        />

        {/* Artistic Framed Viewport (Stylized Illustrated SVG Aesthetic) */}
        <div
          style={{
            width: '100%',
            height: '180px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #2D1F36, #1A1423)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            border: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          {/* Stylized Vector Visual matching photo category */}
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            {activePhotoIndex === 0 && (
              // Hacknova Hackathon Graphic
              <>
                <rect x="15" y="25" width="70" height="45" rx="6" stroke="#FFB7C5" strokeWidth="4" />
                <path d="M 28 42 L 38 48 L 28 54" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="44" y1="54" x2="56" y2="54" stroke="#38E09A" strokeWidth="3" strokeLinecap="round" />
                <polygon points="50,70 40,80 60,80" fill="#E0C3FC" />
              </>
            )}
            {activePhotoIndex === 1 && (
              // Crochet Cat-Ear Clips
              <>
                <polygon points="20,45 35,18 50,45" fill="#FFB7C5" />
                <polygon points="26,43 35,26 44,43" fill="#FFF" />
                <polygon points="80,45 65,18 50,45" fill="#FFB7C5" />
                <polygon points="74,43 65,26 56,43" fill="#FFF" />
                <ellipse cx="50" cy="65" rx="32" ry="24" fill="#E0C3FC" />
                <circle cx="38" cy="62" r="4" fill="#120E17" />
                <circle cx="62" cy="62" r="4" fill="#120E17" />
              </>
            )}
            {activePhotoIndex === 2 && (
              // Chai Run & Scooter
              <>
                <circle cx="30" cy="70" r="14" stroke="#FFD3B6" strokeWidth="4" />
                <circle cx="70" cy="70" r="14" stroke="#FFD3B6" strokeWidth="4" />
                <path d="M 30 70 L 45 50 L 60 50 L 70 70" stroke="#FFE600" strokeWidth="4" strokeLinecap="round" />
                <path d="M 45 30 L 45 42" stroke="#FF5E36" strokeWidth="3" strokeLinecap="round" />
                <ellipse cx="45" cy="44" rx="8" ry="4" fill="#FF5E36" />
              </>
            )}
            {activePhotoIndex === 3 && (
              // Desktop Virtual Cat
              <>
                <rect x="20" y="20" width="60" height="48" rx="8" stroke="#38E09A" strokeWidth="3" />
                <polygon points="32,32 40,16 48,32" fill="#38E09A" />
                <polygon points="52,32 60,16 68,32" fill="#38E09A" />
                <circle cx="42" cy="42" r="3" fill="#FFF" />
                <circle cx="58" cy="42" r="3" fill="#FFF" />
                <line x1="40" y1="76" x2="60" y2="76" stroke="#38E09A" strokeWidth="4" strokeLinecap="round" />
              </>
            )}
          </svg>

          <span
            style={{
              position: 'absolute',
              bottom: '8px',
              right: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.7)',
              background: 'rgba(0,0,0,0.5)',
              padding: '2px 8px',
              borderRadius: '4px',
            }}
          >
            {activePhoto.category}
          </span>
        </div>

        {/* Polaroid Caption */}
        <div style={{ marginTop: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#231C18' }}>
              {activePhoto.title}
            </h3>
            <span style={{ fontSize: '0.72rem', color: '#5A5047', fontFamily: 'var(--font-mono)' }}>
              {activePhoto.date}
            </span>
          </div>
          <p style={{ fontSize: '0.82rem', color: '#5A5047', marginTop: '4px', lineHeight: 1.45 }}>
            {activePhoto.caption}
          </p>
        </div>

        {/* Tappable Secret Note Reveal */}
        <div style={{ marginTop: '10px' }}>
          <button
            onClick={handleReveal}
            style={{
              background: showSecretNote ? '#FF2A85' : 'rgba(255, 42, 133, 0.1)',
              border: 'none',
              borderRadius: '999px',
              padding: '6px 12px',
              color: showSecretNote ? '#FFF' : '#FF2A85',
              fontSize: '0.74rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <StickyNote size={13} />
            <span>{showSecretNote ? 'Hide Sticky Note' : 'Tap to reveal handwritten note ✏️'}</span>
          </button>

          <AnimatePresence>
            {showSecretNote && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 4 }}
                style={{
                  marginTop: '8px',
                  padding: '10px 14px',
                  background: '#FFF9C4',
                  border: '1px solid #FFF59D',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  className="font-handwriting"
                  style={{
                    color: '#D81B60',
                    fontSize: '1.2rem',
                    lineHeight: 1.3,
                  }}
                >
                  &ldquo;{activePhoto.stickyNote}&rdquo;
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Gallery Selector Thumbnails */}
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        {MEMORY_PHOTOS.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => selectPhoto(i)}
            style={{
              padding: '6px 12px',
              borderRadius: '10px',
              background: activePhotoIndex === i ? 'rgba(255, 183, 197, 0.25)' : 'rgba(255,255,255,0.04)',
              border: activePhotoIndex === i ? '1px solid #FFB7C5' : '1px solid rgba(255,255,255,0.06)',
              color: activePhotoIndex === i ? '#FFB7C5' : '#847693',
              fontSize: '0.74rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            0{i + 1}
          </button>
        ))}
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
          background: 'linear-gradient(135deg, #FFB7C5, #E0C3FC)',
          border: 'none',
          color: '#1E1624',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(255, 183, 197, 0.35)',
        }}
      >
        <span>Inspect The Little Things</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
