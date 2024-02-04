import ChatApi from "../api/chat";
import { apiHasError } from "../utils/apiHasError";
import { transformChats, transformUser } from "../utils/apiTransformers";

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

const getChatParticipants = async (chatId: number) => {
    const response = await chatApi.participants(chatId);
    if(apiHasError(response)) {
        throw Error(response.reason)
    }

    const users = response.map(user => transformUser(user))

    return users
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

const getChatToken = async (chatId: number) => {
    const response = await chatApi.token(chatId);
    if(apiHasError(response)) {
        throw Error(response.reason)
    }
    return response
}

type WS = {
    chatId: string
    userId: string
    token: string
}

const ws = ({ chatId, userId, token }: WS) => {
    const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);

    socket.onopen = () => {
        console.log('[open] Connection established');

        socket.send(JSON.stringify({
            content: '0',
            type: 'get old',
        }));
    };

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const prevState = window.store.getState().activeChat;
        window.store.set({ activeChat: { messages: [...data, ...(prevState?.messages || [])], ...prevState } })
        console.log("STORE: ", window.store.getState())
    };

    socket.onclose = (event) => {
        if (event.wasClean) {
            console.log(`[close] Connection closed cleanly`);
        } else {
            console.log('[close] Connection died');
        }

        console.log(`Code: ${event.code} | Reason: ${event.reason}`);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    socket.onerror = function(error: any) {
        console.log('[error]', error.message);
    };
}

export {
    createChat,
    getChats,
    addUsersToChat,
    removeUsersToChat,
    getChatParticipants,    
    getChatToken,
    ws,
}
