
import React from 'react'
import s from './Spinner.module.css'

function Spinner() {
  return (
    <div>
      <div className={s.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Spinner;
