import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Target, Compass, Rocket, Heart, Shield, Sparkles, ArrowRight } from 'lucide-react';

export const MissionVisionScene: React.FC = () => {
  const { nextScene } = usePresentation();

  const PILLARS = [
    {
      icon: <Rocket size={18} color="#FFB7C5" />,
      title: "Championing Ambitions",
      desc: "Zero competition, 100% hype. Celebrating your wins, coding breakthroughs, and career milestones.",
    },
    {
      icon: <Compass size={18} color="#E0C3FC" />,
      title: "Exploring New Horizons",
      desc: "Scenic drives, spontaneous chai spots, discovering hidden cafes, and finding new lore.",
    },
    {
      icon: <Shield size={18} color="#38E09A" />,
      title: "Fierce Independence",
      desc: "Complete autonomy. You keep your space, your dreams, your time. Together because we want to be.",
    },
    {
      icon: <Sparkles size={18} color="#FFE600" />,
      title: "The Joy in Ordinary Things",
      desc: "Sitting comfortably in silence, sending absurd cat memes, and debriefing long days over tea.",
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#E0C3FC',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Target size={14} /> SECTION 4.0 // PHILOSOPHY & VALUES
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Mission & Vision
        </h2>
      </div>

      {/* Main Glass Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '22px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <p style={{ color: '#D8CCE6', fontSize: '0.88rem', lineHeight: 1.55 }}>
          Not a checklist of demands or rigid assumptions, but an open vision of what life could look like if we team up:
        </p>

        {/* 2x2 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '12px',
          }}
        >
          {PILLARS.map((p, i) => (
            <div
              key={i}
              style={{
                padding: '14px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '14px',
                border: '1px solid rgba(224, 195, 252, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {p.icon}
                </div>
                <h4 style={{ color: '#FDFBFF', fontSize: '0.9rem', fontWeight: 700 }}>
                  {p.title}
                </h4>
              </div>
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
          background: 'linear-gradient(135deg, #FFB7C5, #E0C3FC)',
          border: 'none',
          color: '#1E1624',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(255, 183, 197, 0.35)',
        }}
      >
        <span>Review Operating Terms & Conditions</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
