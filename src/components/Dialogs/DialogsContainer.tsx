import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { DialogsPageType } from '../../redux/dialogsReducer';
import { StateType } from '../../redux/redux-store';
import {Dialogs} from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';




type MapStatePropsType = {
  dialogsPage: DialogsPageType
}

type MapDispatchToProps = {
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToProps

let mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {}
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);


export const DialogsContainer = connect(mapStateToProps)(AuthRedirectComponent)

