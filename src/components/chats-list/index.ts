import avatar from "../../assets/avatar.png"
import Handlebars from "handlebars"

export { default as ChatsList } from './chats-list.hbs?raw'

Handlebars.registerHelper('chats', () => {
    return [
        {
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            unread: 2,
            time: "12:00"
        },
        {
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            time: "13:45"
        },
        {
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            unread: 1,
            time: "16:00"
        },
        {
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            active: true,
            time: "21:05"
        },
        {
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            unread: 5,
            time: "15:30"
        }
    ]
})
