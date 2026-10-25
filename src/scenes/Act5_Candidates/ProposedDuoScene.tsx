import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Plus } from 'lucide-react';

export const ProposedDuoScene: React.FC = () => {
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
          The Proposed Duo
        </h2>
        <p style={{ color: '#FFB7C5', fontSize: '0.86rem', marginTop: '4px', fontWeight: 600 }}>
          Synergy equation:
        </p>
      </div>

      {/* Visual Synergy Equation */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          width: '100%',
          maxWidth: '360px',
          padding: '24px 16px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(224, 195, 252, 0.25)',
          borderRadius: '24px',
          boxShadow: '0 12px 35px rgba(0,0,0,0.4)',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem' }}>👨‍💻</div>
          <div style={{ fontSize: '0.8rem', color: '#BDB0C9', fontWeight: 700, marginTop: '4px' }}>
            Candidate A
          </div>
        </div>

        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 183, 197, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFB7C5',
          }}
        >
          <Plus size={20} />
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem' }}>✨</div>
          <div className="font-marathi" style={{ fontSize: '0.95rem', color: '#FFB7C5', fontWeight: 800, marginTop: '4px' }}>
            बाळ
          </div>
        </div>
      </div>

      <p style={{ maxWidth: '340px', fontSize: '0.94rem', color: '#D8CCE6', lineHeight: 1.55 }}>
        &ldquo;Not two halves trying to complete each other. Just two whole, independent people having way more fun together.&rdquo;
      </p>
    </div>
  );
};
