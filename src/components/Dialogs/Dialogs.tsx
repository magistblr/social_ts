
import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import FriendMessage from "./Message/FriendMessage";
import s from './Dialogs.module.css'

// import NewMessageContainer from './NewMessage/NewMessageContainer';
// import { Redirect } from 'react-router-dom';
import {DialogsType, FriendMessagesType, MessageType  } from '../../redux/store';
import NewMessage from './NewMessage/NewMessage';


export type DialogsSetType = {
  dialogs: DialogsType[]
  messages: MessageType[]
  friendMessages: FriendMessagesType[]
  newMessageBody: string
}




const Dialogs: React.FC<DialogsSetType> = (props) => {

  let newMessageBody = props.newMessageBody


  let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>);

  let messagesElements = props.messages.map( m => <Message message={m.message} id={m.id} key={m.id}/>);

  let friendMessagesElements = props.friendMessages.map( f => <FriendMessage message={f.message} id={f.id} key={f.id}/>);

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
        <NewMessage newMessageBody={newMessageBody} />
      </div>
    </div>
  )
}

export default Dialogs;
