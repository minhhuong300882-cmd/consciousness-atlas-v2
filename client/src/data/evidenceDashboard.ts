// Evidence Dashboard - Comprehensive theory support metrics

export interface TheoryEvidenceMetrics {
  theoryId: string;
  theoryName: string;
  evidenceStrength: number; // 0-100
  replicationQuality: number; // 0-100
  citationImpact: number; // 0-100
  scientificConsensus: number; // 0-100
  supportingExperiments: number;
  contradictoryExperiments: number;
  controversyScore: number; // 0-100 (higher = more controversial)
  supportRatio: number; // supporting / (supporting + contradictory)
  totalEvidenceScore: number; // 0-100
  evidenceCategory: "very-strong" | "strong" | "moderate" | "weak" | "controversial";
  keyStrengths: string[];
  keyWeaknesses: string[];
  recentDevelopments: string[];
}

export const THEORY_EVIDENCE_METRICS: TheoryEvidenceMetrics[] = [
  {
    theoryId: "global-workspace",
    theoryName: "Global Workspace Theory",
    evidenceStrength: 88,
    replicationQuality: 82,
    citationImpact: 95,
    scientificConsensus: 85,
    supportingExperiments: 28,
    contradictoryExperiments: 4,
    controversyScore: 15,
    supportRatio: 0.875,
    totalEvidenceScore: 87,
    evidenceCategory: "very-strong",
    keyStrengths: [
      "Extensive neuroimaging support from fMRI and PET studies",
      "Strong evidence from attention and consciousness studies",
      "Consistent findings across multiple labs",
      "Clear predictions about neural correlates",
      "Explains attention-consciousness relationship",
    ],
    keyWeaknesses: [
      "Difficulty explaining phenomenal consciousness",
      "Limited explanation of qualia",
      "Some criticisms about neural implementation",
      "Doesn't address hard problem",
    ],
    recentDevelopments: [
      "2023: New fMRI evidence supports GWT predictions",
      "2022: Dehaene lab validates consciousness markers",
      "2021: TMS-EEG studies confirm GWT framework",
    ],
  },

  {
    theoryId: "integrated-information",
    theoryName: "Integrated Information Theory",
    evidenceStrength: 85,
    replicationQuality: 78,
    citationImpact: 92,
    scientificConsensus: 82,
    supportingExperiments: 26,
    contradictoryExperiments: 6,
    controversyScore: 20,
    supportRatio: 0.813,
    totalEvidenceScore: 84,
    evidenceCategory: "very-strong",
    keyStrengths: [
      "Strong mathematical framework",
      "Validated by TMS-EEG consciousness markers",
      "Explains anesthesia and sleep",
      "Predicts consciousness in different systems",
      "Consistent with brain imaging data",
    ],
    keyWeaknesses: [
      "Computational complexity limits testing",
      "Some predictions not yet validated",
      "Criticisms about phi calculation",
      "Difficulty with empirical measurement",
    ],
    recentDevelopments: [
      "2023: New TMS-EEG validation studies",
      "2022: Anesthesia research supports IIT",
      "2021: Computational improvements proposed",
    ],
  },

  {
    theoryId: "predictive-processing",
    theoryName: "Predictive Processing Theory",
    evidenceStrength: 82,
    replicationQuality: 75,
    citationImpact: 88,
    scientificConsensus: 79,
    supportingExperiments: 24,
    contradictoryExperiments: 5,
    controversyScore: 18,
    supportRatio: 0.828,
    totalEvidenceScore: 81,
    evidenceCategory: "very-strong",
    keyStrengths: [
      "Strong support from neuroscience research",
      "Explains perception and hallucinations",
      "Integrates with Bayesian brain hypothesis",
      "Consistent with prediction error signals",
      "Explains attention and consciousness",
    ],
    keyWeaknesses: [
      "Scope limitations for consciousness",
      "Some predictions need more testing",
      "Debate about prediction error mechanisms",
    ],
    recentDevelopments: [
      "2023: New prediction error studies",
      "2022: Hallucination research supports theory",
      "2021: Brain imaging confirms predictions",
    ],
  },

  {
    theoryId: "embodied-cognition",
    theoryName: "Embodied Cognition",
    evidenceStrength: 82,
    replicationQuality: 76,
    citationImpact: 90,
    scientificConsensus: 82,
    supportingExperiments: 22,
    contradictoryExperiments: 3,
    controversyScore: 10,
    supportRatio: 0.880,
    totalEvidenceScore: 82,
    evidenceCategory: "very-strong",
    keyStrengths: [
      "Extensive empirical support from psychology",
      "Strong evidence from neuroscience",
      "Consistent across multiple studies",
      "Explains body-mind interaction",
      "Supported by AI and robotics research",
    ],
    keyWeaknesses: [
      "Some debate about scope",
      "Questions about pure cognition",
    ],
    recentDevelopments: [
      "2023: New embodiment studies published",
      "2022: Brain imaging confirms embodied processing",
      "2021: Robotics research validates theory",
    ],
  },

  {
    theoryId: "functionalism",
    theoryName: "Functionalism",
    evidenceStrength: 75,
    replicationQuality: 72,
    citationImpact: 92,
    scientificConsensus: 80,
    supportingExperiments: 18,
    contradictoryExperiments: 5,
    controversyScore: 25,
    supportRatio: 0.783,
    totalEvidenceScore: 80,
    evidenceCategory: "strong",
    keyStrengths: [
      "Foundational framework in philosophy of mind",
      "Supports AI and computational approaches",
      "Consistent with neuroscience findings",
      "Explains multiple realizability",
    ],
    keyWeaknesses: [
      "Criticized for explanatory gap",
      "Doesn't explain qualia",
      "Hard problem challenges",
      "Some empirical limitations",
    ],
    recentDevelopments: [
      "2023: AI consciousness research",
      "2022: Computational models tested",
      "2021: Philosophical refinements proposed",
    ],
  },

  {
    theoryId: "affective-consciousness",
    theoryName: "Affective Consciousness Theory",
    evidenceStrength: 75,
    replicationQuality: 70,
    citationImpact: 75,
    scientificConsensus: 72,
    supportingExperiments: 16,
    contradictoryExperiments: 4,
    controversyScore: 22,
    supportRatio: 0.800,
    totalEvidenceScore: 73,
    evidenceCategory: "strong",
    keyStrengths: [
      "Strong evidence from emotion research",
      "Explains consciousness-emotion link",
      "Supported by neuroscience studies",
      "Novel perspective on consciousness",
    ],
    keyWeaknesses: [
      "Relatively new theory",
      "Limited empirical validation",
      "Some criticisms from other researchers",
    ],
    recentDevelopments: [
      "2023: New emotion-consciousness studies",
      "2022: Solms lab publishes new findings",
      "2021: Growing acceptance in field",
    ],
  },

  {
    theoryId: "free-energy-principle",
    theoryName: "Free Energy Principle",
    evidenceStrength: 76,
    replicationQuality: 70,
    citationImpact: 85,
    scientificConsensus: 72,
    supportingExperiments: 14,
    contradictoryExperiments: 3,
    controversyScore: 28,
    supportRatio: 0.824,
    totalEvidenceScore: 75,
    evidenceCategory: "strong",
    keyStrengths: [
      "Strong mathematical foundation",
      "Explains perception and action",
      "Integrates multiple neuroscience findings",
      "Predicts consciousness mechanisms",
    ],
    keyWeaknesses: [
      "Complex mathematical framework",
      "Limited direct empirical tests",
      "Scope debates",
      "Some predictions need validation",
    ],
    recentDevelopments: [
      "2023: New FEP applications",
      "2022: Computational validation",
      "2021: Neuroscience integration",
    ],
  },

  {
    theoryId: "higher-order-thought",
    theoryName: "Higher-Order Thought Theory",
    evidenceStrength: 68,
    replicationQuality: 65,
    citationImpact: 78,
    scientificConsensus: 72,
    supportingExperiments: 12,
    contradictoryExperiments: 5,
    controversyScore: 30,
    supportRatio: 0.706,
    totalEvidenceScore: 70,
    evidenceCategory: "moderate",
    keyStrengths: [
      "Explains access consciousness",
      "Philosophical support",
      "Some empirical validation",
      "Addresses consciousness-thought link",
    ],
    keyWeaknesses: [
      "Mixed empirical results",
      "Doesn't explain phenomenal consciousness",
      "Some contradictory findings",
      "Criticisms from neuroscience",
    ],
    recentDevelopments: [
      "2023: New HOT studies",
      "2022: Mixed empirical results",
      "2021: Philosophical refinements",
    ],
  },

  {
    theoryId: "attention-schema",
    theoryName: "Attention Schema Theory",
    evidenceStrength: 68,
    replicationQuality: 62,
    citationImpact: 70,
    scientificConsensus: 65,
    supportingExperiments: 10,
    contradictoryExperiments: 4,
    controversyScore: 32,
    supportRatio: 0.714,
    totalEvidenceScore: 66,
    evidenceCategory: "moderate",
    keyStrengths: [
      "Novel perspective on consciousness",
      "Explains attention-consciousness link",
      "Some empirical support",
      "Evolutionary perspective",
    ],
    keyWeaknesses: [
      "Limited empirical validation",
      "Needs more replication",
      "Some criticisms from researchers",
      "Scope limitations",
    ],
    recentDevelopments: [
      "2023: New AST studies",
      "2022: Graziano lab research",
      "2021: Growing interest",
    ],
  },

  {
    theoryId: "recurrent-processing",
    theoryName: "Recurrent Processing Theory",
    evidenceStrength: 72,
    replicationQuality: 68,
    citationImpact: 75,
    scientificConsensus: 68,
    supportingExperiments: 11,
    contradictoryExperiments: 3,
    controversyScore: 25,
    supportRatio: 0.786,
    totalEvidenceScore: 71,
    evidenceCategory: "moderate",
    keyStrengths: [
      "Strong evidence from vision science",
      "Well-validated in visual consciousness",
      "Clear neural mechanisms",
      "Consistent findings",
    ],
    keyWeaknesses: [
      "Limited to visual consciousness",
      "Doesn't explain other modalities",
      "Some scope limitations",
    ],
    recentDevelopments: [
      "2023: New vision studies",
      "2022: Lamme lab research",
      "2021: Visual consciousness validation",
    ],
  },

  {
    theoryId: "self-model",
    theoryName: "Self Model Theory",
    evidenceStrength: 70,
    replicationQuality: 62,
    citationImpact: 72,
    scientificConsensus: 68,
    supportingExperiments: 9,
    contradictoryExperiments: 4,
    controversyScore: 35,
    supportRatio: 0.692,
    totalEvidenceScore: 68,
    evidenceCategory: "moderate",
    keyStrengths: [
      "Novel philosophical perspective",
      "Explains self-consciousness",
      "Some empirical support",
      "Integrates neuroscience",
    ],
    keyWeaknesses: [
      "Limited empirical validation",
      "Controversial philosophical claims",
      "Some criticisms from researchers",
      "Needs more testing",
    ],
    recentDevelopments: [
      "2023: New self-consciousness studies",
      "2022: Philosophical discussions",
      "2021: Empirical investigations",
    ],
  },

  {
    theoryId: "neurophenomenology",
    theoryName: "Neurophenomenology",
    evidenceStrength: 62,
    replicationQuality: 58,
    citationImpact: 78,
    scientificConsensus: 65,
    supportingExperiments: 7,
    contradictoryExperiments: 4,
    controversyScore: 40,
    supportRatio: 0.636,
    totalEvidenceScore: 65,
    evidenceCategory: "moderate",
    keyStrengths: [
      "Bridges neuroscience and phenomenology",
      "Philosophical influence",
      "Some empirical studies",
      "Novel methodology",
    ],
    keyWeaknesses: [
      "Methodological challenges",
      "Limited empirical validation",
      "Difficult to test",
      "Some criticisms about approach",
    ],
    recentDevelopments: [
      "2023: Methodological refinements",
      "2022: New neurophenomenology studies",
      "2021: Philosophical discussions",
    ],
  },

  {
    theoryId: "panpsychism",
    theoryName: "Panpsychism",
    evidenceStrength: 30,
    replicationQuality: 20,
    citationImpact: 60,
    scientificConsensus: 35,
    supportingExperiments: 2,
    contradictoryExperiments: 8,
    controversyScore: 75,
    supportRatio: 0.200,
    totalEvidenceScore: 36,
    evidenceCategory: "controversial",
    keyStrengths: [
      "Philosophical interest",
      "Addresses hard problem",
      "Growing philosophical discussion",
    ],
    keyWeaknesses: [
      "Minimal empirical support",
      "Unfalsifiable predictions",
      "Rejected by mainstream science",
      "Lacks testable hypotheses",
    ],
    recentDevelopments: [
      "2023: Philosophical papers",
      "2022: Continued philosophical debate",
      "2021: Limited scientific interest",
    ],
  },

  {
    theoryId: "quantum-consciousness",
    theoryName: "Quantum Consciousness",
    evidenceStrength: 25,
    replicationQuality: 15,
    citationImpact: 55,
    scientificConsensus: 30,
    supportingExperiments: 1,
    contradictoryExperiments: 10,
    controversyScore: 85,
    supportRatio: 0.091,
    totalEvidenceScore: 31,
    evidenceCategory: "controversial",
    keyStrengths: [
      "Theoretical interest",
      "Addresses hard problem",
      "Some philosophical support",
    ],
    keyWeaknesses: [
      "Minimal empirical support",
      "Rejected by mainstream neuroscience",
      "Unfalsifiable predictions",
      "No clear mechanism",
      "Contradicted by evidence",
    ],
    recentDevelopments: [
      "2023: Continued skepticism",
      "2022: No new supporting evidence",
      "2021: Mainstream rejection",
    ],
  },

  {
    theoryId: "dualism",
    theoryName: "Dualism",
    evidenceStrength: 10,
    replicationQuality: 5,
    citationImpact: 80,
    scientificConsensus: 15,
    supportingExperiments: 0,
    contradictoryExperiments: 15,
    controversyScore: 90,
    supportRatio: 0.000,
    totalEvidenceScore: 22,
    evidenceCategory: "controversial",
    keyStrengths: [
      "Historical philosophical importance",
      "Addresses intuitive dualism",
    ],
    keyWeaknesses: [
      "No empirical support",
      "Contradicted by neuroscience",
      "Rejected by modern science",
      "Unfalsifiable",
      "No mechanism proposed",
    ],
    recentDevelopments: [
      "2023: Historical interest only",
      "2022: Considered outdated",
      "2021: Not part of mainstream science",
    ],
  },
];

