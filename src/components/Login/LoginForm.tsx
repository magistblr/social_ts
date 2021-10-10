import React from 'react'
import { useForm } from 'react-hook-form';
import { LoginType } from '../../api/api';



type LoginFormPropsType = {
  onSubmit: (data: LoginType)=> void
}


export function LoginForm(props: LoginFormPropsType) {
  const { register, handleSubmit} = useForm();

  
  
  const onSubmit = (data: LoginType) => props.onSubmit(data);
  
  console.log(onSubmit);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      <div>&nbsp;</div>
      <input {...register("password")} />
      <div>&nbsp;</div>
      <input {...register("rememberMe")} type={'checkbox'}/>
      <span>remember me</span>
      <div>&nbsp;</div>
      <input type="submit"/>
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

