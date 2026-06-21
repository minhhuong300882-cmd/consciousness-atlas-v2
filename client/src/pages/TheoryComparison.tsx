import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp, Grid, BarChart3, GitCompare, Zap } from "lucide-react";
import { THEORIES, THEORY_DIMENSIONS } from "@/data/theoryComparison";
import { getTheoryLinks } from "@/lib/atlasLinks";
import { CrossLinkSection } from "@/components/CrossLinkSection";

type ViewType = "matrix" | "dimension" | "comparison" | "evidence";

export default function TheoryComparison() {
  const [, navigate] = useLocation();
  const [currentView, setCurrentView] = useState<ViewType>("matrix");
  const [selectedTheories, setSelectedTheories] = useState<string[]>([]);
  const [selectedDimension, setSelectedDimension] = useState<string>("definition");
  const [expandedTheory, setExpandedTheory] = useState<string | null>(null);
  const [selectedTheoryDetail, setSelectedTheoryDetail] = useState<string | null>(null);

  const theoryList = Object.values(THEORIES);
  const dimensionLabels: Record<string, string> = {
    definition: "Definition of Consciousness",
    qualia: "Qualia",
    hardProblem: "Hard Problem",
    self: "Self",
    freeWill: "Free Will",
    bodyRole: "Role of the Body",
    emotionRole: "Role of Emotion",
    neuralBasis: "Neural Basis",
    animalConsciousness: "Animal Consciousness",
    aiConsciousness: "AI Consciousness",
    evidence: "Strongest Supporting Evidence",
    criticisms: "Major Criticisms",
    predictions: "Testable Predictions",
    influence: "Scientific Influence",
  };

  const toggleTheorySelection = (id: string) => {
    setSelectedTheories((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const selectAllTheories = () => {
    setSelectedTheories(theoryList.map((t) => t.id));
  };

  const clearSelection = () => {
    setSelectedTheories([]);
  };

  // Matrix View: Show all theories across all dimensions
  const renderMatrixView = () => {
    return (
      <div className="space-y-6">
        <div className="flex gap-2 mb-4">
          <Button onClick={selectAllTheories} size="sm" variant="outline">
            Select All
          </Button>
          <Button onClick={clearSelection} size="sm" variant="outline">
            Clear
          </Button>
          <span className="text-sm text-muted-foreground ml-auto">
            {selectedTheories.length} theories selected
          </span>
        </div>

        {/* Theory Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {theoryList.map((theory) => (
            <button
              key={theory.id}
              onClick={() => {
                toggleTheorySelection(theory.id);
                setSelectedTheoryDetail(theory.id);
              }}
              className={`p-3 rounded-lg border-2 transition-all text-left ${
                selectedTheories.includes(theory.id)
                  ? `border-cyan-500 bg-cyan-500/10`
                  : `border-border hover:border-cyan-500/50`
              }`}
            >
              <div className={`text-sm font-semibold bg-gradient-to-r ${theory.color} bg-clip-text text-transparent`}>
                {theory.name}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {theory.researchers[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Comparison Matrix */}
        {selectedTheories.length > 0 && (
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-3 font-bold text-foreground sticky left-0 bg-background z-10 w-40">
                    Dimension
                  </th>
                  {selectedTheories.map((theoryId) => {
                    const theory = THEORIES[theoryId];
                    return (
                      <th key={theoryId} className="p-3 text-center min-w-64">
                        <div className={`font-bold bg-gradient-to-r ${theory.color} bg-clip-text text-transparent`}>
                          {theory.name}
                        </div>
                        <div className="text-xs text-muted-foreground">{theory.researchers[0]}</div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {THEORY_DIMENSIONS.map((dimension) => (
                  <tr key={dimension} className="border-b border-border hover:bg-card/50">
                    <td className="p-3 font-semibold text-foreground sticky left-0 bg-background z-10 w-40">
                      {dimensionLabels[dimension]}
                    </td>
                    {selectedTheories.map((theoryId) => {
                      const theory = THEORIES[theoryId];
                      const dim = theory.dimensions[dimension];
                      return (
                        <td key={theoryId} className="p-3 text-sm">
                          <div className="space-y-2">
                            <p className="font-semibold text-cyan-400">{dim.position}</p>
                            <p className="text-muted-foreground text-xs">{dim.explanation}</p>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedTheories.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>Select theories to compare them across all dimensions</p>
          </div>
        )}
      </div>
    );
  };

  // Dimension View: Show all theories for a single dimension
  const renderDimensionView = () => {
    const dimension = selectedDimension;
    const dimLabel = dimensionLabels[dimension];

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">{dimLabel}</h3>
          <p className="text-muted-foreground">
            How the 10 major consciousness theories address this dimension
          </p>
        </div>

        {/* Dimension Selector */}
        <div className="flex flex-wrap gap-2">
          {THEORY_DIMENSIONS.map((dim) => (
            <Button
              key={dim}
              onClick={() => setSelectedDimension(dim)}
              variant={selectedDimension === dim ? "default" : "outline"}
              size="sm"
            >
              {dimensionLabels[dim]}
            </Button>
          ))}
        </div>

        {/* Theory Positions */}
        <div className="grid grid-cols-1 gap-6">
          {theoryList.map((theory) => {
            const dim = theory.dimensions[dimension];
            return (
              <Card key={theory.id} className="p-6 border-l-4" style={{ borderLeftColor: `hsl(${Math.random() * 360}, 70%, 50%)` }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className={`text-lg font-bold bg-gradient-to-r ${theory.color} bg-clip-text text-transparent`}>
                      {theory.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{theory.researchers.join(", ")}</p>
                  </div>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    {theory.scientificInfluence}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-cyan-400 mb-2">{dim.position}</p>
                    <p className="text-sm text-foreground">{dim.explanation}</p>
                  </div>

                  {dim.evidence.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">Supporting Evidence:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {dim.evidence.map((e, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  };

  // Theory vs Theory View: Compare two theories in detail
  const renderComparisonView = () => {
    const [theory1Id, theory2Id] = selectedTheories.length >= 2 ? selectedTheories : [null, null];

    if (!theory1Id || !theory2Id) {
      return (
        <div className="text-center py-12 text-muted-foreground">
          <p>Select exactly 2 theories to compare them in detail</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
            {theoryList.map((theory) => (
              <button
                key={theory.id}
                onClick={() => setSelectedTheories([theory.id])}
                className="p-3 rounded-lg border border-border hover:border-cyan-500/50 transition-all text-left"
              >
                <div className={`text-sm font-semibold bg-gradient-to-r ${theory.color} bg-clip-text text-transparent`}>
                  {theory.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    const theory1 = THEORIES[theory1Id];
    const theory2 = THEORIES[theory2Id];

    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Theory 1 */}
          <Card className="p-6 border-l-4" style={{ borderLeftColor: `hsl(${Math.random() * 360}, 70%, 50%)` }}>
            <h3 className={`text-xl font-bold bg-gradient-to-r ${theory1.color} bg-clip-text text-transparent mb-2`}>
              {theory1.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{theory1.researchers.join(", ")}</p>
            <p className="text-sm mb-4">{theory1.fullDescription}</p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Scientific Influence:</span> {theory1.scientificInfluence}
              </p>
              <p>
                <span className="font-semibold">Year:</span> {theory1.year}
              </p>
            </div>
          </Card>

          {/* Theory 2 */}
          <Card className="p-6 border-l-4" style={{ borderLeftColor: `hsl(${Math.random() * 360}, 70%, 50%)` }}>
            <h3 className={`text-xl font-bold bg-gradient-to-r ${theory2.color} bg-clip-text text-transparent mb-2`}>
              {theory2.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{theory2.researchers.join(", ")}</p>
            <p className="text-sm mb-4">{theory2.fullDescription}</p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Scientific Influence:</span> {theory2.scientificInfluence}
              </p>
              <p>
                <span className="font-semibold">Year:</span> {theory2.year}
              </p>
            </div>
          </Card>
        </div>

        {/* Dimension Comparison */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Dimension-by-Dimension Comparison</h3>
          {THEORY_DIMENSIONS.map((dimension) => {
            const dim1 = theory1.dimensions[dimension];
            const dim2 = theory2.dimensions[dimension];
            return (
              <Card key={dimension} className="p-4">
                <h4 className="font-semibold text-cyan-400 mb-4">{dimensionLabels[dimension]}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">{theory1.name}</p>
                    <p className="text-sm text-muted-foreground">{dim1.position}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">{theory2.name}</p>
                    <p className="text-sm text-muted-foreground">{dim2.position}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  };

  // Evidence View: Show evidence for each theory
  const renderEvidenceView = () => {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Evidence & Predictions</h3>
          <p className="text-muted-foreground">
            Supporting evidence and testable predictions for each theory
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {theoryList.map((theory) => (
            <Card
              key={theory.id}
              className="p-6 cursor-pointer hover:border-cyan-500/50 transition-all border-l-4"
              style={{ borderLeftColor: `hsl(${Math.random() * 360}, 70%, 50%)` }}
              onClick={() =>
                setExpandedTheory(expandedTheory === theory.id ? null : theory.id)
              }
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className={`text-lg font-bold bg-gradient-to-r ${theory.color} bg-clip-text text-transparent`}>
                    {theory.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{theory.researchers.join(", ")}</p>
                </div>
                {expandedTheory === theory.id ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </div>

              {expandedTheory === theory.id && (
                <div className="mt-4 space-y-4 border-t border-border pt-4">
                  <div>
                    <p className="font-semibold text-cyan-400 mb-2">Strongest Supporting Evidence:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {theory.dimensions.evidence.evidence.map((e, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-400 mt-0.5">✓</span>
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-pink-400 mb-2">Major Criticisms:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {theory.majorCriticisms.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">✗</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-400 mb-2">Testable Predictions:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {theory.testablePredictions.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-0.5">→</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-cyan-400 mb-2">Scientific Influence:</p>
                    <p className="text-sm text-muted-foreground">{theory.scientificInfluence}</p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    );
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
          <h1 className="text-4xl font-bold mb-2">Theory Comparison Matrix</h1>
          <p className="text-muted-foreground">
            Compare 10 major consciousness theories across 14 dimensions
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* View Selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            onClick={() => setCurrentView("matrix")}
            variant={currentView === "matrix" ? "default" : "outline"}
            className="gap-2"
          >
            <Grid className="w-4 h-4" />
            Matrix View
          </Button>
          <Button
            onClick={() => setCurrentView("dimension")}
            variant={currentView === "dimension" ? "default" : "outline"}
            className="gap-2"
          >
            <BarChart3 className="w-4 h-4" />
            Dimension View
          </Button>
          <Button
            onClick={() => setCurrentView("comparison")}
            variant={currentView === "comparison" ? "default" : "outline"}
            className="gap-2"
          >
            <GitCompare className="w-4 h-4" />
            Theory Comparison
          </Button>
          <Button
            onClick={() => setCurrentView("evidence")}
            variant={currentView === "evidence" ? "default" : "outline"}
            className="gap-2"
          >
            <Zap className="w-4 h-4" />
            Evidence & Predictions
          </Button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {currentView === "matrix" && renderMatrixView()}
          {currentView === "dimension" && renderDimensionView()}
          {currentView === "comparison" && renderComparisonView()}
          {currentView === "evidence" && renderEvidenceView()}
        </div>

        {/* Cross-Links Section */}
        {selectedTheoryDetail && (
          <div className="mt-12 space-y-8">
            <div className="border-t border-border pt-8">
              <h2 className="text-2xl font-bold mb-6">Connected Knowledge</h2>
              <CrossLinkSection groups={getTheoryLinks(selectedTheoryDetail)} />
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 p-8 rounded-lg border border-border bg-card/50">
          <h3 className="text-xl font-bold mb-4">About This Tool</h3>
          <p className="text-muted-foreground mb-4">
            The Theory Comparison Matrix is designed to help you understand how major consciousness theories agree, disagree, and compete with each other. Use the different views to explore theories from multiple perspectives:
          </p>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li>
              <span className="font-semibold">Matrix View:</span> See all theories across all dimensions at once
            </li>
            <li>
              <span className="font-semibold">Dimension View:</span> Focus on one dimension and see how all theories address it
            </li>
            <li>
              <span className="font-semibold">Theory Comparison:</span> Deep dive into how two theories differ
            </li>
            <li>
              <span className="font-semibold">Evidence View:</span> Explore supporting evidence and criticisms for each theory
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
