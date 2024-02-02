import Block from "../../core/Block"
import template from './chats.hbs?raw'
import avatar from "../../assets/avatar.png"
import { PAGES, router } from "../../core/Router"
import { DialogCreateChat } from "../../components/dialog-create-chat"
import { createChat } from "../../services/chat"

interface IProps { }

type TRefs = {
    createChat: DialogCreateChat
}

export class ChatsPage extends Block<IProps, TRefs> {
    constructor() {
        super({
            chats: [
                {
                    name: "Андрей",
                    message: "Здравствуйте",
                    time: "11:00",
                    unread: 1,
                    avatar: avatar
                },
                {
                    name: "Акежан",
                    message: "Добрый вечер",
                    time: "12:00",
                    unread: 2,
                    avatar: avatar
                },
                {
                    name: "Максим",
                    message: "Привет",
                    time: "13:00",
                    active: true,
                    avatar: avatar
                },
                {
                    name: "Андрей",
                    message: "Здравствуйте",
                    time: "11:00",
                    unread: 1,
                    avatar: avatar
                },
                {
                    name: "Акежан",
                    message: "Добрый вечер",
                    time: "12:00",
                    unread: 2,
                    avatar: avatar
                },
                {
                    name: "Максим",
                    message: "Привет",
                    time: "13:00",
                    avatar: avatar
                },
                {
                    name: "Андрей",
                    message: "Здравствуйте",
                    time: "11:00",
                    unread: 1,
                    avatar: avatar
                },
                {
                    name: "Акежан",
                    message: "Добрый вечер",
                    time: "12:00",
                    unread: 2,
                    avatar: avatar
                },
                {
                    name: "Максим",
                    message: "Привет",
                    time: "13:00",
                    avatar: avatar
                },
            ],
            handleProfileClick: (event: Event) => {
                event.preventDefault()
                router.go(PAGES.PROFILE)
            },
            handleChatClick: () => {
                router.go(PAGES.CHAT)
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
    }

    protected render(): string {
        return template
    }
}
