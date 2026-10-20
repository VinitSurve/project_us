import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { HelpCircle, ArrowRight, Activity, GitBranch, AlertCircle } from 'lucide-react';

export const ProblemStatementScene: React.FC = () => {
  const { nextScene } = usePresentation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#FFB7C5',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <HelpCircle size={14} /> SECTION 2.0 // STATUS QUO DIAGNOSTIC
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Problem Statement
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
        <div
          style={{
            padding: '14px 16px',
            background: 'rgba(255, 42, 133, 0.08)',
            border: '1px solid rgba(255, 42, 133, 0.25)',
            borderRadius: '12px',
            fontSize: '0.92rem',
            lineHeight: 1.55,
            color: '#FDFBFF',
          }}
        >
          &ldquo;Current status: a complicated history, a considerable amount of shared lore, and an unresolved question regarding a possible next chapter.&rdquo;
        </div>

        <p style={{ color: '#BDB0C9', fontSize: '0.86rem', lineHeight: 1.6 }}>
          We have crossed the threshold from casual acquaintances to two people who genuinely know, appreciate, and understand each other. Leaving things in limbo without an honest conversation would be an organizational inefficiency.
        </p>

        {/* Diagnostic Status Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div
            style={{
              padding: '12px 14px',
              background: 'rgba(0, 0, 0, 0.25)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.8rem' }}>
              <span style={{ color: '#E0C3FC', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <GitBranch size={14} /> Shared Lore Depth
              </span>
              <span style={{ color: '#38E09A', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>99.2% (Extensive)</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ width: '99.2%', height: '100%', background: '#38E09A' }} />
            </div>
          </div>

          <div
            style={{
              padding: '12px 14px',
              background: 'rgba(0, 0, 0, 0.25)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.8rem' }}>
              <span style={{ color: '#FFB7C5', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Activity size={14} /> Yapping Equilibrium
              </span>
              <span style={{ color: '#FFB7C5', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>100% (Harmonious)</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', background: '#FFB7C5' }} />
            </div>
          </div>

          <div
            style={{
              padding: '12px 14px',
              background: 'rgba(0, 0, 0, 0.25)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.8rem' }}>
              <span style={{ color: '#FFE600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <AlertCircle size={14} /> Next Chapter Clarity
              </span>
              <span style={{ color: '#FFE600', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>Pending Input</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ width: '45%', height: '100%', background: '#FFE600' }} />
            </div>
          </div>
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
          background: 'linear-gradient(135deg, #FFB7C5, #E0C3FC)',
          border: 'none',
          color: '#1E1624',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(255, 183, 197, 0.35)',
        }}
      >
        <span>Inspect Proposed Solution</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
