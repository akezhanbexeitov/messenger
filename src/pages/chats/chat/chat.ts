import Block from "../../../core/Block";
import template from './chat.hbs?raw'
import avatar from "../../../assets/avatar.png"
import * as validators from '../../../utils/validators'
import { Field } from "../../../components/index";
import { PAGES, router } from "../../../core/Router";

interface IProps { }

type TRef = {
    message: Field
}

export class ChatPage extends Block<IProps, TRef> {
    constructor() {
        super({
            validate: {
                message: validators.message
            },
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
