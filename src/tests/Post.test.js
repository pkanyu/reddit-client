// Test file for Post component
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Post from "../components/Post";

test("renders Post component", () => {
  const post = {
    id: "1",
    title: "Test Post",
    selftext: "This is a test post",
  };

  const { getByText } = render(
    <Router>
      <Post post={post} />
    </Router>
  );

  expect(getByText(/Test Post/i)).toBeInTheDocument();
  expect(getByText(/This is a test post/i)).toBeInTheDocument();
});
