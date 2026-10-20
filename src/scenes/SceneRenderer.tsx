import React from 'react';
import { usePresentation } from '../context/PresentationContext';

// Act 1
import { BootSequenceScene } from './Act1_CatPortal/BootSequenceScene';
import { InvitationPortalScene } from './Act1_CatPortal/InvitationPortalScene';
import { ProposalCoverScene } from './Act1_CatPortal/ProposalCoverScene';
import { ConfidentialityScene } from './Act1_CatPortal/ConfidentialityScene';

// Act 2
import { ExecutiveSummaryScene } from './Act2_BusinessProposal/ExecutiveSummaryScene';
import { ProblemStatementScene } from './Act2_BusinessProposal/ProblemStatementScene';
import { ProposedSolutionScene } from './Act2_BusinessProposal/ProposedSolutionScene';
import { MissionVisionScene } from './Act2_BusinessProposal/MissionVisionScene';
import { TermsConditionsScene } from './Act2_BusinessProposal/TermsConditionsScene';

// Act 3
import { HacknovaOriginScene } from './Act3_Archives/HacknovaOriginScene';
import { VisualTimelineScene } from './Act3_Archives/VisualTimelineScene';
import { PhotoMuseumScene } from './Act3_Archives/PhotoMuseumScene';
import { LittleThingsArchiveScene } from './Act3_Archives/LittleThingsArchiveScene';
import { InsideJokeLoreScene } from './Act3_Archives/InsideJokeLoreScene';

// Act 4
import { CompatibilityReportScene } from './Act4_Compatibility/CompatibilityReportScene';
import { GunaIncidentScene } from './Act4_Compatibility/GunaIncidentScene';
import { StatisticalEvidenceScene } from './Act4_Compatibility/StatisticalEvidenceScene';
import { SimilarityMatrixScene } from './Act4_Compatibility/SimilarityMatrixScene';
import { RedTeamReviewScene } from './Act4_Compatibility/RedTeamReviewScene';

// Act 5
import { CandidateAScene } from './Act5_Candidates/CandidateAScene';
import { CandidateBScene } from './Act5_Candidates/CandidateBScene';
import { ProposedDuoScene } from './Act5_Candidates/ProposedDuoScene';

// Act 6
import { ValuePropositionScene } from './Act6_Partnership/ValuePropositionScene';
import { FuturePossibilitiesScene } from './Act6_Partnership/FuturePossibilitiesScene';
import { RelationshipHandbookScene } from './Act6_Partnership/RelationshipHandbookScene';
import { RiskAssessmentScene } from './Act6_Partnership/RiskAssessmentScene';

// Act 7
import { CatBrainrotHubScene } from './Act7_CatBrainrot/CatBrainrotHubScene';

// Act 8
import { FoundersNoteScene } from './Act8_Finale/FoundersNoteScene';
import { TheProposalScene } from './Act8_Finale/TheProposalScene';
import { ResponseScreenScene } from './Act8_Finale/ResponseScreenScene';
import { CreditsScene } from './Act8_Finale/CreditsScene';
import { PostCreditsScene } from './Act8_Finale/PostCreditsScene';

export const SceneRenderer: React.FC = () => {
  const { currentSceneIndex } = usePresentation();

  switch (currentSceneIndex) {
    // Act 1: The Cat Portal
    case 0:
      return <BootSequenceScene />;
    case 1:
      return <InvitationPortalScene />;
    case 2:
      return <ProposalCoverScene />;
    case 3:
      return <ConfidentialityScene />;

    // Act 2: The Business Proposal
    case 4:
      return <ExecutiveSummaryScene />;
    case 5:
      return <ProblemStatementScene />;
    case 6:
      return <ProposedSolutionScene />;
    case 7:
      return <MissionVisionScene />;
    case 8:
      return <TermsConditionsScene />;

    // Act 3: The Archives Department
    case 9:
      return <HacknovaOriginScene />;
    case 10:
      return <VisualTimelineScene />;
    case 11:
      return <PhotoMuseumScene />;
    case 12:
      return <LittleThingsArchiveScene />;
    case 13:
      return <InsideJokeLoreScene />;

    // Act 4: The Compatibility Laboratory
    case 14:
      return <CompatibilityReportScene />;
    case 15:
      return <GunaIncidentScene />;
    case 16:
      return <StatisticalEvidenceScene />;
    case 17:
      return <SimilarityMatrixScene />;
    case 18:
      return <RedTeamReviewScene />;

    // Act 5: Meet The Candidates
    case 19:
      return <CandidateAScene />;
    case 20:
      return <CandidateBScene />;
    case 21:
      return <ProposedDuoScene />;

    // Act 6: The Partnership Plan
    case 22:
      return <ValuePropositionScene />;
    case 23:
      return <FuturePossibilitiesScene />;
    case 24:
      return <RelationshipHandbookScene />;
    case 25:
      return <RiskAssessmentScene />;

    // Act 7: Cat Brainrot Hub
    case 26:
      return <CatBrainrotHubScene />;

    // Act 8: The Final Decision & Epilogue
    case 27:
      return <FoundersNoteScene />;
    case 28:
      return <TheProposalScene />;
    case 29:
      return <ResponseScreenScene />;
    case 30:
      return <CreditsScene />;
    case 31:
      return <PostCreditsScene />;

    default:
      return <BootSequenceScene />;
  }
};
