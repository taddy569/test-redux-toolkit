import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { askType } from "mock-data/ask";
import { useAppDispatch, useAppSelector } from "hooks";
import { AppThunk } from "redux/store";

const initialState: askType = [];

export const askSlice = createSlice({
  name: "asks",
  initialState,
  reducers: {
    setValues: (state, action) => action.payload,
  },
});

export const { actions, reducer } = askSlice;
export const { setValues } = actions;

export const fetchAsk = (): AppThunk => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "https://hacker-news.firebaseio.com/v0/askstories.json"
      );
      dispatch(setValues(res.data));
    } catch {
      console.log("error");
    }
  };
};
