import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {getUserProfile, ProfileType} from '../../redux/profileReducer'

import Profile from "./Profile";
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { StateType } from '../../redux/redux-store';
import axios from 'axios';
import { AuthPropsType } from '../../redux/auth-redux';

type MapStatePropsType = {
  profile: ProfileType
  isAuth: boolean
}


type ParamsType = {
  userId: string
}

type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void
}


type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<ParamsType> & OwnPropsType


  const ProfileContainer: React.FC<PropsType> = ({getUserProfile, profile, match, isAuth}) => {

    useEffect(() => {
      let userId = match.params.userId
      if (userId === "0") {
        userId = "2";
      }
      getUserProfile(userId);
    }, [])

    if (!isAuth) return <Redirect to={"/login"} />

          return (
            <Profile profile={profile}/>
        )
    }


// let mapStateToPropsForRedirect = (state: StateType) => ({
//   isAuth: state.auth.isAuth
// });



let mapStateToProps = (state: StateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)





export default connect(mapStateToProps,{getUserProfile}) (WithUrlDataContainerComponent);