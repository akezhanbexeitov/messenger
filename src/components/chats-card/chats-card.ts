import Block from "../../core/Block";
import template from "./chats-card.hbs?raw"

interface IProps {
    name: string
    message: string
    time: string
    unread: number
    avatar: string
}

export class ChatsCard extends Block<IProps> {
    constructor(props: IProps) {
        super(props)
    }

    protected render(): string {
        return template
    }
}
