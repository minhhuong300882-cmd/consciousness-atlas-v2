import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Users, Lightbulb, BookOpen, Zap, TrendingUp, AlertCircle } from "lucide-react";
import { THEORY_DETAILS, THEORY_STATUS_COLORS, THEORY_STATUS_LABELS } from "@/data/theoryDetails";
import { EVIDENCE } from "@/data/evidence";

export default function TheoryAtlas() {
  const [, navigate] = useLocation();
  const [selectedTheoryId, setSelectedTheoryId] = useState<string | null>(null);

  const theories = Object.values(THEORY_DETAILS).sort((a, b) => {
    const statusOrder = { "mainstream": 0, "established": 1, "emerging": 2, "controversial": 3, "declining": 4 };
    return (statusOrder[a.scientificStatus] ?? 5) - (statusOrder[b.scientificStatus] ?? 5);
  });

  const selectedTheory = selectedTheoryId ? THEORY_DETAILS[selectedTheoryId] : null;

  const getSupportingEvidence = (evidenceIds: string[]) => {
    return evidenceIds.map((id) => EVIDENCE[id]).filter(Boolean);
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
          <h1 className="text-4xl font-bold mb-2">Research Theory Atlas</h1>
          <p className="text-muted-foreground">Comprehensive analysis of 15 major consciousness theories</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {!selectedTheory ? (
          // Theory Grid View
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {theories.map((theory) => (
                <Card
                  key={theory.id}
                  className="overflow-hidden border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group cursor-pointer"
                  onClick={() => setSelectedTheoryId(theory.id)}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors flex-1">
                          {theory.name}
                        </h3>
                        <span className={`px-2 py-1 rounded text-xs font-semibold border ${THEORY_STATUS_COLORS[theory.scientificStatus]}`}>
                          {THEORY_STATUS_LABELS[theory.scientificStatus]}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{theory.shortName}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground/80 mb-4 line-clamp-3">
                      {theory.description}
                    </p>

                    {/* Key Researchers */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Users className="w-4 h-4" />
                      <span>{theory.keyResearchers.slice(0, 2).join(", ")}</span>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex gap-2">
                        {theory.supportingEvidence.length > 0 && (
                          <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">
                            {theory.supportingEvidence.length} evidence
                          </span>
                        )}
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          // Theory Detail View
          <div className="space-y-8">
            {/* Title */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedTheory.name}</h2>
                  <p className="text-muted-foreground text-lg">{selectedTheory.shortName}</p>
                </div>
                <span className={`px-3 py-1 rounded-lg text-sm font-semibold border ${THEORY_STATUS_COLORS[selectedTheory.scientificStatus]}`}>
                  {THEORY_STATUS_LABELS[selectedTheory.scientificStatus]}
                </span>
              </div>
            </div>

            {/* Main Description */}
            <Card className="border-border p-8 bg-card/50">
              <h3 className="text-xl font-bold mb-4">Overview</h3>
              <p className="text-foreground/80 text-lg leading-relaxed">{selectedTheory.description}</p>
            </Card>

            {/* Tabbed Content */}
            <Tabs defaultValue="assumptions" className="w-full">
              <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 gap-2 bg-card/50 p-2 rounded-lg border border-border">
                <TabsTrigger value="assumptions" className="text-xs">Core</TabsTrigger>
                <TabsTrigger value="researchers" className="text-xs">Researchers</TabsTrigger>
                <TabsTrigger value="history" className="text-xs">History</TabsTrigger>
                <TabsTrigger value="concepts" className="text-xs">Concepts</TabsTrigger>
                <TabsTrigger value="evidence" className="text-xs">Evidence</TabsTrigger>
                <TabsTrigger value="debates" className="text-xs">Debates</TabsTrigger>
                <TabsTrigger value="predictions" className="text-xs">Predictions</TabsTrigger>
                <TabsTrigger value="strengths" className="text-xs">Strengths</TabsTrigger>
                <TabsTrigger value="weaknesses" className="text-xs">Weaknesses</TabsTrigger>
                <TabsTrigger value="future" className="text-xs">Future</TabsTrigger>
              </TabsList>

              {/* Core Assumptions */}
              <TabsContent value="assumptions" className="space-y-4">
                <Card className="border-border p-6">
                  <h3 className="text-lg font-bold mb-4">Core Assumptions</h3>
                  <ul className="space-y-3">
                    {selectedTheory.coreAssumptions.map((assumption, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span className="text-foreground/80">{assumption}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>

              {/* Researchers */}
              <TabsContent value="researchers" className="space-y-4">
                <Card className="border-border p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Key Researchers
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedTheory.keyResearchers.map((researcher, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-card border border-border/50 hover:border-cyan-500/30 transition-colors cursor-pointer"
                        onClick={() => navigate("/author-atlas")}
                      >
                        <p className="font-semibold text-cyan-400">{researcher}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Historical Development */}
              <TabsContent value="history" className="space-y-4">
                <Card className="border-border p-6">
                  <h3 className="text-lg font-bold mb-4">Historical Development</h3>
                  <p className="text-foreground/80 leading-relaxed">{selectedTheory.historicalDevelopment}</p>
                </Card>
              </TabsContent>

              {/* Related Concepts */}
              <TabsContent value="concepts" className="space-y-4">
                <Card className="border-border p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Related Concepts
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTheory.relatedConcepts.map((concept, i) => (
                      <button
                        key={i}
                        onClick={() => navigate("/concept-atlas")}
                        className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 transition-colors text-sm font-semibold"
                      >
                        {concept}
                      </button>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Evidence */}
              <TabsContent value="evidence" className="space-y-4">
                <div className="space-y-4">
                  {selectedTheory.supportingEvidence.length > 0 && (
                    <Card className="border-border p-6">
                      <h3 className="text-lg font-bold mb-4 text-green-400">Supporting Evidence</h3>
                      <div className="space-y-2">
                        {getSupportingEvidence(selectedTheory.supportingEvidence).map((evidence, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 hover:border-green-500/60 transition-colors cursor-pointer"
                            onClick={() => navigate("/evidence-atlas")}
                          >
                            <p className="font-semibold text-green-400">{evidence.name}</p>
                            <p className="text-sm text-foreground/70">{evidence.researchers.join(", ")} ({evidence.year})</p>
                          </div>
                        ))}
                      </div>
                    </Card>
                  )}

                  {selectedTheory.contradictingEvidence.length > 0 && (
                    <Card className="border-border p-6">
                      <h3 className="text-lg font-bold mb-4 text-red-400">Contradictory Evidence</h3>
                      <div className="space-y-2">
                        {getSupportingEvidence(selectedTheory.contradictingEvidence).map((evidence, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 hover:border-red-500/60 transition-colors cursor-pointer"
                            onClick={() => navigate("/evidence-atlas")}
                          >
                            <p className="font-semibold text-red-400">{evidence.name}</p>
                            <p className="text-sm text-foreground/70">{evidence.researchers.join(", ")} ({evidence.year})</p>
                          </div>
                        ))}
                      </div>
                    </Card>
                  )}
                </div>
              </TabsContent>

              {/* Debates */}
              <TabsContent value="debates" className="space-y-4">
                <Card className="border-border p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Major Debates
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTheory.majorDebates.map((debate, i) => (
                      <button
                        key={i}
                        onClick={() => navigate("/debate-atlas")}
                        className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors text-sm font-semibold"
                      >
                        {debate}
                      </button>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Testable Predictions */}
              <TabsContent value="predictions" className="space-y-4">
                <Card className="border-border p-6">
                  <h3 className="text-lg font-bold mb-4">Testable Predictions</h3>
                  <ul className="space-y-3">
                    {selectedTheory.testablePredictions.map((prediction, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-cyan-400 font-bold">→</span>
                        <span className="text-foreground/80">{prediction}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>

              {/* Strengths */}
              <TabsContent value="strengths" className="space-y-4">
                <Card className="border-border p-6">
                  <h3 className="text-lg font-bold mb-4 text-green-400">Strengths</h3>
                  <ul className="space-y-3">
                    {selectedTheory.strengths.map((strength, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-green-400 font-bold">✓</span>
                        <span className="text-foreground/80">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>

              {/* Weaknesses */}
              <TabsContent value="weaknesses" className="space-y-4">
                <Card className="border-border p-6">
                  <h3 className="text-lg font-bold mb-4 text-red-400 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Weaknesses
                  </h3>
                  <ul className="space-y-3">
                    {selectedTheory.weaknesses.map((weakness, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-red-400 font-bold">✗</span>
                        <span className="text-foreground/80">{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>

              {/* Future Directions */}
              <TabsContent value="future" className="space-y-4">
                <Card className="border-border p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Future Directions
                  </h3>
                  <ul className="space-y-3">
                    {selectedTheory.futureDirections.map((direction, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-cyan-400 font-bold">→</span>
                        <span className="text-foreground/80">{direction}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Recommended Books */}
            {selectedTheory.recommendedBooks.length > 0 && (
              <Card className="border-border p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Recommended Books
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTheory.recommendedBooks.map((book, i) => (
                    <button
                      key={i}
                      onClick={() => navigate("/book-atlas")}
                      className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors text-sm font-semibold"
                    >
                      {book}
                    </button>
                  ))}
                </div>
              </Card>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-8 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setSelectedTheoryId(null)}
                className="border-cyan-500/30 hover:bg-cyan-500/10"
              >
                ← Back to Theories
              </Button>
              <Button
                onClick={() => navigate("/theory-comparison")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
              >
                Compare Theories →
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
