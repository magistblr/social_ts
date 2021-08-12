import React from 'react';
import { ProfilePageType, ProfileType } from '../../../redux/profileReducer';
import Spinner from '../../Spinner/Spinner';
import s from './ProfileInfo.module.css'

type ProfileInfoType = {
  profilePage: ProfilePageType
}


const ProfileInfo: React.FC<ProfileInfoType> = ({profilePage}) => {

  debugger

  if (profilePage.profile === null) {
    return <Spinner/>
  } else

  return (
    <div className={s.user}>
    <img className={`${s.user} img`} src={ profilePage.profile.photos.large} alt="avatar" />
    <div className="content__user-wrapper">
      <div className={s.user_name}>{profilePage.profile.fullName}</div>
      <div className="content__user-description">
        <ul className={s.user_description_list}>
          <li>info</li>
          <li>About me: <span>{profilePage.profile.aboutMe}</span></li>
          <li>Contacts:
            <li>Facebook: <span>{profilePage.profile.contacts.facebook}</span></li>
            <li>Website: {profilePage.profile.contacts.website}</li>
            <li>VK: {profilePage.profile.contacts.vk}</li>
            <li>Twitter: {profilePage.profile.contacts.twitter}</li>
            <li>Instagram: {profilePage.profile.contacts.instagram}</li>
            <li>Youtube: {profilePage.profile.contacts.youtube}</li>
            <li>Looking for a Job: {profilePage.profile.lookingForAJob ? 'Yes' : 'No'}</li>
            <li>Github: {profilePage.profile.contacts.github}</li>
            <li>Job description: {profilePage.profile.lookingForAJobDescription}</li>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ProfileInfo;
