import { createSlice } from "@reduxjs/toolkit";
import { TEAMS } from "../../../constants/teams";

export const teamSlice = createSlice({
  name: "teams",
  initialState: TEAMS,
  reducers: {
    addPlayer: (state, { payload: { player, team } }) => {
      const { teams } = state;
      const iTeam = teams.find((t) => t.name === team);
      iTeam.players.push(player);
      return { ...state, teams };
    },
    removePlayer: (state, { payload: { player, team } }) => {
      const { teams } = state;
      const iTeam = teams.find((t) => t.name === team);
      const idx = iTeam.players.findIndex((p) => p.name === player);
      if (idx > -1) iTeam.players.splice(idx, 1);
      return { ...state, teams };
    },
  },
});
