import { Avatar, CreateUser, Password } from "../api/types";
import UsersApi from "../api/users";
import { apiHasError } from "../utils/apiHasError";

const usersApi = new UsersApi()

const changeProfile = async (data: CreateUser) => { 
  const response = await usersApi.profile(data);
  if (apiHasError(response)) {
    throw Error(response.reason)
  }

  return response
}

const changeAvatar = async (data: Avatar) => { 
  const response = await usersApi.avatar(data);
  if (apiHasError(response)) {
    throw Error(response.reason)
  }

  return response
}

const changePassword = async (data: Password) => { 
  const response = await usersApi.password(data);
  if (apiHasError(response)) {
    throw Error(response.reason)
  }

  return response
}

export {
  changeProfile,
  changeAvatar,
  changePassword
}