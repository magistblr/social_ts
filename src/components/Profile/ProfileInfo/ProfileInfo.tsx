import React, { ChangeEvent } from 'react';
import { ProfileType } from '../../../redux/profileReducer';
import Spinner from '../../Spinner/Spinner';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/img/users.png'

import s from './ProfileInfo.module.css'


type ProfileInfoPropsType = {
  profile: ProfileType
  status: string
  updateUserStatus: (userId: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {

  console.log(profile.userId );


  if (!profile) {
    return <Spinner/>
  }

  const onAvatarSelected = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }

  }

  return (
    <div className={s.user}>
      <div className={s.image}>
        <img className={s.user_img} src={ profile.photos.large || userPhoto} alt="avatar" />
        {isOwner &&
                    <div className={s.wrapper_ava}>
                      <label htmlFor="file-input" className={s.ava}>
                        <input id="file-input" type={"file"} onChange={onAvatarSelected}/>
                      </label>
                    </div>}
      </div>
      <div className="content__user-wrapper">
        <div className={s.user_name}>{profile.fullName}</div>
        <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
        <div className="content__user-description">
          <ul className={s.user_description_list}>
            <li>About me: <span>{profile.aboutMe}</span></li>
            <li>Contacts:
              <li>Facebook: <span>{profile.contacts.facebook}</span></li>
              <li>Website: {profile.contacts.website}</li>
              <li>VK: {profile.contacts.vk}</li>
              <li>Twitter: {profile.contacts.twitter}</li>
              <li>Instagram: {profile.contacts.instagram}</li>
              <li>Youtube: {profile.contacts.youtube}</li>
              <li>Looking for a Job: {profile.lookingForAJob ? 'Yes' : 'No'}</li>
              <li>Github: {profile.contacts.github}</li>
              <li>Job description: {profile.lookingForAJobDescription}</li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
