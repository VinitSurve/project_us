import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Cat, Sparkles, ArrowRight, Heart, Zap, RefreshCw } from 'lucide-react';

const BRAINROT_QUOTES = [
  'NO THOUGHTS, HEAD EMPTY, ONLY CATS & CHAI.',
  'ARE YOU AN EXCEPTION? CAUSE I CANNOT CATCH MY BREATH.',
  'I AM NOT CRAZY, I AM JUST DIAGNOSED WITH RESPECTFUL LIKING.',
  'LOCAL SOFTWARE ENGINEER BUILDS 32-PAGE PRESENTATION INSTEAD OF NORMAL TEXT.',
  'PURR-MISSION TO GO ON A DATE REQUESTED.',
  '10/10 CAT CONSULTANTS AGREE: THIS PROPOSAL SLAPS.',
];

export const CatBrainrotHubScene: React.FC = () => {
  const { nextScene, purrMeter, addPurr, unlockEasterEgg } = usePresentation();
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [floatingEmojis, setFloatingEmojis] = useState<{ id: number; emoji: string; x: number }[]>([]);

  const handlePet = () => {
    soundManager.playMeow();
    addPurr(20);

    const emojis = ['🐾', '💖', '✨', '😹', '🧶', '🐟'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const newEmoji = { id: Date.now() + Math.random(), emoji: randomEmoji, x: Math.random() * 80 - 40 };

    setFloatingEmojis((prev) => [...prev.slice(-6), newEmoji]);

    setTimeout(() => {
      setFloatingEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id));
    }, 1200);

    if (purrMeter + 20 >= 100) {
      unlockEasterEgg('purr-master');
    }
  };

  const nextQuote = () => {
    soundManager.playClick();
    setQuoteIndex((prev) => (prev + 1) % BRAINROT_QUOTES.length);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#FFE600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Cat size={14} /> ACT VII // FELINE BRAINROT HQ
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Cat Brainrot &amp; Petting Lab
        </h2>
      </div>

      {/* Main Interactive Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '22px 20px',
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
            <span style={{ fontSize: '0.78rem', color: '#FFB7C5', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={14} color="#FFE600" /> PURR POWER METER:
            </span>
            <span style={{ fontSize: '0.85rem', color: '#FFE600', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
              {purrMeter}%
            </span>
          </div>
          <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
            <motion.div
              animate={{ width: `${purrMeter}%` }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #FFB7C5, #FF2A85, #FFE600)',
              }}
            />
          </div>
          {purrMeter >= 100 && (
            <span style={{ fontSize: '0.72rem', color: '#38E09A', display: 'block', textAlign: 'center', marginTop: '4px', fontWeight: 700 }}>
              🐾 MAXIMUM PURR REACHED! BILLI-BOT IS THRIVING! 🐾
            </span>
          )}
        </div>

        {/* Petting Zone */}
        <div style={{ position: 'relative' }}>
          {floatingEmojis.map((e) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 1, y: 0, x: e.x, scale: 0.8 }}
              animate={{ opacity: 0, y: -70, scale: 1.4 }}
              transition={{ duration: 1 }}
              style={{
                position: 'absolute',
                top: '20px',
                left: '50%',
                fontSize: '1.6rem',
                pointerEvents: 'none',
              }}
            >
              {e.emoji}
            </motion.div>
          ))}

          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={handlePet}
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #FFB7C5 0%, #2D1F36 80%)',
              border: '3px solid #FFB7C5',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 0 30px rgba(255, 183, 197, 0.4)',
            }}
          >
            <span style={{ fontSize: '3.4rem', userSelect: 'none' }}>😻</span>
            <span style={{ fontSize: '0.66rem', color: '#FFF', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Tap To Pet Me!
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
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: '#FFE600', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
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
                fontSize: '0.7rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <RefreshCw size={11} /> Next Meme
            </button>
          </div>
          <div style={{ color: '#FDFBFF', fontSize: '0.86rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
            &ldquo;{BRAINROT_QUOTES[quoteIndex]}&rdquo;
          </div>
        </div>
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
          background: 'linear-gradient(135deg, #FFE600, #FFB7C5)',
          border: 'none',
          color: '#1E1624',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(255, 230, 0, 0.35)',
        }}
      >
        <span>Proceed to Founder&apos;s Sincere Note</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
