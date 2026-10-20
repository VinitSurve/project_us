import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Terminal, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { soundManager } from '../../utils/sound';

const BOOT_LOGS = [
  'Initializing unnecessary romantic infrastructure...',
  'Loading 37,000 cat memes into high-speed memory...',
  'Calibrating yapping tolerance to maximum infinity...',
  'Detecting suspicious emotional compatibility... [CRITICAL MATCH]',
  'Recruiting unqualified feline consultant... [Billi-Bot Hired]',
  'Romantic proposal successfully compiled without fatal errors.',
];

export const BootSequenceScene: React.FC = () => {
  const { nextScene } = usePresentation();
  const [completedSteps, setCompletedSteps] = useState<number>(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedSteps((prev) => {
        if (prev < BOOT_LOGS.length) {
          soundManager.playClick();
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsReady(true);
          soundManager.playBell();
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Top Header Tag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span
          style={{
            background: 'rgba(255, 183, 197, 0.15)',
            border: '1px solid rgba(255, 183, 197, 0.4)',
            color: '#FFB7C5',
            padding: '4px 12px',
            borderRadius: '999px',
            fontSize: '0.75rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Cpu size={12} /> KITTEN_KERNEL_v4.2.0
        </span>
        <span style={{ color: '#847693', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
          SECURE_PORT_69420
        </span>
      </div>

      {/* Main Terminal Window */}
      <div
        style={{
          background: '#16101E',
          border: '1px solid rgba(224, 195, 252, 0.25)',
          borderRadius: '18px',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            padding: '10px 16px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }} />
            <span
              style={{
                marginLeft: '8px',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                color: '#BDB0C9',
              }}
            >
              proposal_boot_diagnostic.sh
            </span>
          </div>
          <Terminal size={14} color="#847693" />
        </div>

        {/* Logs */}
        <div
          style={{
            padding: '18px 16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            lineHeight: 1.6,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            minHeight: '220px',
          }}
        >
          {BOOT_LOGS.slice(0, completedSteps).map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                color: index === BOOT_LOGS.length - 1 ? '#38E09A' : '#E0C3FC',
              }}
            >
              <span style={{ color: '#847693', userSelect: 'none' }}>
                [{String((index * 0.32 + 0.12).toFixed(2))}s]
              </span>
              <span>{log}</span>
            </motion.div>
          ))}

          {!isReady && (
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              style={{ color: '#FFB7C5', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <span style={{ color: '#847693' }}>&gt;</span>
              <span>Calibrating cuteness levels...</span>
            </motion.div>
          )}

          {isReady && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                marginTop: '10px',
                padding: '10px 12px',
                background: 'rgba(56, 224, 154, 0.12)',
                border: '1px solid rgba(56, 224, 154, 0.3)',
                borderRadius: '10px',
                color: '#38E09A',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.8rem',
              }}
            >
              <CheckCircle2 size={16} />
              <span>Diagnostic Complete: Zero Red Flags. 100% Wholesome Potential.</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Action to proceed */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={nextScene}
        disabled={!isReady}
        style={{
          width: '100%',
          padding: '16px 20px',
          borderRadius: '16px',
          background: isReady
            ? 'linear-gradient(135deg, #FFB7C5, #E0C3FC)'
            : 'rgba(255, 255, 255, 0.05)',
          border: 'none',
          color: isReady ? '#1E1624' : '#5A4F68',
          fontSize: '0.95rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: isReady ? 'pointer' : 'default',
          boxShadow: isReady ? '0 8px 24px rgba(255, 183, 197, 0.35)' : 'none',
          transition: 'all 0.2s ease',
        }}
      >
        <span>Enter Classified Proposal</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
