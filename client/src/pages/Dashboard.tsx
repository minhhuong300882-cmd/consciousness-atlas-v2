import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Brain, BookOpen, Users, Lightbulb, Zap, Map, Clock, Compass, ArrowRight, TestTubes, Award } from "lucide-react";

const SECTIONS = [
  { id: "field-map", title: "Field Map", subtitle: "Theories", icon: Map, color: "from-blue-500 to-cyan-400" },
  { id: "timeline", title: "Timeline", subtitle: "History", icon: Clock, color: "from-purple-500 to-pink-400" },
  { id: "author-atlas", title: "Authors", subtitle: "Researchers", icon: Users, color: "from-indigo-500 to-blue-400" },
  { id: "concept-atlas", title: "Concepts", subtitle: "Definitions", icon: Lightbulb, color: "from-yellow-500 to-orange-400" },
  { id: "debate-atlas", title: "Debates", subtitle: "Philosophy", icon: Zap, color: "from-red-500 to-pink-400" },
  { id: "book-atlas", title: "Books", subtitle: "Reading", icon: BookOpen, color: "from-green-500 to-emerald-400" },
  { id: "learning-path", title: "Learning", subtitle: "Curriculum", icon: Compass, color: "from-cyan-500 to-blue-400" },
  { id: "theory-comparison", title: "Theory Matrix", subtitle: "Comparison", icon: Brain, color: "from-indigo-500 to-purple-400" },
  { id: "evidence-atlas", title: "Evidence", subtitle: "Experiments", icon: TestTubes, color: "from-emerald-500 to-teal-400" },
  { id: "scientific-consensus", title: "Consensus", subtitle: "Status", icon: Award, color: "from-purple-500 to-violet-400" },
  { id: "evidence-dashboard", title: "Evidence Dashboard", subtitle: "Analysis", icon: TestTubes, color: "from-teal-500 to-cyan-400" },
];

export default function Dashboard() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            ← Back
          </Button>
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Navigate through the eight dimensions of consciousness</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Featured Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => navigate("/learning-path")}
              className="group relative overflow-hidden rounded-lg border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 hover:border-cyan-500/60 transition-all duration-300"
            >
              <div className="relative z-10">
                <Compass className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Start Learning</h3>
                <p className="text-muted-foreground mb-4">Follow a structured path from beginner to researcher</p>
                <div className="flex items-center text-cyan-400 group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-semibold">Begin</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </button>

            <button
              onClick={() => navigate("/field-map")}
              className="group relative overflow-hidden rounded-lg border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 hover:border-purple-500/60 transition-all duration-300"
            >
              <div className="relative z-10">
                <Map className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Explore Theories</h3>
                <p className="text-muted-foreground mb-4">Discover the major theories of consciousness</p>
                <div className="flex items-center text-purple-400 group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-semibold">Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* All Sections Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Sections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTIONS.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => navigate(`/${section.id}`)}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-cyan-500/50 transition-all duration-300 p-6 text-left hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-5 h-5 text-background" />
                    </div>
                    
                    <h3 className="font-bold text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {section.subtitle}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-0 group-hover:w-full transition-all duration-300" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 p-8 rounded-lg border border-border bg-card/50">
          <h2 className="text-2xl font-bold mb-6">Atlas Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-bold text-cyan-400">15</p>
              <p className="text-muted-foreground">Consciousness Theories</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-400">14</p>
              <p className="text-muted-foreground">Comparison Dimensions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-pink-400">6</p>
              <p className="text-muted-foreground">Philosophical Debates</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-400">28</p>
              <p className="text-muted-foreground">Curated Books</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-400">40+</p>
              <p className="text-muted-foreground">Landmark Experiments</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-violet-400">15</p>
              <p className="text-muted-foreground">Consensus Scores</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
