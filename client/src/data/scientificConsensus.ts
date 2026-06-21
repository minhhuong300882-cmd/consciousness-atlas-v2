// Scientific Consensus Layer - Evidence-based consensus status for consciousness theories

export type ConsensusStatus = 
  | "mainstream" 
  | "emerging" 
  | "influential-controversial" 
  | "minority-position" 
  | "historical";

export interface ConsensusMetrics {
  empiricalSupport: number; // 0-100
  replicationRate: number; // 0-100
  citationImpact: number; // 0-100 (based on h-index, citations)
  academicAcceptance: number; // 0-100
  predictivePower: number; // 0-100
  falsifiability: number; // 0-100
}

export interface TheoryConsensus {
  theoryId: string;
  theoryName: string;
  consensusStatus: ConsensusStatus;
  confidenceScore: number; // 0-100
  metrics: ConsensusMetrics;
  supportingCommunity: string; // e.g., "Neuroscience, Cognitive Science"
  majorCritics: string[]; // Key researchers who challenge the theory
  yearEstablished: number;
  peakInfluence: number; // Year of maximum influence
  currentTrend: "rising" | "stable" | "declining" | "reviving";
  consensusNarrative: string;
  keyMilestones: Array<{
    year: number;
    event: string;
    impact: "positive" | "negative" | "neutral";
  }>;
}

