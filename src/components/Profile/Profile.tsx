import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import { MyPostsContainer } from '../Profile/MyPosts/MyPostsContainer';
import { ProfilePageType, ProfileType } from '../../redux/profileReducer';
import { useDispatch, useSelector } from 'react-redux';

type ProfilePropsType = {
  profile: ProfileType
  status: string
  updateUserStatus: (userId: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({profile, status, updateUserStatus}) => {


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
        <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>

        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;
