import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayersState {
  players: Player[];
  selectedPlayer?: Player;
}

export const playerSlice = createSlice({
  name: "players",
  initialState: {
    players: [],
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
        players: [
          ...state.players.filter((p) => p.country !== country),
          ...players,
        ],
      };
    },
    selectPlayer: (
      state,
      { payload: { player } }: PayloadAction<{ player: Player }>
    ) => {
      return {
        ...state,
        selectedPlayer: !!state.selectedPlayer ? undefined : player,
      };
    },
  },
});
