import { ChangeUserProfile, Password } from "../api/types";
import UsersApi from "../api/users";
import { apiHasError } from "../utils/apiHasError";
import { transformUser } from "../utils/apiTransformers";

const usersApi = new UsersApi()

const changeProfile = async (data: ChangeUserProfile) => { 
  const response = await usersApi.profile(data);
  if (apiHasError(response)) {
    throw Error(response.reason)
  }

  const user = transformUser(response)

  window.store.set({ user })
  
  return response
}

const changeAvatar = async (data: FormData) => { 
  const response = await usersApi.avatar(data);
  if (apiHasError(response)) {
    throw Error(response.reason)
  }

  const user = transformUser(response)

  window.store.set({ user })

  return response
}

const changePassword = async (data: Password) => { 
  const response = await usersApi.password(data);
  if (apiHasError(response)) {
    throw Error(response.reason)
  }

  return response
}

const searchUsers = async (query: string) => {
  const response = await usersApi.search(query);

  if (apiHasError(response)) {
    throw Error(response.reason)
  }

  const users = response.map(user => transformUser(user))

  window.store.set({ usersSearched: users })

  return response
}

export {
  changeProfile,
  changeAvatar,
  changePassword,
  searchUsers
}
