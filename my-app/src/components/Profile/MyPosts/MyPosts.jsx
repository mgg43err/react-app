import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={p.content}>
      <div>
        My POSTS
        <div>
          New Post
          <textarea />
          <button>Add Post</button>
          <button>Remove</button>;
        </div>
        <div className={p.posts}>
          <Post message="Hi, how are you?" />
          <Post message="It's my first post" />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
