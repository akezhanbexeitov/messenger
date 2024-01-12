import Block from "../../../core/Block"
import template from "./login.hbs?raw"
// import * as validators from "../../../utils/validators"

interface IProps {}

export class LoginPage extends Block<IProps> {
    constructor() {
        super({
            onLogin: (event: Event) => {
                event.preventDefault()
                console.log('LOGIN EVENT FIRED')
            }
        })
    }

    protected render(): string {
        return template
    }
}
