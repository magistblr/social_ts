// import dialogsReducer from './dialogsReducer';
// import profileReducer from './profileReducer';
// import sidebarReducer from './sidebarReducer';
// import { v1 } from 'uuid';



// export type StoreType = {
//   _state: StateType
//   subscriber: (renderTree: () => void) => void
//   _render: (value: StateType) => void
//   getState: () => StateType
//   dispatch: (action: ActionType) => void
// }

// export type ActionType = {
//   type: string
//   newText: string
// }

// export type StateType = {
//   profilePage: ProfilePageType
//   dialogsPage: DialogsPageType
//   sidebarPage: SidebarPageType
//   friendsBar:  FriendsBarType
// }

// export type ProfilePageType = {
//   posts: Array<PostsType>
//   newPostText: string
//   profile: null
// }

// export type PostsType = {
//   id: string
//   message: string
// }

// export type DialogsPageType = {
//   dialogs: Array<DialogsType>
//   messages: Array<MessageType>
//   friendMessages: Array<FriendMessagesType>
//   newMessageBody: string
// }

// export type DialogsType = {
//   id: string
//   name: string
// }

// export type MessageType = {
//   id: string
//   message: string
// }

// export type NavbarType = {
//   id: string
//   name: string
//   url: string
// }

// export type FriendMessagesType = {
//   id: string
//   message: string
// }

// export type FriendsType = {
//   id: string
//   name: string
// }

// export type FriendsBarType = {
//   friends: Array<FriendsType>
// }

// export type SidebarPageType = {
//   navbar: Array<NavbarType>
// }



// let store: StoreType = {
//   _state:  {

//     profilePage:  {
//       posts:  [
//         {id: v1(), message: 'Hi, how are you?'},
//         {id: v1(), message: "It's my first post"}
//       ],
//       newPostText: '',
//       profile: null
//     },

//     dialogsPage: {
//       dialogs:  [
//         {id:v1(), name: 'Dima'},
//         {id:v1(), name: 'Andrey'},
//         {id:v1(), name: 'Sveta'},
//         {id:v1(), name: 'Sasha'},
//         {id:v1(), name: 'Victor'},
//         {id:v1(), name: 'Valera'}
//       ],
//       messages: [
//         {id: v1(), message: 'Hi'},
//       ],
//       friendMessages: [
//         {id: v1(), message: 'How are you?'}
//       ],
//       newMessageBody: ''
//     },

//     sidebarPage: {
//       navbar: [
//         {id: v1(), name: 'Profile', url: '/profile'},
//         {id: v1(), name: 'Messages', url: '/messages'},
//         {id: v1(), name: 'News', url: '/news'},
//         {id: v1(), name: 'Music', url: '/music'},
//         {id: v1(), name: 'Settings', url: '/settings'},
//       ]
//     },

//     friendsBar: {
//       friends: [
//         {id: v1(), name: 'Andrew'},
//         {id: v1(), name: 'Sasha'},
//         {id: v1(), name: 'Sveta'},
//       ]
//     },
//   },

//   _render(value: StateType) {
//     console.log(("state changed"))
//   },

//   getState() {
//     return (this._state);
//   },

//   subscriber(renderTree: () => void) {
//     this._render = renderTree;
//   },


//   dispatch(action: ActionType) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//     // this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
//     this._render(this._state)

//   },
// }



// //позволяет выводить state в консоли
// //@ts-ignore
// window.store = store;

// export default store;




