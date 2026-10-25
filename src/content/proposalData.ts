import { ActMeta, SceneMeta, EasterEgg, SystemInterruption } from '../types/presentation';

export const ACTS: ActMeta[] = [
  {
    id: 'act-1',
    actNumber: 'PART I',
    title: 'The Cat-Meme Intro',
    subtitle: 'Playful Warning & Feline Summons',
    accentColor: '#FFB7C5',
    badge: '🐾 100% Zero Chill',
  },
  {
    id: 'act-2',
    actNumber: 'PART II',
    title: 'The Lore',
    subtitle: 'How Our Story Actually Began',
    accentColor: '#00F0FF',
    badge: '⚡ Verified Shared History',
  },
  {
    id: 'act-3',
    actNumber: 'PART III',
    title: 'The Memories & Little Things',
    subtitle: 'Moments, Details & बाळ',
    accentColor: '#FF2A85',
    badge: '✨ Pure Fondness',
  },
  {
    id: 'act-4',
    actNumber: 'PART IV',
    title: 'Cat Meme Chaos',
    subtitle: 'Petting Lab & Relatable Brainrot',
    accentColor: '#FFE600',
    badge: '😹 Interactive Feline Lab',
  },
  {
    id: 'act-5',
    actNumber: 'PART V',
    title: 'The Soft Side',
    subtitle: 'Dropping The Memes for a Moment',
    accentColor: '#E0C3FC',
    badge: '💌 From The Heart',
  },
  {
    id: 'act-6',
    actNumber: 'PART VI',
    title: 'The Question',
    subtitle: 'A Sincere Ask & Honest Space',
    accentColor: '#38E09A',
    badge: '🌸 Zero Pressure',
  },
];

