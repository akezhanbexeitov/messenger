import { Field } from "../../../components";
import Block from "../../../core/Block";
import { PAGES, navigate } from "../../../core/navigate";
import template from './change-profile.hbs?raw'

interface IProps { }

type TRef = {
    first_name: Field
    second_name: Field
    display_name: Field
    login: Field
    email: Field
    phone: Field
}

export class ChangeProfilePage extends Block<IProps, TRef> {
    constructor() {
        super({
            handleBackClick: () => { 
                navigate(PAGES.PROFILE)
            },
            handleSaveChangesClick: (event: Event) => {
                event.preventDefault()
                const first_name = this.refs.first_name.value()
                const second_name = this.refs.second_name.value()
                const display_name = this.refs.display_name.value()
                const login = this.refs.login.value()
                const email = this.refs.email.value()
                const phone = this.refs.phone.value()
                console.log({
                    first_name,
                    second_name,
                    display_name,
                    login,
                    email,
                    phone
                })
            }
        })
    }

    protected render(): string {
        return template
    }
}
