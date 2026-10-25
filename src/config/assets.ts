/**
 * ASSET CONFIGURATION & PLACEHOLDER REGISTRY
 * 
 * Organized according to the project asset mapping:
 * - Cat Memes: `/public/memes/{intro,lore,reactions,cute,romance,finale}/`
 * - Photos: `/public/photos/{her,together}/`
 * 
 * To replace placeholders with real photos or memes:
 * Drop the file into the corresponding folder and update `src` below.
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
  src?: string; // Pointing to public/ assets
}

export const ASSET_REGISTRY: Record<string, AssetSlot> = {
  // Photos (Placeholders until user provides personal photos)
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

  // Cat Memes (Pre-wired with starter SVG cat-meme pack)
  introCatMeme: {
    id: 'intro-cat-meme',
    category: 'meme',
    title: 'Meme: Overwhelmed Coder Cat',
    description: 'I came here to be normal. The cat had other plans.',
    suggestedFileName: 'public/memes/intro/starter_cat_meme.svg',
    defaultMemeEmoji: '⌨️🐱',
    accentColor: '#FFE600',
    aspectRatio: 'photo-horizontal',
    src: '/memes/intro/starter_cat_meme.svg',
  },
  summonsCatMeme: {
    id: 'summons-cat-meme',
    category: 'meme',
    title: 'Meme: You Have Been Chosen',
    description: 'You have been formally summoned by a cat.',
    suggestedFileName: 'public/memes/intro/starter_cat_meme.svg',
    defaultMemeEmoji: '🐾😸',
    accentColor: '#FFB7C5',
    aspectRatio: 'square',
    src: '/memes/intro/starter_cat_meme.svg',
  },
  coverCatMeme: {
    id: 'cover-cat-meme',
    category: 'meme',
    title: 'Meme: Polite Cat (Beluga)',
    description: 'Looking expectant and hopeful.',
    suggestedFileName: 'public/memes/intro/starter_cat_meme.svg',
    defaultMemeEmoji: '🎩🐱',
    accentColor: '#00F0FF',
    aspectRatio: 'square',
    src: '/memes/intro/starter_cat_meme.svg',
  },
  hacknovaCatMeme: {
    id: 'hacknova-cat-meme',
    category: 'meme',
    title: 'Meme: Hackathon Hacker Cat',
    description: 'When the lore gets so specific only two people understand.',
    suggestedFileName: 'public/memes/lore/starter_cat_meme.svg',
    defaultMemeEmoji: '🕶️😼',
    accentColor: '#00F0FF',
    aspectRatio: 'photo-horizontal',
    src: '/memes/lore/starter_cat_meme.svg',
  },
  chaiRideCatMeme: {
    id: 'chai-ride-cat-meme',
    category: 'meme',
    title: 'Meme: Cat in Passenger Seat',
    description: 'Taking the 45-minute scenic route for one more topic.',
    suggestedFileName: 'public/memes/lore/starter_cat_meme.svg',
    defaultMemeEmoji: '🛵😽',
    accentColor: '#FFD3B6',
    aspectRatio: 'photo-horizontal',
    src: '/memes/lore/starter_cat_meme.svg',
  },
  gunaCatMeme: {
    id: 'guna-cat-meme',
    category: 'meme',
    title: 'Meme: Shocked Cat / Cosmic Siren',
    description: 'When the score broke the diagnostic scale.',
    suggestedFileName: 'public/memes/lore/starter_cat_meme.svg',
    defaultMemeEmoji: '🙀🔮',
    accentColor: '#00F0FF',
    aspectRatio: 'photo-horizontal',
    src: '/memes/lore/starter_cat_meme.svg',
  },
  insideJokeCatMeme: {
    id: 'inside-joke-cat-meme',
    category: 'meme',
    title: 'Meme: Smug Cat Who Knows Lore',
    description: 'Inside jokes & brainrot on our shared frequency.',
    suggestedFileName: 'public/memes/lore/starter_cat_meme.svg',
    defaultMemeEmoji: '😏🐱',
    accentColor: '#FFE600',
    aspectRatio: 'square',
    src: '/memes/lore/starter_cat_meme.svg',
  },
  littleThingsCatMeme: {
    id: 'little-things-cat-meme',
    category: 'meme',
    title: 'Meme: Cat with Crochet Ears',
    description: 'No thoughts. Just happy to see you.',
    suggestedFileName: 'public/memes/cute/starter_cat_meme.svg',
    defaultMemeEmoji: '🧶😻',
    accentColor: '#FFB7C5',
    aspectRatio: 'square',
    src: '/memes/cute/starter_cat_meme.svg',
  },
  duoCatMeme: {
    id: 'duo-cat-meme',
    category: 'meme',
    title: 'Meme: Orange Cat & Calm Cat',
    description: 'One chronic overthinker + one effortless ray of sunshine.',
    suggestedFileName: 'public/memes/cute/starter_cat_meme.svg',
    defaultMemeEmoji: '🐈🐈‍⬛',
    accentColor: '#E0C3FC',
    aspectRatio: 'photo-horizontal',
    src: '/memes/cute/starter_cat_meme.svg',
  },
  softSideCatMeme: {
    id: 'soft-side-cat-meme',
    category: 'meme',
    title: 'Meme: Shy Heart-Eyes Cat',
    description: 'The jokes are loud. The feeling is real.',
    suggestedFileName: 'public/memes/romance/starter_cat_meme.svg',
    defaultMemeEmoji: '🥺🌸',
    accentColor: '#FFB7C5',
    aspectRatio: 'square',
    src: '/memes/romance/starter_cat_meme.svg',
  },
  proposalCatMeme: {
    id: 'proposal-cat-meme',
    category: 'meme',
    title: 'Meme: Cat Offering Flower',
    description: 'One honest question. No pressure. Just you.',
    suggestedFileName: 'public/memes/finale/starter_cat_meme.svg',
    defaultMemeEmoji: '🌹🐱',
    accentColor: '#FF2A85',
    aspectRatio: 'square',
    src: '/memes/finale/starter_cat_meme.svg',
  },
  epilogueCatMeme: {
    id: 'epilogue-cat-meme',
    category: 'meme',
    title: 'Meme: Sleeping Loaf Cat',
    description: 'Billi-bot concluded its duties and is napping peacefully.',
    suggestedFileName: 'public/memes/finale/starter_cat_meme.svg',
    defaultMemeEmoji: '😴🐾',
    accentColor: '#E0C3FC',
    aspectRatio: 'square',
    src: '/memes/finale/starter_cat_meme.svg',
  },
};
