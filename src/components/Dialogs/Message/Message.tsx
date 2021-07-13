import React from 'react';
import s from './Message.module.css'

export type MessageType = {
  id: number
  message: string
}

const Message: React.FC<MessageType> = (props) => {



  return (
          <div className={s.users_wrapper}>
            <div className={s.dialogs_users_message}>{props.message}</div>
            <div className={s.dialogs_users}>
              <div className="dialogs__users-avatar">
                <img src="https://yt3.ggpht.com/ytc/AAUvwniWcUyONM4Tu8W_39ae7hyeTOrxPjdmjeKjyb6U=s900-c-k-c0x00ffffff-no-rj" alt="avatar" />
              </div>
              <div className="dialogs__users-name">Me</div>
              </div>
          </div>

  )
}


export default Message;
