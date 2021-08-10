import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, onPostChangeTextActionCreator, ProfilePageType } from '../../../redux/profileReducer';
import { StateType } from '../../../redux/redux-store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';





type MapStatePropsType = {
  profilePage: ProfilePageType
}

type MapDispatchToProps = {
  addPost: (body: string) => void
  onPostChangeText: (body: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchToProps

let mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    addPost: (text: string) => {
      dispatch(addPostActionCreator(text));
      dispatch(onPostChangeTextActionCreator(''));
    },
    onPostChangeText: (text: string) => {
      dispatch(onPostChangeTextActionCreator(text));
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

