import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice.js";
import dataReducer from "./slices/dataSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer
  }
});

export default store;
