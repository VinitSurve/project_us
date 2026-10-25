import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Siren, Sparkles } from 'lucide-react';

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
        gap: '20px',
        padding: '10px 0',
      }}
    >
      <div>
        <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The 34/36 Guna Incident
        </h2>
        <p style={{ color: '#FF2A85', fontSize: '0.86rem', marginTop: '4px', fontWeight: 700 }}>
          When ancient astrology broke the diagnostic scale:
        </p>
      </div>

      {/* Giant Neon Score Display */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSiren}
        style={{
          width: '100%',
          maxWidth: '340px',
          background: 'linear-gradient(135deg, rgba(255, 42, 133, 0.2), rgba(0, 240, 255, 0.2))',
          border: sirenActive ? '2px solid #FF2A85' : '2px dashed rgba(255, 42, 133, 0.5)',
          borderRadius: '24px',
          padding: '28px 20px',
          cursor: 'pointer',
          boxShadow: sirenActive
            ? '0 0 50px rgba(255, 42, 133, 0.6)'
            : '0 10px 30px rgba(0,0,0,0.4)',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ fontSize: '0.74rem', color: '#E0C3FC', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
          KUNDALI ASHTAKOOTA MATCH
        </div>

        <div
          style={{
            fontSize: 'clamp(3.5rem, 12vw, 4.8rem)',
            fontWeight: 900,
            color: '#FFF',
            lineHeight: 1,
            margin: '8px 0',
            textShadow: '0 0 25px rgba(255, 42, 133, 0.8)',
          }}
        >
          34<span style={{ fontSize: '2rem', color: '#FFB7C5' }}>/36</span>
        </div>

        <div style={{ fontSize: '0.82rem', color: '#38E09A', fontWeight: 800 }}>
          ✨ 94.4% COSMIC CONCURRENCE ✨
        </div>

        <div style={{ marginTop: '12px', fontSize: '0.72rem', color: '#FFB7C5' }}>
          {sirenActive ? '🚨 SIREN BLARING: COSMIC ALIGNMENT' : 'Tap to sound Dr. Meowstein’s Siren!'}
        </div>
      </motion.div>

      {/* Comedic Note */}
      <p style={{ maxWidth: '340px', fontSize: '0.84rem', color: '#D8CCE6', lineHeight: 1.45 }}>
        &ldquo;The planets clearly ship this. (Though honest communication still beats planetary gravitational vectors.)&rdquo;
      </p>
    </div>
  );
};
