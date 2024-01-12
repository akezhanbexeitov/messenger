import Block from "../../core/Block";
import template from "./link.hbs?raw"

interface IProps {}

export class Link extends Block<IProps> {
    constructor() {
        super()
    }

    protected render(): string {
        return template
    }
}
