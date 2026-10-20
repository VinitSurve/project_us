import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { Code2, ArrowRight, Laptop, Sparkles, Terminal, Award } from 'lucide-react';

export const HacknovaOriginScene: React.FC = () => {
  const { nextScene, unlockEasterEgg } = usePresentation();
  const [logExpanded, setLogExpanded] = useState(false);

  const handleInspect = () => {
    soundManager.playClick();
    setLogExpanded(!logExpanded);
    unlockEasterEgg('hacknova-veteran');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
          <Code2 size={14} /> HISTORICAL ARCHIVE // INCIDENT 001
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Hacknova Genesis
        </h2>
      </div>

      {/* Main Glass Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              padding: '6px 12px',
              borderRadius: '999px',
              background: 'rgba(255, 211, 182, 0.2)',
              border: '1px solid rgba(255, 211, 182, 0.4)',
              color: '#FFD3B6',
              fontSize: '0.75rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Award size={13} /> EVENT: HACKNOVA HACKATHON
          </div>
          <span style={{ fontSize: '0.72rem', color: '#847693', fontFamily: 'var(--font-mono)' }}>
            STATUS: WHERE IT ALL BEGAN
          </span>
        </div>

        <p style={{ color: '#E8D7FF', fontSize: '0.92rem', lineHeight: 1.6 }}>
          Under harsh hackathon lighting, amidst caffeine shortages and stubborn bugs, two developers started talking. What could have been standard tech small talk turned into an immediate, effortless connection that outlasted the competition.
        </p>

        {/* Narrative Polaroid / Note Box */}
        <div
          className="paper-sheet"
          style={{
            padding: '16px',
            borderRadius: '14px',
            background: '#FFFDF9',
            border: '2px dashed #E0C3FC',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#231C18', fontWeight: 700, fontSize: '0.85rem' }}>
            <Laptop size={16} color="#B388FF" />
            <span>Candidate A&apos;s Memory Log:</span>
          </div>
          <p
            className="font-handwriting"
            style={{
              color: '#2D1F36',
              fontSize: '1.15rem',
              lineHeight: 1.45,
            }}
          >
            &ldquo;Most people at hackathons are either stressed or trying too hard. You were just completely yourself—smart, funny, and effortlessly cool. I remember thinking: &lsquo;I really hope this conversation doesn&apos;t end when the hackathon does.&rsquo;&rdquo;
          </p>
        </div>

        {/* Interactive Terminal Inspection button */}
        <div
          onClick={handleInspect}
          style={{
            padding: '12px 14px',
            background: 'rgba(0,0,0,0.4)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 211, 182, 0.25)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFD3B6', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
              <Terminal size={14} /> git log --author=&quot;Hacknova&quot;
            </div>
            <span style={{ fontSize: '0.7rem', color: '#847693' }}>
              {logExpanded ? '▲ Hide Trace' : '▼ Inspect Raw Logs'}
            </span>
          </div>

          {logExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: '#38E09A',
                lineHeight: 1.5,
                marginTop: '6px',
                paddingTop: '6px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div>commit a98f4c2e: &quot;Initial encounter: high conversational chemistry&quot;</div>
              <div>commit b421d09e: &quot;Noticed shared passion for cats &amp; aesthetic code&quot;</div>
              <div>commit c774a11f: &quot;Mutual respect permanently hardcoded into system&quot;</div>
            </motion.div>
          )}
        </div>
      </div>

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
        <span>View The Shared Lore Timeline</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
