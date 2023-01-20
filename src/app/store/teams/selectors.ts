import { RootState } from "..";
import countries from "../../../constants/countries";
import playerTypes from "../../../constants/playerTypes";

const getTeamState = (state: RootState) => state.teams;
export const allTeams = (state: RootState) => getTeamState(state).teams;
export const getSelectedTeam = (state: RootState) =>
  allTeams(state).find((t) => t.name === getTeamState(state).selectedTeam);

export const getTeamForPlayer = (player: Player) => (state: RootState) =>
  allTeams(state).find((t) => t.players.some((p) => p.name === player.name));

export const getMessage = (state: RootState) => getTeamState(state).message;

export const teamCompositionStatus = (state: RootState) => {
  const teams = allTeams(state) || [];
  return teams
    .map((team) => {
      const players = team.players;
      const countryStatus = countries
        .map((c) => ({
          max: c.maxAllowed,
          actual: players.filter((p) => p.country === c.name).length,
          min: c.minRequired,
        }))
        .every(({ max, min, actual }) => actual <= max);
      const roleStatus = playerTypes
        .map((t) => ({
          max: t.maxAllowed,
          actual: players.filter((p) => p.type === t.type).length,
          min: t.minRequired,
        }))
        .every(({ max, min, actual }) => actual <= max);
      console.log({ team: team.name, countryStatus, roleStatus });
      return { team: team.name, countryStatus, roleStatus };
    })
    .reduce(
      (result, { team, countryStatus, roleStatus }) => ({
        ...result,
        [team]: countryStatus && roleStatus,
      }),
      {}
    ) as { [team: string]: boolean };
};
