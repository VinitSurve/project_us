import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Compass, Coffee, MessageSquareHeart, Check, ArrowRight, Sparkles } from 'lucide-react';

export const ProposedSolutionScene: React.FC = () => {
  const { nextScene } = usePresentation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
          <Compass size={14} /> SECTION 3.0 // LOW-RISK ROADMAP
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Proposed Solution
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '12px',
          }}
        >
          <span
            style={{
              background: 'rgba(0, 240, 255, 0.15)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              color: '#00F0FF',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 700,
            }}
          >
            PILOT INITIATIVE
          </span>
          <span style={{ fontSize: '0.75rem', color: '#847693', fontFamily: 'var(--font-mono)' }}>
            RISK FACTOR: ZERO
          </span>
        </div>

        <h3 style={{ fontSize: '1.15rem', color: '#FFB7C5', fontWeight: 700 }}>
          Phase One: The Proper Date Experiment
        </h3>

        <p style={{ color: '#E8D7FF', fontSize: '0.88rem', lineHeight: 1.55 }}>
          Instead of endless ambiguous hanging out or overthinking late into the night, we initiate a simple, relaxed, low-pressure pilot program:
        </p>

        {/* 4-Step Pilot Blueprint */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div
            style={{
              padding: '12px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(224, 195, 252, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
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
                fontSize: '0.85rem',
              }}
            >
              01
            </div>
            <div>
              <div style={{ color: '#FDFBFF', fontSize: '0.85rem', fontWeight: 700 }}>
                Go on an actual, intentional date
              </div>
              <div style={{ color: '#847693', fontSize: '0.76rem' }}>
                Good tea/coffee, scenic vibe, delicious food, no rush.
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '12px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(224, 195, 252, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(224, 195, 252, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E0C3FC',
                fontWeight: 800,
                fontSize: '0.85rem',
              }}
            >
              02
            </div>
            <div>
              <div style={{ color: '#FDFBFF', fontSize: '0.85rem', fontWeight: 700 }}>
                Observe compatibility in the wild
              </div>
              <div style={{ color: '#847693', fontSize: '0.76rem' }}>
                Test humor synergy and see how it feels in romantic mode.
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '12px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(224, 195, 252, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(56, 224, 154, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38E09A',
                fontWeight: 800,
                fontSize: '0.85rem',
              }}
            >
              03
            </div>
            <div>
              <div style={{ color: '#FDFBFF', fontSize: '0.85rem', fontWeight: 700 }}>
                Communicate honestly without pressure
              </div>
              <div style={{ color: '#847693', fontSize: '0.76rem' }}>
                Total emotional safety to share feelings or reservations.
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '12px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(224, 195, 252, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(0, 240, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00F0FF',
                fontWeight: 800,
                fontSize: '0.85rem',
              }}
            >
              04
            </div>
            <div>
              <div style={{ color: '#FDFBFF', fontSize: '0.85rem', fontWeight: 700 }}>
                Decide what comes next together
              </div>
              <div style={{ color: '#847693', fontSize: '0.76rem' }}>
                Equal votes. Whether we continue or stay great friends.
              </div>
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
        <span>Explore Mission & Vision</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
