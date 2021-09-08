import React from 'react'
import s from './Login.module.css'

export const Login = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.login}>
        <h1>Login</h1>
        <LoginForm/>
      </div>
    </div>
  )
}

export const LoginForm = () => {
  return (
        <form className={s.form}>
          <div>
            <input placeholder="Login" />
          </div>
          <div>
            <input placeholder="Password" />
          </div>
          <div>
            <input type={"checkbox"} /> remember me
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
  )
}