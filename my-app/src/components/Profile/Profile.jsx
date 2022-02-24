import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={p.content}>
      <div className={p.image}>
        <img
          src="https://images.hdqwalls.com/download/anime-hoods-neko-ears-4k-uh-2560x1080.jpg"
          alt="anime"
        />
      </div>
      <div className={p.description}>
        ava + description
        <img
          src="https://vscode.github.com/assets/img/github-vscode-icon.svg"
          alt="gitlogo"
        />
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
