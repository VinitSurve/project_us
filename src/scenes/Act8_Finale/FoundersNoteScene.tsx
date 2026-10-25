import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Heart } from 'lucide-react';

export const FoundersNoteScene: React.FC = () => {
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
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          width: '100%',
          maxWidth: '400px',
          background: '#FFFDF9',
          color: '#231C18',
          borderRadius: '24px',
          padding: '32px 26px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
          border: '1px solid #E8E0D2',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#D81B60', fontWeight: 800, fontSize: '1rem' }}>
          <Heart size={18} fill="#D81B60" />
          <span>Dear बाळ,</span>
        </div>

        <p style={{ fontSize: '0.98rem', lineHeight: 1.6, color: '#3A3027' }}>
          Behind all the cat memes, the jokes, and the overengineered code, the truth is very simple:
        </p>

        <p style={{ fontSize: '1.08rem', lineHeight: 1.5, color: '#D81B60', fontWeight: 700 }}>
          I genuinely really like you.
        </p>

        <p style={{ fontSize: '0.94rem', lineHeight: 1.6, color: '#3A3027' }}>
          Our conversations are my favorite part of any day. You make everything effortless, funny, and bright.
        </p>

        <p style={{ fontSize: '0.94rem', lineHeight: 1.6, color: '#3A3027' }}>
          Whatever you choose, you will always have someone in your corner who respects you and cherishes your presence.
        </p>

        <div style={{ marginTop: '8px', paddingTop: '12px', borderTop: '1px dashed #E0C3FC' }}>
          <div
            className="font-handwriting"
            style={{
              fontSize: '1.45rem',
              color: '#D81B60',
              fontWeight: 700,
            }}
          >
            — With all my fondness. ✨
          </div>
        </div>
      </motion.div>
    </div>
  );
};
