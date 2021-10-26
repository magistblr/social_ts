import { authAPI, ResultCodesEnum, securityAPI } from "../api/api";
import { Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk';
import { StateType } from './store';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_MESSAGE_ERROR_DATA = 'SET_MESSAGE_ERROR_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';


export type AuthPropsType = {
  userId: string
  email: string
  login: string
  isAuth: boolean
  message: string
  captcha: string
}

export type AuthActionTypes = ReturnType<typeof setAuthUserData> |
                              ReturnType<typeof setErrorMessageData> |
                              ReturnType<typeof setCaptcha>

let initialState: AuthPropsType = {
  email: "",
  login: "",
  isAuth: false,
  userId: "",
  message: "",
  captcha: ""
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthPropsType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
      case SET_MESSAGE_ERROR_DATA:
        return {
          ...state,
          message: action.payload.message
        }
      case SET_CAPTCHA:
        return {
          ...state,
          captcha: action.payload.url
        }
    default:
      return state;
  }
}


export const setAuthUserData = (userId: string, email: string, login: string, isAuth: boolean) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}} as const)
export const setErrorMessageData = (message:string) => ({type: SET_MESSAGE_ERROR_DATA, payload: {message}} as const)
export const setCaptcha = (url:string) => ({type: SET_CAPTCHA, payload: {url}} as const)

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

export const login = (email: string, password: string, remember: boolean, captcha: string | undefined): ThunkType => (dispatch) => {
  authAPI.login(email, password, remember, captcha).then(response => {
    if (response.resultCode === ResultCodesEnum.Success) {
      dispatch(getAuthUserData());
      dispatch(setErrorMessageData(""))
      dispatch(setCaptcha(""))
    }
    if (response.resultCode === ResultCodesEnum.Error) {
      dispatch(setErrorMessageData(response.messages[0]));
    }
    if (response.resultCode === ResultCodesEnum.Captcha) {
      dispatch(setErrorMessageData(response.messages[0]))
      dispatch(getCaptcha());
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

export const getCaptcha = (): ThunkType => (dispatch) => {
  securityAPI.captcha().then(response => {
    debugger
      const captcha = response.data
      if(captcha){
        dispatch(setCaptcha(captcha.url));
      }
  });
}


export default authReducer;