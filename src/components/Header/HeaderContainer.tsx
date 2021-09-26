import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { getAuthUserData, logout, setAuthUserData } from '../../redux/auth-redux';
import { StateType } from '../../redux/redux-store';
import Header from './Header';

type MapStatePropsType = {
  isAuth: boolean
}

type MapDispatchPropsType = {
  getAuthUserData: () => void
  logout: () => void
}



type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps & OwnPropsType



const HeaderContainer: React.FC<PropsType> = ({isAuth, getAuthUserData, logout}) => {

  const [state, setState] = useState(false)
  console.log(state);
  console.log("render isAuth", isAuth);

  useEffect(() => {
    if(!state){
      getAuthUserData();
    }
  }, [])

  const onLogout = () => {
    setState(!state)
  }

  useEffect(() => {
    if(isAuth){
      logout();
    }
  }, [state])



    return ( <Header isAuth={isAuth} onLogout={onLogout} state={state}/>
    );
}

type MapStateToPropsType = {
  isAuth: boolean
  login: string
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

let WithUrlDataContainerComponent = withRouter(HeaderContainer)


export default connect(mapStateToProps, {setAuthUserData, getAuthUserData, logout}) (WithUrlDataContainerComponent);