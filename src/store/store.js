import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./features/detailSlice";
import gameReducer from "./features/gamesSlice";
import searchReducer from "./features/searchSlice";

const store = configureStore({
  reducer: { detail: detailSlice, games: gameReducer, search: searchReducer },
});

export default store;