// Helper functions

export function getTheoryEvidenceMetrics(theoryId: string): TheoryEvidenceMetrics | undefined {
  return THEORY_EVIDENCE_METRICS.find((t) => t.theoryId === theoryId);
}

export function rankTheoriesByEvidenceStrength(): TheoryEvidenceMetrics[] {
  return [...THEORY_EVIDENCE_METRICS].sort((a, b) => b.totalEvidenceScore - a.totalEvidenceScore);
}

export function getTheoriesByCategory(category: string): TheoryEvidenceMetrics[] {
  return THEORY_EVIDENCE_METRICS.filter((t) => t.evidenceCategory === category);
}

export function getAverageEvidenceMetrics() {
  const count = THEORY_EVIDENCE_METRICS.length;
  const avg = {
    evidenceStrength: 0,
    replicationQuality: 0,
    citationImpact: 0,
    scientificConsensus: 0,
    supportingExperiments: 0,
    contradictoryExperiments: 0,
    controversyScore: 0,
    totalEvidenceScore: 0,
  };

  THEORY_EVIDENCE_METRICS.forEach((t) => {
    avg.evidenceStrength += t.evidenceStrength;
    avg.replicationQuality += t.replicationQuality;
    avg.citationImpact += t.citationImpact;
    avg.scientificConsensus += t.scientificConsensus;
    avg.supportingExperiments += t.supportingExperiments;
    avg.contradictoryExperiments += t.contradictoryExperiments;
    avg.controversyScore += t.controversyScore;
    avg.totalEvidenceScore += t.totalEvidenceScore;
  });

  return {
    evidenceStrength: Math.round(avg.evidenceStrength / count),
    replicationQuality: Math.round(avg.replicationQuality / count),
    citationImpact: Math.round(avg.citationImpact / count),
    scientificConsensus: Math.round(avg.scientificConsensus / count),
    supportingExperiments: Math.round(avg.supportingExperiments / count),
    contradictoryExperiments: Math.round(avg.contradictoryExperiments / count),
    controversyScore: Math.round(avg.controversyScore / count),
    totalEvidenceScore: Math.round(avg.totalEvidenceScore / count),
  };
}

export function getEvidenceStats() {
  const sorted = rankTheoriesByEvidenceStrength();
  const categories = {
    "very-strong": getTheoriesByCategory("very-strong").length,
    strong: getTheoriesByCategory("strong").length,
    moderate: getTheoriesByCategory("moderate").length,
    weak: getTheoriesByCategory("weak").length,
    controversial: getTheoriesByCategory("controversial").length,
  };

  return {
    totalTheories: THEORY_EVIDENCE_METRICS.length,
    strongestTheory: sorted[0],
    weakestTheory: sorted[sorted.length - 1],
    averageMetrics: getAverageEvidenceMetrics(),
    categories,
    totalSupportingExperiments: THEORY_EVIDENCE_METRICS.reduce((sum, t) => sum + t.supportingExperiments, 0),
    totalContradictoryExperiments: THEORY_EVIDENCE_METRICS.reduce((sum, t) => sum + t.contradictoryExperiments, 0),
  };
}
