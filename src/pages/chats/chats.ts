import Block from "../../core/Block"
import template from './chats.hbs?raw'
import avatar from "../../assets/avatar.png"
import { PAGES, router } from "../../core/Router"

interface IProps {}

export class ChatsPage extends Block<IProps> {
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
            }
        })
    }

    protected render(): string {
        return template
    }
}
