import React, { useEffect, useState } from 'react'
import s from './Login.module.css'
import { LoginForm } from './LoginForm';
import { login} from '../../redux/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { StateType } from '../../redux/store';
import { LoginType } from '../../api/api';



export const Login = () => {

  const [state, setState] = useState({
                                    email: "",
                                    password: "",
                                    rememberMe: false,
                                  })

                                  

  const dispatch = useDispatch()
  const isAuth = useSelector<StateType, boolean>(state => state.auth.isAuth)

  const onSubmit = (data: LoginType) => {
    setState(data)
  }

  useEffect(() => {
    dispatch(login(state.email, state.password, state.rememberMe))
  }, [state, dispatch])



  if (isAuth) {return <Redirect to={"/profile"}/>}

  return (
    <div className={s.wrapper}>
      <div className={s.login}>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

