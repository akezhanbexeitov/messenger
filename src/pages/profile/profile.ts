import Block from "../../core/Block";
import { PAGES, router } from "../../core/Router";
import template from './profile.hbs?raw'

interface IProps {}

export class ProfilePage extends Block<IProps> {
    constructor() {
        super({
            handleChangeProfile: (event: Event) => {
                event.preventDefault()
                router.go(PAGES.CHANGE_PROFILE)
            },
            handleChangePassword: (event: Event) => {
                event.preventDefault()
                router.go(PAGES.CHANGE_PASSWORD)
            },
            handleLogout: (event: Event) => {
                event.preventDefault()
                router.go(PAGES.LOGIN)
            },
            handleBackClick: () => { 
                router.go(PAGES.CHATS)
            }
        })
    }

    protected render(): string {
        return template
    }
}
