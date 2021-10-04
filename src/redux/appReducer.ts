import { UsersType } from '../components/Users/Users';
import { authAPI, ResultCodesEnum } from "../api/api";
import { Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk';
import { StateType } from './store';
import { getAuthUserData } from './authReducer';

const SET_INITIALIZED = 'SET_INITIALIZED';


export type AppPropsType = {
  initialized: boolean,
}

export type AppActionTypes = ReturnType<typeof initializedSuccess>

let initialState: AppPropsType = {
  initialized: false,
};

const appReducer = (state = initialState, action: AppActionTypes): AppPropsType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;
  }
}


export const initializedSuccess = () => ({type: SET_INITIALIZED} as const)

//thunk-logic
type ThunkType = ThunkAction<void, StateType, unknown, AppActionTypes>

export const initialize = (): ThunkType => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise])
    .then(() => {
    dispatch(initializedSuccess())
  })
}


export default appReducer;