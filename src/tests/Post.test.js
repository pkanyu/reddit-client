import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Post from "../components/Post";

test("renders Post component", () => {
  const post = {
    id: "1",
    title: "Test Post",
    selftext: "This is a test post",
  };

  const { getByText, getAllByText } = render(
    <Router>
      <Post post={post} />
    </Router>
  );

  expect(getAllByText(/Test Post/i).length).toBeGreaterThan(0);
  expect(getByText(/This is a test post/i)).toBeInTheDocument();
});
