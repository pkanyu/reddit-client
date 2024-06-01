import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostComments } from "./redditSlice";

const RedditPostDetail = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.reddit.posts.find((post) => post.id === postId)
  );
  const comments = useSelector((state) => state.reddit.comments[postId] || []);
  const commentsStatus = useSelector((state) => state.reddit.commentsStatus);

  useEffect(() => {
    if (commentsStatus === "idle") {
      dispatch(fetchPostComments(postId));
    }
  }, [commentsStatus, dispatch, postId]);

  const renderMedia = () => {
    if (post.is_video && post.media && post.media.reddit_video) {
      return (
        <video className="post" controls>
          <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    if (post.preview && post.preview.images && post.preview.images[0]) {
      return (
        <img
          className="post"
          src={post.preview.images[0].source.url.replace("&amp;", "&")}
          alt={post.title}
        />
      );
    }

    if (
      post.thumbnail &&
      post.thumbnail !== "self" &&
      post.thumbnail !== "default"
    ) {
      return (
        <img
          className="post"
          src={post.thumbnail.replace("&amp;", "&")}
          alt={post.title}
        />
      );
    }

    return null;
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      {renderMedia()}
      <p className="post">{post.selftext}</p>
      <div>
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
      <h3>Comments</h3>
      {commentsStatus === "loading" && <div>Loading comments...</div>}
      {commentsStatus === "succeeded" && (
        <ul className="comments">
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
      {commentsStatus === "failed" && <div>Failed to load comments</div>}
    </div>
  );
};

export default RedditPostDetail;
