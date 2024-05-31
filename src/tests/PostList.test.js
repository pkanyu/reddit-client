import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PostList from "../components/PostList";

test("renders PostList component with posts", () => {
  const posts = [
    { id: "1", title: "First Post", selftext: "This is the first post" },
    { id: "2", title: "Second Post", selftext: "This is the second post" },
  ];

  const { getAllByText } = render(
    <Router>
      <PostList posts={posts} />
    </Router>
  );

  expect(getAllByText(/First Post/i).length).toBeGreaterThan(0);
  expect(getAllByText(/Second Post/i).length).toBeGreaterThan(0);
});
