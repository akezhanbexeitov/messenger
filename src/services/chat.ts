import ChatApi from "../api/chat";
import { apiHasError } from "../utils/apiHasError";
import { transformChats } from "../utils/apiTransformers";

const chatApi = new ChatApi();

const getChats = async () => {
    const responseChat = await chatApi.getChats();
    if(apiHasError(responseChat)) {
        throw Error(responseChat.reason)
    }

    return transformChats(responseChat);
}

const createChat = async (title: string) => {
    const response = await chatApi.create({title});
    if(apiHasError(response)) {
        throw Error(response.reason)
    }

    const responseChat = await chatApi.getChats();
    if(apiHasError(responseChat)) {
        throw Error(responseChat.reason)
    }

    const chats = await getChats();
    window.store.set({ chats })
}

interface IAddOrRemoveUsersToChat { 
    users: number[]
    chatId: number
}

const addUsersToChat = async ({
    users,
    chatId
}: IAddOrRemoveUsersToChat) => { 
    const response = await chatApi.addUsers({ users, chatId });
    if(apiHasError(response)) {
        throw Error(response.reason)
    }
}

const removeUsersToChat = async ({
    users,
    chatId
}: IAddOrRemoveUsersToChat) => { 
    const response = await chatApi.deleteUsers({ users, chatId });
    if(apiHasError(response)) {
        throw Error(response.reason)
    }
}

export {
    createChat,
    getChats,
    addUsersToChat,
    removeUsersToChat,
    
}
