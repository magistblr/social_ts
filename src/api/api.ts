import { Users, UsersType } from './../components/Users/Users';
import axios from "axios";
import { UserType } from "../redux/usersReducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',    //автоматом приклеивается к адресу в запросе(важно писать URL с большой буквы)
  headers: {
    "API-KEY": "efc8efc6-9f92-405a-8cef-450d684727e8"
  }
})

export type DataType = {
  error: null
  items: UserType[]
  totalCount: number
}
export type AuthDataType = {
  data: DataGetType
  resultCode: number
  messages: [] | string
}

export type DataGetType = {
  id: string
  email: string
  login: string
}


export const userAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance.get<DataType>(`users?page=${currentPage}&count=${pageSize}`)       //запрос
      .then(response => {
        return response.data;
      });
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`)       //запрос
  },

  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)       //запрос
  },
  getProfile(userId: string) {
    return instance.get(`profile/${userId}`)
  }
}

export const authAPI = {
  me() {
    return instance.get<AuthDataType>(`auth/me`)
  }
}

console.log();
