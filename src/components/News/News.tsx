import React from 'react';
import page from '../../assets/img/page_uс.jpg';
import s from './News.module.css'


const News = () => {
  return (
    <div className={s.wrapper}>
      <img src={page} alt="page" />
    </div>
  )
}

export default News;
