import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { ProposalResponse } from '../../types/presentation';
import { soundManager } from '../../utils/sound';
import confetti from 'canvas-confetti';
import { CheckCircle2, Heart, Clock, Coffee, Sparkles, ArrowRight } from 'lucide-react';

export const ResponseScreenScene: React.FC = () => {
  const { userResponse, setUserResponse, nextScene } = usePresentation();

  const handleSelectResponse = (type: ProposalResponse) => {
    setUserResponse(type);

    if (type === 'yes') {
      soundManager.playTada();
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FFB7C5', '#E0C3FC', '#00F0FF', '#FFE600', '#FF2A85'],
      });
    } else {
      soundManager.playChime();
    }
  };

  const OPTIONS: {
    type: ProposalResponse;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    color: string;
  }[] = [
    {
      type: 'yes',
      icon: <Coffee size={18} color="#38E09A" />,
      title: "Yes, let's go on a proper date! ☕✨",
      subtitle: "Chai, good food, and zero expectations.",
      color: '#38E09A',
    },
    {
      type: 'slow',
      icon: <Sparkles size={18} color="#00F0FF" />,
      title: "I'd love to, but let's talk & take it slow 💭",
      subtitle: "Just chatting and seeing where things go naturally.",
      color: '#00F0FF',
    },
    {
      type: 'think',
      icon: <Clock size={18} color="#FFE600" />,
      title: "I need some time to think about this 🌿",
      subtitle: "Zero rush. Take all the quiet space you need.",
      color: '#FFE600',
    },
    {
      type: 'friends',
      icon: <Heart size={18} color="#FFB7C5" />,
      title: "I cherish our friendship and prefer staying friends 💛",
      subtitle: "Our bond stays unchanged and fully respected.",
      color: '#FFB7C5',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Header */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#FFB7C5',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '4px',
          }}
        >
          HONEST SPACE // ZERO PRESSURE
        </div>
        <h2 style={{ fontSize: 'clamp(1.3rem, 4.5vw, 1.85rem)', fontWeight: 800, color: '#FDFBFF' }}>
          Your Decision
        </h2>
        <p style={{ color: '#A89BB5', fontSize: '0.8rem', marginTop: '2px' }}>
          Choose what feels natural and comfortable. There are no wrong answers.
        </p>
      </div>

      {/* 4 Dignified Response Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {OPTIONS.map((opt) => {
          const isSelected = userResponse === opt.type;
          return (
            <motion.button
              key={opt.type}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelectResponse(opt.type)}
              style={{
                padding: '12px 14px',
                borderRadius: '12px',
                background: isSelected ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                border: isSelected ? `2px solid ${opt.color}` : '1px solid rgba(224, 195, 252, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                textAlign: 'left',
                boxShadow: isSelected ? `0 0 16px ${opt.color}25` : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: `${opt.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {opt.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FDFBFF' }}>
                    {opt.title}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#9E90AD', marginTop: '1px' }}>
                    {opt.subtitle}
                  </div>
                </div>
              </div>
              {isSelected && <CheckCircle2 size={18} color={opt.color} style={{ flexShrink: 0 }} />}
            </motion.button>
          );
        })}
      </div>

      {/* Feedback Note */}
      <AnimatePresence mode="wait">
        {userResponse && (
          <motion.div
            key={userResponse}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            style={{
              padding: '12px 14px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px dashed rgba(224, 195, 252, 0.25)',
              borderRadius: '10px',
              fontSize: '0.82rem',
              lineHeight: 1.5,
              color: '#FDFBFF',
            }}
          >
            {userResponse === 'yes' && (
              <span>🎉 <strong>Wonderful!</strong> I am truly excited. Chai, good conversation, and zero pressure. Thank you!</span>
            )}
            {userResponse === 'slow' && (
              <span>🌱 <strong>Sounds perfect.</strong> No pressure at all. Let&apos;s just talk and see where life flows naturally.</span>
            )}
            {userResponse === 'think' && (
              <span>🌿 <strong>Take all the time you need.</strong> Zero ticking clock. Whenever you&apos;re ready, I&apos;m right here.</span>
            )}
            {userResponse === 'friends' && (
              <span>💛 <strong>Thank you deeply for your honesty.</strong> Our friendship means the world to me, and that never changes.</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={nextScene}
        style={{
          marginTop: '4px',
          width: '100%',
          padding: '13px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #FFB7C5, #E0C3FC)',
          border: 'none',
          color: '#1E1624',
          fontWeight: 800,
          fontSize: '0.88rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 18px rgba(255, 183, 197, 0.3)',
        }}
      >
        <span>Roll The Executive Credits</span>
        <ArrowRight size={16} />
      </motion.button>
    </div>
  );
};
