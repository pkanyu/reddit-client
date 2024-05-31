// Test file for App component
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import SearchBar from "../components/SearchBar";

test("renders search bar", () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  const inputElement = screen.getByPlaceholderText(/Search Reddit/i);
  expect(inputElement).toBeInTheDocument();

  const buttonElement = screen.getByText(/Search/i);
  expect(buttonElement).toBeInTheDocument();
});

test("updates input value on change", () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  const inputElement = screen.getByPlaceholderText(/Search Reddit/i);
  fireEvent.change(inputElement, { target: { value: "react" } });

  expect(inputElement.value).toBe("react");
});

test("dispatches fetchSearchResults on form submit", () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  const inputElement = screen.getByPlaceholderText(/Search Reddit/i);
  fireEvent.change(inputElement, { target: { value: "react" } });

  const buttonElement = screen.getByText(/Search/i);
  fireEvent.click(buttonElement);

  // Add more assertions if necessary to check the dispatched action
});
