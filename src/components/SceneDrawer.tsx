import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../context/PresentationContext';
import { SCENES, ACTS } from '../content/proposalData';
import { X, CheckCircle, Sparkles } from 'lucide-react';

export const SceneDrawer: React.FC = () => {
  const { drawerOpen, setDrawerOpen, currentSceneIndex, goToScene } = usePresentation();

  return (
    <AnimatePresence>
      {drawerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(10, 7, 14, 0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingBottom: 'var(--safe-bottom)',
          }}
          onClick={() => setDrawerOpen(false)}
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '560px',
              maxHeight: '82vh',
              background: '#1A1423',
              borderTopLeftRadius: '28px',
              borderTopRightRadius: '28px',
              border: '1px solid rgba(224, 195, 252, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 -15px 40px rgba(0,0,0,0.6)',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '18px 22px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.15rem', color: '#FDFBFF', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={18} color="#FFB7C5" /> Table of Contents
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#847693', marginTop: '2px' }}>
                  A Cat-Meme Story • {ACTS.length} Parts • {SCENES.length} Scenes
                </p>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  color: '#FDFBFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* List of Acts & Scenes */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {ACTS.map((act) => {
                const actScenes = SCENES.filter((s) => s.actId === act.id);
                return (
                  <div key={act.id}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '8px',
                        paddingBottom: '4px',
                        borderBottom: `2px solid ${act.accentColor}33`,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            color: act.accentColor,
                            letterSpacing: '0.08em',
                          }}
                        >
                          {act.actNumber}
                        </span>
                        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FDFBFF' }}>
                          {act.title}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          background: `${act.accentColor}22`,
                          color: act.accentColor,
                          padding: '2px 8px',
                          borderRadius: '10px',
                          fontWeight: 600,
                        }}
                      >
                        {act.badge}
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '6px' }}>
                      {actScenes.map((scene) => {
                        const sceneIndex = SCENES.findIndex((s) => s.id === scene.id);
                        const isCurrent = sceneIndex === currentSceneIndex;
                        const isPast = sceneIndex < currentSceneIndex;

                        return (
                          <div
                            key={scene.id}
                            onClick={() => goToScene(sceneIndex)}
                            style={{
                              padding: '10px 14px',
                              borderRadius: '12px',
                              background: isCurrent
                                ? 'rgba(255, 183, 197, 0.15)'
                                : 'rgba(255, 255, 255, 0.03)',
                              border: isCurrent
                                ? '1px solid #FFB7C5'
                                : '1px solid rgba(255, 255, 255, 0.05)',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <span
                                style={{
                                  fontSize: '0.72rem',
                                  fontWeight: 700,
                                  color: isCurrent ? '#FFB7C5' : '#847693',
                                  width: '20px',
                                }}
                              >
                                {String(scene.sceneNumber).padStart(2, '0')}
                              </span>
                              <div>
                                <div
                                  style={{
                                    fontSize: '0.84rem',
                                    fontWeight: isCurrent ? 700 : 500,
                                    color: isCurrent ? '#FFB7C5' : '#FDFBFF',
                                  }}
                                >
                                  {scene.title}
                                </div>
                                <div style={{ fontSize: '0.7rem', color: '#847693' }}>
                                  {scene.subtitle}
                                </div>
                              </div>
                            </div>
                            {isPast && <CheckCircle size={15} color="#38E09A" />}
                            {isCurrent && (
                              <span
                                style={{
                                  fontSize: '0.68rem',
                                  background: '#FFB7C5',
                                  color: '#1E1624',
                                  fontWeight: 700,
                                  padding: '2px 8px',
                                  borderRadius: '999px',
                                }}
                              >
                                Current
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
