import { authAPI, ResultCodesEnum } from "../api/api";
import { Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk';
import { StateType } from './store';

const SET_USER_DATA = 'SET_USER_DATA';


export type AuthPropsType = {
  userId: string
  email: string
  login: string
  isAuth: boolean
}

export type AuthActionTypes = ReturnType<typeof setAuthUserData>

let initialState: AuthPropsType = {
  email: "",
  login: "",
  isAuth: false,
  userId: ""
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthPropsType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state;
  }
}


export const setAuthUserData = (userId: string, email: string, login: string, isAuth: boolean) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}} as const)

//thunk-logic
type ThunkType = ThunkAction<void, StateType, unknown, AuthActionTypes>

export const getAuthUserData = (): ThunkType => (dispatch: Dispatch<AuthActionTypes>) => {
  authAPI.me().then(response => {
    console.log(response.data);
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

export const logout = (): ThunkType => (dispatch) => {
  authAPI.logout().then(response => {
    if (response.resultCode === ResultCodesEnum.Success) {
      dispatch(setAuthUserData("", "", "", false));
    }
  });
}


export default authReducer;