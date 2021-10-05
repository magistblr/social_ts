import React, { ChangeEvent, useState } from 'react';
import { ProfileType } from '../../../redux/profileReducer';
import Spinner from '../../Spinner/Spinner';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/img/users.png'
import edit from '../../../assets/img/edit.svg'

import s from './ProfileInfo.module.css'
import { SubmitHandler, useForm } from 'react-hook-form';


type ProfileInfoPropsType = {
  profile: ProfileType
  status: string
  updateUserStatus: (userId: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
  updateProfile: (profile: {}) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateUserStatus, isOwner, savePhoto, updateProfile}) => {

  let [editForm, setEditForm] = useState(false);


  if (!profile) {
    return <Spinner/>
  }

  const onAvatarSelected = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onChangeEditForm = () => {
    setEditForm(!editForm)
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
            </div>
        }
      </div>
      <div className={s.data_wrapper}>
        <div className={s.user_name}>{profile.fullName}</div>
        {isOwner
          //main user
          ? <ProfileStatus status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}/>
          //other users
          : <div className={s.status_wrapper}>
              <span>{status ? status : "-----------------"}</span>
            </div>
        }

        {editForm
                ? <ProfileDataEditabled profile={profile} updateProfile={updateProfile} onChangeEditForm={onChangeEditForm}/>
                : <ProfileData  profile={profile} updateProfile={updateProfile}/>}
        {isOwner && <div className={s.edit} onClick={onChangeEditForm}><img src={edit} alt="edit"/>Edit</div>}
      </div>
    </div>
  )
}



type ProfileDataType = {
  profile: ProfileType
  updateProfile: (profile: {}) => void
}

type ProfileDataEditabled = {
  profile: ProfileType
  updateProfile: (profile: {}) => void
  onChangeEditForm: () => void
}


const ProfileDataEditabled: React.FC<ProfileDataEditabled> = ({profile, updateProfile, onChangeEditForm}) => {


  const { register, handleSubmit, watch, formState: { errors } } = useForm<ProfileType>();
  const onSubmit: SubmitHandler<ProfileType> = (data) => {
    updateProfile(data);
    onChangeEditForm()
  }


    return (
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <ul>
              <li  className={s.field}>Full name:
                <input defaultValue={profile.fullName} {...register("fullName")} />
              </li>
              <li className={s.field}>About me:
                <input defaultValue={profile.aboutMe} {...register("aboutMe")} />
              </li>
              <li className={s.field_contacts}>Contacts:
                <li className={s.field}>Facebook:
                  <input defaultValue={profile.contacts.facebook} {...register("contacts.facebook")} />
                </li>
                <li className={s.field}>Website:
                  <input defaultValue={profile.contacts.website} {...register("contacts.website")} />
                </li>
                <li className={s.field}>VK:
                  <input defaultValue={profile.contacts.vk} {...register("contacts.vk")} />
                </li>
                <li className={s.field}>Twitter:
                  <input defaultValue={profile.contacts.twitter} {...register("contacts.twitter")} />
                </li>
                <li className={s.field}>Instagram:
                  <input defaultValue={profile.contacts.instagram} {...register("contacts.instagram")} />
                </li>
                <li className={s.field}>Youtube:
                  <input defaultValue={profile.contacts.youtube} {...register("contacts.youtube")} />
                </li>
                <li className={s.field}>Main link:
                  <input defaultValue={profile.contacts.mainLink} {...register("contacts.mainLink")} />
                </li>
                <li className={s.field}>Github:
                  <input defaultValue={profile.contacts.github} {...register("contacts.github")} />
                </li>
                <li className={s.field_job}>Looking for a Job:
                  <input type='checkbox' {...register("lookingForAJob")} />
                </li>
                <li className={s.field}>Job description:
                  <input defaultValue={profile.lookingForAJobDescription} {...register("lookingForAJobDescription")} />
                </li>
              </li>
            </ul>
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            <div className={s.save}><input type="submit" value={'save'}/></div>
      </form>
    )
}


const ProfileData: React.FC<ProfileDataType> = ({profile}) => {
    return (
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
    )
}

export default ProfileInfo;
