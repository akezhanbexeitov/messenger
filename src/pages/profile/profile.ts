import Block from "../../core/Block";
import { PAGES, router } from "../../core/Router";
import { logout } from "../../services/auth";
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
            handleLogout: async (event: Event) => {
                event.preventDefault()
                try {
                    await logout()
                    router.go(PAGES.LOGIN)
                } catch (error) {
                    console.log(error)
                }
            },
            handleBackClick: () => { 
                router.back()
            }
        })
    }

    protected render(): string {
        return template
    }
}
