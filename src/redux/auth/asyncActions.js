import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAuth = createAsyncThunk("posts/fetchAuth", async (params) => {
  const { data } = await axios.post("/auth/login", params);
  return data;
});

export const fetchAuthMe = createAsyncThunk("posts/fetchAuthMe", async () => {
  const { data } = await axios.get("/auth/me");
  return data;
});
