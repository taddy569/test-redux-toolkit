import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import { asksReducer } from "./slices";

const store = configureStore({
  reducer: {
    asks: asksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export default store;
