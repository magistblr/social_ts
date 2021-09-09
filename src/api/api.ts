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


export enum ResultCodesEnum {
  Success = 0,
  Error = 1
}

type ResponseType<D ={}, RC = ResultCodesEnum> = {
  data: D
  message: string[]
  resultCode: RC
}

type MeResponseDataType = {
  id: string
  email: string
  login: string
  isAuth: boolean
}

type LoginResponseDataType = {
  userId: number
}

export type DataType = {
  error: null
  items: UserType[]
  totalCount: number
}

export type AuthDataType = {
  data: MeResponseDataType
  resultCode: number
  messages: [] | string
}
export type LoginType = {
  email: string
  password: string
  rememberMe: boolean
  captcha?: boolean
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
    console.warn('Obsolete method. Please use "profileAPI" object.');
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile(userId: string) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId: string){
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status: string){
    return instance.put(`profile/status`, {status: status})
  }

}


export const authAPI = {
  me() {
    return instance.get<ResponseType<MeResponseDataType>>(`auth/me`)
  },
  login(email: string, password: string, remember: boolean = false) {
    return instance.post<ResponseType<MeResponseDataType>>(`auth/login`, {email, password, remember})
    .then(res => res.data)
  },
  logout() {
    return instance.delete<ResponseType<MeResponseDataType>>(`auth/login`)
    .then(res => res.data)
  }
}

console.log();
