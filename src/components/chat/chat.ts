import Block from "../../core/Block";
import template from './chat.hbs?raw'
import * as validators from '../../utils/validators'
import { Field } from "../index";
import { ChatDTO } from "../../api/types";

interface IProps { 
    activeChat: ChatDTO | null
    validate: {
        message: (value: string) => string | boolean
    }
    handleSendClick: () => void
}

type TRef = {
    message: Field
}

export class Chat extends Block<IProps, TRef> {
    constructor(props: IProps) {
        super({
            ...props,
            validate: {
                message: validators.message
            },
            handleSendClick: () => {
                const message = this.refs.message.value()
                if (!message) return
                console.log({
                    message
                })
            }
        })
    }

    protected render(): string {
        return template
    }
}
