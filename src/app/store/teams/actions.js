import { teamSlice } from "./slice";

const { addPlayer, removePlayer } = teamSlice.actions;

export const addPlayerAsync = (player, team) => (dispatch) =>
  dispatch(addPlayer({ player, team }));
export const removePlayerAsync = (player, team) => (dispatch) =>
  dispatch(removePlayer({ player, team }));
