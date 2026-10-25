import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Rocket, Compass, Shield, Sparkles } from 'lucide-react';

export const MissionVisionScene: React.FC = () => {
  const PILLARS = [
    { icon: <Rocket size={22} color="#FFB7C5" />, label: 'Hype Your Ambitions', sub: '100% in your corner' },
    { icon: <Compass size={22} color="#00F0FF" />, label: 'Spontaneous Rides', sub: 'The scenic route home' },
    { icon: <Shield size={22} color="#38E09A" />, label: 'Absolute Freedom', sub: 'Your space is sacred' },
    { icon: <Sparkles size={22} color="#FFE600" />, label: 'Quiet Laughs', sub: 'Zero social battery drain' },
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
          Mission &amp; Vision
        </h2>
        <p style={{ color: '#E0C3FC', fontSize: '0.86rem', marginTop: '4px' }}>
          What a potential partnership looks like:
        </p>
      </div>

      {/* 2x2 Clean Visual Emblems */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          width: '100%',
          maxWidth: '380px',
        }}
      >
        {PILLARS.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            style={{
              padding: '18px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(224, 195, 252, 0.18)',
              borderRadius: '18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {p.icon}
            </div>
            <div style={{ color: '#FDFBFF', fontSize: '0.86rem', fontWeight: 700 }}>{p.label}</div>
            <div style={{ color: '#847693', fontSize: '0.72rem' }}>{p.sub}</div>
          </motion.div>
        ))}
      </div>

      <p style={{ fontSize: '0.88rem', color: '#D8CCE6', maxWidth: '340px', lineHeight: 1.5 }}>
        &ldquo;Two whole, independent people enjoying life more together.&rdquo;
      </p>
    </div>
  );
};
