import Block from "../../core/Block";
import template from "./title.hbs?raw"

interface IProps {
    title: string
}

export class Title extends Block<IProps> {
    constructor(props: IProps) {
        super({
            ...props
        })
    }

    protected render(): string {
        return template
    }
}
