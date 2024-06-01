import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const handleUpvote = () => {
    // Implement upvote logic
  };

  const handleDownvote = () => {
    // Implement downvote logic
  };

  const renderMedia = () => {
    if (post.is_video && post.media && post.media.reddit_video) {
      return (
        <video controls>
          <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    if (post.preview && post.preview.images && post.preview.images[0]) {
      return <img src={post.preview.images[0].source.url} alt={post.title} />;
    }

    return null;
  };

  return (
    <div className="post">
      <h2>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      {renderMedia()}
      <p>{post.selftext}</p>
      <div className="post-actions">
        <button onClick={handleUpvote} className="upvote">
          Upvote
        </button>
        <button onClick={handleDownvote} className="downvote">
          Downvote
        </button>
      </div>
    </div>
  );
};

export default Post;
