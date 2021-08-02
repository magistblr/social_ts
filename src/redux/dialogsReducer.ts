import { v1 } from 'uuid';
import { FriendMessageType } from '../components/Dialogs/Message/FriendMessage';
import { MessageType } from '../components/Dialogs/Message/Message';


export type DialogsPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessageType>
  friendMessages: Array<FriendMessageType>
  newMessageBody: string
}

export type DialogsType = {
  id: string
  name: string
}


export type DialogsActionTypes = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateMessageCreator>


const NEW_MESSAGE = "NEW_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState: DialogsPageType = {
  dialogs: [
    {id: v1(), name: 'Dima'},
    {id: v1(), name: 'Andrey'},
    {id: v1(), name: 'Sveta'},
    {id: v1(), name: 'Sasha'},
    {id: v1(), name: 'Victor'},
    {id: v1(), name: 'Valera'}
  ],
  messages: [
    {id: v1(), message: 'Hi'},
  ],
  friendMessages: [
    {id: v1(), message: 'How are you?'}
  ],
  newMessageBody: ''
}


const dialogsReducer = (state = initialState, action: DialogsActionTypes): DialogsPageType => {
    switch (action.type) {
      case NEW_MESSAGE:
        state.newMessageBody = action.newText
        let text: MessageType = {id: v1(), message: action.newText}
        state.messages.push(text)
        return state;
      case SEND_MESSAGE:
        state.newMessageBody = action.newText
        return state;
      default:
        return state;
    }
}


export const sendMessageCreator  = (text: string) => ({type: NEW_MESSAGE, newText: text} as const)
export const updateMessageCreator  = (text: string) => ({type: SEND_MESSAGE, newText: text} as const)


export default dialogsReducer;
