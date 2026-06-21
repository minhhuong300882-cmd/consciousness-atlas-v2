// Theory-Evidence Relationship Layer
// Maps experiments to theories with supporting/contradictory evidence, replication status, and interpretations

export interface TheoryEvidenceRelation {
  experimentId: string;
  theoryId: string;
  relationship: "supports" | "contradicts" | "neutral" | "complex";
  strength: "very-strong" | "strong" | "moderate" | "weak";
  replicationStatus: "replicated" | "partially-replicated" | "unreplicated" | "contradicted";
  supportingEvidence: string[];
  alternativeInterpretations: string[];
  unresolvedProblems: string[];
  notes: string;
}

export interface ExperimentTheoryView {
  experimentId: string;
  supportedTheories: string[];
  challengedTheories: string[];
  neutralTheories: string[];
  alternativeInterpretations: string[];
  replicationStatus: "replicated" | "partially-replicated" | "unreplicated" | "contradicted";
}

export interface TheoryEvidenceView {
  theoryId: string;
  supportingExperiments: string[];
  contradictingExperiments: string[];
  evidenceStrength: "very-strong" | "strong" | "moderate" | "weak";
  replicationStatus: "mostly-replicated" | "mixed" | "mostly-unreplicated";
  unresolvedProblems: string[];
}

