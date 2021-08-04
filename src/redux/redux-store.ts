import { combineReducers, createStore, Store } from "redux";
import dialogsReducer, { DialogsActionTypes, sendMessageCreator, updateMessageCreator } from './dialogsReducer';
import profileReducer, { addPostActionCreator, onPostChangeTextActionCreator } from './profileReducer';
import sidebarReducer from './sidebarReducer';
import friendsReducer from './friendsReducer';


export type ProfileActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof onPostChangeTextActionCreator>

export type ActionTypes =  ProfileActionTypes | DialogsActionTypes


export type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
  profile: null
}

export type PostsType = {
  id: string
  message: string
}


export type NavbarType = {
  id: string
  name: string
  url: string
}


export type FriendsType = {
  id: string
  name: string
}

export type FriendsBarType = {
  friends: Array<FriendsType>
}

export type SidebarPageType = {
  navbar: Array<NavbarType>
}

export type StoreType = Store & ReturnType<typeof rootReducer>


export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  friendsBar: friendsReducer,
});

export const store = createStore(rootReducer);

//@ts-ignore
window.store = store;
