import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Cat, Zap, RefreshCw, Sparkles } from 'lucide-react';

const BRAINROT_QUOTES = [
  'NO THOUGHTS, HEAD EMPTY, ONLY CATS & CHAI.',
  'ARE YOU AN EXCEPTION? CAUSE I CANNOT CATCH MY BREATH.',
  'I AM NOT CRAZY, I AM JUST DIAGNOSED WITH RESPECTFUL LIKING.',
  'LOCAL SOFTWARE ENGINEER BUILDS 32-PAGE PRESENTATION INSTEAD OF NORMAL TEXT.',
  'PURR-MISSION TO GO ON A DATE REQUESTED.',
  '10/10 CAT CONSULTANTS AGREE: THIS PROPOSAL SLAPS.',
];

export const CatBrainrotHubScene: React.FC = () => {
  const { purrMeter, addPurr, unlockEasterEgg, openLightbox } = usePresentation();
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [floatingEmojis, setFloatingEmojis] = useState<{ id: number; emoji: string; x: number }[]>([]);

  const handlePet = () => {
    soundManager.playMeow();
    addPurr(20);

    const emojis = ['🐾', '💖', '✨', '😻', '🧶', '🐟'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const newEmoji = { id: Date.now() + Math.random(), emoji: randomEmoji, x: Math.random() * 80 - 40 };

    setFloatingEmojis((prev) => [...prev.slice(-6), newEmoji]);

    setTimeout(() => {
      setFloatingEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id));
    }, 1000);

    if (purrMeter + 20 >= 100) {
      unlockEasterEgg('purr-master');
    }
  };

  const nextQuote = () => {
    soundManager.playClick();
    setQuoteIndex((prev) => (prev + 1) % BRAINROT_QUOTES.length);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center' }}>
      {/* Badge & Title */}
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
          <Cat size={13} /> ACT VII // FELINE BRAINROT HQ
        </div>
        <h2 style={{ fontSize: 'clamp(1.3rem, 4.5vw, 1.85rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Petting Lab &amp; Meme Terminal
        </h2>
      </div>

      {/* Main Interactive Arcade Card */}
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '460px',
          padding: '20px 18px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          position: 'relative',
        }}
      >
        {/* Purr Meter Progress Bar */}
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.75rem', color: '#FFB7C5', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Zap size={13} color="#FFE600" /> PURR POWER:
            </span>
            <span style={{ fontSize: '0.82rem', color: '#FFE600', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
              {purrMeter}%
            </span>
          </div>
          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
            <motion.div
              animate={{ width: `${purrMeter}%` }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #FFB7C5, #FF2A85, #FFE600)',
              }}
            />
          </div>
          {purrMeter >= 100 && (
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{
                marginTop: '10px',
                padding: '8px 12px',
                borderRadius: '12px',
                background: 'rgba(56, 224, 154, 0.12)',
                border: '1px solid rgba(56, 224, 154, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textAlign: 'left',
                cursor: 'pointer',
              }}
              onClick={() => openLightbox('/photos/together/us_cat_alert.jpg', 'Banyan Tree Kitten', 'The actual kitten we befriended together under the banyan tree')}
            >
              <img
                src="/photos/together/us_cat_alert.jpg"
                alt="Banyan Tree Kitten"
                style={{ width: '44px', height: '44px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }}
              />
              <div>
                <div style={{ fontSize: '0.74rem', color: '#38E09A', fontWeight: 800 }}>
                  🐾 UNLOCKED: The Real Kitten We Befriended!
                </div>
                <div style={{ fontSize: '0.66rem', color: '#BDB0C9' }}>
                  Tap to view our actual banyan tree companion.
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Petting Zone */}
        <div style={{ position: 'relative', padding: '10px 0' }}>
          {floatingEmojis.map((e) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 1, y: 0, x: e.x, scale: 0.8 }}
              animate={{ opacity: 0, y: -65, scale: 1.4 }}
              transition={{ duration: 0.9 }}
              style={{
                position: 'absolute',
                top: '10px',
                left: '50%',
                fontSize: '1.6rem',
                pointerEvents: 'none',
              }}
            >
              {e.emoji}
            </motion.div>
          ))}

          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            onClick={handlePet}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #FFB7C5 0%, #2D1F36 80%)',
              border: '3px solid #FFB7C5',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 0 26px rgba(255, 183, 197, 0.4)',
              userSelect: 'none',
            }}
          >
            <span style={{ fontSize: '3rem', lineHeight: 1 }}>😻</span>
            <span style={{ fontSize: '0.62rem', color: '#FFF', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '4px' }}>
              Tap to Pet
            </span>
          </motion.div>
        </div>

        {/* Brainrot Meme Quote Generator */}
        <div
          style={{
            width: '100%',
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(255, 230, 0, 0.25)',
            borderRadius: '12px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            textAlign: 'left',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.68rem', color: '#FFE600', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
              MEME_TRANSMISSION #{quoteIndex + 1}
            </span>
            <button
              onClick={nextQuote}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                color: '#FFF',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '0.68rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <RefreshCw size={10} /> Next Meme
            </button>
          </div>
          <div style={{ color: '#FDFBFF', fontSize: '0.82rem', fontWeight: 700, fontFamily: 'var(--font-mono)', lineHeight: 1.4 }}>
            &ldquo;{BRAINROT_QUOTES[quoteIndex]}&rdquo;
          </div>
        </div>
      </div>

      <div style={{ fontSize: '0.75rem', color: '#847693', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Sparkles size={12} color="#FFB7C5" />
        <span>Next up: The sincere part (No more brainrot)</span>
      </div>
    </div>
  );
};
