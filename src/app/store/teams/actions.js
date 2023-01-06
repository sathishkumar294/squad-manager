import { teamSlice } from "./slice";

const {
  addPlayer,
  removePlayer,
  removeAllPlayers,
  removeAllPlayersOfType,
  removeAllPlayersOfCountry,
} = teamSlice.actions;

export const addPlayerAsync = (player, team) => (dispatch) =>
  dispatch(addPlayer({ player, team }));
export const removePlayerAsync = (player, team) => (dispatch) =>
  dispatch(removePlayer({ player, team }));
export const removeAllPlayersAsync = (team) => (dispatch) =>
  dispatch(removeAllPlayers({ team }));
export const removePlayerOfTypeAsync = (player, type) => (dispatch) =>
  dispatch(removeAllPlayersOfType({ player, type }));
export const removePlayerOfCountryAsync = (player, country) => (dispatch) =>
  dispatch(removeAllPlayersOfCountry({ player, team: country }));
