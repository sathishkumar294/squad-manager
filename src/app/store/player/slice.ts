import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayersState {
  players: Player[];
  selectedPlayer?: Player;
  selectedCountry?: Country;
  loadingPlayers?: boolean;
}

export const playerSlice = createSlice({
  name: "players",
  initialState: {
    players: [],
    loadingPlayers: false,
  } as PlayersState,
  reducers: {
    loadPlayersForTeam: (
      state,
      {
        payload: { country, players },
      }: PayloadAction<{ country: string; players: Player[] }>
    ) => {
      return {
        ...state,
        players,
        loadingPlayers: false,
      };
    },
    selectPlayer: (
      state,
      { payload: { player } }: PayloadAction<{ player: Player }>
    ) => {
      // Toggle selection if same player, else select another player
      state.selectedPlayer =
        state.selectedPlayer?.name === player.name ? undefined : player;
    },
    pSelectCountry: (
      state,
      { payload: { country } }: PayloadAction<{ country: Country }>
    ) => {
      state.selectedCountry = country;
    },
    setPlayersLoading: (state) => {
      state.loadingPlayers = true;
    },
  },
});
