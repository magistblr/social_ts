import React, { useEffect, useState } from 'react'
import s from './Paginator.module.css'

export type PaginatorType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  isAuth: boolean
}

export const Paginator = React.memo(function(props: PaginatorType) {

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

  // const onPageChanged = React.useCallback( () => {props.onPageChanged()}, [props.onPageChanged, p]);

  const prev = "<<<"
  const next = ">>>"

  return (
    <div className={s.pagination_wrapper}>
          {portionNumber > 1 ? <button onClick={() => {setPortionNumber(portionNumber - 1)}}>{prev}</button> : <div className={s.button_disable}></div>}
          <div className={s.pagination}>
          {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map( p => {
              return (
                      <div className={s.pagination_item_wrapper} key={p} onClick={() => {props.onPageChanged(p)}}>
                            <span  className={props.currentPage === p ? s.pagination_wrapper_selected : ""}
                              >{p}</span>
                      </div>
                    )
            })}
          </div>
          {portionCount > portionNumber ? <button onClick={() => {setPortionNumber(portionNumber + 1)}}>{next}</button> : <div className={s.button_disable}></div>}
    </div>
  )
})
