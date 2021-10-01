
import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import FriendMessage from "./Message/FriendMessage";
import s from './Dialogs.module.css'

import {StateType } from '../../redux/store';
import { Redirect } from 'react-router-dom';
import NewMessage from './NewMessage/NewMessage';
import { DialogsPropsType } from './DialogsContainer';
import { DialogsPageType } from '../../redux/dialogsReducer';


export type DialogsSetType = {
  dialogsPage: DialogsPageType
}



export const Dialogs: React.FC<DialogsSetType> = ({...restProps}) => {

  let dialogsPage = restProps.dialogsPage

  let dialogsElements = dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>);

  let messagesElements = dialogsPage.messages.map( m => <Message message={m.message} id={m.id} key={m.id}/>);

  let friendMessagesElements = dialogsPage.friendMessages.map( f => <FriendMessage message={f.message} id={f.id} key={f.id}/>);



  return (
    <div className={s.dialogs_wrapper}>
      <div className={s.items}>
        <div className={s.label}>Dialogs</div>
        {dialogsElements}
      </div>
      <div>
        {friendMessagesElements}
        {messagesElements}
        <NewMessage {...restProps as DialogsPropsType}/>
      </div>
    </div>
  )
}

