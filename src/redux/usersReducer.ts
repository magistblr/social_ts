import { Dispatch } from "redux";
import { userAPI } from './../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


export type UserType = {
  id: number
  photos: PhotosType
  followed: boolean
  name: string
  status: string
}

type PhotosType = {
  small: null | string
  large: null | string
}

export type UsersLocation = {
  city: string
  country: string
}

export type UsersPageType = {
  users: UserType[]
  pageSize: number,
  totalUsersCount: number,
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}


let initialState: UsersPageType = {
  users: [ ],
  pageSize: 5,
  totalUsersCount: 11,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

console.log(initialState.users);


export type UsersActionTypes =  ReturnType<typeof followSuccess> |
                                ReturnType<typeof unfollowSuccess> |
                                ReturnType<typeof setUsers> |
                                ReturnType<typeof setCurrentPages> |
                                ReturnType<typeof setUsersTotalCount> |
                                ReturnType<typeof toggleIsFetching> |
                                ReturnType<typeof toggleFollowingProgress>



export const usersReducer = (state = initialState, action: UsersActionTypes): UsersPageType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users }; //берем старый стейт и новый(склеиваем)
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }; //берем старый стейт и новый(склеиваем)
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count }; //берем старый стейт и новый(склеиваем)
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }; //берем старый стейт и новый(склеиваем)
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      }; //берем старый стейт и новый(склеиваем)
    }
    default:
      return state;
  }
};

export const followSuccess = (userId: number) => ({ type: FOLLOW, userId } as const);
export const unfollowSuccess = (userId: number) => ({ type: UNFOLLOW, userId } as const);
export const setUsers = (users: UserType[]) => ({ type: SET_USERS, users } as const);
export const setCurrentPages = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const);
export const setUsersTotalCount = (totalUsersCount: number) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
} as const);
export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const);
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
} as const);


// thunk logic
export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));

    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
    });
  };
};

export const follow = (userId: number) => {
  return (dispatch: Dispatch) => {
    toggleFollowingProgress(true, userId);

    userAPI.follow(userId)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  }
}

export const unfollow = (userId: number) => {
  return (dispatch: Dispatch) => {
    toggleFollowingProgress(true, userId);

    userAPI.unfollow(userId)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  }
}

