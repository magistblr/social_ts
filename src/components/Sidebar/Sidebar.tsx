import React from 'react';
import s from './Sidebar.module.css'

import Navbar, { NavbarType } from "./Navbar/Navbar"


export type SidebarType = {
  navbar: Array<NavbarType>
}

const Sidebar: React.FC<SidebarType> = (props) => {

  let navElements = props.navbar.map( items => <Navbar url={items.url} name={items.name} id={items.id} key={items.id}/>);

  return (
    <nav className={s.wrapper}>
        {navElements}
    </nav>
  );
}

export default Sidebar;