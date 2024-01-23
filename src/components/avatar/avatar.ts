import Block from "../../core/Block";
import template from "./avatar.hbs?raw"

interface IProps {}

export class Avatar extends Block<IProps> {
    protected render(): string {
        return template
    }
}
