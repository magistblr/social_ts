
import React from 'react';
import Message, { MessageType } from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import FriendMessage, { FriendMessageType } from "./Message/FriendMessage";
import s from './Dialogs.module.css'

// import { Redirect } from 'react-router-dom';
import {ActionTypes, StoreType } from '../../redux/redux-store';
import {NewMessageContainer} from './NewMessage/NewMessageContainer';


export type DialogsSetType = {
  state: StoreType
  dispatch: (action: ActionTypes) => void
}




export const Dialogs: React.FC<DialogsSetType> = (props) => {

  let newMessageBody = props.state.dialogsPage.newMessageBody


  let dialogsElements = props.state.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>);

  let messagesElements = props.state.dialogsPage.messages.map( m => <Message message={m.message} id={m.id} key={m.id}/>);

  let friendMessagesElements = props.state.dialogsPage.friendMessages.map( f => <FriendMessage message={f.message} id={f.id} key={f.id}/>);

  // if (!props.isAuth) return <Redirect to={"/login"} />

  return (
    <div className={s.dialogs_wrapper}>
      <div className={s.items}>
        <div className={s.label}>Dialogs</div>
        {dialogsElements}
      </div>
      <div>
        {friendMessagesElements}
        {messagesElements}
        <NewMessageContainer onNewMessageCallback={} onSendMessageCallback={} newMessageBody={newMessageBody} dispatch={props.dispatch}/>
      </div>
    </div>
  )
}

