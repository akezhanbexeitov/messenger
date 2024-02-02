import Block, { Events } from "../../core/Block";
import template from "./chats-card.hbs?raw"

interface IProps {
    avatar: string
    id: number
    lastMessage: string
    title: string
    unreadCount: number
    name?: string
    time?: string
    active?: boolean
    onClick: () => void
    events?: Events
}

export class ChatsCard extends Block<IProps> {
    constructor(props: IProps) {
        super({
            ...props
        })
    }

    protected init(): void {
        if (this.props.onClick) {
            this.props.events = {
                click: this.props.onClick,
            };
        }
    }

    protected render(): string {
        return template
    }
}
