import React from 'react';
import { connect } from 'react-redux';

import {getUserProfile, ProfileType, getUserStatus, updateUserStatus, savePhoto} from '../../redux/profileReducer'

import Profile from "./Profile";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { StateType } from '../../redux/store';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

type MapStatePropsType = {
  profile: ProfileType
  status: string
  authorizedUserId: string
}

type ParamsType = {
  userId: string
}

type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void
  getUserStatus: (userId: string) => void
  updateUserStatus: (userId: string) => void
  savePhoto: (file: File) => void
}


type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<ParamsType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

      refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
            this.props.history.push("/login")
          }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
      }

      componentDidMount() {
        this.refreshProfile()
      }

      componentDidUpdate(prevProps: PropsType, prevState: PropsType, snapshot: PropsType) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
          this.refreshProfile()
        }
      }

      render() {
            return (
              <Profile  profile={this.props.profile}
                        status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}
                        isOwner={!this.props.match.params.userId}
                        savePhoto={this.props.savePhoto}
                        />
          )
      }
}



let mapStateToProps = (state: StateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps,{getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)

