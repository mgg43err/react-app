import React from 'react';
import p from './Post.module.css';

const Post = props => {
  return (
    <div className={p.item}>
      <div className={p.itemPost}>
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          alt="avatar"
        />
        <p>{props.message}</p>
      </div>
      <div className={p.likes}>
        <div><span>likes: {props.likes}</span></div>
        <div><span>dislikes: {props.dislikes}</span></div>
      </div>
    </div>
  );
};

export default Post;
