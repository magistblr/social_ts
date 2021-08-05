import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { DialogsPageType, sendMessageCreator, updateMessageCreator } from '../../../redux/dialogsReducer';
import { StateType } from '../../../redux/redux-store';
import NewMessage from './NewMessage';


type MapStatePropsType = {
  dialogsPage: DialogsPageType
}

type MapDispatchToProps = {
  onSendMessageClick: (body: string) => void
  onNewMessageChange: (body: string) => void
}

export type NewMessagePropsType = MapStatePropsType & MapDispatchToProps



const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
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

