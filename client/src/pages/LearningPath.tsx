import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, BookOpen, Clock, Target, Zap, Award } from "lucide-react";
import { LEARNING_PATHS, LEARNING_PROGRESSION } from "@/data/learningPaths";

export default function LearningPath() {
  const [, navigate] = useLocation();
  const [selectedStage, setSelectedStage] = useState<string>("beginner");
  const [viewMode, setViewMode] = useState<"overview" | "curriculum" | "progression">("overview");
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const stage = LEARNING_PATHS[selectedStage];

  if (!stage) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Stage Not Found</h2>
          <Button onClick={() => setSelectedStage("beginner")}>Return to Beginner</Button>
        </div>
      </div>
    );
  }

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
          <h1 className="text-4xl font-bold mb-2">Learning Paths</h1>
          <p className="text-muted-foreground">Structured curriculum for consciousness studies</p>
        </div>
      </header>

      {/* View Mode Selector */}
      <div className="border-b border-border bg-card/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={viewMode === "overview" ? "default" : "outline"}
              onClick={() => setViewMode("overview")}
              className="gap-2"
            >
              <Zap className="w-4 h-4" />
              Overview
            </Button>
            <Button
              variant={viewMode === "curriculum" ? "default" : "outline"}
              onClick={() => setViewMode("curriculum")}
              className="gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Curriculum
            </Button>
            <Button
              variant={viewMode === "progression" ? "default" : "outline"}
              onClick={() => setViewMode("progression")}
              className="gap-2"
            >
              <Award className="w-4 h-4" />
              Progression Map
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {viewMode === "overview" && (
          <div className="space-y-12">
            {/* Stage Selector */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Choose Your Learning Stage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {LEARNING_PROGRESSION.map((stageId) => {
                  const s = LEARNING_PATHS[stageId];
                  const isSelected = selectedStage === stageId;
                  return (
                    <button
                      key={stageId}
                      onClick={() => {
                        setSelectedStage(stageId);
                        setViewMode("curriculum");
                      }}
                      className={`group relative overflow-hidden rounded-lg border-2 transition-all p-6 text-left hover:shadow-lg ${
                        isSelected
                          ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                          : "border-border hover:border-cyan-500/50"
                      }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">
                            {s.name}
                          </h3>
                          <div className="text-2xl font-bold text-cyan-400/60">{s.difficulty}</div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">{s.totalDuration}</p>
                        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{s.description}</p>
                        <div className="flex items-center gap-2 text-cyan-400 group-hover:translate-x-1 transition-transform">
                          <span className="text-sm font-semibold">Start</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Stage Overview */}
            <Card className="border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-cyan-400" />
                    Stage: {stage.name}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">{stage.title}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    Duration
                  </h3>
                  <p className="text-2xl font-bold text-cyan-400 mb-2">{stage.totalDuration}</p>
                  <p className="text-sm text-muted-foreground">{stage.modules.length} modules</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-400" />
                    Difficulty
                  </h3>
                  <div className="flex gap-1 mb-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-8 rounded-full ${
                          i < stage.difficulty ? "bg-cyan-400" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{stage.difficulty} of 4</p>
                </div>
              </div>
            </Card>

            {/* Key Outcomes */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stage.keyOutcomes.map((outcome, idx) => (
                  <Card key={idx} className="p-4 border-border/50 hover:border-cyan-500/50 transition-colors">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      </div>
                      <p className="text-foreground/80">{outcome}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {viewMode === "curriculum" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">{stage.title}</h2>
              <p className="text-muted-foreground mb-6">{stage.description}</p>
            </div>

            {/* Module List */}
            <div className="space-y-4">
              {stage.modules.map((module) => (
                <Card
                  key={module.id}
                  className="border-border/50 hover:border-cyan-500/50 transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                    className="w-full p-6 text-left hover:bg-card/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-400 capitalize">
                            {module.type}
                          </div>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {module.duration}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">{module.title}</h3>
                        <p className="text-foreground/70">{module.description}</p>
                        {module.prerequisites && module.prerequisites.length > 0 && (
                          <p className="text-xs text-muted-foreground mt-2">
                            Prerequisites: {module.prerequisites.join(", ")}
                          </p>
                        )}
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 mt-1 ${
                          expandedModule === module.id ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {expandedModule === module.id && (
                    <div className="border-t border-border/50 p-6 bg-card/30">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">About This Module</h4>
                          <p className="text-foreground/70">{module.description}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-semibold text-muted-foreground mb-1">Duration</p>
                            <p className="text-lg font-bold text-cyan-400">{module.duration}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-muted-foreground mb-1">Type</p>
                            <p className="text-lg font-bold capitalize">{module.type}</p>
                          </div>
                        </div>
                        <Button className="w-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/50">
                          Start Learning
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-border">
              <Button
                variant="outline"
                onClick={() => {
                  const currentIdx = LEARNING_PROGRESSION.indexOf(selectedStage);
                  if (currentIdx > 0) {
                    setSelectedStage(LEARNING_PROGRESSION[currentIdx - 1]);
                  }
                }}
                disabled={selectedStage === LEARNING_PROGRESSION[0]}
              >
                ← Previous Stage
              </Button>
              {stage.nextStage && (
                <Button
                  onClick={() => setSelectedStage(stage.nextStage!)}
                  className="gap-2"
                >
                  Next Stage: {LEARNING_PATHS[stage.nextStage].name}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        )}

        {viewMode === "progression" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Learning Progression Map</h2>
              <p className="text-muted-foreground mb-8">
                Your journey through consciousness studies, from beginner to researcher
              </p>
            </div>

            {/* Progression Timeline */}
            <div className="space-y-6">
              {LEARNING_PROGRESSION.map((stageId, idx) => {
                const s = LEARNING_PATHS[stageId];
                const isSelected = selectedStage === stageId;
                return (
                  <div key={stageId} className="relative">
                    {/* Connector Line */}
                    {idx < LEARNING_PROGRESSION.length - 1 && (
                      <div className="absolute left-12 top-24 w-1 h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                    )}

                    {/* Stage Card */}
                    <button
                      onClick={() => {
                        setSelectedStage(stageId);
                        setViewMode("curriculum");
                      }}
                      className={`w-full group relative overflow-hidden rounded-lg border-2 transition-all p-6 text-left hover:shadow-lg ${
                        isSelected
                          ? "border-cyan-500 shadow-lg shadow-cyan-500/20 bg-cyan-500/5"
                          : "border-border hover:border-cyan-500/50"
                      }`}
                    >
                      <div className="flex gap-6">
                        {/* Stage Number */}
                        <div className="flex-shrink-0">
                          <div className={`w-24 h-24 rounded-lg flex items-center justify-center font-bold text-2xl bg-gradient-to-br ${s.color}`}>
                            {idx + 1}
                          </div>
                        </div>

                        {/* Stage Info */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                            {s.name}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-4">{s.title}</p>
                          <p className="text-foreground/70 mb-4">{s.description}</p>

                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground mb-1">Duration</p>
                              <p className="font-bold text-cyan-400">{s.totalDuration}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground mb-1">Modules</p>
                              <p className="font-bold text-cyan-400">{s.modules.length}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground mb-1">Difficulty</p>
                              <div className="flex gap-1">
                                {[...Array(4)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`h-2 w-3 rounded-full ${
                                      i < s.difficulty ? "bg-cyan-400" : "bg-muted"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Key Outcomes Preview */}
                          <div className="mb-4">
                            <p className="text-xs font-semibold text-muted-foreground mb-2">Key Outcomes:</p>
                            <div className="flex flex-wrap gap-2">
                              {s.keyOutcomes.slice(0, 2).map((outcome, i) => (
                                <span key={i} className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                                  {outcome}
                                </span>
                              ))}
                              {s.keyOutcomes.length > 2 && (
                                <span className="text-xs text-muted-foreground px-2 py-1">
                                  +{s.keyOutcomes.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-cyan-400 group-hover:translate-x-1 transition-transform">
                            <span className="text-sm font-semibold">View Curriculum</span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Completion Milestones */}
            <Card className="border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8 mt-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-cyan-400" />
                Completion Milestones
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {LEARNING_PROGRESSION.map((stageId, idx) => {
                  const s = LEARNING_PATHS[stageId];
                  return (
                    <div key={stageId} className="text-center">
                      <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-lg bg-gradient-to-br ${s.color}`}>
                        {idx + 1}
                      </div>
                      <p className="font-semibold mb-1">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.totalDuration}</p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
