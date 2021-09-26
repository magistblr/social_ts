import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import { Route } from 'react-router-dom';

import logo from "../../assets/img/soc_logo.png";
import { AuthPropsType } from '../../redux/auth-redux';
import { Login } from '../Login/Login';


type HeaderPropsType = {
  isAuth: boolean
  onLogout: () => void
  state: boolean
}


const Header: React.FC<HeaderPropsType> = ({isAuth, onLogout, state}) => {
  // console.log("rednder isAuth: ",isAuth);
  
  return (
    <header className={s.header}>
      <img className={s.header_img} src={logo} alt="logo" />
      {!isAuth
      ? <div className="header__login">
        {isAuth ? 'Ok' : <NavLink to={'/login'}>Login</NavLink>}
      </div>
      :
      <button onClick={()=>{onLogout()}} >Logout</button>}
    </header>
  );
}

export default Header;