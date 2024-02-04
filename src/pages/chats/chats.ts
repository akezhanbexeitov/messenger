import Block from "../../core/Block"
import template from './chats.hbs?raw'
import { PAGES, router } from "../../core/Router"
import { DialogCreateChat } from "../../components/dialog-create-chat"
import { createChat } from "../../services/chat"
import { connect } from "../../utils/connect"
import { initChatPage } from "../../services/initApp"
import { Chat } from "../../types"
import { ChatDTO } from "../../api/types"

interface IProps { 
    chats: Chat[] | []
    activeChat: ChatDTO | null
    handleProfileClick: (event: Event) => void
    handleChatClick: (event: Event) => void
    openDialog: () => void
    closeDialog: () => void
    onSave: () => void
}

type TRefs = {
    createChat: DialogCreateChat
}

export class ChatsPage extends Block<IProps, TRefs> {
    constructor(props: IProps) {
        super({
            ...props,
            handleProfileClick: (event: Event) => {
                event.preventDefault()
                router.go(PAGES.PROFILE)
            },
            openDialog: () => window.store.set({ isOpenDialogChat: true }),
            closeDialog: () => window.store.set({ isOpenDialogChat: false }),
            onSave: async () => {
                const chatTitle = this.refs.createChat.getChatTitle();
                if(!chatTitle) {
                    this.refs.createChat.setError('Название переписки не может быть пустым');
                    return;
                }

                try {
                    await createChat(chatTitle)
                    window.store.set({ isOpenDialogChat: false })
                } catch (error) {
                    this.refs.createChat.setError(error)
                }
            }
        })
        initChatPage()
    }

    protected render(): string {
        return template
    }
}

export default connect(({ chats, activeChat }) => ({ chats, activeChat }))(ChatsPage)
