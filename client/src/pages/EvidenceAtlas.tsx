import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Search, Filter, TrendingUp, Calendar, Users, Zap, FileText, AlertCircle } from "lucide-react";
import { EVIDENCE, EVIDENCE_CATEGORIES, QUALITY_LABELS, QUALITY_COLORS, Evidence } from "@/data/evidence";

export default function EvidenceAtlas() {
  const [, navigate] = useLocation();
  const [selectedEvidence, setSelectedEvidence] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"explorer" | "detail" | "by-theory" | "timeline" | "dashboard">("explorer");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [qualityFilter, setQualityFilter] = useState<string | null>(null);
  const [mode, setMode] = useState<"beginner" | "researcher">("beginner");

  const evidence = selectedEvidence ? EVIDENCE[selectedEvidence] : null;

  // Filter evidence based on search and category
  const filteredEvidence = useMemo(() => {
    let results = Object.values(EVIDENCE);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (e) =>
          e.name.toLowerCase().includes(query) ||
          e.researchers.some((r) => r.toLowerCase().includes(query)) ||
          e.keyFindings.toLowerCase().includes(query)
      );
    }

    if (selectedCategory) {
      results = results.filter((e) => e.category === selectedCategory);
    }

    if (qualityFilter) {
      results = results.filter((e) => e.quality === qualityFilter);
    }

    return results.sort((a, b) => b.year - a.year);
  }, [searchQuery, selectedCategory, qualityFilter]);

  const getQualityBadgeColor = (quality: string) => {
    const colors: Record<string, string> = {
      "very-strong": "bg-green-500/20 text-green-400 border-green-500/30",
      "strong": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "moderate": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      "weak": "bg-orange-500/20 text-orange-400 border-orange-500/30",
      "controversial": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    };
    return colors[quality] || colors["moderate"];
  };

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
          <h1 className="text-4xl font-bold mb-2">Evidence Atlas</h1>
          <p className="text-muted-foreground">40+ landmark experiments connecting theories to empirical evidence</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* View Mode Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <Button
            onClick={() => setViewMode("explorer")}
            variant={viewMode === "explorer" ? "default" : "outline"}
            className={viewMode === "explorer" ? "bg-gradient-to-r from-cyan-500 to-blue-600" : ""}
          >
            <Search className="w-4 h-4 mr-2" />
            Explorer
          </Button>
          <Button
            onClick={() => setViewMode("by-theory")}
            variant={viewMode === "by-theory" ? "default" : "outline"}
            className={viewMode === "by-theory" ? "bg-gradient-to-r from-cyan-500 to-blue-600" : ""}
          >
            <Zap className="w-4 h-4 mr-2" />
            By Theory
          </Button>
          <Button
            onClick={() => setViewMode("timeline")}
            variant={viewMode === "timeline" ? "default" : "outline"}
            className={viewMode === "timeline" ? "bg-gradient-to-r from-cyan-500 to-blue-600" : ""}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Timeline
          </Button>
          <Button
            onClick={() => setViewMode("dashboard")}
            variant={viewMode === "dashboard" ? "default" : "outline"}
            className={viewMode === "dashboard" ? "bg-gradient-to-r from-cyan-500 to-blue-600" : ""}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Strength Dashboard
          </Button>
        </div>

        {/* Explorer View */}
        {viewMode === "explorer" && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search experiments, researchers, findings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card border-border"
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className={selectedCategory === null ? "bg-gradient-to-r from-cyan-500 to-blue-600" : ""}
                >
                  All Categories
                </Button>
                {Object.entries(EVIDENCE_CATEGORIES).map(([key, label]) => (
                  <Button
                    key={key}
                    variant={selectedCategory === key ? "default" : "outline"}
                    onClick={() => setSelectedCategory(key)}
                    className={selectedCategory === key ? "bg-gradient-to-r from-cyan-500 to-blue-600" : ""}
                  >
                    {label}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={qualityFilter === null ? "default" : "outline"}
                  onClick={() => setQualityFilter(null)}
                  className={qualityFilter === null ? "bg-gradient-to-r from-cyan-500 to-blue-600" : ""}
                >
                  All Quality Levels
                </Button>
                {["very-strong", "strong", "moderate", "weak", "controversial"].map((quality) => (
                  <Button
                    key={quality}
                    variant={qualityFilter === quality ? "default" : "outline"}
                    onClick={() => setQualityFilter(quality)}
                    className={qualityFilter === quality ? `bg-gradient-to-r ${QUALITY_COLORS[quality as keyof typeof QUALITY_COLORS]}` : ""}
                  >
                    {QUALITY_LABELS[quality as keyof typeof QUALITY_LABELS]}
                  </Button>
                ))}
              </div>
            </div>

            {/* Evidence Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredEvidence.map((e) => (
                <Card
                  key={e.id}
                  className="overflow-hidden border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group cursor-pointer"
                  onClick={() => {
                    setSelectedEvidence(e.id);
                    setViewMode("detail");
                    setMode("beginner");
                  }}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors flex-1">
                          {e.name}
                        </h3>
                        <span className={`px-2 py-1 rounded text-xs font-semibold border ${getQualityBadgeColor(e.quality)}`}>
                          {QUALITY_LABELS[e.quality]}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{EVIDENCE_CATEGORIES[e.category]}</p>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{e.researchers.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{e.year}</span>
                      </div>
                    </div>

                    {/* Key Finding */}
                    <p className="text-sm text-foreground/80 mb-4 line-clamp-3">
                      {e.keyFindings}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex gap-2">
                        {e.supportingTheories.length > 0 && (
                          <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">
                            {e.supportingTheories.length} theories
                          </span>
                        )}
                        {e.contradictingTheories.length > 0 && (
                          <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400">
                            {e.contradictingTheories.length} challenges
                          </span>
                        )}
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredEvidence.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No evidence found matching your filters</p>
                <Button onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                  setQualityFilter(null);
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Detail View */}
        {viewMode === "detail" && evidence && (
          <div className="space-y-8">
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

            {/* Title */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{evidence.name}</h2>
                  <p className="text-muted-foreground">{EVIDENCE_CATEGORIES[evidence.category]}</p>
                </div>
                <span className={`px-3 py-1 rounded-lg text-sm font-semibold border ${getQualityBadgeColor(evidence.quality)}`}>
                  {QUALITY_LABELS[evidence.quality]}
                </span>
              </div>
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
                  <p className="text-foreground/80 leading-relaxed">{evidence.keyFindings}</p>
                </Card>

                {/* What This Means */}
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
                {evidence.supportingTheories.length > 0 && (
                  <Card className="border-border p-6">
                    <h3 className="text-lg font-bold mb-4 text-green-400">Supports These Theories</h3>
                    <div className="space-y-2">
                      {evidence.supportingTheories.map((theory) => (
                        <div key={theory} className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                          <p className="font-semibold text-green-400">{theory}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}
              </div>
            )}

            {/* Researcher Mode */}
            {mode === "researcher" && (
              <Tabs defaultValue="methodology" className="w-full">
                <TabsList className="grid w-full grid-cols-5 gap-2 bg-card/50 p-2 rounded-lg border border-border">
                  <TabsTrigger value="methodology" className="text-xs">Methods</TabsTrigger>
                  <TabsTrigger value="findings" className="text-xs">Findings</TabsTrigger>
                  <TabsTrigger value="criticisms" className="text-xs">Criticisms</TabsTrigger>
                  <TabsTrigger value="theories" className="text-xs">Theories</TabsTrigger>
                  <TabsTrigger value="citations" className="text-xs">Citations</TabsTrigger>
                </TabsList>

                {/* Methodology */}
                <TabsContent value="methodology" className="space-y-4 mt-4">
                  <Card className="border-border p-6">
                    <h3 className="text-lg font-bold mb-4">Methodology</h3>
                    <p className="text-foreground/80 mb-4">{evidence.methodology}</p>
                  </Card>
                </TabsContent>

                {/* Findings */}
                <TabsContent value="findings" className="space-y-4 mt-4">
                  <Card className="border-border p-6">
                    <h3 className="text-lg font-bold mb-4">Key Findings</h3>
                    <p className="text-foreground/80 mb-4">{evidence.keyFindings}</p>
                  </Card>
                </TabsContent>

                {/* Criticisms */}
                <TabsContent value="criticisms" className="space-y-4 mt-4">
                  <Card className="border-border p-6">
                    <h3 className="text-lg font-bold mb-4 text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Limitations
                    </h3>
                    <p className="text-foreground/80">{evidence.limitations}</p>
                  </Card>
                </TabsContent>

                {/* Theories */}
                <TabsContent value="theories" className="space-y-4 mt-4">
                  {evidence.supportingTheories.length > 0 && (
                    <Card className="border-border p-6">
                      <h3 className="text-lg font-bold mb-4 text-green-400">Supporting Theories</h3>
                      <div className="flex flex-wrap gap-2">
                        {evidence.supportingTheories.map((theory) => (
                          <span key={theory} className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                            {theory}
                          </span>
                        ))}
                      </div>
                    </Card>
                  )}
                  {evidence.contradictingTheories.length > 0 && (
                    <Card className="border-border p-6">
                      <h3 className="text-lg font-bold mb-4 text-red-400">Contradicting Theories</h3>
                      <div className="flex flex-wrap gap-2">
                        {evidence.contradictingTheories.map((theory) => (
                          <span key={theory} className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm">
                            {theory}
                          </span>
                        ))}
                      </div>
                    </Card>
                  )}
                </TabsContent>

                {/* Citations */}
                <TabsContent value="citations" className="space-y-4 mt-4">
                  <Card className="border-border p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Citation Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-semibold">Researchers:</span> {evidence.researchers.join(", ")}</p>
                      <p><span className="font-semibold">Year:</span> {evidence.year}</p>
                      <p><span className="font-semibold">Replication Status:</span> {evidence.replicationStatus.replace("-", " ")}</p>
                      <p><span className="font-semibold">Citations:</span> ~{evidence.citations.toLocaleString()}</p>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-8 border-t border-border">
              <Button
                variant="outline"
                onClick={() => {
                  setViewMode("explorer");
                  setSelectedEvidence(null);
                }}
                className="border-cyan-500/30 hover:bg-cyan-500/10"
              >
                ← Back
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
