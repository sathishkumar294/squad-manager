import { playerSlice } from "./slice";

const { loadPlayersForTeam } = playerSlice.actions;

export const loadPlayersForTeamAsync = (country, players) => (dispatch) =>
  dispatch(loadPlayersForTeam({ country, players }));
