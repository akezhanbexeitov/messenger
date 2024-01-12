import Block from "../../../core/Block";
import template from './change-profile.hbs?raw'

interface IProps {}

export class ChangeProfilePage extends Block<IProps> {
    constructor() {
        super()
    }

    protected render(): string {
        return template
    }
}
