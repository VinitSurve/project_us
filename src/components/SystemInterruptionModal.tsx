import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../context/PresentationContext';
import { AlertTriangle, ShieldAlert, Cat, Terminal } from 'lucide-react';

export const SystemInterruptionModal: React.FC = () => {
  const { activeInterruption, dismissInterruption } = usePresentation();

  if (!activeInterruption) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 110,
          background: 'rgba(10, 5, 15, 0.82)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <motion.div
          initial={{ scale: 0.8, rotate: -2, y: 20 }}
          animate={{ scale: 1, rotate: 0, y: 0 }}
          exit={{ scale: 0.8, rotate: 2, y: 20 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          style={{
            width: '100%',
            maxWidth: '420px',
            background: '#1F162B',
            border: '2px solid #FF4757',
            borderRadius: '20px',
            boxShadow: '0 0 40px rgba(255, 71, 87, 0.4), 0 20px 40px rgba(0,0,0,0.8)',
            overflow: 'hidden',
          }}
        >
          {/* Top Bar Alert */}
          <div
            style={{
              background: '#FF4757',
              color: '#FFF',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontWeight: 800,
              fontSize: '0.8rem',
              letterSpacing: '0.06em',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldAlert size={18} />
              <span>SYSTEM ADVISORY // {activeInterruption.code}</span>
            </div>
            <span style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem' }}>
              LVL: CAT-ASTROPHIC
            </span>
          </div>

          {/* Body */}
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(255, 71, 87, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF4757',
                }}
              >
                {activeInterruption.severity === 'feline' ? <Cat size={24} /> : <AlertTriangle size={24} />}
              </div>
              <div>
                <h4 style={{ color: '#FDFBFF', fontSize: '1rem', fontWeight: 800, lineHeight: 1.2 }}>
                  {activeInterruption.title}
                </h4>
                <span style={{ fontSize: '0.72rem', color: '#FFB7C5', fontFamily: 'var(--font-mono)' }}>
                  Diagnostics: 100% Sincere Overthinking
                </span>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '12px 14px',
                marginBottom: '18px',
                color: '#E0C3FC',
                fontSize: '0.85rem',
                lineHeight: 1.45,
                fontFamily: 'var(--font-mono)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#847693', fontSize: '0.7rem', marginBottom: '6px' }}>
                <Terminal size={12} /> diagnostic_log_dump.sh
              </div>
              {activeInterruption.message}
            </div>

            <button
              onClick={dismissInterruption}
              style={{
                width: '100%',
                padding: '12px 18px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #FF4757, #FF2A85)',
                border: 'none',
                color: '#FFF',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(255, 71, 87, 0.4)',
                transition: 'transform 0.15s ease',
              }}
            >
              {activeInterruption.actionLabel}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
