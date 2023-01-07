import { RootState } from "..";

export const getPlayers = (state: RootState) => state.players.players;
export const getSelectedPlayer = (state: RootState) =>
  state.players.selectedPlayer;

export const getSelectedCountry = (state: RootState) =>
  state.players.selectedCountry;
