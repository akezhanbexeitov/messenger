import ChatApi from "../api/chat";
import { Message } from "../types";
import { apiHasError } from "../utils/apiHasError";
import { transformChats, transformUser } from "../utils/apiTransformers";
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from "moment-timezone"

const chatApi = new ChatApi();

const getChats = async () => {
    const responseChat = await chatApi.getChats();
    if(apiHasError(responseChat)) {
        throw Error(responseChat.reason)
    }

    return transformChats(responseChat);
}

const createChat = async (title: string) => {
    const response = await chatApi.create({ title });
    if(apiHasError(response)) {
        throw Error(response.reason)
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

const removeUsersFromChat = async ({
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

    const ping = () => socket.send(JSON.stringify({ type: "ping" }))

    let pingIntervalId: NodeJS.Timeout;

    socket.onopen = () => {
        console.log('[open] Connection established');

        socket.send(JSON.stringify({
            content: '0',
            type: 'get old',
        }));

        pingIntervalId = setInterval(ping, 5000)
    };

    socket.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            const prevState = window.store.getState().activeChat;

            if (data.type === "pong" || data.type === "user connected") {
                return
            }

            if (Array.isArray(data)) {
                data.forEach((message: Message) => {
                    const date = new Date(message.time);
                    const dateInAstana = moment(date).tz("Asia/Almaty");
                    const hours = dateInAstana.format('HH');
                    const minutes = dateInAstana.format('mm');

                    message.time = `${hours}:${minutes}`;
                    
                    if (String(message.user_id) === userId) {
                        message.isMine = true;
                    }
                })
                window.store.set({
                    activeChat: {
                        ...prevState,
                        messages: [
                            ...data,
                            ...(prevState?.messages || [])
                        ],
                    }
                })
                console.log("STORE: ", window.store.getState())
                return
            }

            if (String(data.user_id) === userId) {
                data.isMine = true
            }

            const date = new Date(data.time);
            const dateInAstana = moment(date).tz("Asia/Almaty");
            const hours = dateInAstana.format('HH');
            const minutes = dateInAstana.format('mm');
            data.time = `${hours}:${minutes}`;

            window.store.set({
                activeChat: {
                    ...prevState,
                    messages: [
                        data,
                        ...(prevState?.messages || [])
                    ],
                }
            })
            console.log("STORE: ", window.store.getState())
        } catch (error) { 
            console.log(error)
        }
    };

    socket.onclose = (event) => {
        if (event.wasClean) {
            console.log(`[close] Connection closed cleanly`);
        } else {
            console.log('[close] Connection died');
        }

        clearInterval(pingIntervalId)

        console.log(`Code: ${event.code} | Reason: ${event.reason}`);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    socket.onerror = function(error: any) {
        console.log('[error]', error.message);
    };

    return socket
}

export {
    createChat,
    getChats,
    addUsersToChat,
    removeUsersFromChat,
    getChatParticipants,    
    getChatToken,
    ws,
}
