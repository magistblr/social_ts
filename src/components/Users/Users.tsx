import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/img/users.png'
import { UserType } from '../../redux/usersReducer';
import s from './Users.module.css'

export type UsersType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  users: UserType[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  followingInProgress: number[]
}

export const Users: React.FC<UsersType> = (props, {isAuth}) => {
  let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i=1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionSize = 10

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber -1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  let auth = isAuth

  return (
    <div>
      <div className={s.pagination}>
        {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
          {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map( p => {
            return (
                    <div className={s.pagination_wrapper} onClick={() => {props.onPageChanged(p)}}>
                          <span  className={props.currentPage === p ? s.pagination_wrapper_selected : ""}
                            >{p}</span>
                    </div>
                  )
          })}
        {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
      </div>
        {props.users.map( (u) => <div key={u.id}>
        <div className={s.wrapper}>
          <div className={s.logo}>
          <NavLink to={'/profile/' + u.id}> <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" /></NavLink>
            {isAuth &&
              <div className="users__btn">
              {u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                          onClick={() => {props.unfollow(u.id)}}>
                    Unfollow</button>

                  : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {props.follow(u.id)}}>
                    Follow</button>
              }
            </div>}
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
    </div>)
    }
  </div>
  )
}
