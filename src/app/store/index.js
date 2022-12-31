import { configureStore } from "@reduxjs/toolkit";
import { teamsReaducer } from "./teams";
const store = configureStore({
  reducer: {
    teams: teamsReaducer,
  },
});
export default store;
