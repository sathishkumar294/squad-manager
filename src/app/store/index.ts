import { configureStore } from "@reduxjs/toolkit";
import { fetchPlayersForSelectedCountry, playersReducer } from "./player";
import { teamsReaducer } from "./teams";
const store = configureStore({
  reducer: {
    teams: teamsReaducer,
    players: playersReducer,
  },
});
export default store;

// Initialization
store.dispatch(fetchPlayersForSelectedCountry());

export type AppDispath = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
