export type ActId =
  | 'act-1'
  | 'act-2'
  | 'act-3'
  | 'act-4'
  | 'act-5'
  | 'act-6';

export interface ActMeta {
  id: ActId;
  actNumber: string;
  title: string;
  subtitle: string;
  accentColor: string;
  badge: string;
}

export interface SceneMeta {
  id: string;
  actId: ActId;
  sceneNumber: number;
  title: string;
  subtitle: string;
  catComment?: string;
  allowSwipe?: boolean;
}

export interface EasterEgg {
  id: string;
  title: string;
  description: string;
  icon: string;
  foundAtScene: number;
}

export type ProposalResponse = 'yes' | 'slow' | 'think' | 'friends' | null;

export interface PresentationState {
  currentSceneIndex: number;
  totalScenes: number;
  isMuted: boolean;
  drawerOpen: boolean;
  catMood: 'curious' | 'happy' | 'yapping' | 'shocked' | 'sleepy' | 'purring';
  catVisible: boolean;
  easterEggs: Record<string, boolean>;
  userResponse: ProposalResponse;
  activeInterruption: SystemInterruption | null;
}

export interface SystemInterruption {
  id: string;
  code: string;
  title: string;
  message: string;
  severity: 'warning' | 'critical' | 'feline' | 'brainrot';
  actionLabel: string;
}
