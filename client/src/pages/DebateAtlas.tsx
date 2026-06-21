import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getDebateLinks } from "@/lib/atlasLinks";
import { CrossLinkSection } from "@/components/CrossLinkSection";

const DEBATES = [
  {
    id: "hard-problem",
    title: "The Hard Problem of Consciousness",
    question: "Why do physical processes give rise to subjective experience?",
    description: "David Chalmers distinguished between the 'easy problems' (explaining behavior and function) and the 'hard problem' (explaining why there is subjective experience at all).",
    positions: [
      {
        name: "Physicalism",
        proponents: ["Daniel Dennett", "Keith Frankish", "Keith Frankish"],
        argument: "Consciousness will eventually be fully explained by physics and neuroscience. The hard problem is a pseudo-problem arising from confused thinking.",
        strength: "Maintains scientific unity; consciousness is not mysterious in principle",
        weakness: "Struggles to explain why physical processes generate subjective experience",
      },
      {
        name: "Dualism",
        proponents: ["David Chalmers", "Thomas Nagel"],
        argument: "Consciousness involves non-physical properties that cannot be reduced to physics. Mental and physical are fundamentally different.",
        strength: "Takes subjective experience seriously; acknowledges the explanatory gap",
        weakness: "Raises the interaction problem; how do physical and non-physical interact?",
      },
      {
        name: "Panpsychism",
        proponents: ["Philip Goff", "Galen Strawson", "Luke Roelofs"],
        argument: "Consciousness is a fundamental feature of reality, present in some form in all matter. Complex consciousness emerges from simpler forms.",
        strength: "Avoids the hard problem by making consciousness fundamental",
        weakness: "Faces the combination problem; how do simple consciousnesses combine?",
      },
    ],
    implications: "This debate shapes how we understand consciousness research. If physicalism is true, neuroscience will eventually explain everything. If dualism is true, we need new frameworks. If panpsychism is true, consciousness is ubiquitous.",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "unity-binding",
    title: "The Binding Problem & Unity of Consciousness",
    question: "How does the brain bind disparate sensory information into unified experience?",
    description: "Our brain processes visual, auditory, tactile, and other information in separate regions, yet we experience a unified world. How does this binding occur?",
    positions: [
      {
        name: "Temporal Binding",
        proponents: ["Wolf Singer", "Christof von der Malsburg"],
        argument: "Neurons representing different features fire in synchrony, binding information through temporal correlation.",
        strength: "Has neural evidence; explains feature binding",
        weakness: "Doesn't fully explain subjective unity; synchrony alone may not be sufficient",
      },
      {
        name: "Global Workspace",
        proponents: ["Bernard Baars", "Stanislas Dehaene"],
        argument: "Information is bound by entering a global workspace where it becomes available to multiple cognitive systems.",
        strength: "Explains attention and consciousness; has neural correlates",
        weakness: "Doesn't explain how workspace itself is unified",
      },
      {
        name: "Integrated Information",
        proponents: ["Giulio Tononi"],
        argument: "Consciousness arises from integrated information; binding occurs through high integration within a system.",
        strength: "Mathematically precise; explains unity through integration",
        weakness: "Difficult to test empirically; counterintuitive implications",
      },
    ],
    implications: "Understanding binding is crucial for consciousness science. It reveals how the brain creates unified experience from distributed processing.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "free-will",
    title: "Free Will vs Determinism",
    question: "Do we have free will, or is everything determined by prior causes?",
    description: "Neuroscience reveals that brain activity precedes conscious decisions (Libet experiments). Does this eliminate free will?",
    positions: [
      {
        name: "Hard Determinism",
        proponents: ["Derk Pereboom", "Galen Strawson"],
        argument: "Free will is incompatible with determinism. Since determinism is true, free will doesn't exist. Conscious will is an illusion.",
        strength: "Takes physics seriously; consistent with determinism",
        weakness: "Implies moral responsibility is illusory; counterintuitive",
      },
      {
        name: "Libertarianism",
        proponents: ["Alfred Mele", "Robert Kane"],
        argument: "Free will requires indeterminism. Consciousness enables genuine choice that isn't determined by prior causes.",
        strength: "Preserves moral responsibility; matches intuition",
        weakness: "Struggles with quantum indeterminacy; unclear how indeterminism enables freedom",
      },
      {
        name: "Compatibilism",
        proponents: ["Daniel Dennett", "Eddy Nahmias"],
        argument: "Free will is compatible with determinism. What matters is acting on one's desires without external coercion, not whether desires are determined.",
        strength: "Reconciles physics with responsibility; widely accepted",
        weakness: "May redefine 'free will' rather than solve the problem",
      },
    ],
    implications: "This debate has profound implications for morality, law, and personal responsibility. It shapes how we understand consciousness and agency.",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "animal-consciousness",
    title: "Animal Consciousness & Sentience",
    question: "Which animals are conscious? How do we measure animal consciousness?",
    description: "Many animals show signs of consciousness, but we lack direct access to their subjective experience. How can we determine what animals are conscious?",
    positions: [
      {
        name: "Anthropocentrism",
        proponents: ["René Descartes", "Some cognitive scientists"],
        argument: "Only humans (or perhaps only language-using humans) are truly conscious. Animals are biological machines without subjective experience.",
        strength: "Avoids overattribution of consciousness",
        weakness: "Ignores evidence of animal cognition and emotion; seems arbitrary",
      },
      {
        name: "Continuity View",
        proponents: ["Antonio Damasio", "Jaak Panksepp"],
        argument: "Consciousness exists on a continuum. Many animals have consciousness, though perhaps simpler than humans. Emotions and basic awareness are widespread.",
        strength: "Consistent with evolution; supported by neuroscience",
        weakness: "Difficult to determine where consciousness begins",
      },
      {
        name: "Panpsychism Extended",
        proponents: ["Philip Goff", "Some philosophers"],
        argument: "Consciousness is fundamental and widespread. Even simple organisms may have primitive forms of consciousness.",
        strength: "Consistent with panpsychism; avoids arbitrary boundaries",
        weakness: "Seems to overattribute consciousness; difficult to test",
      },
    ],
    implications: "This debate has ethical implications for animal treatment. If animals are conscious, we have moral obligations to them.",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "ai-consciousness",
    title: "Artificial Consciousness & Machine Sentience",
    question: "Can artificial systems be conscious? What would prove AI consciousness?",
    description: "As AI systems become more sophisticated, questions arise: Could AI become conscious? Would we recognize it if it did?",
    positions: [
      {
        name: "Functionalism",
        proponents: ["Ned Block", "David Chalmers"],
        argument: "If an AI system implements the right functional organization, it could be conscious. Consciousness depends on information processing, not substrate.",
        strength: "Opens possibility of AI consciousness; substrate-independent",
        weakness: "Doesn't explain why any functional organization generates consciousness",
      },
      {
        name: "Biological Naturalism",
        proponents: ["John Searle"],
        argument: "Consciousness requires biological processes. AI systems, no matter how sophisticated, cannot be conscious because they lack the right biological substrate.",
        strength: "Explains why current AI seems non-conscious",
        weakness: "Seems to privilege biology arbitrarily; hard to test",
      },
      {
        name: "Integrated Information Theory",
        proponents: ["Giulio Tononi"],
        argument: "Consciousness depends on integrated information. Current AI systems have low integration; future AI might develop consciousness if it achieves sufficient integration.",
        strength: "Provides testable criterion; substrate-independent",
        weakness: "Counterintuitive implications; difficult to measure integration",
      },
    ],
    implications: "This debate will become increasingly important as AI advances. It raises ethical questions about AI rights and responsibilities.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    id: "self-illusion",
    title: "Is the Self Real or Illusory?",
    question: "Does a unified self exist, or is it a useful fiction created by the brain?",
    description: "Neuroscience and philosophy suggest the self might be an illusion. But if it's an illusion, who is being fooled?",
    positions: [
      {
        name: "Self Realism",
        proponents: ["Antonio Damasio", "Derek Parfit"],
        argument: "The self is real, though perhaps not as unified as it seems. It emerges from brain processes and constitutes a genuine subject of experience.",
        strength: "Matches intuition; explains why we feel like unified selves",
        weakness: "Struggles to explain the self's unity and continuity",
      },
      {
        name: "Self Illusionism",
        proponents: ["Thomas Metzinger", "Daniel Dennett"],
        argument: "The self is an illusion—a model the brain creates. There is no unified subject; only processes that create the appearance of a self.",
        strength: "Consistent with neuroscience; explains self's malleability",
        weakness: "Seems self-refuting; if there's no self, who has the illusion?",
      },
      {
        name: "Buddhist View",
        proponents: ["Buddhist philosophers", "Some neuroscientists"],
        argument: "The self is neither real nor illusory but empty of inherent existence. It's a conventional designation without ultimate reality.",
        strength: "Sophisticated middle path; consistent with meditation research",
        weakness: "Difficult to translate into Western philosophical terms",
      },
    ],
    implications: "This debate affects how we understand identity, responsibility, and the nature of consciousness itself.",
    color: "from-violet-500 to-purple-600",
  },
];

