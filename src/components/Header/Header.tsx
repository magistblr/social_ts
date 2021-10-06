import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css'
import logo from "../../assets/img/soc_logo.png";


type HeaderPropsType = {
  isAuth: boolean
  onLogout: () => void
  state: boolean
}


const Header: React.FC<HeaderPropsType> = ({isAuth, onLogout}) => {

  return (
    <header className={s.header}>
      <img className={s.header_img} src={logo} alt="logo" />
      {!isAuth
      ? <div className={s.header_login}>
        {isAuth ? 'Ok' : <Link to={'/login'}>Login</Link>}
      </div>
      :
      <div className={s.button}>
        <button onClick={()=>{onLogout()}} >Logout</button>
      </div>}
    </header>
  );
}

export default Header;