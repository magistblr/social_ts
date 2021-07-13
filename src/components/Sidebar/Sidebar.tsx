import React from 'react';
import s from './Sidebar.module.css'

import Navbar, { NavbarType } from "./Navbar/Navbar"
import Friends, { FriendsType } from "./Friends/Friends"


export type SidebarType = {
  navbar: Array<NavbarType>
  friends: Array<FriendsType>
}

const Sidebar: React.FC<SidebarType> = (props) => {

  let navElements = props.navbar.map( items => <Navbar url={items.url} name={items.name} id={items.id} key={items.id}/>);

  let friendsElements = props.friends.map( items => <Friends name={items.name} id={items.id} key={items.id}/>);

  return (
    <nav className={s.wrapper}>
        {navElements}
      <div className="sidebar__friends">
        <div className={s.friends_label}>
          Friends
        </div>
        <div className={s.friends_items}>
          {friendsElements}
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;