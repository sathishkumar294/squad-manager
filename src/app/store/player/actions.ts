import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "..";
import { espnService } from "../../services/espn.service";
import { getSelectedCountry } from "./selectors";
import { playerSlice } from "./slice";

export const {
  loadPlayersForTeam,
  selectPlayer,
  pSelectCountry,
  setPlayersLoading,
} = playerSlice.actions;

export const selectCountry =
  (country: Country) => (dispatch: Dispatch<any>) => {
    dispatch(pSelectCountry({ country }));
    dispatch(fetchPlayersForSelectedCountry());
  };

export const fetchPlayersForSelectedCountry =
  () => async (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(setPlayersLoading());
    const selectedCountry = getSelectedCountry(getState());
    const players = await espnService.getPlayers(selectedCountry?.espnId || 6);
    return dispatch(
      loadPlayersForTeam({ country: selectedCountry?.name!, players })
    );
  };
