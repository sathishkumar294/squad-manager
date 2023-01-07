import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TEAMS } from "../../../constants/teams";

interface TeamState {
  teams: Team[];
  selectedTeam?: string;
}

export const teamSlice = createSlice({
  name: "teams",
  initialState: { teams: TEAMS } as TeamState,
  reducers: {
    addPlayer: (
      state,
      {
        payload: { player, team },
      }: PayloadAction<{ player: Player; team: string }>
    ) => {
      console.log({ event: "addPlayer", player, team });
      state.teams.forEach((t) => {
        const idx = t.players.findIndex((p) => p.name === player.name);
        if (idx > -1) t.players.splice(idx, 1);
      });
      const iTeam = state.teams.find((t) => t.name === team);
      iTeam?.players.push(player);
      return state;
    },
    removePlayer: (
      state,
      {
        payload: { player, team },
      }: PayloadAction<{ player: string; team: string }>
    ) => {
      const iTeam = state.teams.find((t) => t.name === team);
      const idx = iTeam?.players.findIndex((p) => p.name === player) || -1;
      if (idx > -1) iTeam?.players.splice(idx, 1);
      return state;
    },
    removeAllPlayers: (
      state,
      { payload: { team } }: PayloadAction<{ team: string }>
    ) => {
      const iTeam = state.teams.find((t) => t.name === team);
      iTeam?.players.splice(0, iTeam.players.length);
      return state;
    },
    removeAllPlayersOfType: (
      state,
      { payload: { team, type } }: PayloadAction<{ team: string; type: string }>
    ) => {
      const iTeam = state.teams.find((t) => t.name === team);
      iTeam?.players.splice(
        0,
        iTeam?.players.length,
        ...iTeam.players.filter((p) => p.type !== type)
      );
      return state;
    },
    removeAllPlayersOfCountry: (
      state,
      {
        payload: { team, country },
      }: PayloadAction<{ team: string; country: string }>
    ) => {
      const iTeam = state.teams.find((t) => t.name === team);
      iTeam?.players.splice(
        0,
        iTeam.players.length,
        ...iTeam.players.filter((p) => p.country !== country)
      );
      return state;
    },
    selectTeam: (
      state,
      { payload: { team } }: PayloadAction<{ team?: Team }>
    ) => {
      state.selectedTeam = team?.name;
    },
  },
});
