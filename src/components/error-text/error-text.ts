import Block from "../../core/Block"
import template from "./error-text.hbs?raw"

interface IProps {}

export class ErrorText extends Block<IProps> {
    protected render(): string {
        return template
    }
}
