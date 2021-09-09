import { useFormik } from 'formik';
import React from 'react'
import s from './Login.module.css'
import * as Yup from 'yup';
import { login } from '../../redux/auth-redux';
import { connect } from 'react-redux';


type LoginType = {
  email: string
  password: string
  rememberMe: boolean
}



export const Login = (props: any) => {
  return (
    <div className={s.wrapper}>
      <div className={s.login}>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </div>
  )
}

const LoginForm = (props: any) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(20, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      props.login(values.email, values.password, values.rememberMe)
    },
  });
  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="email"></label>
      <input
        name="email"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={formik.touched.email && formik.errors.email ? s.error_input : s.input}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className={s.error}>{formik.errors.email}</div>
      ) : <div>&nbsp;</div>}

      <label htmlFor="password"></label>
      <input
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className={formik.touched.password && formik.errors.password ? s.error_input : s.input}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className={s.error}>{formik.errors.password}</div>
      ) : <div>&nbsp;</div>}
      <div className={s.remember}>
        <input
          name="remember"
          type="checkbox"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rememberMe}
        />
          <label htmlFor="remember">remember me</label>
      </div>

      <button className={s.btn} type="submit">Submit</button>
    </form>
  );
};



export default connect (null, {login})(Login);