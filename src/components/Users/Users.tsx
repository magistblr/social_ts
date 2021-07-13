import React from 'react'
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/img/users.png'
import s from './Users.module.css'

export type UsersType = {
  users: any
}

let Users: React.FC<UsersType> = (props) => {
  // let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize); допилить вывод пользователей через кнопку ещё (сейчас ограничение страниц 25)
  let pages = [];
  for (let i=1; i <= 25; i++) {
    pages.push(i);
  }
  return ( <div>

    {/* <div className="users__pagination">
      {pages.map( p => {
        return <div className="users__pagination-wrapper" onClick={(e) => {props.onPageChanged(p)}}>
                    <span  className={props.currentPage === p && "users__pagination-item_selected"}
                      >{p}</span>
              </div>
      })}

      </div> */}
        {props.users.map( (u: any) => <div key={u.id}>
        <div className={s.wrapper}>
          <div className={s.logo}>
          <NavLink to={'/profile/' + u.id}> <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" /> </NavLink>
            {/* <div className="users__btn">
              {u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                          onClick={() => {props.unfollow(u.id)}}>
                    Unfollow</button>

                  : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {props.follow(u.id)}}>
                    Follow</button>
              }
            </div> */}
          </div>
          <div className={s.descr_wrapper_outer}>
            <div className={s.descr_wrapper_inner}>
              <div className={s.descr}>
                <div className="users__descr-name">{u.name}</div>
                <div className={s.descr_status}>{u.status}</div>
              </div>
              <div className={s.location}>
                <div className={s.location_country}>{"u.location.country"},</div>
                <div className={s.location_city}>{"u.location.city"}</div>
              </div>
            </div>
          </div>
        </div>
    </div>)}
  </div>
  )
}

export default Users;