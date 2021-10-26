import React, { useEffect } from 'react'
import s from './LoginForm.module.css'
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginType } from '../../api/api';
import { error, login } from '../../redux/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { StateType } from '../../redux/store';

type Inputs = {
  email: string
  password: string
  rememberMe: boolean
}

// const schema = yup.object().shape({
//   email: yup.string().email(),
//   password: yup.number().positive().integer().required(),
//   rememberMe: yup.boolean().required(),
// }).required();

export const LoginForm = () => {

  const { register, handleSubmit, formState: {errors}, watch} = useForm<Inputs>();

  const dispatch = useDispatch()
  const errorAuth = useSelector<StateType, string>(state => state.auth.message)

  const onSubmit: SubmitHandler<Inputs> = (data: LoginType) => dispatch(login(data.email, data.password, data.rememberMe));
  const remember = watch('rememberMe')
  console.log(errorAuth);
  debugger

  const onErrorHandler = () => {
    debugger
    error()
  }

  // useEffect(() => {
    
  // }, [])

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input className={s.input} type={"email"} {...register("email", { required: true, maxLength: 20 })} placeholder={"email"}/>
      {errors.email && <div className={s.required}>Required</div>}
      <div>&nbsp;</div>
      <input className={s.input} type={"password"} {...register("password", { required: true, minLength: 3 })}  placeholder={"password"}/>
      {errors.password && <div className={s.required}>Required</div>}
      <div>&nbsp;</div>
      <div className={s.checkbox_wrapper}>
        <input className={s.checkbox} {...register("rememberMe")} type={'checkbox'}/>
        <span className={s.text}>remember me</span>
      </div>
      <div>&nbsp;</div>
      <input className={s.button} onClick={onErrorHandler} type="submit" value={"LOGIN"}/>
      {errorAuth !== "" ? errorAuth : ""}
    </form>
  );
}









// import { useFormik } from 'formik';
// import React from 'react'
// import s from './Login.module.css'
// import * as Yup from 'yup';



// type LoginFormPropsType = {
//   login: (email: string, password: string, remember: boolean)=> void
// }

// export const LoginForm: React.FC<LoginFormPropsType> = ({login}) => {
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//       rememberMe: "false",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .max(20, 'Must be 15 characters or less')
//         .required('Required'),
//       password: Yup.string()
//         .max(20, 'Must be 20 characters or less')
//         .required('Required'),
//     }),
//     onSubmit: values => {
//       login(values.email, values.password, !values.rememberMe)
//       console.log("log",values.rememberMe);
//     },
//   });

//   return (
//     <form className={s.form} >
//       <label htmlFor="email"></label>
//       <input
//         name="email"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//         className={formik.touched.email && formik.errors.email ? s.error_input : s.input}
//       />
//       {formik.touched.email && formik.errors.email ? (
//         <div className={s.error}>{formik.errors.email}</div>
//       ) : <div>&nbsp;</div>}

//       <label htmlFor="password"></label>
//       <input
//         name="password"
//         type="password"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.password}
//         className={formik.touched.password && formik.errors.password ? s.error_input : s.input}
//       />
//       {formik.touched.password && formik.errors.password ? (
//         <div className={s.error}>{formik.errors.password}</div>
//       ) : <div>&nbsp;</div>}
//       <div className={s.remember}>
//         <input
//           name="remember"
//           type="checkbox"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           //@ts-ignore
//           value={formik.values.rememberMe}
//         />
//           <label htmlFor="remember">remember me</label>
//       </div>
//       <button className={s.btn} type="submit" onClick={()=> {}}>Submit</button>
//     </form>
//   );
// };

