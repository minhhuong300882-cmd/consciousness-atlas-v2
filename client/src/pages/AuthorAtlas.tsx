import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getAuthorLinks } from "@/lib/atlasLinks";
import { CrossLinkSection } from "@/components/CrossLinkSection";

const AUTHORS = [
  {
    name: "Antonio Damasio",
    birth: "1944-",
    field: "Neuroscience",
    theory: "Affective Consciousness",
    bio: "Portuguese neuroscientist; Professor at USC; pioneer in emotion and consciousness",
    keyInsight: "Consciousness emerges from homeostatic regulation and interoceptive feeling",
    works: ["Descartes' Error (1994)", "The Feeling of What Happens (2000)", "Self Comes to Mind (2010)"],
    color: "from-red-500 to-pink-400",
  },
  {
    name: "Anil Seth",
    birth: "1977-",
    field: "Neuroscience",
    theory: "Predictive Processing",
    bio: "British neuroscientist; Director of Sackler Centre for Consciousness Science at Sussex",
    keyInsight: "Consciousness as controlled hallucination; the brain predicts what it perceives",
    works: ["Consciousness: The last 50 years (2018)", "Being You (2021)"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Thomas Metzinger",
    birth: "1958-",
    field: "Philosophy & Neuroscience",
    theory: "Self Model Theory",
    bio: "German philosopher and neuroscientist; Johannes Gutenberg University",
    keyInsight: "The self is a virtual model created by the brain",
    works: ["Being No One (2003)", "The Ego Tunnel (2009)"],
    color: "from-purple-500 to-pink-400",
  },
  {
    name: "Giulio Tononi",
    birth: "1956-",
    field: "Neuroscience",
    theory: "Integrated Information Theory",
    bio: "Italian neuroscientist; University of Wisconsin-Madison",
    keyInsight: "Consciousness is the intrinsic cause-effect structure of a system",
    works: ["Phi: A Voyage from the Brain to the Soul (2012)", "IIT Papers (2004-present)"],
    color: "from-green-500 to-emerald-400",
  },
  {
    name: "Stanislas Dehaene",
    birth: "1965-",
    field: "Neuroscience",
    theory: "Global Workspace Theory",
    bio: "French cognitive neuroscientist; Collège de France professor",
    keyInsight: "Consciousness is a workspace where information competes for access",
    works: ["Consciousness and the Brain (2014)", "Reading in the Brain (2009)"],
    color: "from-indigo-500 to-blue-400",
  },
  {
    name: "Lisa Feldman Barrett",
    birth: "1966-",
    field: "Psychology & Neuroscience",
    theory: "Constructed Emotion",
    bio: "American psychologist; University Distinguished Professor at Northeastern",
    keyInsight: "Emotions are constructed, not innate; language shapes emotional experience",
    works: ["How Emotions Are Made (2017)", "Seven and a Half Lessons About the Brain (2020)"],
    color: "from-yellow-500 to-orange-400",
  },
];

export default function AuthorAtlas() {
  const [, navigate] = useLocation();
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
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
          <h1 className="text-4xl font-bold mb-2">Author Atlas</h1>
          <p className="text-muted-foreground">Key researchers shaping consciousness studies</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AUTHORS.map((author) => (
            <Card
              key={author.name}
              className="overflow-hidden border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              {/* Header with gradient */}
              <div className={`h-3 bg-gradient-to-r ${author.color}`} />
              
              <button
                onClick={() => setSelectedAuthor(author.name)}
                className="w-full text-left hover:opacity-80 transition-opacity"
              >
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                    {author.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{author.birth} • {author.field}</p>
                </div>

                <div className="mb-4 p-3 rounded-lg bg-background/50 border border-border">
                  <p className="text-sm font-semibold text-cyan-400 mb-1">Theory</p>
                  <p className="text-sm text-foreground">{author.theory}</p>
                </div>

                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  {author.bio}
                </p>

                <div className="mb-4 p-3 rounded-lg bg-background/50 border border-border">
                  <p className="text-xs font-semibold text-green-400 uppercase tracking-wide mb-2">Key Insight</p>
                  <p className="text-sm text-foreground/80 italic">
                    {author.keyInsight}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Major Works</p>
                  <ul className="space-y-1">
                    {author.works.map((work, idx) => (
                      <li key={idx} className="text-sm text-foreground/70 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </button>
            </Card>
          ))}
        </div>

        {/* Cross-Links Section */}
        {selectedAuthor && (
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
              {showCrossLinks && selectedAuthor && <CrossLinkSection groups={getAuthorLinks(selectedAuthor)} />}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Button
            variant="outline"
            onClick={() => navigate("/timeline")}
            className="border-cyan-500/30 hover:bg-cyan-500/10"
          >
            ← Timeline
          </Button>
          <Button
            onClick={() => navigate("/concept-atlas")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
          >
            Next: Concepts →
          </Button>
        </div>
      </main>
    </div>
  );
}
