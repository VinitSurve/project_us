import React from 'react';
import { PresentationProvider } from './context/PresentationContext';
import { PresentationShell } from './components/PresentationShell';
import { SceneRenderer } from './scenes/SceneRenderer';
import './styles/global.css';

export function App() {
  return (
    <PresentationProvider>
      <PresentationShell>
        <SceneRenderer />
      </PresentationShell>
    </PresentationProvider>
  );
}

export default App;
