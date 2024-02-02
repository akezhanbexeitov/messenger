import { UserDTO } from "../../api/types";
import Block from "../../core/Block";
import { PAGES, router } from "../../core/Router";
import { logout } from "../../services/auth";
import { initProfilePage } from "../../services/initApp";
import { connect } from "../../utils/connect";
import template from './profile.hbs?raw'

interface IProps {
    user: UserDTO,
    handleChangeProfile: (event: Event) => void,
    handleChangePassword: (event: Event) => void,
    handleLogout: (event: Event) => void,
    handleBackClick: () => void
}

export class ProfilePage extends Block<IProps> {
    constructor(props: IProps) {
        super({
            ...props,
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
        initProfilePage()
    }

    protected render(): string {
        return template
    }
}

export default connect(({ user }) => ({ user }))(ProfilePage)
