import { combineReducers, createStore } from "redux";
import dialogsReducer, { sendMessageCreator, updateMessageCreator } from './dialogsReducer';
import profileReducer, { addPostActionCreator, onPostChangeTextActionCreator } from './profileReducer';
import sidebarReducer from './sidebarReducer';
import friendsReducer from './friendsReducer';

export type StoreType = {
  state: StateType
  dispatch: (action: ActionTypes) => void
}

export type ProfileActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof onPostChangeTextActionCreator>
export type DialogsActionTypes = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateMessageCreator>

export type ActionTypes =  ProfileActionTypes | DialogsActionTypes

export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebarPage: SidebarPageType
  friendsBar:  FriendsBarType
}

export type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
  profile: null
}

export type PostsType = {
  id: string
  message: string
}

export type DialogsPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessageType>
  friendMessages: Array<FriendMessagesType>
  newMessageBody: string
}

export type DialogsType = {
  id: string
  name: string
}

export type MessageType = {
  id: string
  message: string
}

export type NavbarType = {
  id: string
  name: string
  url: string
}

export type FriendMessagesType = {
  id: string
  message: string
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



let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  friendsBar: friendsReducer,
});

let store = createStore(reducers);

//@ts-ignore
window.store = store;

export default store;