import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Pin, ArrowRight, Sparkles, MessageCircle, Heart } from 'lucide-react';

export const InsideJokeLoreScene: React.FC = () => {
  const { nextScene } = usePresentation();
  const [activeNote, setActiveNote] = useState<number | null>(null);

  const JOKES = [
    {
      title: 'The Unlimited Yap Bandwidth',
      note: 'Normal humans run out of things to say in 20 minutes. We routinely breach the 2-hour conversational singularity without noticing time passing.',
      color: '#FFF9C4',
      rotate: -2,
      tag: 'Infinite Quota',
    },
    {
      title: 'The Scooter Transit Paradox',
      note: 'According to classical Euclidean geometry, a straight line is the shortest path. According to our rides, the scenic route with one extra topic is 4x longer and 10x better.',
      color: '#FFCDD2',
      rotate: 3,
      tag: 'Physics Defied',
    },
    {
      title: 'Billi-Bot Deployments',
      note: 'Why write a regular text when you can program a virtual feline that takes over her desktop and demands head scratches?',
      color: '#E1BEE7',
      rotate: -1.5,
      tag: 'Overengineering',
    },
    {
      title: 'Chai as a System Dependency',
      note: 'package.json dependencies: "chai": "^4.2.0". Warning: Removing chai causes runtime emotional exceptions.',
      color: '#C8E6C9',
      rotate: 2,
      tag: 'Core Library',
    },
  ];

  const handleNoteClick = (idx: number) => {
    soundManager.playClick();
    setActiveNote(activeNote === idx ? null : idx);
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
          <Pin size={14} /> CLASSIFIED MEMO // INSIDE JOKES
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Inside-Joke Pinboard
        </h2>
      </div>

      {/* Pinboard Grid */}
      <div
        className="glass-panel"
        style={{
          padding: '20px 16px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '12px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
      >
        {JOKES.map((joke, idx) => {
          const isSelected = activeNote === idx;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNoteClick(idx)}
              style={{
                background: joke.color,
                color: '#231C18',
                borderRadius: '12px',
                padding: '14px',
                boxShadow: isSelected
                  ? '0 8px 24px rgba(0,0,0,0.3), 0 0 0 2px #FF2A85'
                  : '0 4px 12px rgba(0,0,0,0.15)',
                transform: `rotate(${joke.rotate}deg)`,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                position: 'relative',
                transition: 'all 0.2s ease',
              }}
            >
              {/* Pushpin Graphic */}
              <div
                style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: '#FF4757',
                  border: '2px solid #FFF',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                <span
                  style={{
                    fontSize: '0.68rem',
                    background: 'rgba(0,0,0,0.12)',
                    padding: '2px 8px',
                    borderRadius: '999px',
                    fontWeight: 700,
                  }}
                >
                  {joke.tag}
                </span>
                <span style={{ fontSize: '0.72rem', color: '#5A5047' }}>
                  {isSelected ? '🐾 Active' : 'Tap to read'}
                </span>
              </div>

              <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#1A1423' }}>
                {joke.title}
              </h4>

              <p style={{ fontSize: '0.8rem', lineHeight: 1.45, color: '#3A3027' }}>
                {joke.note}
              </p>
            </motion.div>
          );
        })}
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
        <span>Enter The Compatibility Laboratory</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
