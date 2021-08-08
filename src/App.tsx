import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import { StateType } from './redux/redux-store';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import Login from './components/Login/Login';
// import Login from './components/Login/Login';

type AppType = {
  state: StateType
};

const App: React.FC<AppType> = ({state}) => {

  let friends = state.friendsBar.friends
  let navbar = state.sidebarPage.navbar;


  return (
    <div className="app-wrapper">
      <div className="app-wrapper-inner">
        <Header />
        <Sidebar friends={friends} navbar={navbar} />
        <div className="content-wrapper">
          <Route
            path="/profile/:userId?"
            render={() => <Profile state={state} />}
          />
          <Route path="/messages" render={ () => <DialogsContainer state={state}/>}/>
          <Route path="/users" render={ () => <UsersContainer state={state}/>}/>
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={ () => <Login/>}/>
        </div>
      </div>
    </div>
  );
};

export default App;
