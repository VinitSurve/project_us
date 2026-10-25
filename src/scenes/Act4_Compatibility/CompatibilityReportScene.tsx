import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Microscope, Activity } from 'lucide-react';

export const CompatibilityReportScene: React.FC = () => {
  const METRICS = [
    { label: 'Humor & Brainrot Alignment', score: '99.9%', color: '#FF2A85' },
    { label: 'Comfortable Silence Index', score: '100%', color: '#38E09A' },
    { label: 'Mutual Feline Reverence', score: 'MAXED OUT', color: '#00F0FF' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '24px',
        padding: '10px 0',
      }}
    >
      <div>
        <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Compatibility Diagnostics
        </h2>
        <p style={{ color: '#00F0FF', fontSize: '0.86rem', marginTop: '4px', fontWeight: 600 }}>
          Peer-reviewed by Senior Feline Fellow Dr. Whiskers
        </p>
      </div>

      {/* Futuristic Radar Diagnostic Display */}
      <div
        style={{
          width: '100%',
          maxWidth: '380px',
          background: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          borderRadius: '24px',
          padding: '24px 20px',
          boxShadow: '0 0 35px rgba(0, 240, 255, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        {METRICS.map((m, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <span style={{ fontSize: '0.86rem', color: '#D8CCE6', textAlign: 'left', fontWeight: 600 }}>
              {m.label}
            </span>
            <span style={{ fontSize: '0.92rem', color: m.color, fontWeight: 900, fontFamily: 'var(--font-mono)' }}>
              {m.score}
            </span>
          </div>
        ))}
      </div>

      <div style={{ fontSize: '0.78rem', color: '#847693', fontFamily: 'var(--font-mono)' }}>
        DIAGNOSTIC VERDICT: ZERO RED FLAGS DETECTED
      </div>
    </div>
  );
};
