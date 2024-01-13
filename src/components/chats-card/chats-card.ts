import Block, { Events } from "../../core/Block";
import template from "./chats-card.hbs?raw"

interface IProps {
    name: string
    message: string
    time: string
    unread?: number
    active?: boolean
    avatar: string
    onClick?: () => void
    events?: Events
}

export class ChatsCard extends Block<IProps> {
    constructor(props: IProps) {
        super(props)
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
