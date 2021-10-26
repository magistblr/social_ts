import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import s from './App.module.css';

import { StateType } from './redux/store';

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Login/Login';
import { initializedSuccess } from './redux/appReducer';
import Spinner from './components/Spinner/Spinner';
import {FriendsBar} from './components/FriendsBar/FriendsBar';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));




type PropsType = {
  initializedSuccess: () => void
  initialized: boolean
}

class App extends React.Component<PropsType> {
  componentDidMount() {
    this.props.initializedSuccess()
  }

  render(){
  if(!this.props.initialized){
    return <Spinner/>
  }

    return (
      <div className={s.app_wrapper}>
        <div className={s.app_outer}>
          <div className={s.app_inner}>
              <HeaderContainer />
            <div className={s.wrapper}>
              <SidebarContainer />
              <div className={s.content}>
                <Route path="/profile/:userId?" render={() =>
                                                              <Suspense fallback={<Spinner/>}>
                                                                <ProfileContainer />
                                                              </Suspense>}/>
                <Route path="/messages" render={() =>
                                                              <Suspense fallback={<Spinner/>}>
                                                                <DialogsContainer />
                                                              </Suspense>}/>
                <Route path="/users" render={ () => <UsersContainer />}/>
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/settings" render={() => <Settings />} />
                <Route path="/login" render={ () => <Login/>}/>
              </div>
              <FriendsBar/>
            </div>
          </div>
        </div>
      </div>
    );
  };
}


type MapStateToPropsType = {
  initialized: boolean,
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
  initialized: state.app.initialized,
});



export default compose(
  connect(mapStateToProps, {initializedSuccess}),
  )(App);

