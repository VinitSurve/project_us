import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Plus } from 'lucide-react';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';

export const ProposedDuoScene: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '12px',
        padding: '6px 0',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#E0C3FC',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Sparkles size={12} /> THE DYNAMIC
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Overthinker Meets Sunshine
        </h2>
        <p style={{ color: '#D8CCE6', fontSize: '0.82rem', marginTop: '2px' }}>
          Why this duo just makes effortless sense:
        </p>
      </div>

      {/* Cat Meme Slot */}
      <AssetPlaceholder
        slotKey="duoCatMeme"
        height="120px"
        width="100%"
        style={{ maxWidth: '380px' }}
      />

      {/* Visual Synergy Equation */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          width: '100%',
          maxWidth: '380px',
          padding: '16px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(224, 195, 252, 0.25)',
          borderRadius: '18px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem' }}>👨‍💻</div>
          <div style={{ fontSize: '0.76rem', color: '#BDB0C9', fontWeight: 700, marginTop: '2px' }}>
            Candidate A
          </div>
          <div style={{ fontSize: '0.64rem', color: '#847693' }}>Terminal Overthinker</div>
        </div>

        <div
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: 'rgba(255, 183, 197, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFB7C5',
          }}
        >
          <Plus size={16} />
        </div>

        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid #FFE600',
              boxShadow: '0 0 14px rgba(255, 230, 0, 0.4)',
              cursor: 'pointer',
            }}
          >
            <img
              src="/photos/her/her_07_yellow_outfit.png"
              alt="बाळ"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="font-marathi" style={{ fontSize: '0.92rem', color: '#FFB7C5', fontWeight: 800, marginTop: '4px' }}>
            बाळ
          </div>
          <div style={{ fontSize: '0.64rem', color: '#847693' }}>Effortless Sunshine ☀️</div>
        </div>
      </div>

      <p style={{ maxWidth: '360px', fontSize: '0.84rem', color: '#D8CCE6', lineHeight: 1.5 }}>
        &ldquo;Not two halves trying to complete each other. Just two whole, independent people who make each other&apos;s days way brighter.&rdquo;
      </p>
    </div>
  );
};
