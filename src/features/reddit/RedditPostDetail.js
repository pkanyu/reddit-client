//Component to display detailed view of a post
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RedditPostDetail = () => {
  const { postId } = useParams();
  const post = useSelector((state) =>
    state.reddit.posts.find((post) => post.id === postId)
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.selftext}</p>
      <div>
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default RedditPostDetail;
