import React from 'react';
import { usePresentation } from '../context/PresentationContext';

// Act 1: The Cat-Meme Intro
import { BootSequenceScene } from './Act1_CatPortal/BootSequenceScene';
import { InvitationPortalScene } from './Act1_CatPortal/InvitationPortalScene';
import { ProposalCoverScene } from './Act1_CatPortal/ProposalCoverScene';

// Act 2: The Lore
import { HacknovaOriginScene } from './Act3_Archives/HacknovaOriginScene';
import { ChaiRidesScene } from './Act3_Archives/ChaiRidesScene';
import { GunaIncidentScene } from './Act4_Compatibility/GunaIncidentScene';
import { InsideJokeLoreScene } from './Act3_Archives/InsideJokeLoreScene';

// Act 3: The Memories & Little Things
import { LittleThingsArchiveScene } from './Act3_Archives/LittleThingsArchiveScene';
import { PhotoMuseumScene } from './Act3_Archives/PhotoMuseumScene';
import { CandidateBScene } from './Act5_Candidates/CandidateBScene';
import { ProposedDuoScene } from './Act5_Candidates/ProposedDuoScene';

// Act 4: Cat Meme Chaos
import { CatBrainrotHubScene } from './Act7_CatBrainrot/CatBrainrotHubScene';
import { MemeReactionsScene } from './Act7_CatBrainrot/MemeReactionsScene';

// Act 5: The Soft Side
import { DroppingMemesScene } from './Act8_Finale/DroppingMemesScene';
import { FoundersNoteScene } from './Act8_Finale/FoundersNoteScene';
import { FuturePossibilitiesScene } from './Act6_Partnership/FuturePossibilitiesScene';

// Act 6: The Question & Epilogue
import { TheProposalScene } from './Act8_Finale/TheProposalScene';
import { ResponseScreenScene } from './Act8_Finale/ResponseScreenScene';
import { PostCreditsScene } from './Act8_Finale/PostCreditsScene';

export const SceneRenderer: React.FC = () => {
  const { currentSceneIndex } = usePresentation();

  switch (currentSceneIndex) {
    // Act 1: The Cat-Meme Intro
    case 0:
      return <BootSequenceScene />;
    case 1:
      return <InvitationPortalScene />;
    case 2:
      return <ProposalCoverScene />;

    // Act 2: The Lore
    case 3:
      return <HacknovaOriginScene />;
    case 4:
      return <ChaiRidesScene />;
    case 5:
      return <GunaIncidentScene />;
    case 6:
      return <InsideJokeLoreScene />;

    // Act 3: The Memories & Little Things
    case 7:
      return <LittleThingsArchiveScene />;
    case 8:
      return <PhotoMuseumScene />;
    case 9:
      return <CandidateBScene />;
    case 10:
      return <ProposedDuoScene />;

    // Act 4: Cat Meme Chaos
    case 11:
      return <CatBrainrotHubScene />;
    case 12:
      return <MemeReactionsScene />;

    // Act 5: The Soft Side
    case 13:
      return <DroppingMemesScene />;
    case 14:
      return <FoundersNoteScene />;
    case 15:
      return <FuturePossibilitiesScene />;

    // Act 6: The Question & Epilogue
    case 16:
      return <TheProposalScene />;
    case 17:
      return <ResponseScreenScene />;
    case 18:
      return <PostCreditsScene />;

    default:
      return <BootSequenceScene />;
  }
};
