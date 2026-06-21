import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Users, Lightbulb, BookOpen, Zap, TrendingUp, AlertCircle, FileText, Award } from "lucide-react";
import { EVIDENCE_DETAILED, EVIDENCE_QUALITY_COLORS, REPLICATION_STATUS_COLORS } from "@/data/evidenceDetailed";
import { THEORY_DETAILS } from "@/data/theoryDetails";

interface EvidenceDetailProps {
  evidenceId: string;
  onBack: () => void;
}

export function EvidenceDetailView({ evidenceId, onBack }: EvidenceDetailProps) {
  const [, navigate] = useLocation();
  const [mode, setMode] = useState<"beginner" | "researcher">("beginner");

  const evidence = EVIDENCE_DETAILED[evidenceId];
  if (!evidence) return null;

  const supportingTheories = evidence.supportingTheories
    .map((id) => THEORY_DETAILS[id])
    .filter(Boolean);

  const contradictingTheories = evidence.contradictingTheories
    .map((id) => THEORY_DETAILS[id])
    .filter(Boolean);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">{evidence.name}</h2>
            <p className="text-muted-foreground text-lg">{evidence.summary}</p>
          </div>
          <div className="flex gap-2">
            <span className={`px-3 py-1 rounded-lg text-sm font-semibold border ${EVIDENCE_QUALITY_COLORS[evidence.statisticalStrength]}`}>
              {evidence.statisticalStrength.replace("-", " ").toUpperCase()}
            </span>
            <span className={`px-3 py-1 rounded-lg text-sm font-semibold border ${REPLICATION_STATUS_COLORS[evidence.replicationStatus]}`}>
              {evidence.replicationStatus.replace("-", " ").toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Mode Toggle */}
      <div className="flex gap-2">
        <Button
          variant={mode === "beginner" ? "default" : "outline"}
          onClick={() => setMode("beginner")}
          className={mode === "beginner" ? "bg-cyan-600 hover:bg-cyan-700" : ""}
        >
          Beginner Mode
        </Button>
        <Button
          variant={mode === "researcher" ? "default" : "outline"}
          onClick={() => setMode("researcher")}
          className={mode === "researcher" ? "bg-cyan-600 hover:bg-cyan-700" : ""}
        >
          Researcher Mode
        </Button>
      </div>

      {/* Beginner Mode */}
      {mode === "beginner" && (
        <div className="space-y-6">
          {/* Research Question */}
          <Card className="border-border p-6 bg-card/50">
            <h3 className="text-lg font-bold mb-4">Research Question</h3>
            <p className="text-foreground/80 text-lg leading-relaxed">{evidence.researchQuestion}</p>
          </Card>

          {/* Key Findings */}
          <Card className="border-border p-6">
            <h3 className="text-lg font-bold mb-4 text-green-400">Key Findings</h3>
            <ul className="space-y-3">
              {evidence.keyFindings.map((finding, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span className="text-foreground/80">{finding}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Interpretation */}
          <Card className="border-border p-6">
            <h3 className="text-lg font-bold mb-4">What This Means</h3>
            <p className="text-foreground/80 leading-relaxed">{evidence.interpretation}</p>
          </Card>

          {/* Scientific Consensus */}
          <Card className="border-border p-6 bg-blue-500/10 border-blue-500/30">
            <h3 className="text-lg font-bold mb-4 text-blue-400">Scientific Consensus</h3>
            <p className="text-foreground/80 leading-relaxed">{evidence.scientificConsensus}</p>
          </Card>

          {/* Supporting Theories */}
          {supportingTheories.length > 0 && (
            <Card className="border-border p-6">
              <h3 className="text-lg font-bold mb-4 text-green-400 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Supports These Theories
              </h3>
              <div className="space-y-2">
                {supportingTheories.map((theory) => (
                  <button
                    key={theory.id}
                    onClick={() => navigate("/field-map")}
                    className="w-full text-left p-3 rounded-lg bg-green-500/10 border border-green-500/30 hover:border-green-500/60 transition-colors"
                  >
                    <p className="font-semibold text-green-400">{theory.name}</p>
                    <p className="text-sm text-foreground/70">{theory.shortName}</p>
                  </button>
                ))}
              </div>
            </Card>
          )}

          {/* Implications */}
          <Card className="border-border p-6">
            <h3 className="text-lg font-bold mb-4">Implications</h3>
            <ul className="space-y-3">
              {evidence.implications.map((implication, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-cyan-400 font-bold">→</span>
                  <span className="text-foreground/80">{implication}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}

      {/* Researcher Mode */}
      {mode === "researcher" && (
        <Tabs defaultValue="methodology" className="w-full">
          <TabsList className="grid w-full grid-cols-6 gap-2 bg-card/50 p-2 rounded-lg border border-border">
            <TabsTrigger value="methodology" className="text-xs">Methods</TabsTrigger>
            <TabsTrigger value="design" className="text-xs">Design</TabsTrigger>
            <TabsTrigger value="findings" className="text-xs">Findings</TabsTrigger>
            <TabsTrigger value="criticisms" className="text-xs">Criticisms</TabsTrigger>
            <TabsTrigger value="theories" className="text-xs">Theories</TabsTrigger>
            <TabsTrigger value="citations" className="text-xs">Citations</TabsTrigger>
          </TabsList>

          {/* Methodology */}
          <TabsContent value="methodology" className="space-y-4">
            <Card className="border-border p-6">
              <h3 className="text-lg font-bold mb-4">Methodology</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">{evidence.methodology}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-card border border-border/50">
                  <p className="text-sm text-muted-foreground">Sample Size</p>
                  <p className="font-semibold text-cyan-400">{evidence.sampleSize}</p>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border/50">
                  <p className="text-sm text-muted-foreground">Statistical Strength</p>
                  <p className="font-semibold text-cyan-400">{evidence.statisticalStrength.replace("-", " ")}</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Experimental Design */}
          <TabsContent value="design" className="space-y-4">
            <Card className="border-border p-6">
              <h3 className="text-lg font-bold mb-4">Experimental Design</h3>
              <p className="text-foreground/80 leading-relaxed">{evidence.experimentalDesign}</p>
            </Card>
          </TabsContent>

          {/* Key Findings */}
          <TabsContent value="findings" className="space-y-4">
            <Card className="border-border p-6">
              <h3 className="text-lg font-bold mb-4">Key Findings</h3>
              <ul className="space-y-3">
                {evidence.keyFindings.map((finding, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-foreground/80">{finding}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </TabsContent>

          {/* Criticisms */}
          <TabsContent value="criticisms" className="space-y-4">
            <Card className="border-border p-6">
              <h3 className="text-lg font-bold mb-4 text-red-400 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Criticisms & Limitations
              </h3>
              <ul className="space-y-3">
                {evidence.criticisms.map((criticism, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-red-400 font-bold">✗</span>
                    <span className="text-foreground/80">{criticism}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="border-border p-6">
              <h3 className="text-lg font-bold mb-4">Replication Status</h3>
              <p className={`px-3 py-2 rounded-lg text-sm font-semibold border inline-block ${REPLICATION_STATUS_COLORS[evidence.replicationStatus]}`}>
                {evidence.replicationStatus.replace("-", " ").toUpperCase()}
              </p>
            </Card>
          </TabsContent>

          {/* Theories */}
          <TabsContent value="theories" className="space-y-4">
            {supportingTheories.length > 0 && (
              <Card className="border-border p-6">
                <h3 className="text-lg font-bold mb-4 text-green-400">Supporting Theories</h3>
                <div className="space-y-2">
                  {supportingTheories.map((theory) => (
                    <button
                      key={theory.id}
                      onClick={() => navigate("/field-map")}
                      className="w-full text-left p-3 rounded-lg bg-green-500/10 border border-green-500/30 hover:border-green-500/60 transition-colors"
                    >
                      <p className="font-semibold text-green-400">{theory.name}</p>
                      <p className="text-sm text-foreground/70">{theory.description.substring(0, 100)}...</p>
                    </button>
                  ))}
                </div>
              </Card>
            )}

            {contradictingTheories.length > 0 && (
              <Card className="border-border p-6">
                <h3 className="text-lg font-bold mb-4 text-red-400">Contradicting Theories</h3>
                <div className="space-y-2">
                  {contradictingTheories.map((theory) => (
                    <button
                      key={theory.id}
                      onClick={() => navigate("/field-map")}
                      className="w-full text-left p-3 rounded-lg bg-red-500/10 border border-red-500/30 hover:border-red-500/60 transition-colors"
                    >
                      <p className="font-semibold text-red-400">{theory.name}</p>
                      <p className="text-sm text-foreground/70">{theory.description.substring(0, 100)}...</p>
                    </button>
                  ))}
                </div>
              </Card>
            )}
          </TabsContent>

          {/* Citations */}
          <TabsContent value="citations" className="space-y-4">
            <Card className="border-border p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Primary Citation
              </h3>
              <div className="p-4 rounded-lg bg-card border border-border/50 space-y-2">
                <p className="font-semibold text-cyan-400">
                  {evidence.primaryCitation.authors.join(", ")} ({evidence.primaryCitation.year})
                </p>
                <p className="text-foreground/80">{evidence.primaryCitation.title}</p>
                {evidence.primaryCitation.journal && (
                  <p className="text-sm text-muted-foreground">
                    <span className="italic">{evidence.primaryCitation.journal}</span>
                    {evidence.primaryCitation.volume && ` ${evidence.primaryCitation.volume}`}
                    {evidence.primaryCitation.pages && `: ${evidence.primaryCitation.pages}`}
                  </p>
                )}
                {evidence.primaryCitation.doi && (
                  <p className="text-sm text-cyan-400">
                    DOI: {evidence.primaryCitation.doi}
                  </p>
                )}
              </div>
            </Card>

            {evidence.secondaryCitations.length > 0 && (
              <Card className="border-border p-6">
                <h3 className="text-lg font-bold mb-4">Related Citations</h3>
                <div className="space-y-3">
                  {evidence.secondaryCitations.map((citation, i) => (
                    <div key={i} className="p-3 rounded-lg bg-card border border-border/50 space-y-2">
                      <p className="font-semibold text-cyan-400">
                        {citation.authors.join(", ")} ({citation.year})
                      </p>
                      <p className="text-sm text-foreground/80">{citation.title}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t border-border">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-cyan-500/30 hover:bg-cyan-500/10"
        >
          ← Back
        </Button>
      </div>
    </div>
  );
}
