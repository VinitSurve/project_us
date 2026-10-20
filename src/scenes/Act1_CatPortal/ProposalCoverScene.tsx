import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { ShieldCheck, FileText, ArrowRight, Stamp } from 'lucide-react';

export const ProposalCoverScene: React.FC = () => {
  const { nextScene } = usePresentation();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        position: 'relative',
      }}
    >
      {/* Decorative Rubber Stamp */}
      <motion.div
        initial={{ scale: 2, rotate: -25, opacity: 0 }}
        animate={{ scale: 1, rotate: -12, opacity: 0.9 }}
        transition={{ type: 'spring', damping: 14, delay: 0.2 }}
        style={{
          position: 'absolute',
          top: '-15px',
          right: '5px',
          zIndex: 5,
          border: '3px dashed #FF4757',
          color: '#FF4757',
          padding: '6px 14px',
          borderRadius: '8px',
          fontWeight: 900,
          fontSize: '0.78rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          pointerEvents: 'none',
          boxShadow: '0 0 15px rgba(255, 71, 87, 0.25)',
        }}
      >
        TOP SECRET // DO NOT LEAK TO DOGS
      </motion.div>

      {/* Proposal Dossier Card */}
      <div
        className="glass-panel"
        style={{
          padding: '30px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          position: 'relative',
          border: '1px solid rgba(224, 195, 252, 0.3)',
        }}
      >
        {/* Metadata Top Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '14px',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            color: '#BDB0C9',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FileText size={14} color="#FFB7C5" />
            <span>DOC REF: RFP-ROMANCE-2026</span>
          </div>
          <span style={{ color: '#38E09A', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <ShieldCheck size={13} /> ENCRYPTED
          </span>
        </div>

        {/* Title Block */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#FFB7C5',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}
          >
            CONFIDENTIAL PARTNERSHIP TENDER
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 8vw, 3.8rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFB7C5 50%, #E0C3FC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '10px',
            }}
          >
            PROJECT: US
          </h1>
          <h2
            style={{
              fontSize: 'clamp(1rem, 3.5vw, 1.35rem)',
              fontWeight: 600,
              color: '#FDFBFF',
              lineHeight: 1.35,
            }}
          >
            A Rather Unnecessary but Extremely Important Business Proposal
          </h2>
        </div>

        {/* Supporting Line / Quotation */}
        <div
          style={{
            padding: '14px 16px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '12px',
            borderLeft: '3px solid #FFB7C5',
            fontSize: '0.88rem',
            color: '#D8CCE6',
            lineHeight: 1.5,
            fontStyle: 'italic',
          }}
        >
          &ldquo;Prepared with questionable statistics, an unreasonable number of cats, and surprisingly genuine intentions.&rdquo;
        </div>

        {/* Dossier Meta Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            paddingTop: '6px',
          }}
        >
          <div>
            <span style={{ color: '#847693', display: 'block' }}>PRIMARY TARGET:</span>
            <span style={{ color: '#FFB7C5', fontWeight: 700 }}>बाळ (September 4 Royalty)</span>
          </div>
          <div>
            <span style={{ color: '#847693', display: 'block' }}>LEAD RESEARCHER:</span>
            <span style={{ color: '#E0C3FC', fontWeight: 700 }}>The Overthinking Developer</span>
          </div>
          <div>
            <span style={{ color: '#847693', display: 'block' }}>KUNDALI COMPATIBILITY:</span>
            <span style={{ color: '#38E09A', fontWeight: 700 }}>34 / 36 (Unusually High)</span>
          </div>
          <div>
            <span style={{ color: '#847693', display: 'block' }}>FELINE CLEARANCE:</span>
            <span style={{ color: '#FFE600', fontWeight: 700 }}>100% Cat Approved</span>
          </div>
        </div>
      </div>

      {/* Button to proceed */}
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
        <span>Review Feline Disclaimer</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
