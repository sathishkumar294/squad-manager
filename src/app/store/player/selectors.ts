import { RootState } from "..";

const getPlayerState = (state: RootState) => state.players;

export const getPlayers = (state: RootState) => getPlayerState(state).players;
export const getSelectedPlayer = (state: RootState) =>
  getPlayers(state).find(
    (p) => p.name === getPlayerState(state).selectedPlayer
  );

export const getSelectedCountry = (state: RootState) =>
  getPlayerState(state).selectedCountry;

export const isPlayersLoading = (state: RootState) =>
  getPlayerState(state).loadingPlayers || false;
