import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Film, ArrowRight, Sparkles, Heart } from 'lucide-react';

export const CreditsScene: React.FC = () => {
  const { nextScene } = usePresentation();

  const CREDITS = [
    { role: 'CHIEF OVERTHINKING ARCHITECT', name: 'Candidate A (The Developer)' },
    { role: 'PRIMARY INSPIRATION & MAIN CHARACTER', name: 'बाळ (September 4 Royalty)' },
    { role: 'EXECUTIVE FELINE CONSULTANT', name: 'Billi-Bot & The Local Street Cats' },
    { role: 'HEAD OF QUESTIONABLE ASTROLOGY', name: 'Dr. Meowstein, Ph.D. in 34/36 Gunas' },
    { role: 'OFFICIAL FUEL SPONSOR', name: 'Late-Night Cutting Chai & Roadside Dhabas' },
    { role: 'AUDIO SYNTHESIS DEPARTMENT', name: 'Pure Web Audio API (Zero Broken MP3s)' },
    { role: 'LINES OF OVERENGINEERED CODE', name: '3,842 lines crafted with love' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#E0C3FC',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Film size={14} /> PRODUCTION CREDITS // THE ROSTER
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Executive Credits
        </h2>
      </div>

      {/* Main Glass Panel with rolling credits aesthetic */}
      <div
        className="glass-panel"
        style={{
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          maxHeight: '380px',
          overflowY: 'auto',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFB7C5', fontSize: '0.82rem', fontWeight: 700 }}>
          <Sparkles size={14} /> A BESPOKE CREATIVE STUDIO PRODUCTION
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%', padding: '10px 0' }}>
          {CREDITS.map((c, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>
              <div
                style={{
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#847693',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '2px',
                }}
              >
                {c.role}
              </div>
              <div
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  color: c.name.includes('बाळ') ? '#FF2A85' : '#FDFBFF',
                }}
              >
                {c.name}
              </div>
            </div>
          ))}
        </div>

        {/* Dedication Banner */}
        <div
          style={{
            marginTop: '8px',
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'rgba(255, 42, 133, 0.1)',
            border: '1px solid rgba(255, 42, 133, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#FFB7C5',
            fontSize: '0.82rem',
            fontWeight: 700,
          }}
        >
          <Heart size={16} fill="#FF2A85" color="#FF2A85" />
          <span>Dedicated with sincere respect and affection to बाळ.</span>
        </div>
      </div>

      {/* Button to post-credits */}
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
        <span>Wait... Post-Credits Scene? 🎬</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
