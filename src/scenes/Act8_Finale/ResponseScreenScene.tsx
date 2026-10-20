import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { ProposalResponse } from '../../types/presentation';
import { soundManager } from '../../utils/sound';
import confetti from 'canvas-confetti';
import { CheckCircle2, Heart, Clock, Coffee, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export const ResponseScreenScene: React.FC = () => {
  const { userResponse, setUserResponse, nextScene } = usePresentation();

  const handleSelectResponse = (type: ProposalResponse) => {
    setUserResponse(type);

    if (type === 'yes') {
      soundManager.playTada();
      // Burst celebratory colorful confetti!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFB7C5', '#E0C3FC', '#00F0FF', '#FFE600', '#FF2A85'],
      });
    } else {
      soundManager.playChime();
    }
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
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '4px',
          }}
        >
          <ShieldCheck size={14} /> BOARDROOM BALLOT // PRIVATE &amp; SECURE
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Your Decision
        </h2>
      </div>

      {/* Main Glass Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          maxHeight: '400px',
          overflowY: 'auto',
        }}
      >
        <p style={{ color: '#D8CCE6', fontSize: '0.86rem', lineHeight: 1.5 }}>
          Please select whichever response feels true and comfortable to you. There are no wrong answers:
        </p>

        {/* 4 Dignified Response Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Option 1: YES */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => handleSelectResponse('yes')}
            style={{
              padding: '14px 16px',
              borderRadius: '14px',
              background: userResponse === 'yes' ? 'rgba(56, 224, 154, 0.2)' : 'rgba(255, 255, 255, 0.04)',
              border: userResponse === 'yes' ? '2px solid #38E09A' : '1px solid rgba(224, 195, 252, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              color: '#FDFBFF',
              textAlign: 'left',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Coffee size={20} color="#38E09A" />
              <div>
                <strong style={{ fontSize: '0.9rem', display: 'block', color: '#FDFBFF' }}>
                  &ldquo;Yes, let&apos;s go on a proper date! ☕✨&rdquo;
                </strong>
                <span style={{ fontSize: '0.74rem', color: '#BDB0C9' }}>
                  Pilot program approved. Bring on the chai and good vibes.
                </span>
              </div>
            </div>
            {userResponse === 'yes' && <CheckCircle2 size={18} color="#38E09A" />}
          </motion.button>

          {/* Option 2: Slow / Talk first */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => handleSelectResponse('slow')}
            style={{
              padding: '14px 16px',
              borderRadius: '14px',
              background: userResponse === 'slow' ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)',
              border: userResponse === 'slow' ? '2px solid #00F0FF' : '1px solid rgba(224, 195, 252, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              color: '#FDFBFF',
              textAlign: 'left',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Sparkles size={20} color="#00F0FF" />
              <div>
                <strong style={{ fontSize: '0.9rem', display: 'block', color: '#FDFBFF' }}>
                  &ldquo;I&apos;d love to, but let&apos;s talk &amp; take it slow first 💭&rdquo;
                </strong>
                <span style={{ fontSize: '0.74rem', color: '#BDB0C9' }}>
                  Let&apos;s chat without rushing or putting labels on things.
                </span>
              </div>
            </div>
            {userResponse === 'slow' && <CheckCircle2 size={18} color="#00F0FF" />}
          </motion.button>

          {/* Option 3: Need time */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => handleSelectResponse('think')}
            style={{
              padding: '14px 16px',
              borderRadius: '14px',
              background: userResponse === 'think' ? 'rgba(255, 230, 0, 0.2)' : 'rgba(255, 255, 255, 0.04)',
              border: userResponse === 'think' ? '2px solid #FFE600' : '1px solid rgba(224, 195, 252, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              color: '#FDFBFF',
              textAlign: 'left',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Clock size={20} color="#FFE600" />
              <div>
                <strong style={{ fontSize: '0.9rem', display: 'block', color: '#FDFBFF' }}>
                  &ldquo;I need some time to think about this 🌿&rdquo;
                </strong>
                <span style={{ fontSize: '0.74rem', color: '#BDB0C9' }}>
                  Completely fair. Take all the quiet space you need.
                </span>
              </div>
            </div>
            {userResponse === 'think' && <CheckCircle2 size={18} color="#FFE600" />}
          </motion.button>

          {/* Option 4: Cherish friendship */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => handleSelectResponse('friends')}
            style={{
              padding: '14px 16px',
              borderRadius: '14px',
              background: userResponse === 'friends' ? 'rgba(255, 183, 197, 0.2)' : 'rgba(255, 255, 255, 0.04)',
              border: userResponse === 'friends' ? '2px solid #FFB7C5' : '1px solid rgba(224, 195, 252, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              color: '#FDFBFF',
              textAlign: 'left',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Heart size={20} color="#FFB7C5" />
              <div>
                <strong style={{ fontSize: '0.9rem', display: 'block', color: '#FDFBFF' }}>
                  &ldquo;I cherish our friendship and prefer to stay friends 💛&rdquo;
                </strong>
                <span style={{ fontSize: '0.74rem', color: '#BDB0C9' }}>
                  Our bond remains intact. You will always have a loyal friend.
                </span>
              </div>
            </div>
            {userResponse === 'friends' && <CheckCircle2 size={18} color="#FFB7C5" />}
          </motion.button>
        </div>

        {/* Custom Feedback based on selection */}
        <AnimatePresence>
          {userResponse && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: '10px',
                padding: '14px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px dashed rgba(224, 195, 252, 0.3)',
                borderRadius: '12px',
                fontSize: '0.86rem',
                lineHeight: 1.55,
                color: '#FDFBFF',
              }}
            >
              {userResponse === 'yes' && (
                <div>
                  🎉 <strong>Wonderful!</strong> I am truly excited. I&apos;ll plan a relaxed, memorable date with great tea, zero stress, and all the time in the world. Thank you for taking this leap with me!
                </div>
              )}
              {userResponse === 'slow' && (
                <div>
                  🌱 <strong>Sounds perfect.</strong> No pressure at all. Let&apos;s just talk and see where life flows naturally, exactly at the pace you&apos;re comfortable with.
                </div>
              )}
              {userResponse === 'think' && (
                <div>
                  🕊️ <strong>Take all the time you want.</strong> There is zero urgency or ticking clock. Whenever you want to chat about it (or not chat about it), I am right here.
                </div>
              )}
              {userResponse === 'friends' && (
                <div>
                  💛 <strong>Thank you deeply for your honesty.</strong> Our friendship means the world to me, and nothing changes that. I&apos;m grateful for you, and you will always have a supporter in your corner.
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
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
        <span>Roll The Executive Credits</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};
