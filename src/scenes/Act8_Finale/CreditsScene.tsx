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
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center', textAlign: 'center' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#E0C3FC',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Film size={13} /> PRODUCTION CREDITS // THE ROSTER
        </div>
        <h2 style={{ fontSize: 'clamp(1.3rem, 4.5vw, 1.85rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Executive Credits
        </h2>
      </div>

      {/* Main Glass Panel */}
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '480px',
          padding: '18px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFB7C5', fontSize: '0.75rem', fontWeight: 700 }}>
          <Sparkles size={13} /> A BESPOKE CREATIVE STUDIO PRODUCTION
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
          {CREDITS.map((c, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '8px' }}>
              <div
                style={{
                  fontSize: '0.64rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#847693',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {c.role}
              </div>
              <div
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  color: c.name.includes('बाळ') ? '#FF2A85' : '#FDFBFF',
                  marginTop: '1px',
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
            marginTop: '4px',
            padding: '10px 14px',
            borderRadius: '10px',
            background: 'rgba(255, 42, 133, 0.1)',
            border: '1px solid rgba(255, 42, 133, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#FFB7C5',
            fontSize: '0.78rem',
            fontWeight: 700,
          }}
        >
          <Heart size={14} fill="#FF2A85" color="#FF2A85" />
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
          maxWidth: '480px',
          padding: '13px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #FFB7C5, #E0C3FC)',
          border: 'none',
          color: '#1E1624',
          fontWeight: 800,
          fontSize: '0.88rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 18px rgba(255, 183, 197, 0.3)',
        }}
      >
        <span>Wait... Post-Credits Scene? 🎬</span>
        <ArrowRight size={16} />
      </motion.button>
    </div>
  );
};
