

export type StoreType = {
  _state: StateType
  addPost: (postText: string) => void
  onPostChange: (newText: string) => void
  subscriber: (renderTree: () => void) => void
  _render: () => void
  getState: () => StateType
}

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



let store: StoreType = {
  _state:  {

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
  },

  _render() {
    console.log(("state changed"))
  },

  getState() {
    return (this._state);
  },

  addPost(postText: string) {
    const newPost: PostsType = {
      id: new Date().getTime(),
      message: postText
    }
    this._state.profilePage.posts.push(newPost)
    this._render();
  },

  onPostChange(newText: string) {
    this._state.profilePage.newPostText = newText
    console.log("render");
    this._render()
  },

  subscriber(renderTree: () => void) {
    this._render = renderTree;
  }
}



//позволяет выводить state в консоли
//@ts-ignore
window.store = store;

export default store;




