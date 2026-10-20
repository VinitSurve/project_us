import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Gift, ArrowRight, ShieldCheck, Heart, Sparkles, Navigation } from 'lucide-react';

export const ValuePropositionScene: React.FC = () => {
  const { nextScene } = usePresentation();

  const DELIVERABLES = [
    {
      title: 'Reliable Emotional Safety',
      desc: 'A judgment-free zone where you can share doubts, excitement, or bad days, knowing you are supported 100%.',
      icon: <ShieldCheck size={18} color="#38E09A" />,
    },
    {
      title: 'Active Listening & Total Presence',
      desc: 'Listening to understand, not just to reply. Remembering what you care about and celebrating what excites you.',
      icon: <Heart size={18} color="#FFB7C5" />,
    },
    {
      title: 'Dedicated Chauffeur & Tea Companion',
      desc: 'Whenever you want to escape for fresh air, cool rides, or hot chai, a helmet and scooter are on standby.',
      icon: <Navigation size={18} color="#E0C3FC" />,
    },
    {
      title: 'Unconditional Respect for Your Independence',
      desc: 'No clinginess or control. Supporting your goals, your friendships, and your quiet personal space.',
      icon: <Sparkles size={18} color="#FFE600" />,
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
            color: '#38E09A',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Gift size={14} /> VALUE DELIVERABLES // PLEDGE
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          The Value Proposition
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
          What Candidate A pledges to bring to the partnership table—no empty promises, just real, consistent care:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
          {DELIVERABLES.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '12px 14px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(56, 224, 154, 0.2)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <h4 style={{ color: '#FDFBFF', fontSize: '0.88rem', fontWeight: 700, marginBottom: '2px' }}>
                  {item.title}
                </h4>
                <p style={{ color: '#BDB0C9', fontSize: '0.78rem', lineHeight: 1.45 }}>
                  {item.desc}
                </p>
              </div>
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
          background: 'linear-gradient(135deg, #38E09A, #E0C3FC)',
          border: 'none',
          color: '#120E17',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(56, 224, 154, 0.35)',
        }}
      >
        <span>Explore Future Possibilities</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
