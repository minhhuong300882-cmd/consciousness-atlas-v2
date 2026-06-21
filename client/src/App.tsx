import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import TheoryAtlas from "./pages/TheoryAtlas";
import Timeline from "./pages/Timeline";
import AuthorAtlas from "./pages/AuthorAtlas";
import ConceptAtlas from "./pages/ConceptAtlas";
import DebateAtlas from "./pages/DebateAtlas";
import BookAtlas from "./pages/BookAtlas";
import LearningPath from "./pages/LearningPath";
import SecondBrain from "./pages/SecondBrain";
import TheoryComparison from "./pages/TheoryComparison";
import ScientificConsensus from "./pages/ScientificConsensus";
import EvidenceAtlas from "./pages/EvidenceAtlas";
import EvidenceDashboard from "./pages/EvidenceDashboard";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/field-map"} component={TheoryAtlas} />
      <Route path={"/timeline"} component={Timeline} />
      <Route path={"/author-atlas"} component={AuthorAtlas} />
      <Route path={"/concept-atlas"} component={ConceptAtlas} />
      <Route path={"/debate-atlas"} component={DebateAtlas} />
      <Route path={"/book-atlas"} component={BookAtlas} />
      <Route path={"/learning-path"} component={LearningPath} />
      <Route path={"/second-brain"} component={SecondBrain} />
      <Route path={"/theory-comparison"} component={TheoryComparison} />
      <Route path={"/scientific-consensus"} component={ScientificConsensus} />
      <Route path={"/evidence-atlas"} component={EvidenceAtlas} />
      <Route path={"/evidence-dashboard"} component={EvidenceDashboard} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
