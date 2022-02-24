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
          <Post message="Hi, how are you?" likes="5" dislikes="7" />
          <Post message="It's my first post" likes="9" dislikes="2" />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
