import Block from "../../core/Block";
import template from './chats.hbs?raw'

interface IProps {}

export class ChatsPage extends Block<IProps> {
    constructor() {
        super()
    }

    protected render(): string {
        return template
    }
}
