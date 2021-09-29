import React from 'react';
import page from '../../assets/img/page_uс.jpg';
import s from './Settings.module.css'



const Settings = () => {
  return (
    <div className={s.wrapper}>
      <img src={page} alt="page" />
    </div>
  )
}

export default Settings;
