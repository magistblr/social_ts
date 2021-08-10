import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

import logo from "../../assets/img/soc_logo.png";
import { AuthPropsType } from '../../redux/auth-redux';

type PropsType = {
  state: AuthPropsType
}




const Header: React.FC<PropsType> = (props) => {
  return (
    <header className={s.header}>
      <img className={s.header_img} src={logo} alt="logo" />
      <div className="header__login">
        {props.state.isAuth ? 'Ok' : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;