import { act } from "react"; 
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MessageComponent from "../MessageComponent";

test("renders the message correctly", () => {
  render(<MessageComponent message="Hello, Jest!" />);
  expect(screen.getByTestId("message")).toHaveTextContent("Hello, Jest!");
});

test("updates message when button is clicked", () => {
  render(<MessageComponent message="Hello, Jest!" />);
  const button = screen.getByTestId("button");
  fireEvent.click(button);
  expect(screen.getByTestId("message")).toHaveTextContent("Clicked!");
});
