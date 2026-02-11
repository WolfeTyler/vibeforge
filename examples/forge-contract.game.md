# Forge Contract — Example (Game MVP)

**Idea:** Make an RPG  
**Archetype:** Game  
**Goal:** 2D platformer RPG loop  
**Target Users:** casual  
**Success Metric:** 10,000 DAUs  
**UI Style:** playful  

## Core Flows
- move_character
- collect_resources
- build_create

## Data Entities
- players { id, created_at }
- inventory { id, created_at }
- game_state { id, created_at }

## Definition of Done
- User can start a new run and move character with keyboard controls
- Resources can be collected and persist across refresh
- Player inventory UI updates when items are collected
- A basic build/craft action modifies game state
- App runs end-to-end without placeholder pages
