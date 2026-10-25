import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { TIMELINE_EVENTS } from '../../content/proposalData';
import { soundManager } from '../../utils/sound';

export const VisualTimelineScene: React.FC = () => {
  const [selectedId, setSelectedId] = useState(TIMELINE_EVENTS[0].id);

  const selected = TIMELINE_EVENTS.find((e) => e.id === selectedId) || TIMELINE_EVENTS[0];

  const handleSelect = (id: string) => {
    soundManager.playClick();
    setSelectedId(id);
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
          The Shared Lore Road
        </h2>
        <p style={{ color: '#FFD3B6', fontSize: '0.86rem', marginTop: '4px' }}>
          Tap the milestones along our journey:
        </p>
      </div>

      {/* Horizontal Milestone Road */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          maxWidth: '100%',
          padding: '6px 4px',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {TIMELINE_EVENTS.map((event) => {
          const isSelected = event.id === selectedId;
          return (
            <motion.button
              key={event.id}
              whileTap={{ scale: 0.94 }}
              onClick={() => handleSelect(event.id)}
              style={{
                flexShrink: 0,
                padding: '10px 14px',
                borderRadius: '14px',
                background: isSelected ? 'rgba(255, 211, 182, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border: isSelected ? '2px solid #FFD3B6' : '1px solid rgba(255, 255, 255, 0.08)',
                color: isSelected ? '#FFD3B6' : '#847693',
                fontSize: '0.82rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
              }}
            >
              <span>{event.icon}</span>
              <span>{event.tag}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Detail Punch Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{
            width: '100%',
            maxWidth: '380px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 211, 182, 0.3)',
            borderRadius: '20px',
            padding: '20px',
            textAlign: 'left',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '1.4rem' }}>{selected.icon}</span>
            <span style={{ fontSize: '0.72rem', color: '#FFD3B6', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
              {selected.date}
            </span>
          </div>

          <h3 style={{ fontSize: '1.1rem', color: '#FDFBFF', fontWeight: 800, marginBottom: '6px' }}>
            {selected.title}
          </h3>

          <p style={{ color: '#D8CCE6', fontSize: '0.86rem', lineHeight: 1.5 }}>
            {selected.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
