import {followSuccess, setUsersTotalCount, usersReducer, UserType} from './usersReducer';
import { UsersPageType } from './usersReducer';



test('user reducer should set users', () => {
   const startState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 11,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
  };

   const action = setUsersTotalCount(15)

   const endState = usersReducer(startState, action)

   expect(endState.totalUsersCount).toBe(15);
});


test('user reducer should follow', () => {

   const startState: UsersPageType = {
      users: [
      {
         id: 20512,
         photos: null,
         followed: false,
         name: 'Alex',
         status: null,
         uniqueUrlName: null
      },
   ],
      pageSize: 5,
      totalUsersCount: 11,
      currentPage: 1,
      isFetching: true,
      followingInProgress: [],
   };


   const action = followSuccess(20512)

   const endState = usersReducer(startState, action)

   expect(endState.users[0].followed).toBe(true);
});

