import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import { MyPostsContainer } from '../Profile/MyPosts/MyPostsContainer';
import { ProfileType } from '../../redux/profileReducer';

type ProfilePropsType = {
  profile: ProfileType
  status: string
  updateUserStatus: (userId: string) => void
  isOwner: boolean
  savePhoto: (photo: File) => void
}

const Profile: React.FC<ProfilePropsType> = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {


  return (
    <div className={s.wrapper}>
      <header className="content__header">
        {/* <img
          className={s.content_img}
          src="https://static9.depositphotos.com/1656823/1156/i/950/depositphotos_11563134-stock-photo-blue-water.jpg"
          alt="background"
        /> */}
      </header>

      <div className={s.content}>
        <ProfileInfo  profile={profile}
                      status={status}
                      updateUserStatus={updateUserStatus}
                      savePhoto={savePhoto}
                      isOwner={isOwner}
                      />

        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;
