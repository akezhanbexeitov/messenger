import { Field } from "../../../components";
import Block from "../../../core/Block";
import { PAGES, navigate } from "../../../core/navigate";
import template from './register.hbs?raw'
import * as validators from "../../../utils/validators"

interface IProps { }

type TRef = {
    email: Field
    login: Field
    first_name: Field
    second_name: Field
    phone: Field
    password: Field
    repeat_password: Field
}

export class RegisterPage extends Block<IProps, TRef> {
    constructor() {
        super({
            validate: {
                email: validators.email,
                login: validators.login,
                first_name: validators.first_name,
                second_name: validators.second_name,
                phone: validators.phone,
                password: validators.password,
                repeat_password: validators.password
            },
            handleLogin: (event: Event) => {
                event.preventDefault()
                navigate(PAGES.LOGIN)
            },
            handleRegister: (event: Event) => {
                event.preventDefault()
                const email = this.refs.email.value()
                const login = this.refs.login.value()
                const first_name = this.refs.first_name.value()
                const second_name = this.refs.second_name.value()
                const phone = this.refs.phone.value()
                const password = this.refs.password.value()
                const repeat_password = this.refs.repeat_password.value()
                if (!email || !login || !first_name || !second_name || !phone || !password || !repeat_password) return
                console.log({
                    email,
                    login,
                    first_name,
                    second_name,
                    phone,
                    password,
                    repeat_password
                })
                navigate(PAGES.CHATS)
            }
        })
    }

    protected render(): string {
        return template
    }
}