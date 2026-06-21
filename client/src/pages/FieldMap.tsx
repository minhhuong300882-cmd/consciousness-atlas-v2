import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const THEORIES = [
  {
    id: "gwt",
    name: "Global Workspace Theory",
    researchers: "Bernard Baars, Stanislas Dehaene",
    description: "Consciousness arises when information enters a 'global workspace' in the brain, broadcasting it widely.",
    strength: "Explains attention and why we can only consciously process limited information",
    weakness: "Doesn't explain phenomenal consciousness (the 'hard problem')",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "iit",
    name: "Integrated Information Theory",
    researchers: "Giulio Tononi, Christof Koch",
    description: "Consciousness depends on integrated information in a system; the more integrated, the more conscious.",
    strength: "Explains why unified experience feels unified, applies to any system",
    weakness: "Difficult to test empirically, may attribute consciousness to simple systems",
    color: "from-purple-500 to-pink-400",
  },
  {
    id: "pp",
    name: "Predictive Processing",
    researchers: "Andy Clark, Jakob Hohwy, Anil Seth",
    description: "The brain is fundamentally a prediction machine; consciousness emerges from predictions about sensory input.",
    strength: "Explains perception, hallucinations, and the active nature of consciousness",
    weakness: "Doesn't clearly explain why prediction generates consciousness",
    color: "from-indigo-500 to-blue-400",
  },
  {
    id: "hot",
    name: "Higher-Order Thought",
    researchers: "David Rosenthal, Axel Cleeremans",
    description: "Consciousness requires thoughts about thoughts; a mental state is conscious if it's the object of a higher-order representation.",
    strength: "Explains why we can be conscious of some things but not others",
    weakness: "Infinite regress problem, empirical evidence mixed",
    color: "from-yellow-500 to-orange-400",
  },
  {
    id: "embodied",
    name: "Embodied Cognition",
    researchers: "Francisco Varela, Evan Thompson, Andy Clark",
    description: "Consciousness arises from the dynamic interaction between brain, body, and environment.",
    strength: "Explains why emotions are embodied, why perception is active",
    weakness: "Vague about what makes embodied processes conscious",
    color: "from-green-500 to-emerald-400",
  },
  {
    id: "emotion",
    name: "Affective Theories",
    researchers: "Antonio Damasio, Mark Solms",
    description: "Consciousness is fundamentally rooted in affect and feeling; emotions are primary, cognition secondary.",
    strength: "Explains why consciousness feels emotional, explains clinical observations",
    weakness: "May overemphasize affect, unclear how affect generates consciousness",
    color: "from-red-500 to-pink-400",
  },
];

export default function FieldMap() {
  const [, navigate] = useLocation();

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
          <h1 className="text-4xl font-bold mb-2">Field Map</h1>
          <p className="text-muted-foreground">Comprehensive overview of consciousness theories</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-3xl mb-12 p-8 rounded-lg border border-border bg-card/50">
          <h2 className="text-2xl font-bold mb-4">What is Consciousness?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Consciousness is the subjective experience of awareness—the felt quality of what it is like to see red, hear music, or feel pain. It encompasses phenomenal consciousness (qualitative experience), access consciousness (information available for reasoning), self-consciousness (awareness of oneself), and wakefulness (alertness).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Multiple theories attempt to explain how consciousness arises from physical brain processes. Here are the major schools of thought shaping modern consciousness research.
          </p>
        </div>

        {/* Theories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {THEORIES.map((theory) => (
            <Card
              key={theory.id}
              className="overflow-hidden border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${theory.color}`} />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {theory.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {theory.researchers}
                </p>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  {theory.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-green-400 uppercase tracking-wide mb-1">
                      Strength
                    </p>
                    <p className="text-sm text-foreground/80">
                      {theory.strength}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-red-400 uppercase tracking-wide mb-1">
                      Criticism
                    </p>
                    <p className="text-sm text-foreground/80">
                      {theory.weakness}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Theories */}
        <div className="p-8 rounded-lg border border-border bg-card/50">
          <h2 className="text-2xl font-bold mb-6">Other Important Theories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-cyan-400 mb-2">Constructed Emotion Theory</h3>
              <p className="text-sm text-muted-foreground">
                Lisa Feldman Barrett proposes that emotions are constructed by the brain using past experience and concepts, not innate responses.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-purple-400 mb-2">Self Model Theory</h3>
              <p className="text-sm text-muted-foreground">
                Thomas Metzinger argues consciousness is the brain's model of itself; the subjective perspective arises from self-representation.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-pink-400 mb-2">Active Inference</h3>
              <p className="text-sm text-muted-foreground">
                Karl Friston's Free Energy Principle suggests consciousness emerges from the brain's attempt to minimize prediction error.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-green-400 mb-2">Neurophenomenology</h3>
              <p className="text-sm text-muted-foreground">
                Francisco Varela advocates integrating first-person phenomenology with third-person neuroscience to understand consciousness.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Button
            variant="outline"
            onClick={() => navigate("/dashboard")}
            className="border-cyan-500/30 hover:bg-cyan-500/10"
          >
            ← Back to Dashboard
          </Button>
          <Button
            onClick={() => navigate("/timeline")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
          >
            Next: Timeline →
          </Button>
        </div>
      </main>
    </div>
  );
}
