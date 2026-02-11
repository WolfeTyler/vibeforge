import { ClauseId, Contract, Session } from "@/lib/types";
import { ARCHETYPES } from "@/data/archetypes";

export const SCORING_WEIGHTS: Record<ClauseId, number> = {
  goal: 10,
  targetUsers: 10,
  successMetric: 5,
  mvpScope: 10,
  nonGoals: 5,
  coreFlows: 10,
  entities: 10,
  auth: 5,
  roles: 5,
  integrations: 5,
  nonNegotiables: 5,
  uiStyle: 5,
  stackPrefs: 5,
  deployment: 5,
  definitionOfDone: 10
};

export function calculateScore(contract: Contract): { score: number; missingClauses: ClauseId[] } {
  let score = 0;
  const missingClauses: ClauseId[] = [];

  for (const [clause, weight] of Object.entries(SCORING_WEIGHTS)) {
    const key = clause as ClauseId;
    const value = contract[key];

    let isComplete = false;
    
    if (Array.isArray(value)) {
      if (value.length > 0) isComplete = true;
    } else if (typeof value === "string") {
      if (value.trim().length > 0 && value !== "TBD") isComplete = true;
    } else if (typeof value === "object" && value !== null) {
      if (Object.keys(value).length > 0) isComplete = true;
    }

    if (isComplete) {
      score += weight;
    } else {
      missingClauses.push(key);
    }
  }

  return { score: Math.min(score, 100), missingClauses };
}

export function normalizeContract(session: Session): Contract {
  const { answers } = session;

  const clauseMap: Record<string, any> = {};
  const archetype = session.archetypeId ? ARCHETYPES[session.archetypeId] : null;
  if (archetype) {
    for (const q of archetype.questions) {
      if (answers[q.id] !== undefined) {
        const clause = q.clause;
        if (clauseMap[clause] !== undefined) {
          const existing = Array.isArray(clauseMap[clause]) ? clauseMap[clause] : [clauseMap[clause]];
          const incoming = Array.isArray(answers[q.id]) ? answers[q.id] : [answers[q.id]];
          clauseMap[clause] = [...existing, ...incoming];
        } else {
          clauseMap[clause] = answers[q.id];
        }
      }
    }
  }

  const getArr = (key: string): string[] => {
    const val = clauseMap[key];
    if (Array.isArray(val)) return val;
    if (typeof val === "string" && val.trim()) return [val];
    return [];
  };

  const getStr = (key: string, defaultVal = "TBD"): string => {
    const val = clauseMap[key];
    if (typeof val === "string") return val;
    if (Array.isArray(val)) return val.join(", ");
    return defaultVal;
  };

  const entitiesRaw = getArr("entities");
  const entities = entitiesRaw.map(e => {
    let fields = ["id", "created_at"];
    if (e === "users") fields = [...fields, "email", "name", "role"];
    if (e === "products") fields = [...fields, "title", "price", "description", "stock"];
    if (e === "orders") fields = [...fields, "user_id", "total", "status"];
    if (e === "projects") fields = [...fields, "title", "status", "owner_id"];
    if (e === "clients") fields = [...fields, "name", "email", "company"];
    if (e === "reports") fields = [...fields, "title", "type", "data"];
    return { name: e, fields };
  });

  const dod = [
    "App must run on Replit without errors.",
    "All critical user flows must work end-to-end.",
    "UI must be responsive (mobile-friendly)."
  ];
  if (getStr("auth") !== "none") dod.push("User authentication flows (signup/login/logout) must work.");

  return {
    ideaText: session.ideaText,
    archetype: session.archetypeId ? session.archetypeId : "Custom",
    goal: getStr("goal"),
    targetUsers: getStr("targetUsers"),
    successMetric: getStr("successMetric", "User retention and completed flows"),
    mvpScope: getArr("mvpScope"),
    nonGoals: getArr("nonGoals"),
    coreFlows: getArr("coreFlows"),
    entities: entities,
    auth: getStr("auth", "none") as any,
    roles: getArr("roles").length ? getArr("roles") : ["user"],
    integrations: getArr("integrations"),
    nonNegotiables: getArr("nonNegotiables"),
    uiStyle: getStr("uiStyle", "modern") as any,
    stackPrefs: {
        frontend: "React + Vite + Tailwind",
        backend: "Node + Express",
        db: "SQLite"
    },
    deployment: "replit",
    definitionOfDone: dod
  };
}