export default function DebateAtlas() {
  const [, navigate] = useLocation();
  const [expandedDebate, setExpandedDebate] = useState<string | null>("hard-problem");
  const [selectedDebate, setSelectedDebate] = useState<string | null>(null);
  const [showCrossLinks, setShowCrossLinks] = useState(false);

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
          <h1 className="text-4xl font-bold mb-2">Debate Atlas</h1>
          <p className="text-muted-foreground">
            Major philosophical and scientific debates in consciousness research
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-6">
          {DEBATES.map((debate) => (
            <Card
              key={debate.id}
              className="border-border overflow-hidden hover:border-cyan-500/50 transition-all"
            >
              {/* Debate Header */}
              <button
                onClick={() => {
                  setExpandedDebate(expandedDebate === debate.id ? null : debate.id);
                  setSelectedDebate(debate.id);
                }}
                className={`w-full p-6 text-left hover:bg-background/50 transition-colors flex items-start justify-between`}
              >
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${debate.color} bg-clip-text text-transparent`}>
                    {debate.title}
                  </h3>
                  <p className="text-foreground/80 italic">"{debate.question}"</p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {expandedDebate === debate.id ? (
                    <ChevronUp className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
              </button>

              {/* Debate Content */}
              {expandedDebate === debate.id && (
                <div className="border-t border-border p-6 space-y-6">
                  {/* Description */}
                  <div>
                    <p className="text-foreground/80 leading-relaxed">
                      {debate.description}
                    </p>
                  </div>

                  {/* Positions */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg">Competing Positions</h4>
                    {debate.positions.map((position, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg border border-border bg-background/50 hover:border-cyan-500/50 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-bold text-cyan-400">{position.name}</h5>
                          <span className="text-xs text-muted-foreground">
                            {position.proponents.length} proponents
                          </span>
                        </div>

                        <p className="text-sm text-foreground/70 mb-3">
                          <span className="font-semibold">Proponents:</span> {position.proponents.join(", ")}
                        </p>

                        <p className="text-foreground/80 mb-3 leading-relaxed">
                          {position.argument}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div className="p-2 rounded bg-green-500/10 border border-green-500/30">
                            <p className="font-semibold text-green-400 mb-1">Strength</p>
                            <p className="text-foreground/70">{position.strength}</p>
                          </div>
                          <div className="p-2 rounded bg-red-500/10 border border-red-500/30">
                            <p className="font-semibold text-red-400 mb-1">Weakness</p>
                            <p className="text-foreground/70">{position.weakness}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Implications */}
                  <div className="p-4 rounded-lg border-l-4 border-cyan-500 bg-cyan-500/5">
                    <h4 className="font-bold text-cyan-400 mb-2">Implications</h4>
                    <p className="text-foreground/80">{debate.implications}</p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Cross-Links Section */}
        {selectedDebate && (
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
              {showCrossLinks && <CrossLinkSection groups={getDebateLinks(selectedDebate, DEBATES)} />}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-16 flex justify-between pt-8 border-t border-border">
          <Button
            variant="outline"
            onClick={() => navigate("/concept-atlas")}
            className="border-cyan-500/30 hover:bg-cyan-500/10"
          >
            ← Concepts
          </Button>
          <Button
            onClick={() => navigate("/book-atlas")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
          >
            Next: Books →
          </Button>
        </div>
      </main>
    </div>
  );
}
