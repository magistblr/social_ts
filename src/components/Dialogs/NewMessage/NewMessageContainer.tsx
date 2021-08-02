import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { DialogsPageType, sendMessageCreator, updateMessageCreator } from '../../../redux/dialogsReducer';
import { StateType } from '../../../redux/redux-store';
import NewMessage from './NewMessage';




type MapStateToPropsType = {
  dialogsPage: DialogsPageType
}

type MapDispatchToProps = {
  onSendMessageClick: (body: string) => void
  onNewMessageChange: (body: string) => void
}

let mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    onSendMessageClick: (body: string) => {
      dispatch( sendMessageCreator(body))
      dispatch( updateMessageCreator("") )
    },
    onNewMessageChange: (body: string) => {
      dispatch(updateMessageCreator(body))
    }
  }
}

export const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)

