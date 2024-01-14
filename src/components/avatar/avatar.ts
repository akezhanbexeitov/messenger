import Block from "../../core/Block";
import template from "./avatar.hbs?raw"

interface IProps {}

export class Avatar extends Block<IProps> {
    constructor() {
        super({})
    }

    protected render(): string {
        return template
    }
}
