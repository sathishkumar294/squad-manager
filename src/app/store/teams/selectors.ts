import { RootState } from "..";

const getTeamState = (state: RootState) => state.teams;
export const allTeams = (state: RootState) => getTeamState(state).teams;
export const getSelectedTeam = (state: RootState) =>
  allTeams(state).find((t) => t.name === getTeamState(state).selectedTeam);
