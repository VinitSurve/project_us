import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { TIMELINE_EVENTS } from '../../content/proposalData';
import { soundManager } from '../../utils/sound';
import { Calendar, ArrowRight, Sparkles, Check } from 'lucide-react';

export const VisualTimelineScene: React.FC = () => {
  const { nextScene } = usePresentation();
  const [selectedEventId, setSelectedEventId] = useState<string>(TIMELINE_EVENTS[0].id);

  const handleSelect = (id: string) => {
    soundManager.playClick();
    setSelectedEventId(id);
  };

  const selectedEvent = TIMELINE_EVENTS.find((e) => e.id === selectedEventId) || TIMELINE_EVENTS[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#FFD3B6',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Calendar size={14} /> SECTION 2.0 // CHRONOLOGICAL LOG
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Shared Lore Timeline
        </h2>
      </div>

      {/* Horizontal Milestone Selector on Mobile/Desktop */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '4px',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {TIMELINE_EVENTS.map((event, idx) => {
          const isSelected = event.id === selectedEventId;
          return (
            <button
              key={event.id}
              onClick={() => handleSelect(event.id)}
              style={{
                flexShrink: 0,
                padding: '8px 14px',
                borderRadius: '12px',
                background: isSelected ? 'rgba(255, 211, 182, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border: isSelected ? '1px solid #FFD3B6' : '1px solid rgba(255, 255, 255, 0.06)',
                color: isSelected ? '#FFD3B6' : '#847693',
                fontSize: '0.78rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <span>{event.icon}</span>
              <span>{event.tag}</span>
            </button>
          );
        })}
      </div>

      {/* Detail Card for the selected milestone */}
      <motion.div
        key={selectedEvent.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="glass-panel"
        style={{
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          border: '1px solid rgba(255, 211, 182, 0.3)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span
            style={{
              background: 'rgba(255, 211, 182, 0.15)',
              color: '#FFD3B6',
              padding: '4px 10px',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: 700,
            }}
          >
            {selectedEvent.badge}
          </span>
          <span style={{ fontSize: '0.75rem', color: '#847693', fontFamily: 'var(--font-mono)' }}>
            {selectedEvent.date}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>{selectedEvent.icon}</span>
          <h3 style={{ fontSize: '1.25rem', color: '#FDFBFF', fontWeight: 800 }}>
            {selectedEvent.title}
          </h3>
        </div>

        <p style={{ color: '#E8D7FF', fontSize: '0.92rem', lineHeight: 1.6 }}>
          {selectedEvent.description}
        </p>
      </motion.div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={nextScene}
        style={{
          width: '100%',
          padding: '16px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #FFD3B6, #FFB7C5)',
          border: 'none',
          color: '#1E1624',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(255, 211, 182, 0.35)',
        }}
      >
        <span>Enter The Photo Museum</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
