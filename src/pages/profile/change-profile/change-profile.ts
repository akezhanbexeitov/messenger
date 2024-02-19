import { UserDTO } from './../../../api/types';
import { ErrorText, Field, SuccessText } from "../../../components";
import Block from "../../../core/Block";
import template from './change-profile.hbs?raw'
import * as validators from "../../../utils/validators"
import { router } from "../../../core/Router";
import { connect } from "../../../utils/connect";
import { changeProfile } from '../../../services/users';

interface IProps { 
    user: UserDTO
    validate: Record<string, (value: string) => string | boolean | undefined>
    handleBackClick: () => void
    handleSaveChangesClick: (event: Event) => void
}

type TRef = {
    first_name: Field
    second_name: Field
    display_name: Field
    login: Field
    email: Field
    phone: Field
    errorText: ErrorText
    successText: SuccessText
}

export class ChangeProfilePage extends Block<IProps, TRef> {
    constructor(props: IProps) {
        super({
            ...props,
            validate: {
                first_name: validators.first_name,
                second_name: validators.second_name,
                display_name: validators.first_name,
                login: validators.login,
                email: validators.email,
                phone: validators.phone
            },
            handleBackClick: () => { 
                router.back()
            },
            handleSaveChangesClick: async (event: Event) => {
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

                try {
                    await changeProfile({
                        first_name,
                        second_name,
                        display_name,
                        login,
                        email,
                        phone
                    })
                    this.refs.errorText.setProps({ error: undefined })
                    this.refs.successText.setProps({ success: 'Profile has been changed successfully' })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error: any) {
                    this.refs.successText.setProps({ success: undefined })
                    this.refs.errorText.setProps({ error: error.message })
                }
            }
        })
    }

    protected render(): string {
        return template
    }
}

export default connect(({ user }) => ({ user }))(ChangeProfilePage)
