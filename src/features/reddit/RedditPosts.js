import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRedditData } from "./redditSlice";
import PostList from "../../components/PostList";

const RedditPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.reddit.posts);
  const status = useSelector((state) => state.reddit.status);
  const error = useSelector((state) => state.reddit.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRedditData());
    }
  }, [status, dispatch]);

  let content;
  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    content = <PostList posts={posts} />;
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h1>Reddit Posts</h1>
      {content}
    </div>
  );
};

export default RedditPosts;
