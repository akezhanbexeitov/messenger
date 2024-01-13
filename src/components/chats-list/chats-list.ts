import Block from "../../core/Block";
import template from "./chats-list.hbs?raw"

interface IProps {}

export class ChatsList extends Block<IProps> {
    protected render(): string {
        return template
    }
}
