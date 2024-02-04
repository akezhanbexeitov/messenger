import { DialogFindUsers } from './../dialog-find-users/dialog-find-users';
import Block from "../../core/Block";
import template from './chat.hbs?raw'
import * as validators from '../../utils/validators'
import { Field } from "../index";
import { ChatDTO } from "../../api/types";
import { connect } from "../../utils/connect";
import { debounce } from "../../utils/helpers";
import { searchUsers } from '../../services/users';

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
    addUserToChat: () => void
    onClose: () => void
    findUsers: () => void
}

type TRef = {
    message: Field
    dialogFindUsers: DialogFindUsers
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
            addUserToChat: () => {
                console.log("User added to the chat")
            },
            onClose: () => window.store.set({ isOpenDialogUsers: false }),
            findUsers: debounce(async () => {
                console.log("TYPING...")
                const userName = this.refs.dialogFindUsers.getUserName()
                if(!userName) {
                    this.refs.dialogFindUsers.setError('User name should not be empty');
                    return;
                }

                try {
                    await searchUsers(this.refs.dialogFindUsers.getUserName() as string)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error: any) {
                    this.refs.dialogFindUsers.setError(error.message)
                }
            }),
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
