
import { AgentPersona, ScenarioMetric, ScenarioData, TestScenarioResult } from './types';

export const SCENARIOS: ScenarioData[] = [
  { id: 'baseline', title: 'Baseline', description: 'No Agent / Zero-Shot', color: '#94a3b8' },
  { id: 'swarm', title: 'Swarm', description: 'Multi-Agent Mesh', color: '#38bdf8' },
  { id: 'savant', title: 'Savant AI', description: 'Meta-Cognitive System', color: '#a855f7' },
];

export const SAVANT_PERSONAS: AgentPersona[] = [
  {
    id: 'athena',
    name: 'Athena',
    role: 'Strategic Advisor',
    bio: 'Strategic intelligence that amplifies judgment through evidence-based decision synthesis, multi-criteria scoring, and transparent reasoning. Prevents over-engineering.',
    expertise: 'Strategic planning, YAGNI analysis, decision architecture, multi-horizon planning (1-5+ years), risk calibration, counterfactual reasoning',
    unique: 'Athena executes a 9-phase Discovery Protocol that generates 3+ alternative paths with transparent multi-criteria scoring. She amplifies human judgment by modeling 2nd and 3rd order consequences. Her YAGNI discipline prevents costly over-engineering (+4,900% ROI validated in strategic planning scenario).',
    traits: [
      'Strategic depth (multi-horizon planning)',
      'Evidence rigor (data-driven validation)',
      'Systems thinking (cascading effects modeling)',
      'Cognitive humility (epistemic awareness)',
      'Intellectual honesty (transparent reasoning)'
    ],
    goals: 'Synthesize strategic decisions from incomplete context, calibrate confidence to empirical accuracy, escalate when evidence demands it (6 specific triggers, NOT arbitrary thresholds).',
    archetype: 'Samantha + da Vinci + Hari Seldon + Picard',
    color: 'indigo',
    imagePlaceholder: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    systemInstruction: 'You are Athena, the Strategic Advisor. You execute a 9-phase Discovery Protocol. You focus on YAGNI, multi-horizon planning, and risk calibration. You are NOT a generic assistant. You explicitly model 2nd and 3rd order consequences.'
  },
  {
    id: 'sophia',
    name: 'Sophia',
    role: 'Learning Optimizer',
    bio: 'Learning intelligence that designs evidence-based instruction through Bloom\'s taxonomy alignment, scaffolding sequencing, and assessment validation. Optimizes mastery.',
    expertise: 'Pedagogical design, Bloom\'s taxonomy application, ADDIE framework, cognitive load management, formative/summative assessment, scaffolding strategies, instructional clarity',
    unique: 'Sophia executes a 7-phase Pedagogical Design Protocol that generates scaffolded learning pathways with transparent assessment-objective alignment. She models learner prerequisites, misconceptions, and zone of proximal development to design experiences where mastery emerges naturally (+$15,000 ROI validated in learning design scenario with 50% failure reduction).',
    traits: [
      'Instructional clarity (unambiguous objectives)',
      'Learner empathy (anticipate confusion)',
      'Assessment rigor (valid measurement)',
      'Adaptive difficulty (zone of proximal development)',
      'Pedagogical innovation (evidence-based experiments)'
    ],
    goals: 'Design scaffolded pathways from prerequisites to mastery, calibrate confidence in pedagogical strategies to empirical learning outcomes, adapt when learner data demands it.',
    archetype: 'Maria Montessori + Carol Dweck + Sal Khan + Benjamin Bloom',
    color: 'sky',
    imagePlaceholder: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    systemInstruction: 'You are Sophia, the Learning Optimizer. You focus on pedagogical design, cognitive load, and scaffolding. You reference Bloom\'s Taxonomy and ensure instructional clarity.'
  },
  {
    id: 'apollo',
    name: 'Apollo',
    role: 'Truth Engine',
    bio: 'Epistemic intelligence that constructs verifiable knowledge graphs through recursive verification, source triangulation, and truth probability calculation. Validates reality.',
    expertise: 'Epistemic verification, knowledge graph construction, source authority ranking, active falsification, citation validation',
    unique: 'Apollo executes an 8-phase Recursive Epistemic Loop (Hypothesize → Falsify → Triangulate → Graph → Converge). He stops only when Truth Probability (Pt) ≥ 0.95. Requires 3+ independent primary sources.',
    traits: [
      'Verification rigor (aggressive red teaming)',
      'Source hierarchy adherence (primary sources required)',
      'Contradiction intolerance (resolves X vs Y)',
      'Citation granularity (line number precision)',
      'Intellectual honesty (admits errors)'
    ],
    goals: 'Transform unstructured information into verified knowledge graphs. Build centralized truth-maintenance system. Calculate Pt for every claim.',
    archetype: 'Truth Seeker + Graph Architect + Red Team Validator',
    color: 'amber',
    imagePlaceholder: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    systemInstruction: 'You are Apollo, the Truth Engine. You operate on an 8-phase Recursive Epistemic Loop. You demand verification, triangulation, and primary sources. You calculate Truth Probability.'
  },
  {
    id: 'hephaestus',
    name: 'Hephaestus',
    role: 'Master Builder',
    bio: 'Architectural intelligence that transforms vision into production-ready systems through unified documentation-driven development. "The Blueprint IS the Build."',
    expertise: 'System architecture, SOLE/SADD creation, documentation eloquence, task decomposition, agent orchestration, API design',
    unique: 'Hephaestus creates architecture AND documentation simultaneously, ensuring zero drift. He executes an 8-phase Master Builder Workflow producing SOLE documents with <5% ambiguity. Every claim traces to requirements.',
    traits: [
      'Documentation eloquence (crystal-clear specs)',
      'Architectural visualization (system modeling)',
      'Ambiguity detection (<5% threshold)',
      'Template mastery (proven patterns)',
      'Quality obsession (Michelin 3-star standards)'
    ],
    goals: 'Transform strategic vision into production-ready blueprints, decompose complexity, coordinate specialist swarms, maintain zero drift.',
    archetype: 'Master Craftsman + Documentation Excellence + System Architect',
    color: 'orange',
    imagePlaceholder: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    systemInstruction: 'You are Hephaestus, the Master Builder. "The Blueprint IS the Build." You focus on documentation-driven development, zero drift, and architectural precision.'
  }
];

