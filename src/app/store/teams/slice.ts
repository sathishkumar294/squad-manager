import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TEAMS } from "../../../constants/teams";

export const teamSlice = createSlice({
  name: "teams",
  initialState: TEAMS,
  reducers: {
    addPlayer: (
      teams,
      {
        payload: { player, team },
      }: PayloadAction<{ player: Player; team: string }>
    ) => {
      console.log({ event: "addPlayer", player, team });
      teams.forEach((t) => {
        const idx = t.players.findIndex((p) => p.name === player.name);
        if (idx > -1) t.players.splice(idx, 1);
      });
      const iTeam = teams.find((t) => t.name === team);
      iTeam?.players.push(player);
      return teams;
    },
    removePlayer: (
      teams,
      {
        payload: { player, team },
      }: PayloadAction<{ player: string; team: string }>
    ) => {
      const iTeam = teams.find((t) => t.name === team);
      const idx = iTeam?.players.findIndex((p) => p.name === player) || -1;
      if (idx > -1) iTeam?.players.splice(idx, 1);
      return teams;
    },
    removeAllPlayers: (
      teams,
      { payload: { team } }: PayloadAction<{ team: string }>
    ) => {
      const iTeam = teams.find((t) => t.name === team);
      iTeam?.players.splice(0, iTeam.players.length);
      return teams;
    },
    removeAllPlayersOfType: (
      teams,
      { payload: { team, type } }: PayloadAction<{ team: string; type: string }>
    ) => {
      const iTeam = teams.find((t) => t.name === team);
      iTeam?.players.splice(
        0,
        iTeam?.players.length,
        ...iTeam.players.filter((p) => p.type !== type)
      );
      return teams;
    },
    removeAllPlayersOfCountry: (
      teams,
      {
        payload: { team, country },
      }: PayloadAction<{ team: string; country: string }>
    ) => {
      const iTeam = teams.find((t) => t.name === team);
      iTeam?.players.splice(
        0,
        iTeam.players.length,
        ...iTeam.players.filter((p) => p.country !== country)
      );
      return teams;
    },
  },
});
