import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../redux/slices/counterSlice.js"; 
import dataReducer from "../../redux/slices/dataSlice.js"; 

export function createTestStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
      data: dataReducer
    }
  });
}

// Jest test case to ensure the store is created correctly
describe("Redux Store Setup", () => {
  it("should create a store with counter and data reducers", () => {
    const store = createTestStore();
    const state = store.getState();

    expect(state).toHaveProperty("counter");
    expect(state).toHaveProperty("data");
  });
});