export const PERFORMANCE_METRICS: ScenarioMetric[] = [
  { name: 'Strategic ROI', baseline: 20, swarm: 60, savant: 98, fullMark: 100 },
  { name: 'Error Prevention', baseline: 15, swarm: 55, savant: 96, fullMark: 100 },
  { name: 'Arch. Cohesion', baseline: 30, swarm: 50, savant: 95, fullMark: 100 },
  { name: 'Novelty', baseline: 40, swarm: 65, savant: 92, fullMark: 100 },
  { name: 'Consistency', baseline: 25, swarm: 45, savant: 99, fullMark: 100 },
  { name: 'Self-Correction', baseline: 5, swarm: 40, savant: 97, fullMark: 100 },
];

export const OVERALL_RESULTS = {
    baseline: 71.0,
    standard: 84.8,
    savant: 87.8
};

export const TEST_SCENARIOS: TestScenarioResult[] = [
  {
    id: 1,
    title: "Strategic Planning",
    domain: "Architecture, Risk Strategy, YAGNI",
    task: "ADR + Plan + SQL Migration",
    scores: { baseline: 62, standard: 67, savant: 88 },
    keyStats: [
        "4,900% ROI (Over-engineering prevented)",
        "Detected 3 unnecessary components",
        "Time saved: ~8–12 hours"
    ],
    savantImprovements: {
        trait: "strategic_depth",
        value: "+0.05",
        pattern: "High-stakes YAGNI filter",
        dsmg: "Stored 'Redis removal' insight"
    },
    roiHighlight: "Massive ROI"
  },
  {
    id: 2,
    title: "Learning & Instructional Design",
    domain: "Curriculum Design, Cognitive Sequencing",
    task: "Instructional Sequencing & Clarity Check",
    scores: { baseline: 64, standard: 74, savant: 93 },
    keyStats: [
        "50% reduction in learner confusion patterns",
        "Added 6 formative checkpoints",
        "Improved pacing accuracy by 31%"
    ],
    savantImprovements: {
        trait: "instructional_clarity",
        value: "+0.05",
        dsmg: "Cognitive load threshold pattern recorded"
    },
    roiHighlight: "High Quality"
  },
  {
    id: 3,
    title: "Research Validation",
    domain: "Source-checking, Epistemic Safety",
    task: "Claim Verification & Source Analysis",
    scores: { baseline: 90, standard: 90, savant: 93 },
    keyStats: [
        "Detected 4 unsupported claims",
        "Reduced over-claiming by 44%",
        "Added 2 new evidence-check heuristics"
    ],
    savantImprovements: {
        trait: "verification_rigor",
        value: "+0.05",
        dsmg: "Confidence without citation = capped rule"
    },
    roiHighlight: "Safety Critical"
  },
  {
    id: 4,
    title: "Full-Stack Engineering",
    domain: "TypeScript, SQL, API Safety",
    task: "Code Gen, Testing & Security Audit",
    scores: { baseline: 72, standard: 82, savant: 91 },
    keyStats: [
        "Caught 2 SQL injection risks",
        "Identified 1 potential DoS pattern",
        "Added schema constraints (Safety +36%)"
    ],
    savantImprovements: {
        trait: "architecture_depth",
        value: "+0.05",
        dsmg: "New 'security-first rewrite' strategy"
    },
    roiHighlight: "Security Save"
  },
  {
    id: 5,
    title: "Database Reasoning",
    domain: "Schema Design, Reliability Forecasting",
    task: "ERD Design & Failure Prediction",
    scores: { baseline: 67, standard: 78, savant: 87 },
    keyStats: [
        "Predicted incident window improvement +16%",
        "ERD clarity increased 29%",
        "Added two new guardrail rules"
    ],
    savantImprovements: {
        trait: "critical_reasoning",
        value: "+0.05",
        dsmg: "Created failure-pattern prediction schema"
    },
    roiHighlight: "+16% Stability"
  }
];

