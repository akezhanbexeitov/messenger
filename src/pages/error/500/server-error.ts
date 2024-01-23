import Block from "../../../core/Block";
import template from './server-error.hbs?raw'

interface IProps {}

export class InternalServerErrorPage extends Block<IProps> {
    protected render(): string {
        return template
    }
}
