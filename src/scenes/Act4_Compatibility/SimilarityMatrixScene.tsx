import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Check } from 'lucide-react';

export const SimilarityMatrixScene: React.FC = () => {
  const ROWS = [
    { label: 'Feline Affinity', value: 'Mutual Obsession' },
    { label: 'Hackathons & Tech', value: 'High Synergy' },
    { label: 'Tea / Chai Rituals', value: 'Non-Negotiable Fuel' },
    { label: 'Career Ambitions', value: '100% Mutual Hype' },
  ];

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
          The Similarity Matrix
        </h2>
        <p style={{ color: '#00F0FF', fontSize: '0.86rem', marginTop: '4px', fontWeight: 600 }}>
          Direct cross-examination:
        </p>
      </div>

      {/* Clean Comparison Card */}
      <div
        style={{
          width: '100%',
          maxWidth: '380px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          borderRadius: '20px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {ROWS.map((r, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: i < ROWS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              paddingBottom: i < ROWS.length - 1 ? '10px' : '0',
            }}
          >
            <span style={{ fontSize: '0.86rem', color: '#D8CCE6', fontWeight: 600 }}>{r.label}</span>
            <span
              style={{
                fontSize: '0.78rem',
                color: '#38E09A',
                background: 'rgba(56, 224, 154, 0.12)',
                padding: '4px 10px',
                borderRadius: '999px',
                fontWeight: 700,
              }}
            >
              {r.value}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          fontSize: '0.82rem',
          color: '#00F0FF',
          fontWeight: 800,
          fontFamily: 'var(--font-mono)',
        }}
      >
        SYNCHRONICITY INDEX: UNUSUALLY HIGH ✨
      </div>
    </div>
  );
};
