import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import { MyPostsContainer } from '../Profile/MyPosts/MyPostsContainer';
import { ProfilePageType, ProfileType } from '../../redux/profileReducer';



const Profile: React.FC<ProfilePageType> = (props) => {

  return (
    <div className={s.wrapper}>
      <header className="content__header">
        <img
          className={s.content_img}
          src="https://static9.depositphotos.com/1656823/1156/i/950/depositphotos_11563134-stock-photo-blue-water.jpg"
          alt="background"
        />
      </header>

      <div className={s.content}>
        <ProfileInfo profilePage={props}/>

        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;
