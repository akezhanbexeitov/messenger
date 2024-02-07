import Block from "../../core/Block";
import template from './chat.hbs?raw'
import * as validators from '../../utils/validators'
import { Anchor, Field } from "../index";
import { connect } from "../../utils/connect";
import { debounce } from "../../utils/helpers";
import { searchUsers } from '../../services/users';
import { addUsersToChat, getChatParticipants, removeUsersFromChat } from '../../services/chat';
import { ActiveChat, ChatUser } from '../../types';
import constants from '../../constants';
import { DialogAddUsers } from "../dialog-add-users";
import { DialogDeleteUsers } from "../dialog-delete-users/dialog-delete-users";

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
    companion: boolean | ChatUser
    deleteUsersFromChat: () => void
}

type TRef = {
    message: Field
    dialogAddUsers: DialogAddUsers
    anchorRef: Anchor
    dialogDeleteUsers: DialogDeleteUsers
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
                window.store.set({ isOpenDialogDeleteUsers: true })
                console.log("STORE: ", window.store.getState())
            },
            addUserToChat: async () => {
                try {
                    await addUsersToChat({
                        users: this.refs.dialogAddUsers.getSelectedUsersIDs(),
                        chatId: props.activeChat?.id as number
                    })
                    const users = await getChatParticipants(props.activeChat?.id as number)
                    const prevState = window.store.getState().activeChat
                    window.store.set({
                        activeChat: {
                            ...prevState,
                            users 
                        },
                        isOpenDialogUsers: false,
                        isOpenDialogChatOptions: false
                    })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error: any) {
                    this.refs.dialogAddUsers.setProps(error.message)
                }
            },
            deleteUsersFromChat: async () => {
                try {
                    await removeUsersFromChat({
                        users: this.refs.dialogDeleteUsers.getSelectedUsersIDs(),
                        chatId: props.activeChat?.id as number
                    })
                    const users = await getChatParticipants(props.activeChat?.id as number)
                    const prevState = window.store.getState().activeChat
                    window.store.set({
                        activeChat: {
                            ...prevState,
                            users 
                        },
                        isOpenDialogDeleteUsers: false,
                        isOpenDialogChatOptions: false
                    })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error: any) {
                    this.refs.dialogAddUsers.setProps(error.message)
                }
            },
            onClose: () => window.store.set({ isOpenDialogUsers: false, isOpenDialogDeleteUsers: false }),
            findUsers: debounce(async () => {
                const userName = this.refs.dialogAddUsers.getUserName()
                if(!userName) {
                    this.refs.dialogAddUsers.setError('User name should not be empty');
                    return;
                }

                try {
                    await searchUsers(this.refs.dialogAddUsers.getUserName() as string)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error: any) {
                    this.refs.dialogAddUsers.setError(error.message)
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
