import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../context/PresentationContext';
import { X, ZoomIn, Heart } from 'lucide-react';

export const ImageLightboxModal: React.FC = () => {
  const { lightboxItem, closeLightbox } = usePresentation();

  return (
    <AnimatePresence>
      {lightboxItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 120,
            background: 'rgba(10, 7, 14, 0.88)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            touchAction: 'none',
          }}
        >
          {/* Close Button Top Right */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            style={{
              position: 'absolute',
              top: 'calc(var(--safe-top) + 16px)',
              right: '20px',
              zIndex: 125,
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              color: '#FDFBFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
            }}
          >
            <X size={20} />
          </motion.button>

          {/* Modal Content Box */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 183, 197, 0.15)',
                border: '1px solid rgba(255, 183, 197, 0.3)',
                background: '#0F0B14',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={lightboxItem.src}
                alt={lightboxItem.title || 'Photo'}
                style={{
                  maxHeight: '68vh',
                  maxWidth: '88vw',
                  objectFit: 'contain',
                  display: 'block',
                  userSelect: 'none',
                }}
              />
            </div>

            {/* Caption beneath */}
            {(lightboxItem.title || lightboxItem.caption) && (
              <div
                style={{
                  marginTop: '12px',
                  textAlign: 'center',
                  maxWidth: '480px',
                  padding: '6px 14px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {lightboxItem.title && (
                  <div
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 800,
                      color: '#FDFBFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                    }}
                  >
                    <Heart size={14} fill="#FFB7C5" color="#FFB7C5" />
                    <span>{lightboxItem.title}</span>
                  </div>
                )}
                {lightboxItem.caption && (
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: '#BDB0C9',
                      marginTop: '3px',
                      lineHeight: 1.4,
                    }}
                  >
                    {lightboxItem.caption}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
