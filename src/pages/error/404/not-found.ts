import Block from "../../../core/Block";
import template from './not-found.hbs?raw'

interface IProps {}

export class NotFoundPage extends Block<IProps> {
    protected render(): string {
        return template
    }
}
