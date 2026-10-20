import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Users2, ArrowRight, Sparkles, Plus, Check } from 'lucide-react';

export const ProposedDuoScene: React.FC = () => {
  const { nextScene } = usePresentation();

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
          <Users2 size={14} /> SYNERGY ANALYSIS // DUO ASSESSMENT
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Proposed Duo
        </h2>
      </div>

      {/* Main Glass Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {/* Visual Pair Equation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            padding: '14px',
            background: 'rgba(0,0,0,0.25)',
            borderRadius: '16px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem' }}>👨‍💻</div>
            <div style={{ fontSize: '0.75rem', color: '#BDB0C9', fontWeight: 700, marginTop: '2px' }}>
              Candidate A
            </div>
          </div>

          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(255, 183, 197, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFB7C5',
              fontWeight: 800,
            }}
          >
            <Plus size={18} />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem' }}>✨</div>
            <div
              className="font-marathi"
              style={{ fontSize: '0.9rem', color: '#FFB7C5', fontWeight: 800, marginTop: '2px' }}
            >
              बाळ
            </div>
          </div>
        </div>

        <p style={{ color: '#E8D7FF', fontSize: '0.9rem', lineHeight: 1.55, textAlign: 'center' }}>
          Not two halves trying to complete each other, but two whole, independent individuals who happen to have exceptional conversational flow, mutual humor, and a shared passion for cats.
        </p>

        {/* Synergy Bullets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div
            style={{
              padding: '10px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Check size={16} color="#38E09A" />
            <span style={{ fontSize: '0.82rem', color: '#FDFBFF' }}>
              <strong>Complementary Balance:</strong> Thoughtful listener + vibrant conversationalist.
            </span>
          </div>

          <div
            style={{
              padding: '10px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Check size={16} color="#38E09A" />
            <span style={{ fontSize: '0.82rem', color: '#FDFBFF' }}>
              <strong>Zero Pretense:</strong> Comfort to yap or sit in peaceful silence without awkwardness.
            </span>
          </div>

          <div
            style={{
              padding: '10px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Check size={16} color="#38E09A" />
            <span style={{ fontSize: '0.82rem', color: '#FDFBFF' }}>
              <strong>Shared Curiosity:</strong> Exploring new places, discussing ideas, and building fun lore.
            </span>
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
        <span>Review Partnership Value Proposition</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
