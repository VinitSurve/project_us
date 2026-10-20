import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Flame, Sparkles, ArrowRight, Siren, Cat, AlertTriangle } from 'lucide-react';

export const GunaIncidentScene: React.FC = () => {
  const { nextScene, unlockEasterEgg } = usePresentation();
  const [sirenActive, setSirenActive] = useState(false);

  const triggerSiren = () => {
    soundManager.playTada();
    setSirenActive(true);
    unlockEasterEgg('guna-astronomer');
  };

  const GUNA_BREAKDOWN = [
    { name: 'Varna (Work Synergy)', score: '1 / 1' },
    { name: 'Vashya (Dominance Balance)', score: '2 / 2' },
    { name: 'Tara (Destiny & Health)', score: '3 / 3' },
    { name: 'Yoni (Physical & Emotional)', score: '4 / 4' },
    { name: 'Graha Maitri (Friendship)', score: '5 / 5' },
    { name: 'Gana (Temperament)', score: '6 / 6' },
    { name: 'Bhakoot (Emotional Harmony)', score: '7 / 7' },
    { name: 'Nadi (Genetic/Cosmic)', score: '6 / 8' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#FF2A85',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Siren size={14} /> COSMIC ANOMALY // CODE: 34_OF_36
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The 34/36 Guna Incident
        </h2>
      </div>

      {/* Main Glass Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '22px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          position: 'relative',
          overflow: 'hidden',
          border: sirenActive ? '2px solid #FF2A85' : '1px solid rgba(224, 195, 252, 0.25)',
          boxShadow: sirenActive ? '0 0 40px rgba(255, 42, 133, 0.45)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Siren Alert banner */}
        <AnimatePresence>
          {sirenActive && (
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              style={{
                width: '100%',
                background: '#FF2A85',
                color: '#FFF',
                padding: '6px 12px',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 800,
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <Siren size={16} /> 🚨 COSMIC WARNING: STATISTICALLY ANOMALOUS ASTROLOGY MATCH
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dramatic Score Box */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={triggerSiren}
          style={{
            cursor: 'pointer',
            padding: '16px 28px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(255, 42, 133, 0.25), rgba(0, 240, 255, 0.25))',
            border: '2px solid #FF2A85',
            textAlign: 'center',
            boxShadow: '0 8px 30px rgba(255, 42, 133, 0.3)',
          }}
        >
          <div style={{ fontSize: '0.78rem', color: '#E0C3FC', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
            KUNDALI ASHTAKOOTA SCORE
          </div>
          <div
            style={{
              fontSize: 'clamp(2.8rem, 10vw, 4.2rem)',
              fontWeight: 900,
              color: '#FFF',
              lineHeight: 1,
              marginTop: '4px',
              textShadow: '0 0 20px rgba(255, 42, 133, 0.6)',
            }}
          >
            34 <span style={{ fontSize: '1.8rem', color: '#FFB7C5', fontWeight: 600 }}>/ 36</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#38E09A', fontWeight: 800, marginTop: '4px' }}>
            ✨ 94.4% COSMIC CONCURRENCE ✨
          </div>
          <span style={{ fontSize: '0.68rem', color: '#847693', display: 'block', marginTop: '2px' }}>
            (Tap to sound Dr. Meowstein&apos;s alert)
          </span>
        </motion.div>

        {/* Breakdown Grid */}
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px',
            fontSize: '0.76rem',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {GUNA_BREAKDOWN.map((g, i) => (
            <div
              key={i}
              style={{
                padding: '6px 10px',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                border: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              <span style={{ color: '#BDB0C9' }}>{g.name}:</span>
              <span style={{ color: '#38E09A', fontWeight: 700 }}>{g.score}</span>
            </div>
          ))}
        </div>

        {/* Responsible Scientific Disclaimer */}
        <div
          style={{
            padding: '10px 14px',
            background: 'rgba(255, 230, 0, 0.08)',
            border: '1px solid rgba(255, 230, 0, 0.25)',
            borderRadius: '10px',
            fontSize: '0.78rem',
            color: '#FFE600',
            lineHeight: 1.45,
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
          }}
        >
          <Cat size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>
            <strong>Dr. Meowstein&apos;s Lab Note:</strong> While ancient planetary alignments clearly support this proposal, actual human relationships are sustained by honest talks, mutual respect, and warm tea, not planetary gravitational vectors.
          </span>
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
          background: 'linear-gradient(135deg, #FF2A85, #00F0FF)',
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
        <span>Inspect Absurd Statistics</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
