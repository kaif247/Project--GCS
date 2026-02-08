import React, { useState } from 'react';
import './Post.css';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showReactions, setShowReactions] = useState(false);

  const totalReactions = Object.values(post.reactions).reduce((a, b) => a + b, 0);

  const reactionEmojis = {
    like: '👍',
    love: '❤️',
    haha: '😄',
    wow: '😮',
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <article className="post-card">
      {/* Post Header */}
      <div className="post-header">
        <div className="post-header-left">
          <img src={post.userAvatar} alt={post.userName} className="post-user-avatar" />
          <div className="post-user-info">
            <h3 className="post-user-name">{post.userName}</h3>
            <p className="post-meta">
              {post.location} • <time>{post.timestamp}</time>
            </p>
          </div>
        </div>
        <button className="post-menu-btn" aria-label="Post options" title="More options">
          ⋯
        </button>
      </div>

      {/* Post Content */}
      <div className="post-content">
        <p className="post-text">
          {post.content}
          {post.hashtags && post.hashtags.length > 0 && (
            <>
              {' '}
              {post.hashtags.map((tag, idx) => (
                <a key={idx} href={`#${tag}`} className="hashtag">
                  {tag}
                </a>
              ))}
            </>
          )}
        </p>
      </div>

      {/* Post Images */}
      {post.images && post.images.length > 0 && (
        <div className={`post-images ${post.images.length === 1 ? 'single' : 'multiple'}`}>
          {post.images.map((img, idx) => (
            <div key={idx} className="post-image-wrapper">
              <img src={img} alt={`Post content ${idx + 1}`} className="post-image" />
            </div>
          ))}
        </div>
      )}

      {/* Post Stats */}
      <div className="post-stats">
        <div className="reactions-summary">
          <div className="reaction-icons">
            {Object.entries(post.reactions).map(([type, count]) => (
              count > 0 && (
                <span key={type} className="reaction-icon" title={type}>
                  {reactionEmojis[type]}
                </span>
              )
            ))}
          </div>
          <span className="reactions-count">{totalReactions}</span>
        </div>

        <div className="interaction-counts">
          <span>
            <a href="#comments">{post.comments} comments</a>
          </span>
          <span>
            <a href="#shares">{post.shares} shares</a>
          </span>
        </div>
      </div>

      {/* Post Actions */}
      <div className="post-actions-bar">
        <button
          className={`action-btn ${liked ? 'liked' : ''}`}
          onClick={handleLike}
          onMouseEnter={() => setShowReactions(true)}
          onMouseLeave={() => setShowReactions(false)}
          aria-label={liked ? 'Unlike' : 'Like'}
        >
          👍
          <span>Like</span>
        </button>

        {/* Reactions Popup */}
        {showReactions && (
          <div className="reactions-popup">
            <button className="reaction-btn" title="Like">👍</button>
            <button className="reaction-btn" title="Love">❤️</button>
            <button className="reaction-btn" title="Haha">😄</button>
            <button className="reaction-btn" title="Wow">😮</button>
            <button className="reaction-btn" title="Sad">😢</button>
            <button className="reaction-btn" title="Angry">😠</button>
          </div>
        )}

        <button className="action-btn" aria-label="Comment">
          💬
          <span>Comment</span>
        </button>

        <button className="action-btn" aria-label="Share">
          ↗️
          <span>Share</span>
        </button>
      </div>
    </article>
  );
};

export default Post;
