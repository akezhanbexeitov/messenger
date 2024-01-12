import Block from "../../../core/Block";
import template from './register.hbs?raw'

interface IProps {}

export class RegisterPage extends Block<IProps> {
    constructor() {
        super()
    }

    protected render(): string {
        return template
    }
}