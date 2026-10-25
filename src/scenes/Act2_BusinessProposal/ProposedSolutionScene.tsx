import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Ticket, Sparkles, Coffee } from 'lucide-react';

export const ProposedSolutionScene: React.FC = () => {
  const [punched, setPunched] = useState(false);

  const handlePunch = () => {
    soundManager.playBell();
    setPunched(true);
  };

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
          The Proposed Solution
        </h2>
        <p style={{ color: '#00F0FF', fontSize: '0.86rem', marginTop: '4px', fontWeight: 600 }}>
          Phase One: The Low-Pressure Pilot Program
        </p>
      </div>

      {/* The Physical Date Boarding Pass */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handlePunch}
        style={{
          width: '100%',
          maxWidth: '380px',
          background: 'linear-gradient(135deg, #1F1728, #140F1B)',
          border: '2px solid rgba(255, 183, 197, 0.4)',
          borderRadius: '20px',
          padding: '24px 20px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
          position: 'relative',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {/* Ticket Perforations on sides */}
        <div style={{ position: 'absolute', top: '50%', left: '-12px', width: '22px', height: '22px', borderRadius: '50%', background: '#120E17' }} />
        <div style={{ position: 'absolute', top: '50%', right: '-12px', width: '22px', height: '22px', borderRadius: '50%', background: '#120E17' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed rgba(255,255,255,0.15)', paddingBottom: '12px', marginBottom: '14px' }}>
          <span style={{ fontSize: '0.72rem', color: '#FFB7C5', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
            BOARDING PASS // PHASE 1
          </span>
          <span style={{ fontSize: '0.68rem', color: '#38E09A', background: 'rgba(56, 224, 154, 0.15)', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
            RISK: 0.0%
          </span>
        </div>

        <div style={{ marginBottom: '14px' }}>
          <div style={{ fontSize: '0.7rem', color: '#847693', fontFamily: 'var(--font-mono)' }}>PASSENGER:</div>
          <div className="font-marathi" style={{ fontSize: '1.25rem', color: '#FFB7C5', fontWeight: 800 }}>बाळ</div>
        </div>

        <div style={{ marginBottom: '14px' }}>
          <div style={{ fontSize: '0.7rem', color: '#847693', fontFamily: 'var(--font-mono)' }}>MISSION:</div>
          <div style={{ fontSize: '0.96rem', color: '#FDFBFF', fontWeight: 700 }}>One Proper Date ☕✨</div>
        </div>

        <div style={{ fontSize: '0.78rem', color: '#BDB0C9', lineHeight: 1.45 }}>
          Includes scenic breeze, great tea, honest talking, and zero awkward expectations.
        </div>

        {/* Punch status */}
        <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px dashed rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.72rem', color: punched ? '#38E09A' : '#847693', fontWeight: 700 }}>
            {punched ? '🎟️ TICKET VALIDATED!' : 'Tap ticket to validate 🎟️'}
          </span>
          <span style={{ fontSize: '0.75rem' }}>🐾</span>
        </div>
      </motion.div>
    </div>
  );
};
