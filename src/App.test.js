import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders search bar and category filter", () => {
  render(<App />);
  const searchBarElement = screen.getByPlaceholderText(/Search Reddit/i);
  expect(searchBarElement).toBeInTheDocument();

  const categoryFilterElement = screen.getByText(/popular/i);
  expect(categoryFilterElement).toBeInTheDocument();
});
