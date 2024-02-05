import { LastMessage } from "../../api/types";
import Block, { Events } from "../../core/Block";
import { getChatParticipants, getChatToken, ws } from "../../services/chat";
import template from "./chats-card.hbs?raw"

interface IProps {
    id: number,
    title: string,
    avatar: string | null,
    unreadCount: number,
    lastMessage: LastMessage | null
    active: boolean
    lastMessageTime: () => string | void
    events?: Events
}

export class ChatsCard extends Block<IProps> {
    constructor(props: IProps) {
        const { events, ...data} = props
        super({
            ...props,
            active: window.store.getState().activeChat?.id === data.id,
            lastMessageTime: () => {
                if (!props.lastMessage) return

                const date = new Date(props.lastMessage.time)

                let month = (date.getMonth() + 1).toString()
                let day = date.getDate().toString()

                month = month.padStart(2, '0')
                day = day.padStart(2, '0')

                return `${day}.${month}`
            },
            events: {
                click: async () => {
                    try {
                        const users = await getChatParticipants(props.id)
                        const { token } = await getChatToken(props.id)
                        const userId = window.store.getState().user?.id
                        const socket = ws({ chatId: String(props.id), userId: String(userId), token })
                        window.store.set({ socket, activeChat: { ...data, users: users } })
                        console.log("STORE: ", window.store.getState())
                    } catch (error) {
                        console.log(error)
                    }
                }
            }
        })
    }

    protected render(): string {
        return template
    }
}
