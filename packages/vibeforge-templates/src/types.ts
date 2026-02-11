import { z } from "zod";

// --- Enums & Unions ---

export type ArchetypeId = 
  | "saas_crud" 
  | "marketplace" 
  | "booking" 
  | "ai_tool" 
  | "social"
  | "ecommerce"
  | "project_management"
  | "blog_cms"
  | "analytics_dashboard"
  | "education"
  | "game"
  | "personal_site";

export type ClauseId = 
  | "goal"
  | "targetUsers"
  | "successMetric"
  | "mvpScope"
  | "nonGoals"
  | "coreFlows"
  | "entities"
  | "auth"
  | "roles"
  | "integrations"
  | "nonNegotiables"
  | "uiStyle"
  | "stackPrefs"
  | "deployment"
  | "definitionOfDone";

export type QuestionType = "singleChoice" | "multiChoice" | "shortText";

export type ForgeMode = "quick" | "deep";

export type PromptPlatform = "replit" | "vibecodeapp" | "cursor" | "generic";

// --- Interfaces ---

export interface QuestionOption {
  value: string;
  label: string;
}

export interface Question {
  id: string;
  clause: ClauseId;
  prompt: string;
  type: QuestionType;
  required: boolean;
  critical: boolean;
  options?: QuestionOption[];
  allowOther?: boolean;
  mode?: ForgeMode | "both";
  helpText?: string;
  placeholder?: string;
}

export interface Archetype {
  id: ArchetypeId;
  name: string;
  description: string;
  keywordHints: string[];
  questions: Question[];
}

export interface Contract {
  ideaText: string;
  archetype: string; // Display name
  goal: string;
  targetUsers: string;
  successMetric: string;
  mvpScope: string[];
  nonGoals: string[];
  coreFlows: string[];
  entities: { name: string; fields: string[] }[];
  auth: "none" | "email_password" | "oauth_google" | "magic_link";
  roles: string[];
  integrations: string[];
  nonNegotiables: string[];
  uiStyle: "minimal" | "modern" | "dashboard" | "playful" | "industrial" | "glassmorphism" | "neobrutalism" | "bento" | "neumorphism";
  stackPrefs: { frontend?: string; backend?: string; db?: string };
  deployment: "replit" | "local" | "other";
  definitionOfDone: string[];
}

export interface Session {
  id: string;
  createdAt: string;
  updatedAt: string;
  ideaText: string;
  archetypeId: ArchetypeId | null;
  mode: ForgeMode;
  answers: Record<string, any>;
  contract: Contract;
  score: number;
  missingClauses: ClauseId[];
  shareId: string | null;
  published: boolean;
  userId: string | null;
}
