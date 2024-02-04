import { LastMessage } from "../../api/types";
import Block, { Events } from "../../core/Block";
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
                click: () => {
                    window.store.set({ activeChat: { ...data } })
                    console.log("STORE: ", window.store.getState())
                }
            }
        })
    }

    protected render(): string {
        return template
    }
}
