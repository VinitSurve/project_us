import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Terminal, Shield, Zap } from 'lucide-react';

export const CandidateAScene: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '20px',
        padding: '10px 0',
      }}
    >
      <div>
        <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Candidate A: The Developer
        </h2>
        <p style={{ color: '#E0C3FC', fontSize: '0.86rem', marginTop: '4px', fontWeight: 600 }}>
          Character dossier:
        </p>
      </div>

      {/* Retro Character Stat Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        style={{
          width: '100%',
          maxWidth: '360px',
          background: 'linear-gradient(145deg, #1A1324, #120D1A)',
          border: '1px solid rgba(224, 195, 252, 0.3)',
          borderRadius: '24px',
          padding: '24px 20px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
          <span style={{ fontSize: '2.5rem' }}>👨‍💻</span>
          <div>
            <div style={{ color: '#FDFBFF', fontSize: '1rem', fontWeight: 800 }}>The Software Engineer</div>
            <div style={{ color: '#847693', fontSize: '0.74rem', fontFamily: 'var(--font-mono)' }}>CLASS: OVERTHINKER LVL 99</div>
          </div>
        </div>

        <div style={{ fontSize: '0.82rem', color: '#D8CCE6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div>
            <strong style={{ color: '#38E09A' }}>⚡ Superpower:</strong> Infinite listening stamina for any yapping session.
          </div>
          <div>
            <strong style={{ color: '#FFA834' }}>⚠️ Glitch:</strong> Will build an entire website instead of texting &ldquo;Hey, want to get tea?&rdquo;
          </div>
          <div>
            <strong style={{ color: '#00F0FF' }}>☕ Fuel:</strong> 3 cups of cutting chai per day.
          </div>
        </div>
      </motion.div>
    </div>
  );
};
