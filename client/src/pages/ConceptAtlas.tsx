import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Network, BookOpen, Users, Lightbulb, MessageSquare } from "lucide-react";
import { CONCEPTS, CONCEPT_RELATIONSHIPS } from "@/data/concepts";
import { ConceptNetwork } from "@/components/ConceptNetwork";
import { getConceptLinks } from "@/lib/atlasLinks";
import { CrossLinkSection } from "@/components/CrossLinkSection";

export default function ConceptAtlas() {
  const [, navigate] = useLocation();
  const [selectedConcept, setSelectedConcept] = useState("consciousness");
  const [viewMode, setViewMode] = useState<"grid" | "detail" | "network">("grid");
  const [showCrossLinks, setShowCrossLinks] = useState(false);

  const concept = CONCEPTS[selectedConcept];
  
  // Defensive: filter out undefined concepts from connections
  const relatedConcepts = concept?.connections
    ?.map((conn) => CONCEPTS[conn.conceptId])
    .filter((c) => c !== undefined) || [];

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
          <h1 className="text-4xl font-bold mb-2">Concept Atlas</h1>
          <p className="text-muted-foreground">
            Interconnected knowledge map of consciousness research
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* View Mode Selector */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "bg-cyan-500 hover:bg-cyan-600" : ""}
          >
            Grid View
          </Button>
          <Button
            variant={viewMode === "detail" ? "default" : "outline"}
            onClick={() => setViewMode("detail")}
            className={viewMode === "detail" ? "bg-cyan-500 hover:bg-cyan-600" : ""}
          >
            Detail View
          </Button>
          <Button
            variant={viewMode === "network" ? "default" : "outline"}
            onClick={() => setViewMode("network")}
            className={viewMode === "network" ? "bg-cyan-500 hover:bg-cyan-600" : ""}
          >
            <Network className="w-4 h-4 mr-2" />
            Network Map
          </Button>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {Object.values(CONCEPTS).map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedConcept(c.id);
                  setViewMode("detail");
                }}
                className={`group relative overflow-hidden rounded-lg border-2 transition-all duration-300 p-6 text-left hover:shadow-lg ${
                  selectedConcept === c.id
                    ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                    : "border-border hover:border-cyan-500/50"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-sm text-foreground/70 line-clamp-3 mb-3">
                    {c.definition}
                  </p>
                  <div className="flex items-center text-cyan-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Explore <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Detail View */}
        {viewMode === "detail" && concept && (
          <div className="space-y-8">
            {/* Concept Header */}
            <div className={`p-8 rounded-lg border-2 border-border bg-gradient-to-br ${concept.color} bg-opacity-5`}>
              <h2 className="text-4xl font-bold mb-4">{concept.name}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {concept.definition}
              </p>
            </div>

            {/* Tabs for detailed information */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-card border border-border">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="connections">Connections</TabsTrigger>
                <TabsTrigger value="debates">Debates</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Key Researchers */}
                  <Card className="border-border p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <h3 className="font-bold text-lg">Key Researchers</h3>
                    </div>
                    <ul className="space-y-2">
                      {concept.keyResearchers.map((researcher) => (
                        <li
                          key={researcher}
                          className="text-sm text-foreground/80 flex items-start hover:text-cyan-400 transition-colors cursor-pointer"
                        >
                          <span className="text-cyan-400 mr-2">→</span>
                          {researcher}
                        </li>
                      ))}
                    </ul>
                  </Card>

                  {/* Related Theories */}
                  <Card className="border-border p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="w-5 h-5 text-purple-400" />
                      <h3 className="font-bold text-lg">Related Theories</h3>
                    </div>
                    <ul className="space-y-2">
                      {concept.relatedTheories.map((theory) => (
                        <li
                          key={theory}
                          className="text-sm text-foreground/80 flex items-start hover:text-purple-400 transition-colors cursor-pointer"
                        >
                          <span className="text-purple-400 mr-2">→</span>
                          {theory}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </TabsContent>

              {/* History Tab */}
              <TabsContent value="history" className="space-y-6">
                <Card className="border-border p-6">
                  <h3 className="font-bold text-lg mb-4">Historical Origins</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {concept.historicalOrigins}
                  </p>
                </Card>
              </TabsContent>

              {/* Connections Tab */}
              <TabsContent value="connections" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedConcepts.map((relatedConcept) => {
                    // Find the matching connection for this related concept
                    const connection = concept?.connections?.find(
                      (conn) => CONCEPTS[conn.conceptId]?.id === relatedConcept.id
                    );
                    if (!connection) return null;
                    return (
                      <button
                        key={relatedConcept.id}
                        onClick={() => setSelectedConcept(relatedConcept.id)}
                        className={`group relative overflow-hidden rounded-lg border-2 border-border hover:border-cyan-500/50 transition-all p-6 text-left hover:shadow-lg`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${relatedConcept.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-bold group-hover:text-cyan-400 transition-colors">
                              {relatedConcept.name}
                            </h4>
                            <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                              {connection.relationship}
                            </span>
                          </div>
                          <p className="text-sm text-foreground/70 line-clamp-2">
                            {relatedConcept.definition}
                          </p>
                        </div>
                      </button>
                    );
                  }).filter(Boolean)}
                </div>
              </TabsContent>

              {/* Debates Tab */}
              <TabsContent value="debates" className="space-y-4">
                {concept.majorDebates.map((debate, idx) => (
                  <Card key={idx} className="border-border p-6 hover:border-cyan-500/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <p className="text-foreground/80">{debate}</p>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              {/* Resources Tab */}
              <TabsContent value="resources" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-green-400" />
                      Recommended Books
                    </h3>
                    <ul className="space-y-2">
                      {concept.recommendedBooks.map((book, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-foreground/80 flex items-start hover:text-green-400 transition-colors cursor-pointer"
                        >
                          <span className="text-green-400 mr-2">•</span>
                          {book}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setViewMode("grid")}
                className="border-cyan-500/30 hover:bg-cyan-500/10"
              >
                ← Back to Grid
              </Button>
              <Button
                onClick={() => navigate("/author-atlas")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
              >
                Explore Authors →
              </Button>
            </div>
          </div>
        )}

        {/* Network View */}
        {viewMode === "network" && (
          <div className="space-y-8">
            <Card className="border-border p-8 bg-card/50">
              <h2 className="text-2xl font-bold mb-6">Concept Network Map</h2>
              <p className="text-muted-foreground mb-6">
                This interactive network shows how the 12 core concepts of consciousness research interconnect. Click on any concept to explore its relationships.
              </p>

              {/* Network Visualization */}
              <ConceptNetwork
                selectedConcept={selectedConcept}
                onConceptClick={(conceptId) => {
                  setSelectedConcept(conceptId);
                  setViewMode("detail");
                }}
              />

              {/* Relationship Legend */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "depends on", color: "from-blue-500 to-cyan-500" },
                  { label: "enables", color: "from-green-500 to-emerald-500" },
                  { label: "generates", color: "from-purple-500 to-pink-500" },
                  { label: "sustains", color: "from-yellow-500 to-orange-500" },
                ].map((rel) => (
                  <div key={rel.label} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${rel.color}`} />
                    <span className="text-sm text-foreground/70">{rel.label}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Concept List for Network View */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.values(CONCEPTS).map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedConcept(c.id);
                    setViewMode("detail");
                  }}
                  className={`group relative overflow-hidden rounded-lg border-2 transition-all p-6 text-left hover:shadow-lg ${
                    selectedConcept === c.id
                      ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                      : "border-border hover:border-cyan-500/50"
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      {c.connections.length} connections
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {c.connections.slice(0, 3).map((conn) => {
                        const relatedConcept = CONCEPTS[conn.conceptId];
                        if (!relatedConcept) return null;
                        return (
                          <span
                            key={conn.conceptId}
                            className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded"
                          >
                            {relatedConcept.name}
                          </span>
                        );
                      }).filter(Boolean)}
                      {c.connections.length > 3 && (
                        <span className="text-xs text-muted-foreground px-2 py-1">
                          +{c.connections.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Cross-Links Section */}
        {viewMode === "detail" && concept && (
          <div className="mt-12 space-y-8">
            <div className="border-t border-border pt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Connected Knowledge</h2>
                <Button
                  variant="outline"
                  onClick={() => setShowCrossLinks(!showCrossLinks)}
                >
                  {showCrossLinks ? "Hide" : "Show"} Connections
                </Button>
              </div>
              {showCrossLinks && <CrossLinkSection groups={getConceptLinks(selectedConcept)} />}
            </div>
          </div>
        )}

        {/* Navigation Footer */}
        <div className="mt-16 flex justify-between pt-8 border-t border-border">
          <Button
            variant="outline"
            onClick={() => navigate("/timeline")}
            className="border-cyan-500/30 hover:bg-cyan-500/10"
          >
            ← Timeline
          </Button>
          <Button
            onClick={() => navigate("/debate-atlas")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
          >
            Next: Debates →
          </Button>
        </div>
      </main>
    </div>
  );
}
