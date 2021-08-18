import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AuthPropsType, setAuthUserData } from '../../redux/auth-redux';
import { StateType } from '../../redux/redux-store';
import Header from './Header';

type HeaderContainerType = {
  isAuth: boolean
  match: MatchType
}

type MatchType = {
  isExact: boolean
  path: string
  url: string
  // params: ParamsType
}

// type ParamsType = {
//   userId: string
// }


type PropsType = RouteComponentProps & HeaderContainerType



const HeaderContainer: React.FC<PropsType> = ({isAuth}) => {

  // componentDidMount() {
  //   this.props.getAuthUserData();
  // }


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


export default connect(mapStateToProps, {setAuthUserData}) (WithUrlDataContainerComponent);