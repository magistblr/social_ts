
import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import FriendMessage from "./Message/FriendMessage";
import s from './Dialogs.module.css'

import {StateType } from '../../redux/redux-store';
import { NewMessageContainer } from './NewMessage/NewMessageContainer';
import { Redirect } from 'react-router-dom';


export type DialogsSetType = {
  state: StateType
}




export const Dialogs: React.FC<DialogsSetType> = ({state}) => {



  let dialogsElements = state.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>);

  let messagesElements = state.dialogsPage.messages.map( m => <Message message={m.message} id={m.id} key={m.id}/>);

  let friendMessagesElements = state.dialogsPage.friendMessages.map( f => <FriendMessage message={f.message} id={f.id} key={f.id}/>);

  // if (!state.auth.isAuth) return <Redirect to={"/login"} />

  

  return (
    <div className={s.dialogs_wrapper}>
      <div className={s.items}>
        <div className={s.label}>Dialogs</div>
        {dialogsElements}
      </div>
      <div>
        {friendMessagesElements}
        {messagesElements}
        <NewMessageContainer/>
      </div>
    </div>
  )
}

