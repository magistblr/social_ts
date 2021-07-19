import { PostsType, ProfilePageType } from './redux-store';
import { v1 } from 'uuid';
import { ProfileActionTypes } from './redux-store';


const ADD_POST = "ADD_POST";
const ON_POST_CHANGE = "ON_POST_CHANGE";

let initialState: ProfilePageType = {
  posts:  [
    {id: v1(), message: 'Hi, how are you?'},
    {id: v1(), message: "It's my first post"}
  ],
  newPostText: '',
  profile: null
}

const profileReducer = (state = initialState, action: ProfileActionTypes) => {
    switch (action.type) {
      case ADD_POST:
        const newPost: PostsType = {
          id: v1(),
          message: action.newText
        }
        state.posts.push(newPost)
        return state;
      case ON_POST_CHANGE:
        state.newPostText = action.newText
        return state;
      default:
        return state;
    }
}

export const addPostActionCreator = (text: string) => ({type: ADD_POST, newText: text} as const)
export const onPostChangeTextActionCreator  = (text: string) => ({type: ON_POST_CHANGE, newText: text} as const)


export default profileReducer;