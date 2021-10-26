import { ActionTypes } from './store';
import { v1 } from 'uuid';


export type NavbarType = {
  id: string
  name: string
  url: string
}


export type SidebarPageType = {
  navbar: Array<NavbarType>
}


let initialState: SidebarPageType = {
  navbar: [
    {id: v1(), name: 'Profile', url: '/profile'},
    {id: v1(), name: 'Messages', url: '/messages'},
    {id: v1(), name: 'Users', url: '/users'},
    {id: v1(), name: 'News', url: '/news'},
    {id: v1(), name: 'Music', url: '/music'},
    {id: v1(), name: 'Settings', url: '/settings'},
  ]
}

const sidebarReducer = (state = initialState, action: ActionTypes) => {
  // switch (action.type) {
    // case ADD_POST:
    //   const newPost: PostsType = {
    //     id: v1(),
    //     message: action.newText
    //   }
    //   state.posts.push(newPost)
    //   return state;
    // case ON_POST_CHANGE:
    //   state.newPostText = action.newText
    //   return state;
    // default:
      return state;
  }

export default sidebarReducer;