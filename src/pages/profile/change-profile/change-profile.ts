import Block from "../../../core/Block";
import { PAGES, navigate } from "../../../core/navigate";
import template from './change-profile.hbs?raw'

interface IProps {}

export class ChangeProfilePage extends Block<IProps> {
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
