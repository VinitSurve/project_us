import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { BarChart3, ArrowRight, TrendingUp, Infinity as InfIcon, Cpu, AlertCircle } from 'lucide-react';

export const StatisticalEvidenceScene: React.FC = () => {
  const { nextScene } = usePresentation();

  const CHARTS = [
    {
      title: 'Shared Feline Obsession',
      value: '99.8%',
      width: '99.8%',
      color: '#FFB7C5',
      note: 'Empirically proven by mutual reaction times to cat reels.',
    },
    {
      title: 'Potential for Extended Yapping',
      value: '∞ (Infinite)',
      width: '100%',
      color: '#00F0FF',
      note: 'Zero danger of running out of random topics to debate.',
    },
    {
      title: 'Probability of "One More Topic" on Rides',
      value: '99.9%',
      width: '99.9%',
      color: '#FFE600',
      note: 'Scooter rides systematically double in duration.',
    },
    {
      title: 'Overthinking Compute Power Expended',
      value: '4.2 M TFLOPS',
      width: '94%',
      color: '#FF2A85',
      note: 'Neural energy spent building this website instead of sending 1 text.',
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
            color: '#FFE600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <BarChart3 size={14} /> EMPIRICAL DATA // COMEDIC METRICS
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Statistical Evidence
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#847693', fontFamily: 'var(--font-mono)' }}>
          <AlertCircle size={13} color="#FFE600" />
          <span>DISCLAIMER: All metrics are 100% comedic &amp; affectionate.</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {CHARTS.map((c, i) => (
            <div
              key={i}
              style={{
                padding: '12px 14px',
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FDFBFF' }}>
                  {c.title}
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: c.color, fontFamily: 'var(--font-mono)' }}>
                  {c.value}
                </span>
              </div>
              <div style={{ width: '100%', height: '7px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: c.width }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  style={{ height: '100%', background: c.color }}
                />
              </div>
              <span style={{ fontSize: '0.72rem', color: '#BDB0C9' }}>
                {c.note}
              </span>
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
          background: 'linear-gradient(135deg, #FFE600, #FFB7C5)',
          border: 'none',
          color: '#1E1624',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(255, 230, 0, 0.35)',
        }}
      >
        <span>Compare The Similarity Matrix</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
