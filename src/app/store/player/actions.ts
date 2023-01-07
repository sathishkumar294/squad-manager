import { Dispatch } from "@reduxjs/toolkit";
import { espnService } from "../../services/espn.service";
import { playerSlice } from "./slice";

export const { loadPlayersForTeam, selectPlayer } = playerSlice.actions;

export const fetchPlayersForCountry =
  (country: Country) => async (dispatch: Dispatch<any>) => {
    const players = await espnService.getPlayers(country.espnId);
    return dispatch(loadPlayersForTeam({ country: country.name, players }));
  };
