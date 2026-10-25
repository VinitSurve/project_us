import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { AlertTriangle } from 'lucide-react';

export const RiskAssessmentScene: React.FC = () => {
  const RISKS = [
    {
      hazard: 'Chronic Overthinking',
      severity: 'HIGH',
      color: '#FF4757',
      mitigation: 'Simply ask directly: "Are you overthinking?" which resets his internal processor.',
    },
    {
      hazard: 'Cat Meme Inundation',
      severity: 'CRITICAL',
      color: '#FF2A85',
      mitigation: 'Zero mitigation planned. Acceptance of feline chat feeds is required.',
    },
    {
      hazard: 'Awkwardness on Date 01',
      severity: 'MILD',
      color: '#38E09A',
      mitigation: 'Acknowledge it openly, laugh together, and immediately order delicious food.',
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
          Risk Assessment
        </h2>
        <p style={{ color: '#FF4757', fontSize: '0.86rem', marginTop: '4px', fontWeight: 600 }}>
          Identified operational hazards &amp; mitigations:
        </p>
      </div>

      {/* 3 Clean Risk Tags */}
      <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {RISKS.map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            style={{
              padding: '14px 16px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: `1px solid ${r.color}44`,
              borderRadius: '16px',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <div style={{ color: '#FDFBFF', fontSize: '0.88rem', fontWeight: 800 }}>{r.hazard}</div>
              <span
                style={{
                  fontSize: '0.66rem',
                  fontFamily: 'var(--font-mono)',
                  color: r.color,
                  background: `${r.color}22`,
                  padding: '2px 8px',
                  borderRadius: '999px',
                  fontWeight: 800,
                }}
              >
                {r.severity}
              </span>
            </div>
            <div style={{ fontSize: '0.76rem', color: '#BDB0C9', lineHeight: 1.4 }}>
              <strong style={{ color: '#38E09A' }}>Mitigation: </strong>
              {r.mitigation}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
