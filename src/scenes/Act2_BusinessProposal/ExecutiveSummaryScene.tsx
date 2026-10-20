import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Briefcase, ArrowRight, TrendingUp, CheckCircle, Lightbulb } from 'lucide-react';

export const ExecutiveSummaryScene: React.FC = () => {
  const { nextScene } = usePresentation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
          <Briefcase size={14} /> SECTION 1.0 // EXECUTIVE DISPATCH
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Executive Summary
        </h2>
      </div>

      {/* Main Corporate Memo */}
      <div
        className="glass-panel"
        style={{
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#FFB7C5',
            fontWeight: 700,
            fontSize: '0.88rem',
          }}
        >
          <Lightbulb size={18} />
          <span>OBJECTIVE OF THIS TENDER</span>
        </div>

        <p style={{ color: '#E8D7FF', fontSize: '0.94rem', lineHeight: 1.6 }}>
          This document serves as a formal, low-pressure proposition to investigate whether an established, deeply cherished friendship marked by rare resonance could naturally evolve into a romantic partnership.
        </p>

        {/* Strategic Takeaways Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '10px',
            marginTop: '4px',
          }}
        >
          <div
            style={{
              padding: '12px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(224, 195, 252, 0.15)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
            }}
          >
            <CheckCircle size={18} color="#38E09A" style={{ marginTop: '2px', flexShrink: 0 }} />
            <div>
              <strong style={{ color: '#FDFBFF', fontSize: '0.85rem' }}>Rare Emotional Resonance:</strong>
              <p style={{ color: '#BDB0C9', fontSize: '0.8rem', marginTop: '2px' }}>
                Conversations never feel transactional or forced; shared laughter flows effortlessly.
              </p>
            </div>
          </div>

          <div
            style={{
              padding: '12px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(224, 195, 252, 0.15)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
            }}
          >
            <CheckCircle size={18} color="#38E09A" style={{ marginTop: '2px', flexShrink: 0 }} />
            <div>
              <strong style={{ color: '#FDFBFF', fontSize: '0.85rem' }}>Calculated Synergy:</strong>
              <p style={{ color: '#BDB0C9', fontSize: '0.8rem', marginTop: '2px' }}>
                Complementary ambitions, mutual respect for space, and matching feline standards.
              </p>
            </div>
          </div>

          <div
            style={{
              padding: '12px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(224, 195, 252, 0.15)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
            }}
          >
            <TrendingUp size={18} color="#00F0FF" style={{ marginTop: '2px', flexShrink: 0 }} />
            <div>
              <strong style={{ color: '#FDFBFF', fontSize: '0.85rem' }}>Strategic Conclusion:</strong>
              <p style={{ color: '#BDB0C9', fontSize: '0.8rem', marginTop: '2px' }}>
                It would be a tragedy of cosmic proportions not to at least explore where this could go.
              </p>
            </div>
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
          background: 'linear-gradient(135deg, #E0C3FC, #FFB7C5)',
          border: 'none',
          color: '#1E1624',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(224, 195, 252, 0.35)',
        }}
      >
        <span>Examine Problem Statement</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
