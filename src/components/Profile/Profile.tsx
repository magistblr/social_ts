import React from 'react';

// import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import { ActionTypes, PostsType } from '../../redux/redux-store';

export type ProfileType = {
  posts: PostsType[]
  newPostText: string
  profile: null
  dispatch: (action: ActionTypes) => void
}


const Profile: React.FC<ProfileType> = (props) => {

  let posts = props.posts
  let newPostText = props.newPostText
  let dispatch = props.dispatch

  return (
    <div className={s.wrapper}>
      <header className="content__header">
        <img className={s.content_img} src="https://static9.depositphotos.com/1656823/1156/i/950/depositphotos_11563134-stock-photo-blue-water.jpg" alt="background"/>
      </header>

      <div className={s.content}>
        <ProfileInfo profile={props.profile}/>
        <MyPosts posts={posts} newPostText={newPostText} dispatch={dispatch}/>
      </div>
    </div>
  );
}

export default Profile;