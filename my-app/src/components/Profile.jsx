import React from 'react';
import p from './Profile.module.css';

const Profile = () => {
  return (
    <div className={p.content}>
      <div>
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
          width={45}
        />
      </div>
      <div>
        My POSTS
        <div>New Post</div>
        <div className={p.posts}>
          <div className={p.item}>Post 1</div>
          <div className={p.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
