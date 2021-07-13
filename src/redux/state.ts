import { renderTree } from "../render"

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
  id: number
  message: string
}

export type DialogsPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessageType>
  friendMessages: Array<FriendMessagesType>
  newMessageBody: string
}

export type DialogsType = {
  id: number
  name: string
}

export type MessageType = {
  id: number
  message: string
}

export type NavbarType = {
  id: number
  name: string
  url: string
}

export type FriendMessagesType = {
  id: number
  message: string
}

export type FriendsType = {
  id: number
  name: string
}

export type FriendsBarType = {
  friends: Array<FriendsType>
}

export type SidebarPageType = {
  navbar: Array<NavbarType>
}



let state: StateType =  {

    profilePage:  {
      posts:  [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: "It's my first post"}
      ],
      newPostText: '',
      profile: null
    },

    dialogsPage: {
      dialogs:  [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
      ],
      friendMessages: [
        {id: 1, message: 'How are you?'}
      ],
      newMessageBody: ''
    },

    sidebarPage: {
      navbar: [
        {id: 1, name: 'Profile', url: '/profile'},
        {id: 2, name: 'Messages', url: '/messages'},
        {id: 3, name: 'News', url: '/news'},
        {id: 4, name: 'Music', url: '/music'},
        {id: 5, name: 'Settings', url: '/settings'},
      ]
    },

    friendsBar: {
      friends: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'},
      ]
    },
}

export const addPost = (postText: string) => {
  const newPost: PostsType = {
    id: new Date().getTime(),
    message: postText
  }
  state.profilePage.posts.push(newPost)
  renderTree(state);
}

export const onPostChange = (newText: string) => {
  state.profilePage.newPostText = newText
  renderTree(state)
}



//позволяет выводить state в консоли
// window.store = store;

export default state;




