import React from 'react';
import s from './Navbar.module.css'

import {NavLink} from 'react-router-dom';

export type NavbarType = {
  id?: string
  url: string
  name: string
}

const Navbar: React.FC<NavbarType> = (props) => {


  return (
      <div>
        <div className={s.list}>
          <div className={s.list_item}>
            <div>
            <NavLink to={props.url}>{props.name}</NavLink>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Navbar;