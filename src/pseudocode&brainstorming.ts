// PseudoCode of State Models and Consts

let initLeaderBoardState = {
  player_standings: [],
};

let initPlayerStanding = {
  place: "",
  player_id: "",
  points_by_game: null,
  points_accumulative: null,
};

let initGameState = {
  year: "",
  players: [],
  picks: [],
};

let initPickState = {
  year: "",
  player_id: "",
  block_1_pick: "",
  block_2_pick: "",
  block_3_pick: "",
  block_4_pick: "",
  block_5_pick: "",
  block_6_pick: "",
};

let initPlayerState = {
  id: "",
  picks: {
    2021: [],
  },
};

let player = {
  id: "phoenixpulsar.testnet",
  picks: {
    2021: ["KC", "TB", "TEN", "ARI", "DAL", "PHI"],
  },
  scores: {
    total_wins: 8,
    total_points: 357,
    week_1: {
      KC: {
        win: true,
        points: 33,
      },
      TB: {
        win: true,
        points: 31,
      },
      TEN: {
        win: false,
        points: 13,
      },
      ARI: {
        win: true,
        points: 38,
      },
      DAL: {
        win: false,
        points: 29,
      },
      PHI: {
        win: true,
        points: 32,
      },
      weekly_wins: 4,
      weekly_points: 176,
    },
    week_2: {
      KC: {
        win: false,
        points: 35,
      },
      TB: {
        win: true,
        points: 48,
      },
      TEN: {
        win: true,
        points: 33,
      },
      ARI: {
        win: true,
        points: 34,
      },
      DAL: {
        win: true,
        points: 20,
      },
      PHI: {
        win: false,
        points: 11,
      },
      weekly_wins: 4,
      weekly_points: 181,
    },
  },
};

let ResultsState = {
  year: "",
  regular_season: {
    week_1: {
      ARI: {
        win: true,
        points: 38,
      },
      ATL: {
        win: false,
        points: 6,
      },
      BAL: {
        win: false,
        points: 27,
      },
      BUF: {
        win: false,
        points: 16,
      },
      CAR: {
        win: true,
        points: 19,
      },
      CHI: {
        win: false,
        points: 14,
      },
      CIN: {
        win: true,
        points: 27,
      },
      CLE: {
        win: false,
        points: 29,
      },
      DAL: {
        win: false,
        points: 29,
      },
      DEN: {
        win: true,
        points: 27,
      },
      DET: {
        win: false,
        points: 33,
      },
      GB: {
        win: false,
        points: 3,
      },
      HOU: {
        win: true,
        points: 37,
      },
      IND: {
        win: false,
        points: 16,
      },
      JAX: {
        win: false,
        points: 21,
      },
      KC: {
        win: true,
        points: 33,
      },
      LA: {
        win: true,
        points: 34,
      },
      MIA: {
        win: true,
        points: 17,
      },
      MIN: {
        win: false,
        points: 24,
      },
      NE: {
        win: false,
        points: 16,
      },
      NO: {
        win: true,
        points: 38,
      },
      NYG: {
        win: false,
        points: 13,
      },
      NYJ: {
        win: false,
        points: 14,
      },
      OAK: {
        win: true,
        points: 33,
      },
      PHI: {
        win: true,
        points: 32,
      },
      PIT: {
        win: true,
        points: 23,
      },
      SD: {
        win: true,
        points: 20,
      },
      SF: {
        win: true,
        points: 41,
      },
      SEA: {
        win: true,
        points: 28,
      },
      TB: {
        win: true,
        points: 31,
      },
      TEN: {
        win: false,
        points: 13,
      },
      WAS: {
        win: false,
        points: 16,
      },
    },
    week_2: {
      ARI: {
        win: true,
        points: 34,
      },
      ATL: {
        win: false,
        points: 25,
      },
      BAL: {
        win: true,
        points: 36,
      },
      BUF: {
        win: true,
        points: 35,
      },
      CAR: {
        win: true,
        points: 26,
      },
      CHI: {
        win: true,
        points: 20,
      },
      CIN: {
        win: false,
        points: 17,
      },
      CLE: {
        win: true,
        points: 31,
      },
      DAL: {
        win: true,
        points: 20,
      },
      DEN: {
        win: true,
        points: 23,
      },
      DET: {
        win: false,
        points: 17,
      },
      GB: {
        win: true,
        points: 35,
      },
      HOU: {
        win: false,
        points: 21,
      },
      IND: {
        win: false,
        points: 24,
      },
      JAX: {
        win: false,
        points: 13,
      },
      KC: {
        win: false,
        points: 35,
      },
      LA: {
        win: true,
        points: 27,
      },
      MIA: {
        win: false,
        points: 0,
      },
      MIN: {
        win: false,
        points: 33,
      },
      NE: {
        win: true,
        points: 25,
      },
      NO: {
        win: false,
        points: 7,
      },
      NYG: {
        win: false,
        points: 29,
      },
      NYJ: {
        win: false,
        points: 6,
      },
      OAK: {
        win: true,
        points: 26,
      },
      PHI: {
        win: false,
        points: 11,
      },
      PIT: {
        win: false,
        points: 17,
      },
      SD: {
        win: false,
        points: 17,
      },
      SF: {
        win: true,
        points: 17,
      },
      SEA: {
        win: false,
        points: 30,
      },
      TB: {
        win: true,
        points: 48,
      },
      TEN: {
        win: true,
        points: 33,
      },
      WAS: {
        win: true,
        points: 30,
      },
    },
    week_3: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_4: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_5: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_6: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_7: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_8: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_9: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_10: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_11: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_12: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_13: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_14: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_15: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_16: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_17: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
    week_18: {
      ARI: {
        win: null,
        points: null,
      },
      ATL: {
        win: null,
        points: null,
      },
      BAL: {
        win: null,
        points: null,
      },
      BUF: {
        win: null,
        points: null,
      },
      CAR: {
        win: null,
        points: null,
      },
      CHI: {
        win: null,
        points: null,
      },
      CIN: {
        win: null,
        points: null,
      },
      CLE: {
        win: null,
        points: null,
      },
      DAL: {
        win: null,
        points: null,
      },
      DEN: {
        win: null,
        points: null,
      },
      DET: {
        win: null,
        points: null,
      },
      GB: {
        win: null,
        points: null,
      },
      HOU: {
        win: null,
        points: null,
      },
      IND: {
        win: null,
        points: null,
      },
      JAX: {
        win: null,
        points: null,
      },
      KC: {
        win: null,
        points: null,
      },
      LA: {
        win: null,
        points: null,
      },
      MIA: {
        win: null,
        points: null,
      },
      MIN: {
        win: null,
        points: null,
      },
      NE: {
        win: null,
        points: null,
      },
      NO: {
        win: null,
        points: null,
      },
      NYG: {
        win: null,
        points: null,
      },
      NYJ: {
        win: null,
        points: null,
      },
      OAK: {
        win: null,
        points: null,
      },
      PHI: {
        win: null,
        points: null,
      },
      PIT: {
        win: null,
        points: null,
      },
      SD: {
        win: null,
        points: null,
      },
      SF: {
        win: null,
        points: null,
      },
      SEA: {
        win: null,
        points: null,
      },
      TB: {
        win: null,
        points: null,
      },
      TEN: {
        win: null,
        points: null,
      },
      WAS: {
        win: null,
        points: null,
      },
    },
  },
};