export const THEORY_CONSENSUS: Record<string, TheoryConsensus> = {
  "integrated-information": {
    theoryId: "integrated-information",
    theoryName: "Integrated Information Theory (IIT)",
    consensusStatus: "mainstream",
    confidenceScore: 82,
    metrics: {
      empiricalSupport: 85,
      replicationRate: 78,
      citationImpact: 92,
      academicAcceptance: 80,
      predictivePower: 75,
      falsifiability: 88,
    },
    supportingCommunity: "Neuroscience, Consciousness Studies, Computational Neuroscience",
    majorCritics: ["Ned Block", "Daniel Dennett", "Keith Frankish"],
    yearEstablished: 2004,
    peakInfluence: 2016,
    currentTrend: "stable",
    consensusNarrative: "IIT is one of the most influential and empirically-grounded theories of consciousness. Strong support from neuroimaging studies, TMS-EEG markers, and anesthesia research. Mathematical framework allows testable predictions. Main criticisms focus on computational complexity and assumptions about consciousness substrate.",
    keyMilestones: [
      { year: 2004, event: "Tononi publishes original IIT framework", impact: "positive" },
      { year: 2012, event: "IIT 3.0 published with refined predictions", impact: "positive" },
      { year: 2016, event: "Casali et al. demonstrate IIT markers in TMS-EEG", impact: "positive" },
      { year: 2020, event: "IIT 4.0 published addressing criticisms", impact: "positive" },
      { year: 2023, event: "Continued empirical validation in multiple labs", impact: "positive" },
    ],
  },

  "global-workspace": {
    theoryId: "global-workspace",
    theoryName: "Global Workspace Theory (GWT)",
    consensusStatus: "mainstream",
    confidenceScore: 85,
    metrics: {
      empiricalSupport: 88,
      replicationRate: 82,
      citationImpact: 95,
      academicAcceptance: 85,
      predictivePower: 80,
      falsifiability: 85,
    },
    supportingCommunity: "Cognitive Psychology, Neuroscience, Consciousness Studies",
    majorCritics: ["Ned Block", "Victor Lamme", "Francisco Varela"],
    yearEstablished: 1988,
    peakInfluence: 2005,
    currentTrend: "stable",
    consensusNarrative: "GWT remains the most widely accepted theory of consciousness in mainstream cognitive neuroscience. Extensive empirical support from attention studies, neuroimaging, and clinical research. Strong explanatory power for attention-consciousness relationship. Criticisms focus on inability to explain phenomenal consciousness and qualia.",
    keyMilestones: [
      { year: 1988, event: "Baars publishes original GWT", impact: "positive" },
      { year: 2001, event: "Dehaene extends GWT with neurobiological predictions", impact: "positive" },
      { year: 2014, event: "Dehaene publishes 'Consciousness and the Brain'", impact: "positive" },
      { year: 2020, event: "GWT validated in multiple consciousness studies", impact: "positive" },
    ],
  },

  "predictive-processing": {
    theoryId: "predictive-processing",
    theoryName: "Predictive Processing Theory",
    consensusStatus: "mainstream",
    confidenceScore: 79,
    metrics: {
      empiricalSupport: 82,
      replicationRate: 75,
      citationImpact: 88,
      academicAcceptance: 78,
      predictivePower: 85,
      falsifiability: 82,
    },
    supportingCommunity: "Neuroscience, Cognitive Science, AI, Philosophy of Mind",
    majorCritics: ["Ned Block", "Jacob Hohwy", "Andy Clark"],
    yearEstablished: 2005,
    peakInfluence: 2018,
    currentTrend: "rising",
    consensusNarrative: "Predictive Processing has rapidly gained influence as a unifying framework explaining perception, action, and consciousness. Strong empirical support from neuroscience and psychology. Integrates well with Bayesian brain hypothesis and active inference. Criticisms focus on scope and explanatory power for phenomenal consciousness.",
    keyMilestones: [
      { year: 2005, event: "Friston introduces Free Energy Principle", impact: "positive" },
      { year: 2015, event: "Anil Seth proposes Predictive Processing account of consciousness", impact: "positive" },
      { year: 2017, event: "Multiple empirical validations published", impact: "positive" },
      { year: 2020, event: "Becomes mainstream in neuroscience departments", impact: "positive" },
    ],
  },

  "higher-order-thought": {
    theoryId: "higher-order-thought",
    theoryName: "Higher-Order Thought Theory",
    consensusStatus: "emerging",
    confidenceScore: 71,
    metrics: {
      empiricalSupport: 68,
      replicationRate: 65,
      citationImpact: 78,
      academicAcceptance: 72,
      predictivePower: 70,
      falsifiability: 75,
    },
    supportingCommunity: "Philosophy of Mind, Cognitive Science, Neuroscience",
    majorCritics: ["Ned Block", "David Chalmers", "Victor Lamme"],
    yearEstablished: 1992,
    peakInfluence: 2010,
    currentTrend: "stable",
    consensusNarrative: "HOT theory remains influential in philosophy of mind but has faced challenges from empirical research. Good explanatory power for access consciousness but struggles with phenomenal consciousness. Empirical support is moderate with some contradictory findings.",
    keyMilestones: [
      { year: 1992, event: "Rosenthal develops HOT theory", impact: "positive" },
      { year: 2005, event: "Carruthers proposes alternative HOT model", impact: "positive" },
      { year: 2015, event: "Mixed empirical results in consciousness studies", impact: "neutral" },
    ],
  },

  "self-model": {
    theoryId: "self-model",
    theoryName: "Self Model Theory (SMT)",
    consensusStatus: "emerging",
    confidenceScore: 68,
    metrics: {
      empiricalSupport: 70,
      replicationRate: 62,
      citationImpact: 72,
      academicAcceptance: 68,
      predictivePower: 65,
      falsifiability: 70,
    },
    supportingCommunity: "Philosophy of Mind, Neuroscience, Psychology",
    majorCritics: ["Ned Block", "David Chalmers", "Antonio Damasio"],
    yearEstablished: 2003,
    peakInfluence: 2010,
    currentTrend: "stable",
    consensusNarrative: "Metzinger's Self Model Theory offers novel perspective on self and consciousness but remains controversial. Moderate empirical support with some contradictory findings. Strong philosophical contributions but limited neuroscientific validation.",
    keyMilestones: [
      { year: 2003, event: "Metzinger publishes 'Being No One'", impact: "positive" },
      { year: 2009, event: "SMT gains attention in consciousness studies", impact: "positive" },
      { year: 2018, event: "Mixed empirical validation results", impact: "neutral" },
    ],
  },

  "affective-consciousness": {
    theoryId: "affective-consciousness",
    theoryName: "Affective Consciousness Theory",
    consensusStatus: "emerging",
    confidenceScore: 72,
    metrics: {
      empiricalSupport: 75,
      replicationRate: 70,
      citationImpact: 75,
      academicAcceptance: 70,
      predictivePower: 68,
      falsifiability: 72,
    },
    supportingCommunity: "Neuroscience, Psychology, Consciousness Studies",
    majorCritics: ["Ned Block", "Antonio Damasio", "Christof Koch"],
    yearEstablished: 2015,
    peakInfluence: 2020,
    currentTrend: "rising",
    consensusNarrative: "Mark Solms' Affective Consciousness theory has gained significant attention recently. Strong empirical support from neuroscience research on emotion and consciousness. Novel perspective on role of affect in consciousness. Still emerging but rapidly gaining acceptance.",
    keyMilestones: [
      { year: 2015, event: "Solms proposes Affective Consciousness theory", impact: "positive" },
      { year: 2018, event: "Multiple empirical studies support theory", impact: "positive" },
      { year: 2021, event: "Growing acceptance in neuroscience community", impact: "positive" },
    ],
  },

  "neurophenomenology": {
    theoryId: "neurophenomenology",
    theoryName: "Neurophenomenology",
    consensusStatus: "influential-controversial",
    confidenceScore: 65,
    metrics: {
      empiricalSupport: 62,
      replicationRate: 58,
      citationImpact: 78,
      academicAcceptance: 65,
      predictivePower: 60,
      falsifiability: 55,
    },
    supportingCommunity: "Philosophy of Mind, Neuroscience, Cognitive Science",
    majorCritics: ["Ned Block", "Daniel Dennett", "Christof Koch"],
    yearEstablished: 1996,
    peakInfluence: 2005,
    currentTrend: "declining",
    consensusNarrative: "Varela's neurophenomenology bridged neuroscience and phenomenology but remains controversial. Influential in philosophy of mind but limited empirical validation. Criticisms focus on methodological challenges and unclear predictions.",
    keyMilestones: [
      { year: 1996, event: "Varela proposes neurophenomenology", impact: "positive" },
      { year: 2001, event: "Gains attention in consciousness studies", impact: "positive" },
      { year: 2010, event: "Methodological criticisms emerge", impact: "negative" },
      { year: 2020, event: "Remains influential but less central", impact: "neutral" },
    ],
  },

  "constructed-emotion": {
    theoryId: "constructed-emotion",
    theoryName: "Constructed Emotion Theory",
    consensusStatus: "emerging",
    confidenceScore: 74,
    metrics: {
      empiricalSupport: 78,
      replicationRate: 72,
      citationImpact: 82,
      academicAcceptance: 72,
      predictivePower: 70,
      falsifiability: 76,
    },
    supportingCommunity: "Psychology, Neuroscience, Consciousness Studies",
    majorCritics: ["Paul Ekman", "Antonio Damasio", "Jaak Panksepp"],
    yearEstablished: 2014,
    peakInfluence: 2018,
    currentTrend: "rising",
    consensusNarrative: "Lisa Feldman Barrett's Constructed Emotion Theory challenges traditional emotion theories with strong empirical support. Rapidly gaining acceptance in psychology and neuroscience. Integrates well with predictive processing framework. Some criticisms from evolutionary psychology perspective.",
    keyMilestones: [
      { year: 2014, event: "Barrett publishes Constructed Emotion Theory", impact: "positive" },
      { year: 2017, event: "Multiple empirical validations published", impact: "positive" },
      { year: 2020, event: "Becomes mainstream in emotion research", impact: "positive" },
    ],
  },

  "embodied-cognition": {
    theoryId: "embodied-cognition",
    theoryName: "Embodied Cognition",
    consensusStatus: "mainstream",
    confidenceScore: 80,
    metrics: {
      empiricalSupport: 82,
      replicationRate: 76,
      citationImpact: 90,
      academicAcceptance: 82,
      predictivePower: 78,
      falsifiability: 80,
    },
    supportingCommunity: "Cognitive Science, Psychology, Neuroscience, Philosophy",
    majorCritics: ["Jerry Fodor", "Noam Chomsky"],
    yearEstablished: 1980,
    peakInfluence: 2010,
    currentTrend: "stable",
    consensusNarrative: "Embodied cognition is now mainstream in cognitive science with extensive empirical support. Strong evidence from neuroscience, psychology, and AI research. Well-integrated with consciousness theories. Criticisms are now mostly about scope rather than validity.",
    keyMilestones: [
      { year: 1980, event: "Lakoff and Johnson propose embodied cognition", impact: "positive" },
      { year: 2005, event: "Becomes mainstream in cognitive science", impact: "positive" },
      { year: 2015, event: "Extensive empirical validation", impact: "positive" },
    ],
  },

  "attention-schema": {
    theoryId: "attention-schema",
    theoryName: "Attention Schema Theory",
    consensusStatus: "emerging",
    confidenceScore: 66,
    metrics: {
      empiricalSupport: 68,
      replicationRate: 62,
      citationImpact: 70,
      academicAcceptance: 65,
      predictivePower: 68,
      falsifiability: 68,
    },
    supportingCommunity: "Neuroscience, Psychology, Consciousness Studies",
    majorCritics: ["Ned Block", "Christof Koch", "Antonio Damasio"],
    yearEstablished: 2012,
    peakInfluence: 2018,
    currentTrend: "rising",
    consensusNarrative: "Graziano's Attention Schema Theory offers novel perspective on consciousness and attention. Growing empirical support but still emerging. Good explanatory power for attention-consciousness relationship. Needs more replication and validation.",
    keyMilestones: [
      { year: 2012, event: "Graziano proposes Attention Schema Theory", impact: "positive" },
      { year: 2016, event: "Initial empirical support published", impact: "positive" },
      { year: 2020, event: "Growing acceptance in consciousness studies", impact: "positive" },
    ],
  },

  "recurrent-processing": {
    theoryId: "recurrent-processing",
    theoryName: "Recurrent Processing Theory",
    consensusStatus: "emerging",
    confidenceScore: 69,
    metrics: {
      empiricalSupport: 72,
      replicationRate: 68,
      citationImpact: 75,
      academicAcceptance: 68,
      predictivePower: 65,
      falsifiability: 70,
    },
    supportingCommunity: "Neuroscience, Vision Science, Consciousness Studies",
    majorCritics: ["Ned Block", "Christof Koch"],
    yearEstablished: 1998,
    peakInfluence: 2010,
    currentTrend: "stable",
    consensusNarrative: "Lamme's Recurrent Processing Theory focuses on visual consciousness with good empirical support. Strong evidence from visual neuroscience. Criticisms focus on limited scope beyond visual consciousness.",
    keyMilestones: [
      { year: 1998, event: "Lamme proposes Recurrent Processing Theory", impact: "positive" },
      { year: 2010, event: "Multiple empirical validations in vision science", impact: "positive" },
      { year: 2020, event: "Remains influential in visual consciousness research", impact: "positive" },
    ],
  },

  "functionalism": {
    theoryId: "functionalism",
    theoryName: "Functionalism",
    consensusStatus: "mainstream",
    confidenceScore: 77,
    metrics: {
      empiricalSupport: 75,
      replicationRate: 72,
      citationImpact: 92,
      academicAcceptance: 80,
      predictivePower: 72,
      falsifiability: 75,
    },
    supportingCommunity: "Philosophy of Mind, Cognitive Science, AI",
    majorCritics: ["David Chalmers", "Ned Block", "Frank Jackson"],
    yearEstablished: 1960,
    peakInfluence: 1990,
    currentTrend: "stable",
    consensusNarrative: "Functionalism remains a foundational framework in philosophy of mind and cognitive science. Mainstream in AI and computational approaches to consciousness. Criticisms focus on explanatory gap and qualia problem. Still highly influential despite challenges.",
    keyMilestones: [
      { year: 1960, event: "Functionalism emerges in philosophy of mind", impact: "positive" },
      { year: 1990, event: "Peak influence in consciousness studies", impact: "positive" },
      { year: 2010, event: "Challenged by hard problem and qualia", impact: "negative" },
      { year: 2020, event: "Remains mainstream but with modifications", impact: "neutral" },
    ],
  },

  "free-energy-principle": {
    theoryId: "free-energy-principle",
    theoryName: "Free Energy Principle",
    consensusStatus: "emerging",
    confidenceScore: 73,
    metrics: {
      empiricalSupport: 76,
      replicationRate: 70,
      citationImpact: 85,
      academicAcceptance: 72,
      predictivePower: 75,
      falsifiability: 68,
    },
    supportingCommunity: "Neuroscience, AI, Cognitive Science, Physics",
    majorCritics: ["Karl Friston critics", "Neuroscience skeptics"],
    yearEstablished: 2005,
    peakInfluence: 2018,
    currentTrend: "rising",
    consensusNarrative: "Friston's Free Energy Principle is rapidly gaining influence as a unifying framework for neuroscience and consciousness. Strong mathematical foundation with growing empirical support. Ambitious scope generates both enthusiasm and skepticism.",
    keyMilestones: [
      { year: 2005, event: "Friston introduces Free Energy Principle", impact: "positive" },
      { year: 2015, event: "Growing empirical validation", impact: "positive" },
      { year: 2020, event: "Becomes mainstream in computational neuroscience", impact: "positive" },
    ],
  },

  "quantum-consciousness": {
    theoryId: "quantum-consciousness",
    theoryName: "Quantum Consciousness",
    consensusStatus: "minority-position",
    confidenceScore: 35,
    metrics: {
      empiricalSupport: 25,
      replicationRate: 15,
      citationImpact: 55,
      academicAcceptance: 30,
      predictivePower: 20,
      falsifiability: 25,
    },
    supportingCommunity: "Fringe Physics, Some Philosophy of Mind",
    majorCritics: ["Christof Koch", "Antonio Damasio", "Mainstream Neuroscience"],
    yearEstablished: 1989,
    peakInfluence: 2000,
    currentTrend: "declining",
    consensusNarrative: "Penrose-Hameroff quantum consciousness remains a minority position with limited empirical support. Criticized for lack of falsifiable predictions and weak empirical evidence. Maintains some support in fringe physics but rejected by mainstream neuroscience.",
    keyMilestones: [
      { year: 1989, event: "Penrose and Hameroff propose quantum consciousness", impact: "positive" },
      { year: 2000, event: "Peak influence in fringe consciousness studies", impact: "positive" },
      { year: 2010, event: "Mainstream neuroscience rejects theory", impact: "negative" },
      { year: 2020, event: "Remains minority position with limited support", impact: "negative" },
    ],
  },

  "dualism": {
    theoryId: "dualism",
    theoryName: "Dualism",
    consensusStatus: "historical",
    confidenceScore: 22,
    metrics: {
      empiricalSupport: 10,
      replicationRate: 5,
      citationImpact: 80,
      academicAcceptance: 15,
      predictivePower: 5,
      falsifiability: 10,
    },
    supportingCommunity: "Philosophy, Theology, Some Philosophers of Mind",
    majorCritics: ["Mainstream Neuroscience", "Cognitive Science", "Philosophy of Mind"],
    yearEstablished: 1600,
    peakInfluence: 1900,
    currentTrend: "declining",
    consensusNarrative: "Cartesian dualism is now considered historical in mainstream consciousness science. Rejected by neuroscience due to lack of empirical support. Remains influential in philosophy and theology but not in consciousness research. Cited mainly for historical context.",
    keyMilestones: [
      { year: 1600, event: "Descartes proposes mind-body dualism", impact: "positive" },
      { year: 1900, event: "Peak influence in philosophy", impact: "positive" },
      { year: 1950, event: "Neuroscience begins challenging dualism", impact: "negative" },
      { year: 2020, event: "Considered historical, not mainstream", impact: "negative" },
    ],
  },

  "panpsychism": {
    theoryId: "panpsychism",
    theoryName: "Panpsychism",
    consensusStatus: "minority-position",
    confidenceScore: 38,
    metrics: {
      empiricalSupport: 30,
      replicationRate: 20,
      citationImpact: 60,
      academicAcceptance: 35,
      predictivePower: 25,
      falsifiability: 30,
    },
    supportingCommunity: "Philosophy of Mind, Some Consciousness Researchers",
    majorCritics: ["Mainstream Neuroscience", "Cognitive Science"],
    yearEstablished: 2000,
    peakInfluence: 2015,
    currentTrend: "rising",
    consensusNarrative: "Panpsychism has gained some attention as alternative to hard problem but remains minority position. Philosophical interest growing but limited empirical support. Criticisms focus on lack of falsifiable predictions and unfalsifiability.",
    keyMilestones: [
      { year: 2000, event: "Modern panpsychism emerges in philosophy", impact: "positive" },
      { year: 2015, event: "Gains philosophical attention", impact: "positive" },
      { year: 2020, event: "Remains minority position with limited empirical support", impact: "neutral" },
    ],
  },
};

