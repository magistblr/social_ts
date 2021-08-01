import React from 'react'
import { sendMessageCreator, updateMessageCreator } from '../../../redux/dialogsReducer';
import { ActionTypes } from '../../../redux/redux-store';
import NewMessage from './NewMessage';

export type NewMessageType = {
  newMessageBody: string
  dispatch: (action: ActionTypes) => void
}


export const NewMessageContainer: React.FC<NewMessageType> = (props) => {

  const onSendMessageClick = (body: string) => {
    props.dispatch( sendMessageCreator(body))
    props.dispatch( updateMessageCreator("") )
  };


  const onNewMessageChange = (body: string) => {
    let action = updateMessageCreator(body)
    props.dispatch(action)
  }


  return (
    <NewMessage newMessageBody={props.newMessageBody}
                onSendMessageCallback={onSendMessageClick}
                onNewMessageCallback={onNewMessageChange}
                dispatch={props.dispatch}/>
  )
}


