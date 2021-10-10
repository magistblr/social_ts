import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { getAuthUserData, setAuthUserData } from '../../redux/authReducer';
import { FriendsType, NavbarType, StateType } from '../../redux/store';
import Sidebar from './Sidebar';


type MapStatePropsType = {
  navbar: Array<NavbarType>
  friends: Array<FriendsType>
}

type MapDispatchPropsType = {
  getAuthUserData: () => void
}


type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps & OwnPropsType


export const SidebarContainer: React.FC<PropsType> = ({navbar, friends, getAuthUserData}) => {

  useEffect(() => {
    getAuthUserData();
  }, [getAuthUserData])


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



let withUrlDataContainerComponent = withRouter(SidebarContainer)


export default connect(mapStateToProps,{setAuthUserData, getAuthUserData}) (withUrlDataContainerComponent);