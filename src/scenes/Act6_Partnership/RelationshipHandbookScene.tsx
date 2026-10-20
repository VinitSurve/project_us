import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { BookOpen, ArrowRight, BatteryCharging, MessageCircle, HeartCrack, Sparkles } from 'lucide-react';

export const RelationshipHandbookScene: React.FC = () => {
  const { nextScene } = usePresentation();

  const PROTOCOLS = [
    {
      code: 'PROTOCOL 1.1',
      title: 'Low-Battery Recharge Mode',
      desc: 'When social energy hits 0%, zero conversational performance is required. Silent companionship, favorite snacks, and warm chai are automatically issued.',
      icon: <BatteryCharging size={18} color="#00F0FF" />,
    },
    {
      code: 'PROTOCOL 1.2',
      title: 'The Unrestricted Yap Clause',
      desc: 'Full immunity granted for passionate 45-minute monologues about random special interests, work lore, or obscure cat genetics.',
      icon: <MessageCircle size={18} color="#FFB7C5" />,
    },
    {
      code: 'PROTOCOL 1.3',
      title: 'Disagreement Resolution Standard',
      desc: 'Strict ban on passive-aggressive silence. If something feels off, we communicate kindly, listen empathetically, and fix it as a team.',
      icon: <Sparkles size={18} color="#38E09A" />,
    },
    {
      code: 'PROTOCOL 1.4',
      title: 'Autonomous Orbit Clause',
      desc: 'Both partners maintain independent lives, individual friendships, personal space, and distinct career trajectories. Zero possessiveness allowed.',
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
            color: '#00F0FF',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <BookOpen size={14} /> STANDARD OPERATING MANUAL // SOP
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Relationship Handbook
        </h2>
      </div>

      {/* Main Glass Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '22px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
      >
        <p style={{ color: '#D8CCE6', fontSize: '0.86rem', lineHeight: 1.5 }}>
          Humorous titles, but genuine operational principles designed for emotional safety and lasting happiness:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {PROTOCOLS.map((p, idx) => (
            <div
              key={idx}
              style={{
                padding: '12px 14px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(0, 240, 255, 0.18)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.7rem', color: '#00F0FF', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  {p.code}
                </span>
                {p.icon}
              </div>
              <h4 style={{ color: '#FDFBFF', fontSize: '0.88rem', fontWeight: 700, marginBottom: '2px' }}>
                {p.title}
              </h4>
              <p style={{ color: '#BDB0C9', fontSize: '0.78rem', lineHeight: 1.45 }}>
                {p.desc}
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
          background: 'linear-gradient(135deg, #00F0FF, #FFB7C5)',
          border: 'none',
          color: '#120E17',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(0, 240, 255, 0.35)',
        }}
      >
        <span>Inspect The Risk Register</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
