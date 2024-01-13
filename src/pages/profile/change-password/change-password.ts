import Block from "../../../core/Block";
import { PAGES, navigate } from "../../../core/navigate";
import template from './change-password.hbs?raw'

interface IProps {}

export class ChangePasswordPage extends Block<IProps> {
    constructor() {
        super({
            handleBackClick: () => { 
                navigate(PAGES.PROFILE)
            }
        })
    }

    protected render(): string {
        return template
    }
}
