import React from 'react';
import { connect } from 'react-redux';

import {setUserProfile, getUserProfile, ProfileType, ProfilePageType} from '../../redux/profileReducer'

import Profile from "./Profile";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { StateType } from '../../redux/redux-store';

type ProfileContainerType = {
  getUserProfile: (userId: string) => void
  match: MatchType
  profilePage: ProfilePageType
}

type MatchType = {
  isExact: boolean
  path: string
  url: string
  params: ParamsType
}

type ParamsType = {
  userId: string
}


type PropsType = RouteComponentProps<ParamsType> & ProfileContainerType | null

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
          <Profile {...this.props}/>
      )
  }
}



// let mapStateToPropsForRedirect = (state: StateType) => ({
//   isAuth: state.auth.isAuth
// });


type MapStateToPropsType = {
  profilePage: ProfilePageType
}

let mapStateToProps = (state: StateType): MapStateToPropsType => ({
  profilePage: state.profilePage,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{setUserProfile, getUserProfile}) (WithUrlDataContainerComponent);