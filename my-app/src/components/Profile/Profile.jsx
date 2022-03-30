import React from 'react';
import p from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/preloader/Preloader';

const Profile = (props) => {

  if (!props.profile) { 
    return <Preloader/>
  }

  return (
    <div className={p.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer
      />
    </div>
  );
};

export default Profile;
