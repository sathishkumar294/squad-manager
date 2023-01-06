import { teamSlice } from "./slice";

export const {
  addPlayer,
  removePlayer,
  removeAllPlayers,
  removeAllPlayersOfType,
  removeAllPlayersOfCountry,
} = teamSlice.actions;
