import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchData } from "../../redux/slices/dataSlice.js";
import dataReducer from "../../redux/slices/dataSlice.js";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions for dataSlice", () => {
  it("should handle fetchData.pending state", () => {
    const initialState = { item: null, loading: false, error: null };
    const nextState = dataReducer(initialState, { type: "data/fetchData/pending" });

    expect(nextState.loading).toBe(true);
    expect(nextState.item).toBeNull();
    expect(nextState.error).toBeNull();
  });

  it("should handle fetchData.fulfilled and update state with received data", async () => {
    const store = mockStore({ data: {} });

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ id: 1, title: "Test Todo" })
      })
    );

    await store.dispatch(fetchData());
    const actions = store.getActions();

    expect(actions[0].type).toBe("data/fetchData/pending");
    expect(actions[1].type).toBe("data/fetchData/fulfilled");

    const nextState = dataReducer({ item: null, loading: true, error: null }, actions[1]);

    expect(nextState.loading).toBe(false);
    expect(nextState.item).toEqual({ id: 1, title: "Test Todo" });

    global.fetch.mockRestore();
  });

  it("should handle fetchData.rejected and set error message", async () => {
    const store = mockStore({ data: {} });

    global.fetch = jest.fn(() => Promise.reject(new Error("Fetch error")));

    await store.dispatch(fetchData());
    const actions = store.getActions();

    expect(actions[0].type).toBe("data/fetchData/pending");
    expect(actions[1].type).toBe("data/fetchData/rejected");

    const nextState = dataReducer({ item: null, loading: true, error: null }, actions[1]);

    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe("Fetch error");

    global.fetch.mockRestore();
  });
});
