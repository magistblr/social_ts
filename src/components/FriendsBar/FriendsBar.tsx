import React from 'react'
import { useSelector } from 'react-redux';
import { StateType } from '../../redux/store';
import { UserType } from '../../redux/usersReducer';



export const FriendsBar = () => {

  const friendsElements = useSelector<StateType, UserType[]>(state => state.usersPage.users)
  console.log(friendsElements);

    return (
    <>
    {/* // <div className="sidebar__friends">
    //   <div className={s.friends_label}>
    //     Friends
    //   </div>
    //   <div className={s.friends_items}>
    //     {
    //     friendsElements.map( items => items.followed ? <Friends name={items.name} photos={items.photos.small} key={items.id}/> : null)}
    //   </div>
    // </div> */}
    </>
  )
}
