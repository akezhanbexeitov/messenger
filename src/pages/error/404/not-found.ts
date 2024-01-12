import Block from "../../../core/Block";
import template from './not-found.hbs?raw'

interface IProps {}

export class NotFoundPage extends Block<IProps> {
    constructor() {
        super()
    }

    protected render(): string {
        return template
    }
}