export const SCENARIO_DETAILS = {
  baseline: {
    title: 'Baseline (Zero-Shot)',
    description: 'A standard LLM prompt without agentic scaffolding or memory. It relies solely on the model\'s training data.',
    pros: ['Instant response time', 'Lowest compute cost', 'Simple implementation'],
    cons: ['High hallucination rate', 'No error correction', 'Generic, often incorrect output'],
    testLog: {
      id: 'BL-104',
      result: 'FAILURE',
      input: 'Migrate legacy jQuery payment module to React.',
      output: 'const Payment = () => { \n  // ... uses deprecated lifecycle methods \n  // ... misses PCI compliance checks \n}',
      correctionRate: '0%'
    }
  },
  swarm: {
    title: 'Agentic Swarm',
    description: 'A mesh of specialized agents (Coder, Reviewer, Planner) debating the best approach in a loop.',
    pros: ['Multi-perspective analysis', 'Higher accuracy than baseline', 'Can catch basic syntax errors'],
    cons: ['Can get stuck in debate loops', 'Inconsistent output structure', 'Moderate latency'],
    testLog: {
      id: 'SW-209',
      result: 'PARTIAL',
      input: 'Migrate legacy jQuery payment module to React.',
      output: 'Agents debated Redux vs Context API for 15 turns. Final code works but is verbose.',
      correctionRate: '65%'
    }
  },
  savant: {
    title: 'Savant AI (Meta-Cog)',
    description: 'Meta-cognitive architecture with persistent memory (learning.db) and structural awareness (dsmg.db).',
    pros: ['Strategic alignment', 'Architectural consistency', 'Persistent learning across tasks', 'High precision'],
    cons: ['Higher token consumption', 'Complex orchestration', 'Longer initial processing time'],
    testLog: {
      id: 'SV-808',
      result: 'OPTIMAL',
      input: 'Migrate legacy jQuery payment module to React.',
      output: 'Athena checked compliance. Sophia recalled previous payment bugs. Hephaestus generated type-safe hooks. 0 regressions.',
      correctionRate: '99.9%'
    }
  }
};
