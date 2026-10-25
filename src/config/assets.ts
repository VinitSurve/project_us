/**
 * ASSET CONFIGURATION & MEME ASSET MAP
 * 
 * Dataset Source: https://huggingface.co/datasets/pielet/cat-memes
 * Creator: Shiyang Jia (https://huggingface.co/pielet)
 * License: MIT License
 * 
 * Assets are organized into scene-based categories:
 * - /public/memes/intro/     (Chaotic, keyboard cat, polite cat, screaming cat)
 * - /public/memes/lore/      (Chemistry cat, shocked cat, smug cat, two talking cats)
 * - /public/memes/reactions/ (Side-eye cat, huh cat, vibing cat, popcat, smudge cat)
 * - /public/memes/cute/      (Pat cat, happy cat, chipi chipi, smile cat, lil bub)
 * - /public/memes/romance/   (Kiss cat, touched crying cat)
 * - /public/memes/finale/    (Polite cat finale, celebrate dance cat)
 * - /public/photos/her/      (User personal photo slot for बाळ)
 * - /public/photos/together/ (User personal photo slot for us together)
 */

export interface AssetSlot {
  id: string;
  category: 'photo' | 'meme';
  title: string;
  description: string;
  suggestedFileName: string;
  defaultMemeEmoji: string;
  accentColor: string;
  aspectRatio?: 'square' | 'photo-vertical' | 'photo-horizontal' | 'video';
  src?: string; // Local public path
  attribution?: string;
}

export const DATASET_METADATA = {
  name: 'Cat Memes Dataset',
  id: 'pielet/cat-memes',
  url: 'https://huggingface.co/datasets/pielet/cat-memes',
  author: 'Shiyang Jia',
  license: 'MIT License',
};

