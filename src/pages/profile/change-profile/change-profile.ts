import { Field } from "../../../components";
import Block from "../../../core/Block";
import { PAGES, navigate } from "../../../core/navigate";
import template from './change-profile.hbs?raw'
import * as validators from "../../../utils/validators"

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
            validate: {
                first_name: validators.first_name,
                second_name: validators.second_name,
                display_name: validators.first_name,
                login: validators.login,
                email: validators.email,
                phone: validators.phone
            },
            handleBackClick: () => { 
                navigate(PAGES.PROFILE)
            },
            handleSaveChangesClick: (event: Event) => {
                event.preventDefault()
                // eslint-disable-next-line @typescript-eslint/naming-convention
                const first_name = this.refs.first_name.value()
                // eslint-disable-next-line @typescript-eslint/naming-convention
                const second_name = this.refs.second_name.value()
                // eslint-disable-next-line @typescript-eslint/naming-convention
                const display_name = this.refs.display_name.value()
                const login = this.refs.login.value()
                const email = this.refs.email.value()
                const phone = this.refs.phone.value()
                if (!first_name || !second_name || !display_name || !login || !email || !phone) return
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
