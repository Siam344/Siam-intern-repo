import counterReducer, { increment, decrement, reset } from "../../redux/slices/counterSlice.js";
import dataReducer, { fetchData } from "../../redux/slices/dataSlice";


describe("counter reducer", () => {
  it("should return the initial state", () => {
    expect(counterReducer(undefined, {})).toEqual({ value: 0 });
  });

  it("should handle increment", () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });

  it("should handle decrement", () => {
    expect(counterReducer({ value: 2 }, decrement())).toEqual({ value: 1 });
  });

  it("should handle reset", () => {
    expect(counterReducer({ value: 5 }, reset())).toEqual({ value: 0 });
  });
});
