import avatar from "../../assets/avatar.png"
import Handlebars from "handlebars"

export { default as ChatsList } from './chats-list.hbs?raw'

Handlebars.registerHelper('chats', () => {
    return [
        {
            id: 1,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            unread: 2,
            time: "12:00"
        },
        {
            id: 2,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            time: "13:45"
        },
        {
            id: 3,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            unread: 1,
            time: "16:00"
        },
        {
            id: 4,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            active: true,
            time: "21:05"
        },
        {
            id: 5,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            unread: 5,
            time: "15:30"
        },
        {
            id: 6,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            unread: 2,
            time: "12:00"
        },
        {
            id: 7,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            time: "13:45"
        },
        {
            id: 8,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            unread: 1,
            time: "16:00"
        },
        {
            id: 9,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            active: true,
            time: "21:05"
        },
        {
            id: 10,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            unread: 5,
            time: "15:30"
        },
        {
            id: 11,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            unread: 2,
            time: "12:00"
        },
        {
            id: 12,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            time: "13:45"
        },
        {
            id: 13,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            unread: 1,
            time: "16:00"
        },
        {
            id: 14,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            active: true,
            time: "21:05"
        },
        {
            id: 15,
            name: "Андрей",
            message: "Здравствуйте",
            avatar: avatar,
            unread: 5,
            time: "15:30"
        }
    ]
})
