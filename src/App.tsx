import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import SidebarContainer from './components/Sidebar/SidebarContainer';
// import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import HeaderContainer from './components/Header/HeaderContainer';
import Dialogs from './components/Dialogs/Dialogs';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import { StateType } from './redux/state';
// import Login from './components/Login/Login';


type AppType = {
  state: StateType
}

const App = (props: AppType) => {


let friends = props.state.friendsBar.friends
let navbar = props.state.sidebarPage.navbar
let dialogs = props.state.dialogsPage.dialogs
let messages = props.state.dialogsPage.messages
let friendMessages = props.state.dialogsPage.friendMessages
let newMessageBody = props.state.dialogsPage.newMessageBody

let posts = props.state.profilePage.posts
let profile = props.state.profilePage.profile
let newPostText = props.state.profilePage.newPostText



  return (
      <div className="app-wrapper">
        <div className="app-wrapper-inner">
          <Header/>
          <Sidebar friends={friends} navbar={navbar}/>
          <div className="content-wrapper">
            <Route path="/profile/:userId?" render={ () => <Profile profile={profile} posts={posts} newPostText={newPostText}/>}/>
            <Route path="/messages" render={ () => <Dialogs dialogs={dialogs} messages={messages} friendMessages={friendMessages} newMessageBody={newMessageBody}/>}/>
            {/* <Route path="/users" render={ () => <Users users={props.}/>}/> */}
            <Route path="/news" render={ () => <News/>}/>
            <Route path="/music" render={ () => <Music/>}/>
            <Route path="/settings" render={ () => <Settings/>}/>
            {/* <Route path="/login" render={ () => <Login/>}/> */}
          </div>
        </div>
      </div>
  );
}

export default App;