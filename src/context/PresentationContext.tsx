import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SCENES, ACTS, EASTER_EGGS, SYSTEM_INTERRUPTIONS } from '../content/proposalData';
import { SceneMeta, ActMeta, ProposalResponse, SystemInterruption } from '../types/presentation';
import { soundManager } from '../utils/sound';

interface PresentationContextType {
  currentSceneIndex: number;
  currentScene: SceneMeta;
  currentAct: ActMeta;
  totalScenes: number;
  progressPercent: number;
  canGoNext: boolean;
  canGoPrev: boolean;
  goToScene: (index: number) => void;
  nextScene: () => void;
  prevScene: () => void;
  isMuted: boolean;
  toggleSound: () => void;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  catMood: 'curious' | 'happy' | 'yapping' | 'shocked' | 'sleepy' | 'purring';
  setCatMood: (mood: 'curious' | 'happy' | 'yapping' | 'shocked' | 'sleepy' | 'purring') => void;
  catVisible: boolean;
  setCatVisible: (visible: boolean) => void;
  easterEggs: Record<string, boolean>;
  unlockEasterEgg: (id: string) => void;
  unlockedCount: number;
  totalEasterEggs: number;
  userResponse: ProposalResponse;
  setUserResponse: (res: ProposalResponse) => void;
  activeInterruption: SystemInterruption | null;
  triggerInterruption: (id?: string) => void;
  dismissInterruption: () => void;
  purrMeter: number;
  addPurr: (amount: number) => void;
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export const PresentationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(() => soundManager.getMuted());
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [catMood, setCatMood] = useState<'curious' | 'happy' | 'yapping' | 'shocked' | 'sleepy' | 'purring'>('curious');
  const [catVisible, setCatVisible] = useState<boolean>(true);
  const [easterEggs, setEasterEggs] = useState<Record<string, boolean>>({});
  const [userResponse, setUserResponse] = useState<ProposalResponse>(null);
  const [activeInterruption, setActiveInterruption] = useState<SystemInterruption | null>(null);
  const [purrMeter, setPurrMeter] = useState<number>(20);

  const currentScene = SCENES[currentSceneIndex] || SCENES[0];
  const currentAct = ACTS.find((a) => a.id === currentScene.actId) || ACTS[0];
  const totalScenes = SCENES.length;
  const progressPercent = ((currentSceneIndex + 1) / totalScenes) * 100;

  const canGoNext = currentSceneIndex < totalScenes - 1;
  const canGoPrev = currentSceneIndex > 0;

  const goToScene = (index: number) => {
    if (index >= 0 && index < totalScenes) {
      soundManager.playClick();
      setCurrentSceneIndex(index);
      setDrawerOpen(false);

      // Adaptive cat moods based on scene acts
      if (index === 0) setCatMood('sleepy');
      else if (index === 15) setCatMood('shocked'); // Guna score scene
      else if (index === 20) setCatMood('happy'); // बाळ profile
      else if (index === 26) setCatMood('purring'); // brainrot hub
      else if (index >= 27) setCatMood('happy'); // sincere finale
      else setCatMood('curious');
    }
  };

  const nextScene = () => {
    if (canGoNext) {
      goToScene(currentSceneIndex + 1);
    }
  };

  const prevScene = () => {
    if (canGoPrev) {
      goToScene(currentSceneIndex - 1);
    }
  };

  const toggleSound = () => {
    const nextState = soundManager.toggleMute();
    setIsMuted(nextState);
  };

  const unlockEasterEgg = (id: string) => {
    if (!easterEggs[id]) {
      soundManager.playChime();
      setEasterEggs((prev) => ({ ...prev, [id]: true }));
    }
  };

  const triggerInterruption = (id?: string) => {
    soundManager.playError();
    if (id) {
      const found = SYSTEM_INTERRUPTIONS.find((i) => i.id === id);
      if (found) {
        setActiveInterruption(found);
        return;
      }
    }
    // Random interruption
    const rand = SYSTEM_INTERRUPTIONS[Math.floor(Math.random() * SYSTEM_INTERRUPTIONS.length)];
    setActiveInterruption(rand);
  };

  const dismissInterruption = () => {
    soundManager.playClick();
    setActiveInterruption(null);
  };

  const addPurr = (amount: number) => {
    soundManager.playPurr();
    setPurrMeter((prev) => {
      const next = Math.min(100, prev + amount);
      if (next >= 100) {
        unlockEasterEgg('purr-master');
      }
      return next;
    });
  };

  // Keyboard navigation support on desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if inside an input or textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextScene();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
        e.preventDefault();
        prevScene();
      } else if (e.key === 'm' || e.key === 'M') {
        toggleSound();
      } else if (e.key === 'Escape') {
        setDrawerOpen(false);
        setActiveInterruption(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSceneIndex, canGoNext, canGoPrev]);

  // Occasional random system interruption for comedic timing (e.g. at scene 6 or 16)
  useEffect(() => {
    if (currentSceneIndex === 5 && !activeInterruption) {
      const timer = setTimeout(() => {
        triggerInterruption('interruption-yapping');
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [currentSceneIndex]);

  const unlockedCount = Object.keys(easterEggs).filter((k) => easterEggs[k]).length;
  const totalEasterEggs = EASTER_EGGS.length;

  return (
    <PresentationContext.Provider
      value={{
        currentSceneIndex,
        currentScene,
        currentAct,
        totalScenes,
        progressPercent,
        canGoNext,
        canGoPrev,
        goToScene,
        nextScene,
        prevScene,
        isMuted,
        toggleSound,
        drawerOpen,
        setDrawerOpen,
        catMood,
        setCatMood,
        catVisible,
        setCatVisible,
        easterEggs,
        unlockEasterEgg,
        unlockedCount,
        totalEasterEggs,
        userResponse,
        setUserResponse,
        activeInterruption,
        triggerInterruption,
        dismissInterruption,
        purrMeter,
        addPurr,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
};

export const usePresentation = (): PresentationContextType => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error('usePresentation must be used within a PresentationProvider');
  }
  return context;
};
