import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Microscope, ArrowRight, Activity, Zap, CheckCircle2 } from 'lucide-react';

export const CompatibilityReportScene: React.FC = () => {
  const { nextScene } = usePresentation();

  const METRICS = [
    { label: 'Humor & Brainrot Alignment', score: '99.4%', status: 'Dangerously High', color: '#FF2A85' },
    { label: 'Yapping / Listening Equilibrium', score: '100%', status: 'Self-Sustaining Loop', color: '#00F0FF' },
    { label: 'Feline Reverence Co-efficient', score: '99.9%', status: 'Royal Standard', color: '#FFE600' },
    { label: 'Comfortable Silence Index', score: '98.5%', status: 'Zero Social Battery Drain', color: '#38E09A' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#00F0FF',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Microscope size={14} /> LAB REPORT // REF: CAT-COMPAT-99
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Compatibility Report
        </h2>
      </div>

      {/* Main Glass Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span
            style={{
              background: 'rgba(0, 240, 255, 0.15)',
              color: '#00F0FF',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 700,
            }}
          >
            PEER-REVIEWED BY CATS
          </span>
          <span style={{ fontSize: '0.72rem', color: '#847693', fontFamily: 'var(--font-mono)' }}>
            CONFIDENCE: 99.8%
          </span>
        </div>

        <p style={{ color: '#E8D7FF', fontSize: '0.9rem', lineHeight: 1.55 }}>
          Our empirical laboratory tests reveal unprecedented diagnostic synergy across cognitive, emotional, and meme-sharing dimensions:
        </p>

        {/* Metrics List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {METRICS.map((m, idx) => (
            <div
              key={idx}
              style={{
                padding: '12px 14px',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#FDFBFF', fontSize: '0.84rem', fontWeight: 600 }}>
                  {m.label}
                </span>
                <span style={{ color: m.color, fontWeight: 800, fontFamily: 'var(--font-mono)', fontSize: '0.92rem' }}>
                  {m.score}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ width: '70%', height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: m.score, height: '100%', background: m.color }} />
                </div>
                <span style={{ fontSize: '0.68rem', color: '#847693', fontFamily: 'var(--font-mono)' }}>
                  {m.status}
                </span>
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
          background: 'linear-gradient(135deg, #00F0FF, #E0C3FC)',
          border: 'none',
          color: '#120E17',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(0, 240, 255, 0.35)',
        }}
      >
        <span>Examine The 34/36 Guna Incident</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
