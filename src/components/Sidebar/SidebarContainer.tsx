import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { getAuthUserData, setAuthUserData } from '../../redux/authReducer';
import { NavbarType } from '../../redux/sidebarReducer';
import { StateType } from '../../redux/store';
import Sidebar from './Sidebar';


type MapStatePropsType = {
  navbar: Array<NavbarType>
}

type MapDispatchPropsType = {
  getAuthUserData: () => void
}


type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps & OwnPropsType


export const SidebarContainer: React.FC<PropsType> = ({navbar, getAuthUserData}) => {

  useEffect(() => {
    getAuthUserData();
  }, [getAuthUserData])


    return ( <Sidebar navbar={navbar}/>
    );
}

type MapStateToPropsType = {
  navbar: Array<NavbarType>
}


const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    navbar: state.sidebarPage.navbar,
  }
}



let withUrlDataContainerComponent = withRouter(SidebarContainer)


export default connect(mapStateToProps,{setAuthUserData, getAuthUserData}) (withUrlDataContainerComponent);