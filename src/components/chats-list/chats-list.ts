import Block from "../../core/Block";
import template from "./chats-list.hbs?raw"

interface IProps {}

export class ChatsList extends Block<IProps> {
    constructor(props: IProps) {
        super({
            ...props
        })
    }
    
    protected render(): string {
        return template
    }
}
