import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer, { DialogsActionTypes } from './dialogsReducer';
import profileReducer, { ProfileActionTypes } from './profileReducer';
import sidebarReducer from './sidebarReducer';
import friendsReducer from './friendsReducer';
import {UsersActionTypes, usersReducer} from './usersReducer';
import thunkMiddleware from "redux-thunk"
import authReducer, { AuthActionTypes } from "./authReducer";
import appReducer from "./appReducer";

export type StoreType = {
  state: StateType
  dispatch: (action: ActionTypes) => void
}



export type ActionTypes =  ProfileActionTypes | DialogsActionTypes | UsersActionTypes | AuthActionTypes




export type StateType = ReturnType<typeof rootReducer>


export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  friendsBar: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;
