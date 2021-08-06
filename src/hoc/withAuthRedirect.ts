import { StateType } from './../redux/redux-store';
import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { AuthPropsType } from '../redux/auth-redux';

let mapStateToPropsForRedirect = (state: AuthPropsType) => ({
  isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to='/login' />

      return <Component {...this.props}/>
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}

