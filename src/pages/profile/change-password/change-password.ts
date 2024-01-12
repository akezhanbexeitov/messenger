import Block from "../../../core/Block";
import template from './change-password.hbs?raw'

interface IProps {}

export class ChangePasswordPage extends Block<IProps> {
    constructor() {
        super()
    }

    protected render(): string {
        return template
    }
}
