import { LastMessage as LastMessageAPI } from "../src/api/types";

export type AppState = {
  error: string | null,
  user: User | null,
  isOpenDialogChat: boolean,
  isOpenDialogUsers: boolean,
  isOpenDialogChatOptions: boolean,
  chats: Chat[]
  activeChat: ActiveChat
  usersSearched: User[] | null
  socket: WebSocket | null
}

export type ActiveChat = Partial<{
  users: User[] | null,
  id: number,
  title: string,
  avatar: string | null,
  unreadCount: number,
  lastMessage: LastMessageAPI | null
  messages: Message[]
}> | null

export type Message = {
  isMine: boolean;
  chat_id: number
  file: File | null
  id: number
  is_read: boolean
  time: Date | string
  user_id: number
  content: string
  type: "message"
}

export type User = {
  id: number;
  login: string;
  firstName: string;
  secondName: string;
  displayName: string;
  avatar: string;
  phone: string;
  email: string;
};

export type Chat = {
  id: number,
  title: string,
  avatar: Nullable<string>,
  unreadCount: number,
  lastMessage: LastMessage | null
}

type LastMessage = {
  user: User,
  time: Date,
  content: string
}
