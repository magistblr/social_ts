import React from 'react';
import Spinner from '../../Spinner/Spinner';
import s from './ProfileInfo.module.css'

export type ProfileInfoType = {
  profile: any
}

const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
  if (!props.profile) {
    return <Spinner/>
  }

  console.log(props);
  
  return (
    <div className={s.user}>
    <img className={`${s.user} img`} src={props.profile.photos.large} alt="avatar" />
    <div className="content__user-wrapper">
      <div className={s.user_name}>{props.profile.fullName}</div>
      <div className="content__user-description">
        <ul className={s.user_description_list}>
          <li>info</li>
          <li>About me: <span>{props.profile.aboutMe}</span></li>
          <li>Contacts: 
            <li>Facebook: <span>{props.profile.contacts.facebook}</span></li>
            <li>Website: {props.profile.contacts.website}</li>
            <li>VK: {props.profile.contacts.vk}</li>
            <li>Twitter: {props.profile.contacts.twitter}</li>
            <li>Instagram: {props.profile.contacts.instagram}</li>
            <li>Youtube: {props.profile.contacts.youtube}</li>
            <li>Looking for a Job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</li>
            <li>Github: {props.profile.contacts.github}</li>
            <li>Job description: {props.profile.contacts.lookingForAJobDescription}</li>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ProfileInfo;