// Theory-Evidence Relationships Database
export const THEORY_EVIDENCE_RELATIONSHIPS: TheoryEvidenceRelation[] = [
  // Global Workspace Theory (GWT) - Supported by Global Workspace Studies
  {
    experimentId: "global-workspace-studies-baars-1988",
    theoryId: "global-workspace",
    relationship: "supports",
    strength: "very-strong",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Conscious access correlates with global broadcast",
      "Unconscious processes are parallel but not broadcast",
      "Attention acts as bottleneck to consciousness",
    ],
    alternativeInterpretations: [
      "Broadcast may be consequence, not cause of consciousness",
      "Global workspace may be necessary but not sufficient",
      "Other mechanisms may produce similar effects",
    ],
    unresolvedProblems: [
      "Doesn't explain why broadcast produces consciousness",
      "Doesn't explain qualia",
      "Unclear what constitutes 'workspace'",
    ],
    notes: "Foundational evidence for GWT. Replicated in multiple labs.",
  },

  // Integrated Information Theory (IIT) - Supported by IIT Perturbational Studies
  {
    experimentId: "iit-perturbational-studies-tononi-2016",
    theoryId: "integrated-information",
    relationship: "supports",
    strength: "strong",
    replicationStatus: "partially-replicated",
    supportingEvidence: [
      "Perturbational complexity correlates with consciousness",
      "Anesthesia reduces complexity",
      "Brain damage reduces consciousness correlates with complexity loss",
    ],
    alternativeInterpretations: [
      "Complexity may be consequence of consciousness, not cause",
      "Other measures of integration may work better",
      "Complexity alone may not determine consciousness",
    ],
    unresolvedProblems: [
      "Difficult to measure phi in real brains",
      "Unclear if phi is necessary or sufficient",
      "Doesn't explain qualia",
    ],
    notes: "Growing empirical support but technical challenges remain.",
  },

  // Predictive Processing - Supported by Predictive Coding Experiments
  {
    experimentId: "predictive-coding-experiments-friston-2010",
    theoryId: "predictive-processing",
    relationship: "supports",
    strength: "strong",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Prediction errors drive perception",
      "Brain minimizes prediction error",
      "Violations of predictions produce consciousness",
    ],
    alternativeInterpretations: [
      "Prediction may be one mechanism among many",
      "Error signals may not be sufficient for consciousness",
      "Other theories may explain same phenomena",
    ],
    unresolvedProblems: [
      "Doesn't explain why prediction produces consciousness",
      "Doesn't explain qualia",
      "Unclear how hierarchical predictions relate to consciousness",
    ],
    notes: "Strong empirical support. Increasingly mainstream.",
  },

  // Predictive Processing - Supported by Bayesian Perception Studies
  {
    experimentId: "bayesian-perception-studies-knill-2007",
    theoryId: "predictive-processing",
    relationship: "supports",
    strength: "strong",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Perception follows Bayesian principles",
      "Prior expectations influence perception",
      "Uncertainty is represented in neural activity",
    ],
    alternativeInterpretations: [
      "Bayesian structure may be emergent, not fundamental",
      "Other statistical models may work equally well",
      "Neural implementation may differ from Bayesian theory",
    ],
    unresolvedProblems: [
      "Doesn't explain consciousness directly",
      "Unclear how Bayesian inference relates to qualia",
      "May not explain all perceptual phenomena",
    ],
    notes: "Strong support for predictive processing framework.",
  },

  // Embodied Cognition - Supported by Rubber Hand Illusion
  {
    experimentId: "rubber-hand-illusion-botvinick-1998",
    theoryId: "embodied-cognition",
    relationship: "supports",
    strength: "strong",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Body ownership is malleable",
      "Consciousness depends on body representation",
      "Multisensory integration creates body ownership",
    ],
    alternativeInterpretations: [
      "Illusion may be perceptual, not consciousness-related",
      "Body ownership may be separate from consciousness",
      "Other mechanisms may produce similar effects",
    ],
    unresolvedProblems: [
      "Doesn't explain why body ownership produces consciousness",
      "Doesn't explain qualia",
      "Unclear how body representation relates to consciousness",
    ],
    notes: "Classic demonstration of embodied cognition.",
  },

  // Embodied Cognition - Supported by Somatic Marker Hypothesis
  {
    experimentId: "somatic-marker-hypothesis-damasio-1994",
    theoryId: "embodied-cognition",
    relationship: "supports",
    strength: "strong",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Bodily states influence decision-making",
      "Emotion depends on bodily feedback",
      "Consciousness depends on interoception",
    ],
    alternativeInterpretations: [
      "Bodily states may influence but not constitute consciousness",
      "Other mechanisms may produce similar effects",
      "Somatic markers may be consequences, not causes",
    ],
    unresolvedProblems: [
      "Doesn't explain why somatic states produce consciousness",
      "Doesn't explain qualia",
      "Unclear how interoception relates to consciousness",
    ],
    notes: "Foundational for embodied cognition approach.",
  },

  // Libet Experiment - Contradicts Simple Free Will
  {
    experimentId: "libet-experiments-libet-1983",
    theoryId: "free-will",
    relationship: "contradicts",
    strength: "moderate",
    replicationStatus: "partially-replicated",
    supportingEvidence: [
      "Readiness potential precedes conscious decision",
      "Consciousness may not initiate action",
      "Unconscious processes may drive decisions",
    ],
    alternativeInterpretations: [
      "Readiness potential may not predict action",
      "Consciousness may veto rather than initiate",
      "Libet's interpretation may be incorrect",
    ],
    unresolvedProblems: [
      "Schurger reanalysis questions original findings",
      "Unclear what readiness potential represents",
      "Doesn't resolve free will debate",
    ],
    notes: "Controversial. Schurger (2012, 2016) reanalysis questions findings.",
  },

  // Schurger Reanalysis - Contradicts Libet Interpretation
  {
    experimentId: "schurger-reanalysis-schurger-2012",
    theoryId: "free-will",
    relationship: "supports",
    strength: "strong",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Readiness potential may be random noise",
      "Libet's findings may be statistical artifact",
      "Free will debate remains unresolved",
    ],
    alternativeInterpretations: [
      "Readiness potential may still have meaning",
      "Schurger analysis may be incomplete",
      "Other interpretations possible",
    ],
    unresolvedProblems: [
      "Doesn't resolve free will debate",
      "Unclear what neural activity precedes decisions",
      "Consciousness and decision-making still unclear",
    ],
    notes: "Important reanalysis challenging Libet interpretation.",
  },

  // Attention Blink - Supports Attention Schema Theory
  {
    experimentId: "attention-blink-raymond-1992",
    theoryId: "attention-schema",
    relationship: "supports",
    strength: "moderate",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Attention has limited capacity",
      "Consciousness depends on attention",
      "Attention schema explains unity of consciousness",
    ],
    alternativeInterpretations: [
      "Attention blink may not relate to consciousness",
      "Other mechanisms may explain attention limitations",
      "Attention schema may not be correct explanation",
    ],
    unresolvedProblems: [
      "Doesn't directly test attention schema",
      "Unclear how attention schema produces consciousness",
      "May not explain all consciousness phenomena",
    ],
    notes: "Consistent with but doesn't directly test AST.",
  },

  // Inattentional Blindness - Supports Attention Schema Theory
  {
    experimentId: "inattentional-blindness-simons-1999",
    theoryId: "attention-schema",
    relationship: "supports",
    strength: "moderate",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Consciousness depends on attention",
      "Unattended stimuli are not conscious",
      "Attention schema may explain this phenomenon",
    ],
    alternativeInterpretations: [
      "Inattentional blindness may not relate to consciousness",
      "Other mechanisms may explain the phenomenon",
      "Attention schema may not be correct explanation",
    ],
    unresolvedProblems: [
      "Doesn't directly test attention schema",
      "Unclear how attention schema produces consciousness",
      "May not explain all consciousness phenomena",
    ],
    notes: "Consistent with AST but alternative explanations exist.",
  },

  // Visual Masking - Supports Recurrent Processing Theory
  {
    experimentId: "visual-masking-lamme-1998",
    theoryId: "recurrent-processing",
    relationship: "supports",
    strength: "strong",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Recurrent processing necessary for consciousness",
      "Feedforward processing is unconscious",
      "Consciousness requires feedback loops",
    ],
    alternativeInterpretations: [
      "Masking may work through other mechanisms",
      "Recurrent processing may not be sufficient",
      "Other theories may explain same phenomena",
    ],
    unresolvedProblems: [
      "Doesn't explain why recurrence produces consciousness",
      "Doesn't explain qualia",
      "Unclear how recurrent signals relate to consciousness",
    ],
    notes: "Key evidence for recurrent processing theory.",
  },

  // Mirror Neurons - Supports Embodied Cognition
  {
    experimentId: "mirror-neurons-rizzolatti-1996",
    theoryId: "embodied-cognition",
    relationship: "supports",
    strength: "moderate",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Understanding depends on embodied simulation",
      "Consciousness may depend on simulation",
      "Embodied processes are central to cognition",
    ],
    alternativeInterpretations: [
      "Mirror neurons may not relate to consciousness",
      "Simulation may be separate from consciousness",
      "Other mechanisms may explain mirror neuron function",
    ],
    unresolvedProblems: [
      "Doesn't directly explain consciousness",
      "Unclear how simulation relates to consciousness",
      "May not explain all consciousness phenomena",
    ],
    notes: "Supports embodied cognition but doesn't directly address consciousness.",
  },

  // Binocular Rivalry - Supports Multiple Theories
  {
    experimentId: "binocular-rivalry-studies",
    theoryId: "predictive-processing",
    relationship: "supports",
    strength: "moderate",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Perception is predictive",
      "Consciousness involves prediction",
      "Prediction errors drive perception",
    ],
    alternativeInterpretations: [
      "Rivalry may involve other mechanisms",
      "Prediction may not be central",
      "Other theories may explain phenomenon",
    ],
    unresolvedProblems: [
      "Doesn't explain why perception switches",
      "Unclear how prediction relates to rivalry",
      "May not explain all rivalry phenomena",
    ],
    notes: "Studied by multiple theories with different interpretations.",
  },

  // Change Blindness - Supports Attention Schema Theory
  {
    experimentId: "change-blindness-rensink-1997",
    theoryId: "attention-schema",
    relationship: "supports",
    strength: "moderate",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Consciousness depends on attention",
      "Unattended changes are not noticed",
      "Attention schema explains this phenomenon",
    ],
    alternativeInterpretations: [
      "Change blindness may not relate to consciousness",
      "Other mechanisms may explain phenomenon",
      "Attention schema may not be correct explanation",
    ],
    unresolvedProblems: [
      "Doesn't directly test attention schema",
      "Unclear how attention schema produces consciousness",
      "May not explain all consciousness phenomena",
    ],
    notes: "Demonstrates importance of attention for consciousness.",
  },

  // Split Brain Studies - Supports Multiple Theories
  {
    experimentId: "split-brain-studies-sperry-1968",
    theoryId: "integrated-information",
    relationship: "supports",
    strength: "strong",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Consciousness depends on integration",
      "Severing connections affects consciousness",
      "Integration is necessary for unified consciousness",
    ],
    alternativeInterpretations: [
      "Split brain may not eliminate consciousness",
      "Each hemisphere may have consciousness",
      "Integration may not be sufficient",
    ],
    unresolvedProblems: [
      "Unclear if split-brain patients have one or two consciousnesses",
      "Doesn't explain why integration produces consciousness",
      "May not explain all consciousness phenomena",
    ],
    notes: "Classic evidence for importance of integration.",
  },

  // Blindsight Studies - Contradicts Simple Consciousness Theories
  {
    experimentId: "blindsight-studies-weiskrantz-1986",
    theoryId: "global-workspace",
    relationship: "contradicts",
    strength: "moderate",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Visual processing can occur without consciousness",
      "Consciousness may not be necessary for all processing",
      "Global workspace may not be necessary for all functions",
    ],
    alternativeInterpretations: [
      "Blindsight patients may have residual consciousness",
      "Consciousness may not be all-or-nothing",
      "Other mechanisms may explain blindsight",
    ],
    unresolvedProblems: [
      "Unclear if blindsight is truly unconscious",
      "Doesn't explain why consciousness evolved",
      "May not explain all consciousness phenomena",
    ],
    notes: "Challenges simple consciousness theories.",
  },

  // TMS Consciousness Studies - Supports Integrated Information Theory
  {
    experimentId: "tms-consciousness-studies-casali-2013",
    theoryId: "integrated-information",
    relationship: "supports",
    strength: "strong",
    replicationStatus: "replicated",
    supportingEvidence: [
      "TMS-EEG markers correlate with consciousness",
      "Perturbational complexity predicts consciousness",
      "Integration is necessary for consciousness",
    ],
    alternativeInterpretations: [
      "TMS effects may not directly measure consciousness",
      "Other markers may work equally well",
      "Integration may not be sufficient",
    ],
    unresolvedProblems: [
      "Doesn't explain why integration produces consciousness",
      "Doesn't explain qualia",
      "May not explain all consciousness phenomena",
    ],
    notes: "Strong empirical support for IIT predictions.",
  },

  // Neural Correlates of Consciousness Studies - Supports Multiple Theories
  {
    experimentId: "neural-correlates-consciousness-koch-2016",
    theoryId: "global-workspace",
    relationship: "supports",
    strength: "moderate",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Consciousness correlates with specific neural activity",
      "Consciousness depends on neural processes",
      "Global workspace may be neural correlate",
    ],
    alternativeInterpretations: [
      "Correlates may not be causes",
      "Other neural patterns may produce consciousness",
      "Multiple mechanisms may be involved",
    ],
    unresolvedProblems: [
      "Doesn't explain why neural activity produces consciousness",
      "Doesn't explain qualia",
      "Correlation doesn't prove causation",
    ],
    notes: "Extensive research on neural correlates of consciousness.",
  },

  // Dreaming and REM Studies - Supports Predictive Processing
  {
    experimentId: "dreaming-rem-studies-hobson-1977",
    theoryId: "predictive-processing",
    relationship: "supports",
    strength: "moderate",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Dreams involve prediction and hallucination",
      "Consciousness during sleep involves prediction",
      "Predictive processing explains dream phenomena",
    ],
    alternativeInterpretations: [
      "Dreams may involve other mechanisms",
      "Prediction may not be central to dreams",
      "Other theories may explain dream phenomena",
    ],
    unresolvedProblems: [
      "Doesn't explain why dreams occur",
      "Unclear how prediction relates to dreams",
      "May not explain all dream phenomena",
    ],
    notes: "Dreams provide evidence for predictive processing.",
  },

  // Anesthesia Studies - Supports Integrated Information Theory
  {
    experimentId: "anesthesia-studies-tononi-2012",
    theoryId: "integrated-information",
    relationship: "supports",
    strength: "strong",
    replicationStatus: "replicated",
    supportingEvidence: [
      "Anesthesia reduces integration",
      "Consciousness correlates with integration",
      "Loss of consciousness correlates with loss of integration",
    ],
    alternativeInterpretations: [
      "Anesthesia may work through other mechanisms",
      "Integration may not be sufficient",
      "Other theories may explain anesthesia",
    ],
    unresolvedProblems: [
      "Doesn't explain why integration produces consciousness",
      "Doesn't explain qualia",
      "May not explain all anesthesia phenomena",
    ],
    notes: "Strong evidence for IIT predictions.",
  },
];

