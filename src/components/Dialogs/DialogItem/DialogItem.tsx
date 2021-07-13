import React from 'react';
import s from './DialogItem.module.css'

import {NavLink} from "react-router-dom";

export type DialogItemType = {
  id: number
  name: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
  let path = `/messages/${props.id}`;

  return (
    <div>
      <div className={s.item}>
        <div className={s.item_mark}></div>
        <div className={s.item_name}>
          <NavLink to={path}>{props.name}</NavLink>
        </div>
      </div>
    </div>
  )
}


export default DialogItem;
