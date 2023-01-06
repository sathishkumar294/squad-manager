import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "players",
  initialState: [],
  reducers: {
    loadPlayersForTeam: (allPlayers, { payload: { country, players } }) => {
      return {
        players: [
          ...allPlayers.filter((p) => p.country !== country),
          ...players,
        ],
      };
    },
  },
});
