import React from 'react';
import { connect } from 'react-redux';

import {setUserProfile, ProfilePageType} from '../../redux/profileReducer'

import Profile from "./Profile";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { StateType } from '../../redux/redux-store';

type ProfileContainerType = {
  profilePage: ProfilePageType
  setUserProfile: (userId: string) => void
  match: MatchType
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


type PropsType = RouteComponentProps<ParamsType> & ProfileContainerType


class ProfileContainer extends React.Component<PropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    this.props.setUserProfile(userId);
  }

  render() {
        return (
          <Profile {...this.props} profilePage={this.props.profilePage}/>
      )
  }
}



// let mapStateToPropsForRedirect = (state: StateType) => ({
//   isAuth: state.auth.isAuth
// });



let mapStateToProps = (state: StateType) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{setUserProfile}) (WithUrlDataContainerComponent);