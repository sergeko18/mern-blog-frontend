import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { postReducer } from "./posts/slice";

const store = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
  },
});

export default store;
