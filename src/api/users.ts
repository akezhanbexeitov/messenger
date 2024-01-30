import HTTPTransport from "../utils/http";
import { APIError, Avatar, CreateUser, Password, UserDTO } from "./types";

enum USERS {
  BASE = '/users',
  PROFILE = '/profile',
  PASSWORD = '/password',
  AVATAR = USERS.PROFILE + '/avatar',
}

const usersApi = new HTTPTransport(USERS.BASE);

export default class UsersApi {
  async profile(data: CreateUser): Promise<UserDTO | APIError> {
    return usersApi.put(USERS.PROFILE, { data })
  }

  async avatar(data: Avatar): Promise<UserDTO | APIError> {
    return usersApi.put(USERS.AVATAR, { data })
  }

  async password(data: Password): Promise<void | APIError> {
    return usersApi.put(USERS.PASSWORD, { data })
  }
}