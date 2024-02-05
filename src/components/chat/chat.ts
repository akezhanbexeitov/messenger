import { DialogFindUsers } from './../dialog-find-users/dialog-find-users';
import Block from "../../core/Block";
import template from './chat.hbs?raw'
import * as validators from '../../utils/validators'
import { Anchor, Field } from "../index";
import { connect } from "../../utils/connect";
import { debounce } from "../../utils/helpers";
import { searchUsers } from '../../services/users';
import { addUsersToChat } from '../../services/chat';
import { ActiveChat, User } from '../../types';
import constants from '../../constants';

interface IProps { 
    isOpenDialogChatOptions: boolean
    activeChat: ActiveChat
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
    companion: boolean | User
}

type TRef = {
    message: Field
    dialogFindUsers: DialogFindUsers
    anchorRef: Anchor
}

export class Chat extends Block<IProps, TRef> {
    constructor(props: IProps) {
        super({
            ...props,
            validate: {
                message: validators.message
            },
            companion: (() => {
                const companion = props.activeChat?.users?.find(user => user.id !== window.store.getState().user?.id)
                if (!companion) return false
                const result = {
                    ...companion,
                    avatar: constants.HOST + '/resources' + companion.avatar
                }
                return result
            })(),
            handleChatOptionsToggle: () => {
                window.store.set({ isOpenDialogChatOptions: !this.props.isOpenDialogChatOptions })
            },
            handleAddMember: () => {
                window.store.set({ isOpenDialogUsers: true })
            },
            handleDeleteMember: () => {
                console.log('handleDeleteMember')
            },
            addUserToChat: async () => {
                try {
                    await addUsersToChat({
                        users: [parseInt(this.refs.dialogFindUsers.getSelectedUserId())],
                        chatId: props.activeChat?.id as number
                    })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error: any) {
                    this.refs.dialogFindUsers.setProps(error.message)
                }
                console.log("User added to the chat")
                console.log(this.refs.dialogFindUsers.getSelectedUserId())
            },
            onClose: () => window.store.set({ isOpenDialogUsers: false }),
            findUsers: debounce(async () => {
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

                const socket = window.store.getState().socket

                socket?.send(JSON.stringify({
                    type: "message",
                    content: message
                }))
            }
        })
    }

    componentDidMount() {
        if (!this.refs.anchorRef.element) return
        const anchor = this.refs.anchorRef.element
        anchor.scrollIntoView()
    }

    protected render(): string {
        return template
    }
}

export default connect(({ isOpenDialogChatOptions, activeChat }) => ({ isOpenDialogChatOptions, activeChat }))(Chat)
