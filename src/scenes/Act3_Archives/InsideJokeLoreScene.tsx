import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';

export const InsideJokeLoreScene: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const JOKES = [
    {
      title: 'Infinite Yap Quota',
      punchline: 'Two hours pass in five minutes when we talk.',
      color: '#FFF9C4',
      rotate: -3,
    },
    {
      title: 'Scooter Transit Paradox',
      punchline: 'Shortest route: 10 mins. Our route: 45 mins + 1 more topic.',
      color: '#FFCDD2',
      rotate: 2,
    },
    {
      title: 'Chai as a Dependency',
      punchline: 'package.json: "cutting-chai": "^latest" (Required).',
      color: '#C8E6C9',
      rotate: -2,
    },
  ];

  const handleTap = (i: number) => {
    soundManager.playClick();
    setActiveIdx(activeIdx === i ? null : i);
  };

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
          Inside-Joke Pinboard
        </h2>
        <p style={{ color: '#FFE600', fontSize: '0.86rem', marginTop: '4px' }}>
          References only two people understand:
        </p>
      </div>

      {/* 3 Tilted Magnetic Notes */}
      <div style={{ width: '100%', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {JOKES.map((j, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03, rotate: 0 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleTap(i)}
            style={{
              padding: '16px 20px',
              background: j.color,
              color: '#231C18',
              borderRadius: '14px',
              transform: `rotate(${j.rotate}deg)`,
              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
              cursor: 'pointer',
              textAlign: 'left',
              position: 'relative',
            }}
          >
            {/* Red Pushpin */}
            <div
              style={{
                position: 'absolute',
                top: '-6px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#FF4757',
                border: '2px solid #FFF',
              }}
            />
            <div style={{ fontSize: '0.92rem', fontWeight: 800 }}>{j.title}</div>
            <div style={{ fontSize: '0.82rem', marginTop: '4px', color: '#4A3B32', lineHeight: 1.4 }}>
              {j.punchline}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
