import HTTPTransport from "../utils/http";
import { APIError, AddOrRemoveUsers, ChatDTO, CreateChat, UserDTO } from "./types";

enum CHAT {
  BASE = '/chats',
  USERS = '/users',
}

const chatApi = new HTTPTransport(CHAT.BASE);

export default class ChatApi {
  async create(data: CreateChat): Promise<void | APIError> {
    return chatApi.post('/', { data })
  }

  async getChats(): Promise<ChatDTO[] | APIError> {
    return chatApi.get('')
  }

  async addUsers(data: AddOrRemoveUsers): Promise<void | APIError> {
    return chatApi.put(CHAT.USERS, { data })
  }

  async deleteUsers(data: AddOrRemoveUsers): Promise<void | APIError> {
    return chatApi.put(CHAT.USERS, { data })
  }

  async participants(chatId: number): Promise<UserDTO[] | APIError> {
    return chatApi.get(`/${chatId}${CHAT.USERS}`)
  }
}
