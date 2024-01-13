import Block, { Events } from "../../core/Block";
import template from "./link.hbs?raw"

interface IProps {
    text: string
    onClick?: () => void
    events?: Events
}

export class Link extends Block<IProps> {
    constructor(props: IProps) {
        super(props)
    }

    protected init(): void {
        if (this.props.onClick) {
            this.props.events = {
                click: this.props.onClick
            }
        }
    }

    protected render(): string {
        return template
    }
}
