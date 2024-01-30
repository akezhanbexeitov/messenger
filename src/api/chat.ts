import HTTPTransport from "../utils/http";
import { APIError, ChatDTO, CreateChat } from "./types";

enum CHAT {
  BASE = '/chats',
}

const chatApi = new HTTPTransport(CHAT.BASE);

export default class ChatApi {
  async create(data: CreateChat): Promise<void | APIError> {
    return chatApi.post('/', {data})
  }

  async getChats(): Promise<ChatDTO[] | APIError> {
    return chatApi.get('')
  }
}
