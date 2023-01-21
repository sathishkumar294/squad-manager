import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoticeType } from "antd/es/message/interface";
import countries from "../../../constants/countries";
import playerTypes from "../../../constants/playerTypes";
import { TEAMS } from "../../../constants/teams";
import appLog from "../../../utils/log";

interface TeamState {
  teams: Team[];
  selectedTeam?: string;
  message?: AppMessage;
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
      appLog({ event: "addPlayer", player, team });
      state.teams.forEach((t) => {
        const idx = t.players.findIndex((p) => p.name === player.name);
        if (idx > -1) t.players.splice(idx, 1);
      });
      const iTeam = state.teams.find((t) => t.name === team);
      iTeam?.players.push(player);

      // Check the national player limit
      const countryLimit =
        countries.find((c) => c.name === player.country)?.maxAllowed || 1000;
      let isLimitExceed =
        iTeam?.players.filter((p) => p.country === player.country).length! >
        countryLimit;
      if (isLimitExceed) {
        state.message = {
          message: `Country limit exceeded for ${player.country}. Max allowed: ${countryLimit}`,
          type: "warning",
        };
      }

      // Check the player type limit
      const playerTypeLimit =
        playerTypes.find((t) => t.type === player.type)?.maxAllowed || 1000;
      isLimitExceed =
        iTeam?.players.filter((p) => p.type === player.type).length! >
        playerTypeLimit;
      if (isLimitExceed) {
        state.message = {
          message: `Player type limit exceeded for ${player.type}. Max allowed: ${playerTypeLimit}`,
          type: "warning",
        };
      }

      return state;
    },
    removePlayer: (
      state,
      {
        payload: { player, team },
      }: PayloadAction<{ player: string; team: string }>
    ) => {
      const iTeam = state.teams.find((t) => t.name === team);
      const idx = iTeam?.players.findIndex((p) => p.name === player) ?? -1;
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
    showMessage: (
      state,
      {
        payload: { message, type },
      }: PayloadAction<{ message: string; type?: NoticeType }>
    ) => {
      state.message = { message, type } as AppMessage;
    },
  },
});
