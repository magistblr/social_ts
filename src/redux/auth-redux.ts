import { UsersType } from './../components/Users/Users';
import { authAPI } from "../api/api";
import { Dispatch } from "redux";

const SET_USER_DATA = 'SET_USER_DATA';


export type AuthPropsType = {
  users: UsersType[]
  email: string
  login: string
  isAuth: boolean
}

export type AuthActionTypes = ReturnType<typeof setAuthUserData>

let initialState: AuthPropsType = {
  users: [],
  email: "",
  login: "",
  isAuth: false
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthPropsType => {
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

export const setAuthUserData = (userId: string, email: string, login: string) => ({type: SET_USER_DATA, data: {userId, email, login}} as const)
export const getAuthUserData = () => (dispatch: Dispatch) => {
  authAPI.me().then(response => {
    console.log(response.data);
    if (response.data.resultCode === 0) {
      let {id, login, email} = response.data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
}


export default authReducer;