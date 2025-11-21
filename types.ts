
export interface ScenarioMetric {
  name: string;
  baseline: number;
  swarm: number;
  savant: number;
  fullMark: number;
}

export interface ScenarioData {
  id: string;
  title: string;
  description: string;
  color: string;
}

export interface AgentPersona {
  id: string;
  name: string;
  role: string;
  bio: string; // Front of card
  expertise: string; // Back
  unique: string; // Back
  traits: string[]; // Back
  goals: string; // Back
  archetype: string; // Back
  color: string;
  imagePlaceholder: string;
  systemInstruction: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface TestScenarioResult {
  id: number;
  title: string;
  domain: string;
  task: string;
  scores: {
    baseline: number;
    standard: number;
    savant: number;
  };
  keyStats: string[];
  savantImprovements: {
    trait: string;
    value: string;
    dsmg: string;
    pattern?: string;
  };
  roiHighlight: string;
}
