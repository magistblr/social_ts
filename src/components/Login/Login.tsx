import React from 'react'
import s from './Login.module.css'
import { LoginForm } from './LoginForm';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { StateType } from '../../redux/store';



export const Login = () => {

  const isAuth = useSelector<StateType, boolean>(state => state.auth.isAuth)

  if (isAuth) {return <Redirect to={"/profile"}/>}

  return (
    <div className={s.wrapper}>
      <div className={s.login}>
        <LoginForm/>
      </div>
    </div>
  )
}

