import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Brain, BookOpen, Users, Lightbulb, Zap, Map, Clock, Compass } from "lucide-react";

const ATLAS_SECTIONS = [
  {
    id: "field-map",
    title: "Field Map",
    subtitle: "Consciousness Theories",
    description: "Explore the major theories explaining consciousness: Global Workspace Theory, Integrated Information Theory, Predictive Processing, and more.",
    icon: Map,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "timeline",
    title: "Historical Timeline",
    subtitle: "Evolution of Consciousness Studies",
    description: "Trace the intellectual history from Descartes to modern neuroscience. See how consciousness became a scientific subject.",
    icon: Clock,
    color: "from-purple-500 to-pink-400",
  },
  {
    id: "author-atlas",
    title: "Author Atlas",
    subtitle: "Key Researchers",
    description: "Discover the brilliant minds shaping consciousness research: Damasio, Seth, Metzinger, Tononi, Koch, and more.",
    icon: Users,
    color: "from-indigo-500 to-blue-400",
  },
  {
    id: "concept-atlas",
    title: "Concept Atlas",
    subtitle: "Core Definitions",
    description: "Understand key concepts: qualia, phenomenal consciousness, self, emotion, perception, and their interconnections.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-400",
  },
  {
    id: "debate-atlas",
    title: "Debate Atlas",
    subtitle: "Philosophical Debates",
    description: "Engage with five major debates: Does the self exist? Can AI be conscious? Is there free will? Multiple perspectives explored.",
    icon: Zap,
    color: "from-red-500 to-pink-400",
  },
  {
    id: "book-atlas",
    title: "Book Atlas",
    subtitle: "Curated Reading List",
    description: "Navigate the essential literature from foundational texts to cutting-edge research. Organized by difficulty and topic.",
    icon: BookOpen,
    color: "from-green-500 to-emerald-400",
  },
  {
    id: "learning-path",
    title: "Learning Path",
    subtitle: "Structured Curriculum",
    description: "Three-level progression from newcomer to researcher. Guided learning with recommended reading order and milestones.",
    icon: Compass,
    color: "from-cyan-500 to-blue-400",
  },
  {
    id: "second-brain",
    title: "Second Brain",
    subtitle: "Knowledge Organization",
    description: "Learn to organize consciousness research using PARA, Zettelkasten, and Knowledge Graphs for deep learning.",
    icon: Brain,
    color: "from-violet-500 to-purple-400",
  },
];

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <Brain className="w-6 h-6 text-background" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Atlas of Consciousness
            </h1>
          </div>
          <Button
            variant="outline"
            onClick={() => navigate("/dashboard")}
            className="border-cyan-500/30 hover:bg-cyan-500/10"
          >
            Dashboard
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-background to-background pointer-events-none" />
        
        {/* Neural network pattern background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663775718081/mnR3ZnbMDuhbRasaHWa2Ta/neural-network-pattern-BuvNEZdcJNZAMJVUW3TYmt.webp')`,
            backgroundSize: '400px 400px',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              The Universe of Mind
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Consciousness remains one of science's greatest mysteries. Explore the theories, debates, and research shaping our understanding of awareness, self, and reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate("/dashboard")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
              >
                Explore the Atlas
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/learning-path")}
                className="border-cyan-500/50 hover:bg-cyan-500/10"
              >
                Start Learning
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Atlas Sections Grid */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Eight Dimensions of Consciousness
            </h2>
            <p className="text-muted-foreground">
              Navigate through interconnected explorations of consciousness from multiple perspectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATLAS_SECTIONS.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => navigate(`/${section.id}`)}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 p-6 text-left"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-background" />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-400 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {section.subtitle}
                    </p>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-0 group-hover:w-full transition-all duration-300" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 border-t border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-lg font-bold">Comprehensive</h3>
              <p className="text-muted-foreground">
                Explore 10+ major consciousness theories, 13+ key researchers, and 5 philosophical debates.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Map className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-lg font-bold">Interconnected</h3>
              <p className="text-muted-foreground">
                Discover how theories, researchers, and concepts relate to each other through interactive maps.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Compass className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-lg font-bold">Guided Learning</h3>
              <p className="text-muted-foreground">
                Follow structured learning paths from newcomer to researcher, with curated reading lists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Atlas of Consciousness & the Self</p>
          <p className="text-sm mt-2">Exploring the deepest questions about awareness, mind, and reality</p>
        </div>
      </footer>
    </div>
  );
}
