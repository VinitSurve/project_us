import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Sparkles, Heart } from 'lucide-react';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';

export const ProposalCoverScene: React.FC = () => {
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
        gap: '14px',
        padding: '6px 0',
        position: 'relative',
      }}
    >
      {/* Dossier Container */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          width: '100%',
          maxWidth: '460px',
          background: 'linear-gradient(145deg, #1D1526, #140E1B)',
          border: '1px solid rgba(224, 195, 252, 0.25)',
          borderRadius: '24px',
          padding: '24px 20px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(224, 195, 252, 0.08)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {/* Top Tag */}
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
          }}
        >
          <Sparkles size={12} /> A CAT-MEME STORY // FOR बाळ
        </div>

        {/* Big Bold Title */}
        <div>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 8vw, 3.4rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              background: 'linear-gradient(135deg, #FFFFFF 20%, #FFB7C5 70%, #E0C3FC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '6px',
            }}
          >
            PROJECT: US
          </h1>
          <h2
            style={{
              fontSize: 'clamp(0.92rem, 3.6vw, 1.15rem)',
              fontWeight: 600,
              color: '#FDFBFF',
              lineHeight: 1.35,
            }}
          >
            A slightly chaotic cat-meme presentation about two people.
          </h2>
        </div>

        {/* Cat Meme Slot */}
        <AssetPlaceholder
          slotKey="coverCatMeme"
          height="125px"
          width="100%"
          style={{ maxWidth: '320px' }}
        />

        {/* Tactile Rubber Stamp */}
        <motion.div
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleStamp}
          style={{
            border: '2px dashed #FF4757',
            color: '#FF4757',
            padding: '6px 16px',
            borderRadius: '8px',
            fontWeight: 900,
            fontSize: '0.78rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            boxShadow: '0 0 16px rgba(255, 71, 87, 0.2)',
            transform: 'rotate(-3deg)',
            userSelect: 'none',
          }}
        >
          <Heart size={13} fill="#FF4757" />
          <span>{stamped ? 'CLEARED FOR बाळ 🐾' : 'TAP TO UNSEAL'}</span>
        </motion.div>

        {/* Sincere note */}
        <p
          style={{
            fontSize: '0.82rem',
            color: '#BDB0C9',
            lineHeight: 1.5,
            fontStyle: 'italic',
          }}
        >
          &ldquo;Written in TypeScript, powered by late-night chai, and made with 100% genuine intentions.&rdquo;
        </p>
      </motion.div>
    </div>
  );
};
