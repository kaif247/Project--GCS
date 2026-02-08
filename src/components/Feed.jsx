import React from 'react';
import { posts } from '../data/facebookData';
import Stories from './Stories';
import CreatePost from './CreatePost';
import Post from './Post';
import './Feed.css';

const Feed = () => {
  return (
    <div className="feed-container">
      <div className="feed-content">
        {/* Stories Section */}
        <Stories />

        {/* Create Post */}
        <CreatePost />

        {/* Posts Feed */}
        <div className="posts-list">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="load-more-container">
          <button className="load-more-btn">Load More Posts</button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
