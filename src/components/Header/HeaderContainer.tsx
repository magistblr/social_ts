import React from 'react';
import { connect } from 'react-redux';
import { AuthPropsType, setAuthUserData } from '../../redux/auth-redux';
import { StateType } from '../../redux/redux-store';
import Header from './Header';

type PropsType = {
  state: AuthPropsType
}


class HeaderContainer extends React.Component<PropsType> {

  // componentDidMount() {
  //   this.props.getAuthUserData();
  // }



  render () {
    return ( <Header state={this.props.state} />
    );
  }
}

const mapStateToProps = (state: StateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);