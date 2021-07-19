import React from 'react';
import s from './FriendMessage.module.css'



export type FriendMessageType = {
  id: string
  message: string
}


const FriendMessage: React.FC<FriendMessageType> = (props) => {



  return (
          <div className={s.wrapper_friend}>
            <div className={s.friend}>
              <div className="dialogs__users-avatar-friend">
                <img className={s.friend_img} src="https://yt3.ggpht.com/ytc/AAUvwniWcUyONM4Tu8W_39ae7hyeTOrxPjdmjeKjyb6U=s900-c-k-c0x00ffffff-no-rj" alt="avatar" />
              </div>
              <div className="dialogs__users-name-friend">Dima</div>
            </div>
            <div className={s.message_friend}>{props.message}</div>
          </div>
  )
}


export default FriendMessage;
