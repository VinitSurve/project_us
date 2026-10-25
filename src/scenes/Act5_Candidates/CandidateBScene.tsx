import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Cat } from 'lucide-react';
import { AssetPlaceholder } from '../../components/AssetPlaceholder';

export const CandidateBScene: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '12px',
        padding: '6px 0',
      }}
    >
      <div>
        {/* Exact Required Title */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="font-marathi"
          style={{
            fontSize: 'clamp(2.6rem, 9vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1,
            background: 'linear-gradient(135deg, #FFFFFF 20%, #FFB7C5 70%, #FF2A85 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.02em',
          }}
        >
          बाळ
        </motion.h1>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.72rem',
            color: '#FFB7C5',
            background: 'rgba(255, 42, 133, 0.15)',
            padding: '2px 10px',
            borderRadius: '999px',
            marginTop: '2px',
            fontWeight: 700,
          }}
        >
          <Cat size={12} /> September 4 Royalty ✨
        </div>
      </div>

      {/* Her Photo Placeholder Slot */}
      <AssetPlaceholder
        slotKey="herPhoto"
        height="140px"
        width="100%"
        style={{ maxWidth: '380px' }}
      />

      {/* Intimate Warm Scrapbook Card */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          width: '100%',
          maxWidth: '380px',
          background: 'linear-gradient(145deg, #201529, #150E1C)',
          border: '1px solid rgba(255, 183, 197, 0.35)',
          borderRadius: '18px',
          padding: '16px 18px',
          boxShadow: '0 12px 30px rgba(255, 42, 133, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFB7C5', fontSize: '0.82rem', fontWeight: 700 }}>
          <Sparkles size={14} /> Fierce intellect &amp; independent drive.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E0C3FC', fontSize: '0.82rem', fontWeight: 700 }}>
          <Heart size={14} /> Effortless warmth that brightens any room.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38E09A', fontSize: '0.82rem', fontWeight: 700 }}>
          <Cat size={14} /> Iconic aesthetic &amp; undeniable cat whisperer.
        </div>

        <div
          style={{
            marginTop: '6px',
            paddingTop: '8px',
            borderTop: '1px dashed rgba(255, 255, 255, 0.1)',
          }}
        >
          <p
            className="font-handwriting"
            style={{
              fontSize: '1.25rem',
              color: '#FFB7C5',
              lineHeight: 1.35,
              fontWeight: 700,
            }}
          >
            &ldquo;You never have to perform or pretend. You are simply wonderful being you.&rdquo;
          </p>
        </div>
      </motion.div>
    </div>
  );
};
