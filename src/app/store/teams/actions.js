import { teamSlice } from "./slice";

const { addPlayer, removePlayer } = teamSlice.actions;

export const addPlayerAsync = (player, team) => (dispatch) =>
  dispatch(addPlayer({ payload: { player, team } }));
export const removePlayerAsync = (player, team) => (dispatch) =>
  dispatch(removePlayer({ payload: { player, team } }));
