import React from 'react';
import p from './Post.module.css';

const Post = () => {
  return (
    <div className={p.item}>
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
        alt="avatar"
      />
      Post 1
      <div className={p.likes}>
        <div><span>like</span></div>
        <div><span>dislike</span></div>
      </div>
    </div>
  );
};

export default Post;
