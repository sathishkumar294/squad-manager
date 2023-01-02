import { teamSlice } from "./slice";

const { addPlayer, removePlayer, removeAllPlayers } = teamSlice.actions;

export const addPlayerAsync = (player, team) => (dispatch) =>
  dispatch(addPlayer({ player, team }));
export const removePlayerAsync = (player, team) => (dispatch) =>
  dispatch(removePlayer({ player, team }));
export const removeAllPlayersAsync = (team) => (dispatch) =>
  dispatch(removeAllPlayers({ team }));
