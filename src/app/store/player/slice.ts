import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "players",
  initialState: [] as Player[],
  reducers: {
    loadPlayersForTeam: (
      allPlayers,
      {
        payload: { country, players },
      }: PayloadAction<{ country: string; players: Player[] }>
    ) => {
      return [...allPlayers.filter((p) => p.country !== country), ...players];
    },
  },
});
