import React from 'react';
import s from './Friends.module.css'

type FriendType = {
  name: string
  photos: string | null
}


const Friends: React.FC<FriendType> = ({name, photos}) => {

  return (
    <>
    {/* // <div className="sidebar__friends-item">
    //   <div className={s.friends_avatar}><img src={photos ? photos : ''} alt="avatar" /></div>
    //   <div className={s.friends_name}>{name}</div>
    // </div> */}
    </>

  );
}

export default Friends;