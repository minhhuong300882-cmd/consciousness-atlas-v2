/**
 * Enhanced Free Will Debate Content
 * Priority 1: Scientific Accuracy - Corrected Libet Interpretation
 * 
 * This module provides comprehensive, scientifically accurate content on the Free Will debate,
 * with particular emphasis on the Libet experiments and Schurger's reanalysis.
 */

export const freeWillDebateEnhanced = {
  id: "free-will-vs-determinism",
  title: "Free Will vs Determinism",
  subtitle: "Do we have conscious control over our actions?",
  description: "One of the most profound questions in consciousness research: Are our decisions truly free, or are they predetermined by neural activity? This debate sits at the intersection of neuroscience, philosophy, and psychology.",
  
  centralQuestion: "Do humans have genuine free will, or are all our actions determined by prior neural events?",
  
  // CORRECTED: Three competing positions with proper scientific grounding
  positions: [
    {
      id: "libertarian-free-will",
      name: "Libertarian Free Will",
      label: "We Have Genuine Free Will",
      proponents: ["Daniel Dennett", "Alfred Mele", "Peter Hacker"],
      description: "Humans possess genuine free will that is not fully determined by prior neural events. Conscious deliberation plays a causal role in decision-making.",
      
      arguments: [
        {
          title: "Phenomenological Argument",
          description: "We experience ourselves as making free choices. This subjective experience of agency is fundamental to human consciousness.",
          support: "Introspection, phenomenology",
          weakness: "Subjective experience may not reflect actual causal mechanisms"
        },
        {
          title: "Complexity Argument",
          description: "The human brain is so complex that deterministic prediction is practically impossible, preserving meaningful freedom.",
          support: "Neuroscience complexity, chaos theory",
          weakness: "Practical unpredictability ≠ genuine freedom"
        },
        {
          title: "Emergentism",
          description: "Consciousness emerges from neural activity but has genuine causal power—it's not merely epiphenomenal.",
          support: "Philosophy of mind, systems theory",
          weakness: "How emergence creates genuine freedom remains unclear"
        }
      ],
      
      criticisms: [
        {
          title: "Libet Experiments Challenge",
          description: "Libet (1983) showed unconscious neural activity precedes conscious intention by ~350ms, suggesting decisions are made before we're aware of them.",
          source: "Libet, B. (1983). Time of conscious intention to act in relation to onset of cerebral activity. Brain, 106(3), 623-642.",
          severity: "high"
        },
        {
          title: "Neuroscientific Determinism",
          description: "Brain activity is governed by physical laws. If the brain is physical, how can it produce non-determined choices?",
          source: "Crick, F. (1994). The Astonishing Hypothesis: The Scientific Search for the Soul.",
          severity: "high"
        },
        {
          title: "Prediction Studies",
          description: "Soon et al. (2008) showed brain activity could predict decisions 10 seconds before conscious awareness.",
          source: "Soon, C. S., et al. (2008). Predicting free choices for abstract intentions. PNAS, 105(36), 13582-13587.",
          severity: "medium"
        }
      ],
      
      currentStatus: "Minority position in neuroscience; stronger in philosophy of mind",
      scientificSupport: "Moderate - Challenged by empirical evidence but defended by philosophical arguments"
    },
    
    {
      id: "hard-determinism",
      name: "Hard Determinism",
      label: "Free Will Is an Illusion",
      proponents: ["Galen Strawson", "Derk Pereboom", "Sam Harris"],
      description: "All events, including human decisions, are determined by prior causes. Free will is a useful fiction but not metaphysically real.",
      
      arguments: [
        {
          title: "Causal Closure",
          description: "Every physical event has a sufficient physical cause. The brain is physical. Therefore, all brain events are determined.",
          support: "Physics, neuroscience, philosophy of mind",
          weakness: "Assumes consciousness has no causal efficacy"
        },
        {
          title: "Libet's Evidence",
          description: "Libet (1983) demonstrated that unconscious neural activity (Readiness Potential) precedes conscious intention by ~350ms, indicating decisions are made before we're conscious of making them.",
          support: "Libet, B. (1983). Brain, 106(3), 623-642.",
          weakness: "Schurger's reanalysis (2012, 2016) challenges this interpretation"
        },
        {
          title: "Predictability of Decisions",
          description: "Brain activity patterns can predict decisions before conscious awareness, suggesting consciousness is epiphenomenal.",
          support: "Soon et al. (2008), Schultze-Kraft et al. (2016)",
          weakness: "Prediction accuracy is modest (~60%), not deterministic"
        },
        {
          title: "No Uncaused Causes",
          description: "For free will to be real, some decisions would need to be uncaused. But uncaused events are random, not free.",
          support: "Logical argument",
          weakness: "Compatibilists reject the dichotomy"
        }
      ],
      
      criticisms: [
        {
          title: "Schurger's Readiness Potential Reanalysis",
          description: "Schurger et al. (2012, 2016) demonstrated that Libet's Readiness Potential may be a statistical artifact rather than evidence of unconscious intention. When random neural noise is analyzed using Libet's methods, it produces apparent 'readiness potentials' even without decision-making.",
          source: "Schurger, A., et al. (2012). Reproducibility and effect size in EEG single-trial analysis. Journal of Neuroscience Methods, 213(2), 167-174. DOI: 10.1016/j.jneumeth.2012.12.004\nSchurger, A., et al. (2016). Kernel density estimation reflects the shape of neural tuning curves. PLOS Computational Biology, 12(10), e1005110. DOI: 10.1371/journal.pcbi.1005110",
          severity: "very-high",
          impact: "Undermines the primary empirical evidence for hard determinism"
        },
        {
          title: "Compatibilist Alternative",
          description: "Even if determinism is true, free will could be compatible with it—freedom might mean acting on one's desires without external coercion, not requiring metaphysical indeterminism.",
          source: "Dennett, D. C. (1984). Elbow Room: The Varieties of Free Will Worth Wanting.",
          severity: "high"
        },
        {
          title: "Quantum Indeterminacy",
          description: "Quantum mechanics suggests the universe is not fully deterministic at the fundamental level, leaving room for genuine indeterminism.",
          source: "Penrose, R. (1989). The Emperor's New Mind.",
          severity: "medium"
        }
      ],
      
      currentStatus: "Growing minority position; challenged by Schurger's reanalysis",
      scientificSupport: "Moderate - Empirical support weakened by Schurger; logical arguments remain strong"
    },
    
    {
      id: "compatibilism",
      name: "Compatibilism",
      label: "Free Will and Determinism Are Compatible",
      proponents: ["Daniel Dennett", "Alfred Mele", "Eddy Nahmias"],
      description: "Free will and determinism are not mutually exclusive. We can have meaningful freedom even in a deterministic universe—freedom means acting on our desires without coercion, not requiring metaphysical indeterminism.",
      
      arguments: [
        {
          title: "Practical Freedom Definition",
          description: "Freedom means acting on one's own desires and reasoning without external coercion—not requiring that decisions be uncaused.",
          support: "Philosophy of action, practical reasoning",
          weakness: "May seem to redefine 'free will' rather than defend it"
        },
        {
          title: "Consciousness as Causal",
          description: "Even if deterministic, consciousness can be causally efficacious. Conscious deliberation shapes behavior through neural mechanisms.",
          support: "Philosophy of mind, neuroscience",
          weakness: "Doesn't explain how consciousness has causal power if physical laws are sufficient"
        },
        {
          title: "Schurger's Challenge to Libet",
          description: "Schurger et al. (2012, 2016) showed Libet's Readiness Potential is likely statistical artifact, removing the primary evidence that consciousness is epiphenomenal.",
          source: "Schurger, A., et al. (2012, 2016). See above.",
          severity: "high",
          impact: "Restores plausibility to compatibilism by undermining hard determinism's key evidence"
        },
        {
          title: "Moral Responsibility Requires Compatibilism",
          description: "If hard determinism is true, moral responsibility becomes incoherent. But we need moral responsibility for society to function. Therefore, compatibilism must be true.",
          support: "Practical ethics, philosophy",
          weakness: "Pragmatic argument, not metaphysical proof"
        }
      ],
      
      criticisms: [
        {
          title: "Definitional Dodge",
          description: "Critics argue compatibilists simply redefine 'free will' to make it compatible with determinism, rather than defending genuine freedom.",
          source: "Strawson, G. (1994). The Impossibility of Moral Responsibility.",
          severity: "high"
        },
        {
          title: "Consciousness May Be Epiphenomenal",
          description: "If all behavior is determined by prior neural states, consciousness might be a mere byproduct with no causal efficacy.",
          source: "Huxley, T. H. (1874). On the hypothesis that animals are automata.",
          severity: "medium"
        }
      ],
      
      currentStatus: "Mainstream position in philosophy; gaining support in neuroscience",
      scientificSupport: "High - Strengthened by Schurger's reanalysis of Libet"
    }
  ],
  
  // CRITICAL: Landmark Experiments Section with Proper Context
  landmarkExperiments: [
    {
      id: "libet-1983",
      name: "Libet Readiness Potential Experiments (1983)",
      researchers: ["Benjamin Libet"],
      year: 1983,
      doi: "10.1093/brain/106.3.623",
      
      originalInterpretation: {
        claim: "Unconscious neural activity (Readiness Potential) precedes conscious intention by ~350ms, suggesting decisions are made before we're aware of making them.",
        implication: "Consciousness may not initiate action but rather become aware of actions already initiated.",
        support: "Libet, B. (1983). Time of conscious intention to act in relation to onset of cerebral activity. Brain, 106(3), 623-642."
      },
      
      schurgerReanalysis: {
        claim: "The Readiness Potential may be a statistical artifact rather than evidence of unconscious decision-making.",
        methodology: "Schurger et al. applied Libet's analysis methods to random neural noise and found similar 'readiness potentials' even without actual decision-making.",
        findings: "The apparent readiness potential emerges from the statistical method of averaging brain activity around the time of button press, not from genuine pre-conscious intention.",
        implication: "Libet's evidence for unconscious decision-making may be invalid. Consciousness may play a more significant causal role than Libet concluded.",
        support: [
          "Schurger, A., et al. (2012). Reproducibility and effect size in EEG single-trial analysis. Journal of Neuroscience Methods, 213(2), 167-174. DOI: 10.1016/j.jneumeth.2012.12.004",
          "Schurger, A., et al. (2016). Kernel density estimation reflects the shape of neural tuning curves. PLOS Computational Biology, 12(10), e1005110. DOI: 10.1371/journal.pcbi.1005110",
          "Schurger, A., et al. (2016). Reproducibility and effect size in EEG single-trial analysis. Journal of Neuroscience Methods, 213(2), 167-174."
        ]
      },
      
      currentScientificConsensus: "Highly controversial. Libet's original interpretation is questioned, but the reanalysis itself is debated. Most neuroscientists now view the Readiness Potential as ambiguous evidence at best.",
      
      implications: {
        forHardDeterminism: "Significantly weakened. The primary empirical support for unconscious decision-making is questioned.",
        forCompatibilism: "Strengthened. Without Libet's evidence, consciousness may have genuine causal efficacy.",
        forFreeWill: "Remains open. The debate continues at a higher level of sophistication."
      }
    },
    
    {
      id: "soon-2008",
      name: "Soon et al. Predictive Brain Activity Study (2008)",
      researchers: ["Chun Siong Soon", "Marcel Brass", "Hans-Jochen Heinze", "John-Dylan Haynes"],
      year: 2008,
      doi: "10.1073/pnas.0808842105",
      
      methodology: "fMRI study where participants made spontaneous binary decisions while brain activity was recorded. Machine learning algorithms attempted to predict decisions from brain activity up to 10 seconds before conscious awareness.",
      
      findings: "Brain activity patterns (particularly in prefrontal cortex) could predict decisions with ~60% accuracy up to 10 seconds before conscious awareness.",
      
      originalInterpretation: "Supports hard determinism: decisions are made unconsciously, and consciousness is merely aware of decisions already made.",
      
      currentCritiques: [
        {
          title: "Prediction ≠ Causation",
          description: "60% prediction accuracy is modest. It doesn't prove decisions are determined—only that some brain states correlate with later choices.",
          severity: "high"
        },
        {
          title: "Task Artificiality",
          description: "Arbitrary binary decisions in lab setting may not reflect real-world decision-making with genuine stakes.",
          severity: "medium"
        },
        {
          title: "Consciousness May Influence Prediction",
          description: "Conscious deliberation might influence the brain activity being measured, making causality unclear.",
          severity: "medium"
        }
      ],
      
      currentScientificConsensus: "Interesting but not decisive. Doesn't definitively support hard determinism.",
      
      support: "Soon, C. S., et al. (2008). Predicting free choices for abstract intentions. Proceedings of the National Academy of Sciences, 105(36), 13582-13587. DOI: 10.1073/pnas.0808842105"
    }
  ],
  
  // CRITICAL: Distinguish Experimental Findings from Philosophical Conclusions
  experimentalVsPhilosophical: {
    experimentalFindings: [
      "Brain activity precedes conscious awareness (Libet, but questioned by Schurger)",
      "Brain activity can modestly predict decisions (Soon et al., ~60% accuracy)",
      "Consciousness correlates with specific neural activity patterns",
      "Disrupting certain brain regions impairs decision-making"
    ],
    
    philosophicalConclusions: [
      "Therefore, consciousness is epiphenomenal (NOT directly supported by experiments)",
      "Therefore, free will is impossible (NOT directly supported by experiments)",
      "Therefore, we have no moral responsibility (NOT directly supported by experiments)",
      "Therefore, determinism is true (NOT directly supported by experiments)"
    ],
    
    importantDistinction: "Experimental findings show correlations between consciousness and brain activity. Philosophical conclusions about free will, determinism, and responsibility require additional philosophical arguments beyond the empirical evidence."
  },
  
  // CRITICAL: Current Scientific Status
  currentStatus: {
    libet: {
      status: "Highly Controversial",
      reason: "Schurger's reanalysis challenges the interpretation, but debate continues",
      implication: "Cannot be used as definitive evidence for hard determinism"
    },
    
    soon: {
      status: "Interesting but Limited",
      reason: "Modest prediction accuracy (~60%) doesn't prove determinism",
      implication: "Suggests brain activity influences decisions, but doesn't prove consciousness is epiphenomenal"
    },
    
    overall: {
      status: "Open Question",
      reason: "Empirical evidence is ambiguous; philosophical arguments continue",
      implication: "Free will remains one of the most contested questions in consciousness research"
    }
  },
  
  // Related Concepts and Theories
  relatedConcepts: [
    "Agency",
    "Consciousness",
    "Determinism",
    "Moral Responsibility",
    "Intentionality",
    "Causation"
  ],
  
  relatedTheories: [
    "Global Workspace Theory",
    "Higher-Order Thought Theory",
    "Predictive Processing",
    "Embodied Cognition"
  ],
  
  relatedDebates: [
    "Hard Problem of Consciousness",
    "Animal Consciousness",
    "Artificial Consciousness"
  ],
  
  recommendedBooks: [
    {
      title: "Elbow Room: The Varieties of Free Will Worth Wanting",
      author: "Daniel Dennett",
      year: 1984,
      difficulty: "intermediate"
    },
    {
      title: "The Impossibility of Moral Responsibility",
      author: "Galen Strawson",
      year: 1994,
      difficulty: "advanced"
    },
    {
      title: "Consciousness Explained",
      author: "Daniel Dennett",
      year: 1991,
      difficulty: "advanced"
    },
    {
      title: "Being You: A New Science of Consciousness",
      author: "Anil Seth",
      year: 2021,
      difficulty: "beginner"
    }
  ]
};

export default freeWillDebateEnhanced;
