import React from 'react';
import p from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  debugger
  return (
    <div className={p.content}>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
      />
    </div>
  );
};

export default Profile;
