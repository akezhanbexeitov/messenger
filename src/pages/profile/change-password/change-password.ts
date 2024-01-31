import { ErrorText, Field, SuccessText } from "../../../components";
import Block from "../../../core/Block";
import template from './change-password.hbs?raw'
import * as validators from "../../../utils/validators"
import { router } from "../../../core/Router";
import { changePassword } from "../../../services/users";

interface IProps { }

type TRef = {
    oldPassword: Field
    newPassword: Field
    repeatNewPassword: Field
    errorText: ErrorText
    successText: SuccessText
}

export class ChangePasswordPage extends Block<IProps, TRef> {
    constructor() {
        super({
            validate: {
                oldPassword: validators.password,
                newPassword: validators.password,
                repeatNewPassword: validators.password
            },
            handleBackClick: () => { 
                router.back()
            },
            handleSaveChangesClick: async () => {
                const oldPassword = this.refs.oldPassword.value()
                const newPassword = this.refs.newPassword.value()
                const repeatNewPassword = this.refs.repeatNewPassword.value()
                if (!oldPassword || !newPassword || !repeatNewPassword) return

                try {
                    await changePassword({
                        oldPassword,
                        newPassword
                    })
                    this.refs.errorText.setProps({ error: undefined})
                    this.refs.successText.setProps({ success: 'Password is set successfully' })
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
