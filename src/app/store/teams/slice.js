import { createSlice } from "@reduxjs/toolkit";
import { TEAMS } from "../../../constants/teams";

export const teamSlice = createSlice({
  name: "teams",
  initialState: TEAMS,
  reducers: {
    addPlayer: (state, { payload: { player, team } }) => {
      console.log({ event: "addPlayer", player, team });
      const teams = state;
      const iTeam = teams.find((t) => t.name === team);
      iTeam.players.push(player);
      return teams;
    },
    removePlayer: (state, { payload: { player, team } }) => {
      const teams = state;
      const iTeam = teams.find((t) => t.name === team);
      const idx = iTeam.players.findIndex((p) => p.name === player);
      if (idx > -1) iTeam.players.splice(idx, 1);
      return teams;
    },
    removeAllPlayers: (state, { payload: { team } }) => {
      const teams = state;
      const iTeam = teams.find((t) => t.name === team);
      iTeam.players = [];
      return teams;
    },
    removeAllPlayersOfType: (state, { payload: { team, type } }) => {
      const teams = state;
      const iTeam = teams.find((t) => t.name === team);
      iTeam.players = iTeam.players.filter((p) => p.type !== type);
      return teams;
    },
    removeAllPlayersOfCountry: (state, { payload: { team, country } }) => {
      const teams = state;
      const iTeam = teams.find((t) => t.name === team);
      iTeam.players = iTeam.players.filter((p) => p.country !== country);
      return teams;
    },
  },
});
