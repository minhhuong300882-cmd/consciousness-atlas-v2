// Bidirectional linking utilities for Theory-Evidence relationships

import { THEORY_EVIDENCE_RELATIONSHIPS } from "@/data/theoryEvidenceRelationships";
import { THEORY_DETAILS } from "@/data/theoryDetails";
import { EVIDENCE_DETAILED } from "@/data/evidenceDetailed";

export interface TheoryEvidenceSummary {
  theoryId: string;
  theoryName: string;
  supportingExperiments: Array<{
    id: string;
    name: string;
    strength: string;
    replicationStatus: string;
  }>;
  contradictingExperiments: Array<{
    id: string;
    name: string;
    strength: string;
    replicationStatus: string;
  }>;
  totalEvidence: number;
  evidenceStrength: string;
  replicationStatus: string;
  unresolvedProblems: string[];
}

export interface ExperimentTheorySummary {
  experimentId: string;
  experimentName: string;
  supportedTheories: Array<{
    id: string;
    name: string;
    strength: string;
  }>;
  challengedTheories: Array<{
    id: string;
    name: string;
    strength: string;
  }>;
  alternativeInterpretations: string[];
  replicationStatus: string;
}

// Get evidence summary for a theory
export function getTheoryEvidenceSummary(theoryId: string): TheoryEvidenceSummary | null {
  const theory = THEORY_DETAILS[theoryId];
  if (!theory) return null;

  const relations = THEORY_EVIDENCE_RELATIONSHIPS.filter((rel) => rel.theoryId === theoryId);

  const supporting = relations
    .filter((rel) => rel.relationship === "supports")
    .map((rel) => {
      const exp = Object.values(EVIDENCE_DETAILED).find((e: any) => e.id === rel.experimentId);
      return {
        id: rel.experimentId,
        name: exp?.name || "Unknown Experiment",
        strength: rel.strength,
        replicationStatus: rel.replicationStatus,
      };
    });

  const contradicting = relations
    .filter((rel) => rel.relationship === "contradicts")
    .map((rel) => {
      const exp = Object.values(EVIDENCE_DETAILED).find((e: any) => e.id === rel.experimentId);
      return {
        id: rel.experimentId,
        name: exp?.name || "Unknown Experiment",
        strength: rel.strength,
        replicationStatus: rel.replicationStatus,
      };
    });

  // Calculate evidence strength
  const strengthScores = { "very-strong": 4, strong: 3, moderate: 2, weak: 1 };
  const avgStrength =
    supporting.length > 0
      ? supporting.reduce((sum, exp) => sum + (strengthScores[exp.strength as keyof typeof strengthScores] || 0), 0) /
        supporting.length
      : 0;

  let evidenceStrengthLabel = "weak";
  if (avgStrength >= 3.5) evidenceStrengthLabel = "very-strong";
  else if (avgStrength >= 2.5) evidenceStrengthLabel = "strong";
  else if (avgStrength >= 1.5) evidenceStrengthLabel = "moderate";

  // Calculate replication status
  const replicatedCount = supporting.filter((exp) => exp.replicationStatus === "replicated").length;
  let replicationStatus = "mostly-unreplicated";
  if (supporting.length > 0) {
    const replicationRatio = replicatedCount / supporting.length;
    if (replicationRatio > 0.66) replicationStatus = "mostly-replicated";
    else if (replicationRatio > 0.33) replicationStatus = "mixed";
  }

  // Collect unresolved problems
  const unresolvedProblems = Array.from(
    new Set(relations.flatMap((rel) => rel.unresolvedProblems))
  );

  return {
    theoryId,
    theoryName: theory.name,
    supportingExperiments: supporting,
    contradictingExperiments: contradicting,
    totalEvidence: supporting.length + contradicting.length,
    evidenceStrength: evidenceStrengthLabel,
    replicationStatus,
    unresolvedProblems,
  };
}

// Get theory summary for an experiment
export function getExperimentTheorySummary(experimentId: string): ExperimentTheorySummary | null {
  const experiment = Object.values(EVIDENCE_DETAILED).find((e: any) => e.id === experimentId);
  if (!experiment) return null;

  const relations = THEORY_EVIDENCE_RELATIONSHIPS.filter((rel) => rel.experimentId === experimentId);

  const supported = relations
    .filter((rel) => rel.relationship === "supports")
    .map((rel) => {
      const theory = THEORY_DETAILS[rel.theoryId];
      return {
        id: rel.theoryId,
        name: theory?.name || "Unknown Theory",
        strength: rel.strength,
      };
    });

  const challenged = relations
    .filter((rel) => rel.relationship === "contradicts")
    .map((rel) => {
      const theory = THEORY_DETAILS[rel.theoryId];
      return {
        id: rel.theoryId,
        name: theory?.name || "Unknown Theory",
        strength: rel.strength,
      };
    });

  // Collect alternative interpretations
  const alternativeInterpretations = Array.from(
    new Set(relations.flatMap((rel) => rel.alternativeInterpretations))
  );

  // Determine overall replication status
  const replicationStatuses = relations.map((rel) => rel.replicationStatus);
  let replicationStatus = "unreplicated";
  if (replicationStatuses.includes("replicated")) replicationStatus = "replicated";
  else if (replicationStatuses.includes("partially-replicated")) replicationStatus = "partially-replicated";
  else if (replicationStatuses.includes("contradicted")) replicationStatus = "contradicted";

  return {
    experimentId,
    experimentName: experiment.name,
    supportedTheories: supported,
    challengedTheories: challenged,
    alternativeInterpretations,
    replicationStatus,
  };
}

// Get all experiments for a theory
export function getTheoryExperiments(theoryId: string) {
  return THEORY_EVIDENCE_RELATIONSHIPS.filter((rel) => rel.theoryId === theoryId);
}

// Get all theories for an experiment
export function getExperimentTheories(experimentId: string) {
  return THEORY_EVIDENCE_RELATIONSHIPS.filter((rel) => rel.experimentId === experimentId);
}

// Get experiments by relationship type
export function getExperimentsByRelationship(theoryId: string, relationship: "supports" | "contradicts") {
  return THEORY_EVIDENCE_RELATIONSHIPS.filter(
    (rel) => rel.theoryId === theoryId && rel.relationship === relationship
  );
}

// Get theories by relationship type
export function getTheoriesByRelationship(experimentId: string, relationship: "supports" | "contradicts") {
  return THEORY_EVIDENCE_RELATIONSHIPS.filter(
    (rel) => rel.experimentId === experimentId && rel.relationship === relationship
  );
}

// Get evidence statistics
export function getEvidenceStatistics() {
  const totalRelations = THEORY_EVIDENCE_RELATIONSHIPS.length;
  const supportingRelations = THEORY_EVIDENCE_RELATIONSHIPS.filter((rel) => rel.relationship === "supports").length;
  const contradictingRelations = THEORY_EVIDENCE_RELATIONSHIPS.filter((rel) => rel.relationship === "contradicts")
    .length;

  const replicatedCount = THEORY_EVIDENCE_RELATIONSHIPS.filter((rel) => rel.replicationStatus === "replicated").length;
  const partiallyReplicatedCount = THEORY_EVIDENCE_RELATIONSHIPS.filter(
    (rel) => rel.replicationStatus === "partially-replicated"
  ).length;

  return {
    totalRelations,
    supportingRelations,
    contradictingRelations,
    replicatedCount,
    partiallyReplicatedCount,
    supportRatio: (supportingRelations / totalRelations) * 100,
    replicationRatio: (replicatedCount / totalRelations) * 100,
  };
}
