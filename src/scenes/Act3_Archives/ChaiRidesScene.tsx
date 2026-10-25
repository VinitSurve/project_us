import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Compass, Sparkles } from 'lucide-react';
import { soundManager } from '../../utils/sound';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';

export const ChaiRidesScene: React.FC = () => {
  const [extraMinutes, setExtraMinutes] = useState(38);

  const handleAddTopic = () => {
    soundManager.playClick();
    setExtraMinutes((prev) => prev + 10);
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
      }}
    >
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#FFD3B6',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Compass size={12} /> THE TRANSIT PARADOX
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The 45-Minute &ldquo;Short Route&rdquo;
        </h2>
        <p style={{ color: '#D8CCE6', fontSize: '0.84rem', marginTop: '2px' }}>
          How a 10-minute drop home magically turned into an hour of conversations.
        </p>
      </div>

      {/* Cat Meme Slot */}
      <AssetPlaceholder
        slotKey="chaiRideCatMeme"
        height="120px"
        width="100%"
        style={{ maxWidth: '380px' }}
      />

      {/* Route Diagnostic Widget */}
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '380px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: '#847693', fontFamily: 'var(--font-mono)' }}>
            ESTIMATED NAVIGATION TIME:
          </span>
          <span style={{ fontSize: '0.84rem', color: '#38E09A', fontWeight: 800 }}>
            8 mins
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: '#FFB7C5', fontWeight: 700 }}>
            ACTUAL TIME SPENT TALKING:
          </span>
          <span style={{ fontSize: '0.95rem', color: '#FFD3B6', fontWeight: 900, fontFamily: 'var(--font-mono)' }}>
            {10 + extraMinutes} mins 🛵
          </span>
        </div>

        <div
          style={{
            background: 'rgba(0, 0, 0, 0.25)',
            borderRadius: '10px',
            padding: '10px',
            fontSize: '0.78rem',
            color: '#BDB0C9',
            lineHeight: 1.45,
          }}
        >
          &ldquo;Neither of us ever admitted it, but we both knew taking the longer turn around the block was very much intentional.&rdquo;
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleAddTopic}
          style={{
            marginTop: '4px',
            padding: '8px 14px',
            borderRadius: '8px',
            background: 'rgba(255, 211, 182, 0.12)',
            border: '1px solid rgba(255, 211, 182, 0.3)',
            color: '#FFD3B6',
            fontSize: '0.74rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          <Coffee size={13} />
          <span>&ldquo;Wait, one more topic before we reach...&rdquo; (+10m)</span>
        </motion.button>
      </div>
    </div>
  );
};