// Helper function to get theories supported by an experiment
export function getTheoriesSupportedByExperiment(experimentId: string): string[] {
  return THEORY_EVIDENCE_RELATIONSHIPS.filter(
    (rel) => rel.experimentId === experimentId && rel.relationship === "supports"
  ).map((rel) => rel.theoryId);
}

// Helper function to get theories challenged by an experiment
export function getTheoriesChallengedByExperiment(experimentId: string): string[] {
  return THEORY_EVIDENCE_RELATIONSHIPS.filter(
    (rel) => rel.experimentId === experimentId && rel.relationship === "contradicts"
  ).map((rel) => rel.theoryId);
}

// Helper function to get experiments supporting a theory
export function getExperimentsSupportingTheory(theoryId: string): string[] {
  return THEORY_EVIDENCE_RELATIONSHIPS.filter(
    (rel) => rel.theoryId === theoryId && rel.relationship === "supports"
  ).map((rel) => rel.experimentId);
}

// Helper function to get experiments contradicting a theory
export function getExperimentsContradictingTheory(theoryId: string): string[] {
  return THEORY_EVIDENCE_RELATIONSHIPS.filter(
    (rel) => rel.theoryId === theoryId && rel.relationship === "contradicts"
  ).map((rel) => rel.experimentId);
}

