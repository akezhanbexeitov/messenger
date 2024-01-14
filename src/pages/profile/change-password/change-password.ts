import { Field } from "../../../components";
import Block from "../../../core/Block";
import { PAGES, navigate } from "../../../core/navigate";
import template from './change-password.hbs?raw'

interface IProps { }

type TRef = {
    oldPassword: Field
    newPassword: Field
    repeatNewPassword: Field
}

export class ChangePasswordPage extends Block<IProps, TRef> {
    constructor() {
        super({
            handleBackClick: () => { 
                navigate(PAGES.PROFILE)
            },
            handleSaveChangesClick: () => {
                const oldPassword = this.refs.oldPassword.value()
                const newPassword = this.refs.newPassword.value()
                const repeatNewPassword = this.refs.repeatNewPassword.value()
                console.log({
                    oldPassword,
                    newPassword,
                    repeatNewPassword
                })
            }
        })
    }

    protected render(): string {
        return template
    }
}
