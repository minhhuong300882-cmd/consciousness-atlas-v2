export interface LearningModule {
  id: string;
  title: string;
  description: string;
  duration: string; // e.g., "2-3 hours"
  type: "concept" | "theory" | "author" | "book" | "exercise";
  prerequisites?: string[];
}

export interface LearningStage {
  id: string;
  name: string;
  title: string;
  description: string;
  totalDuration: string;
  difficulty: number; // 1-4
  color: string;
  modules: LearningModule[];
  keyOutcomes: string[];
  nextStage?: string;
}

export const LEARNING_PATHS: Record<string, LearningStage> = {
  beginner: {
    id: "beginner",
    name: "Beginner",
    title: "Introduction to Consciousness",
    description: "Start your journey into consciousness studies with foundational concepts and accessible introductions to major theories.",
    totalDuration: "20-30 hours",
    difficulty: 1,
    color: "from-green-500 to-emerald-600",
    nextStage: "intermediate",
    keyOutcomes: [
      "Understand what consciousness is and why it matters",
      "Learn the major theories of consciousness",
      "Discover key researchers and their contributions",
      "Develop a philosophical vocabulary",
      "Explore the hard problem of consciousness",
    ],
    modules: [
      {
        id: "b-concept-consciousness",
        title: "What is Consciousness?",
        description: "Explore the definition, types, and fundamental questions about consciousness.",
        duration: "2-3 hours",
        type: "concept",
      },
      {
        id: "b-concept-qualia",
        title: "Qualia & Subjective Experience",
        description: "Understand what makes experiences feel like something - the 'what it's like' quality.",
        duration: "1-2 hours",
        type: "concept",
      },
      {
        id: "b-theory-gwt",
        title: "Global Workspace Theory (Overview)",
        description: "Learn how consciousness works as a broadcasting system in the brain.",
        duration: "2-3 hours",
        type: "theory",
      },
      {
        id: "b-theory-iit",
        title: "Integrated Information Theory (Overview)",
        description: "Discover how consciousness relates to integrated information in the brain.",
        duration: "2-3 hours",
        type: "theory",
      },
      {
        id: "b-author-chalmers",
        title: "David Chalmers & The Hard Problem",
        description: "Meet the philosopher who framed consciousness studies' central puzzle.",
        duration: "2 hours",
        type: "author",
      },
      {
        id: "b-book-being-you",
        title: "Being You by Anil Seth",
        description: "A modern, accessible introduction to consciousness science.",
        duration: "6-8 hours",
        type: "book",
      },
      {
        id: "b-exercise-reflection",
        title: "Consciousness Reflection Exercise",
        description: "Examine your own consciousness through guided introspection.",
        duration: "1 hour",
        type: "exercise",
      },
      {
        id: "b-concept-self",
        title: "The Self & Identity",
        description: "Explore what makes you 'you' and whether the self is real.",
        duration: "2 hours",
        type: "concept",
      },
    ],
  },

  intermediate: {
    id: "intermediate",
    name: "Intermediate",
    title: "Consciousness Science & Philosophy",
    description: "Deepen your understanding with neuroscience, philosophy, and detailed theory analysis.",
    totalDuration: "40-60 hours",
    difficulty: 2,
    color: "from-blue-500 to-cyan-600",
    nextStage: "advanced",
    keyOutcomes: [
      "Master major consciousness theories and their evidence",
      "Understand neuroscience of consciousness",
      "Engage with philosophical debates",
      "Analyze empirical research and experiments",
      "Develop critical thinking about consciousness claims",
    ],
    modules: [
      {
        id: "i-concept-consciousness",
        title: "Consciousness: Deep Dive",
        description: "Phenomenal, access, and self-consciousness examined in detail.",
        duration: "3-4 hours",
        type: "concept",
      },
      {
        id: "i-concept-perception",
        title: "Perception & Predictive Processing",
        description: "How the brain predicts reality rather than passively receiving it.",
        duration: "3-4 hours",
        type: "concept",
      },
      {
        id: "i-concept-attention",
        title: "Attention & Consciousness",
        description: "The relationship between selective attention and conscious awareness.",
        duration: "2-3 hours",
        type: "concept",
      },
      {
        id: "i-theory-gwt-detailed",
        title: "Global Workspace Theory (Detailed)",
        description: "Dehaene's model of consciousness as a global workspace.",
        duration: "4-5 hours",
        type: "theory",
        prerequisites: ["b-theory-gwt"],
      },
      {
        id: "i-theory-iit-detailed",
        title: "Integrated Information Theory (Detailed)",
        description: "Tononi's mathematical framework for consciousness.",
        duration: "4-5 hours",
        type: "theory",
        prerequisites: ["b-theory-iit"],
      },
      {
        id: "i-theory-hott",
        title: "Higher-Order Thought Theory",
        description: "Consciousness as higher-order representations of mental states.",
        duration: "3-4 hours",
        type: "theory",
      },
      {
        id: "i-theory-predictive",
        title: "Predictive Processing Framework",
        description: "The brain as a prediction machine - Andy Clark's framework.",
        duration: "3-4 hours",
        type: "theory",
      },
      {
        id: "i-author-damasio",
        title: "Antonio Damasio: Emotion & Consciousness",
        description: "The role of emotion and the body in consciousness.",
        duration: "2-3 hours",
        type: "author",
      },
      {
        id: "i-author-seth",
        title: "Anil Seth: Neuroscience of Consciousness",
        description: "Hallucination, prediction, and the construction of reality.",
        duration: "2-3 hours",
        type: "author",
      },
      {
        id: "i-author-dehaene",
        title: "Stanislas Dehaene: Global Workspace",
        description: "The neural correlates of consciousness.",
        duration: "2-3 hours",
        type: "author",
      },
      {
        id: "i-book-conscious-mind",
        title: "The Conscious Mind by David Chalmers",
        description: "The definitive philosophical treatment of consciousness.",
        duration: "10-12 hours",
        type: "book",
      },
      {
        id: "i-book-consciousness-brain",
        title: "Consciousness and the Brain by Stanislas Dehaene",
        description: "Neuroscience research on consciousness.",
        duration: "8-10 hours",
        type: "book",
      },
      {
        id: "i-debate-hard-problem",
        title: "The Hard Problem Debate",
        description: "Engage with the central debate in consciousness studies.",
        duration: "3-4 hours",
        type: "exercise",
      },
    ],
  },

  advanced: {
    id: "advanced",
    name: "Advanced",
    title: "Consciousness Research & Debates",
    description: "Engage with cutting-edge research, complex debates, and specialized topics.",
    totalDuration: "60-100 hours",
    difficulty: 3,
    color: "from-purple-500 to-pink-600",
    nextStage: "researcher",
    keyOutcomes: [
      "Understand current consciousness research frontiers",
      "Critically evaluate competing theories",
      "Engage with unresolved debates",
      "Analyze empirical evidence and limitations",
      "Develop your own theoretical positions",
    ],
    modules: [
      {
        id: "a-concept-binding",
        title: "The Binding Problem",
        description: "How does the brain bind disparate sensory information into unified experience?",
        duration: "3-4 hours",
        type: "concept",
      },
      {
        id: "a-concept-agency",
        title: "Agency & Free Will",
        description: "Do we have free will? The neuroscience and philosophy of agency.",
        duration: "4-5 hours",
        type: "concept",
      },
      {
        id: "a-concept-animal-consciousness",
        title: "Animal Consciousness",
        description: "Extending consciousness studies to non-human animals.",
        duration: "3-4 hours",
        type: "concept",
      },
      {
        id: "a-concept-ai-consciousness",
        title: "Artificial Consciousness",
        description: "Can machines be conscious? Philosophical and technical perspectives.",
        duration: "4-5 hours",
        type: "concept",
      },
      {
        id: "a-theory-embodied",
        title: "Embodied & Enactive Cognition",
        description: "Consciousness emerges from body-world interaction.",
        duration: "4-5 hours",
        type: "theory",
      },
      {
        id: "a-theory-neurophenomenology",
        title: "Neurophenomenology",
        description: "Bridging first-person and third-person perspectives.",
        duration: "4-5 hours",
        type: "theory",
      },
      {
        id: "a-theory-panpsychism",
        title: "Panpsychism & Idealism",
        description: "Alternative metaphysical frameworks for consciousness.",
        duration: "4-5 hours",
        type: "theory",
      },
      {
        id: "a-author-metzinger",
        title: "Thomas Metzinger: The Ego Tunnel",
        description: "Self-models and the illusion of the self.",
        duration: "3-4 hours",
        type: "author",
      },
      {
        id: "a-author-dennett",
        title: "Daniel Dennett: Consciousness Explained",
        description: "A controversial materialist approach to consciousness.",
        duration: "3-4 hours",
        type: "author",
      },
      {
        id: "a-author-solms",
        title: "Mark Solms: Neuroscience & Psychoanalysis",
        description: "Consciousness, dreaming, and the unconscious mind.",
        duration: "3-4 hours",
        type: "author",
      },
      {
        id: "a-book-ego-tunnel",
        title: "The Ego Tunnel by Thomas Metzinger",
        description: "Self-models and the illusion of the unified self.",
        duration: "6-8 hours",
        type: "book",
      },
      {
        id: "a-book-consciousness-explained",
        title: "Consciousness Explained by Daniel Dennett",
        description: "A materialist account of consciousness.",
        duration: "10-12 hours",
        type: "book",
      },
      {
        id: "a-book-hidden-spring",
        title: "The Hidden Spring by Mark Solms",
        description: "Consciousness, dreaming, and the unconscious.",
        duration: "8-10 hours",
        type: "book",
      },
      {
        id: "a-debate-free-will",
        title: "Free Will vs Determinism",
        description: "Neuroscience evidence and philosophical implications.",
        duration: "4-5 hours",
        type: "exercise",
      },
      {
        id: "a-debate-animal-consciousness",
        title: "Animal Consciousness Debate",
        description: "Evidence for consciousness in non-human animals.",
        duration: "3-4 hours",
        type: "exercise",
      },
    ],
  },

  researcher: {
    id: "researcher",
    name: "Researcher",
    title: "Consciousness Research Frontier",
    description: "Engage with cutting-edge research, original papers, and contribute to the field.",
    totalDuration: "100+ hours",
    difficulty: 4,
    color: "from-orange-500 to-red-600",
    keyOutcomes: [
      "Master current consciousness research",
      "Understand research methodologies",
      "Critically evaluate empirical studies",
      "Identify research gaps and opportunities",
      "Develop original research questions",
    ],
    modules: [
      {
        id: "r-concept-neural-correlates",
        title: "Neural Correlates of Consciousness (NCC)",
        description: "What brain activity is necessary and sufficient for consciousness?",
        duration: "5-6 hours",
        type: "concept",
      },
      {
        id: "r-concept-disorders",
        title: "Disorders of Consciousness",
        description: "Coma, vegetative state, minimally conscious state - what they reveal.",
        duration: "4-5 hours",
        type: "concept",
      },
      {
        id: "r-concept-altered-states",
        title: "Altered States of Consciousness",
        description: "Sleep, anesthesia, meditation, psychedelics - mechanisms and insights.",
        duration: "5-6 hours",
        type: "concept",
      },
      {
        id: "r-theory-integrated-information",
        title: "Integrated Information Theory (Advanced)",
        description: "Mathematical formalism and empirical tests of IIT.",
        duration: "6-8 hours",
        type: "theory",
      },
      {
        id: "r-theory-global-workspace",
        title: "Global Workspace Theory (Advanced)",
        description: "Computational models and neural implementation.",
        duration: "6-8 hours",
        type: "theory",
      },
      {
        id: "r-theory-recurrent-processing",
        title: "Recurrent Processing Theory",
        description: "Laminar cortical circuits and consciousness.",
        duration: "5-6 hours",
        type: "theory",
      },
      {
        id: "r-author-tononi",
        title: "Giulio Tononi: IIT Pioneer",
        description: "Integrated Information Theory and phi measurement.",
        duration: "4-5 hours",
        type: "author",
      },
      {
        id: "r-author-koch",
        title: "Christof Koch: NCC Research",
        description: "Neural correlates of consciousness and visual awareness.",
        duration: "4-5 hours",
        type: "author",
      },
      {
        id: "r-author-crick",
        title: "Francis Crick: The Astonishing Hypothesis",
        description: "Consciousness as a scientific problem.",
        duration: "3-4 hours",
        type: "author",
      },
      {
        id: "r-book-search-consciousness",
        title: "The Search for Consciousness by Christof Koch",
        description: "Neural basis of consciousness - research and philosophy.",
        duration: "10-12 hours",
        type: "book",
      },
      {
        id: "r-book-astonishing-hypothesis",
        title: "The Astonishing Hypothesis by Francis Crick",
        description: "Consciousness as a scientific problem.",
        duration: "8-10 hours",
        type: "book",
      },
      {
        id: "r-book-phi",
        title: "Phi: A Voyage from the Brain to the Soul by Giulio Tononi",
        description: "IIT explained through dialogue.",
        duration: "8-10 hours",
        type: "book",
      },
      {
        id: "r-research-ncc",
        title: "Research Seminar: Neural Correlates",
        description: "Deep dive into NCC research methodologies.",
        duration: "6-8 hours",
        type: "exercise",
      },
      {
        id: "r-research-methods",
        title: "Research Methods in Consciousness Science",
        description: "fMRI, EEG, intracranial recordings, computational modeling.",
        duration: "8-10 hours",
        type: "exercise",
      },
      {
        id: "r-research-frontier",
        title: "Current Research Frontiers",
        description: "Emerging questions and methodologies.",
        duration: "6-8 hours",
        type: "exercise",
      },
    ],
  },
};

export const LEARNING_PROGRESSION = [
  "beginner",
  "intermediate",
  "advanced",
  "researcher",
];
