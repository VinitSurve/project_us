import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { ShieldAlert, ArrowRight, HeartHandshake, CheckCircle2, MessageSquare } from 'lucide-react';

export const RedTeamReviewScene: React.FC = () => {
  const { nextScene } = usePresentation();

  const REALITY_CHECKS = [
    {
      title: 'Correlation != Romantic Destiny',
      desc: 'Having matching Kundali points and liking the same cat reels is fun lore, but real relationships are built through daily kindness, consistency, and active effort.',
    },
    {
      title: 'Mutual Consent & Enthusiasm Required',
      desc: 'No amount of well-designed slides or witty arguments matters unless you genuinely feel the spark too. Your genuine feelings are the only metric that counts.',
    },
    {
      title: 'Still Lots to Discover',
      desc: 'We know each other well as friends, but dating is a different adventure. There will be new habits, quirks, and stories to uncover.',
    },
    {
      title: 'Communication > Memes',
      desc: 'Memes are great for breaking the ice, but navigating real life together requires honest vulnerability and listening without getting defensive.',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#FFA834',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <ShieldAlert size={14} /> INTERNAL AUDIT // RED-TEAM REALITY CHECK
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Red-Team Review
        </h2>
      </div>

      {/* Main Glass Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '22px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
      >
        <p style={{ color: '#D8CCE6', fontSize: '0.86rem', lineHeight: 1.5 }}>
          Before we get carried away by our own jokes, the corporate compliance board insists on a healthy dose of grounded self-awareness:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {REALITY_CHECKS.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '12px 14px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 168, 52, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <CheckCircle2 size={16} color="#FFA834" />
                <h4 style={{ color: '#FDFBFF', fontSize: '0.88rem', fontWeight: 700 }}>
                  {item.title}
                </h4>
              </div>
              <p style={{ color: '#BDB0C9', fontSize: '0.8rem', lineHeight: 1.45, paddingLeft: '24px' }}>
                {item.desc}
              </p>
            </div>
          ))}
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
          background: 'linear-gradient(135deg, #FFA834, #FFB7C5)',
          border: 'none',
          color: '#1E1624',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(255, 168, 52, 0.35)',
        }}
      >
        <span>Meet The Candidates</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
