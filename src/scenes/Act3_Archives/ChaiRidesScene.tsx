import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Compass, Sparkles, Camera, Cat } from 'lucide-react';
import { soundManager } from '../../utils/sound';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';

const RIDE_TABS = [
  { key: 'usTogetherChai', label: '🛵 The Ride Selfie', isPhoto: true },
  { key: 'herRoadsideCap', label: '🧢 Roadside Aesthetic', isPhoto: true },
  { key: 'chaiRideCatMeme', label: '😹 Two Talking Cats', isPhoto: false },
];

export const ChaiRidesScene: React.FC = () => {
  const [extraMinutes, setExtraMinutes] = useState(38);
  const [activeTab, setActiveTab] = useState('usTogetherChai');

  const handleAddTopic = () => {
    soundManager.playClick();
    setExtraMinutes((prev) => prev + 10);
  };

  const handleTabChange = (key: string) => {
    soundManager.playClick();
    setActiveTab(key);
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

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '4px',
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '3px',
          borderRadius: '999px',
          border: '1px solid rgba(255, 211, 182, 0.25)',
          maxWidth: '380px',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {RIDE_TABS.map((tab) => {
          const isSelected = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              style={{
                flex: 1,
                padding: '5px 8px',
                borderRadius: '999px',
                border: 'none',
                background: isSelected ? '#FFD3B6' : 'transparent',
                color: isSelected ? '#1E1624' : '#BDB0C9',
                fontSize: '0.68rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                transition: 'all 0.15s ease',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Media Slot */}
      <div style={{ width: '100%', maxWidth: '380px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <AssetPlaceholder
              slotKey={activeTab}
              height="175px"
              width="100%"
              objectFit={activeTab === 'chaiRideCatMeme' ? 'contain' : 'cover'}
            />
          </motion.div>
        </AnimatePresence>
      </div>

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