let initWeekResultsState = {
  ARI: {
    win: null,
    points: null,
  },
  ATL: {
    win: null,
    points: null,
  },
  BAL: {
    win: null,
    points: null,
  },
  BUF: {
    win: null,
    points: null,
  },
  CAR: {
    win: null,
    points: null,
  },
  CHI: {
    win: null,
    points: null,
  },
  CIN: {
    win: null,
    points: null,
  },
  CLE: {
    win: null,
    points: null,
  },
  DAL: {
    win: null,
    points: null,
  },
  DEN: {
    win: null,
    points: null,
  },
  DET: {
    win: null,
    points: null,
  },
  GB: {
    win: null,
    points: null,
  },
  HOU: {
    win: null,
    points: null,
  },
  IND: {
    win: null,
    points: null,
  },
  JAX: {
    win: null,
    points: null,
  },
  KC: {
    win: null,
    points: null,
  },
  LA: {
    win: null,
    points: null,
  },
  MIA: {
    win: null,
    points: null,
  },
  MIN: {
    win: null,
    points: null,
  },
  NE: {
    win: null,
    points: null,
  },
  NO: {
    win: null,
    points: null,
  },
  NYG: {
    win: null,
    points: null,
  },
  NYJ: {
    win: null,
    points: null,
  },
  OAK: {
    win: null,
    points: null,
  },
  PHI: {
    win: null,
    points: null,
  },
  PIT: {
    win: null,
    points: null,
  },
  SD: {
    win: null,
    points: null,
  },
  SF: {
    win: null,
    points: null,
  },
  SEA: {
    win: null,
    points: null,
  },
  TB: {
    win: null,
    points: null,
  },
  TEN: {
    win: null,
    points: null,
  },
  WAS: {
    win: null,
    points: null,
  },
};

