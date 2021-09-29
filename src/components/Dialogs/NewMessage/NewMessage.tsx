import React, { ChangeEvent } from 'react'
import { DialogsPropsType } from '../DialogsContainer';
import s from './NewMessage.module.css'



const NewMessage: React.FC<DialogsPropsType> = ({onSendMessageClick, onNewMessageChange, dialogsPage}) => {

  let newMessageBody = dialogsPage.newMessageBody;


  const onSendMessageClickC = () => {
    let text = newMessageBody
    onSendMessageClick(text)
  };


  const onNewMessageChangeC = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    onNewMessageChange(text)
  }



  return (
          <div className={s.new_message_wrapper}>
            <div className={s.new_message}>
              <textarea className={`${s.new_message} textarea`}
              value={newMessageBody}
              onChange={onNewMessageChangeC}
              placeholder="Enter your next"
              />
            </div>
            <div className={s.new_message_btn}>
              <button onClick={onSendMessageClickC} className={`${s.new_message_btn} button`}>Send</button>
            </div>
          </div>
  )
}


export default NewMessage;
