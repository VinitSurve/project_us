import React from 'react';
import { motion } from 'framer-motion';
import { AssetSlot, ASSET_REGISTRY } from '../config/assets';
import { Camera, Cat, Image as ImageIcon, Sparkles } from 'lucide-react';

interface AssetPlaceholderProps {
  slotKey: keyof typeof ASSET_REGISTRY | string;
  customSlot?: AssetSlot;
  height?: string;
  width?: string;
  style?: React.CSSProperties;
  className?: string;
  tiltAngle?: number;
}

export const AssetPlaceholder: React.FC<AssetPlaceholderProps> = ({
  slotKey,
  customSlot,
  height = '160px',
  width = '100%',
  style = {},
  className = '',
  tiltAngle = 0,
}) => {
  const slot: AssetSlot =
    customSlot ||
    ASSET_REGISTRY[slotKey] || {
      id: slotKey,
      category: 'meme',
      title: 'Cat Meme / Photo Placeholder',
      description: 'Asset placeholder',
      suggestedFileName: `src/assets/${slotKey}.jpg`,
      defaultMemeEmoji: '🐱',
      accentColor: '#FFB7C5',
    };

  // If actual image source exists and is not empty, render real image
  if (slot.src) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, rotate: tiltAngle }}
        style={{
          width,
          height,
          borderRadius: '16px',
          overflow: 'hidden',
          border: `2px solid ${slot.accentColor}44`,
          boxShadow: `0 8px 24px ${slot.accentColor}25`,
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...style,
        }}
        className={className}
      >
        <img
          src={slot.src}
          alt={slot.title}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </motion.div>
    );
  }

  // Render stylized, intentional aesthetic placeholder
  const isPhoto = slot.category === 'photo';

  return (
    <motion.div
      whileHover={{ scale: 1.02, rotate: tiltAngle ? tiltAngle * 1.2 : 0 }}
      style={{
        width,
        minHeight: height,
        borderRadius: '18px',
        background: isPhoto
          ? 'linear-gradient(145deg, rgba(45, 31, 54, 0.8), rgba(26, 18, 32, 0.95))'
          : 'linear-gradient(145deg, rgba(38, 28, 48, 0.8), rgba(20, 15, 26, 0.95))',
        border: `1.5px dashed ${slot.accentColor}55`,
        boxShadow: `0 8px 25px ${slot.accentColor}15, inset 0 0 30px rgba(0, 0, 0, 0.4)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        textAlign: 'center',
        position: 'relative',
        transform: tiltAngle ? `rotate(${tiltAngle}deg)` : undefined,
        transition: 'border 0.2s ease, transform 0.2s ease',
        cursor: 'default',
        userSelect: 'none',
        ...style,
      }}
      className={className}
    >
      {/* Category Badge */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '0.64rem',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          color: slot.accentColor,
          background: `${slot.accentColor}18`,
          padding: '3px 8px',
          borderRadius: '6px',
          border: `1px solid ${slot.accentColor}33`,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        {isPhoto ? <Camera size={11} /> : <Cat size={11} />}
        <span>{isPhoto ? 'Photo Slot' : 'Cat Meme Slot'}</span>
      </div>

      {/* Center Emoji / Visual Icon */}
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${slot.accentColor}25 0%, rgba(0,0,0,0.3) 70%)`,
          border: `1px solid ${slot.accentColor}44`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          marginBottom: '8px',
          marginTop: '12px',
          boxShadow: `0 0 18px ${slot.accentColor}22`,
        }}
      >
        {slot.defaultMemeEmoji}
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: '0.84rem',
          fontWeight: 800,
          color: '#FDFBFF',
          letterSpacing: '-0.01em',
        }}
      >
        {slot.title}
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: '0.72rem',
          color: '#A89BB5',
          marginTop: '3px',
          maxWidth: '320px',
          lineHeight: 1.35,
        }}
      >
        {slot.description}
      </div>

      {/* Filename hint for replacement */}
      <div
        style={{
          marginTop: '10px',
          fontSize: '0.62rem',
          fontFamily: 'var(--font-mono)',
          color: '#847693',
          background: 'rgba(0, 0, 0, 0.4)',
          padding: '2px 8px',
          borderRadius: '4px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        📁 {slot.suggestedFileName}
      </div>
    </motion.div>
  );
};
