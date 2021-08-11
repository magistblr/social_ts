import React from 'react';
import { ProfilePageType, ProfileType } from '../../../redux/profileReducer';
import Spinner from '../../Spinner/Spinner';
import s from './ProfileInfo.module.css'

type ProfileInfoType = {
  fullName: string | undefined
  profile: ProfileType | null
}


const ProfileInfo: React.FC<ProfileInfoType> = ({profile, fullName}) => {

  console.log(profile);

  if (profile === null) {
    return <Spinner/>
  } else

console.log(profile);

  return (
    <div className={s.user}>
    <img className={`${s.user} img`} src={ profile.photos.large} alt="avatar" />
    <div className="content__user-wrapper">
      <div className={s.user_name}>{fullName}</div>
      <div className="content__user-description">
        <ul className={s.user_description_list}>
          <li>info</li>
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
