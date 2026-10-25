import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { ShieldCheck, Sparkles } from 'lucide-react';

export const ProposalCoverScene: React.FC = () => {
  const { nextScene } = usePresentation();
  const [stamped, setStamped] = useState(false);

  const handleStamp = () => {
    soundManager.playBell();
    setStamped(true);
  };

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
        position: 'relative',
      }}
    >
      {/* Confidential Dossier Container */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          width: '100%',
          maxWidth: '460px',
          background: 'linear-gradient(145deg, #1D1526, #140E1B)',
          border: '1px solid rgba(224, 195, 252, 0.25)',
          borderRadius: '24px',
          padding: '36px 24px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(224, 195, 252, 0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Top Metadata Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 183, 197, 0.1)',
            border: '1px solid rgba(255, 183, 197, 0.25)',
            borderRadius: '999px',
            padding: '4px 12px',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            color: '#FFB7C5',
            marginBottom: '16px',
          }}
        >
          <ShieldCheck size={12} /> CONFIDENTIAL PARTNERSHIP TENDER
        </div>

        {/* Big Bold Editorial Title */}
        <h1
          style={{
            fontSize: 'clamp(2.6rem, 9vw, 3.8rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            background: 'linear-gradient(135deg, #FFFFFF 20%, #FFB7C5 70%, #E0C3FC 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '12px',
          }}
        >
          PROJECT: US
        </h1>

        <h2
          style={{
            fontSize: 'clamp(1rem, 3.8vw, 1.25rem)',
            fontWeight: 600,
            color: '#FDFBFF',
            lineHeight: 1.4,
            marginBottom: '20px',
          }}
        >
          A Rather Unnecessary but Extremely Important Business Proposal
        </h2>

        {/* Tactile Rubber Stamp (Tappable!) */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleStamp}
          style={{
            margin: '12px auto',
            border: '3px dashed #FF4757',
            color: '#FF4757',
            padding: '8px 20px',
            borderRadius: '10px',
            fontWeight: 900,
            fontSize: '0.86rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            display: 'inline-block',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(255, 71, 87, 0.25)',
            transform: 'rotate(-4deg)',
          }}
        >
          {stamped ? '🐾 CLEARED FOR बाळ' : 'TOP SECRET // TAP TO UNSEAL'}
        </motion.div>

        {/* Sincere, single quote */}
        <p
          style={{
            marginTop: '22px',
            fontSize: '0.88rem',
            color: '#BDB0C9',
            lineHeight: 1.55,
            fontStyle: 'italic',
          }}
        >
          &ldquo;Prepared with questionable statistics, an unreasonable number of cats, and surprisingly genuine intentions.&rdquo;
        </p>
      </motion.div>
    </div>
  );
};
