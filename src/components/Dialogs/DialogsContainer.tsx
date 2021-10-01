import React, { ComponentType } from 'react'
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { DialogsPageType, sendMessageCreator, updateMessageCreator } from '../../redux/dialogsReducer';
import { StateType } from '../../redux/store';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import {Dialogs} from './Dialogs';



type MapStatePropsType = {
  dialogsPage: DialogsPageType
}

type MapDispatchToProps = {
  onSendMessageClick: (body: string) => void
  onNewMessageChange: (body: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToProps


let mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
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


export default compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

