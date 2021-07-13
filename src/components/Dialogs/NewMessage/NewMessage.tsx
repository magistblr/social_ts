import React from 'react'
import s from './NewMessage.module.css'

export type NewMessageType = {
  newMessageBody: string
}


const NewMessage: React.FC<NewMessageType> = (props) => {
  let newMessageBody = props.newMessageBody;

  // let onSendMessageClick = () => {
  //   props.sendMessage();
  // }

  // let onNewMessageChange = (e: any) => {
  //   let body = e.target.value;
  //   props.updateNewMessageBody(body);
  // }


  return (
          <div className={s.new_message_wrapper}>
            <div className={s.new_message}>
              <textarea className={`${s.new_message} textarea`}
              value={newMessageBody}
              name="text"
              placeholder="Enter your next"
              wrap="soft"/>
            </div>
            <div className={s.new_message_btn}>
              <button className={`${s.new_message_btn} button`}>Send</button>
            </div>
          </div>
  )
}


export default NewMessage;
