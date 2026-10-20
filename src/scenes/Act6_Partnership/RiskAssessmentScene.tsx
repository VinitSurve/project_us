import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { AlertOctagon, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const RiskAssessmentScene: React.FC = () => {
  const { nextScene } = usePresentation();

  const RISKS = [
    {
      risk: 'Chronic Overthinking Incidents',
      severity: 'HIGH',
      color: '#FF4757',
      mitigation: 'Simply ask directly: "Hey, are you overthinking?" which resets his internal processor immediately.',
    },
    {
      risk: 'Excessive Yapping Fatigue',
      severity: 'MEDIUM',
      color: '#FFA834',
      mitigation: 'Serve warm chai and provide a 10-minute quiet listening window.',
    },
    {
      risk: 'Inordinate Cat Picture Traffic',
      severity: 'MAXIMUM',
      color: '#FF2A85',
      mitigation: 'No mitigation planned. Full acceptance of feline dominance in chat feeds.',
    },
    {
      risk: 'Awkwardness on Date 01',
      severity: 'LOW',
      color: '#38E09A',
      mitigation: 'Acknowledge the awkwardness openly, laugh together, and immediately order good food.',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#FF4757',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <AlertOctagon size={14} /> AUDIT COMPLIANCE // FORMAL RISK REGISTER
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Risk Assessment &amp; Mitigations
        </h2>
      </div>

      {/* Main Glass Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '22px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
      >
        <p style={{ color: '#D8CCE6', fontSize: '0.86rem', lineHeight: 1.5 }}>
          Identified operational hazards with corresponding contingency mitigation protocols:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {RISKS.map((r, idx) => (
            <div
              key={idx}
              style={{
                padding: '12px 14px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#FDFBFF' }}>
                  {r.risk}
                </span>
                <span
                  style={{
                    fontSize: '0.66rem',
                    background: `${r.color}22`,
                    color: r.color,
                    padding: '2px 8px',
                    borderRadius: '999px',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {r.severity}
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#BDB0C9', lineHeight: 1.45, marginTop: '2px' }}>
                <strong style={{ color: '#38E09A' }}>Mitigation: </strong>
                {r.mitigation}
              </div>
            </div>
          ))}
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
          background: 'linear-gradient(135deg, #FF4757, #FFB7C5)',
          border: 'none',
          color: '#FFF',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(255, 71, 87, 0.35)',
        }}
      >
        <span>Enter Feline Brainrot Hub</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
