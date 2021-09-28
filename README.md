# `near-sdk-as` Starter Kit

This is a learning excersie to explore NEAR.
The idea: Every year a group of frinds play a simple version of NFL Fantasy. The goal of this project is to create two contracts. One contract will hold the funds and the other contract will keep track of the scores.

### Rules and Process

1. A player should add $NEAR in a pool to be able to play.
2. From a preselected table of 6 columns and each row containing NFL teams, you select one Team from each column.

```
const GAME_LINE_UP = {
  year: "2021",
  block_1: ["KC", "BUF", "GB", "PIT"],
  block_2: ["TB", "SEA", "NO", "BAL"],
  block_3: ["TEN", "CLE", "IND", "MIA", "LA", "OAK"],
  block_4: ["ARI", "CHI", "NE", "SD", "WAS", "MIN"],
  block_5: ["NYG", "DAL", "SF", "DEN", "DET", "CAR"],
  block_6: ["CIN", "PHI", "HOU", "ATL", "NYJ", "JAX"],
};
```

3. If your team wins a game, a plus 1 gets added to your wins.
4. If your team loses, your wins stay the same.
5. We also track how many points the team score (for tie breaker).
6. After regular season is over, the player with the most points picks first a team they want to take to the superbowl.
7. Teams get assigned until there are no teams left. If a player does not get a team, this is the end the road for that player.
8. Prices are then divided 50%(1st), 30%(2nd), 20%(3rd).

## Contracts

- **Scores** in the `src/Scores` folder
<!-- todo - **Pool**   -->

### Getting started

(see below for video recordings of each of the following steps)

1. clone this repo to a local folder
2. run `yarn`
3. run `./scripts/1.dev-deploy.sh`
4. run `./scripts/2.use-contract.sh` (uncomment/modify line 51 (where we call addPlayerToScore on the contract))
5. run `./scripts/2.use-contract.sh` (yes, run it again, but first change the score you want to add first)
6. run `./scripts/3.cleanup.sh`

## The file system

```sh
├── README.md
├── as-pect.config.js
├── asconfig.json
├── package.json
├── scripts
│   ├── 1.dev-deploy.sh
│   ├── 2.use-contract.sh
│   ├── 3.cleanup.sh
│   └── README.md
├── src
│   ├── as_types.d.ts
│   ├── Scores
│   │   ├── __tests__
│   │   │   ├── as-pect.d.ts
│   │   │   └── index.unit.spec.ts
│   │   ├── asconfig.json
│   │   └── assembly
│   │       └── index.ts
│   ├── tsconfig.json
│   └── utils.ts
└── yarn.lock

```
