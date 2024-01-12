import Block from "../../../core/Block";
import { PAGES, navigate } from "../../../core/navigate";
import template from './register.hbs?raw'

interface IProps {}

export class RegisterPage extends Block<IProps> {
    constructor() {
        super({
            handleLogin: (event: Event) => {
                event.preventDefault()
                navigate(PAGES.LOGIN)
            },
            handleRegister: (event: Event) => {
                event.preventDefault()
                navigate(PAGES.CHATS)
            }
        })
    }

    protected render(): string {
        return template
    }
}