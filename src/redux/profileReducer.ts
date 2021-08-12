import { v1 } from 'uuid';
import { Dispatch } from 'redux';
import { userAPI } from '../api/api';

export type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
  profile: ProfileType | null
}

export type PostsType = {
  id: string
  message: string
}

export type ProfileType =
  {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string | undefined
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType
  }


type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

type PhotosType ={
  small: string
  large: string
}

const ADD_POST = "ADD_POST";
const ON_POST_CHANGE = "ON_POST_CHANGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";


let initialState: ProfilePageType = {
  posts:  [
    {id: v1(), message: 'Hi, how are you?'},
    {id: v1(), message: "It's my first post"}
  ],
  newPostText: '',
  profile: null
}


export type ProfileActionTypes =  ReturnType<typeof addPostActionCreator> |
                                  ReturnType<typeof onPostChangeTextActionCreator> |
                                  ReturnType<typeof setUserProfile>





const profileReducer = (state = initialState, action: ProfileActionTypes): ProfilePageType => {
    let copyState;

    switch (action.type) {
      case ADD_POST:
        copyState = {
          ...state,
          posts: [...state.posts, {id: v1(),message: action.newText}]
        }
        return copyState;
      case ON_POST_CHANGE:
        copyState = {
          ...state,
          newPostText: action.newText
        }
        return copyState;
      case SET_USER_PROFILE: {
        return {
                ...state,
                profile: action.profile}
      }
      default:
        return state;
    }
}
export const addPostActionCreator = (text: string) => ({type: ADD_POST, newText: text} as const)
export const onPostChangeTextActionCreator  = (text: string) => ({type: ON_POST_CHANGE, newText: text} as const)
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)




export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
  userAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
}

export default profileReducer;