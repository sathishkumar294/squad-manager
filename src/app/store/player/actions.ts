import { Dispatch } from "@reduxjs/toolkit";
import { playerSlice } from "./slice";

const { loadPlayersForTeam } = playerSlice.actions;

export const loadPlayersForTeamAsync =
  (country: string, players: Player[]) => (dispatch: Dispatch<any>) =>
    dispatch(loadPlayersForTeam({ country, players }));
