import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ESPNService } from "../../services/espn.service";
import { showMessage } from "../teams";
import { getSelectedCountry } from "./selectors";
import { playerSlice } from "./slice";

export const {
  loadPlayersForTeam,
  selectPlayer,
  pSelectCountry,
  setPlayersLoading,
  cancelLoadingPlayers
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
    const players = await ESPNService.getPlayers(selectedCountry?.espnId || 6);
    if (players.length > 0) {
      return dispatch(
        loadPlayersForTeam({ country: selectedCountry?.name!, players })
      );
    }
    else dispatch(cancelPlayerLoadingOnError());
  };

const cancelPlayerLoadingOnError = () => (dispatch: Dispatch<any>) => {
  dispatch(cancelLoadingPlayers());
  dispatch(showMessage({ message: 'Unable to fetch players for the selected team', type: 'error' }));
}