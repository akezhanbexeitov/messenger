import { Field } from "../../../components"
import Block from "../../../core/Block"
import template from "./login.hbs?raw"
import * as validators from "../../../utils/validators"
import { PAGES, router } from "../../../core/Router"

interface IProps { }

type TRef = {
    login: Field
    password: Field
}

export class LoginPage extends Block<IProps, TRef> {
    constructor() {
        super({
            validate: {
                login: validators.login,
                password: validators.password
            },
            handleLogin: (event: Event) => {
                event.preventDefault()
                const login = this.refs.login.value()
                const password = this.refs.password.value()
                if (!login || !password) return
                console.log({
                    login,
                    password
                })
                router.go(PAGES.CHATS)
            },
            handleRegister: (event: Event) => {
                event.preventDefault()
                router.go(PAGES.REGISTER)
            },
        })
    }

    protected render(): string {
        return template
    }
}
