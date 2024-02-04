import Block from "../../core/Block";
import template from './chat.hbs?raw'
import * as validators from '../../utils/validators'
import { Field } from "../index";
import { ChatDTO } from "../../api/types";
import { connect } from "../../utils/connect";

interface IProps { 
    isOpenDialogChatOptions: boolean
    activeChat: ChatDTO | null
    validate: {
        message: (value: string) => string | boolean
    }
    handleSendClick: () => void
    handleChatOptionsToggle: () => void
    handleAddMember: () => void
    handleDeleteMember: () => void
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
            handleChatOptionsToggle: () => {
                window.store.set({ isOpenDialogChatOptions: !this.props.isOpenDialogChatOptions })
            },
            handleAddMember: () => {
                window.store.set({ isOpenDialogUsers: true })
            },
            handleDeleteMember: () => {
                console.log('handleDeleteMember')
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

export default connect(({ isOpenDialogChatOptions }) => ({ isOpenDialogChatOptions }))(Chat)
