import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { User, ArrowRight, Code, Heart, Sparkles, Terminal } from 'lucide-react';

export const CandidateAScene: React.FC = () => {
  const { nextScene } = usePresentation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#E0C3FC',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <User size={14} /> DOSSIER 01 // THE PROPOSER
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Candidate A: The Developer
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #E0C3FC, #FFB7C5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              boxShadow: '0 4px 15px rgba(224, 195, 252, 0.4)',
              flexShrink: 0,
            }}
          >
            👨‍💻
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', color: '#FDFBFF', fontWeight: 800 }}>
              The Overthinking Software Engineer
            </h3>
            <span style={{ fontSize: '0.74rem', color: '#BDB0C9', fontFamily: 'var(--font-mono)' }}>
              Known Aliases: The Yap Listener, Chai Connoisseur
            </span>
          </div>
        </div>

        {/* Strengths & Quirks Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
          <div
            style={{
              padding: '10px 12px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <strong style={{ color: '#38E09A', fontSize: '0.8rem', display: 'block', marginBottom: '2px' }}>
              PRIMARY STRENGTHS:
            </strong>
            <p style={{ color: '#D8CCE6', fontSize: '0.78rem', lineHeight: 1.45 }}>
              Deep listener who remembers tiny details. Always ready for a spontaneous chai ride. Will spend hours debugging code to build you a virtual cat.
            </p>
          </div>

          <div
            style={{
              padding: '10px 12px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <strong style={{ color: '#FFA834', fontSize: '0.8rem', display: 'block', marginBottom: '2px' }}>
              DOCUMENTED BUGS / GLITCHES:
            </strong>
            <p style={{ color: '#D8CCE6', fontSize: '0.78rem', lineHeight: 1.45 }}>
              Overthinks simple social interactions. Will write a 32-scene full-stack presentation instead of just sending: &ldquo;Hey, are you free Friday?&rdquo;
            </p>
          </div>

          <div
            style={{
              padding: '10px 12px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <strong style={{ color: '#FFB7C5', fontSize: '0.8rem', display: 'block', marginBottom: '2px' }}>
              SYSTEM SPECIFICATIONS:
            </strong>
            <p style={{ color: '#D8CCE6', fontSize: '0.78rem', lineHeight: 1.45 }}>
              Cat affinity: 10/10 • Chai consumption: 3 cups/day • Dedication to making you smile: 100%.
            </p>
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
          background: 'linear-gradient(135deg, #FFB7C5, #FF2A85)',
          border: 'none',
          color: '#FFF',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(255, 42, 133, 0.35)',
        }}
      >
        <span>Meet Candidate B: बाळ</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
