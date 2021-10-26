import { authAPI, ResultCodesEnum } from "../api/api";
import { Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk';
import { StateType } from './store';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_MESSAGE_ERROR_DATA = 'SET_MESSAGE_ERROR_DATA';


export type AuthPropsType = {
  userId: string
  email: string
  login: string
  isAuth: boolean
  message: string
}

export type AuthActionTypes = ReturnType<typeof setAuthUserData> |
                              ReturnType<typeof setErrorMessageData>

let initialState: AuthPropsType = {
  email: "",
  login: "",
  isAuth: false,
  userId: "",
  message: ""
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthPropsType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
      case SET_MESSAGE_ERROR_DATA:
        debugger
        return {
          ...state,
          message: action.payload.message
        }
    default:
      return state;
  }
}


export const setAuthUserData = (userId: string, email: string, login: string, isAuth: boolean) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}} as const)
export const setErrorMessageData = (message:string) => ({type: SET_MESSAGE_ERROR_DATA, payload: {message}} as const)

//thunk-logic
type ThunkType = ThunkAction<void, StateType, unknown, AuthActionTypes>

export const getAuthUserData = (): ThunkType => (dispatch: Dispatch<AuthActionTypes>) => {
  authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let {id, login, email} = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
}

export const login = (email: string, password: string, remember: boolean): ThunkType => (dispatch) => {
  authAPI.login(email, password, remember).then(response => {
    if (response.resultCode === ResultCodesEnum.Success) {
      dispatch(getAuthUserData());
    }
  });
}

export const error = (): ThunkType => (dispatch) => {
  authAPI.me().then(response => {
    if (response.data.resultCode === ResultCodesEnum.Error) {
      dispatch(setErrorMessageData(response.data.message[0]));
    }
  });
}

export const logout = (): ThunkType => (dispatch) => {
  authAPI.logout().then(response => {
    if (response.resultCode === ResultCodesEnum.Success) {
      dispatch(setAuthUserData("", "", "", false));
    }
  });
}


export default authReducer;