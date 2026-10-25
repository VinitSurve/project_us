import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../context/PresentationContext';
import { SceneNavigation } from './SceneNavigation';
import { CatCompanion } from './CatCompanion';
import { SceneDrawer } from './SceneDrawer';
import { SystemInterruptionModal } from './SystemInterruptionModal';
import { ImageLightboxModal } from './ImageLightboxModal';

interface PresentationShellProps {
  children: React.ReactNode;
}

export const PresentationShell: React.FC<PresentationShellProps> = ({ children }) => {
  const { currentSceneIndex, currentAct, nextScene, prevScene, canGoNext, canGoPrev } = usePresentation();

  // Touch gesture handling that preserves vertical scrolling inside scenes
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Only register horizontal swipe if horizontal movement is significantly greater than vertical movement
    if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0 && canGoNext) {
        nextScene();
      } else if (deltaX > 0 && canGoPrev) {
        prevScene();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        width: '100vw',
        height: '100dvh', // Modern dynamic viewport height for mobile browsers
        position: 'relative',
        overflow: 'hidden',
        background: '#120E17',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Dynamic Ambient Background Glow tied to Act Accent Color */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '60vw',
            height: '60vw',
            maxWidth: '500px',
            maxHeight: '500px',
            borderRadius: '50%',
            background: currentAct.accentColor,
            filter: 'blur(120px)',
            opacity: 0.16,
            transition: 'background 0.8s ease, opacity 0.8s ease',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-10%',
            width: '50vw',
            height: '50vw',
            maxWidth: '400px',
            maxHeight: '400px',
            borderRadius: '50%',
            background: '#FF2A85',
            filter: 'blur(130px)',
            opacity: 0.12,
            transition: 'opacity 0.8s ease',
          }}
        />
        {/* Subtle grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(rgba(224, 195, 252, 0.08) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            opacity: 0.6,
          }}
        />
      </div>

      {/* Main Presentation Viewport */}
      <main
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          position: 'relative',
          zIndex: 10,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSceneIndex}
            initial={{ opacity: 0, x: 20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '100%',
              height: '100%',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              display: 'flex',
              flexDirection: 'column',
              paddingTop: 'calc(var(--safe-top) + 64px)',
              paddingBottom: 'calc(var(--safe-bottom) + 84px)',
              paddingLeft: '16px',
              paddingRight: '16px',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '680px',
                margin: '0 auto',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {children}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Interactive Desktop Cat Companion */}
      <CatCompanion />

      {/* Presentation Global Navigation */}
      <SceneNavigation />

      {/* Table of Contents Drawer */}
      <SceneDrawer />

      {/* Fictional System Alert Modals */}
      <SystemInterruptionModal />

      {/* Fullscreen Photo Lightbox Modal */}
      <ImageLightboxModal />
    </div>
  );
};
