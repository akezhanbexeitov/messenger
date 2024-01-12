import Block from "../../../core/Block";
import template from './chat.hbs?raw'

interface IProps {}

export class ChatPage extends Block<IProps> {
    constructor() {
        super()
    }

    protected render(): string {
        return template
    }
}
