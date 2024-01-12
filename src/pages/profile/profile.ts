import Block from "../../core/Block";
import template from './profile.hbs?raw'

interface IProps {}

export class ProfilePage extends Block<IProps> {
    constructor() {
        super()
    }

    protected render(): string {
        return template
    }
}
