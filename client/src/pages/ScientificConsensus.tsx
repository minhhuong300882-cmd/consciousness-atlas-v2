import { useState } from "react";
import { useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Activity, BookOpen, Award, AlertCircle } from "lucide-react";
import {
  THEORY_CONSENSUS,
  CONSENSUS_STATUS_LABELS,
  CONSENSUS_STATUS_DESCRIPTIONS,
  CONSENSUS_STATUS_COLORS,
  getConsensusInterpretation,
  getTrendEmoji,
  getConsensusStatistics,
} from "@/data/scientificConsensus";

export default function ScientificConsensus() {
  const [, navigate] = useLocation();
  const [sortBy, setSortBy] = useState<"confidence" | "status" | "trend">("confidence");
  const [selectedTheoryId, setSelectedTheoryId] = useState<string | null>(null);

  const theories = Object.values(THEORY_CONSENSUS).sort((a, b) => {
    if (sortBy === "confidence") return b.confidenceScore - a.confidenceScore;
    if (sortBy === "status") {
      const statusOrder = { mainstream: 0, emerging: 1, "influential-controversial": 2, "minority-position": 3, historical: 4 };
      return (statusOrder[a.consensusStatus] ?? 5) - (statusOrder[b.consensusStatus] ?? 5);
    }
    return 0;
  });

  const selectedTheory = selectedTheoryId ? THEORY_CONSENSUS[selectedTheoryId] : null;
  const stats = getConsensusStatistics();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            ← Dashboard
          </Button>
          <h1 className="text-4xl font-bold mb-2">Scientific Consensus Layer</h1>
          <p className="text-muted-foreground">Evidence-based consensus status for consciousness theories</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {!selectedTheory ? (
          // Overview and Comparison Views
          <div className="space-y-8">
            {/* Statistics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Card className="border-border p-6 bg-card/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Total Theories</p>
                  <Award className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-3xl font-bold text-cyan-400">{stats.totalTheories}</p>
              </Card>

              <Card className="border-border p-6 bg-card/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Avg Confidence</p>
                  <Activity className="w-4 h-4 text-green-400" />
                </div>
                <p className="text-3xl font-bold text-green-400">{stats.avgConfidence}</p>
              </Card>

              <Card className="border-border p-6 bg-card/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Empirical Support</p>
                  <BookOpen className="w-4 h-4 text-blue-400" />
                </div>
                <p className="text-3xl font-bold text-blue-400">{stats.avgEmpirical}%</p>
              </Card>

              <Card className="border-border p-6 bg-card/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Replication Rate</p>
                  <TrendingUp className="w-4 h-4 text-yellow-400" />
                </div>
                <p className="text-3xl font-bold text-yellow-400">{stats.avgReplication}%</p>
              </Card>

              <Card className="border-border p-6 bg-card/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Citation Impact</p>
                  <Award className="w-4 h-4 text-purple-400" />
                </div>
                <p className="text-3xl font-bold text-purple-400">{stats.avgCitation}%</p>
              </Card>
            </div>

            {/* Consensus Distribution */}
            <Card className="border-border p-8 bg-card/50">
              <h2 className="text-2xl font-bold mb-6">Consensus Status Distribution</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <p className="text-sm text-muted-foreground mb-1">Mainstream</p>
                  <p className="text-2xl font-bold text-green-400">{stats.statusCounts.mainstream}</p>
                </div>
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <p className="text-sm text-muted-foreground mb-1">Emerging</p>
                  <p className="text-2xl font-bold text-blue-400">{stats.statusCounts.emerging}</p>
                </div>
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                  <p className="text-sm text-muted-foreground mb-1">Controversial</p>
                  <p className="text-2xl font-bold text-yellow-400">{stats.statusCounts["influential-controversial"]}</p>
                </div>
                <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30">
                  <p className="text-sm text-muted-foreground mb-1">Minority</p>
                  <p className="text-2xl font-bold text-orange-400">{stats.statusCounts["minority-position"]}</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-500/10 border border-gray-500/30">
                  <p className="text-sm text-muted-foreground mb-1">Historical</p>
                  <p className="text-2xl font-bold text-gray-400">{stats.statusCounts.historical}</p>
                </div>
              </div>
            </Card>

            {/* Tabs for Different Views */}
            <Tabs defaultValue="comparison" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-card/50 p-2 rounded-lg border border-border">
                <TabsTrigger value="comparison">Comparison Table</TabsTrigger>
                <TabsTrigger value="by-status">By Status</TabsTrigger>
              </TabsList>

              {/* Comparison Table */}
              <TabsContent value="comparison" className="space-y-4">
                <div className="flex gap-2 mb-4">
                  <Button
                    variant={sortBy === "confidence" ? "default" : "outline"}
                    onClick={() => setSortBy("confidence")}
                    size="sm"
                  >
                    Sort by Confidence
                  </Button>
                  <Button
                    variant={sortBy === "status" ? "default" : "outline"}
                    onClick={() => setSortBy("status")}
                    size="sm"
                  >
                    Sort by Status
                  </Button>
                </div>

                <div className="space-y-3">
                  {theories.map((theory) => (
                    <Card
                      key={theory.theoryId}
                      className={`border-border p-4 cursor-pointer hover:border-cyan-500/50 transition-all ${CONSENSUS_STATUS_COLORS[theory.consensusStatus]}`}
                      onClick={() => setSelectedTheoryId(theory.theoryId)}
                    >
                      <div className="space-y-3">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold mb-1">{theory.theoryName}</h3>
                            <p className="text-sm text-muted-foreground">{CONSENSUS_STATUS_DESCRIPTIONS[theory.consensusStatus]}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-cyan-400">{theory.confidenceScore}</p>
                            <p className="text-xs text-muted-foreground">{getConsensusInterpretation(theory.confidenceScore)}</p>
                          </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Empirical</p>
                            <div className="flex items-center gap-1">
                              <Progress value={theory.metrics.empiricalSupport} className="h-1" />
                              <span className="text-xs font-semibold">{theory.metrics.empiricalSupport}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Replication</p>
                            <div className="flex items-center gap-1">
                              <Progress value={theory.metrics.replicationRate} className="h-1" />
                              <span className="text-xs font-semibold">{theory.metrics.replicationRate}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Citation</p>
                            <div className="flex items-center gap-1">
                              <Progress value={theory.metrics.citationImpact} className="h-1" />
                              <span className="text-xs font-semibold">{theory.metrics.citationImpact}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Acceptance</p>
                            <div className="flex items-center gap-1">
                              <Progress value={theory.metrics.academicAcceptance} className="h-1" />
                              <span className="text-xs font-semibold">{theory.metrics.academicAcceptance}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Predictive</p>
                            <div className="flex items-center gap-1">
                              <Progress value={theory.metrics.predictivePower} className="h-1" />
                              <span className="text-xs font-semibold">{theory.metrics.predictivePower}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Falsifiable</p>
                            <div className="flex items-center gap-1">
                              <Progress value={theory.metrics.falsifiability} className="h-1" />
                              <span className="text-xs font-semibold">{theory.metrics.falsifiability}</span>
                            </div>
                          </div>
                        </div>

                        {/* Trend and Status */}
                        <div className="flex items-center justify-between pt-2 border-t border-border/50">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-muted-foreground">{CONSENSUS_STATUS_LABELS[theory.consensusStatus]}</span>
                            <span className="text-lg">{getTrendEmoji(theory.currentTrend)}</span>
                            <span className="text-xs text-muted-foreground capitalize">{theory.currentTrend}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Est. {theory.yearEstablished}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* By Status View */}
              <TabsContent value="by-status" className="space-y-6">
                {(["mainstream", "emerging", "influential-controversial", "minority-position", "historical"] as const).map((status) => {
                  const theoriesInStatus = theories.filter((t) => t.consensusStatus === status);
                  if (theoriesInStatus.length === 0) return null;

                  return (
                    <div key={status}>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-lg text-sm font-semibold border ${CONSENSUS_STATUS_COLORS[status]}`}>
                          {CONSENSUS_STATUS_LABELS[status]}
                        </span>
                        <span className="text-muted-foreground">({theoriesInStatus.length})</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {theoriesInStatus.map((theory) => (
                          <Card
                            key={theory.theoryId}
                            className={`border-border p-4 cursor-pointer hover:border-cyan-500/50 transition-all ${CONSENSUS_STATUS_COLORS[status]}`}
                            onClick={() => setSelectedTheoryId(theory.theoryId)}
                          >
                            <h4 className="font-bold mb-2">{theory.theoryName}</h4>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Confidence Score</span>
                                <span className="text-lg font-bold text-cyan-400">{theory.confidenceScore}</span>
                              </div>
                              <Progress value={theory.confidenceScore} className="h-2" />
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          // Theory Detail View
          <div className="space-y-8">
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => setSelectedTheoryId(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back to Comparison
            </Button>

            {/* Theory Header */}
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">{selectedTheory.theoryName}</h1>
                <p className="text-muted-foreground text-lg">{CONSENSUS_STATUS_DESCRIPTIONS[selectedTheory.consensusStatus]}</p>
              </div>

              {/* Confidence Score */}
              <Card className={`border-border p-8 ${CONSENSUS_STATUS_COLORS[selectedTheory.consensusStatus]}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Confidence Score</p>
                    <p className="text-5xl font-bold text-cyan-400">{selectedTheory.confidenceScore}</p>
                    <p className="text-sm text-muted-foreground mt-2">{getConsensusInterpretation(selectedTheory.confidenceScore)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Status</p>
                    <p className="text-2xl font-bold mb-2">{CONSENSUS_STATUS_LABELS[selectedTheory.consensusStatus]}</p>
                    <p className="text-sm text-muted-foreground">Est. {selectedTheory.yearEstablished}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Current Trend</p>
                    <p className="text-2xl font-bold mb-2">
                      {getTrendEmoji(selectedTheory.currentTrend)} {selectedTheory.currentTrend.charAt(0).toUpperCase() + selectedTheory.currentTrend.slice(1)}
                    </p>
                    <p className="text-sm text-muted-foreground">Peak: {selectedTheory.peakInfluence}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Metrics Breakdown */}
            <Card className="border-border p-8">
              <h2 className="text-2xl font-bold mb-6">Consensus Metrics</h2>
              <div className="space-y-4">
                {[
                  { label: "Empirical Support", value: selectedTheory.metrics.empiricalSupport },
                  { label: "Replication Rate", value: selectedTheory.metrics.replicationRate },
                  { label: "Citation Impact", value: selectedTheory.metrics.citationImpact },
                  { label: "Academic Acceptance", value: selectedTheory.metrics.academicAcceptance },
                  { label: "Predictive Power", value: selectedTheory.metrics.predictivePower },
                  { label: "Falsifiability", value: selectedTheory.metrics.falsifiability },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold">{metric.label}</p>
                      <span className="text-lg font-bold text-cyan-400">{metric.value}%</span>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Consensus Narrative */}
            <Card className="border-border p-8">
              <h2 className="text-2xl font-bold mb-4">Consensus Narrative</h2>
              <p className="text-foreground/80 leading-relaxed">{selectedTheory.consensusNarrative}</p>
            </Card>

            {/* Supporting Community */}
            <Card className="border-border p-8">
              <h2 className="text-2xl font-bold mb-4">Supporting Community</h2>
              <p className="text-foreground/80 mb-4">{selectedTheory.supportingCommunity}</p>
            </Card>

            {/* Major Critics */}
            <Card className="border-border p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Major Critics
              </h2>
              <div className="flex flex-wrap gap-2">
                {selectedTheory.majorCritics.map((critic, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-semibold">
                    {critic}
                  </span>
                ))}
              </div>
            </Card>

            {/* Key Milestones */}
            <Card className="border-border p-8">
              <h2 className="text-2xl font-bold mb-6">Key Milestones</h2>
              <div className="space-y-3">
                {selectedTheory.keyMilestones.map((milestone, i) => (
                  <div key={i} className="flex gap-4 pb-3 border-b border-border/50 last:border-0">
                    <div className="flex-shrink-0">
                      <p className="font-bold text-cyan-400">{milestone.year}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{milestone.event}</p>
                      <span
                        className={`inline-block mt-1 text-xs px-2 py-1 rounded ${
                          milestone.impact === "positive"
                            ? "bg-green-500/20 text-green-400"
                            : milestone.impact === "negative"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {milestone.impact.charAt(0).toUpperCase() + milestone.impact.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex gap-4 pt-8">
              <Button onClick={() => navigate("/theory-atlas")} className="flex-1">
                View in Theory Atlas
              </Button>
              <Button variant="outline" onClick={() => setSelectedTheoryId(null)} className="flex-1">
                Back to Comparison
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
