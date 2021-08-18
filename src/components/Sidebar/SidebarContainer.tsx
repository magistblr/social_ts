import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AuthPropsType, setAuthUserData } from '../../redux/auth-redux';
import { FriendsType, NavbarType, StateType } from '../../redux/redux-store';
import Sidebar from './Sidebar';


type SidebarContainerType = {
  navbar: Array<NavbarType>
  friends: Array<FriendsType>
}


// type ParamsType = {
//   userId: string
// }

type PropsType = RouteComponentProps & SidebarContainerType


export const SidebarContainer: React.FC<PropsType> = ({navbar, friends}) => {

  // componentDidMount() {
  //   this.props.getAuthUserData();
  // }


    return ( <Sidebar navbar={navbar} friends={friends}/>
    );
}

type MapStateToPropsType = {
  navbar: Array<NavbarType>
  friends: Array<FriendsType>
}


const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    navbar: state.sidebarPage.navbar,
    friends: state.friendsBar.friends
  }
}


let WithUrlDataContainerComponent = withRouter(SidebarContainer)


export default connect(mapStateToProps, {setAuthUserData}) (WithUrlDataContainerComponent);