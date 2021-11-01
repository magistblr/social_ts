import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { logout, setAuthUserData } from '../../redux/authReducer';
import { StateType } from '../../redux/store';
import Header from './Header';

type MapStatePropsType = {
  isAuth: boolean
}

type MapDispatchPropsType = {
  logout: () => void
}



type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps & OwnPropsType



const HeaderContainer: React.FC<PropsType> = ({isAuth, logout}) => {

  const [state, setState] = useState(false)


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

let withRout = withRouter(HeaderContainer)

export default compose(
  connect(mapStateToProps, {setAuthUserData, logout})) (withRout);