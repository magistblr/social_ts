import React from 'react';
import { connect} from "react-redux";
import { follow, setCurrentPages, unfollow, toggleFollowingProgress, getUsers,  UserType } from '../../redux/usersReducer';
import {Users} from './Users';
import Spinner from '../Spinner/Spinner';
import { StateType } from '../../redux/redux-store';
import {RouteComponentProps, withRouter } from 'react-router-dom';

type UsersContainerType = {
  getUsers: (currentPage: number, pageSize: number) => void
  users: UserType[]
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  followingInProgress: number[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

type PropsType = RouteComponentProps & UsersContainerType


class UsersContainer extends React.Component<PropsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {

      return (<>
          {this.props.isFetching ? <Spinner/> : null}
          <Users  {...this.props} onPageChanged={this.onPageChanged}
          />
      </>
    )
  }
}


type MapStatePropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}


let mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}



// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPagesAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     },
//   }
// }

//ниже в коннекте сокращенный код, переданный вторым аргументом ввиде объекта (если значение == свойству follow: follow, то можно писать в одно слово)


let WithUrlDataContainerComponent = withRouter(UsersContainer);


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPages,
    toggleFollowingProgress,
    getUsers
  }) (WithUrlDataContainerComponent);