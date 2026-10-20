import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Crown, Sparkles, Heart, Star, ArrowRight, Cat } from 'lucide-react';

export const CandidateBScene: React.FC = () => {
  const { nextScene } = usePresentation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Header with EXACT required title */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#FF2A85',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <Crown size={14} /> VIP DOSSIER // CHIEF INSPIRATION
        </div>
        {/* Exact Title as strictly specified */}
        <h1
          className="font-marathi"
          style={{
            fontSize: 'clamp(2.4rem, 8vw, 3.4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #FFFFFF 20%, #FFB7C5 60%, #FF2A85 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.02em',
          }}
        >
          बाळ
        </h1>
      </div>

      {/* Main Scrapbook Panel with stickers and personal appreciation */}
      <div
        className="glass-panel"
        style={{
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255, 42, 133, 0.35)',
          boxShadow: '0 12px 35px rgba(255, 42, 133, 0.2)',
          maxHeight: '390px',
          overflowY: 'auto',
        }}
      >
        {/* Decorative Cat Sticker */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            background: 'rgba(255, 183, 197, 0.2)',
            border: '1px dashed #FFB7C5',
            padding: '4px 10px',
            borderRadius: '999px',
            fontSize: '0.72rem',
            color: '#FFB7C5',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <Cat size={13} /> September 4 Royalty
        </div>

        {/* Introduction */}
        <p style={{ color: '#FDFBFF', fontSize: '0.94rem', lineHeight: 1.6, fontWeight: 500 }}>
          The heart and spark of this entire project. A brilliant mind, an effortless laugh, and someone whose presence genuinely makes any room brighter.
        </p>

        {/* Genuine Qualities Scrapbook Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
          <div
            style={{
              padding: '12px 14px',
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '12px',
              borderLeft: '3px solid #FF2A85',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFB7C5', fontWeight: 700, fontSize: '0.85rem' }}>
              <Sparkles size={14} /> Fierce Intellect &amp; Independence
            </div>
            <p style={{ color: '#D8CCE6', fontSize: '0.8rem', marginTop: '3px', lineHeight: 1.45 }}>
              Sharp, ambitious, and driven. You have clear goals and a strong sense of self that commands effortless respect.
            </p>
          </div>

          <div
            style={{
              padding: '12px 14px',
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '12px',
              borderLeft: '3px solid #E0C3FC',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#E0C3FC', fontWeight: 700, fontSize: '0.85rem' }}>
              <Heart size={14} /> Infectious Warmth &amp; Humor
            </div>
            <p style={{ color: '#D8CCE6', fontSize: '0.8rem', marginTop: '3px', lineHeight: 1.45 }}>
              You don&apos;t take yourself too seriously. You laugh easily, share great jokes, and make even an ordinary ride feel memorable.
            </p>
          </div>

          <div
            style={{
              padding: '12px 14px',
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '12px',
              borderLeft: '3px solid #38E09A',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#38E09A', fontWeight: 700, fontSize: '0.85rem' }}>
              <Star size={14} /> Impeccable Aesthetic &amp; Feline Soul
            </div>
            <p style={{ color: '#D8CCE6', fontSize: '0.8rem', marginTop: '3px', lineHeight: 1.45 }}>
              From crochet cat-ear clips to spotting cats on the road, your aesthetic taste and love for animals is truly 10/10.
            </p>
          </div>
        </div>

        {/* Small personal appreciation note */}
        <div
          className="paper-sheet"
          style={{
            padding: '12px 14px',
            background: '#FFFDF9',
            color: '#231C18',
            borderRadius: '10px',
            border: '1px solid #E8E0D2',
          }}
        >
          <p
            className="font-handwriting"
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.35,
              color: '#D81B60',
              fontWeight: 600,
            }}
          >
            &ldquo;You never have to perform or pretend. You are simply wonderful just being you.&rdquo;
          </p>
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
          background: 'linear-gradient(135deg, #FF2A85, #FFB7C5)',
          border: 'none',
          color: '#FFF',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(255, 42, 133, 0.35)',
        }}
      >
        <span>Examine The Proposed Duo</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