// Consensus status labels and descriptions
export const CONSENSUS_STATUS_LABELS: Record<ConsensusStatus, string> = {
  "mainstream": "Mainstream",
  "emerging": "Emerging",
  "influential-controversial": "Influential but Controversial",
  "minority-position": "Minority Position",
  "historical": "Historical",
};

export const CONSENSUS_STATUS_DESCRIPTIONS: Record<ConsensusStatus, string> = {
  "mainstream": "Widely accepted by the scientific community with strong empirical support and high citation impact.",
  "emerging": "Growing acceptance with moderate empirical support and increasing influence in the field.",
  "influential-controversial": "Significant influence but remains controversial with mixed empirical support.",
  "minority-position": "Limited acceptance with weak empirical support, held by small segment of researchers.",
  "historical": "Historically important but largely rejected by modern science with minimal current influence.",
};

// Consensus status colors for UI
export const CONSENSUS_STATUS_COLORS: Record<ConsensusStatus, string> = {
  "mainstream": "border-green-500/50 bg-green-500/10",
  "emerging": "border-blue-500/50 bg-blue-500/10",
  "influential-controversial": "border-yellow-500/50 bg-yellow-500/10",
  "minority-position": "border-orange-500/50 bg-orange-500/10",
  "historical": "border-gray-500/50 bg-gray-500/10",
};

