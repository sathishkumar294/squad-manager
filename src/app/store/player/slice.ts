import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "players",
  initialState: [] as Player[],
  reducers: {
    loadPlayersForTeam: (
      allPlayers,
      {
        payload: { country, players },
      }: Payload<{ country: string; players: Player[] }>
    ) => {
      return [...allPlayers.filter((p) => p.country !== country), ...players];
    },
  },
});