const GAME_LINE_UP = {
  year: "2021",
  block_1: ["KC", "BUF", "GB", "PIT"],
  block_2: ["TB", "SEA", "NO", "BAL"],
  block_3: ["TEN", "CLE", "IND", "MIA", "LA", "OAK"],
  block_4: ["ARI", "CHI", "NE", "SD", "WAS", "MIN"],
  block_5: ["NYG", "DAL", "SF", "DEN", "DET", "CAR"],
  block_6: ["CIN", "PHI", "HOU", "ATL", "NYJ", "JAX"],
};
const TEAMS = {
  teamsList: [
    {
      code: "ARI",
      name: "Cardinals",
      full_name: "Arizona Cardinals",
    },
    {
      code: "ATL",
      name: "Falcons",
      full_name: "Atlanta Falcons",
    },
    {
      code: "BAL",
      name: "Ravens",
      full_name: "Baltimore Ravens",
    },
    {
      code: "BUF",
      name: "Bills",
      full_name: "Buffalo Bills",
    },
    {
      code: "CAR",
      name: "Panthers",
      full_name: "Carolina Panthers",
    },
    {
      code: "CHI",
      name: "Bears",
      full_name: "Chicago Bears",
    },
    {
      code: "CIN",
      name: "Bengals",
      full_name: "Cincinnati Bengals",
    },
    {
      code: "CLE",
      name: "Browns",
      full_name: "Cleveland Browns",
    },
    {
      code: "DAL",
      name: "Cowboys",
      full_name: "Dallas Cowboys",
    },
    {
      code: "DEN",
      name: "Broncos",
      full_name: "Denver Broncos",
    },
    {
      code: "DET",
      name: "Lions",
      full_name: "Detroit Lions",
    },
    {
      code: "GB",
      name: "Packers",
      full_name: "Green Bay Packers",
    },
    {
      code: "HOU",
      name: "Texans",
      full_name: "Houston Texans",
    },
    {
      code: "IND",
      name: "Colts",
      full_name: "Indianapolis Colts",
    },
    {
      code: "JAX",
      name: "Jaguars",
      full_name: "Jacksonville Jaguars",
    },
    {
      code: "KC",
      name: "Chiefs",
      full_name: "Kansas City Chiefs",
    },
    {
      code: "LA",
      name: "Rams",
      full_name: "Los Angeles Rams",
    },
    {
      code: "MIA",
      name: "Dolphins",
      full_name: "Miami Dolphins",
    },
    {
      code: "MIN",
      name: "Vikings",
      full_name: "Minnesota Vikings",
    },
    {
      code: "NE",
      name: "Patriots",
      full_name: "New England Patriots",
    },
    {
      code: "NO",
      name: "Saints",
      full_name: "New Orleans Saints",
    },
    {
      code: "NYG",
      name: "Giants",
      full_name: "New York Giants",
    },
    {
      code: "NYJ",
      name: "Jets",
      full_name: "New York Jets",
    },
    {
      code: "OAK",
      name: "Raiders",
      full_name: "Oakland Raiders",
    },
    {
      code: "PHI",
      name: "Eagles",
      full_name: "Philadelphia Eagles",
    },
    {
      code: "PIT",
      name: "Steelers",
      full_name: "Pittsburgh Steelers",
    },
    {
      code: "SD",
      name: "Chargers",
      full_name: "San Diego Chargers",
    },
    {
      code: "SF",
      name: "49ers",
      full_name: "San Francisco 49ers",
    },
    {
      code: "SEA",
      name: "Seahawks",
      full_name: "Seattle Seahawks",
    },
    {
      code: "TB",
      name: "Buccaneers",
      full_name: "Tampa Bay Buccaneers",
    },
    {
      code: "TEN",
      name: "Titans",
      full_name: "Tennessee Titans",
    },
    {
      code: "WAS",
      name: "Redskins",
      full_name: "Washington Redskins",
    },
  ],
};

function set_player_weekly_scores(player, year, week_num, weekly_scores) {
  player.picks[year].forEach((pick) => {
    console.log(weekly_scores[pick]);
    player.scores[week_num][pick].win = weekly_scores[pick].win;
    player.scores[week_num][pick].points = weekly_scores[pick].points;
  });

  return {
    ...player,
  };
}

function add_player_scores_by_week(player, year, week_num) {
  let wins = 0;
  let points = 0;

  for (const team in player.scores[week_num]) {
    console.log(`${team}: ${player.scores[week_num][team].win}`);
    if (player.scores[week_num][team].win === true) {
      wins = wins + 1;
    }
    if (player.scores[week_num][team].win === false) {
      wins = wins;
    }
    if (player.scores[week_num][team].win === null) {
      wins = wins;
    }
    points = points + player.scores[week_num][team].points;
  }
  console.log(wins, points);
}

add_player_scores_by_week(player, "2021", "week_2");
// To avoid manual calculations
//let myplay = set_player_weekly_scores(
//player,
//"2021",
//"week_2",
//ResultsState.regular_season.week_2
//);
//console.log(JSON.stringify(myplay, null, 2));
