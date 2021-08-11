import axios from "axios";
import { UserType } from "../redux/usersReducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',    //автоматом приклеивается к адресу в запросе(важно писать URL с большой буквы)
  headers: {
    "API-KEY": "bb8b9c32-3a16-4cd6-8ee3-c45b813c19f5"
  }
})

export type DataType = {
  error: null
  items: any
  totalCount: number
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
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`)
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}

console.log();
