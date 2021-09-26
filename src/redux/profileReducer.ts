import { v1 } from 'uuid';
import { Dispatch } from 'redux';
import { profileAPI, userAPI } from '../api/api';
import { ThunkAction } from 'redux-thunk';
import { StateType } from './redux-store';

export type ProfilePageType = {
  posts: Array<PostsType>;
  newPostText: string;
  profile: ProfileType
  status: string
};

export type PostsType = {
  id: string;
  message: string;
};

export type ProfileType = {
  userId: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string
  aboutMe: string;
  contacts: ContactsType;
  photos: PhotosType;
};

type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

type PhotosType = {
  small: string;
  large: string;
};

const ADD_POST = 'ADD_POST';
const ON_POST_CHANGE = 'ON_POST_CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState: ProfilePageType = {
  posts: [
    { id: v1(), message: 'Hi, how are you?' },
    { id: v1(), message: "It's my first post" },
  ],
  newPostText: '',
  profile: {
    userId: "0",
    lookingForAJob: true,
    lookingForAJobDescription: "",
    fullName: "",
    aboutMe: "",
    contacts: {
      github: "",
      vk: "",
      facebook: "",
      instagram: "",
      twitter: "",
      website: "",
      youtube: "",
      mainLink: "",
    },
    photos: {
      small: "",
      large: "",
    }
  },
  status: "----------",
};

export type ProfileActionTypes =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof onPostChangeTextActionCreator>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>

const profileReducer = (state = initialState, action: ProfileActionTypes): ProfilePageType => {
  let copyState;

  switch (action.type) {
    case ADD_POST:
      copyState = {
        ...state,
        posts: [...state.posts, { id: v1(), message: action.newText }],
      };
      return copyState;
    case ON_POST_CHANGE:
      copyState = {
        ...state,
        newPostText: action.newText,
      };
      return copyState;
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};
export const addPostActionCreator = (text: string) => ({ type: ADD_POST, newText: text } as const);
export const onPostChangeTextActionCreator = (text: string) => ({ type: ON_POST_CHANGE, newText: text } as const);
export const setUserProfile = (profile: ProfileType) => ({ type: SET_USER_PROFILE, profile } as const);
export const setStatus = (status: string) => ({ type: SET_STATUS, status } as const);
export const updateStatus = (status: string) => ({ type: SET_STATUS, status } as const);

type ThunkType = ThunkAction<void, StateType, unknown, ProfileActionTypes>;

export const getUserProfile = (userId: string): ThunkType => {
  return (dispatch: Dispatch<ProfileActionTypes>) => {
    userAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));

    });
  };
};

export const getUserStatus = (status: string): ThunkType => {
  return (dispatch: Dispatch<ProfileActionTypes>) => {
    profileAPI.getStatus(status).then((response) => {
      console.log(response.data);
      dispatch(setStatus(response.data));
    });
  };
};

export const updateUserStatus = (status: string): ThunkType => {
  return (dispatch: Dispatch<ProfileActionTypes>) => {
    profileAPI.updateStatus(status).then((response) => {
      if(response.data.resultCode === 0){
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
