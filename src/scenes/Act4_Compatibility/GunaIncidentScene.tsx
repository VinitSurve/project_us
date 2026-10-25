import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Siren, Sparkles } from 'lucide-react';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';

export const GunaIncidentScene: React.FC = () => {
  const { unlockEasterEgg } = usePresentation();
  const [sirenActive, setSirenActive] = useState(false);

  const handleSiren = () => {
    soundManager.playTada();
    setSirenActive(true);
    unlockEasterEgg('guna-astronomer');
  };

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
            color: '#00F0FF',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Sparkles size={12} /> THE ACCIDENTAL KUNDALI TEST
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The 34/36 Guna Incident
        </h2>
        <p style={{ color: '#FFB7C5', fontSize: '0.82rem', marginTop: '2px' }}>
          When astrology was tested as a joke, but accidentally broke the scale.
        </p>
      </div>

      {/* Cat Meme Slot */}
      <AssetPlaceholder
        slotKey="gunaCatMeme"
        height="115px"
        width="100%"
        style={{ maxWidth: '380px' }}
      />

      {/* Giant Neon Score Display */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleSiren}
        style={{
          width: '100%',
          maxWidth: '380px',
          background: 'linear-gradient(135deg, rgba(255, 42, 133, 0.18), rgba(0, 240, 255, 0.18))',
          border: sirenActive ? '2px solid #FF2A85' : '2px dashed rgba(255, 42, 133, 0.5)',
          borderRadius: '18px',
          padding: '16px 20px',
          cursor: 'pointer',
          boxShadow: sirenActive
            ? '0 0 40px rgba(255, 42, 133, 0.5)'
            : '0 8px 24px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ fontSize: '0.72rem', color: '#E0C3FC', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
          KUNDALI ASHTAKOOTA METRIC
        </div>

        <div
          style={{
            fontSize: 'clamp(3rem, 10vw, 4.2rem)',
            fontWeight: 900,
            color: '#FFF',
            lineHeight: 1,
            margin: '4px 0',
            textShadow: '0 0 25px rgba(255, 42, 133, 0.8)',
          }}
        >
          34<span style={{ fontSize: '1.8rem', color: '#FFB7C5' }}>/36</span>
        </div>

        <div style={{ fontSize: '0.78rem', color: '#38E09A', fontWeight: 800 }}>
          ✨ 94.4% COSMIC CONCURRENCE ✨
        </div>

        <div style={{ marginTop: '8px', fontSize: '0.7rem', color: '#FFB7C5', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
          <Siren size={12} />
          <span>{sirenActive ? '🚨 SIREN BLARING: CELESTIAL ALIGNMENT' : 'Tap to sound Dr. Meowstein’s Siren!'}</span>
        </div>
      </motion.div>

      {/* Comedic Note */}
      <p style={{ maxWidth: '360px', fontSize: '0.78rem', color: '#A89BB5', lineHeight: 1.45 }}>
        &ldquo;We don&apos;t even take astrology seriously, but the universe was being remarkably loud about this.&rdquo;
      </p>
    </div>
  );
};
