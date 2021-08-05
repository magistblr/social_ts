import React, { ChangeEvent } from 'react'
import s from './NewMessage.module.css'
import { NewMessagePropsType } from './NewMessageContainer';



const NewMessage: React.FC<NewMessagePropsType> = (props) => {

  let newMessageBody = props.dialogsPage.newMessageBody;


  const onSendMessageClick = () => {
    let text = newMessageBody
    props.onSendMessageClick(text)
  };


  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    props.onNewMessageChange(text)
  }


  return (
          <div className={s.new_message_wrapper}>
            <div className={s.new_message}>
              <textarea className={`${s.new_message} textarea`}
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your next"
              />
            </div>
            <div className={s.new_message_btn}>
              <button onClick={onSendMessageClick} className={`${s.new_message_btn} button`}>Send</button>
            </div>
          </div>
  )
}


export default NewMessage;
