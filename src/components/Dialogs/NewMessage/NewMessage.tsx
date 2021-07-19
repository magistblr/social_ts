import React, { ChangeEvent } from 'react'
import { sendMessageCreator, updateMessageCreator } from '../../../redux/dialogsReducer';
import { ActionTypes } from '../../../redux/redux-store';
import s from './NewMessage.module.css'

export type NewMessageType = {
  newMessageBody: string
  dispatch: (action: ActionTypes) => void
}


const NewMessage: React.FC<NewMessageType> = (props) => {
  let newMessageBody = props.newMessageBody;

  const onSendMessageClick = () => {
    let text = props.newMessageBody
    props.dispatch( sendMessageCreator(text))
    props.dispatch( updateMessageCreator("") )
  };


  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    let action = updateMessageCreator(text)
    props.dispatch(action)
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
