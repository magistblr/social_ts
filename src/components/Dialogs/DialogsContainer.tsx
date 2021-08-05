import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { DialogsPageType } from '../../redux/dialogsReducer';
import { StateType } from '../../redux/redux-store';
import {Dialogs} from './Dialogs';
import { MessageType } from './Message/Message';




type MapStatePropsType = {
  dialogsPage: string
}

type MapDispatchToProps = {
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToProps

let mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage.newMessageBody
  }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {}
}

export const DialogsContainer = connect(mapStateToProps)(Dialogs)

