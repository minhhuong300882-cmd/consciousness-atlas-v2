import { useState } from "react";
import { useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Trophy, Zap } from "lucide-react";
import {
  THEORY_EVIDENCE_METRICS,
  rankTheoriesByEvidenceStrength,
  getEvidenceStats,
  getTheoriesByCategory,
} from "@/data/evidenceDashboard";

export default function EvidenceDashboard() {
  const [, navigate] = useLocation();
  const [sortBy, setSortBy] = useState<"evidence" | "replication" | "citation" | "consensus">("evidence");
  const [selectedTheory, setSelectedTheory] = useState<string | null>(null);

  const stats = getEvidenceStats();
  const rankedTheories = rankTheoriesByEvidenceStrength();

  const sortedTheories = [...THEORY_EVIDENCE_METRICS].sort((a, b) => {
    if (sortBy === "evidence") return b.totalEvidenceScore - a.totalEvidenceScore;
    if (sortBy === "replication") return b.replicationQuality - a.replicationQuality;
    if (sortBy === "citation") return b.citationImpact - a.citationImpact;
    if (sortBy === "consensus") return b.scientificConsensus - a.scientificConsensus;
    return 0;
  });

  const selectedTheoryData = selectedTheory ? THEORY_EVIDENCE_METRICS.find((t) => t.theoryId === selectedTheory) : null;

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
          <h1 className="text-4xl font-bold mb-2">Evidence Dashboard</h1>
          <p className="text-muted-foreground">Compare consciousness theories by empirical support and evidence quality</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {!selectedTheoryData ? (
          // Dashboard Overview
          <div className="space-y-8">
            {/* Key Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="border-border p-6 bg-card/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Total Theories</p>
                  <Trophy className="w-4 h-4 text-yellow-400" />
                </div>
                <p className="text-3xl font-bold text-yellow-400">{stats.totalTheories}</p>
              </Card>

              <Card className="border-border p-6 bg-card/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Supporting Experiments</p>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <p className="text-3xl font-bold text-green-400">{stats.totalSupportingExperiments}</p>
              </Card>

              <Card className="border-border p-6 bg-card/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Contradictory Experiments</p>
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-3xl font-bold text-red-400">{stats.totalContradictoryExperiments}</p>
              </Card>

              <Card className="border-border p-6 bg-card/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Avg Evidence Score</p>
                  <Zap className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-3xl font-bold text-cyan-400">{stats.averageMetrics.totalEvidenceScore}</p>
              </Card>
            </div>

            {/* Evidence Category Distribution */}
            <Card className="border-border p-8">
              <h2 className="text-2xl font-bold mb-6">Evidence Category Distribution</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <p className="text-sm text-muted-foreground mb-2">Very Strong</p>
                  <p className="text-3xl font-bold text-green-400">{stats.categories["very-strong"]}</p>
                </div>
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <p className="text-sm text-muted-foreground mb-2">Strong</p>
                  <p className="text-3xl font-bold text-blue-400">{stats.categories.strong}</p>
                </div>
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                  <p className="text-sm text-muted-foreground mb-2">Moderate</p>
                  <p className="text-3xl font-bold text-yellow-400">{stats.categories.moderate}</p>
                </div>
                <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30">
                  <p className="text-sm text-muted-foreground mb-2">Weak</p>
                  <p className="text-3xl font-bold text-orange-400">{stats.categories.weak}</p>
                </div>
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                  <p className="text-sm text-muted-foreground mb-2">Controversial</p>
                  <p className="text-3xl font-bold text-red-400">{stats.categories.controversial}</p>
                </div>
              </div>
            </Card>

            {/* Tabs for Different Views */}
            <Tabs defaultValue="ranking" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-card/50 p-2 rounded-lg border border-border">
                <TabsTrigger value="ranking">Ranking View</TabsTrigger>
                <TabsTrigger value="matrix">Matrix View</TabsTrigger>
                <TabsTrigger value="comparison">Comparison</TabsTrigger>
              </TabsList>

              {/* Ranking View */}
              <TabsContent value="ranking" className="space-y-4">
                <div className="flex gap-2 mb-4 flex-wrap">
                  <Button
                    variant={sortBy === "evidence" ? "default" : "outline"}
                    onClick={() => setSortBy("evidence")}
                    size="sm"
                  >
                    Evidence Strength
                  </Button>
                  <Button
                    variant={sortBy === "replication" ? "default" : "outline"}
                    onClick={() => setSortBy("replication")}
                    size="sm"
                  >
                    Replication
                  </Button>
                  <Button
                    variant={sortBy === "citation" ? "default" : "outline"}
                    onClick={() => setSortBy("citation")}
                    size="sm"
                  >
                    Citation Impact
                  </Button>
                  <Button
                    variant={sortBy === "consensus" ? "default" : "outline"}
                    onClick={() => setSortBy("consensus")}
                    size="sm"
                  >
                    Consensus
                  </Button>
                </div>

                <div className="space-y-3">
                  {sortedTheories.map((theory, index) => (
                    <Card
                      key={theory.theoryId}
                      className="border-border p-4 cursor-pointer hover:border-cyan-500/50 transition-all"
                      onClick={() => setSelectedTheory(theory.theoryId)}
                    >
                      <div className="space-y-3">
                        {/* Header with Rank */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3 flex-1">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                              <span className="text-sm font-bold text-cyan-400">#{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold mb-1">{theory.theoryName}</h3>
                              <p className="text-sm text-muted-foreground">
                                {theory.supportingExperiments} supporting • {theory.contradictoryExperiments} contradictory
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-cyan-400">{theory.totalEvidenceScore}</p>
                            <p className="text-xs text-muted-foreground">{theory.evidenceCategory}</p>
                          </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Evidence</p>
                            <div className="flex items-center gap-1">
                              <Progress value={theory.evidenceStrength} className="h-1" />
                              <span className="text-xs font-semibold">{theory.evidenceStrength}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Replication</p>
                            <div className="flex items-center gap-1">
                              <Progress value={theory.replicationQuality} className="h-1" />
                              <span className="text-xs font-semibold">{theory.replicationQuality}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Citation</p>
                            <div className="flex items-center gap-1">
                              <Progress value={theory.citationImpact} className="h-1" />
                              <span className="text-xs font-semibold">{theory.citationImpact}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Consensus</p>
                            <div className="flex items-center gap-1">
                              <Progress value={theory.scientificConsensus} className="h-1" />
                              <span className="text-xs font-semibold">{theory.scientificConsensus}</span>
                            </div>
                          </div>
                        </div>

                        {/* Support Ratio */}
                        <div className="flex items-center justify-between pt-2 border-t border-border/50">
                          <p className="text-sm text-muted-foreground">Support Ratio</p>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 rounded-full bg-border overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-green-500 to-cyan-400"
                                style={{ width: `${theory.supportRatio * 100}%` }}
                              />
                            </div>
                            <span className="text-sm font-semibold">{Math.round(theory.supportRatio * 100)}%</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Matrix View */}
              <TabsContent value="matrix" className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold">Theory</th>
                        <th className="text-center py-3 px-2 font-semibold">Evidence</th>
                        <th className="text-center py-3 px-2 font-semibold">Replication</th>
                        <th className="text-center py-3 px-2 font-semibold">Citation</th>
                        <th className="text-center py-3 px-2 font-semibold">Consensus</th>
                        <th className="text-center py-3 px-2 font-semibold">Supporting</th>
                        <th className="text-center py-3 px-2 font-semibold">Contradictory</th>
                        <th className="text-center py-3 px-2 font-semibold">Total Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rankedTheories.map((theory) => (
                        <tr
                          key={theory.theoryId}
                          className="border-b border-border/50 hover:bg-card/50 cursor-pointer transition-colors"
                          onClick={() => setSelectedTheory(theory.theoryId)}
                        >
                          <td className="py-3 px-4 font-semibold">{theory.theoryName}</td>
                          <td className="text-center py-3 px-2">
                            <span className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-400 text-xs font-semibold">
                              {theory.evidenceStrength}
                            </span>
                          </td>
                          <td className="text-center py-3 px-2">
                            <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-semibold">
                              {theory.replicationQuality}
                            </span>
                          </td>
                          <td className="text-center py-3 px-2">
                            <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-400 text-xs font-semibold">
                              {theory.citationImpact}
                            </span>
                          </td>
                          <td className="text-center py-3 px-2">
                            <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-semibold">
                              {theory.scientificConsensus}
                            </span>
                          </td>
                          <td className="text-center py-3 px-2">
                            <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
                              {theory.supportingExperiments}
                            </span>
                          </td>
                          <td className="text-center py-3 px-2">
                            <span className="px-2 py-1 rounded bg-red-500/20 text-red-400 text-xs font-semibold">
                              {theory.contradictoryExperiments}
                            </span>
                          </td>
                          <td className="text-center py-3 px-2">
                            <span className="px-3 py-1 rounded bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-xs font-bold">
                              {theory.totalEvidenceScore}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              {/* Comparison View */}
              <TabsContent value="comparison" className="space-y-6">
                {/* Strongest Theories */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Strongest Supported Theories
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {rankedTheories.slice(0, 4).map((theory) => (
                      <Card
                        key={theory.theoryId}
                        className="border-green-500/30 bg-green-500/10 p-4 cursor-pointer hover:border-green-500/60 transition-all"
                        onClick={() => setSelectedTheory(theory.theoryId)}
                      >
                        <h4 className="font-bold mb-2">{theory.theoryName}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{theory.supportingExperiments} supporting experiments</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-green-400">{theory.totalEvidenceScore}</span>
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Weakest Theories */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-red-400" />
                    Weakest Supported Theories
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {rankedTheories.slice(-4).reverse().map((theory) => (
                      <Card
                        key={theory.theoryId}
                        className="border-red-500/30 bg-red-500/10 p-4 cursor-pointer hover:border-red-500/60 transition-all"
                        onClick={() => setSelectedTheory(theory.theoryId)}
                      >
                        <h4 className="font-bold mb-2">{theory.theoryName}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{theory.contradictoryExperiments} contradictory experiments</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-red-400">{theory.totalEvidenceScore}</span>
                          <AlertTriangle className="w-5 h-5 text-red-400" />
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Most Controversial */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    Most Controversial Theories
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[...THEORY_EVIDENCE_METRICS]
                      .sort((a, b) => b.controversyScore - a.controversyScore)
                      .slice(0, 4)
                      .map((theory) => (
                        <Card
                          key={theory.theoryId}
                          className="border-yellow-500/30 bg-yellow-500/10 p-4 cursor-pointer hover:border-yellow-500/60 transition-all"
                          onClick={() => setSelectedTheory(theory.theoryId)}
                        >
                          <h4 className="font-bold mb-2">{theory.theoryName}</h4>
                          <p className="text-sm text-muted-foreground mb-3">Controversy: {theory.controversyScore}/100</p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-yellow-400">{theory.totalEvidenceScore}</span>
                            <AlertTriangle className="w-5 h-5 text-yellow-400" />
                          </div>
                        </Card>
                      ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          // Theory Detail View
          <div className="space-y-8">
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => setSelectedTheory(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back to Dashboard
            </Button>

            {/* Theory Header */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{selectedTheoryData.theoryName}</h1>
              <p className="text-muted-foreground text-lg">Evidence Category: {selectedTheoryData.evidenceCategory}</p>
            </div>

            {/* Main Metrics */}
            <Card className="border-border p-8">
              <h2 className="text-2xl font-bold mb-6">Evidence Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Evidence Strength</p>
                  <div className="flex items-center gap-3">
                    <Progress value={selectedTheoryData.evidenceStrength} className="flex-1" />
                    <span className="text-2xl font-bold text-cyan-400">{selectedTheoryData.evidenceStrength}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Replication Quality</p>
                  <div className="flex items-center gap-3">
                    <Progress value={selectedTheoryData.replicationQuality} className="flex-1" />
                    <span className="text-2xl font-bold text-blue-400">{selectedTheoryData.replicationQuality}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Citation Impact</p>
                  <div className="flex items-center gap-3">
                    <Progress value={selectedTheoryData.citationImpact} className="flex-1" />
                    <span className="text-2xl font-bold text-purple-400">{selectedTheoryData.citationImpact}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Scientific Consensus</p>
                  <div className="flex items-center gap-3">
                    <Progress value={selectedTheoryData.scientificConsensus} className="flex-1" />
                    <span className="text-2xl font-bold text-green-400">{selectedTheoryData.scientificConsensus}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Experiments */}
            <Card className="border-border p-8">
              <h2 className="text-2xl font-bold mb-6">Experimental Support</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <p className="text-sm text-muted-foreground mb-2">Supporting Experiments</p>
                  <p className="text-3xl font-bold text-green-400">{selectedTheoryData.supportingExperiments}</p>
                </div>
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                  <p className="text-sm text-muted-foreground mb-2">Contradictory Experiments</p>
                  <p className="text-3xl font-bold text-red-400">{selectedTheoryData.contradictoryExperiments}</p>
                </div>
                <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                  <p className="text-sm text-muted-foreground mb-2">Support Ratio</p>
                  <p className="text-3xl font-bold text-cyan-400">{Math.round(selectedTheoryData.supportRatio * 100)}%</p>
                </div>
              </div>
            </Card>

            {/* Key Strengths */}
            <Card className="border-border p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Key Strengths
              </h2>
              <ul className="space-y-2">
                {selectedTheoryData.keyStrengths.map((strength, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-foreground/80">{strength}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Key Weaknesses */}
            <Card className="border-border p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                Key Weaknesses
              </h2>
              <ul className="space-y-2">
                {selectedTheoryData.keyWeaknesses.map((weakness, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-foreground/80">{weakness}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Recent Developments */}
            <Card className="border-border p-8">
              <h2 className="text-2xl font-bold mb-4">Recent Developments</h2>
              <div className="space-y-3">
                {selectedTheoryData.recentDevelopments.map((dev, i) => (
                  <div key={i} className="flex gap-3 pb-3 border-b border-border/50 last:border-0">
                    <span className="text-cyan-400 font-semibold text-sm flex-shrink-0">•</span>
                    <span className="text-foreground/80">{dev}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex gap-4">
              <Button onClick={() => navigate("/theory-atlas")} className="flex-1">
                View in Theory Atlas
              </Button>
              <Button onClick={() => navigate("/scientific-consensus")} variant="outline" className="flex-1">
                View Consensus Status
              </Button>
              <Button variant="outline" onClick={() => setSelectedTheory(null)} className="flex-1">
                Back to Dashboard
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
