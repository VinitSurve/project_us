import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { BatteryCharging, MessageCircle, HeartHandshake } from 'lucide-react';

export const RelationshipHandbookScene: React.FC = () => {
  const [switches, setSwitches] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true });

  const toggle = (i: number) => {
    soundManager.playClick();
    setSwitches((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const PROTOCOLS = [
    {
      icon: <BatteryCharging size={18} color="#00F0FF" />,
      title: 'Low-Battery Mode',
      desc: 'Social energy at 0%? Silent company, comfort snacks & warm tea issued.',
    },
    {
      icon: <MessageCircle size={18} color="#FFB7C5" />,
      title: 'Unlimited Yap License',
      desc: 'Full immunity for 45-minute monologues on random special interests.',
    },
    {
      icon: <HeartHandshake size={18} color="#38E09A" />,
      title: 'Disagreement Rule',
      desc: 'Zero passive silence. If something is on your mind, we talk it out kindly.',
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
        gap: '20px',
        padding: '10px 0',
      }}
    >
      <div>
        <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Relationship Handbook
        </h2>
        <p style={{ color: '#00F0FF', fontSize: '0.86rem', marginTop: '4px', fontWeight: 600 }}>
          Tactile Standard Operating Procedures:
        </p>
      </div>

      {/* 3 Interactive Toggle Switch Cards */}
      <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {PROTOCOLS.map((p, i) => {
          const isOn = switches[i];
          return (
            <motion.div
              key={i}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggle(i)}
              style={{
                padding: '14px 16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: isOn ? '1px solid #00F0FF' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', paddingRight: '12px' }}>
                <div style={{ marginTop: '2px' }}>{p.icon}</div>
                <div>
                  <div style={{ color: '#FDFBFF', fontSize: '0.88rem', fontWeight: 700 }}>{p.title}</div>
                  <div style={{ color: '#847693', fontSize: '0.74rem', marginTop: '2px', lineHeight: 1.35 }}>
                    {p.desc}
                  </div>
                </div>
              </div>

              {/* Mini Pill Switch */}
              <div
                style={{
                  width: '38px',
                  height: '22px',
                  borderRadius: '999px',
                  background: isOn ? '#00F0FF' : 'rgba(255,255,255,0.1)',
                  position: 'relative',
                  flexShrink: 0,
                  transition: 'background 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: isOn ? '#120E17' : '#847693',
                    position: 'absolute',
                    top: '3px',
                    left: isOn ? '19px' : '3px',
                    transition: 'left 0.2s ease',
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
