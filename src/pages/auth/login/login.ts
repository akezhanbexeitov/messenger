import Block from "../../../core/Block"
import { PAGES, navigate } from "../../../core/navigate"
import template from "./login.hbs?raw"
// import * as validators from "../../../utils/validators"

interface IProps {}

export class LoginPage extends Block<IProps> {
    constructor() {
        super({
            onLogin: (event: Event) => {
                event.preventDefault()
                navigate(PAGES.CHATS)
            }
        })
    }

    protected render(): string {
        return template
    }
}
