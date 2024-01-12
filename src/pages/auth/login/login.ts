import Block from "../../../core/Block"
import template from "./login.hbs?raw"
// import * as validators from "../../../utils/validators"

interface IProps {
}

export class LoginPage extends Block<IProps> {
    constructor() {
        super({})
    }

    protected render(): string {
        return template
    }
}