export const ASSET_REGISTRY: Record<string, AssetSlot> = {
  // --- Personal Photos (Preserved as clearly designated placeholders) ---
  herPhoto: {
    id: 'her-photo',
    category: 'photo',
    title: 'Photo: बाळ',
    description: 'A favourite solo photo of her (smiling, candid, or stylish)',
    suggestedFileName: 'public/photos/her/bal_solo.jpg',
    defaultMemeEmoji: '✨',
    accentColor: '#FF2A85',
    aspectRatio: 'photo-vertical',
  },
  usTogetherHacknova: {
    id: 'us-together-hacknova',
    category: 'photo',
    title: 'Photo: Us Together (Hacknova)',
    description: 'Photo or selfie from the Hacknova hackathon',
    suggestedFileName: 'public/photos/together/hacknova.jpg',
    defaultMemeEmoji: '💻',
    accentColor: '#FFB7C5',
    aspectRatio: 'photo-horizontal',
  },
  usTogetherChai: {
    id: 'us-together-chai',
    category: 'photo',
    title: 'Photo: Late-Night Chai & Rides',
    description: 'Chai cups, evening roads, or moments together',
    suggestedFileName: 'public/photos/together/chai_rides.jpg',
    defaultMemeEmoji: '☕',
    accentColor: '#FFD3B6',
    aspectRatio: 'photo-horizontal',
  },
  usTogetherMoments: {
    id: 'us-together-moments',
    category: 'photo',
    title: 'Photo: Moments We Shared',
    description: 'A genuine photo of both of you together',
    suggestedFileName: 'public/photos/together/us_together.jpg',
    defaultMemeEmoji: '📸',
    accentColor: '#E0C3FC',
    aspectRatio: 'photo-horizontal',
  },

  // --- Curated Cat Memes (from pielet/cat-memes MIT dataset) ---
  introCatMeme: {
    id: 'intro-cat-meme',
    category: 'meme',
    title: 'Keyboard Cat',
    description: 'Typing intensely at 2 AM coding an entire presentation.',
    suggestedFileName: 'public/memes/intro/keyboard_cat.jpg',
    defaultMemeEmoji: '⌨️🐱',
    accentColor: '#FFE600',
    aspectRatio: 'photo-horizontal',
    src: '/memes/intro/keyboard_cat.jpg',
    attribution: 'pielet/cat-memes · Keyboard Cat',
  },
  summonsCatMeme: {
    id: 'summons-cat-meme',
    category: 'meme',
    title: 'Screaming Cat',
    description: 'You have been summoned. No turning back now.',
    suggestedFileName: 'public/memes/intro/screaming_cat.jpg',
    defaultMemeEmoji: '🙀🐾',
    accentColor: '#FFB7C5',
    aspectRatio: 'square',
    src: '/memes/intro/screaming_cat.jpg',
    attribution: 'pielet/cat-memes · Screaming Cat',
  },
  coverCatMeme: {
    id: 'cover-cat-meme',
    category: 'meme',
    title: 'Polite Cat (Beluga)',
    description: 'Looking expectant, polite, and hopeful.',
    suggestedFileName: 'public/memes/intro/polite_cat.webp',
    defaultMemeEmoji: '🎩🐱',
    accentColor: '#00F0FF',
    aspectRatio: 'square',
    src: '/memes/intro/polite_cat.webp',
    attribution: 'pielet/cat-memes · Polite Cat',
  },
  hacknovaCatMeme: {
    id: 'hacknova-cat-meme',
    category: 'meme',
    title: 'Chemistry Cat',
    description: 'Testing conversational chemistry under hackathon lights.',
    suggestedFileName: 'public/memes/lore/chemistry_cat.jpg',
    defaultMemeEmoji: '🧪😼',
    accentColor: '#00F0FF',
    aspectRatio: 'photo-horizontal',
    src: '/memes/lore/chemistry_cat.jpg',
    attribution: 'pielet/cat-memes · Chemistry Cat',
  },
  chaiRideCatMeme: {
    id: 'chai-ride-cat-meme',
    category: 'meme',
    title: 'Two Talking Cats',
    description: 'Taking the 45-minute scenic route because the talk never ended.',
    suggestedFileName: 'public/memes/lore/two_talking_cats.jpg',
    defaultMemeEmoji: '🛵😽',
    accentColor: '#FFD3B6',
    aspectRatio: 'photo-horizontal',
    src: '/memes/lore/two_talking_cats.jpg',
    attribution: 'pielet/cat-memes · Two Talking Cats',
  },
  gunaCatMeme: {
    id: 'guna-cat-meme',
    category: 'meme',
    title: 'Shocked Cat',
    description: 'When the 34/36 score broke the diagnostic scale.',
    suggestedFileName: 'public/memes/lore/shocked_cat.png',
    defaultMemeEmoji: '🙀🔮',
    accentColor: '#00F0FF',
    aspectRatio: 'photo-horizontal',
    src: '/memes/lore/shocked_cat.png',
    attribution: 'pielet/cat-memes · Shocked Cat',
  },
  insideJokeCatMeme: {
    id: 'inside-joke-cat-meme',
    category: 'meme',
    title: 'Smug Cat',
    description: 'When inside jokes hit our shared frequency.',
    suggestedFileName: 'public/memes/lore/smug_cat.jpg',
    defaultMemeEmoji: '😏🐱',
    accentColor: '#FFE600',
    aspectRatio: 'square',
    src: '/memes/lore/smug_cat.jpg',
    attribution: 'pielet/cat-memes · Smug Cat',
  },
  littleThingsCatMeme: {
    id: 'little-things-cat-meme',
    category: 'meme',
    title: 'Smiling Cat',
    description: 'Warm, authentic, and genuinely happy.',
    suggestedFileName: 'public/memes/cute/smile_cat.jpg',
    defaultMemeEmoji: '😸✨',
    accentColor: '#FFB7C5',
    aspectRatio: 'square',
    src: '/memes/cute/smile_cat.jpg',
    attribution: 'pielet/cat-memes · Smiling Cat',
  },
  duoCatMeme: {
    id: 'duo-cat-meme',
    category: 'meme',
    title: 'Chipi Chipi Cat',
    description: 'Pure energetic sunshine meeting an overthinker.',
    suggestedFileName: 'public/memes/cute/chipi_chipi_cat.webp',
    defaultMemeEmoji: '🎵🐈',
    accentColor: '#E0C3FC',
    aspectRatio: 'photo-horizontal',
    src: '/memes/cute/chipi_chipi_cat.webp',
    attribution: 'pielet/cat-memes · Chipi Chipi Cat',
  },
  pettingCatMeme: {
    id: 'petting-cat-meme',
    category: 'meme',
    title: 'Pat Cat',
    description: 'Gentle loving head pats.',
    suggestedFileName: 'public/memes/cute/pat_cat.png',
    defaultMemeEmoji: '🐾😻',
    accentColor: '#FFB7C5',
    aspectRatio: 'square',
    src: '/memes/cute/pat_cat.png',
    attribution: 'pielet/cat-memes · Pat Cat',
  },
  softSideCatMeme: {
    id: 'soft-side-cat-meme',
    category: 'meme',
    title: 'Crying Cat',
    description: 'The jokes are loud. The feeling is real.',
    suggestedFileName: 'public/memes/romance/crying_cat.webp',
    defaultMemeEmoji: '🥺🌸',
    accentColor: '#FFB7C5',
    aspectRatio: 'square',
    src: '/memes/romance/crying_cat.webp',
    attribution: 'pielet/cat-memes · Crying Cat',
  },
  proposalCatMeme: {
    id: 'proposal-cat-meme',
    category: 'meme',
    title: 'Polite Cat Asking',
    description: 'One honest question. No pressure. Just you.',
    suggestedFileName: 'public/memes/finale/polite_cat_finale.webp',
    defaultMemeEmoji: '🌹🐱',
    accentColor: '#FF2A85',
    aspectRatio: 'square',
    src: '/memes/finale/polite_cat_finale.webp',
    attribution: 'pielet/cat-memes · Polite Cat',
  },
  celebrateCatMeme: {
    id: 'celebrate-cat-meme',
    category: 'meme',
    title: 'Happy Happy Happy Cat',
    description: 'Jubilant jumping kitten celebration!',
    suggestedFileName: 'public/memes/finale/happy_celebrate.gif',
    defaultMemeEmoji: '🎉😻',
    accentColor: '#38E09A',
    aspectRatio: 'square',
    src: '/memes/finale/happy_celebrate.gif',
    attribution: 'pielet/cat-memes · Happy Cat GIF',
  },
  epilogueCatMeme: {
    id: 'epilogue-cat-meme',
    category: 'meme',
    title: 'Lil Bub',
    description: 'Resting peacefully. Always in your corner.',
    suggestedFileName: 'public/memes/cute/lil_bub.jpg',
    defaultMemeEmoji: '😴🐾',
    accentColor: '#E0C3FC',
    aspectRatio: 'square',
    src: '/memes/cute/lil_bub.jpg',
    attribution: 'pielet/cat-memes · Lil Bub',
  },
};