export const SCENES: SceneMeta[] = [
  // PART I: The Cat-Meme Intro
  {
    id: 'boot-sequence',
    actId: 'act-1',
    sceneNumber: 1,
    title: 'System Boot Sequence',
    subtitle: 'Warning: Highly unserious cat story ahead...',
    catComment: 'Loading 37,000 cat memes into RAM...',
  },
  {
    id: 'invitation-portal',
    actId: 'act-1',
    sceneNumber: 2,
    title: 'The Feline Summons',
    subtitle: 'pspspspsps... you have been summoned.',
    catComment: 'Tap the paw to proceed! No turning back now.',
  },
  {
    id: 'proposal-cover',
    actId: 'act-1',
    sceneNumber: 3,
    title: 'PROJECT: US',
    subtitle: 'A cat-meme presentation about two people.',
    catComment: 'Made with genuine love, late-night tea & questionable sanity.',
  },

  // PART II: The Lore
  {
    id: 'hacknova-origin',
    actId: 'act-2',
    sceneNumber: 4,
    title: 'The Hacknova Spark',
    subtitle: 'Cold code, fluorescent lights & effortless conversation.',
    catComment: 'Where the lore began! 2 AM debugging hits different.',
  },
  {
    id: 'chai-rides',
    actId: 'act-2',
    sceneNumber: 5,
    title: "The 45-Minute 'Short Route'",
    subtitle: 'How a 10-minute ride home became an evening routine.',
    catComment: 'Mysterious physics: shortest route takes 45 minutes.',
  },
  {
    id: 'guna-incident',
    actId: 'act-2',
    sceneNumber: 6,
    title: 'The 34/36 Guna Incident',
    subtitle: 'When astrology accidentally broke the diagnostic scale.',
    catComment: '🚨 SIREN NOISES! 34 OUT OF 36 DETECTED!',
  },
  {
    id: 'inside-joke-lore',
    actId: 'act-2',
    sceneNumber: 7,
    title: 'Our Shared Frequency',
    subtitle: 'Inside jokes & brainrot only two people understand.',
    catComment: 'Tap sticky notes for meme reactions!',
  },

  // PART III: The Memories & Little Things
  {
    id: 'little-things',
    actId: 'act-3',
    sceneNumber: 8,
    title: 'The Little Things I Remember',
    subtitle: 'Crochet cat clips, custom desktop cat & tiny details.',
    catComment: 'It is always the tiny specific details that count.',
  },
  {
    id: 'shared-moments',
    actId: 'act-3',
    sceneNumber: 9,
    title: "Moments We've Shared",
    subtitle: 'Quiet memories that mean a lot to me.',
    catComment: 'Tap on the Polaroid to flip it over!',
  },
  {
    id: 'candidate-b',
    actId: 'act-3',
    sceneNumber: 10,
    title: 'बाळ',
    subtitle: 'The main character herself ✨',
    catComment: 'Effortless warmth, September 4 royalty & brilliant smile.',
  },
  {
    id: 'the-dynamic',
    actId: 'act-3',
    sceneNumber: 11,
    title: 'The Dynamic',
    subtitle: 'One chronic overthinker + one ray of sunshine.',
    catComment: 'Two distinct minds, one undeniable resonance.',
  },

  // PART IV: Cat Meme Chaos
  {
    id: 'cat-brainrot-hub',
    actId: 'act-4',
    sceneNumber: 12,
    title: 'Petting Lab & Purr Meter',
    subtitle: 'Mandatory cat petting to recharge presentation battery.',
    catComment: 'PET ME! Fill the purr meter to 100%!',
  },
  {
    id: 'meme-reactions',
    actId: 'act-4',
    sceneNumber: 13,
    title: 'Cat Reaction Reel',
    subtitle: 'How my brain behaves on an average day talking to you.',
    catComment: '100% scientifically accurate feline reactions.',
  },

  // PART V: The Soft Side
  {
    id: 'dropping-the-memes',
    actId: 'act-5',
    sceneNumber: 14,
    title: 'Okay, Jokes Aside...',
    subtitle: 'A quiet, gentle breath before the real question.',
    catComment: 'Stepping back to let the heart speak honestly...',
  },
  {
    id: 'founders-note',
    actId: 'act-5',
    sceneNumber: 15,
    title: 'What I Actually Feel',
    subtitle: 'No jokes, no memes. Just me being honest with you.',
    catComment: 'Every word comes from a genuine place.',
  },
  {
    id: 'future-possibilities',
    actId: 'act-5',
    sceneNumber: 16,
    title: 'Simple Things to Look Forward To',
    subtitle: 'Little shared adventures, zero pressure.',
    catComment: 'Tap each quest to vote on priority!',
  },

  // PART VI: The Question & Epilogue
  {
    id: 'the-proposal',
    actId: 'act-6',
    sceneNumber: 17,
    title: 'One Simple, Honest Question',
    subtitle: 'Take your time. No rush, no expectations.',
    catComment: 'Deep breath. Here is the question...',
  },
  {
    id: 'response-screen',
    actId: 'act-6',
    sceneNumber: 18,
    title: 'Your Decision',
    subtitle: 'Every response is respected, cherished, and valued.',
    catComment: 'Choose freely with all your heart.',
  },
  {
    id: 'post-credits',
    actId: 'act-6',
    sceneNumber: 19,
    title: "Credits & Midnight Epilogue",
    subtitle: 'Always in your corner. Whenever you are ready.',
    catComment: 'Zzz... Billi-Bot signing off. Goodnight!',
  },
];

