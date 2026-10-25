import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Terminal, Laptop, Sparkles } from 'lucide-react';

export const HacknovaOriginScene: React.FC = () => {
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
          The Hacknova Genesis
        </h2>
        <p style={{ color: '#FFD3B6', fontSize: '0.86rem', marginTop: '4px', fontWeight: 600 }}>
          Where it all began.
        </p>
      </div>

      {/* Terminal Code Snippet */}
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          width: '100%',
          maxWidth: '380px',
          background: '#150F1D',
          border: '1px solid rgba(255, 211, 182, 0.25)',
          borderRadius: '16px',
          padding: '16px 18px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          textAlign: 'left',
          boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
        }}
      >
        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5F56' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27C93F' }} />
        </div>
        <div style={{ color: '#847693', marginBottom: '6px' }}>// Hacknova Hackathon • 2:00 AM</div>
        <div style={{ color: '#FFD3B6' }}>$ git log --chemistry</div>
        <div style={{ color: '#38E09A', marginTop: '6px' }}>&gt; Fluorescent lights. Cold caffeine.</div>
        <div style={{ color: '#E0C3FC' }}>&gt; And then, we started talking.</div>
      </motion.div>

      {/* Tilted Polaroid Note */}
      <motion.div
        whileHover={{ rotate: 0 }}
        style={{
          width: '100%',
          maxWidth: '360px',
          background: '#FFFDF9',
          borderRadius: '14px',
          padding: '16px 20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          transform: 'rotate(-2deg)',
          textAlign: 'left',
          border: '1px solid #E8E0D2',
        }}
      >
        <p
          className="font-handwriting"
          style={{
            fontSize: '1.25rem',
            color: '#2D1F36',
            lineHeight: 1.4,
            fontWeight: 700,
          }}
        >
          &ldquo;You were effortlessly funny, sharp, and authentic. I remember hoping the conversation wouldn&apos;t end when the hackathon did.&rdquo;
        </p>
      </motion.div>
    </div>
  );
};
