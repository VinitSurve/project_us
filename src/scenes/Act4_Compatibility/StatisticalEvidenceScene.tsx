import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';

export const StatisticalEvidenceScene: React.FC = () => {
  const STATS = [
    {
      num: '99.9%',
      label: 'Probability of "One More Topic"',
      desc: 'Scooter rides systematically double in duration.',
      color: '#FFE600',
    },
    {
      num: '∞',
      label: 'Yap Bandwidth Capacity',
      desc: 'Zero risk of ever running out of things to talk about.',
      color: '#00F0FF',
    },
    {
      num: '4.2M TFLOPS',
      label: 'Overthinking Compute Power',
      desc: 'Expended building 32 web scenes instead of sending 1 text.',
      color: '#FF2A85',
    },
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
          Statistical Evidence
        </h2>
        <p style={{ color: '#FFE600', fontSize: '0.86rem', marginTop: '4px', fontWeight: 600 }}>
          Empirically observed comedic metrics:
        </p>
      </div>

      {/* 3 Bold Numeric Stat Blocks */}
      <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            style={{
              padding: '14px 18px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textAlign: 'left',
            }}
          >
            <div>
              <div style={{ color: '#FDFBFF', fontSize: '0.88rem', fontWeight: 700 }}>{s.label}</div>
              <div style={{ color: '#847693', fontSize: '0.74rem', marginTop: '2px' }}>{s.desc}</div>
            </div>
            <div
              style={{
                fontSize: '1.4rem',
                fontWeight: 900,
                color: s.color,
                fontFamily: 'var(--font-mono)',
                marginLeft: '12px',
                flexShrink: 0,
              }}
            >
              {s.num}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
