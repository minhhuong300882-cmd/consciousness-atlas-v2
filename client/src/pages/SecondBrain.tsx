import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function SecondBrain() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" onClick={() => navigate("/dashboard")} className="mb-4">← Dashboard</Button>
          <h1 className="text-4xl font-bold mb-2">Second Brain</h1>
          <p className="text-muted-foreground">Knowledge organization and learning systems</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="text-center py-20">
          <p className="text-muted-foreground mb-4">Coming soon...</p>
          <Button onClick={() => navigate("/dashboard")}>Back to Dashboard</Button>
        </div>
      </main>
    </div>
  );
}
