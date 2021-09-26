import React from 'react';
import s from './Friends.module.css'

export type FriendsType = {
  id?: string
  name: string
}

const Friends: React.FC<FriendsType> = (props) => {

  return (
    <div className="sidebar__friends-item">
      <div className={s.friends_avatar}></div>
      <div className={s.friends_name}>{props.name}</div>
    </div>
  );
}

export default Friends;