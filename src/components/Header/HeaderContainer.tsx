import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { getAuthUserData, setAuthUserData } from '../../redux/auth-redux';
import { StateType } from '../../redux/redux-store';
import Header from './Header';

type MapStatePropsType = {
  isAuth: boolean
}

type MapDispatchPropsType = {
  getAuthUserData: () => void
}



type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps & OwnPropsType



const HeaderContainer: React.FC<PropsType> = ({isAuth, getAuthUserData}) => {

  useEffect(() => {
    getAuthUserData();
  }, [])


    return ( <Header isAuth={isAuth}/>
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


export default connect(mapStateToProps, {setAuthUserData, getAuthUserData}) (WithUrlDataContainerComponent);