import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { ShieldCheck, Heart, MessageSquare } from 'lucide-react';

export const TermsConditionsScene: React.FC = () => {
  const PROMISES = [
    {
      icon: <ShieldCheck size={20} color="#38E09A" />,
      title: 'Zero Pressure',
      desc: 'Saying "no" is completely respected. You never have to worry about awkwardness.',
    },
    {
      icon: <MessageSquare size={20} color="#00F0FF" />,
      title: 'Open Honesty',
      desc: 'No guessing games or silent treatment. If something is on your mind, we talk.',
    },
    {
      icon: <Heart size={20} color="#FFB7C5" />,
      title: 'Friendship First',
      desc: 'Whatever happens with this proposal, you will always have a loyal supporter in your corner.',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '24px',
        padding: '10px 0',
      }}
    >
      <div>
        <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Terms of Purr-posal
        </h2>
        <p style={{ color: '#38E09A', fontSize: '0.86rem', marginTop: '4px', fontWeight: 600 }}>
          Three non-negotiable emotional safety commitments:
        </p>
      </div>

      {/* 3 Clean Compact Promise Cards */}
      <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {PROMISES.map((p, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            style={{
              padding: '14px 16px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(56, 224, 154, 0.25)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              textAlign: 'left',
            }}
          >
            <div style={{ marginTop: '2px', flexShrink: 0 }}>{p.icon}</div>
            <div>
              <div style={{ color: '#FDFBFF', fontSize: '0.9rem', fontWeight: 700 }}>{p.title}</div>
              <div style={{ color: '#BDB0C9', fontSize: '0.78rem', marginTop: '2px', lineHeight: 1.45 }}>
                {p.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
