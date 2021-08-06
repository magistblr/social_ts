import { authAPI } from "../api/api";
import { Dispatch } from "redux";

const SET_USER_DATA = 'SET_USER_DATA';


export type AuthPropsType = {
  users: any
  email: any
  login: any
  isAuth: boolean
}

export type AuthActionTypes = ReturnType<typeof setAuthUserData>

let initialState = {
  users: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
}

export const setAuthUserData = (userId: number, email: string, login: string) => ({type: SET_USER_DATA, data: {userId, email, login}} as const)
export const getAuthUserData = () => (dispatch: Dispatch) => {
  authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let {id, login, email} = response.data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
}


export default authReducer;