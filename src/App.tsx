import React from 'react';
import { Route } from 'react-router-dom';
import s from './App.module.css';

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = () => {
  return (
    <div className={s.app_wrapper}>
      <div className={s.app_outer}>
        <div className={s.app_inner}>
            <HeaderContainer />
          <div className={s.wrapper}>
            <SidebarContainer />
            <div className={s.content}>
              <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
              <Route path="/messages" render={ () => <DialogsContainer />}/>
              <Route path="/users" render={ () => <UsersContainer />}/>
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/login" render={ () => <Login/>}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
