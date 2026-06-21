import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const TIMELINE_EVENTS = [
  {
    period: "Ancient & Medieval",
    events: [
      { year: "428-348 BCE", figure: "Plato", event: "Consciousness located in the soul; dualism" },
      { year: "384-322 BCE", figure: "Aristotle", event: "Soul is the form of the body; consciousness as perception" },
      { year: "1596-1650", figure: "Descartes", event: "Cogito, ergo sum; consciousness as defining feature of mind" },
    ],
  },
  {
    period: "18th-19th Century",
    events: [
      { year: "1724-1804", figure: "Kant", event: "Consciousness as transcendental unity of apperception" },
      { year: "1770-1831", figure: "Hegel", event: "Consciousness as dialectical process; self-consciousness through recognition" },
      { year: "1842-1910", figure: "William James", event: "Stream of consciousness; consciousness as continuous flow" },
    ],
  },
  {
    period: "Early 20th Century",
    events: [
      { year: "1856-1939", figure: "Freud", event: "Unconscious mind; consciousness as tip of iceberg" },
      { year: "1920s-1960s", figure: "Behaviorism", event: "Consciousness dismissed as unscientific; focus on observable behavior" },
      { year: "1859-1938", figure: "Husserl", event: "Phenomenology; rigorous study of consciousness through introspection" },
    ],
  },
  {
    period: "Mid-20th Century: The Dark Ages",
    events: [
      { year: "1950s-1980s", figure: "Consciousness Studies", event: "Consciousness considered unscientific; studying it was career suicide" },
      { year: "1950s-1960s", figure: "Cognitive Revolution", event: "Mind reconceived as information processor; consciousness as access" },
      { year: "1960s", figure: "Neuroscience", event: "Brain imaging techniques (EEG, PET, fMRI) begin to emerge" },
    ],
  },
  {
    period: "Late 20th Century: The Revival",
    events: [
      { year: "1988", figure: "Bernard Baars", event: "Global Workspace Theory published" },
      { year: "1990", figure: "Crick & Koch", event: "Neural Correlates of Consciousness (NCCs) framework" },
      { year: "1994", figure: "Antonio Damasio", event: "Descartes' Error; consciousness rooted in emotion and body" },
      { year: "1995", figure: "David Chalmers", event: "The Hard Problem of Consciousness crystallizes central puzzle" },
      { year: "2004", figure: "Giulio Tononi", event: "Integrated Information Theory published" },
    ],
  },
  {
    period: "21st Century: Convergence",
    events: [
      { year: "2010", figure: "Karl Friston", event: "Free Energy Principle / Active Inference gains traction" },
      { year: "2015", figure: "Anil Seth", event: "Predictive Processing framework refined" },
      { year: "2017", figure: "Lisa Feldman Barrett", event: "Constructed Emotion Theory challenges classical views" },
      { year: "2019", figure: "Allen Institute", event: "Adversarial collaboration tests IIT vs GWT" },
      { year: "2020s", figure: "Consciousness Science", event: "Becomes mainstream; AI consciousness questions emerge" },
    ],
  },
];

export default function Timeline() {
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
          <h1 className="text-4xl font-bold mb-2">Historical Timeline</h1>
          <p className="text-muted-foreground">Evolution of consciousness studies from ancient philosophy to modern neuroscience</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Timeline */}
        <div className="space-y-12">
          {TIMELINE_EVENTS.map((period, periodIndex) => (
            <div key={periodIndex} className="relative">
              {/* Period Header */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-2">{period.period}</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500" />
              </div>

              {/* Events */}
              <div className="space-y-4">
                {period.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="relative pl-8 pb-6 border-l-2 border-cyan-500/30 hover:border-cyan-500/60 transition-colors group">
                    {/* Timeline dot */}
                    <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-cyan-500 group-hover:scale-125 transition-transform" />

                    {/* Event content */}
                    <div className="p-4 rounded-lg border border-border bg-card/50 hover:border-cyan-500/50 transition-all group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                        <h3 className="font-bold text-cyan-400">{event.figure}</h3>
                        <span className="text-sm text-muted-foreground">{event.year}</span>
                      </div>
                      <p className="text-foreground/80 leading-relaxed">{event.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Insights */}
        <div className="mt-16 p-8 rounded-lg border border-border bg-card/50">
          <h2 className="text-2xl font-bold mb-6">Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-purple-400 mb-2">The Long Philosophical Tradition</h3>
              <p className="text-muted-foreground text-sm">
                From Plato to Descartes to Kant, philosophers grappled with consciousness for millennia before neuroscience could contribute.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-pink-400 mb-2">The Scientific Dismissal</h3>
              <p className="text-muted-foreground text-sm">
                Behaviorism and early neuroscience excluded consciousness as unscientific, treating it as epiphenomenal for decades.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-green-400 mb-2">The Cognitive Revolution</h3>
              <p className="text-muted-foreground text-sm">
                The mind reconceived as information processor opened the door to studying consciousness scientifically in the 1950s-60s.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-2">The Modern Convergence</h3>
              <p className="text-muted-foreground text-sm">
                Today, multiple theories compete while neuroscience advances rapidly. Consciousness is mainstream science, not fringe philosophy.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Button
            variant="outline"
            onClick={() => navigate("/field-map")}
            className="border-cyan-500/30 hover:bg-cyan-500/10"
          >
            ← Field Map
          </Button>
          <Button
            onClick={() => navigate("/author-atlas")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
          >
            Next: Author Atlas →
          </Button>
        </div>
      </main>
    </div>
  );
}
