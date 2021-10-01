import { v1 } from 'uuid';
import { ActionTypes, FriendsBarType } from './store';


// const NEW_MESSAGE = "NEW_MESSAGE";
// const SEND_MESSAGE = "SEND_MESSAGE";

let initialState: FriendsBarType = {
      friends: [
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Sveta'},
      ]
}


const friendsReducer = (state = initialState, action: ActionTypes) => {
    // switch (action.type) {
    //   case NEW_MESSAGE:
    //     state.newMessageBody = action.newText
    //     let text: MessageType = {id: v1(), message: 'Hi'}
    //     state.messages.push(text)
    //     return state;
    //   case SEND_MESSAGE:
    //     state.newMessageBody = action.newText
    //     return state;
    //   default:
        return state;
    }


// export const sendMessageCreator  = (text: string) => ({type: NEW_MESSAGE, newText: text})
// export const updateMessageCreator  = (text: string) => ({type: SEND_MESSAGE, newText: text})


export default friendsReducer;
