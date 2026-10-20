import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Heart, ArrowRight, Feather } from 'lucide-react';

export const FoundersNoteScene: React.FC = () => {
  const { nextScene } = usePresentation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#FFB7C5',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Feather size={14} /> ACT VIII // PERSONAL DISCLOSURE
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.1rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Founder&apos;s Note
        </h2>
      </div>

      {/* Intimate Parchment Letter Card */}
      <div
        className="paper-sheet"
        style={{
          padding: '26px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          background: '#FFFDF9',
          color: '#231C18',
          borderRadius: '18px',
          maxHeight: '400px',
          overflowY: 'auto',
          border: '1px solid #E8E0D2',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#D81B60', fontWeight: 700, fontSize: '0.88rem' }}>
          <Heart size={16} fill="#D81B60" />
          <span>Dear बाळ,</span>
        </div>

        <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: '#3A3027' }}>
          Behind all the cat memes, the mock legal contracts, the Kundali statistics, and the overengineered code, there is a very simple and vulnerable human truth.
        </p>

        <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: '#3A3027' }}>
          Ever since Hacknova, our conversations have been one of my favorite parts of life. Whether we are discussing big dreams, talking about code, sitting on late-night scooter rides, or laughing at ridiculous internet lore, being around you feels natural and peaceful.
        </p>

        <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: '#3A3027' }}>
          I admire your sharpness, your independence, your kindness, and the genuine way you move through the world. I didn’t build this to pressure you or put you on the spot—I built it because you deserve something thoughtful, intentional, and made just for you.
        </p>

        <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: '#3A3027' }}>
          Whatever your response is, I am grateful for you in my life. But if there’s a possibility that you feel something too, I’d love to find out together.
        </p>

        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px dashed #E0C3FC' }}>
          <div
            className="font-handwriting"
            style={{
              fontSize: '1.4rem',
              color: '#D81B60',
              fontWeight: 700,
            }}
          >
            — With all my fondness &amp; respect.
          </div>
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
        <span>Turn to The Central Question</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
