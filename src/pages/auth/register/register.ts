import { ErrorText, Field } from "../../../components";
import Block from "../../../core/Block";
import template from './register.hbs?raw'
import * as validators from "../../../utils/validators"
import { PAGES, router } from "../../../core/Router";
import { signup } from "../../../services/auth";

interface IProps { }

type TRef = {
    email: Field
    login: Field
    first_name: Field
    second_name: Field
    phone: Field
    password: Field
    repeat_password: Field
    errorText: ErrorText
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
                router.go(PAGES.LOGIN)
            },
            handleRegister: async (event: Event) => {
                event.preventDefault()
                const email = this.refs.email.value()
                const login = this.refs.login.value()
                // eslint-disable-next-line @typescript-eslint/naming-convention
                const first_name = this.refs.first_name.value()
                // eslint-disable-next-line @typescript-eslint/naming-convention
                const second_name = this.refs.second_name.value()
                const phone = this.refs.phone.value()
                const password = this.refs.password.value()
                // eslint-disable-next-line @typescript-eslint/naming-convention
                const repeat_password = this.refs.repeat_password.value()
                if (!email || !login || !first_name || !second_name || !phone || !password || !repeat_password) return

                try {
                    await signup({
                        email,
                        login,
                        first_name,
                        second_name,
                        phone,
                        password,
                    })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error: any) {
                    this.refs.errorText.setProps({ error: error.message })
                }
            }
        })
    }

    protected render(): string {
        return template
    }
}
