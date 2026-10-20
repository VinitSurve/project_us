import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Sparkles, ArrowRight, Heart, Coffee, Cat, Monitor, Smile } from 'lucide-react';

export const LittleThingsArchiveScene: React.FC = () => {
  const { nextScene } = usePresentation();

  const DETAILS = [
    {
      icon: <Sparkles size={20} color="#FFB7C5" />,
      title: 'The Crochet Cat-Ear Clips',
      desc: 'Not everyone can pull off hand-knitted cat ears with effortless grace. You turned a cute accessory into an iconic signature.',
      tag: 'Iconic Trait',
    },
    {
      icon: <Monitor size={20} color="#E0C3FC" />,
      title: 'The Custom Desktop Cat',
      desc: 'Building Billi-Bot to live in your computer was the easiest coding project ever, because knowing it made you smile made every line of code worth it.',
      tag: 'Tech Lore',
    },
    {
      icon: <Coffee size={20} color="#FFD3B6" />,
      title: 'Chai & Extended Scooter Rides',
      desc: 'The unspoken agreement that whatever route Google Maps suggests, we take the one with the cool breeze and 15 extra minutes of conversation.',
      tag: 'Ritual',
    },
    {
      icon: <Cat size={20} color="#38E09A" />,
      title: 'The Unfiltered Feline Enthusiasm',
      desc: 'Stopping mid-sentence whenever a street cat walks past, admiring cat videos, and treating every kitten with royal reverence.',
      tag: 'Feline Law',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
          <Sparkles size={14} /> CATALOGUE 04 // APPRECIATION LOG
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Little Things Archive
        </h2>
      </div>

      {/* Main Glass Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '22px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
      >
        <p style={{ color: '#D8CCE6', fontSize: '0.86rem', lineHeight: 1.5 }}>
          Grand gestures are fine, but it’s the quiet, specific, idiosyncratic details that make someone truly unforgettable:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
          {DETAILS.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01 }}
              style={{
                padding: '14px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '14px',
                border: '1px solid rgba(224, 195, 252, 0.15)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                  <h4 style={{ color: '#FDFBFF', fontSize: '0.9rem', fontWeight: 700 }}>
                    {item.title}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      background: 'rgba(255, 183, 197, 0.15)',
                      color: '#FFB7C5',
                      padding: '2px 8px',
                      borderRadius: '999px',
                      fontWeight: 600,
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <p style={{ color: '#BDB0C9', fontSize: '0.8rem', lineHeight: 1.45 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
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
        <span>Open Inside-Joke Pinboard</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