// Helper function to get evidence strength for a theory
export function getTheoryEvidenceStrength(theoryId: string): "very-strong" | "strong" | "moderate" | "weak" {
  const relations = THEORY_EVIDENCE_RELATIONSHIPS.filter(
    (rel) => rel.theoryId === theoryId && rel.relationship === "supports"
  );
  
  if (relations.length === 0) return "weak";
  
  const strengths = relations.map((r) => r.strength);
  if (strengths.includes("very-strong")) return "very-strong";
  if (strengths.includes("strong")) return "strong";
  if (strengths.includes("moderate")) return "moderate";
  return "weak";
}

// Helper function to get replication status for a theory
export function getTheoryReplicationStatus(theoryId: string): "mostly-replicated" | "mixed" | "mostly-unreplicated" {
  const relations = THEORY_EVIDENCE_RELATIONSHIPS.filter(
    (rel) => rel.theoryId === theoryId && rel.relationship === "supports"
  );
  
  if (relations.length === 0) return "mostly-unreplicated";
  
  const replicated = relations.filter((r) => r.replicationStatus === "replicated").length;
  const total = relations.length;
  
  if (replicated / total > 0.66) return "mostly-replicated";
  if (replicated / total > 0.33) return "mixed";
  return "mostly-unreplicated";
}
