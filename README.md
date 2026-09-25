# Neon Noir Poker ♠

A cinematic Texas Hold'em table built with React + TypeScript. The first milestone is a polished local game against four bots, with a structure designed to become online multiplayer later.

## Run locally

```bash
npm install
npm run dev
```

Then open the Vite URL printed in the terminal.

## Current build

- 5-max Texas Hold'em table
- 1 human + 4 bot opponents
- Dealer + automatic blinds/dealing/street progression
- Poker hand evaluator (high card → straight flush)
- Bot styles: tight, aggressive, balanced, wild
- Animated cards, chip stacks, winner overlay
- Responsive neon-noir casino UI
- Fictional in-game currency only

## Next milestones

1. Add proper sound assets / Web Audio soundscape.
2. Add richer bot strategy: pot odds, board texture, bluff frequency and range simulation.
3. Add complete side-pot handling and all-in edge cases.
4. Move game state to a Node/WebSocket authoritative server.
5. Add rooms, reconnects, spectator mode and real online players.
6. Add original character portraits and environment art.

## Architecture

The poker engine is intentionally separated from React components under `src/game`. This makes the game state portable to a server later.
