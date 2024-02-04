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
    events?: Events
}

export class ChatsCard extends Block<IProps> {
    constructor(props: IProps) {
        const { events, ...data} = props
        super({
            ...props,
            active: window.store.getState().activeChat?.id === data.id,
            events: {
                click: async () => {
                    try {
                        const users = await getChatParticipants(props.id)
                        const { token } = await getChatToken(props.id)
                        const userId = window.store.getState().user?.id
                        ws({ chatId: String(props.id), userId: String(userId), token })
                        window.store.set({ activeChat: { ...data, users: users } })
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
