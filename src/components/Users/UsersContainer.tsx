import React from 'react';
import { connect} from "react-redux";
import { follow, setCurrentPages, unfollow, toggleFollowingProgress, getUsers, UsersPageType } from '../../redux/usersReducer';
import {Users} from './Users';
import Spinner from '../Spinner/Spinner';
import { StateType } from '../../redux/redux-store';


type UsersContainerType = {
  getUsers: (currentPage: number, pageSize: number) => void
  state: StateType
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

class UsersContainer extends React.Component<UsersContainerType> {

  componentDidMount() {
    this.props.getUsers(this.props.state.usersPage.currentPage, this.props.state.usersPage.pageSize);
    }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.state.usersPage.pageSize);
  }

  render() {

      return (<>
          {this.props.state.usersPage.isFetching ? <Spinner/> : null}
          <Users  totalUsersCount={this.props.state.usersPage.totalUsersCount}
                  pageSize={this.props.state.usersPage.pageSize}
                  currentPage={this.props.state.usersPage.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.state.usersPage.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  followingInProgress={this.props.state.usersPage.followingInProgress}
          />
      </>
    )
  }
}


type MapStatePropsType = {
  usersPage: UsersPageType
}


let mapStateToProps = (state: StateType) => {
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


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPages,
    toggleFollowingProgress,
    getUsers
  }) (UsersContainer);