export const TIMELINE_EVENTS = [
  {
    id: 'hacknova',
    date: 'Hacknova 2024',
    badge: 'The Spark',
    title: 'The Origin at Hacknova',
    description:
      'Where two tech enthusiasts crossed paths under fluorescent hackathon lights, surrounded by cold pizza, endless debugging, and an unexpected spark of effortless conversation.',
    tag: 'Chapter 01',
    icon: '⚡',
  },
  {
    id: 'cat-ear-clips',
    date: 'Early Days',
    badge: 'Aesthetic Milestone',
    title: 'The Crochet Cat-Ear Clips',
    description:
      'Candidate A observed Candidate B wearing hand-crafted crochet cat-ear clips. The feline compatibility sensors immediately spiked to 100%. Unforgettable energy.',
    tag: 'Chapter 02',
    icon: '🧶',
  },
  {
    id: 'chai-rides',
    date: 'Ongoing Lore',
    badge: 'Ritual',
    title: 'Late Night Chai & Scooter Rides',
    description:
      'Golden hour breezes, quiet roads, and the recurring mathematical paradox where "taking the shortest route home" miraculously turns into a 45-minute philosophical debate.',
    tag: 'Chapter 03',
    icon: '🛵',
  },
  {
    id: 'desktop-cat',
    date: 'Engineering Chapter',
    badge: 'Overengineered',
    title: 'The Custom Desktop Cat',
    description:
      'Why send a normal message when you can code an entire virtual feline companion to wander across her computer screen and keep her company while she works?',
    tag: 'Chapter 04',
    icon: '💻',
  },
  {
    id: 'september-reconnect',
    date: 'September Reconnection',
    badge: 'Deep Resonance',
    title: 'The September Reconnection',
    description:
      'A pivotal reconnection that confirmed something special: time and space only made conversations richer, respect deeper, and laughter even more spontaneous.',
    tag: 'Chapter 05',
    icon: '🍂',
  },
  {
    id: 'today',
    date: 'Present Day',
    badge: 'The Question',
    title: 'PROJECT: US',
    description:
      'All the shared memories, inside jokes, and genuine affection compiled into one unhinged yet deeply sincere presentation. The next chapter is an open invitation.',
    tag: 'Chapter 06',
    icon: '💌',
  },
];

export const EASTER_EGGS: EasterEgg[] = [
  {
    id: 'pspsps-caller',
    title: 'Certified Cat Whisperer',
    description: 'Tapped the summons cat 3 times in the portal.',
    icon: '🐱',
    foundAtScene: 2,
  },
  {
    id: 'hacknova-veteran',
    title: 'Hacknova Legend',
    description: 'Inspected the origin terminal logs.',
    icon: '💻',
    foundAtScene: 4,
  },
  {
    id: 'guna-astronomer',
    title: '34/36 Astrological Witness',
    description: 'Triggered Dr. Meowstein’s planetary siren.',
    icon: '🔮',
    foundAtScene: 6,
  },
  {
    id: 'purr-master',
    title: 'Purr Meter Overcharger',
    description: 'Petted the kitten until purr level hit 100%.',
    icon: '🐾',
    foundAtScene: 12,
  },
  {
    id: 'curious-explorer',
    title: 'Chief Lore Investigator',
    description: 'Flipped the memory Polaroid.',
    icon: '🔍',
    foundAtScene: 9,
  },
];

export const SYSTEM_INTERRUPTIONS: SystemInterruption[] = [
  {
    id: 'interruption-yapping',
    code: 'ERR_YAP_001',
    title: 'UNAUTHORIZED YAPPING DETECTED',
    message: 'The presenter has exceeded the legal threshold of passionate talking. Feline regulators recommend immediately serving a warm cup of chai.',
    severity: 'brainrot',
    actionLabel: 'Acknowledge & Continue Yapping',
  },
  {
    id: 'interruption-overthink',
    code: 'WARN_BRAIN_404',
    title: 'OVERTHINKING HARDWARE OVERHEATED',
    message: 'Candidate A is currently analyzing 4,192 conversational permutations. Diagnostic advice: Tell him to take a deep breath; everything is chill.',
    severity: 'warning',
    actionLabel: 'Dispense Deep Breath',
  },
  {
    id: 'interruption-cat-overflow',
    code: 'FELINE_BUFFER_OVERFLOW',
    title: 'CRITICAL FELINE DEFICIT RESOLVED',
    message: 'System purr capacity has reached maximum efficiency. Unconditional cat cuddles and purr vibrations dispatched to your screen.',
    severity: 'feline',
    actionLabel: 'Accept Cat Blessing',
  },
];
