import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../context/PresentationContext';
import { soundManager } from '../utils/sound';
import { Sparkles, Heart } from 'lucide-react';

export const CatCompanion: React.FC = () => {
  const { catMood, setCatMood, currentScene, addPurr, purrMeter, catVisible } = usePresentation();
  const [bubbleOpen, setBubbleOpen] = useState(true);
  const [tapCount, setTapCount] = useState(0);
  const [heartPops, setHeartPops] = useState<{ id: number; x: number; y: number }[]>([]);

  if (!catVisible) return null;

  const handleCatTap = (e: React.MouseEvent | React.TouchEvent) => {
    // Prevent accidental scene navigation
    e.stopPropagation();

    soundManager.playMeow();
    addPurr(15);
    setTapCount((prev) => prev + 1);
    setBubbleOpen(true);
    setCatMood('happy');

    // Spawn floating heart
    const newHeart = { id: Date.now() + Math.random(), x: Math.random() * 40 - 20, y: -30 };
    setHeartPops((prev) => [...prev.slice(-4), newHeart]);

    setTimeout(() => {
      setHeartPops((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '84px',
        right: '16px',
        zIndex: 90,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {/* Speech Bubble with current scene's cat comment */}
      <AnimatePresence>
        {bubbleOpen && currentScene.catComment && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              pointerEvents: 'auto',
              maxWidth: '220px',
              background: '#FFFDF9',
              color: '#231C18',
              padding: '8px 12px',
              borderRadius: '14px',
              borderBottomRightRadius: '2px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              marginBottom: '6px',
              fontSize: '0.82rem',
              lineHeight: 1.35,
              position: 'relative',
              border: '2px solid #E0C3FC',
              cursor: 'pointer',
            }}
            onClick={() => setBubbleOpen(false)}
            title="Click to dismiss chat bubble"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px', color: '#B388FF', fontWeight: 700, fontSize: '0.72rem' }}>
              <Sparkles size={11} /> Billi-Bot Companion 🐾
            </div>
            {currentScene.catComment}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating hearts on tap */}
      {heartPops.map((h) => (
        <motion.div
          key={h.id}
          initial={{ opacity: 1, y: 0, scale: 0.7, x: h.x }}
          animate={{ opacity: 0, y: -60, scale: 1.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '25px',
            color: '#FF2A85',
            pointerEvents: 'none',
          }}
        >
          <Heart size={20} fill="#FF2A85" />
        </motion.div>
      ))}

      {/* The Animated SVG Cat */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={handleCatTap}
        style={{
          pointerEvents: 'auto',
          cursor: 'pointer',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(224, 195, 252, 0.9), rgba(255, 183, 197, 0.9))',
          boxShadow: '0 8px 25px rgba(255, 183, 197, 0.45), 0 0 0 3px rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
        title="Tap to pet Billi-bot & raise purr meter!"
      >
        {/* Purr Ring progress */}
        <svg
          style={{
            position: 'absolute',
            top: -4,
            left: -4,
            width: 72,
            height: 72,
            transform: 'rotate(-90deg)',
            pointerEvents: 'none',
          }}
        >
          <circle cx="36" cy="36" r="33" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none" />
          <circle
            cx="36"
            cy="36"
            r="33"
            stroke="#FF2A85"
            strokeWidth="3"
            strokeDasharray={207}
            strokeDashoffset={207 - (207 * purrMeter) / 100}
            strokeLinecap="round"
            fill="none"
            style={{ transition: 'stroke-dashoffset 0.3s ease' }}
          />
        </svg>

        {/* Cute Vector Cat Character */}
        <svg width="46" height="46" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ears */}
          <polygon points="18,32 30,8 45,30" fill="#2D1F36" />
          <polygon points="23,30 32,14 41,28" fill="#FFB7C5" />
          <polygon points="82,32 70,8 55,30" fill="#2D1F36" />
          <polygon points="77,30 68,14 59,28" fill="#FFB7C5" />

          {/* Head */}
          <ellipse cx="50" cy="56" rx="38" ry="32" fill="#2D1F36" />

          {/* Cheeks */}
          <circle cx="30" cy="62" r="5" fill="#FFB7C5" opacity="0.6" />
          <circle cx="70" cy="62" r="5" fill="#FFB7C5" opacity="0.6" />

          {/* Eyes based on mood */}
          {catMood === 'shocked' ? (
            <>
              <circle cx="35" cy="50" r="7" fill="#00F0FF" />
              <circle cx="35" cy="50" r="3" fill="#120E17" />
              <circle cx="65" cy="50" r="7" fill="#00F0FF" />
              <circle cx="65" cy="50" r="3" fill="#120E17" />
            </>
          ) : catMood === 'happy' || catMood === 'purring' ? (
            <>
              <path d="M 28 50 Q 35 43 42 50" stroke="#FFF" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M 58 50 Q 65 43 72 50" stroke="#FFF" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </>
          ) : (
            <>
              <ellipse cx="35" cy="50" rx="5" ry="7" fill="#FFF" />
              <circle cx="36" cy="50" r="3.5" fill="#120E17" />
              <circle cx="38" cy="48" r="1.5" fill="#FFF" />
              <ellipse cx="65" cy="50" rx="5" ry="7" fill="#FFF" />
              <circle cx="64" cy="50" r="3.5" fill="#120E17" />
              <circle cx="66" cy="48" r="1.5" fill="#FFF" />
            </>
          )}

          {/* Cute Nose & Mouth */}
          <polygon points="47,60 53,60 50,63" fill="#FFB7C5" />
          <path d="M 45 64 Q 50 67 50 64 Q 50 67 55 64" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Whiskers */}
          <line x1="16" y1="58" x2="3" y2="55" stroke="#E0C3FC" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="64" x2="4" y2="67" stroke="#E0C3FC" strokeWidth="2" strokeLinecap="round" />
          <line x1="84" y1="58" x2="97" y2="55" stroke="#E0C3FC" strokeWidth="2" strokeLinecap="round" />
          <line x1="84" y1="64" x2="96" y2="67" stroke="#E0C3FC" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Small badge count */}
        {tapCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-3px',
              left: '-3px',
              background: '#FF2A85',
              color: '#FFF',
              fontSize: '0.65rem',
              fontWeight: 800,
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #FFF',
            }}
          >
            {tapCount}
          </span>
        )}
      </motion.div>
    </div>
  );
};
