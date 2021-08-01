import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, onPostChangeTextActionCreator } from '../../../redux/profileReducer';
import { ActionTypes, StateType } from '../../../redux/redux-store';

type MyPostsContainerType = {
  state: StateType;
  dispatch: (action: ActionTypes) => void;
};

export const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {
  const newPostText = props.state.profilePage.newPostText;
  const posts = props.state.profilePage.posts;

  const addPost = (text: string) => {
    props.dispatch(addPostActionCreator(text));
    props.dispatch(onPostChangeTextActionCreator(''));
  };

  const onPostChangeText = (text: string) => {
    let action = onPostChangeTextActionCreator(text);
    props.dispatch(action);
    console.log('render');
  };

  return (
    <MyPosts
      updateNewPostText={onPostChangeText}
      addPost={addPost}
      newPostText={newPostText}
      posts={posts}
    />
  );
};

