export type APIError = {
    reason: string;
};

export type SignUpResponse = {
    id: number
}

export type UserDTO = {
    id: number;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    avatar: string;
    phone: string;
    email: string;
};

export type ChatUserDTO = Omit<UserDTO, 'phone' | 'email'> & { role: 'admin' | 'regular' }

export type Password = {
    oldPassword: string
    newPassword: string
}

export type CreateUser = Omit<UserDTO, 'avatar' | 'display_name' | 'id'>  & {
    password: string
}

export type ChangeUserProfile = {
    login?: string;
    first_name?: string;
    second_name?: string;
    display_name?: string;
    phone?: string;
    email?: string;
}

export type CreateChat = {
    title: string
}

export type AddOrRemoveUsers = {
    users: number[]
    chatId: number
}

export type LoginRequestData = {
    login: string,
    password: string
}

export type LastMessage = {
    user: UserDTO,
    time: Date,
    content: string
}

export type ChatDTO = {
    id: number,
    title: string,
    avatar: string | null,
    unread_count: number,
    last_message: LastMessage | null
}

export type ChatToken = { token: string }
