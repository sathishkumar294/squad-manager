import { configureStore } from "@reduxjs/toolkit";
import { playersReducer } from "./player";
import { teamsReaducer } from "./teams";
const store = configureStore({
  reducer: {
    teams: teamsReaducer,
    players: playersReducer,
  },
});
export default store;

export type AppDispath = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
