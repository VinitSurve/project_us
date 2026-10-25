import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Sparkles, Camera, Cat } from 'lucide-react';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';
import { soundManager } from '../../utils/sound';

export const HacknovaOriginScene: React.FC = () => {
  const [viewMode, setViewMode] = useState<'photo' | 'meme'>('photo');

  const toggleView = (mode: 'photo' | 'meme') => {
    soundManager.playClick();
    setViewMode(mode);
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
            color: '#00F0FF',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Sparkles size={12} /> THE ORIGIN // HACKNOVA 2026
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Hacknova Spark
        </h2>
        <p style={{ color: '#D8CCE6', fontSize: '0.84rem', marginTop: '2px' }}>
          Cold pizza, endless debugging, and an unexpected spark.
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
          border: '1px solid rgba(0, 240, 255, 0.2)',
        }}
      >
        <button
          onClick={() => toggleView('photo')}
          style={{
            padding: '4px 12px',
            borderRadius: '999px',
            border: 'none',
            background: viewMode === 'photo' ? '#00F0FF' : 'transparent',
            color: viewMode === 'photo' ? '#120E17' : '#BDB0C9',
            fontSize: '0.7rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            transition: 'all 0.15s ease',
          }}
        >
          <Camera size={11} /> Us at Hacknova
        </button>
        <button
          onClick={() => toggleView('meme')}
          style={{
            padding: '4px 12px',
            borderRadius: '999px',
            border: 'none',
            background: viewMode === 'meme' ? '#FFE600' : 'transparent',
            color: viewMode === 'meme' ? '#120E17' : '#BDB0C9',
            fontSize: '0.7rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            transition: 'all 0.15s ease',
          }}
        >
          <Cat size={11} /> Chemistry Cat
        </button>
      </div>

      {/* Media Display Area */}
      <div style={{ width: '100%', maxWidth: '380px' }}>
        <AnimatePresence mode="wait">
          {viewMode === 'photo' ? (
            <motion.div
              key="photo"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <AssetPlaceholder
                slotKey="usTogetherHacknova"
                height="190px"
                width="100%"
                objectFit="cover"
              />
            </motion.div>
          ) : (
            <motion.div
              key="meme"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <AssetPlaceholder
                slotKey="hacknovaCatMeme"
                height="140px"
                width="100%"
                objectFit="contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Terminal Code Snippet */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          width: '100%',
          maxWidth: '380px',
          background: '#150F1D',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          borderRadius: '14px',
          padding: '14px 16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          textAlign: 'left',
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
        }}
      >
        <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5F56' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27C93F' }} />
        </div>
        <div style={{ color: '#847693', marginBottom: '4px' }}>// Hacknova 2024 • Late Night Log</div>
        <div style={{ color: '#00F0FF' }}>$ git log --chemistry</div>
        <div style={{ color: '#38E09A', marginTop: '4px' }}>&gt; Fluorescent lights. Two code enthusiasts.</div>
        <div style={{ color: '#E0C3FC' }}>&gt; And suddenly, 3 hours passed in 5 minutes.</div>
      </motion.div>

      {/* Handwritten note */}
      <div
        style={{
          width: '100%',
          maxWidth: '380px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px dashed rgba(224, 195, 252, 0.3)',
          borderRadius: '12px',
          padding: '12px 16px',
          textAlign: 'left',
        }}
      >
        <p
          className="font-handwriting"
          style={{
            fontSize: '1.15rem',
            color: '#FFB7C5',
            lineHeight: 1.4,
          }}
        >
          &ldquo;You were effortlessly funny, sharp, and authentic. I remember hoping the conversation wouldn&apos;t end when the hackathon did.&rdquo;
        </p>
      </div>
    </div>
  );
};
