import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { FileCheck, ShieldCheck, HeartHandshake, ArrowRight, Check } from 'lucide-react';

export const TermsConditionsScene: React.FC = () => {
  const { nextScene } = usePresentation();

  const CLAUSES = [
    {
      code: 'ARTICLE 1.0',
      title: 'The Right to Decline is Sovereign',
      text: 'You hold absolute veto power. If your answer is "no" or "let\'s stay friends", that decision will be met with 100% warmth, gratitude, and zero awkwardness.',
    },
    {
      code: 'ARTICLE 2.0',
      title: 'Mutual Communication Parity',
      text: 'No guessing games or passive-aggressive silence. If something is bothering either person, we speak plainly, kindly, and with immediate empathy.',
    },
    {
      code: 'ARTICLE 3.0',
      title: 'Equal Agency & Initiation',
      text: 'Both individuals possess equal say in date destinations, music choices during rides, and late-night food decisions. No single person bears all responsibility.',
    },
    {
      code: 'ARTICLE 4.0',
      title: 'Unconditional Friendship Guarantee',
      text: 'Whatever happens with this proposal, our foundational respect and connection remain intact. You will never lose a supporter in your corner.',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#38E09A',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <FileCheck size={14} /> SECTION 5.0 // CORE COVENANTS
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Terms & Conditions
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#38E09A',
            fontSize: '0.82rem',
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
          }}
        >
          <ShieldCheck size={16} /> GUARANTEED EMOTIONAL SAFETY CLAUSES
        </div>

        {CLAUSES.map((c, i) => (
          <div
            key={i}
            style={{
              padding: '12px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(56, 224, 154, 0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.72rem', color: '#38E09A', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                {c.code}
              </span>
              <Check size={14} color="#38E09A" />
            </div>
            <h4 style={{ color: '#FDFBFF', fontSize: '0.88rem', fontWeight: 700, marginBottom: '3px' }}>
              {c.title}
            </h4>
            <p style={{ color: '#BDB0C9', fontSize: '0.78rem', lineHeight: 1.5 }}>
              {c.text}
            </p>
          </div>
        ))}
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
          background: 'linear-gradient(135deg, #38E09A, #E0C3FC)',
          border: 'none',
          color: '#120E17',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(56, 224, 154, 0.35)',
        }}
      >
        <span>Enter The Archives Department</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