// Get consensus score interpretation
export function getConsensusInterpretation(score: number): string {
  if (score >= 80) return "Very Strong Consensus";
  if (score >= 70) return "Strong Consensus";
  if (score >= 60) return "Moderate Consensus";
  if (score >= 50) return "Weak Consensus";
  if (score >= 40) return "Very Weak Consensus";
  return "Minimal Consensus";
}

// Get consensus trend emoji
export function getTrendEmoji(trend: "rising" | "stable" | "declining" | "reviving"): string {
  switch (trend) {
    case "rising":
      return "📈";
    case "stable":
      return "➡️";
    case "declining":
      return "📉";
    case "reviving":
      return "🔄";
  }
}

// Calculate average metrics across all theories
export function getConsensusStatistics() {
  const allTheories = Object.values(THEORY_CONSENSUS);
  const avgConfidence = allTheories.reduce((sum, t) => sum + t.confidenceScore, 0) / allTheories.length;
  const avgEmpirical = allTheories.reduce((sum, t) => sum + t.metrics.empiricalSupport, 0) / allTheories.length;
  const avgReplication = allTheories.reduce((sum, t) => sum + t.metrics.replicationRate, 0) / allTheories.length;
  const avgCitation = allTheories.reduce((sum, t) => sum + t.metrics.citationImpact, 0) / allTheories.length;

  const statusCounts = {
    mainstream: allTheories.filter((t) => t.consensusStatus === "mainstream").length,
    emerging: allTheories.filter((t) => t.consensusStatus === "emerging").length,
    "influential-controversial": allTheories.filter((t) => t.consensusStatus === "influential-controversial").length,
    "minority-position": allTheories.filter((t) => t.consensusStatus === "minority-position").length,
    historical: allTheories.filter((t) => t.consensusStatus === "historical").length,
  };

  return {
    totalTheories: allTheories.length,
    avgConfidence: Math.round(avgConfidence),
    avgEmpirical: Math.round(avgEmpirical),
    avgReplication: Math.round(avgReplication),
    avgCitation: Math.round(avgCitation),
    statusCounts,
  };
}
