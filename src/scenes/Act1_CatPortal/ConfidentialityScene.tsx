import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { soundManager } from '../../utils/sound';
import { ScrollText, CheckSquare, Square, ArrowRight, Stamp } from 'lucide-react';

export const ConfidentialityScene: React.FC = () => {
  const { nextScene, unlockEasterEgg } = usePresentation();
  const [agreed, setAgreed] = useState(false);
  const [signed, setSigned] = useState(false);

  const handleSign = () => {
    soundManager.playBell();
    setAgreed(true);
    setSigned(true);
    unlockEasterEgg('nda-speedrunner');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#FFB7C5',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <ScrollText size={14} /> LEGAL DISCLOSURE (HIGHLY UNNECESSARY)
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 1.9rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Non-Disclosure & Feline Agreement
        </h2>
      </div>

      {/* Contract Parchment */}
      <div
        className="paper-sheet"
        style={{
          padding: '22px 20px',
          maxHeight: '340px',
          overflowY: 'auto',
          fontSize: '0.86rem',
          lineHeight: 1.6,
          position: 'relative',
        }}
      >
        <div style={{ textAlign: 'center', borderBottom: '1px solid #E8E0D2', paddingBottom: '10px', marginBottom: '14px' }}>
          <strong style={{ fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            FELINE NON-DISCLOSURE AGREEMENT (NDA-PURR-2026)
          </strong>
        </div>

        <p style={{ marginBottom: '12px' }}>
          <strong>WHEREAS:</strong> The Party of the First Part (The Proposer / Software Engineer) harbors sincere feelings and an ungodly amount of overthinking; and
        </p>

        <p style={{ marginBottom: '12px' }}>
          <strong>WHEREAS:</strong> The Party of the Second Part (बाळ) is uniquely wonderful, possesses impeccable taste in crochet cat clips, and possesses the sole authority to accept or deny this invitation;
        </p>

        <p style={{ marginBottom: '12px' }}>
          <strong>NOW THEREFORE:</strong> By proceeding past this barrier, you formally acknowledge and stipulate:
        </p>

        <ul style={{ paddingLeft: '20px', marginBottom: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>
            <strong>Clause 1.1 (Excessive Cats):</strong> The presence of an unreasonable quantity of cat memes, gifs, and feline commentary cannot be held against the creator in court.
          </li>
          <li>
            <strong>Clause 1.2 (Overengineering):</strong> The creator acknowledges that a normal person would have simply sent a WhatsApp message asking: &ldquo;Hey, want to grab coffee?&rdquo; instead of building an entire interactive web application.
          </li>
          <li>
            <strong>Clause 1.3 (Zero Coercion):</strong> Your comfort, boundaries, and freedom of choice are sacred. You are under absolutely zero obligation to say yes, feel awkward, or change your friendship.
          </li>
          <li>
            <strong>Clause 1.4 (Tea Compensation):</strong> In the event of catastrophic embarrassment, the creator agrees to buy cutting chai and listen quietly without further yapping.
          </li>
        </ul>

        {/* Digital Signature Stamp */}
        {signed && (
          <motion.div
            initial={{ scale: 2, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: -8 }}
            transition={{ type: 'spring', damping: 15 }}
            style={{
              marginTop: '10px',
              padding: '8px 14px',
              border: '2px solid #FF2A85',
              borderRadius: '8px',
              color: '#FF2A85',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 800,
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              background: 'rgba(255, 42, 133, 0.08)',
            }}
          >
            <Stamp size={16} /> SIGNED BY PAW PRINT OF बाळ
          </motion.div>
        )}
      </div>

      {/* Signature Interaction */}
      <div
        onClick={handleSign}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(224, 195, 252, 0.2)',
          borderRadius: '14px',
          padding: '12px 16px',
          cursor: 'pointer',
        }}
      >
        <button
          style={{
            background: 'none',
            border: 'none',
            color: agreed ? '#38E09A' : '#847693',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          {agreed ? <CheckSquare size={22} color="#38E09A" /> : <Square size={22} />}
        </button>
        <span style={{ fontSize: '0.86rem', color: agreed ? '#FDFBFF' : '#BDB0C9' }}>
          I hereby accept the Terms of Purr-posal and consent to receiving romantic slides.
        </span>
      </div>

      {/* Proceed */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={nextScene}
        disabled={!agreed}
        style={{
          width: '100%',
          padding: '16px',
          borderRadius: '16px',
          background: agreed
            ? 'linear-gradient(135deg, #FFB7C5, #E0C3FC)'
            : 'rgba(255, 255, 255, 0.05)',
          border: 'none',
          color: agreed ? '#1E1624' : '#5A4F68',
          fontWeight: 800,
          fontSize: '0.96rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: agreed ? 'pointer' : 'default',
          boxShadow: agreed ? '0 8px 25px rgba(255, 183, 197, 0.35)' : 'none',
        }}
      >
        <span>Proceed to Executive Summary</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
