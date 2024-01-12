import Block from "../../core/Block";
import template from "./link.hbs?raw"

interface IProps {
    page: string
    text: string
}

export class Link extends Block<IProps> {
    constructor(props: IProps) {
        super(props)
    }

    protected render(): string {
        return template
    }
}
