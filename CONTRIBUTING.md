# Contributing

The easiest way to help VibeForge is to add or improve **archetypes** (question trees) and **templates**.

## What to contribute
- New archetype question set (e.g. `mobile_app`, `chrome_extension`, `fintech`)
- Better clause coverage (more complete core flows, entities, DoD)
- Platform prompt adapters (new tabs: Claude, Codex, etc.)

## Where to edit
- `packages/vibeforge-templates/src/archetypes.ts` — archetypes + questions
- `packages/vibeforge-templates/src/scoring.ts` — clause weights + completeness rules
- `packages/vibeforge-templates/src/generators.ts` — markdown + prompt generation

## Guidelines
- Prefer deterministic templates (no “guessing” product facts)
- Use defaults only when safe (auth=none, db=sqlite, deploy=replit, etc.)
- Keep question text clear to non-devs

## Submitting
1. Fork the repo
2. Create a branch: `feat/archetype-chrome-extension`
3. Open a PR with screenshots or an example contract in `/examples`
