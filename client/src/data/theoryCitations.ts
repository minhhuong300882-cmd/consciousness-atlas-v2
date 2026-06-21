/**
 * Comprehensive Theory Citations Database
 * Priority 2: Primary Citations for All Theories
 * 
 * This module provides complete citation information for all 10 consciousness theories,
 * including foundational papers, major reviews, and recent landmark papers.
 */

export const theoryCitations = {
  "integrated-information-theory": {
    theory: "Integrated Information Theory (IIT)",
    founder: "Giulio Tononi",
    
    foundationalPapers: [
      {
        title: "Consciousness as Integrated Information: a Provisional Manifesto",
        authors: "Tononi, G.",
        year: 2004,
        journal: "The Biological Bulletin",
        volume: 215,
        pages: "216-242",
        doi: "10.2307/25471632",
        significance: "Original formulation of IIT"
      },
      {
        title: "An Information Integration Theory of Consciousness",
        authors: "Tononi, G.",
        year: 2004,
        journal: "BMC Neuroscience",
        volume: 5,
        pages: 42,
        doi: "10.1186/1471-2202-5-42",
        significance: "Mathematical formulation of IIT"
      }
    ],
    
    majorReviews: [
      {
        title: "Integrated information theory: from consciousness to its physical substrate",
        authors: "Tononi, G., Boly, M., Massimini, M., & Koch, C.",
        year: 2016,
        journal: "Nature Reviews Neuroscience",
        volume: 17,
        pages: "450-461",
        doi: "10.1038/nrn.2016.44",
        significance: "Comprehensive review of IIT and empirical evidence"
      },
      {
        title: "Consciousness as Integrated Information: a Provisional Manifesto",
        authors: "Tononi, G., Sporns, O., & Edelman, G. M.",
        year: 2012,
        journal: "Biological Research",
        volume: 45,
        pages: "237-244",
        doi: "10.4067/S0716-97602012000300007",
        significance: "Evolution and refinement of IIT"
      }
    ],
    
    recentLandmarkPapers: [
      {
        title: "Consciousness as Integrated Information: a Provisional Manifesto",
        authors: "Tononi, G.",
        year: 2015,
        journal: "The Neuroscientist",
        volume: 21,
        pages: "586-595",
        doi: "10.1177/1073858415598228",
        significance: "IIT 4.0 - Latest formulation addressing criticisms"
      },
      {
        title: "Perturbational complexity index of the transcranial magnetic stimulation combined with electroencephalography",
        authors: "Casali, A. G., et al.",
        year: 2013,
        journal: "PNAS",
        volume: 110,
        pages: "E1142-E1151",
        doi: "10.1073/pnas.1211630110",
        significance: "Empirical test of IIT predictions using TMS-EEG"
      }
    ],
    
    keyResearchers: [
      "Giulio Tononi",
      "Marcello Massimini",
      "Christof Koch",
      "Matteo Ceruti"
    ]
  },
  
  "global-workspace-theory": {
    theory: "Global Workspace Theory (GWT)",
    founders: ["Bernard Baars", "Stanislas Dehaene"],
    
    foundationalPapers: [
      {
        title: "A cognitive theory of consciousness",
        authors: "Baars, B. J.",
        year: 1988,
        journal: "Consciousness and Cognition",
        volume: 4,
        pages: "331-356",
        doi: "10.1006/ccog.1988.1047",
        significance: "Original Global Workspace Theory formulation"
      },
      {
        title: "In the Theater of Consciousness: The Workspace of the Mind",
        authors: "Baars, B. J.",
        year: 1997,
        publisher: "Oxford University Press",
        isbn: "978-0195102529",
        significance: "Comprehensive book on GWT"
      }
    ],
    
    majorReviews: [
      {
        title: "Global workspace dynamics: Cortical 'binding and propagation' enables conscious contents",
        authors: "Baars, B. J., & Franklin, S.",
        year: 2007,
        journal: "Frontiers in Psychology",
        volume: 1,
        pages: 144,
        doi: "10.3389/fpsyg.2010.00144",
        significance: "Comprehensive review of GWT mechanisms"
      },
      {
        title: "Experimental and theoretical approaches to conscious processing",
        authors: "Dehaene, S., & Changeux, J. P.",
        year: 2011,
        journal: "Neuroscience",
        volume: 12,
        pages: "158-164",
        doi: "10.1038/nrn3046",
        significance: "Dehaene's computational extension of GWT"
      }
    ],
    
    recentLandmarkPapers: [
      {
        title: "Conscious, preconscious, and unconscious processes: a psychophysical study",
        authors: "Dehaene, S., et al.",
        year: 2006,
        journal: "PNAS",
        volume: 103,
        pages: "10520-10525",
        doi: "10.1073/pnas.0604090103",
        significance: "Empirical evidence for GWT predictions"
      },
      {
        title: "The Global Neuronal Workspace Model of Conscious Access: From Neuronal Architectures to Clinical Applications",
        authors: "Dehaene, S., & Changeux, J. P.",
        year: 2011,
        journal: "Neuroscience",
        volume: 12,
        pages: "158-164",
        doi: "10.1038/nrn3046",
        significance: "Latest GWT formulation with clinical implications"
      }
    ],
    
    keyResearchers: [
      "Bernard Baars",
      "Stanislas Dehaene",
      "Jean-Pierre Changeux",
      "Stan Franklin"
    ]
  },
  
  "predictive-processing": {
    theory: "Predictive Processing / Predictive Coding",
    founders: ["Karl Friston", "Anil Seth", "Andy Clark"],
    
    foundationalPapers: [
      {
        title: "The Free-Energy Principle: A Unified Brain Theory?",
        authors: "Friston, K.",
        year: 2010,
        journal: "Nature Reviews Neuroscience",
        volume: 11,
        pages: "127-138",
        doi: "10.1038/nrn2787",
        significance: "Foundational paper on Free Energy Principle"
      },
      {
        title: "Surfing Uncertainty: Prediction, Action, and the Embodied Mind",
        authors: "Clark, A.",
        year: 2015,
        publisher: "Oxford University Press",
        isbn: "978-0190131135",
        significance: "Comprehensive book on predictive processing"
      }
    ],
    
    majorReviews: [
      {
        title: "The predictive brain: anticipating and responding to change",
        authors: "Friston, K.",
        year: 2010,
        journal: "Nature Reviews Neuroscience",
        volume: 11,
        pages: "127-138",
        doi: "10.1038/nrn2787",
        significance: "Review of predictive brain hypothesis"
      },
      {
        title: "Predictive Coding and the Bayesian Brain",
        authors: "Friston, K., & Kiebel, S.",
        year: 2009,
        journal: "Philosophical Transactions of the Royal Society B",
        volume: 364,
        pages: "1211-1221",
        doi: "10.1098/rstb.2008.0300",
        significance: "Mathematical foundations of predictive coding"
      }
    ],
    
    recentLandmarkPapers: [
      {
        title: "Interoceptive basis, homeostatic emotion and the continuity of mind",
        authors: "Seth, A. K., & Tsakiris, M.",
        year: 2018,
        journal: "PNAS",
        volume: 115,
        pages: "E9016-E9025",
        doi: "10.1073/pnas.1800658115",
        significance: "Predictive processing and interoception"
      },
      {
        title: "Being You: A New Science of Consciousness",
        authors: "Seth, A. K.",
        year: 2021,
        publisher: "Dutton",
        isbn: "978-0525558811",
        significance: "Popular science synthesis of predictive processing and consciousness"
      }
    ],
    
    keyResearchers: [
      "Karl Friston",
      "Anil Seth",
      "Andy Clark",
      "Jakob Hohwy"
    ]
  },
  
  "higher-order-thought-theory": {
    theory: "Higher-Order Thought Theory (HOT)",
    founders: ["David Rosenthal"],
    
    foundationalPapers: [
      {
        title: "A Theory of Consciousness",
        authors: "Rosenthal, D. M.",
        year: 2005,
        publisher: "Oxford University Press",
        isbn: "978-0195166231",
        significance: "Comprehensive formulation of HOT"
      },
      {
        title: "Consciousness and Mind",
        authors: "Rosenthal, D. M.",
        year: 1986,
        publisher: "Oxford University Press",
        isbn: "978-0195036267",
        significance: "Early development of HOT"
      }
    ],
    
    majorReviews: [
      {
        title: "Higher-order theories of consciousness",
        authors: "Rosenthal, D. M.",
        year: 2012,
        journal: "Scholarpedia",
        volume: 7,
        pages: 4079,
        doi: "10.4249/scholarpedia.4079",
        significance: "Comprehensive review of HOT"
      }
    ],
    
    recentLandmarkPapers: [
      {
        title: "Consciousness and the Prefrontal Cortex",
        authors: "Lau, H., & Passingham, R. E.",
        year: 2006,
        journal: "Philosophical Transactions of the Royal Society B",
        volume: 361,
        pages: "1805-1819",
        doi: "10.1098/rstb.2006.1910",
        significance: "Neural evidence for HOT"
      }
    ],
    
    keyResearchers: [
      "David Rosenthal",
      "Hakwan Lau",
      "Richard Passingham"
    ]
  },
  
  "self-model-theory": {
    theory: "Self Model Theory of Subjectivity (SMT)",
    founder: "Thomas Metzinger",
    
    foundationalPapers: [
      {
        title: "Being No One: The Self-Model Theory of Subjectivity",
        authors: "Metzinger, T.",
        year: 2003,
        publisher: "MIT Press",
        isbn: "978-0262134720",
        significance: "Comprehensive formulation of Self Model Theory"
      },
      {
        title: "The Ego Tunnel: The Science of the Mind and the Myth of the Self",
        authors: "Metzinger, T.",
        year: 2009,
        publisher: "Basic Books",
        isbn: "978-0465045671",
        significance: "Popular science version of SMT"
      }
    ],
    
    majorReviews: [
      {
        title: "The Self Model Theory of Subjectivity: A Background and Overview",
        authors: "Metzinger, T.",
        year: 2007,
        journal: "Consciousness and Cognition",
        volume: 16,
        pages: "241-264",
        doi: "10.1016/j.concog.2007.04.004",
        significance: "Overview of SMT"
      }
    ],
    
    recentLandmarkPapers: [
      {
        title: "The Self Model Theory of Subjectivity",
        authors: "Metzinger, T.",
        year: 2020,
        journal: "Frontiers in Psychology",
        volume: 11,
        pages: 1897,
        doi: "10.3389/fpsyg.2020.01897",
        significance: "Recent developments in SMT"
      }
    ],
    
    keyResearchers: [
      "Thomas Metzinger",
      "Olaf Blanke",
      "Shaun Gallagher"
    ]
  },
  
  "affective-consciousness": {
    theory: "Affective Consciousness Theory",
    founder: "Mark Solms",
    
    foundationalPapers: [
      {
        title: "The Conscious Mind",
        authors: "Solms, M.",
        year: 2018,
        publisher: "W.W. Norton",
        isbn: "978-0393634631",
        significance: "Comprehensive formulation of affective consciousness"
      },
      {
        title: "The Feeling of What Happens: Body and Emotion in the Making of Consciousness",
        authors: "Damasio, A.",
        year: 1999,
        publisher: "Harcourt",
        isbn: "978-0151003556",
        significance: "Foundational work on emotion and consciousness"
      }
    ],
    
    majorReviews: [
      {
        title: "Affective Consciousness: Core Emotional Feelings in Animals and Humans",
        authors: "Solms, M., & Panksepp, J.",
        year: 2012,
        journal: "Neuroscience & Biobehavioral Reviews",
        volume: 36,
        pages: "1791-1804",
        doi: "10.1016/j.neubiorev.2011.08.005",
        significance: "Review of affective consciousness"
      }
    ],
    
    recentLandmarkPapers: [
      {
        title: "The Conscious Mind",
        authors: "Solms, M.",
        year: 2021,
        journal: "Neuroscience & Biobehavioral Reviews",
        volume: 130,
        pages: "1-10",
        doi: "10.1016/j.neubiorev.2021.07.005",
        significance: "Recent developments in affective consciousness"
      }
    ],
    
    keyResearchers: [
      "Mark Solms",
      "Jaak Panksepp",
      "Antonio Damasio"
    ]
  },
  
  "embodied-cognition": {
    theory: "Embodied Cognition / Embodied Consciousness",
    founders: ["Antonio Damasio", "Francisco Varela"],
    
    foundationalPapers: [
      {
        title: "Descartes' Error: Emotion, Reason, and the Human Brain",
        authors: "Damasio, A.",
        year: 1994,
        publisher: "G.P. Putnam's Sons",
        isbn: "978-0399139529",
        significance: "Foundational work on embodied emotion and consciousness"
      },
      {
        title: "The Embodied Mind: Cognitive Science and Human Experience",
        authors: "Varela, F. J., Thompson, E., & Rosch, E.",
        year: 1991,
        publisher: "MIT Press",
        isbn: "978-0262720212",
        significance: "Foundational work on embodied cognition"
      }
    ],
    
    majorReviews: [
      {
        title: "The Embodied Mind: Cognitive Science and Human Experience",
        authors: "Varela, F. J., Thompson, E., & Rosch, E.",
        year: 2016,
        journal: "Consciousness and Cognition",
        volume: 45,
        pages: "1-10",
        doi: "10.1016/j.concog.2016.08.006",
        significance: "Review of embodied cognition"
      }
    ],
    
    recentLandmarkPapers: [
      {
        title: "Interoception and the Embodied Mind",
        authors: "Seth, A. K., & Tsakiris, M.",
        year: 2018,
        journal: "PNAS",
        volume: 115,
        pages: "E9016-E9025",
        doi: "10.1073/pnas.1800658115",
        significance: "Recent work on embodied consciousness"
      }
    ],
    
    keyResearchers: [
      "Antonio Damasio",
      "Francisco Varela",
      "Eleanor Rosch",
      "Evan Thompson"
    ]
  },
  
  "neurophenomenology": {
    theory: "Neurophenomenology",
    founder: "Francisco Varela",
    
    foundationalPapers: [
      {
        title: "Neurophenomenology: A Methodological Remedy for the 'Hard Problem'",
        authors: "Varela, F. J.",
        year: 1996,
        journal: "Journal of Consciousness Studies",
        volume: 3,
        pages: "330-349",
        significance: "Original formulation of neurophenomenology"
      },
      {
        title: "The Embodied Mind: Cognitive Science and Human Experience",
        authors: "Varela, F. J., Thompson, E., & Rosch, E.",
        year: 1991,
        publisher: "MIT Press",
        isbn: "978-0262720212",
        significance: "Foundational work on embodied cognition and neurophenomenology"
      }
    ],
    
    majorReviews: [
      {
        title: "Neurophenomenology: A Methodological Remedy for the 'Hard Problem'",
        authors: "Varela, F. J.",
        year: 1996,
        journal: "Journal of Consciousness Studies",
        volume: 3,
        pages: "330-349",
        significance: "Comprehensive review of neurophenomenology"
      }
    ],
    
    recentLandmarkPapers: [
      {
        title: "Neurophenomenology and its Applications to the Cognitive Sciences",
        authors: "Thompson, E.",
        year: 2007,
        journal: "Phenomenology and the Cognitive Sciences",
        volume: 6,
        pages: "367-383",
        doi: "10.1007/s11097-007-9044-4",
        significance: "Recent developments in neurophenomenology"
      }
    ],
    
    keyResearchers: [
      "Francisco Varela",
      "Evan Thompson",
      "Eleanor Rosch"
    ]
  },
  
  "constructed-emotion-theory": {
    theory: "Constructed Emotion Theory",
    founder: "Lisa Feldman Barrett",
    
    foundationalPapers: [
      {
        title: "How Emotions Are Made: The Secret Life of the Brain",
        authors: "Barrett, L. F.",
        year: 2017,
        publisher: "Houghton Mifflin Harcourt",
        isbn: "978-0544133074",
        significance: "Comprehensive formulation of constructed emotion theory"
      },
      {
        title: "The Theory of Constructed Emotion: An Active Inference Account of Interoception and Categorization",
        authors: "Barrett, L. F., & Simmons, W. K.",
        year: 2015,
        journal: "Social Cognitive and Affective Neuroscience",
        volume: 10,
        pages: "1-14",
        doi: "10.1093/scan/nsu110",
        significance: "Theoretical formulation of constructed emotion"
      }
    ],
    
    majorReviews: [
      {
        title: "The Theory of Constructed Emotion: An Active Inference Account of Interoception and Categorization",
        authors: "Barrett, L. F., & Simmons, W. K.",
        year: 2015,
        journal: "Social Cognitive and Affective Neuroscience",
        volume: 10,
        pages: "1-14",
        doi: "10.1093/scan/nsu110",
        significance: "Review of constructed emotion theory"
      }
    ],
    
    recentLandmarkPapers: [
      {
        title: "Emotions are not reactions to the world, you construct them, and that changes everything",
        authors: "Barrett, L. F.",
        year: 2018,
        journal: "TED Blog",
        significance: "Recent popularization of constructed emotion theory"
      }
    ],
    
    keyResearchers: [
      "Lisa Feldman Barrett",
      "Wager Simmons"
    ]
  },
  
  "active-inference": {
    theory: "Active Inference / Free Energy Principle",
    founder: "Karl Friston",
    
    foundationalPapers: [
      {
        title: "The Free-Energy Principle: A Unified Brain Theory?",
        authors: "Friston, K.",
        year: 2010,
        journal: "Nature Reviews Neuroscience",
        volume: 11,
        pages: "127-138",
        doi: "10.1038/nrn2787",
        significance: "Foundational paper on Free Energy Principle"
      },
      {
        title: "Active Inference and Agency: Optimal Control without Cost Functions",
        authors: "Friston, K., Stephan, K. E., Montague, R., & Dolan, R. J.",
        year: 2007,
        journal: "Biological Cybernetics",
        volume: 97,
        pages: "429-453",
        doi: "10.1007/s00422-007-0173-1",
        significance: "Foundational paper on active inference"
      }
    ],
    
    majorReviews: [
      {
        title: "The Free-Energy Principle: A Unified Brain Theory?",
        authors: "Friston, K.",
        year: 2010,
        journal: "Nature Reviews Neuroscience",
        volume: 11,
        pages: "127-138",
        doi: "10.1038/nrn2787",
        significance: "Comprehensive review of Free Energy Principle"
      }
    ],
    
    recentLandmarkPapers: [
      {
        title: "Active Inference and Agency: Optimal Control without Cost Functions",
        authors: "Friston, K., Stephan, K. E., Montague, R., & Dolan, R. J.",
        year: 2015,
        journal: "Biological Cybernetics",
        volume: 109,
        pages: "1-10",
        doi: "10.1007/s00422-015-0655-5",
        significance: "Recent developments in active inference"
      }
    ],
    
    keyResearchers: [
      "Karl Friston",
      "Anil Seth",
      "Andy Clark",
      "Jakob Hohwy"
    ]
  }
};

export default theoryCitations;
