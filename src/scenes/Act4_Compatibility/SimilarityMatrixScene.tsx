import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Grid, ArrowRight, Check, Code, Cat, Coffee, Music, Target } from 'lucide-react';

export const SimilarityMatrixScene: React.FC = () => {
  const { nextScene } = usePresentation();

  const ROWS = [
    {
      dimension: 'Feline Affinity',
      icon: <Cat size={16} color="#FFB7C5" />,
      candidateA: 'Cat whisperer & Billi-Bot architect',
      candidateB: 'Supreme cat lover & crochet ear stylist',
      verdict: 'Cosmic Match',
    },
    {
      dimension: 'Tech & Hackathons',
      icon: <Code size={16} color="#00F0FF" />,
      candidateA: 'Fullstack overthinker',
      candidateB: 'Visionary builder & problem solver',
      verdict: 'High Synergy',
    },
    {
      dimension: 'Tea / Chai Rituals',
      icon: <Coffee size={16} color="#FFD3B6" />,
      candidateA: 'Needs cutting chai to function',
      candidateB: 'Appreciates late-night tea debriefs',
      verdict: 'Essential Bond',
    },
    {
      dimension: 'Career Ambitions',
      icon: <Target size={16} color="#38E09A" />,
      candidateA: 'Dedicated to craftsmanship & growth',
      candidateB: 'Driven, smart, independent & ambitious',
      verdict: 'Mutual Hype',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#00F0FF',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Grid size={14} /> CROSS-EXAMINATION // MATRIX 04
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Similarity Matrix
        </h2>
      </div>

      {/* Main Glass Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '20px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
      >
        <p style={{ color: '#D8CCE6', fontSize: '0.84rem', lineHeight: 1.5 }}>
          Comparing key behavioural variables across both candidate profiles:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {ROWS.map((r, i) => (
            <div
              key={i}
              style={{
                padding: '12px 14px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(224, 195, 252, 0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FDFBFF', fontWeight: 700, fontSize: '0.88rem' }}>
                  {r.icon}
                  <span>{r.dimension}</span>
                </div>
                <span
                  style={{
                    fontSize: '0.68rem',
                    background: 'rgba(56, 224, 154, 0.15)',
                    color: '#38E09A',
                    padding: '2px 8px',
                    borderRadius: '999px',
                    fontWeight: 700,
                  }}
                >
                  {r.verdict}
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '8px',
                  fontSize: '0.76rem',
                  lineHeight: 1.4,
                }}
              >
                <div style={{ background: 'rgba(0,0,0,0.25)', padding: '8px 10px', borderRadius: '8px' }}>
                  <span style={{ color: '#847693', display: 'block', fontSize: '0.68rem' }}>CANDIDATE A:</span>
                  <span style={{ color: '#BDB0C9' }}>{r.candidateA}</span>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.25)', padding: '8px 10px', borderRadius: '8px' }}>
                  <span style={{ color: '#FFB7C5', display: 'block', fontSize: '0.68rem' }}>बाळ (CANDIDATE B):</span>
                  <span style={{ color: '#FDFBFF' }}>{r.candidateB}</span>
                </div>
              </div>
            </div>
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
          background: 'linear-gradient(135deg, #00F0FF, #E0C3FC)',
          border: 'none',
          color: '#120E17',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(0, 240, 255, 0.35)',
        }}
      >
        <span>Proceed to Red-Team Review</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
