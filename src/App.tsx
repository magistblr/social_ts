import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import SidebarContainer from './components/Sidebar/SidebarContainer';
// import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import HeaderContainer from './components/Header/HeaderContainer';
import {Dialogs} from './components/Dialogs/Dialogs';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import { StoreType} from './redux/redux-store';
// import Login from './components/Login/Login';




const App: React.FC<StoreType> = (props) => {
  let friends = props.friendsBar.friends
  let navbar = props.sidebarPage.navbar;

  let state = props.getState();
  let dispatch = props.dispatch;

  return (
    <div className="app-wrapper">
      <div className="app-wrapper-inner">
        <Header />
        <Sidebar friends={friends} navbar={navbar} />
        <div className="content-wrapper">
          <Route
            path="/profile/:userId?"
            render={() => <Profile state={state} dispatch={dispatch} />}
          />
          <Route path="/messages" render={ () => <Dialogs state={state} dispatch={dispatch}/>}/>
          {/* <Route path="/users" render={ () => <Users users={props.}/>}/> */}
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          {/* <Route path="/login" render={ () => <Login/>}/> */}
        </div>
      </div>
    </div>
  );
};

export default App;
