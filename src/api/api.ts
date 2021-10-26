import axios from "axios";
import { UserType } from "../redux/usersReducer";
import { ProfileType } from './../redux/profileReducer';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',    //автоматом приклеивается к адресу в запросе(важно писать URL с большой буквы)
  headers: {
    "API-KEY": "b272fdcf-142a-4a7e-8222-fde46b2c383b"
  }
})


export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
  Captcha = 10
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
  },
  updateProfile(profile: ProfileType){
    return instance.put(`profile`, profile)
  },
  savePhoto(photoFile: string){
    const formData = new FormData();
    formData.append("image", photoFile)
    return instance.put(`profile/photo`, formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
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

