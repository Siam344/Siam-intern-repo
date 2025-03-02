import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; // ✅ Import this to enable `toBeInTheDocument()`
import axios from "axios";
import ApiComponent from "../ApiComponent";

jest.mock("axios"); // ✅ Mock axios

test("fetches and displays data", async () => {
  axios.get.mockResolvedValueOnce({ data: { title: "Mocked Title" } });

  render(<ApiComponent />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument(); // ✅ Fixes the query

  await waitFor(() => 
    expect(screen.getByTestId("data-message")).toHaveTextContent("Mocked Title")
  );
});

test("handles API error", async () => {
  axios.get.mockRejectedValueOnce(new Error("API Error"));

  render(<ApiComponent />);

  await waitFor(() =>
    expect(screen.getByTestId("error-message")).toHaveTextContent("Error: API Error")
  );
});
