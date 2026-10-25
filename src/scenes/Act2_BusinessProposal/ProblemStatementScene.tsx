import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Activity, AlertCircle } from 'lucide-react';

export const ProblemStatementScene: React.FC = () => {
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
          The Problem Statement
        </h2>
        <p style={{ color: '#FFB7C5', fontSize: '0.88rem', marginTop: '4px', fontWeight: 600 }}>
          Current status: High lore. Unresolved next chapter.
        </p>
      </div>

      {/* Diagnostic Gauges */}
      <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div
          style={{
            padding: '14px 18px',
            background: 'rgba(0, 0, 0, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '0.86rem', color: '#D8CCE6', fontWeight: 600 }}>Shared Lore Depth</span>
          <span style={{ fontSize: '0.82rem', color: '#38E09A', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
            MAX (99.8%)
          </span>
        </div>

        <div
          style={{
            padding: '14px 18px',
            background: 'rgba(0, 0, 0, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '0.86rem', color: '#D8CCE6', fontWeight: 600 }}>Late-Night Tea Rides</span>
          <span style={{ fontSize: '0.82rem', color: '#00F0FF', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
            OFF THE CHART
          </span>
        </div>

        <div
          style={{
            padding: '14px 18px',
            background: 'rgba(255, 42, 133, 0.1)',
            border: '1px solid rgba(255, 42, 133, 0.3)',
            borderRadius: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '0.86rem', color: '#FFB7C5', fontWeight: 700 }}>Next Chapter Clarity</span>
          <span style={{ fontSize: '0.82rem', color: '#FFE600', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
            PENDING INPUT ⏳
          </span>
        </div>
      </div>

      <p
        style={{
          maxWidth: '360px',
          fontSize: '0.92rem',
          color: '#E0C3FC',
          lineHeight: 1.5,
          fontStyle: 'italic',
        }}
      >
        &ldquo;Too much shared history and laughter to leave the question unasked.&rdquo;
      </p>
    </div>
  );
};
