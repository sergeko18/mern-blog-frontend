import { createSlice } from "@reduxjs/toolkit";
import { fetchAuth, fetchAuthMe, fetchRegister } from "./asyncActions";

const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },

    [fetchAuth.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },

    [fetchAuth.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },

    [fetchAuthMe.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },

    [fetchAuthMe.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },

    [fetchAuthMe.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },

    [fetchRegister.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },

    [fetchRegister.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },

    [fetchRegister.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },
  },
});

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
