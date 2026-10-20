import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../context/PresentationContext';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Menu, Sparkles } from 'lucide-react';

export const SceneNavigation: React.FC = () => {
  const {
    currentSceneIndex,
    totalScenes,
    currentAct,
    canGoNext,
    canGoPrev,
    nextScene,
    prevScene,
    isMuted,
    toggleSound,
    setDrawerOpen,
    progressPercent,
    unlockedCount,
  } = usePresentation();

  return (
    <>
      {/* Top micro status bar */}
      <div
        style={{
          position: 'fixed',
          top: 'calc(var(--safe-top) + 12px)',
          left: '16px',
          right: '16px',
          zIndex: 80,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <button
          onClick={() => setDrawerOpen(true)}
          style={{
            pointerEvents: 'auto',
            background: 'rgba(29, 23, 38, 0.75)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(224, 195, 252, 0.2)',
            borderRadius: '9999px',
            padding: '6px 14px',
            color: '#FDFBFF',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.75rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <Menu size={14} color="#E0C3FC" />
          <span style={{ color: currentAct.accentColor }}>{currentAct.actNumber}</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span style={{ color: '#BDB0C9' }}>{currentAct.title}</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', pointerEvents: 'auto' }}>
          {/* Easter Eggs Pill */}
          {unlockedCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              style={{
                background: 'rgba(255, 42, 133, 0.2)',
                border: '1px solid rgba(255, 42, 133, 0.4)',
                borderRadius: '9999px',
                padding: '4px 10px',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#FFB7C5',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Sparkles size={11} /> 🐾 {unlockedCount} Found
            </motion.div>
          )}

          {/* Sound Toggle Button */}
          <button
            onClick={toggleSound}
            aria-label={isMuted ? 'Unmute presentation sound' : 'Mute presentation sound'}
            style={{
              background: 'rgba(29, 23, 38, 0.75)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(224, 195, 252, 0.2)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isMuted ? '#847693' : '#38E09A',
              cursor: 'pointer',
            }}
            title={isMuted ? 'Sound is OFF. Tap to enable fun meows & chimes!' : 'Sound is ON.'}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </div>

      {/* Floating Bottom Navigation Bar */}
      <div
        style={{
          position: 'fixed',
          bottom: 'calc(var(--safe-bottom) + 14px)',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '520px',
          zIndex: 80,
          background: 'rgba(24, 18, 31, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(224, 195, 252, 0.2)',
          borderRadius: '24px',
          padding: '8px 12px',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.55), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Prev Button */}
        <button
          onClick={prevScene}
          disabled={!canGoPrev}
          aria-label="Previous scene"
          style={{
            background: canGoPrev ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
            border: 'none',
            color: canGoPrev ? '#FDFBFF' : '#5A4F68',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: canGoPrev ? 'pointer' : 'default',
            transition: 'all 0.2s ease',
          }}
        >
          <ChevronLeft size={22} />
        </button>

        {/* Scene progress & Scene Counter */}
        <div
          onClick={() => setDrawerOpen(true)}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            padding: '2px 12px',
          }}
        >
          <div style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.06em', color: '#FDFBFF' }}>
            SCENE {String(currentSceneIndex + 1).padStart(2, '0')}{' '}
            <span style={{ color: '#847693', fontWeight: 500 }}>/ {String(totalScenes).padStart(2, '0')}</span>
          </div>
          <div style={{ fontSize: '0.68rem', color: currentAct.accentColor, fontWeight: 600 }}>
            {currentAct.title}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextScene}
          disabled={!canGoNext}
          aria-label="Next scene"
          style={{
            background: canGoNext ? 'linear-gradient(135deg, #FFB7C5, #E0C3FC)' : 'rgba(255,255,255,0.05)',
            border: 'none',
            color: canGoNext ? '#1E1624' : '#5A4F68',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: canGoNext ? 'pointer' : 'default',
            fontWeight: 700,
            boxShadow: canGoNext ? '0 4px 14px rgba(255, 183, 197, 0.4)' : 'none',
            transition: 'all 0.2s ease',
          }}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Discreet bottom thin progress line */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'rgba(255, 255, 255, 0.08)',
          zIndex: 85,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progressPercent}%`,
            background: 'linear-gradient(90deg, #FFB7C5, #E0C3FC, #00F0FF)',
            transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>
    </>
  );
};
