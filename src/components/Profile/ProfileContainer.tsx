import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {getUserProfile, ProfileType} from '../../redux/profileReducer'

import Profile from "./Profile";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { StateType } from '../../redux/redux-store';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

type MapStatePropsType = {
  profile: ProfileType
}

type ParamsType = {
  userId: string
}

type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void
}


type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<ParamsType> & OwnPropsType



class ProfileContainer extends React.Component<PropsType> {

      componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
          userId = "2";
        }
        this.props.getUserProfile(userId);
      }

      render() {
            return (
              <Profile profile={this.props.profile}/>
          )
      }
    }



let mapStateToProps = (state: StateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps,{getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)

